// (Lenis smooth scrolling removed as per user request)

// Initialize Framer Motion text color animations
document.addEventListener('DOMContentLoaded', () => {
  if (window.Motion) {
    const { animate } = window.Motion;

    // Elements to animate on hover
    const navLinks = document.querySelectorAll('.nav-link, .meta-links a, .meta-links button, .story-title a, .contact-link-item, .footer-page-turn, .cs-next-story-link, .cs-back-link');

    navLinks.forEach(link => {
      // Store original color if needed, but animating to '' usually resets to CSS value
      link.addEventListener('mouseenter', () => {
        animate(link, { color: '#D92318' }, { duration: 0.2, ease: 'easeOut' });
      });
      
      link.addEventListener('mouseleave', () => {
        animate(link, { color: '' }, { duration: 0.4, ease: 'easeOut' });
      });
    });
  }
});
