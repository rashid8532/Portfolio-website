// Typing Animation
var typed = new Typed('#element', {
  strings: ['Frontend Developer', 'Java Developer', 'React Learner'],
  typeSpeed: 50,
  loop: true
});

// Mobile Menu
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});