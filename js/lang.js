/* ================================================================
   BlueWave IT — lang.js
   SINGLE authoritative language controller.
   Load this FIRST, before site.js and any page JS.

   Architecture:
   - window.BWIT_TRANSLATIONS  → shared nav/footer strings (here)
   - window.PAGE_TRANSLATIONS  → page-specific strings (set by page JS)
   - window.setLanguage(lang)  → applies both, persists to localStorage
   - window._onLangChange(lang)→ optional hook for page-level side-effects
   ================================================================ */

/* ── Shared nav + footer strings ─────────────────────────────────── */
window.BWIT_TRANSLATIONS = {
  en: {
    nav_label:            'Managed IT Services',
    nav_home:             'Home',
    nav_services:         'Services',
    nav_about:            'About',
    nav_pricing:          'Pricing',
    nav_faq:              'FAQ',
    nav_contact:          'Contact',
    cta_book:             'Book a Consultation',
    cta_request:          'Request a Consultation',
    cta_explore:          'Explore Services',
    theme_dark:           'Dark',
    theme_light:          'Light',
    footer_tagline:       'Enterprise-grade IT management for growing businesses across the Algarve. Reliable, secure, and predictably priced.',
    footer_services_head: 'Services',
    footer_company_head:  'Company',
    footer_free_assessment: 'Free Assessment',
    footer_s1:            'Managed IT',
    footer_s2:            'Cybersecurity',
    footer_s3:            'Cloud & M365',
    footer_s4:            'Backup & Recovery',
    footer_s5:            'Network Management',
    footer_s6:            'IT Consulting',
    footer_terms:         'Terms and Conditions',
    footer_privacy:       'Privacy Policy',
    footer_gdpr:          'GDPR',
    footer_copy:          '© 2026 BlueWave IT. Reliable technology for growing businesses.',
  },
  pt: {
    nav_label:            'Serviços IT Geridos',
    nav_home:             'Início',
    nav_services:         'Serviços',
    nav_about:            'Sobre',
    nav_pricing:          'Preços',
    nav_faq:              'FAQ',
    nav_contact:          'Contacto',
    cta_book:             'Marcar Consulta',
    cta_request:          'Pedir Consulta',
    cta_explore:          'Explorar Serviços',
    theme_dark:           'Escuro',
    theme_light:          'Claro',
    footer_tagline:       'Gestão IT de nível empresarial para empresas em crescimento no Algarve. Fiável, segura e com preço previsível.',
    footer_services_head: 'Serviços',
    footer_company_head:  'Empresa',
    footer_free_assessment: 'Avaliação Gratuita',
    footer_s1:            'IT Gerido',
    footer_s2:            'Cibersegurança',
    footer_s3:            'Cloud e M365',
    footer_s4:            'Backup e Recuperação',
    footer_s5:            'Gestão de Rede',
    footer_s6:            'Consultoria IT',
    footer_terms:         'Termos e Condições',
    footer_privacy:       'Política de Privacidade',
    footer_gdpr:          'RGPD',
    footer_copy:          '© 2026 BlueWave IT. Tecnologia fiável para empresas em crescimento.',
  }
};

/* ── setLanguage — single authoritative controller ───────────────── */
window.setLanguage = function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'pt') lang = 'en';

  var shared = (window.BWIT_TRANSLATIONS  || {})[lang] || {};
  var page   = (window.PAGE_TRANSLATIONS  || {})[lang] || {};
  /* site.js legacy shim — covers homepage + global keys not in BWIT_TRANSLATIONS */
  var site   = (window.SITE_TRANSLATIONS  || {})[lang] || {};

  /* Update <html lang=""> */
  document.documentElement.lang = lang;

  /* data-i18n → textContent. Priority: page > shared > site (legacy) */
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var k = el.dataset.i18n;
    var v = page[k] !== undefined ? page[k]
          : shared[k] !== undefined ? shared[k]
          : site[k];
    if (v !== undefined) el.textContent = v;
  });

  /* data-i18n-html → innerHTML */
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var k = el.dataset.i18nHtml;
    var v = page[k] !== undefined ? page[k]
          : shared[k] !== undefined ? shared[k]
          : site[k];
    if (v !== undefined) el.innerHTML = v;
  });

  /* input/textarea placeholders via data-ph-en / data-ph-pt */
  document.querySelectorAll('[data-ph-en],[data-ph-pt]').forEach(function (el) {
    el.placeholder = (lang === 'en' ? el.dataset.phEn : el.dataset.phPt) || '';
  });

  /* <select> option text via data-en / data-pt */
  document.querySelectorAll('select option[data-en], select option[data-pt]').forEach(function (opt) {
    if (opt.dataset[lang]) opt.textContent = opt.dataset[lang];
  });

  /* Sync lang toggle button active state */
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  /* Persist */
  try { localStorage.setItem('bwit-lang', lang); } catch (e) {}

  /* Page-level hook (e.g. pricing calculator re-render) */
  if (typeof window._onLangChange === 'function') {
    window._onLangChange(lang);
  }
};

/* ── Bootstrap on DOMContentLoaded ──────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  /* Bind all [data-lang] toggle buttons */
  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      window.setLanguage(btn.dataset.lang);
    });
  });

  /* Apply saved or default language.
     Call after a short tick so PAGE_TRANSLATIONS is set by page JS. */
  setTimeout(function () {
    window.setLanguage(localStorage.getItem('bwit-lang') || 'en');
  }, 0);
});
