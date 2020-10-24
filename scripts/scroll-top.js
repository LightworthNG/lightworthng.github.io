
const scrollToTop = e => {
  window.scrollTo({
    behavior: 'smooth',
    top: document.body.offsetTop
  });
}
window.onscroll = e => {
  const backToTop = document.querySelector('#scroll-top');
  const Navbar = document.querySelector('.navbar');
  if (document.documentElement.scrollTop > 50) {
    Navbar.classList.add('fixed')
  } else {
    Navbar.classList.remove('fixed')
  }
  if (document.documentElement.scrollTop > 200) {
    backToTop.style.display = 'block';
    backToTop.addEventListener('click', scrollToTop);
  } else {
    backToTop.style.display = 'none';
  }
}