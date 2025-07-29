document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector(".navbar");

    window.addEventListener('scroll', function () {
      if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });