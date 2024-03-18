import hamburgerNavigation from "./hamburgerNavigation.js";

export default function myWork() {
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

  let originalProjects = []; // Store original projects

  async function fetchProjects() {
    try {
      const response = await fetch("../data/projects.json");
      const projects = await response.json();
      originalProjects = [...projects]; // Copy projects to originalProjects array
      return projects;
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  }

  function createProjectElement(project) {
    const wrap = document.createElement("div");
    wrap.classList.add("wrap");
    wrap.style.backgroundImage = `url(${project.coverImage})`;

    const inner = document.createElement("div");
    inner.classList.add("inner");
    inner.innerHTML = `
      <div class="project-title-container">
        <p class="project-title">${project.title}</p>
      </div>
      <div class="inner-sub-container">
        <p>${project.tag}</p>
        <div class="project-more-button" data-project-id="${project.id}">
          <span class="material-symbols-outlined"> south_east </span>
        </div>
      </div>
    `;

    wrap.appendChild(inner);

    return wrap;
  }

  function projectHover(projects) {
    const projectContainer = document.getElementById("project-container");

    projects.forEach((project) => {
      const projectElement = createProjectElement(project);
      projectContainer.appendChild(projectElement);
    });

    const buttonEls = document.querySelectorAll(".wrap");
    const textEls = document.querySelectorAll(".inner");
    const moreButtons = document.querySelectorAll(".project-more-button");

    moreButtons.forEach((button) => {
      const projectId = button.getAttribute("data-project-id");
      button.addEventListener("click", (e) => {
        window.location.href = "work-detail.html?id=" + projectId;
      });
    });

    function animateButton(buttonEl, scale, duration, elasticity) {
      anime.remove(buttonEl);
      anime({
        targets: buttonEl,
        scale: scale,
        duration: duration,
        elasticity: elasticity,
      });
    }

    function animateText(textEl, translateX) {
      anime.remove(textEl);
      anime({
        targets: textEl,
        translateY: translateX,
        elasticity: 300,
      });
    }

    function enterButton() {
      this.style.zIndex = 50;
      animateButton(this, 1.15, 800, 400);
      const buttonEls = document.querySelectorAll(".wrap");
      buttonEls.forEach(function (buttonEl) {
        if (buttonEl !== this) {
          buttonEl.classList.add("blur");
        }
      }, this);
    }

    function leaveButton() {
      this.style.zIndex = 49;
      animateButton(this, 1.0, 600, 300);
      const buttonEls = document.querySelectorAll(".wrap");
      buttonEls.forEach(function (buttonEl) {
        buttonEl.classList.remove("blur");
      });
    }

    function enterText() {
      const index = Array.from(buttonEls).indexOf(this);
      animateText(textEls[index], -100);
    }

    function leaveText() {
      const index = Array.from(buttonEls).indexOf(this);
      animateText(textEls[index], 0);
    }

    buttonEls.forEach(function (buttonEl) {
      buttonEl.addEventListener("mouseenter", enterButton, false);
      buttonEl.addEventListener("mouseleave", leaveButton, false);
      buttonEl.addEventListener("mouseenter", enterText, false);
      buttonEl.addEventListener("mouseleave", leaveText, false);
    });
  }

  const filterWorkForm = document.getElementById("filter-work-form");

  filterWorkForm.addEventListener("change", function (event) {
    if (event.target.type === "radio" && event.target.name === "filterWork") {
      const selectedType = event.target.value;
      filterProjectsByType(selectedType);
    }
  });

  function filterProjectsByType(selectedType) {
    const projectContainer = document.getElementById("project-container");
    projectContainer.innerHTML = "";

    const filteredProjects = originalProjects.filter((project) => {
      return selectedType === "all" || project.type === selectedType;
    });

    projectHover(filteredProjects);
  }

  fetchProjects().then((projects) => {
    projectHover(projects);
  });
}
