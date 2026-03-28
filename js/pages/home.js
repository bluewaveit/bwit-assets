/* ================================================================
   BlueWave IT — home.js
   Page-specific JS for index.html
   Loads after site.js
   ================================================================ */

    let currentLang = 'en';

    /* ── i18n ── */
    window.setLanguage = function setLanguage(lang) {
      currentLang = lang;
      document.documentElement.lang = lang;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.dataset.i18n;
        if (translations[lang][k]) el.textContent = translations[lang][k];
      });
      document.querySelectorAll('input[data-ph-en], textarea[data-ph-en]').forEach(el => {
        el.placeholder = el.dataset[lang === 'en' ? 'phEn' : 'phPt'];
      });
      document.querySelectorAll('#serviceSelect option').forEach(opt => {
        opt.textContent = opt.dataset[lang];
      });
      document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
      updatePricing();
    }

    /* ── theme ── */

    /* ── mobile menu ── */

    /* ── reveal ── */
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

    /* ── counters ── */
    let countersStarted = false;
    function animateCounters() {
      if (countersStarted) return;
      countersStarted = true;
      document.querySelectorAll('.counter').forEach(counter => {
        const target   = parseFloat(counter.dataset.target || '0');
        const suffix   = counter.dataset.suffix || '';
        const decimals = Number.isInteger(target) ? 0 : 1;
        const dur      = 1300;
        const t0       = performance.now();
        (function tick(now) {
          const p = Math.min((now - t0) / dur, 1);
          const e = 1 - Math.pow(1 - p, 3);
          counter.textContent = (decimals ? (target*e).toFixed(1) : Math.round(target*e)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }
    const heroObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) animateCounters(); });
    }, { threshold: 0.3 });
    const heroCard = document.getElementById('heroCard');
    if (heroCard) heroObs.observe(heroCard);

    /* ── hero card tilt ── */
    heroCard?.addEventListener('mousemove', e => {
      const r = heroCard.getBoundingClientRect();
      const ry = ((e.clientX - r.left) / r.width  - 0.5) * 8;
      const rx = ((e.clientY - r.top)  / r.height - 0.5) * -8;
      heroCard.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      heroCard.style.borderColor = 'rgba(56,217,232,0.26)';
    });
    heroCard?.addEventListener('mouseleave', () => {
      heroCard.style.transform = '';
      heroCard.style.borderColor = '';
    });

    /* ── service card tilt ── */
    document.querySelectorAll('.tilt-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        if (window.innerWidth < 981) return;
        const r  = card.getBoundingClientRect();
        const ry = ((e.clientX - r.left) / r.width  - 0.5) * 6;
        const rx = ((e.clientY - r.top)  / r.height - 0.5) * -6;
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
      });
      card.addEventListener('mouseleave', () => card.style.transform = '');
    });

    /* ── service tabs ── */
    document.querySelectorAll('.service-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.service-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const f = tab.dataset.filter;
        document.querySelectorAll('.service-card').forEach(card => {
          card.classList.toggle('is-hidden', f !== 'all' && f !== card.dataset.category);
        });
      });
    });

    /* ── pricing calculator ── */
    const userRange = document.getElementById('userRange');
    const priceOut  = document.getElementById('monthlyPrice');
    const userLabel = document.getElementById('userCountLabel');
    function updatePricing() {
      const u = Number(userRange.value);
      userLabel.textContent = currentLang === 'pt' ? `${u} utilizadores` : `${u} users`;
      const total = u * 60;
      priceOut.textContent = currentLang === 'pt'
        ? `€${total.toLocaleString('pt-PT')} / mês`
        : `€${total.toLocaleString()} / month`;
    }
    userRange?.addEventListener('input', updatePricing);

    /* ── FAQ ── */
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('open');
      });
    });

    /* ── quick chips ── */
    const msgField = document.getElementById('messageField');
    document.querySelectorAll('.quick-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        msgField.value = chip.dataset[currentLang === 'en' ? 'messageEn' : 'messagePt'];
        msgField.focus();
      });
    });

    /* ── Turnstile — lazy load + programmatic execution ────────────────────
       The Turnstile script is NOT loaded on page load. It is injected the
       first time the user interacts with the contact form (focus or input).
       This prevents the "preloaded but not used" browser warning that occurs
       when the script loads eagerly but execution is deferred to submit time.
    ─────────────────────────────────────────────────────────────────────── */
    let turnstileLoaded   = false;
    let turnstilePending  = false;
    let turnstileRendered = false;

    function loadTurnstile() {
      if (turnstileLoaded) return;
      turnstileLoaded = true;
      const s    = document.createElement('script');
      s.src      = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      s.async    = true;
      s.onload   = () => {
        // Explicitly render the widget now that the script is ready
        if (window.turnstile && !turnstileRendered) {
          turnstile.render('#turnstileWidget', {
            sitekey:          '0x4AAAAAACsPyae8CCOwYrCp',
            execution:        'execute',
            appearance:       'interaction-only',
            callback:         onTurnstileSuccess,
            'error-callback': onTurnstileError,
            'expired-callback': onTurnstileExpired,
          });
          turnstileRendered = true;
        }
      };
      document.body.appendChild(s);
    }

    // Load Turnstile on first form interaction (focus any field)
    const contactForm = document.getElementById('contactForm');
    contactForm?.querySelectorAll('input, textarea, select').forEach(el => {
      el.addEventListener('focus', loadTurnstile, { once: true });
    });

    window.onTurnstileSuccess = function(token) {
      if (turnstilePending) {
        turnstilePending = false;
        submitContactForm(token);
      }
    };

    window.onTurnstileError = function(code) {
      console.error('Turnstile error:', code);
      turnstilePending = false;
      const status = document.getElementById('formStatus');
      if (status) {
        status.textContent = 'Security check failed. Please refresh and try again.';
        status.style.color = 'var(--danger)';
      }
      const btn = document.getElementById('formSubmitBtn');
      if (btn) { btn.disabled = false; btn.textContent = 'Schedule a Consultation'; }
      if (window.turnstile) setTimeout(() => turnstile.reset(), 1000);
    };

    window.onTurnstileExpired = function() {
      if (window.turnstile) turnstile.reset();
    };

    async function submitContactForm(turnstileToken) {
      const form   = document.getElementById('contactForm');
      const btn    = document.getElementById('formSubmitBtn');
      const status = document.getElementById('formStatus');

      try {
        const payload = {
          name:          form.name.value,
          company:       form.company.value,
          email:         form.email.value,
          phone:         form.phone.value,
          service:       form.service.value,
          message:       form.message.value,
          turnstileToken
        };

        const res    = await fetch('/api/contact', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify(payload)
        });
        const result = await res.json();

        if (!res.ok || !result.ok) throw new Error(result.error || `HTTP ${res.status}`);

        status.textContent = 'Message sent successfully.';
        status.style.color = 'var(--green)';
        form.reset();
        if (window.turnstile) turnstile.reset();

      } catch (err) {
        console.error(err);
        status.textContent = 'Submission failed. Please try again.';
        status.style.color = 'var(--danger)';
        if (window.turnstile) turnstile.reset();
      } finally {
        btn.disabled    = false;
        btn.textContent = 'Schedule a Consultation';
      }
    }

    /* ── form submit ── */
    contactForm?.addEventListener('submit', function(e) {
      e.preventDefault();

      const btn    = document.getElementById('formSubmitBtn');
      const status = document.getElementById('formStatus');

      btn.disabled       = true;
      btn.textContent    = 'Verifying\u2026';
      status.textContent = '';
      status.style.color = '';

      // If Turnstile hasn't loaded yet (user submitted without focusing a field),
      // load it now and wait for the onload → render → execute chain to complete.
      if (!turnstileLoaded) {
        loadTurnstile();
        // Script onload will render; we then need to call execute after a tick
        const waitForRender = setInterval(() => {
          if (turnstileRendered && window.turnstile) {
            clearInterval(waitForRender);
            turnstilePending = true;
            turnstile.execute('#turnstileWidget');
          }
        }, 100);
        // Timeout safety after 8 seconds
        setTimeout(() => {
          clearInterval(waitForRender);
          if (turnstilePending) {
            turnstilePending   = false;
            status.textContent = 'Security check timed out. Please refresh.';
            status.style.color = 'var(--danger)';
            btn.disabled       = false;
            btn.textContent    = 'Schedule a Consultation';
          }
        }, 8000);
        return;
      }

      if (!window.turnstile) {
        status.textContent = 'Security check not ready. Please refresh.';
        status.style.color = 'var(--danger)';
        btn.disabled       = false;
        btn.textContent    = 'Schedule a Consultation';
        return;
      }

      turnstilePending = true;
      turnstile.execute('#turnstileWidget');
    });

    /* ── init ── */
    window.setLanguage(localStorage.getItem('bwit-lang') || 'en');

    /* logo: set correct src for initial theme */
    (function() {
      var isL = document.body.classList.contains('theme-light');
      document.querySelectorAll('.logo-img').forEach(function(img) {
        img.src = isL ? img.dataset.light : img.dataset.dark;
      });
    })();
