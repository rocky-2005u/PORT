// ============================================
// CAPTURE PHOTOGRAPHY
// Main interaction script
// ============================================


// ============================================
// SCROLL REVEAL
// ============================================

const revealElements = document.querySelectorAll(
  '.section, .portfolio-top, .services, .truth, .footer'
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {

  element.style.transition =
    'opacity .8s ease, transform .8s ease';

  element.style.opacity = '0';

  element.style.transform =
    'translateY(18px)';

  observer.observe(element);

});


// ============================================
// HERO LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {

  const heroElements = document.querySelectorAll(
    '.hero, .nav-wrap'
  );

  heroElements.forEach((element) => {

    element.animate(
      [
        {
          opacity: 0,
          transform: 'translateY(10px)'
        },
        {
          opacity: 1,
          transform: 'translateY(0)'
        }
      ],
      {
        duration: 900,
        fill: 'forwards',
        easing: 'cubic-bezier(.2,.7,.2,1)'
      }
    );

  });

});


// ============================================
// HERO VIDEO
// ============================================

const heroVideo = document.querySelector('.hero-video');

if (heroVideo) {

  // Make sure video is muted for autoplay.
  heroVideo.muted = true;

  // Try to start playback.
  const startVideo = () => {

    const playPromise = heroVideo.play();

    if (playPromise !== undefined) {

      playPromise.catch(() => {

        // Some browsers may block autoplay.
        // The video remains available for normal playback.
        console.log('Hero video autoplay was blocked by the browser.');

      });

    }

  };


  // Try immediately.
  startVideo();


  // Try again when the page is loaded.
  window.addEventListener('load', startVideo);


  // Try again after browser becomes visible.
  document.addEventListener('visibilitychange', () => {

    if (!document.hidden) {
      startVideo();
    }

  });

}


// ============================================
// FAQ
// Only one FAQ item open at a time
// ============================================

const faqDetails = document.querySelectorAll('.faq details');

faqDetails.forEach((detail) => {

  detail.addEventListener('toggle', () => {

    if (!detail.open) {
      return;
    }

    faqDetails.forEach((otherDetail) => {

      if (otherDetail !== detail) {
        otherDetail.removeAttribute('open');
      }

    });

  });

});


// ============================================
// SMOOTH NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener('click', (event) => {

    const targetId = link.getAttribute('href');

    if (!targetId || targetId === '#') {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

  });

});
