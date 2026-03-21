/* BlueWave IT — gdpr.js
   Shared script for gdpr.html, privacy.html, terms.html.
   nav.js handles: theme, scroll/scrolled, backToTop, logo init, lang button UI.
   This file handles: window.T nav strings so nav.js can translate the nav,
   window.setLanguage so lang toggle works, page-specific reveal + TOC.
   ================================================================ */

/* ── Shared nav + footer translations ────────────────────────────── */
window.T = {
  en: {
    nav_label:                     'Managed IT Services',
    nav_home:                      'Home',
    nav_services:                  'Services',
    nav_about:                     'About',
    nav_pricing:                   'Pricing',
    nav_faq:                       'FAQ',
    nav_contact:                   'Contact',
    theme_dark:                    'Dark',
    theme_light:                   'Light',
    footer_terms:                  'Terms and Conditions',
    footer_privacy:                'Privacy Policy',
    footer_gdpr:                   'GDPR',
    footer_copy:                   '© 2026 BlueWave IT. All rights reserved.',
    gdpr_pill:                     'GDPR Compliance',
    gdpr_h1:                       'Your data. Protected by design.',
    gdpr_bc:                       'GDPR',
    gdpr_stat1:                    'Breach notification window',
    gdpr_stat2:                    'Data subject request response',
    gdpr_stat3:                    'Encryption standard (at rest)',
    gdpr_stat4:                    'Encryption standard (in transit)',
    gdpr_cta_h3:                   'Need a Data Processing Agreement?',
    gdpr_cta_p:                    'All BlueWave IT managed service clients receive a GDPR-compliant DPA as standard. If you\'re not yet a client, contact us to discuss your IT and compliance needs.',
    gdpr_h2_1:                     'Our Role: Controller vs Processor',
    gdpr_h2_2:                     'The Seven GDPR Principles',
    gdpr_h2_3:                     'Data Processing Agreements',
    gdpr_h2_4:                     'How We Help Your Business Comply',
    gdpr_h2_5:                     'Data Subject Rights',
    gdpr_h2_6:                     'Security Measures (Art. 32)',
    gdpr_h2_7:                     'Data Breach Response',
    gdpr_h2_8:                     'Sub-processors',
    gdpr_h2_9:                     'International Data Transfers',
    gdpr_h2_10:                    'Your Obligations as a Client Controller',
    gdpr_h2_11:                    'Supervisory Authority — CNPD',
    gdpr_h2_12:                    'Contact & Data Protection Queries',
    priv_pill:                     'Privacy Policy',
    priv_h1:                       'Your data. Handled with care.',
    priv_bc:                       'Privacy Policy',
    priv_stat1:                    'Transparency obligation',
    priv_stat2:                    'Subject request response',
    priv_stat3:                    'All data stored in EU',
    priv_stat4:                    'Portuguese supervisory authority',
    priv_cta_h3:                   'Questions about how we handle your data?',
    priv_cta_p:                    'Get in touch and we\'ll respond clearly and promptly — no jargon, no delay.',
    priv_h2_1:                     'Who We Are',
    priv_h2_2:                     'What Data We Collect',
    priv_h2_3:                     'Legal Basis for Processing',
    priv_h2_4:                     'How We Use Your Data',
    priv_h2_5:                     'Data Retention',
    priv_h2_6:                     'Your Rights',
    priv_h2_7:                     'Cookies',
    priv_h2_8:                     'Third-Party Services',
    priv_h2_9:                     'Security',
    priv_h2_10:                    'Changes to This Policy',
    priv_h2_11:                    'Contact',
    terms_pill:                    'Terms and Conditions',
    terms_h1:                      'Clear terms. No surprises.',
    terms_bc:                      'Terms and Conditions',
    terms_stat1:                   'Notice for contract changes',
    terms_stat2:                   'GDPR DPA included',
    terms_stat3:                   'Governed by Portuguese law',
    terms_stat4:                   'Master Service Agreement',
    terms_cta_h3:                  'Questions about our terms?',
    terms_cta_p:                   'We\'re happy to walk through any aspect of the agreement before you sign. Get in touch for a straight conversation.',
    terms_h2_1:                    'Definitions',
    terms_h2_2:                    'Services',
    terms_h2_3:                    'Fees & Payment',
    terms_h2_4:                    'Service Levels (SLA)',
    terms_h2_5:                    'Client Obligations',
    terms_h2_6:                    'Intellectual Property',
    terms_h2_7:                    'Confidentiality',
    terms_h2_8:                    'Data Protection',
    terms_h2_9:                    'Liability',
    terms_h2_10:                   'Term & Termination',
    terms_h2_11:                   'Acceptable Use',
    terms_h2_12:                   'Governing Law & Disputes',
  },
  pt: {
    nav_label:                     'Serviços IT Geridos',
    nav_home:                      'Início',
    nav_services:                  'Serviços',
    nav_about:                     'Sobre',
    nav_pricing:                   'Preços',
    nav_faq:                       'FAQ',
    nav_contact:                   'Contacto',
    theme_dark:                    'Escuro',
    theme_light:                   'Claro',
    footer_terms:                  'Termos e Condições',
    footer_privacy:                'Política de Privacidade',
    footer_gdpr:                   'RGPD',
    footer_copy:                   '© 2026 BlueWave IT. Tecnologia fiável para empresas em crescimento.',
    gdpr_pill:                     'Conformidade RGPD',
    gdpr_h1:                       'Os seus dados. Protegidos por design.',
    gdpr_bc:                       'RGPD',
    gdpr_stat1:                    'Prazo de notificação de violação',
    gdpr_stat2:                    'Resposta a pedido de titular',
    gdpr_stat3:                    'Padrão de encriptação (em repouso)',
    gdpr_stat4:                    'Padrão de encriptação (em trânsito)',
    gdpr_cta_h3:                   'Precisa de um Acordo de Tratamento de Dados?',
    gdpr_cta_p:                    'Todos os clientes de serviços geridos da BlueWave IT recebem um ATD conforme com o RGPD como padrão. Se ainda não é cliente, contacte-nos para discutir as suas necessidades de IT e conformidade.',
    gdpr_h2_1:                     'O Nosso Papel: Responsável vs Subcontratante',
    gdpr_h2_2:                     'Os Sete Princípios do RGPD',
    gdpr_h2_3:                     'Acordos de Tratamento de Dados',
    gdpr_h2_4:                     'Como Ajudamos a Sua Empresa a Cumprir',
    gdpr_h2_5:                     'Direitos dos Titulares de Dados',
    gdpr_h2_6:                     'Medidas de Segurança (Art. 32)',
    gdpr_h2_7:                     'Resposta a Violações de Dados',
    gdpr_h2_8:                     'Subcontratantes',
    gdpr_h2_9:                     'Transferências Internacionais de Dados',
    gdpr_h2_10:                    'As Suas Obrigações como Responsável Cliente',
    gdpr_h2_11:                    'Autoridade de Supervisão — CNPD',
    gdpr_h2_12:                    'Contacto e Questões de Proteção de Dados',
    priv_pill:                     'Política de Privacidade',
    priv_h1:                       'Os seus dados. Tratados com cuidado.',
    priv_bc:                       'Política de Privacidade',
    priv_stat1:                    'Obrigação de transparência',
    priv_stat2:                    'Resposta a pedido de titular',
    priv_stat3:                    'Todos os dados armazenados na UE',
    priv_stat4:                    'Autoridade de supervisão portuguesa',
    priv_cta_h3:                   'Questões sobre como tratamos os seus dados?',
    priv_cta_p:                    'Entre em contacto e respondemos de forma clara e rápida — sem jargão, sem demora.',
    priv_h2_1:                     'Quem Somos',
    priv_h2_2:                     'Que Dados Recolhemos',
    priv_h2_3:                     'Base Legal para o Tratamento',
    priv_h2_4:                     'Como Utilizamos os Seus Dados',
    priv_h2_5:                     'Retenção de Dados',
    priv_h2_6:                     'Os Seus Direitos',
    priv_h2_7:                     'Cookies',
    priv_h2_8:                     'Serviços de Terceiros',
    priv_h2_9:                     'Segurança',
    priv_h2_10:                    'Alterações a Esta Política',
    priv_h2_11:                    'Contacto',
    terms_pill:                    'Termos e Condições',
    terms_h1:                      'Termos claros. Sem surpresas.',
    terms_bc:                      'Termos e Condições',
    terms_stat1:                   'Pré-aviso para alterações contratuais',
    terms_stat2:                   'ATD RGPD incluído',
    terms_stat3:                   'Regido pela lei portuguesa',
    terms_stat4:                   'Contrato de Serviços Principal',
    terms_cta_h3:                  'Questões sobre os nossos termos?',
    terms_cta_p:                   'Temos todo o gosto em explicar qualquer aspeto do contrato antes de assinar. Entre em contacto para uma conversa direta.',
    terms_h2_1:                    'Definições',
    terms_h2_2:                    'Serviços',
    terms_h2_3:                    'Honorários e Pagamento',
    terms_h2_4:                    'Níveis de Serviço (SLA)',
    terms_h2_5:                    'Obrigações do Cliente',
    terms_h2_6:                    'Propriedade Intelectual',
    terms_h2_7:                    'Confidencialidade',
    terms_h2_8:                    'Proteção de Dados',
    terms_h2_9:                    'Responsabilidade',
    terms_h2_10:                   'Vigência e Rescisão',
    terms_h2_11:                   'Utilização Aceitável',
    terms_h2_12:                   'Lei Aplicável e Litígios',
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
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var k = el.dataset.i18nHtml;
    if (window.T[lang] && window.T[lang][k] !== undefined) {
      el.innerHTML = window.T[lang][k];
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
