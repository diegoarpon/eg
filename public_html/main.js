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
      const isTouch =
        window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(hover: none)').matches;
      const autoplayParams = isTouch ? 'autoplay=1&mute=1' : 'autoplay=1';
      iframe.src = `https://www.youtube.com/embed/${videoId}?${autoplayParams}&rel=0&playsinline=1`;
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

    // Allow click anywhere on the video wrapper (not just the button)
    wrapper.addEventListener('click', loadVideo);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMenuOverlay();
  initVideoEmbeds();
});

// Navbar blur on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
