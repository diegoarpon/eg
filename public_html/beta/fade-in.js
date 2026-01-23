// Fade-in effect on scroll
document.addEventListener('DOMContentLoaded', function() {
  // Select all sections, headings, paragraphs, and images
  const fadeElements = document.querySelectorAll('section, h1, h2, h3, h4, h5, h6, p, img, .row > div');
  
  // Add fade-in class to all elements except carousels and asesoramiento strip
  fadeElements.forEach(el => {
    // Skip elements in carousels or the endless strip
    if (el.closest('.carousel') || el.closest('.carousel-item') || 
        el.closest('.endless-strip-container') || el.closest('.strip-card')) {
      return;
    }
    el.classList.add('fade-in');
  });
  
  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, {
    root: null, // viewport
    threshold: 0.1, // trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // slightly before element enters viewport
  });
  
  // Observe all fade elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});