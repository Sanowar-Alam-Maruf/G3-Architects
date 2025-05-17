const toggleBtn = document.getElementById('toggle-button');
const navbarLinks = document.getElementById('navbar-links');

toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');
});
