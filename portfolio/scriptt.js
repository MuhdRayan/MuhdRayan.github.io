const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = (link unavailable);
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove('active'));
      document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  // Consider adding a toggle function for the menu icon
};

