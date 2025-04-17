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
document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal('.home h1', { delay: 200, origin: 'top', distance: '50px', duration: 1000, reset: true });
  ScrollReveal().reveal('.home p', { delay: 400, origin: 'left', distance: '50px', duration: 1000, reset: true });
  ScrollReveal().reveal('.home button', { delay: 600, origin: 'bottom', distance: '50px', duration: 1000, reset: true });

  ScrollReveal().reveal('.navbar', { delay: 100, origin: 'top', distance: '30px', duration: 800 });
  ScrollReveal().reveal('.image', { delay: 200, origin: 'bottom', distance: '50px', duration: 1200, reset: true });

  ScrollReveal().reveal('.col-lg-4', { delay: 300, origin: 'right', distance: '50px', duration: 1200, reset: true });
});
