
const Links = Array.from(document.querySelectorAll('a[href*="#"]'));
const scrollTo = (e) => {
  const { target } = e;
  e.preventDefault();
  const pos = `#${target.href.split('#')[1]}`;
  window.scrollTo({
    behavior: 'smooth',
    top: document.querySelector(pos).offsetTop
  });
}
Links.forEach(link => {
  link.addEventListener('click', scrollTo, false);
});

// Handle scrollTop

// const showScroll = (e) => {
//   console.log(e.target);
// }
// window.addEventListener('scroll', showScroll);
const scrollToTop = e => {
  window.scrollTo({
    behavior: 'smooth',
    top: document.body.offsetTop
  });
}
window.onscroll = e => {
  console.log('scrolled', document.documentElement.scrollTop);
  const backToTop = document.querySelector('#scroll-top');
  if (document.documentElement.scrollTop > 100) {
    backToTop.style.display = 'block';
    backToTop.addEventListener('click', scrollToTop);
  } else {
    backToTop.style.display = 'none';
  }
}


const details = document.querySelectorAll('details');
const detailsArr = Array.from(details);
const toggleItem = ({ target }) => {


  detailsArr.forEach(item => {
    if (item.hasAttribute('open')) {
      console.log('item : ', item)
      item.removeAttribute('open');
    }
  });

  target.toggleAttribute('open');

}
detailsArr.forEach(element => element.addEventListener('click', toggleItem));

