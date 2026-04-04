const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  reveals.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);