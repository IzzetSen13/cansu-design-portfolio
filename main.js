import customNavigation from "./scripts/navigation.js";
import myWork from "./scripts/myWork.js";
import home from "./scripts/home.js";
import myWorkDetail from "./scripts/myWorkDetail.js";
import about from "./scripts/about.js";
import contact from "./scripts/contact.js";
customNavigation();

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  if (path === "/" || path.includes("index.html")) {
    home();
  } else if (path.includes("work.html")) {
    myWork();
  } else if (path.includes("about.html")) {
    about();
  } else if (path.includes("work-detail.htm")) {
    myWorkDetail();
  } else if (path.includes("contact.html")) {
    contact();
  }
});
