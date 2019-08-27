const Hamburger = document.querySelector('#menu');
Hamburger.addEventListener('click', showNavLinks, false);
function showNavLinks() {

  const navLinks = document.querySelector('#navlinks');
  navLinks.classList.toggle('show');
  Hamburger.classList.toggle('close');

}
