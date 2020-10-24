
const smoothRide = e => {
  let targetItem = e.target.getAttribute('href');
  if (window.scrollTo) {
    e.preventDefault();   
    window.scrollTo({
      behavior: "smooth",
      top: document.querySelector(targetItem).offsetTop
    });
  }
}

let CTAs = Array.from(document.querySelectorAll("a[href^='#']"));

CTAs.forEach(cta => {
  cta.addEventListener("click", smoothRide, false);
});



