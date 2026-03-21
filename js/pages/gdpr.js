/* BlueWave IT — gdpr.js
   Shared script for gdpr.html, privacy.html, terms.html.
   nav.js handles: theme, scroll/scrolled, backToTop, logo init, lang button UI.
   This file handles: window.T nav strings so nav.js can translate the nav,
   window.setLanguage so lang toggle works, page-specific reveal + TOC.
   ================================================================ */

/* ── Shared nav + footer translations ────────────────────────────── */
window.T = {
  en: {
    nav_label:              'Managed IT Services',
    nav_home:               'Home',
    nav_services:           'Services',
    nav_about:              'About',
    nav_pricing:            'Pricing',
    nav_faq:                'FAQ',
    nav_contact:            'Contact',
    theme_dark:             'Dark',
    theme_light:            'Light',
    footer_terms:           'Terms and Conditions',
    footer_privacy:         'Privacy Policy',
    footer_gdpr:            'GDPR'
  },
  pt: {
    nav_label:              'Serviços IT Geridos',
    nav_home:               'Início',
    nav_services:           'Serviços',
    nav_about:              'Sobre',
    nav_pricing:            'Preços',
    nav_faq:                'FAQ',
    nav_contact:            'Contacto',
    theme_dark:             'Escuro',
    theme_light:            'Claro',
    footer_terms:           'Termos e Condições',
    footer_privacy:         'Política de Privacidade',
    footer_gdpr:            'RGPD'
  }
};

/* ── setLanguage — translates nav data-i18n elements ─────────────── */
window.setLanguage = function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var k = el.dataset.i18n;
    if (window.T[lang] && window.T[lang][k] !== undefined) {
      el.textContent = window.T[lang][k];
    }
  });
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
};

/* ── init: apply saved language preference ───────────────────────── */
window.setLanguage(localStorage.getItem('bwit-lang') || 'en');

/* ── reveal on scroll ────────────────────────────────────────────── */
var revealObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('is-visible');
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(function (el) {
  revealObs.observe(el);
});

/* ── TOC active state on scroll (gdpr.html only) ─────────────────── */
var sections = document.querySelectorAll('.section[id]');
var tocLinks  = document.querySelectorAll('.toc-cols a');
if (sections.length && tocLinks.length) {
  var ioToc = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        tocLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  sections.forEach(function (s) { ioToc.observe(s); });
}
