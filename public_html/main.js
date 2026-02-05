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

// Video embed with custom plate
function initVideoEmbeds() {
  document.querySelectorAll('.video-embed').forEach((wrapper) => {
    const videoId = wrapper.dataset.videoId;
    const plate = wrapper.querySelector('.video-overlay-plate');
    const playBtn = wrapper.querySelector('.video-play-btn');
    const target = wrapper.querySelector('.video-iframe-target');
    if (!videoId || !plate || !target) return;

    const loadVideo = () => {
      if (wrapper.classList.contains('loaded')) return;
      wrapper.classList.add('loading');
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      iframe.title = 'YouTube video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.border = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.addEventListener('load', () => {
        wrapper.classList.add('ready');
        wrapper.classList.remove('loading');
        plate.setAttribute('aria-hidden', 'true');
      });
      target.appendChild(iframe);
      wrapper.classList.add('loaded');
    };

    plate.addEventListener('click', loadVideo);
    plate.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        loadVideo();
      }
    });

    if (playBtn) {
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        loadVideo();
      });
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize menu overlay
  initMenuOverlay();
  // Initialize custom video covers
  initVideoEmbeds();
});
// ===== FIX DEFINITIVO HEADER FIXED + iOS =====
function fixHeaderOffset() {
  const header = document.querySelector('header.fixed-top');
  if (!header) return;

  const safeAreaTop = parseFloat(
    getComputedStyle(document.documentElement)
      .getPropertyValue('env(safe-area-inset-top)') || 0
  );

  const headerHeight = header.offsetHeight;
  const totalOffset = headerHeight + safeAreaTop;

  document.body.style.paddingTop = `${totalOffset}px`;
}

// recalcular en todos los casos donde iOS rompe layout
window.addEventListener('load', fixHeaderOffset);
window.addEventListener('resize', fixHeaderOffset);
window.addEventListener('orientationchange', fixHeaderOffset);