window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var parallaxSpeed = 0.5;
    document.querySelector('.video-section video').style.transform = 'translateY(' + (scrollPosition * parallaxSpeed) + 'px)';
  });
  