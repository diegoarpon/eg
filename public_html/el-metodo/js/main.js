// El Método — main.js

document.addEventListener('DOMContentLoaded', () => {

  // ─── Reveal on scroll (Intersection Observer) ─────────────
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (revealElements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // ─── Smooth scroll para anchors ───────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── Acordeón de Preguntas Frecuentes (FAQ) ───────────────
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Cierra los otros acordeones para mantener orden editorial
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('is-open');
            other.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
            const otherContent = other.querySelector('.faq-content');
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });

        if (isOpen) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = null;
        } else {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });

  // ─── Header Sticky & Mobile Bar on Scroll ──────────────────
  const siteHeader = document.querySelector('.site-header');
  const mobileStickyBar = document.querySelector('.mobile-sticky-bar');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;

    // Header styling on scroll
    if (siteHeader) {
      if (scrollY > 80) {
        siteHeader.classList.add('site-header--scrolled');
      } else {
        siteHeader.classList.remove('site-header--scrolled');
      }
    }

    // Mobile sticky bar reveal after hero
    if (mobileStickyBar) {
      if (scrollY > 500) {
        mobileStickyBar.classList.add('is-visible');
        mobileStickyBar.setAttribute('aria-hidden', 'false');
      } else {
        mobileStickyBar.classList.remove('is-visible');
        mobileStickyBar.setAttribute('aria-hidden', 'true');
      }
    }
  }, { passive: true });

  // ─── Carrusel Automático Editorial de Testimonios ─────────
  const carouselEl = document.getElementById('testimonialCarousel');
  if (carouselEl) {
    const slides = carouselEl.querySelectorAll('.carousel-slide');
    const segments = carouselEl.querySelectorAll('.carousel-segment');
    const counterCurrent = carouselEl.querySelector('.carousel-counter__current');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    let currentIndex = 0;
    const totalSlides = slides.length;
    const SLIDE_DURATION = 6000; // 6 segundos de lectura por testimonio
    let autoplayTimer = null;
    let isPaused = false;
    let isVisible = false;

    function goToSlide(index) {
      if (index >= totalSlides) index = 0;
      if (index < 0) index = totalSlides - 1;

      // Actualizar slides activos
      slides.forEach((slide, i) => {
        const isActive = i === index;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', !isActive);
      });

      // Actualizar línea de tiempo interactiva
      segments.forEach((seg, i) => {
        const fill = seg.querySelector('.carousel-segment__fill');
        seg.classList.remove('is-active', 'is-viewed');

        if (fill) {
          fill.style.transition = 'none';
          fill.style.width = '0%';
        }

        if (i < index) {
          seg.classList.add('is-viewed');
          if (fill) fill.style.width = '100%';
        } else if (i === index) {
          if (fill) {
            void fill.offsetWidth; // Force reflow para disparar la animación
            seg.classList.add('is-active');
            fill.style.transition = `width ${SLIDE_DURATION}ms linear`;
            fill.style.width = '100%';
          }
        }
      });

      // Actualizar contador
      if (counterCurrent) {
        counterCurrent.textContent = String(index + 1).padStart(2, '0');
      }

      currentIndex = index;
      resetTimer();
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startTimer() {
      clearTimeout(autoplayTimer);
      if (isPaused || !isVisible) return;
      autoplayTimer = setTimeout(() => {
        nextSlide();
      }, SLIDE_DURATION);
    }

    function resetTimer() {
      clearTimeout(autoplayTimer);
      startTimer();
    }

    // Eventos de botones prev/next
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
      });
    }

    // Salto directo al clickear los segmentos
    segments.forEach((seg, idx) => {
      seg.addEventListener('click', () => {
        goToSlide(idx);
      });
    });

    // Pausar en hover para lectura cómoda
    carouselEl.addEventListener('mouseenter', () => {
      isPaused = true;
      clearTimeout(autoplayTimer);
      const activeSeg = segments[currentIndex];
      const fill = activeSeg ? activeSeg.querySelector('.carousel-segment__fill') : null;
      if (fill) {
        const computedWidth = window.getComputedStyle(fill).width;
        fill.style.transition = 'none';
        fill.style.width = computedWidth;
      }
    });

    carouselEl.addEventListener('mouseleave', () => {
      isPaused = false;
      const activeSeg = segments[currentIndex];
      const fill = activeSeg ? activeSeg.querySelector('.carousel-segment__fill') : null;
      if (fill) {
        fill.style.transition = `width ${SLIDE_DURATION}ms linear`;
        fill.style.width = '100%';
      }
      resetTimer();
    });

    // Gestos táctiles Swipe en móviles
    let touchStartX = 0;
    let touchEndX = 0;

    carouselEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carouselEl.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }, { passive: true });

    // Observar visibilidad en viewport para no consumir recursos innecesariamente
    const carouselObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startTimer();
        } else {
          clearTimeout(autoplayTimer);
        }
      });
    }, { threshold: 0.2 });

    carouselObserver.observe(carouselEl);

    // Inicialización del primer slide
    goToSlide(0);
  }

  // ─── Subtle Parallax Scroll para secciones asimétricas (Franceclat) ───
  const parallaxTargets = document.querySelectorAll('[data-parallax-scroll]');
  if (parallaxTargets.length && window.matchMedia('(min-width: 1024px)').matches) {
    let ticking = false;

    function updateParallax() {
      const vh = window.innerHeight;

      parallaxTargets.forEach(target => {
        const rect = target.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          const relativeY = (rect.top - vh * 0.4) * 0.055;
          target.style.transform = `translate3d(0, ${relativeY.toFixed(1)}px, 0)`;
        }
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

});
