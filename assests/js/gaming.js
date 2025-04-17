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
  var dropdownElements = document.querySelectorAll(".dropdown-toggle");

  dropdownElements.forEach(function(dropdown) {
      dropdown.addEventListener("click", function(event) {
          event.stopPropagation(); // Prevent conflicts
          var menu = this.nextElementSibling;
          menu.classList.toggle("show"); // Manually trigger dropdown show/hide
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal('.gaming_head', { delay: 200, origin: 'top', distance: '50px', duration: 1000, reset: true });
  ScrollReveal().reveal('.gaming_sub', { delay: 300, origin: 'left', distance: '50px', duration: 1000, reset: true });

  ScrollReveal().reveal('.shop-area', { delay: 400, origin: 'bottom', distance: '60px', duration: 1200, reset: true });
  ScrollReveal().reveal('.shop_top-wrap', { delay: 500, origin: 'right', distance: '50px', duration: 1000, reset: true });
  ScrollReveal().reveal('.shop-sidebar', { delay: 600, origin: 'left', distance: '50px', duration: 1200, reset: true });
  ScrollReveal().reveal('.shop__item', { delay: 700, origin: 'top', distance: '50px', duration: 1200, interval: 200, reset: true });

  ScrollReveal().reveal('footer .footer-col', { delay: 200, interval: 200, distance: '30px', origin: 'bottom', duration: 700, reset: true });

  // Ensure dropdown menu works properly
  document.querySelectorAll(".dropdown-toggle").forEach(function (dropdown) {
      dropdown.addEventListener("click", function (event) {
          event.stopPropagation(); // Prevent conflicts
      });
  });
});
