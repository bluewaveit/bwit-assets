/* ================================================================
   BlueWave IT — /js/nav.js
   Shared navigation loader and controller.

   Responsibilities:
     1. Fetch /includes/nav.html and inject into #site-nav
     2. Fix asset paths relative to the current page's depth
     3. Set active link based on current filename
     4. Bind: scroll/scrolled state, mobile menu, theme toggle,
        language toggle (defers to page JS T object if present)
     5. Init logo src for current theme
   ================================================================ */

(function () {
  'use strict';

  /* ── Config ────────────────────────────────────────────────── */

  // Pages that live at root — keep paths as-is
  // Pages in subdirectories would need a prefix like '../'
  var ROOT_PAGES = [
    'index.html', 'services.html', 'about.html', 'pricing.html',
    'contact.html', 'gdpr.html', 'privacy.html', 'terms.html', ''
  ];

  // Map filename → data-nav-page slug for active highlighting
  var PAGE_MAP = {
    'index.html':   'index',
    '':             'index',    // bare root
    'services.html':'services',
    'about.html':   'about',
    'pricing.html': 'pricing',
    'contact.html': 'contact',
    'gdpr.html':    'gdpr',
    'privacy.html': 'privacy',
    'terms.html':   'terms',
  };

  /* ── Resolve current page ──────────────────────────────────── */
  var pathname = window.location.pathname;
  var filename = pathname.split('/').pop() || 'index.html';
  var currentPage = PAGE_MAP[filename] || '';

  // Depth: pages at root = 0, pages in subfolders = 1, etc.
  var depth = pathname.split('/').filter(Boolean).length - 1;
  if (depth < 0) depth = 0;
  var prefix = depth > 0 ? '../'.repeat(depth) : '';

  /* ── Resolve the nav include path ─────────────────────────── */
  var NAV_PATH = prefix + 'includes/nav.html';

  /* ── Inject & initialise ───────────────────────────────────── */
  function loadNav() {
    var container = document.getElementById('site-nav');
    if (!container) {
      console.warn('[nav.js] No #site-nav element found — skipping nav load.');
      return;
    }

    fetch(NAV_PATH)
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status + ' loading ' + NAV_PATH);
        return res.text();
      })
      .then(function (html) {
        // Fix all relative paths in the injected HTML so they resolve
        // correctly from the current page depth
        if (prefix) {
          html = html.replace(/\bhref="(?!https?:\/\/|#|mailto:)([^"]+)"/g,
            function (_, p) { return 'href="' + prefix + p + '"'; });
          html = html.replace(/\bsrc="(?!https?:\/\/|data:)([^"]+)"/g,
            function (_, p) { return 'src="' + prefix + p + '"'; });
          html = html.replace(/\bdata-dark="(?!https?:\/\/|data:|")([^"]+)"/g,
            function (_, p) { return 'data-dark="' + prefix + p + '"'; });
          html = html.replace(/\bdata-light="(?!https?:\/\/|data:|")([^"]+)"/g,
            function (_, p) { return 'data-light="' + prefix + p + '"'; });
        }

        container.innerHTML = html;
        initNav();
      })
      .catch(function (err) {
        console.warn('[nav.js] Failed to load navigation:', err.message);
        // Minimal fallback — page still renders, just without the shared nav
        container.innerHTML = '<header class="site-header" id="siteHeader" style="padding:14px 0;">' +
          '<div class="container"><a href="' + prefix + 'index.html" style="color:inherit;font-weight:700;">BlueWave IT</a></div>' +
          '</header>';
      });
  }

  /* ── Initialise all nav behaviours after injection ─────────── */
  function initNav() {

    /* 1. Active link highlighting */
    setActiveLink();

    /* 2. Header scroll effect */
    initScroll();

    /* 3. Mobile menu */
    initMobileMenu();

    /* 4. Theme toggle */
    initTheme();

    /* 5. Language toggle */
    initLang();

    /* 6. Logo initial src */
    initLogo();

  }

  /* ── Active link ───────────────────────────────────────────── */
  function setActiveLink() {
    // Remove any hard-coded active classes from the template
    document.querySelectorAll('[data-nav-page]').forEach(function (el) {
      el.classList.remove('active');
    });

    if (!currentPage) return;

    // Exact match
    document.querySelectorAll('[data-nav-page="' + currentPage + '"]').forEach(function (el) {
      el.classList.add('active');
    });

    // FAQ anchor lives on pricing — also highlight pricing as active
    if (window.location.hash === '#faq' && currentPage === 'pricing') {
      document.querySelectorAll('[data-nav-page="faq"]').forEach(function (el) {
        el.classList.add('active');
      });
    }
  }

  /* ── Scroll effect ─────────────────────────────────────────── */
  function initScroll() {
    var header = document.getElementById('siteHeader');
    if (!header) return;

    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 16);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ── Mobile menu ───────────────────────────────────────────── */
  function initMobileMenu() {
    var toggle = document.getElementById('navToggle');
    var menu   = document.getElementById('mobileMenu');
    if (!toggle || !menu) return;

    var iconOpen  = toggle.querySelector('.nav-icon-open');
    var iconClose = toggle.querySelector('.nav-icon-close');

    function openMenu() {
      menu.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close navigation menu');
      if (iconOpen)  iconOpen.style.display  = 'none';
      if (iconClose) iconClose.style.display = '';
    }

    function closeMenu() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
      if (iconOpen)  iconOpen.style.display  = '';
      if (iconClose) iconClose.style.display = 'none';
    }

    toggle.addEventListener('click', function () {
      menu.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
        toggle.focus();
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      var header = document.getElementById('siteHeader');
      if (header && !header.contains(e.target) && menu.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  /* ── Theme toggle ──────────────────────────────────────────── */
  function initTheme() {
    var savedTheme = localStorage.getItem('bwit-theme') || 'dark';
    applyTheme(savedTheme, false); // false = don't persist again (already stored)

    document.querySelectorAll('[data-theme]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyTheme(btn.dataset.theme, true);
      });
    });
  }

  function applyTheme(theme, save) {
    var isLight = theme === 'light';
    document.body.classList.toggle('theme-light', isLight);

    // Update logo src
    document.querySelectorAll('.logo-img').forEach(function (img) {
      img.src = isLight ? (img.dataset.light || '') : (img.dataset.dark || '');
    });

    // Update active button states in nav
    document.querySelectorAll('[data-theme]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.theme === theme);
    });

    if (save) localStorage.setItem('bwit-theme', theme);
  }

  /* ── Language toggle ───────────────────────────────────────── */
  function initLang() {
    // If the page has its own full i18n engine (T object + setLanguage),
    // nav.js just hooks into it rather than duplicating translation logic.
    // The page JS reads T and applies translations — nav.js just keeps
    // the toggle active-state in sync and exposes a hook.
    var savedLang = localStorage.getItem('bwit-lang') || 'en';

    // Sync active states on nav lang buttons
    syncLangButtons(savedLang);

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.dataset.lang;
        syncLangButtons(lang);
        localStorage.setItem('bwit-lang', lang);

        // If page JS exposes setLanguage(), call it
        if (typeof window.setLanguage === 'function') {
          window.setLanguage(lang);
        } else {
          // Minimal fallback: update data-i18n text if T is available
          if (window.T && window.T[lang]) {
            document.documentElement.lang = lang;
            document.querySelectorAll('[data-i18n]').forEach(function (el) {
              var k = el.dataset.i18n;
              if (window.T[lang][k] !== undefined) el.textContent = window.T[lang][k];
            });
          }
        }
      });
    });
  }

  function syncLangButtons(lang) {
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  /* ── Logo initial src ──────────────────────────────────────── */
  function initLogo() {
    var isLight = document.body.classList.contains('theme-light');
    document.querySelectorAll('.logo-img').forEach(function (img) {
      var target = isLight ? img.dataset.light : img.dataset.dark;
      if (target) img.src = target;
    });
  }

  /* ── Back-to-top (shared utility, benefits all pages) ──────── */
  function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Boot ──────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      loadNav();
      initBackToTop();
    });
  } else {
    // DOM already ready (script deferred or at bottom of body)
    loadNav();
    initBackToTop();
  }

})();
