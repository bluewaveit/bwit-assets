/**
 * ================================================================
 *  BlueWave IT — site.js
 *  Shared across all pages.
 *
 *  Responsibilities:
 *    1. Theme toggle (dark / light)
 *    2. Language toggle (EN / PT) + i18n DOM walker
 *    3. Mobile nav open / close
 *    4. Scroll: header shadow + back-to-top visibility
 *    5. Reveal animation (IntersectionObserver)
 *    6. Counter animation (.counter elements)
 *    7. Card tilt effect (#heroCard and .tilt-card)
 *    8. Service tab filter (.service-tab / .service-card)
 *    9. FAQ accordion (.faq-question)
 *   10. Pricing calculator (#userRange)
 *
 *  Page-specific JS (contact form, Turnstile) lives in contact.js.
 *
 *  ── HOW TO ADD PAGE-SPECIFIC TRANSLATIONS ──
 *  Add your page keys into the `en` and `pt` objects below, or
 *  merge them in from a separate translations file before this
 *  script runs. All keys are looked up by data-i18n attribute.
 * ================================================================
 */

/* ================================================================
   TRANSLATIONS
   Keys used across all pages live here (nav, footer, CTAs).
   Homepage-specific keys are also included here until the
   translations are split into per-page files.
   ================================================================ */

