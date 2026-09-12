/* ==========================================================================
   PUBLICATION CONTROLLER — Page Routing, 3D Paper Turning, Hash Sync
   ========================================================================== */

(function () {
  'use strict';

  // Page Registry
  const PAGES = {
    'front-page': { num: '01', label: 'FRONT PAGE' },
    'yoruu': { num: '02', label: 'FEATURE STORY' },
    'planto': { num: '03', label: 'FEATURE STORY' },
    'fashion': { num: '04', label: 'FEATURE STORY' },
    'about': { num: '05', label: 'PROFILE ARTICLE' },
    'resume': { num: '06', label: 'CAREER STORIES' },
    'contact': { num: '07', label: 'FINAL EDITION' }
  };

  let currentPage = 'front-page';
  let isTransitioning = false;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const TURN_DURATION = prefersReducedMotion ? 200 : 750;

  // ---- Initialization ----
  document.addEventListener('DOMContentLoaded', function () {
    // Determine initial page from URL hash
    const hash = window.location.hash.replace('#', '') || 'front-page';
    const initialPage = PAGES[hash] ? hash : 'front-page';

    // Show initial page instantly (no transition)
    showPageInstant(initialPage);

    // Bind all navigation triggers
    bindNavigation();

    // Listen to hash changes (back/forward)
    window.addEventListener('hashchange', function () {
      const target = window.location.hash.replace('#', '') || 'front-page';
      if (target !== currentPage && PAGES[target]) {
        navigateTo(target);
      }
    });
  });

  // ---- Show Page Without Transition (initial load) ----
  function showPageInstant(pageId) {
    const allPages = document.querySelectorAll('.newspaper-page');
    allPages.forEach(function (p) {
      p.classList.remove('active', 'page-enter', 'page-exit');
    });

    const target = document.getElementById('page-' + pageId);
    if (target) {
      target.classList.add('active');
      currentPage = pageId;
      updateMastheadNav(pageId);
      updatePageNumbers(pageId);
      window.scrollTo(0, 0);
    }
  }

  // ---- Navigate With 3D Paper Page-Turn ----
  function navigateTo(pageId) {
    if (isTransitioning || pageId === currentPage) return;
    if (!PAGES[pageId]) return;

    isTransitioning = true;

    const outgoing = document.getElementById('page-' + currentPage);
    const incoming = document.getElementById('page-' + pageId);

    if (!outgoing || !incoming) {
      isTransitioning = false;
      return;
    }

    // Update hash without triggering hashchange loop
    history.pushState(null, '', '#' + pageId);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Start page-turn animation
    outgoing.classList.add('page-exit');
    incoming.style.display = 'block';

    // Delay incoming animation slightly
    setTimeout(function () {
      incoming.classList.add('page-enter');
    }, TURN_DURATION * 0.3);

    // When outgoing finishes turning, hide it
    setTimeout(function () {
      outgoing.classList.remove('active', 'page-exit');
      outgoing.style.display = '';
    }, TURN_DURATION * 0.6);

    // When incoming finishes turning in
    setTimeout(function () {
      incoming.classList.remove('page-enter');
      incoming.classList.add('active');
      incoming.style.display = '';

      currentPage = pageId;
      updateMastheadNav(pageId);
      updatePageNumbers(pageId);
      isTransitioning = false;
    }, TURN_DURATION);
  }

  // ---- Bind Navigation Elements ----
  function bindNavigation() {
    // All elements with data-navigate attribute
    document.addEventListener('click', function (e) {
      const navEl = e.target.closest('[data-navigate]');
      if (navEl) {
        e.preventDefault();
        const target = navEl.getAttribute('data-navigate');
        navigateTo(target);
      }
    });

    // Email copy button
    document.addEventListener('click', function (e) {
      const copyEl = e.target.closest('[data-copy-email]');
      if (copyEl) {
        e.preventDefault();
        navigator.clipboard.writeText('abhinavvats.dev@gmail.com').then(function () {
          showToast('Email copied to clipboard');
        });
      }
    });
  }

  // ---- Update Masthead Navigation Active State ----
  function updateMastheadNav(pageId) {
    const navLinks = document.querySelectorAll('.masthead-nav-center .nav-link');
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('data-navigate') === pageId) {
        link.classList.add('active');
      }
      // Map case study pages to "WORK" nav
      if (['yoruu', 'planto', 'fashion'].includes(pageId) && link.getAttribute('data-navigate') === 'front-page') {
        link.classList.add('active');
      }
    });

    // Update issue label
    const issueLabel = document.getElementById('issueLabel');
    if (issueLabel && PAGES[pageId]) {
      issueLabel.textContent = PAGES[pageId].label + ' — P.' + PAGES[pageId].num;
    }
  }

  // ---- Update Page Numbers Throughout ----
  function updatePageNumbers(pageId) {
    const pageNumEls = document.querySelectorAll('.dynamic-page-num');
    pageNumEls.forEach(function (el) {
      if (PAGES[pageId]) {
        el.textContent = 'P.' + PAGES[pageId].num;
      }
    });
  }

  // ---- Toast Notification ----
  function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = [
      'position: fixed',
      'bottom: 28px',
      'left: 50%',
      'transform: translateX(-50%) translateY(10px)',
      'background-color: #1A1A1A',
      'color: #FFFFFF',
      'font-family: var(--font-condensed)',
      'font-size: 13px',
      'font-weight: 600',
      'text-transform: uppercase',
      'letter-spacing: 0.06em',
      'padding: 10px 20px',
      'z-index: 9999',
      'opacity: 0',
      'transition: opacity 200ms ease, transform 200ms ease'
    ].join(';');

    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(10px)';
      setTimeout(function () { toast.remove(); }, 200);
    }, 2200);
  }

  // Expose navigate for inline use
  window.navigateTo = navigateTo;

  // ---- Sticky Navbar Logic ----
  document.addEventListener('scroll', function() {
    const navbar = document.getElementById('sticky-navbar');
    if (!navbar) return;
    
    // Slide down after 300px of scrolling
    if (window.scrollY > 300) {
      navbar.classList.add('is-visible');
    } else {
      navbar.classList.remove('is-visible');
    }
  });

  // ---- Editorial Menu Logic ----
  const menuBtn = document.querySelector('.navbar-menu-btn');
  const closeBtn = document.querySelector('.menu-close-btn');
  const navMenu = document.getElementById('editorial-nav-menu');
  
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function() {
      navMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (closeBtn && navMenu) {
    closeBtn.addEventListener('click', function() {
      navMenu.classList.remove('open');
      document.body.style.overflow = ''; 
    });
  }

  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
      
      const targetPage = link.getAttribute('data-navigate');
      if (targetPage) {
        if (targetPage !== currentPage) {
          window.navigateTo(targetPage);
        } else if (targetPage === 'front-page') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });
})();
