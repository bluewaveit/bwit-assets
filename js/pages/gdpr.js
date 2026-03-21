/* BlueWave IT — gdpr.js
   nav.js handles: theme, lang, scroll/scrolled, backToTop, logo init.
   This file handles only gdpr-page-specific behaviour.
*/

/* ── reveal on scroll ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── TOC active state on scroll ── */
const sections = document.querySelectorAll('.section[id]');
const tocLinks  = document.querySelectorAll('.toc-cols a');
const ioToc = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      tocLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });
sections.forEach(s => ioToc.observe(s));
