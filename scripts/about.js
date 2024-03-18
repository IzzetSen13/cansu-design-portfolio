import hamburgerNavigation from "./hamburgerNavigation.js";

export default function about() {
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
}
