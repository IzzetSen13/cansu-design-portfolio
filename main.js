import customNavigation from "./scripts/navigation.js";
import myWork from "./scripts/myWork.js";
import home from "./scripts/home.js";
import myWorkDetail from "./scripts/myWorkDetail.js";
import about from "./scripts/about.js";
import contact from "./scripts/contact.js";
customNavigation();

document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.pathname.includes("/") ||
    window.location.pathname.includes("index.html")
  ) {
    home();
  }
  if (window.location.pathname.includes("work.html")) {
    myWork();
  }
  if (window.location.pathname.includes("about.html")) {
    about();
  }
  if (window.location.pathname.includes("work-detail.htm")) {
    myWorkDetail();
  }
  if (window.location.pathname.includes("contact.html")) {
    contact();
  }
});
