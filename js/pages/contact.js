/* BlueWave IT — contact.js
   nav.js handles: theme, lang toggles, logo init, scroll, backToTop.
   This file handles: contact-specific i18n, 2-step form, Turnstile, submit.
   window.setLanguage exposed so nav.js lang switcher keeps form strings in sync.
   ================================================================ */

const T = {
    en: {
      managed_services_label:'Managed IT Services',
      nav_services:'Services', nav_about:'About', nav_pricing:'Pricing', nav_faq:'FAQ', nav_contact:'Contact',
      cta_book:'Book a Consultation',
      theme_dark:'Dark', theme_light:'Light',
      contact_label:'Get In Touch',
      contact_hero_1:'Let\'s talk about your', contact_hero_2:'IT environment',
      contact_hero_body:'Request a free assessment, ask about a service, or tell us about your business. We\'ll come back to you with a straightforward answer and no sales pressure.',
      info_card_1_title:'Schedule a Call',   info_card_1_body:'Book a short discovery call to discuss your IT needs and get a clear view of how we can help.',   info_card_1_cta:'Book now →',
      info_card_2_title:'Send an Email',     info_card_2_body:'Prefer to write it out? Use the form below or reach us directly by email for any questions.',
      info_card_3_title:'Algarve-Based',     info_card_3_body:'We are based in the Algarve and serve businesses throughout the region — on-site visits available.', info_card_3_region:'Portimão, Algarve, Portugal',
      contact_title:'Let\'s talk about your IT environment',
      contact_body:'Use the form below to request a consultation, ask a question, or start a conversation about managed support for your business.',
      contact_left_1_title:'Managed Services',   contact_left_1_body:'Proactive IT support, security, cloud, backup, and consulting.',
      contact_left_2_title:'Ideal Clients',       contact_left_2_body:'Small and midsize businesses that want dependable technology without the chaos.',
      contact_left_3_title:'Response Focus',      contact_left_3_body:'Clear communication, fast action, and long-term reliability.',
      contact_region_title:'Region',              contact_region_body:'Algarve, Portugal — serving businesses across the region.',
      response_title:'Typically responds within 1 business day',
      response_sub:'Free consultation — no commitment required',
      chips_label:'Quick select topic',
      chip_managed:'Managed IT', chip_cyber:'Cybersecurity', chip_cloud:'Cloud Support', chip_backup:'Backups', chip_assessment:'Free Assessment',
      form_title:'Send us a message',
      form_privacy_note:'Your information is used only to respond to your enquiry. We never share your data. See our ',
      cta_schedule:'Schedule a Consultation',
      field_name:'Your name', field_company:'Company', field_email:'Email address',
      field_phone:'Phone number', field_size:'Team size', field_service:'Area of interest',
      field_message:'Your message',
      err_name:'Please enter your name.',
      err_company:'Please enter your company name.',
      err_email:'Please enter a valid email address.',
      err_service:'Please select an area of interest.',
      err_message:'Please tell us a little about your needs.',
      prog_step1_label:'Your details', prog_step1_sub:'Name, company, contact',
      prog_step2_label:'Your enquiry', prog_step2_sub:'Service, message, send',
      btn_next:'Continue to your enquiry',
      btn_back:'Back',
      process_label:'Getting Started',
      process_title:'How onboarding works',
      process_body:'A simple process that helps you move from reactive support to a more stable, secure, and well-managed IT environment.',
      proc_1_title:'Discovery', proc_1_body:'We review your users, devices, tools, pain points, and business priorities.',
      proc_2_title:'Assessment', proc_2_body:'We identify quick wins, security gaps, and support opportunities.',
      proc_3_title:'Transition', proc_3_body:'Monitoring, support workflows, backups, and admin access are brought under control.',
      proc_4_title:'Ongoing Support', proc_4_body:'We keep systems healthy, reduce downtime, and help plan ahead.',
      footer_tagline:'Enterprise-grade IT management for growing businesses across the Algarve. Reliable, secure, and predictably priced.',
      footer_services_head:'Services', footer_company_head:'Company',
      svc_it_title:'Managed IT', svc_sec_title:'Cybersecurity', svc_cloud_title:'Cloud Services', svc_net_title:'Network Management', svc_backup_title:'Backup & Recovery',
      footer_privacy:'Privacy Policy', footer_terms:'Terms and Conditions', footer_gdpr:'GDPR',
      footer_copy:'© 2026 BlueWave IT. Reliable technology for growing businesses.',
    },
    pt: {
      managed_services_label:'Serviços IT Geridos',
      nav_services:'Serviços', nav_about:'Sobre', nav_pricing:'Preços', nav_faq:'FAQ', nav_contact:'Contacto',
      cta_book:'Marcar Consulta',
      theme_dark:'Escuro', theme_light:'Claro',
      contact_label:'Entre em Contacto',
      contact_hero_1:'Vamos falar sobre o seu', contact_hero_2:'ambiente IT',
      contact_hero_body:'Peça uma avaliação gratuita, pergunte sobre um serviço ou conte-nos sobre a sua empresa. Respondemos de forma clara e sem pressão comercial.',
      info_card_1_title:'Marcar uma Chamada',    info_card_1_body:'Reserve uma chamada curta para discutir as suas necessidades IT e perceber como podemos ajudar.',           info_card_1_cta:'Marcar agora →',
      info_card_2_title:'Enviar Email',           info_card_2_body:'Prefere escrever? Use o formulário abaixo ou contacte-nos diretamente por email para qualquer questão.',
      info_card_3_title:'Baseados no Algarve',   info_card_3_body:'Estamos no Algarve e apoiamos empresas em toda a região — visitas presenciais disponíveis.',                info_card_3_region:'Portimão, Algarve, Portugal',
      contact_title:'Vamos falar sobre o seu ambiente IT',
      contact_body:'Use o formulário abaixo para pedir uma consulta, colocar uma questão ou iniciar uma conversa sobre suporte gerido para a sua empresa.',
      contact_left_1_title:'Serviços Geridos',   contact_left_1_body:'Suporte IT proativo, segurança, cloud, backup e consultoria.',
      contact_left_2_title:'Clientes Ideais',    contact_left_2_body:'Pequenas e médias empresas que querem tecnologia fiável sem o caos.',
      contact_left_3_title:'Foco na Resposta',   contact_left_3_body:'Comunicação clara, ação rápida e fiabilidade a longo prazo.',
      contact_region_title:'Região',             contact_region_body:'Algarve, Portugal — apoio a empresas em toda a região.',
      response_title:'Responde normalmente em 1 dia útil',
      response_sub:'Consulta gratuita — sem compromisso',
      chips_label:'Selecionar tema rapidamente',
      chip_managed:'IT Gerido', chip_cyber:'Cibersegurança', chip_cloud:'Suporte Cloud', chip_backup:'Backups', chip_assessment:'Avaliação Gratuita',
      form_title:'Envie-nos uma mensagem',
      form_privacy_note:'As suas informações são utilizadas apenas para responder ao seu contacto. Não partilhamos os seus dados. Consulte a nossa ',
      cta_schedule:'Marcar Consulta',
      field_name:'O seu nome', field_company:'Empresa', field_email:'Endereço de email',
      field_phone:'Número de telefone', field_size:'Dimensão da equipa', field_service:'Área de interesse',
      field_message:'A sua mensagem',
      err_name:'Por favor introduza o seu nome.',
      err_company:'Por favor introduza o nome da empresa.',
      err_email:'Por favor introduza um endereço de email válido.',
      err_service:'Por favor selecione uma área de interesse.',
      err_message:'Por favor diga-nos um pouco sobre as suas necessidades.',
      prog_step1_label:'Os seus dados', prog_step1_sub:'Nome, empresa, contacto',
      prog_step2_label:'O seu pedido', prog_step2_sub:'Serviço, mensagem, envio',
      btn_next:'Continuar para o pedido',
      btn_back:'Voltar',
      process_label:'Como Começar',
      process_title:'Como funciona o onboarding',
      process_body:'Um processo simples que o ajuda a passar de suporte reativo para um ambiente IT mais estável, seguro e bem gerido.',
      proc_1_title:'Descoberta', proc_1_body:'Revemos utilizadores, dispositivos, ferramentas, dificuldades e prioridades do negócio.',
      proc_2_title:'Avaliação', proc_2_body:'Identificamos ganhos rápidos, falhas de segurança e oportunidades de melhoria.',
      proc_3_title:'Transição', proc_3_body:'Monitorização, fluxos de suporte, backups e acessos administrativos ficam sob controlo.',
      proc_4_title:'Suporte Contínuo', proc_4_body:'Mantemos os sistemas saudáveis, reduzimos paragens e ajudamos a planear o futuro.',
      footer_tagline:'Gestão IT de nível empresarial para empresas em crescimento no Algarve. Fiável, segura e com preço previsível.',
      footer_services_head:'Serviços', footer_company_head:'Empresa',
      svc_it_title:'IT Gerido', svc_sec_title:'Cibersegurança', svc_cloud_title:'Serviços Cloud', svc_net_title:'Gestão de Rede', svc_backup_title:'Backup e Recuperação',
      footer_privacy:'Política de Privacidade', footer_terms:'Termos e Condições', footer_gdpr:'RGPD',
      footer_copy:'© 2026 BlueWave IT. Tecnologia fiável para empresas em crescimento.',
    }
  };

  let currentLang = localStorage.getItem('bwit-lang') || 'en';

  /* ── i18n ── */
  window.setLanguage = function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (T[lang][k]) el.textContent = T[lang][k];
    });
    // Translate select options
    document.querySelectorAll('#serviceSelect option').forEach(opt => {
      if (opt.dataset[lang]) opt.textContent = opt.dataset[lang];
    });
    document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  }

  /* ── reveal on scroll ── */
