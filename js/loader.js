/* ==========================================================================
   EDITION LOADER — 0.3s "Opening a Fresh Newspaper" Sequence
   ========================================================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('editionLoader');
    if (!loader) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const hideDelay = prefersReducedMotion ? 100 : 300;

    setTimeout(function () {
      loader.classList.add('hiding');

      // After fade-out transition completes, remove from DOM flow
      setTimeout(function () {
        loader.classList.add('hidden');
      }, 200);
    }, hideDelay);
  });
})();
