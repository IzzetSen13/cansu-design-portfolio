export default function customNavigation() {
  let navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    const direction = item.getAttribute("data-direction");
    item.addEventListener("click", (e) => {
      e.preventDefault();
      let currentLocation = window.location.href;
      let newLocation;
      // Check if the current URL contains "/pages/"
      if (currentLocation.includes("/pages/")) {
        // If it does, navigate accordingly
        newLocation =
          direction === "index" ? "../index.html" : `./${direction}.html`;
      } else {
        // If not, navigate from the root
        newLocation =
          direction === "index" ? "index.html" : `pages/${direction}.html`;
      }
      window.location.href = newLocation;
    });
  });
}