/* ── reveal ── */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.10 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── char counter ── */
  const msgField  = document.getElementById('messageField');
  const charCount = document.getElementById('charCount');
  if (msgField && charCount) {
    msgField.addEventListener('input', () => {
      const n = msgField.value.length;
      charCount.textContent = n;
      charCount.closest('.char-counter')?.classList.toggle('near-limit', n > 900);
    });
  }

/* ── quick chips ── */
  document.querySelectorAll('.quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (!msgField) return;
      msgField.value = chip.dataset[currentLang === 'en' ? 'messageEn' : 'messagePt'];
      msgField.dispatchEvent(new Event('input'));
      // If on step 1, advance to step 2 first
      if (document.getElementById('step1').classList.contains('active')) {
        goToStep(2);
      }
      msgField.focus();
      msgField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

/* ── select colour state ── */
  const serviceSelect = document.getElementById('serviceSelect');
  serviceSelect?.addEventListener('change', () => {
    serviceSelect.classList.toggle('has-value', serviceSelect.value !== '');
  });

/* ── 2-step progress ── */
  function goToStep(n) {
    const s1 = document.getElementById('step1');
    const s2 = document.getElementById('step2');
    const dot1 = document.getElementById('progDot1');
    const dot2 = document.getElementById('progDot2');
    const conn = document.getElementById('progConnector');
    const ps1  = document.getElementById('progStep1');
    const ps2  = document.getElementById('progStep2');

    if (n === 2) {
      s1.classList.remove('active');
      s2.classList.add('active');
      dot1.classList.remove('active'); dot1.classList.add('done');
      dot1.textContent = '';
      dot2.classList.add('active');
      conn.classList.add('filled');
      ps1.classList.remove('is-active'); ps2.classList.add('is-active');
      // Trigger Turnstile now that the container is visible
      if (window.turnstile) {
        try { turnstile.execute(); } catch(e) { /* already executed */ }
      }
    } else {
      s2.classList.remove('active');
      s1.classList.add('active');
      dot1.classList.remove('done'); dot1.classList.add('active');
      dot1.textContent = '1';
      dot2.classList.remove('active');
      conn.classList.remove('filled');
      ps1.classList.add('is-active'); ps2.classList.remove('is-active');
    }
  }

  /* Validate step 1 fields before advancing */
  function validateStep1() {
    const name    = document.getElementById('fieldName');
    const company = document.getElementById('fieldCompany');
    const email   = document.getElementById('fieldEmail');
    const isPt    = currentLang === 'pt';

    if (!name.value.trim()) {
      name.focus(); name.style.borderColor = 'rgba(255,95,95,0.55)';
      name.addEventListener('input', () => name.style.borderColor = '', { once: true });
      return false;
    }
    if (!company.value.trim()) {
      company.focus(); company.style.borderColor = 'rgba(255,95,95,0.55)';
      company.addEventListener('input', () => company.style.borderColor = '', { once: true });
      return false;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    if (!emailOk) {
      email.focus(); email.style.borderColor = 'rgba(255,95,95,0.55)';
      email.addEventListener('input', () => email.style.borderColor = '', { once: true });
      return false;
    }
    return true;
  }

  document.getElementById('btnNext')?.addEventListener('click', () => {
    if (validateStep1()) goToStep(2);
  });

  document.getElementById('btnBack')?.addEventListener('click', () => goToStep(1));

/* ── form submit ── */
  document.getElementById('contactForm')?.addEventListener('submit', async function (e) {
    e.preventDefault();

    const form   = e.target;
    const btn    = document.getElementById('formSubmitBtn');
    const status = document.getElementById('formStatus');
    const isPt   = currentLang === 'pt';

    const turnstileToken = document.querySelector('input[name="cf-turnstile-response"]')?.value;
    if (!turnstileToken) {
      status.textContent = isPt
        ? 'Por favor conclua a verificação de segurança.'
        : 'Please complete the security check.';
      status.style.color = 'var(--danger)';
      return;
    }

    btn.disabled    = true;
    btn.textContent = isPt ? 'A enviar…' : 'Sending…';
    status.textContent = '';
    status.style.color = '';

    try {
      const payload = {
        name:          form.name.value,
        company:       form.company.value,
        email:         form.email.value,
        phone:         form.phone.value,
        business_size: form.business_size.value,
        service:       form.service.value,
        message:       form.message.value,
        turnstileToken
      };

      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload)
      });

      const result = await res.json();

      if (!res.ok || !result.ok) {
        throw new Error(result.error || `HTTP ${res.status}`);
      }

      status.textContent = isPt
        ? '✓ Mensagem enviada. Entraremos em contacto em breve.'
        : "✓ Message sent. We'll be in touch shortly.";
      status.style.color = 'var(--green)';
      form.reset();
      serviceSelect?.classList.remove('has-value');
      if (charCount) charCount.textContent = '0';
      goToStep(1);
      if (window.turnstile) { turnstile.reset(); }

    } catch (err) {
      console.error('Form submission error:', err);
      status.textContent = isPt
        ? '⚠ Erro ao enviar. Por favor tente novamente ou envie email para hello@bluewaveit.pt.'
        : '⚠ Submission failed. Please try again or email hello@bluewaveit.pt.';
      status.style.color = 'var(--danger)';
    } finally {
      btn.disabled    = false;
      btn.textContent = isPt ? 'Marcar Consulta' : 'Schedule a Consultation';
    }
  });

  /* ── init: apply saved language ── */
  setLanguage(localStorage.getItem('bwit-lang') || 'en');
