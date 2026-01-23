// Main JavaScript file

// Toggle menu overlay
function initMenuOverlay() {
  const toggler = document.querySelector('.navbar-toggler');
  const overlay = document.querySelector('.menu-overlay');
  
  if (toggler && overlay) {
    toggler.addEventListener('click', function() {
      overlay.classList.toggle('active');
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize menu overlay
  initMenuOverlay();
});