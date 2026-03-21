/* ================================================================
   BlueWave IT — home.js
   Page-specific JS for index.html
   Loads after site.js
   ================================================================ */

    let currentLang   = 'en';

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
    const userRange  = document.getElementById('userRange');
    const priceOut   = document.getElementById('monthlyPrice');
    const userLabel  = document.getElementById('userCountLabel');
    function updatePricing() {
      const u = Number(userRange.value);
      userLabel.textContent = currentLang === 'pt' ? `${u} utilizadores` : `${u} users`;
      const total = u * 60;
      priceOut.textContent  = currentLang === 'pt'
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

    /* ── form ── */

document.getElementById('contactForm')?.addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const btn = document.getElementById('formSubmitBtn');
  const status = document.getElementById('formStatus');

  const turnstileToken = document.querySelector('input[name="cf-turnstile-response"]')?.value;

  if (!turnstileToken) {
    status.textContent = 'Please complete the security check.';
    status.style.color = 'var(--danger)';
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Sending…';
  status.textContent = '';
  status.style.color = '';

  try {
    const payload = {
      name: form.name.value,
      company: form.company.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      message: form.message.value,
      turnstileToken
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await res.json();

    if (!res.ok || !result.ok) {
      throw new Error(result.error || `HTTP ${res.status}`);
    }

    status.textContent = 'Message sent successfully.';
    status.style.color = 'var(--green)';
    form.reset();

    if (window.turnstile) {
      turnstile.reset();
    }
  } catch (err) {
    console.error(err);
    status.textContent = 'Submission failed. Please try again.';
    status.style.color = 'var(--danger)';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Schedule a Consultation';
  }
});


    /* ── init ── */
    window.setLanguage(localStorage.getItem('bwit-lang') || 'en');
  /* logo: set correct src for initial theme */
  (function(){
    var isL = document.body.classList.contains('theme-light');
    document.querySelectorAll('.logo-img').forEach(function(img){
      img.src = isL ? img.dataset.light : img.dataset.dark;
    });
  })();

