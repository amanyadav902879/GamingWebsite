document.getElementById("another-element").addEventListener("click", function () {
    document.getElementById("coupon-form").style.display = "block";
});

const scrollBtn = document.getElementById('scrollUpBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
ScrollReveal().reveal('.title', {
  delay: 200,
  distance: '50px',
  origin: 'left',
  duration: 800,
  easing: 'ease-in-out',
  reset: true 
});

ScrollReveal().reveal('.form_grp, .select_grp', {
  delay: 100,
  distance: '30px',
  origin: 'left',
  interval: 100,
  duration: 700,
  reset: true
});

ScrollReveal().reveal('.order__info-wrap', {
  delay: 300,
  origin: 'right',
  distance: '60px',
  duration: 900,
  reset: true
});

ScrollReveal().reveal('.bread_content', {
  delay: 300,
  distance: '40px',
  origin: 'left',
  duration: 700,
  reset: true
});
ScrollReveal().reveal('.bread img', {
  delay: 300,
  distance: '40px',
  origin: 'right',
  duration: 700,
  reset: true
});

ScrollReveal().reveal('footer .footer-col', {
  delay: 200,
  interval: 200,
  distance: '30px',
  origin: 'top',
  duration: 700,
  reset: true
});