const translations = {
  en: {
    /* ── Nav & shared ── */
    managed_services_label: 'Managed IT Services',
    nav_services:  'Services',
    nav_about:     'About',
    nav_pricing:   'Pricing',
    nav_faq:       'FAQ',
    nav_contact:   'Contact',
    cta_book:      'Book a Consultation',
    cta_request:   'Request a Consultation',
    cta_explore:   'Explore Services',
    theme_dark:    'Dark',
    theme_light:   'Light',

    /* ── Footer ── */
    footer_tagline:       'Enterprise-grade IT management for growing businesses across the Algarve. Reliable, secure, and predictably priced.',
    footer_services_head: 'Services',
    footer_company_head:  'Company',
    footer_free_assessment: 'Free Assessment',
    footer_privacy:       'Privacy Policy',
    footer_terms:         'Terms and Conditions',
    footer_gdpr:          'GDPR',
    footer_copy:          '© 2026 BlueWave IT. Reliable technology for growing businesses.',

    /* ── Hero ── */
    hero_eyebrow:   'Proactive MSP support for small and growing businesses',
    hero_title_1:   'Smart IT.',
    hero_title_2:   'Strong Security.',
    hero_title_3:   'Seamless Ops.',
    hero_body:      'BlueWave IT helps Algarve businesses stay secure, connected, and productive — with managed IT services, cybersecurity, cloud support, and fast technical assistance.',
    hero_point_1:   'Monitoring and proactive maintenance',
    hero_fast:      'Fast',
    hero_point_2:   'Responsive support when issues appear',
    hero_secure:    'Secure',
    hero_point_3:   'Layered protection for users and systems',

    /* ── Hero dashboard card ── */
    ops_title:            'Your IT, Always On',
    ops_subtitle:         'Proactive monitoring & round-the-clock protection',
    ops_badge:            'All Systems Healthy',
    status_monitoring:    'Endpoint Monitoring',
    status_monitoring_val:'Active',
    status_backup:        'Backup Verification',
    status_backup_val:    'Verified',
    status_patches:       'Patch Management',
    status_patches_val:   'Up to Date',
    status_security:      'Security Posture',
    status_security_val:  'Healthy',
    metric_uptime_val:    '99.9%',
    metric_uptime_label:  'Avg. Uptime',
    metric_response_val:  '<2h',
    metric_response_label:'Avg. Response Time',
    activity_title:       'Recent Activity',
    activity_1:           'Nightly backup verification completed successfully',
    activity_2:           'Security patches applied across all managed devices',
    activity_3:           'Monthly firewall review scheduled',
    included_title:       'Included in Managed Service',
    included_1_title:     'Monitoring & patching',
    included_1_body:      'Always watching core systems',
    included_2_title:     'Cybersecurity controls',
    included_2_body:      'Security first by design',
    included_3_title:     'Cloud & Microsoft 365',
    included_3_body:      'User productivity and support',
    included_4_title:     'Backup & recovery',
    included_4_body:      'Business continuity planning',

    /* ── Social proof & trust bar ── */
    proof_label:    'Trusted across the Algarve',
    proof_1:        'Real estate agencies',
    proof_2:        'Law & accounting firms',
    proof_3:        'Architecture studios',
    proof_4:        'Tourism companies',
    proof_5:        'Remote & hybrid teams',
    trust_1_title:  'Predictable',  trust_1_body: 'Monthly user-based support',
    trust_2_title:  'Protected',    trust_2_body: 'Security-first service delivery',
    trust_3_title:  'Responsive',   trust_3_body: 'Fast support when it matters',
    trust_4_title:  'Scalable',     trust_4_body: 'Built for growing businesses',

    /* ── Problems ── */
    problems_label: 'Common Challenges',
    problems_title: 'Common IT problems we solve',
    problems_body:  'These are the issues that quietly slow teams down, create frustration, and increase risk when IT is handled reactively.',
    problem_1_title:'Slow computers and constant interruptions',
    problem_1_body: 'Performance issues, aging devices, and repeated technical problems that waste staff time.',
    problem_2_title:'Security gaps and ransomware worries',
    problem_2_body: 'Weak visibility, inconsistent updates, and uncertainty around how well systems are protected.',
    problem_3_title:'Cloud and Microsoft 365 confusion',
    problem_3_body: 'Permissions, shared files, licensing, and cloud setup problems that affect daily work.',
    problem_4_title:'Unreliable Wi-Fi and network issues',
    problem_4_body: 'Intermittent connectivity, poor coverage, and network bottlenecks that disrupt productivity.',
    problem_5_title:'Backup uncertainty and recovery risk',
    problem_5_body: 'Not knowing whether backups are complete, current, or actually ready to restore when needed.',
    problem_6_title:'Employees losing time to tech problems',
    problem_6_body: 'When staff are blocked by recurring issues, business momentum slows and frustration rises.',

    /* ── Services ── */
    services_label: 'What We Offer',
    services_title: 'Managed services built for real business needs',
    services_body:  'Designed for companies that want predictable support, better security, and less downtime without managing everything in-house.',
    tab_all:        'All',
    tab_core:       'Core IT',
    tab_security:   'Security',
    tab_cloud:      'Cloud',
    tab_continuity: 'Continuity',
    svc_it_title:   'Managed IT Services',
    svc_it_body:    'Day-to-day IT management, maintenance, updates, endpoint support, and proactive monitoring.',
    svc_it_f1: '24/7 monitoring', svc_it_f2: 'Patch management', svc_it_f3: 'Remote support',
    svc_sec_title:  'Cybersecurity',
    svc_sec_body:   'Protect your users, devices, and data with layered security and practical risk reduction.',
    svc_sec_f1: 'Endpoint protection', svc_sec_f2: 'Security hardening', svc_sec_f3: 'User awareness support',
    svc_cloud_title:'Cloud Services',
    svc_cloud_body: 'Support for Microsoft 365, cloud migrations, shared files, email, and collaboration tools.',
    svc_cloud_f1: 'Microsoft 365 administration', svc_cloud_f2: 'Cloud migrations', svc_cloud_f3: 'Remote work readiness',
    svc_net_title:  'Network Management',
    svc_net_body:   'Reliable infrastructure, firewall support, Wi-Fi optimisation, and visibility into network health.',
    svc_net_f1: 'Firewall and router support', svc_net_f2: 'Network monitoring', svc_net_f3: 'Wi-Fi optimisation',
    svc_backup_title:'Backup & Recovery',
    svc_backup_body: 'Resilient backup strategies and fast recovery planning to reduce downtime and risk.',
    svc_backup_f1: 'Automated backups', svc_backup_f2: 'Restore testing', svc_backup_f3: 'Disaster recovery planning',
    svc_consult_title:'IT Consulting',
    svc_consult_body: 'Clear guidance on upgrades, security improvements, budgeting, and long-term technology decisions.',
    svc_consult_f1: 'Roadmaps and planning', svc_consult_f2: 'Vendor guidance', svc_consult_f3: 'Growth-ready infrastructure',
    svc_details:    'Details →',

    /* ── Remote work ── */
    remote_pill_1:      'Fully Managed Service',
    remote_pill_2:      'Business-Grade Remote Access',
    remote_title:       'Secure remote work for modern teams',
    remote_body:        'Give staff a safer, easier way to work from home, on the road, or across multiple locations. We deploy and manage secure remote connectivity that protects business systems while keeping employees productive.',
    remote_f1_title:    'Protected access',
    remote_f1_body:     'Encrypted connections between employees and company resources, without exposing internal systems to the public internet.',
    remote_f2_title:    'Dedicated home office setup',
    remote_f2_body:     'We can deploy a preconfigured network appliance for remote staff to create a more secure, business-ready home office environment.',
    remote_f3_title:    'Easy for employees',
    remote_f3_body:     'Simple to use, fast to connect, and designed so your staff can focus on work instead of dealing with technical setup.',
    remote_cta_1:       'Book a Consultation',
    remote_cta_2:       'See Pricing',
    remote_panel_title: 'Remote Access Overview',
    remote_node_left:   'Remote Worker',
    remote_badge:       'Secure Tunnel',
    remote_node_right:  'Business Network',
    remote_s1_label:    'Connection Security', remote_s1_value: 'Encrypted',
    remote_s2_label:    'Management',          remote_s2_value: '24/7 Monitored',
    remote_s3_label:    'Access Control',      remote_s3_value: 'Verified Devices',
    remote_s4_label:    'Best Fit',            remote_s4_value: 'Hybrid & Remote Teams',

    /* ── About / Why ── */
    about_label:        'Why BlueWave IT',
    why_title:          'Why businesses choose BlueWave IT',
    why_body:           'BlueWave IT is built around proactive support, practical security, and dependable service. The goal is simple: keep technology stable so your team can stay focused on business.',
    why_f1: 'Predictable monthly support model',
    why_f2: 'Fast response and clear communication',
    why_f3: 'Security-minded management of users and systems',
    why_f4: 'Scalable support for growing companies',
    why_f5: 'Professional guidance without unnecessary complexity',
    industries_title:   'Industries served',
    industries_body:    'BlueWave IT is a strong fit for small and midsize organisations that need dependable support without building a full internal IT department.',
    ind_1_title: 'Professional Services', ind_1_body: 'Firms that need reliability and security',
    ind_2_title: 'Architecture & Design', ind_2_body: 'Teams that rely on file access and collaboration',
    ind_3_title: 'Finance & Admin',       ind_3_body: 'Organisations handling sensitive data',
    ind_4_title: 'Growing SMBs',          ind_4_body: 'Businesses scaling beyond ad hoc IT support',

    /* ── Process ── */
    process_label: 'Getting Started',
    process_title: 'How onboarding works',
    process_body:  'A simple process that helps you move from reactive support to a more stable, secure, and well-managed IT environment.',
    proc_1_title: 'Discovery',    proc_1_body: 'We review your users, devices, tools, pain points, and business priorities.',
    proc_2_title: 'Assessment',   proc_2_body: 'We identify quick wins, security gaps, and support opportunities.',
    proc_3_title: 'Transition',   proc_3_body: 'Monitoring, support workflows, backups, and admin access are brought under control.',
    proc_4_title: 'Ongoing Support', proc_4_body: 'We keep systems healthy, reduce downtime, and help plan ahead.',

    /* ── Pricing ── */
    pricing_label:      'Pricing',
    pricing_title:      'Simple MSP pricing',
    pricing_body:       'A clear user-based plan that makes support, maintenance, and security easier to budget.',
    pricing_plan_name:  'Standard Managed Plan',
    pricing_ribbon:     'Best for growing teams',
    pricing_unit:       'per user / month',
    pricing_f1: 'Managed endpoint support',
    pricing_f2: 'Monitoring and routine maintenance',
    pricing_f3: 'Security baseline controls',
    pricing_f4: 'Helpdesk assistance',
    pricing_f5: 'Patch management',
    pricing_f6: 'Microsoft 365 support',
    calc_users:         'Estimated users',
    calc_investment:    'Estimated monthly investment',
    cta_pricing:        'Ask About Pricing',
    pricing_help_title: 'What this model helps solve',
    pricing_help_body:  'Instead of reacting to one-off IT issues, your business gets a support structure designed to prevent problems before they affect operations.',
    pricing_help_f1: 'Reduced downtime and fewer surprises',
    pricing_help_f2: 'More consistent security and updates',
    pricing_help_f3: 'Better support experience for employees',
    pricing_help_f4: 'Clearer monthly budgeting for IT',
    pricing_help_f5: 'A partner that grows with your business',

    /* ── FAQ ── */
    faq_label: 'FAQ',
    faq_title: 'Frequently asked questions',
    faq_body:  'Quick answers to common questions small and midsize businesses ask when switching to managed IT support.',
    faq_q1: 'Do I need to replace my current systems?',
    faq_a1: 'No. BlueWave IT is designed to improve and support existing environments first, then guide upgrades only where they make practical sense.',
    faq_q2: 'Can you support Microsoft 365 and shared files?',
    faq_a2: 'Yes. Microsoft 365 administration, collaboration support, and file access workflows are part of the core managed service offering.',
    faq_q3: 'What size business is the best fit?',
    faq_a3: 'BlueWave IT is ideal for small and midsize businesses that want dependable support, better security, and predictable monthly IT costs.',

    /* ── Assessment CTA ── */
    assessment_title: 'Free IT assessment',
    assessment_body:  'We review your IT environment, identify risks, flag security gaps, and highlight opportunities to improve performance and reliability.',
    assessment_cta:   'Request Free Assessment',

    /* ── Contact ── */
    contact_label:          'Get In Touch',
    contact_title:          "Let's talk about your IT environment",
    contact_body:           'Use the form below to request a consultation, ask a question, or start a conversation about managed support for your business.',
    contact_left_1_title:   'Managed Services',
    contact_left_1_body:    'Proactive IT support, security, cloud, backup, and consulting.',
    contact_left_2_title:   'Ideal Clients',
    contact_left_2_body:    'Small and midsize businesses that want dependable technology without the chaos.',
    contact_left_3_title:   'Response Focus',
    contact_left_3_body:    'Clear communication, fast action, and long-term reliability.',
    contact_region_title:   'Region',
    contact_region_body:    'Algarve, Portugal — serving businesses across the region.',
    chip_managed:   'Managed IT',
    chip_cyber:     'Cybersecurity',
    chip_cloud:     'Cloud Support',
    chip_backup:    'Backups',
    cta_schedule:   'Schedule a Consultation',
  },

  pt: {
    /* ── Nav & shared ── */
    managed_services_label: 'Serviços IT Geridos',
    nav_services:  'Serviços',
    nav_about:     'Sobre',
    nav_pricing:   'Preços',
    nav_faq:       'FAQ',
    nav_contact:   'Contacto',
    cta_book:      'Marcar Consulta',
    cta_request:   'Pedir Consulta',
    cta_explore:   'Explorar Serviços',
    theme_dark:    'Escuro',
    theme_light:   'Claro',

    /* ── Footer ── */
    footer_tagline:       'Gestão IT de nível empresarial para empresas em crescimento no Algarve. Fiável, segura e com preço previsível.',
    footer_services_head: 'Serviços',
    footer_company_head:  'Empresa',
    footer_free_assessment: 'Avaliação Gratuita',
    footer_privacy:       'Política de Privacidade',
    footer_terms:         'Termos e Condições',
    footer_gdpr:          'RGPD',
    footer_copy:          '© 2026 BlueWave IT. Tecnologia fiável para empresas em crescimento.',

    /* ── Hero ── */
    hero_eyebrow:   'Suporte MSP proativo para pequenas e médias empresas em crescimento',
    hero_title_1:   'IT Inteligente.',
    hero_title_2:   'Segurança Robusta.',
    hero_title_3:   'Operações Fluidas.',
    hero_body:      'A BlueWave IT ajuda empresas do Algarve a manterem-se seguras, ligadas e produtivas — com serviços IT geridos, cibersegurança, suporte cloud e assistência técnica rápida.',
    hero_point_1:   'Monitorização e manutenção proativa',
    hero_fast:      'Rápido',
    hero_point_2:   'Suporte responsivo quando surgem problemas',
    hero_secure:    'Seguro',
    hero_point_3:   'Proteção em camadas para utilizadores e sistemas',

    /* ── Hero dashboard card ── */
    ops_title:            'O Seu IT, Sempre Ativo',
    ops_subtitle:         'Monitorização proativa e proteção permanente',
    ops_badge:            'Todos os Sistemas Saudáveis',
    status_monitoring:    'Monitorização de Endpoints',
    status_monitoring_val:'Ativo',
    status_backup:        'Verificação de Backups',
    status_backup_val:    'Verificado',
    status_patches:       'Gestão de Patches',
    status_patches_val:   'Atualizado',
    status_security:      'Postura de Segurança',
    status_security_val:  'Saudável',
    metric_uptime_val:    '99.9%',
    metric_uptime_label:  'Uptime Médio',
    metric_response_val:  '<2h',
    metric_response_label:'Tempo Médio de Resposta',
    activity_title:       'Atividade Recente',
    activity_1:           'Verificação noturna dos backups concluída com sucesso',
    activity_2:           'Patches de segurança aplicados em todos os dispositivos',
    activity_3:           'Revisão mensal da firewall agendada',
    included_title:       'Incluído no Serviço Gerido',
    included_1_title:     'Monitorização e patches',
    included_1_body:      'Acompanhamento contínuo dos sistemas',
    included_2_title:     'Controlos de cibersegurança',
    included_2_body:      'Segurança em primeiro lugar',
    included_3_title:     'Cloud e Microsoft 365',
    included_3_body:      'Produtividade e apoio ao utilizador',
    included_4_title:     'Backup e recuperação',
    included_4_body:      'Planeamento de continuidade do negócio',

    /* ── Social proof & trust bar ── */
    proof_label:    'Confiada em todo o Algarve',
    proof_1:        'Agências imobiliárias',
    proof_2:        'Escritórios de advogados e contabilidade',
    proof_3:        'Estúdios de arquitetura',
    proof_4:        'Empresas de turismo',
    proof_5:        'Equipas remotas e híbridas',
    trust_1_title:  'Previsível',   trust_1_body: 'Suporte mensal por utilizador',
    trust_2_title:  'Protegido',    trust_2_body: 'Serviço com foco na segurança',
    trust_3_title:  'Responsivo',   trust_3_body: 'Suporte rápido quando importa',
    trust_4_title:  'Escalável',    trust_4_body: 'Preparado para empresas em crescimento',

    /* ── Problems ── */
    problems_label: 'Desafios Comuns',
    problems_title: 'Problemas IT comuns que resolvemos',
    problems_body:  'Estas são as questões que atrasam equipas, criam frustração e aumentam o risco quando o IT é tratado de forma reativa.',
    problem_1_title:'Computadores lentos e interrupções constantes',
    problem_1_body: 'Problemas de desempenho, equipamentos envelhecidos e falhas repetidas que desperdiçam tempo da equipa.',
    problem_2_title:'Falhas de segurança e preocupação com ransomware',
    problem_2_body: 'Pouca visibilidade, atualizações inconsistentes e incerteza sobre o nível real de proteção.',
    problem_3_title:'Confusão com cloud e Microsoft 365',
    problem_3_body: 'Permissões, ficheiros partilhados, licenças e configurações cloud que afetam o trabalho diário.',
    problem_4_title:'Wi-Fi e rede pouco fiáveis',
    problem_4_body: 'Conectividade instável, cobertura fraca e estrangulamentos de rede que prejudicam a produtividade.',
    problem_5_title:'Incerteza sobre backups e risco na recuperação',
    problem_5_body: 'Não saber se os backups estão completos, atualizados ou realmente prontos para restaurar.',
    problem_6_title:'Colaboradores a perder tempo com problemas técnicos',
    problem_6_body: 'Quando a equipa fica bloqueada por problemas recorrentes, o negócio abranda e a frustração aumenta.',

    /* ── Services ── */
    services_label: 'O Que Oferecemos',
    services_title: 'Servicos geridos para necessidades reais do negócio',
    services_body:  'Pensado para empresas que querem suporte previsível, melhor segurança e menos paragens sem gerir tudo internamente.',
    tab_all:        'Todos',
    tab_core:       'IT Base',
    tab_security:   'Segurança',
    tab_cloud:      'Cloud',
    tab_continuity: 'Continuidade',
    svc_it_title:   'Servicos IT Geridos',
    svc_it_body:    'Gestão diária de IT, manutenção, atualizações, suporte a endpoints e monitorização proativa.',
    svc_it_f1: 'Monitorização 24/7', svc_it_f2: 'Gestão de patches', svc_it_f3: 'Suporte remoto',
    svc_sec_title:  'Cibersegurança',
    svc_sec_body:   'Proteja utilizadores, dispositivos e dados com segurança em camadas e redução prática de risco.',
    svc_sec_f1: 'Proteção de endpoints', svc_sec_f2: 'Endurecimento de segurança', svc_sec_f3: 'Apoio à sensibilização dos utilizadores',
    svc_cloud_title:'Servicos Cloud',
    svc_cloud_body: 'Suporte para Microsoft 365, migrações cloud, ficheiros partilhados, email e colaboração.',
    svc_cloud_f1: 'Administração Microsoft 365', svc_cloud_f2: 'Migrações cloud', svc_cloud_f3: 'Preparação para trabalho remoto',
    svc_net_title:  'Gestão de Rede',
    svc_net_body:   'Infraestrutura fiável, apoio a firewalls, otimização Wi-Fi e visibilidade da saúde da rede.',
    svc_net_f1: 'Suporte a firewalls e routers', svc_net_f2: 'Monitorização de rede', svc_net_f3: 'Otimização Wi-Fi',
    svc_backup_title:'Backup e Recuperação',
    svc_backup_body: 'Estratégias de backup resilientes e planeamento de recuperação rápida para reduzir paragens e risco.',
    svc_backup_f1: 'Backups automáticos', svc_backup_f2: 'Testes de restauro', svc_backup_f3: 'Planeamento de disaster recovery',
    svc_consult_title:'Consultoria IT',
    svc_consult_body: 'Orientação clara sobre upgrades, melhorias de segurança, orçamento e decisões tecnológicas de longo prazo.',
    svc_consult_f1: 'Roadmaps e planeamento', svc_consult_f2: 'Orientação de fornecedores', svc_consult_f3: 'Infraestrutura preparada para crescer',
    svc_details:    'Detalhes →',

    /* ── Remote work ── */
    remote_pill_1:      'Serviço Totalmente Gerido',
    remote_pill_2:      'Acesso Remoto de Nível Empresarial',
    remote_title:       'Trabalho remoto seguro para equipas modernas',
    remote_body:        'Dê à sua equipa uma forma mais segura e simples de trabalhar a partir de casa, em viagem ou em vários locais. Implementamos e gerimos conectividade remota segura que protege os sistemas da empresa enquanto mantém os colaboradores produtivos.',
    remote_f1_title:    'Acesso protegido',
    remote_f1_body:     'Ligações encriptadas entre colaboradores e recursos da empresa, sem expor sistemas internos à internet pública.',
    remote_f2_title:    'Configuração dedicada para home office',
    remote_f2_body:     'Podemos implementar um equipamento de rede pré-configurado para colaboradores remotos, criando um ambiente doméstico mais seguro e preparado para o negócio.',
    remote_f3_title:    'Simples para os colaboradores',
    remote_f3_body:     'Fácil de usar, rápido a ligar e pensado para que a equipa se concentre no trabalho em vez de perder tempo com configuração técnica.',
    remote_cta_1:       'Marcar Consulta',
    remote_cta_2:       'Ver Preços',
    remote_panel_title: 'Visão Geral do Acesso Remoto',
    remote_node_left:   'Colaborador Remoto',
    remote_badge:       'Túnel Seguro',
    remote_node_right:  'Rede da Empresa',
    remote_s1_label:    'Segurança da Ligação', remote_s1_value: 'Encriptada',
    remote_s2_label:    'Gestão',              remote_s2_value: 'Monitorização 24/7',
    remote_s3_label:    'Controlo de Acesso',  remote_s3_value: 'Dispositivos Verificados',
    remote_s4_label:    'Mais Indicado Para',  remote_s4_value: 'Equipas Híbridas e Remotas',

    /* ── About / Why ── */
    about_label:        'Porquê a BlueWave IT',
    why_title:          'Porque as empresas escolhem a BlueWave IT',
    why_body:           'A BlueWave IT é construída à volta de suporte proativo, segurança prática e serviço fiável. O objetivo é simples: manter a tecnologia estável para que a sua equipa se foque no negócio.',
    why_f1: 'Modelo mensal previsível',
    why_f2: 'Resposta rápida e comunicação clara',
    why_f3: 'Gestão focada em segurança para utilizadores e sistemas',
    why_f4: 'Suporte escalável para empresas em crescimento',
    why_f5: 'Orientação profissional sem complexidade desnecessária',
    industries_title:   'Setores servidos',
    industries_body:    'A BlueWave IT é ideal para pequenas e médias organizações que precisam de suporte fiável sem construir um departamento interno completo.',
    ind_1_title: 'Serviços Profissionais', ind_1_body: 'Empresas que precisam de fiabilidade e segurança',
    ind_2_title: 'Arquitetura e Design',   ind_2_body: 'Equipas que dependem de acesso a ficheiros e colaboração',
    ind_3_title: 'Finanças e Administração', ind_3_body: 'Organizações que tratam dados sensíveis',
    ind_4_title: 'PMEs em Crescimento',    ind_4_body: 'Empresas a ultrapassar suporte IT improvisado',

    /* ── Process ── */
    process_label: 'Como Começar',
    process_title: 'Como funciona o onboarding',
    process_body:  'Um processo simples que o ajuda a passar de suporte reativo para um ambiente IT mais estável, seguro e bem gerido.',
    proc_1_title: 'Descoberta',        proc_1_body: 'Revemos utilizadores, dispositivos, ferramentas, dificuldades e prioridades do negócio.',
    proc_2_title: 'Avaliação',         proc_2_body: 'Identificamos ganhos rápidos, falhas de segurança e oportunidades de melhoria.',
    proc_3_title: 'Transição',         proc_3_body: 'Monitorização, fluxos de suporte, backups e acessos administrativos ficam sob controlo.',
    proc_4_title: 'Suporte Contínuo',  proc_4_body: 'Mantemos os sistemas saudáveis, reduzimos paragens e ajudamos a planear o futuro.',

    /* ── Pricing ── */
    pricing_label:      'Preços',
    pricing_title:      'Preco MSP simples',
    pricing_body:       'Um plano claro por utilizador que facilita o orçamento para suporte, manutenção e segurança.',
    pricing_plan_name:  'Plano Gerido Standard',
    pricing_ribbon:     'Ideal para equipas em crescimento',
    pricing_unit:       'por utilizador / mês',
    pricing_f1: 'Suporte gerido a endpoints',
    pricing_f2: 'Monitorização e manutenção de rotina',
    pricing_f3: 'Controlos base de segurança',
    pricing_f4: 'Assistência helpdesk',
    pricing_f5: 'Gestão de patches',
    pricing_f6: 'Suporte Microsoft 365',
    calc_users:         'Utilizadores estimados',
    calc_investment:    'Investimento mensal estimado',
    cta_pricing:        'Pedir Informação de Preço',
    pricing_help_title: 'O que este modelo resolve',
    pricing_help_body:  'Em vez de reagir a problemas pontuais, a sua empresa obtém uma estrutura de suporte desenhada para prevenir falhas antes de afetarem a operação.',
    pricing_help_f1: 'Menos paragens e menos surpresas',
    pricing_help_f2: 'Mais consistência em segurança e atualizações',
    pricing_help_f3: 'Melhor experiência de suporte para colaboradores',
    pricing_help_f4: 'Orçamento IT mensal mais claro',
    pricing_help_f5: 'Um parceiro que cresce com a sua empresa',

    /* ── FAQ ── */
    faq_label: 'FAQ',
    faq_title: 'Perguntas frequentes',
    faq_body:  'Respostas rápidas às questões mais comuns de pequenas e médias empresas ao mudar para suporte IT gerido.',
    faq_q1: 'Preciso de substituir os meus sistemas atuais?',
    faq_a1: 'Não. A BlueWave IT é pensada para melhorar e suportar os ambientes existentes primeiro, orientando upgrades apenas quando fizerem sentido prático.',
    faq_q2: 'Podem dar suporte a Microsoft 365 e ficheiros partilhados?',
    faq_a2: 'Sim. Administração Microsoft 365, suporte à colaboração e fluxos de acesso a ficheiros fazem parte da oferta principal.',
    faq_q3: 'Qual o tamanho de empresa ideal?',
    faq_a3: 'A BlueWave IT é ideal para pequenas e médias empresas que querem suporte fiável, melhor segurança e custos mensais previsíveis.',

    /* ── Assessment CTA ── */
    assessment_title: 'Avaliação IT gratuita',
    assessment_body:  'Revemos o seu ambiente IT, identificamos riscos, assinalamos falhas de segurança e destacamos oportunidades para melhorar desempenho e fiabilidade.',
    assessment_cta:   'Pedir Avaliação Gratuita',

    /* ── Contact ── */
    contact_label:          'Entre em Contacto',
    contact_title:          'Vamos falar sobre o seu ambiente IT',
    contact_body:           'Use o formulário abaixo para pedir uma consulta, colocar uma questão ou iniciar uma conversa sobre suporte gerido para a sua empresa.',
    contact_left_1_title:   'Serviços Geridos',
    contact_left_1_body:    'Suporte IT proativo, segurança, cloud, backup e consultoria.',
    contact_left_2_title:   'Clientes Ideais',
    contact_left_2_body:    'Pequenas e médias empresas que querem tecnologia fiável sem o caos.',
    contact_left_3_title:   'Foco na Resposta',
    contact_left_3_body:    'Comunicação clara, ação rápida e fiabilidade a longo prazo.',
    contact_region_title:   'Região',
    contact_region_body:    'Algarve, Portugal — apoio a empresas em toda a região.',
    chip_managed:   'IT Gerido',
    chip_cyber:     'Cibersegurança',
    chip_cloud:     'Suporte Cloud',
    chip_backup:    'Backups',
    cta_schedule:   'Marcar Consulta',
  }
};


