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

});
