import hamburgerNavigation from "./hamburgerNavigation.js";

export default async function myWorkDetail() {
  const hamburgerNavigationBtn = document.getElementById("hamburgerNavigation");
  const mobileNavigationModal = document.getElementById(
    "mobileNavigationModal"
  );
  const mobileNavigationCloseBtn = document.getElementById(
    "mobileNavigationCloseBtn"
  );
  hamburgerNavigation(
    hamburgerNavigationBtn,
    mobileNavigationModal,
    mobileNavigationCloseBtn
  );

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const informationContainer = document.getElementById(
    "work-detail-information-container"
  );
  const breadcrumbNav = document.getElementById("breadcrumb-nav");

  try {
    // Fetch JSON data from projects.json file
    const response = await fetch("../data/projects.json");
    const jsonData = await response.json();

    // Find the object with matching ID
    const project = jsonData.find((item) => item.id === id);

    // Log the project data
    if (project) {
      console.log("Project found:", project);

      let htmlString2 = "";
      // Loop over project.images and add <img> tags dynamically inside the imageContainer div
      project.images.forEach((image) => {
        htmlString2 += `<img src="${image}" />`;
      });

      let htmlString3 = "";
      // Loop over project.images and add <img> tags dynamically inside the imageContainer div
      project.videos.forEach((video) => {
        htmlString3 += `<iframe src="${video}" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`;
      });

      let htmlString = `
      <div id="work-detail-sub-container">
        <div id="work-detail-title-container">
        <h1>${project.title}</h1>
        <p>${project.tag}</p>
        </div>
        <p id="work-detail-description">${project.description}</p>
      </div>
      <div id="work-detail-video-container">${htmlString3}</div>
      <div id="work-detail-image-container">${htmlString2}</div>
      `;

      informationContainer.innerHTML = htmlString;

      console.log(breadcrumbNav);
      let crumb = `<p>${project.title}</p>`;
      breadcrumbNav.insertAdjacentHTML("beforeend", crumb);
    } else {
      console.log("Project not found for ID:", id);
      // Handle the case when no project is found for the given ID
    }
  } catch (error) {
    console.error("Error fetching JSON data:", error);
    // Handle errors related to fetching JSON data
  }
}
