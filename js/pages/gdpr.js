/* BlueWave IT — gdpr.js */

/* ── theme ── */
document.querySelectorAll('[data-theme]').forEach(b => {
  b.addEventListener('click', () => {
    const isLight = b.dataset.theme === 'light';
    document.body.classList.toggle('theme-light', isLight);
    document.querySelectorAll('[data-theme]').forEach(x =>
      x.classList.toggle('active', x.dataset.theme === b.dataset.theme)
    );
    document.querySelectorAll('.logo-img').forEach(img => {
      img.src = isLight ? img.dataset.light : img.dataset.dark;
    });
  });
});

/* ── lang ── */
document.querySelectorAll('[data-lang]').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('[data-lang]').forEach(x =>
      x.classList.toggle('active', x.dataset.lang === b.dataset.lang)
    );
    document.documentElement.lang = b.dataset.lang;
  });
});

/* ── header scroll ── */
const siteHeader = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  siteHeader?.classList.toggle('scrolled', window.scrollY > 16);
}, { passive: true });

/* ── back to top ── */
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn?.classList.toggle('show', window.scrollY > 500);
}, { passive: true });
btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

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

/* ── init logo ── */
(function() {
  const isLight = document.body.classList.contains('theme-light');
  document.querySelectorAll('.logo-img').forEach(img => {
    img.src = isLight ? img.dataset.light : img.dataset.dark;
  });
})();
