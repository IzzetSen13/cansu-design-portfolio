export default function hamburgerNavigation(openBtn, modal, closeBtn) {
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
    document.body.style.overflow = "auto";
  });
}
