const year = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const contactForm = document.querySelector(".contact-form");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you. Your reservation request has been noted.");
    contactForm.reset();
  });
}
