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

// Initialize Bootstrap popovers
function initPopovers() {
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => {
    // Update popover content with next event badge info
    const nextEventBadge = document.getElementById('nextEventBadge');
    if (nextEventBadge && popoverTriggerEl.id === 'eventDot') {
      popoverTriggerEl.setAttribute('data-bs-content', nextEventBadge.innerHTML || 'No hay eventos próximos');
    }
    return new bootstrap.Popover(popoverTriggerEl);
  });
}

// Update popover content when next event badge changes
function updatePopoverContent() {
  const eventDot = document.getElementById('eventDot');
  const nextEventBadge = document.getElementById('nextEventBadge');
  
  if (eventDot && nextEventBadge) {
    const popover = bootstrap.Popover.getInstance(eventDot);
    if (popover) {
      popover.dispose();
    }
    eventDot.setAttribute('data-bs-content', nextEventBadge.innerHTML || 'No hay eventos próximos');
    new bootstrap.Popover(eventDot);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize menu overlay
  initMenuOverlay();
  
  // Initialize popovers
  initPopovers();
});