/* ================================================================
   INIT: DOM ready
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Element references ── */
  const header     = document.getElementById('siteHeader');
  const backToTop  = document.getElementById('backToTop');
  const navToggle  = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const langBtns   = document.querySelectorAll('[data-lang]');
  const themeBtns  = document.querySelectorAll('[data-theme]');

  let currentLang = 'en';


  /* ================================================================
     1. LANGUAGE / i18n
     ================================================================ */

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    /* Update all data-i18n elements */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = translations[lang]?.[key];
      if (val !== undefined) el.textContent = val;
    });

    /* Update placeholder attributes (data-ph-en / data-ph-pt) */
    document.querySelectorAll('[data-ph-en], [data-ph-pt]').forEach(el => {
      el.placeholder = el.dataset[lang === 'en' ? 'phEn' : 'phPt'] || '';
    });

    /* Update select option text (data-en / data-pt attributes on <option>) */
    document.querySelectorAll('#serviceSelect option').forEach(opt => {
      if (opt.dataset[lang]) opt.textContent = opt.dataset[lang];
    });

    /* Sync active button state */
    langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

    /* Re-calculate any live outputs that depend on language */
    updatePricing?.();
  }

  langBtns.forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.lang)));


  /* ================================================================
     2. THEME TOGGLE
     ================================================================ */

  function setTheme(theme) {
    document.body.classList.toggle('theme-light', theme === 'light');

    /* Swap logo images for light/dark variants */
    document.querySelectorAll('.logo-img').forEach(img => {
      img.src = (theme === 'light') ? img.dataset.light : img.dataset.dark;
    });

    /* Sync active button state */
    themeBtns.forEach(b => b.classList.toggle('active', b.dataset.theme === theme));
  }

  themeBtns.forEach(b => b.addEventListener('click', () => setTheme(b.dataset.theme)));


  /* ================================================================
     3. MOBILE NAV
     ================================================================ */

  navToggle?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.textContent = isOpen ? '✕' : '☰';
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  /* Close mobile menu when a link is clicked */
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      navToggle.textContent = '☰';
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });


  /* ================================================================
     4. SCROLL — header shadow + back-to-top
     ================================================================ */

  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 16);
    backToTop?.classList.toggle('show',  window.scrollY > 500);
  }, { passive: true });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ================================================================
     5. REVEAL ANIMATION
     Elements with class="reveal" fade-in when scrolled into view.
     Add reveal-delay-1/2/3 for staggered siblings.
     ================================================================ */

  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealObs.unobserve(e.target); /* fire once only */
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


  /* ================================================================
     6. COUNTER ANIMATION
     Elements with class="counter" data-target="99" data-suffix="%"
     animate from 0 to their target on first scroll into view.
     ================================================================ */

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
        const e = 1 - Math.pow(1 - p, 3);   /* ease-out cubic */
        counter.textContent = (decimals
          ? (target * e).toFixed(1)
          : Math.round(target * e)
        ) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }

  const heroCard = document.getElementById('heroCard');
  if (heroCard) {
    const heroObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) animateCounters(); });
    }, { threshold: 0.3 });
    heroObs.observe(heroCard);
  }


  /* ================================================================
     7. CARD TILT (3-D perspective hover)
     Applies to #heroCard and any .tilt-card on desktop.
     ================================================================ */

  /* Hero card */
  heroCard?.addEventListener('mousemove', e => {
    const r  = heroCard.getBoundingClientRect();
    const ry = ((e.clientX - r.left) / r.width  - 0.5) * 8;
    const rx = ((e.clientY - r.top)  / r.height - 0.5) * -8;
    heroCard.style.transform  = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    heroCard.style.borderColor = 'rgba(56,217,232,0.26)';
  });
  heroCard?.addEventListener('mouseleave', () => {
    heroCard.style.transform   = '';
    heroCard.style.borderColor = '';
  });

  /* Service / feature cards */
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      if (window.innerWidth < 981) return;   /* disable on mobile */
      const r  = card.getBoundingClientRect();
      const ry = ((e.clientX - r.left) / r.width  - 0.5) * 6;
      const rx = ((e.clientY - r.top)  / r.height - 0.5) * -6;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });


  /* ================================================================
     8. SERVICE TAB FILTER
     Tabs with data-filter on .service-tab control visibility of
     .service-card elements by their data-category attribute.
     ================================================================ */

  document.querySelectorAll('.service-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.service-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      document.querySelectorAll('.service-card').forEach(card => {
        card.classList.toggle('is-hidden', filter !== 'all' && filter !== card.dataset.category);
      });
    });
  });


  /* ================================================================
     9. FAQ ACCORDION
     ================================================================ */

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      /* Close all open items first */
      document.querySelectorAll('.faq-item.open').forEach(open => {
        open.classList.remove('open');
        open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      /* Toggle clicked item */
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });


  /* ================================================================
     10. PRICING CALCULATOR
     Reads #userRange slider, outputs to #monthlyPrice and
     #userCountLabel. Called on slider input and on language change.
     ================================================================ */

  const userRange = document.getElementById('userRange');
  const priceOut  = document.getElementById('monthlyPrice');
  const userLabel = document.getElementById('userCountLabel');

  function updatePricing() {
    if (!userRange || !priceOut) return;
    const u     = Number(userRange.value);
    const total = u * 60;
    if (userLabel) {
      userLabel.textContent = currentLang === 'pt'
        ? `${u} utilizadores`
        : `${u} users`;
    }
    priceOut.textContent = currentLang === 'pt'
      ? `€${total.toLocaleString('pt-PT')} / mês`
      : `€${total.toLocaleString()} / month`;
  }

  userRange?.addEventListener('input', updatePricing);

  /* Expose updatePricing so setLanguage() can call it */
  window.updatePricing = updatePricing;


  /* ================================================================
     INIT — set defaults
     ================================================================ */

  setTheme('dark');
  setLanguage('en');

}); /* end DOMContentLoaded */
