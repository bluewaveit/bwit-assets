/* BlueWave IT — pricing.js — loads after site.js */
/* ── TRANSLATIONS ── */
window.PAGE_TRANSLATIONS = {
  en: {

      bc_home:'Home', bc_current:'Pricing',
      hero_label:'Simple Pricing',
      hero_h1_a:'One price.', hero_h1_b:'Everything included.', hero_h1_c:'Zero surprises.',
      hero_p:'No tiered features, no bolt-on extras, no surprise invoices. Every BlueWave IT client gets all six service areas for one flat, per-user monthly fee — predictable costs, enterprise-grade IT.',
      hero_cta_1:'Calculate Your Cost', hero_cta_2:"See What's Included",
      hpd_label:'Standard Managed Plan', hpd_unit:'per user / month',
      hpd_note:'All services. All users. One invoice.',
      hpd_f1:'Managed IT helpdesk & monitoring', hpd_f2:'Endpoint protection & patch management',
      hpd_f3:'Cybersecurity — EDR, email security, MFA', hpd_f4:'Microsoft 365 administration',
      hpd_f5:'Backup monitoring & verification', hpd_f6:'Network health & support',
      hpd_eg_label:'Example — 10 users', hpd_month:'month',
      matrix_label:"What's Included", matrix_h:'Every feature, mapped to every service area',
      matrix_p:'A full breakdown of what comes with your managed plan — compared to what businesses typically get on a break-fix or ad-hoc IT model.',
      mx_th1:'Service & Feature', mx_th2:'Break-Fix / Ad Hoc', mx_th3:'BlueWave IT Managed (€60/user)',
      mx_cat1:'Managed IT & Helpdesk', mx_cat2:'Cybersecurity', mx_cat3:'Cloud & Microsoft 365', mx_cat4:'Backup & Recovery', mx_cat5:'Network & Consulting',
      mx_r1:'24/7 endpoint monitoring', mx_r2:'Patch management (OS & apps)', mx_r3:'Remote helpdesk support',
      mx_r4:'Device onboarding & offboarding', mx_r5:'Asset inventory & health scoring',
      mx_r6:'Endpoint detection & response (EDR)', mx_r7:'Email security & anti-phishing',
      mx_r8:'Multi-factor authentication (MFA)', mx_r9:'Firewall management', mx_r10:'Security posture reporting',
      mx_r11:'M365 user & licence management', mx_r12:'Teams & SharePoint administration',
      mx_r13:'Defender for Business configuration', mx_r14:'Conditional access & Secure Score',
      mx_r15:'Automated cloud backup', mx_r16:'Microsoft 365 data backup',
      mx_r17:'Regular restore testing', mx_r18:'Disaster recovery planning',
      mx_r19:'Network & Wi-Fi monitoring', mx_r20:'VPN deployment & management',
      mx_r21:'Annual IT roadmap & planning', mx_r22:'GDPR IT guidance',
      mx_manual:'Manual', mx_perhour:'Per hour', mx_reactive:'Reactive only', mx_unverified:'Unverified',
      cm_title:'Get in touch', cm_sub:"Tell us a bit about your business and we'll get back to you within one business day — no obligation.",
      cm_lbl_name:'Full name', cm_ph_name:'João Silva',
      cm_lbl_email:'Work email', cm_ph_email:'joao@yourcompany.pt',
      cm_lbl_company:'Company & approximate number of users', cm_ph_company:'e.g. Acme Lda — 12 users',
      cm_lbl_msg:"Anything else you'd like us to know?", cm_optional:'(optional)', cm_ph_msg:'Current IT setup, main pain points, questions…',
      cm_submit:'Send Enquiry',
      cm_note:"We'll reply within one business day. No sales pressure — just a straight conversation about whether we're a good fit.",
      cm_success_h:'Enquiry sent', cm_success_p:"Thanks — we'll be in touch within one business day. Check your inbox (and spam folder just in case).",
      cmp_label:'Comparison', cmp_h:'Managed vs. Break-Fix vs. In-House IT',
      cmp_p:'Three ways to handle IT. Only one delivers proactive coverage, predictable cost, and enterprise tooling at SMB scale.',
      cth1:'Factor', cth2:'Break-Fix', cth3:'In-House IT', cth4:'BlueWave IT',
      cr1:'Monthly cost', cr1b:'Unpredictable', cr1c:'€2,500–€4,000+', cr1d:'€60 / user',
      cr2:'Proactive monitoring', cr2c:'Depends on person', cr2d:'24/7 automated',
      cr3:'Cybersecurity tools', cr3c:'Extra licence cost', cr3d:'Included',
      cr4:'Backup verification', cr4c:'Often overlooked', cr4d:'Daily tested',
      cr5:'M365 administration', cr5b:'Per hour', cr5d:'Included',
      cr6:'Response when on leave', cr6d:'Always covered',
      cr7:'IT strategy & roadmap', cr7c:'Varies', cr7d:'Annual review',
      cr8:'GDPR IT guidance', cr8c:'Not typically', cr8d:'Included',
      cr9:'Scales with headcount', cr9d:'Per-user model',
      faq_label:'FAQ', faq_h:'Pricing questions answered',
      faq_p:"Everything you need to know about how the managed service model works, what's included, and how billing is handled.",
      fq1_q:"What's included in the €60 per user per month?",
      fq1_a:"Everything. Managed IT helpdesk, 24/7 monitoring, patch management, endpoint protection, cybersecurity tools (EDR, email security, MFA), Microsoft 365 administration, backup monitoring and verification, network health monitoring, and an annual IT consulting review. There are no add-ons required to get complete coverage.",
      fq2_q:'Is there a minimum number of users?',
      fq2_a:'No minimum. BlueWave IT supports solo operators, small teams, and growing businesses — starting from just 1 user. Plans scale as your team grows, with no minimum seat requirement and no lock-in contracts.',
      fq3_q:'Are there any setup or onboarding fees?',
      fq3_a:'In most cases, no. For standard SMB environments, onboarding is included in the managed service. For more complex environments — multiple sites, legacy systems, or significant remediation work — a one-time project fee may apply, which will always be clearly scoped before any commitment.',
      fq4_q:'What if I add or remove users mid-month?',
      fq4_a:'Billing is adjusted on a pro-rated basis at the next invoice. When someone joins, their user is activated immediately and billed from that date. When someone leaves, their user is offboarded and billing stops. Simple, transparent, and always aligned with your actual headcount.',
      fq5_q:'Is there a long-term contract or lock-in?',
      fq5_a:'No multi-year lock-in. BlueWave IT operates on a monthly rolling basis after a standard initial term. The relationship works because it delivers value — not because of contract penalty clauses.',
      fq6_q:'Do hardware and software licences cost extra?',
      fq6_a:'Hardware (workstations, servers, switches, APs) is procured separately at cost. Microsoft 365 licences are billed at Microsoft\'s published rates. The management, administration, and support of all hardware and software is included in the €60/user/month fee.',
      fq7_q:'Can I get a quote before committing?',
      fq7_a:"Absolutely. Book a free consultation — we'll review your environment, scope the right engagement, and provide a clear written proposal. The free IT assessment is exactly that: free, with no obligation to proceed.",
      fq8_q:'Can I add cloud backup to my managed IT plan?',
      fq8_a:"Yes — backup plans are designed to complement the managed IT service seamlessly. The €60/user/month plan includes backup monitoring and verification for any backup system you already have. Adding a Cloud Backup plan gives you the managed offsite storage, retention policy, reporting, and restore handling on top of that. Most clients running a managed IT plan choose Cloud Backup Standard (€119/month) as their storage layer.",
      cta_h:'Ready to put a number on it?',
      cta_p:"Book a free consultation. We'll assess your environment, confirm your user count, and provide a precise written proposal — usually within 48 hours.",
      cta_btn1:'Book a Free Consultation', cta_btn2:'Explore Services',
      /* ── Cost Estimator ── */
      est_label:'Cost Estimator',
      est_h:'Build your IT estimate',
      est_p:'Select what your business needs and get an instant estimate — hardware, Microsoft 365 licences, setup services, and monthly managed costs combined.',
      est_ms_head:'Microsoft 365',
      est_users_label:'Number of users',
      est_ms_plan_label:'Microsoft 365 plan',
      est_net_head:'Managed Networking',
      est_net_size_label:'Network size',
      est_net_size_none:'No networking hardware',
      est_net_size_small:'Small site — UDM (€295.81)',
      est_net_size_standard:'Standard office — UniFi Express 7 (€175.47)',
      est_net_size_advanced:'Larger office — UDM-SE (€465.49)',
      est_extra_aps_label:'Extra Wi-Fi access points',
      est_add_switch_label:'Add 8 port PoE switch (€229)',
      est_add_install_label:'Add one-time network install',
      est_managed_net_label:'Monthly managed networking (€35/month)',
      est_cam_head:'Security Cameras',
      est_cameras_label:'Number of cameras',
      est_cam_type_label:'Camera type',
      est_cam_type_essential:'Essential Coverage (€77.20 each)',
      est_cam_type_advanced:'Advanced Coverage (€168.86 each)',
      est_cam_rec_label:'Recording storage',
      est_cam_rec_none:'No recording storage',
      est_cam_rec_basic:'Basic recording (€274.70)',
      est_cam_rec_advanced:'Advanced recording system (€599.00)',
      est_managed_cam_label:'Monthly managed cameras (€25/month)',
      est_setup_head:'Setup & Productivity Services',
      est_email_label:'Email setup & migration (€120 one-time)',
      est_sp_label:'SharePoint setup (€220 one-time)',
      est_onboard_label:'Remote support onboarding (€95 one-time)',
      est_it_head:'Managed IT Support',
      est_managed_it_label:'Monthly managed IT support (€45 base + €12/user)',
      est_out_hardware_label:'Hardware subtotal',
      est_out_software_label:'Monthly Microsoft 365',
      est_out_managed_label:'Monthly managed services',
      est_out_setup_label:'One-time setup costs',
      est_out_first_month_label:'Estimated first-month total',
      est_summary_prefix:'Estimate based on',
      est_summary_users:'users',
      est_summary_cameras:'cameras',
      est_summary_suffix:'and selected options.',
      est_disclaimer:'This is an estimate only. Final pricing depends on site layout, coverage, cabling, storage, installation, migration, and support requirements.',
      est_cta:'Request a Custom Quote',
      est_ms_basic:'Business Basic — €6.24/user/mo',
      est_ms_standard:'Business Standard — €12.96/user/mo',
      est_ms_premium:'Business Premium — €22.92/user/mo',
      est_ms_basic_eea:'Business Basic EEA — €4.56/user/mo (no Teams)',
      est_ms_standard_eea:'Business Standard EEA — €9.60/user/mo (no Teams)',
      est_ms_premium_eea:'Business Premium EEA — €19.56/user/mo (no Teams)',
      est_ms_apps_smb:'Microsoft 365 Apps for SMB — €10.92/user/mo (no Teams)',
      est_ms_teams_note:'Plans with Teams include video calls and meetings.',
      est_ms_noteams_note:'EEA plans exclude Teams — ideal for businesses using WhatsApp instead.',
      /* Microsoft 365 section — untranslated strings */
      est_ms_sub:'Configured for email, file sharing, and real-world business communication — Teams is optional.',
      est_ms_sharepoint_hint:'Share files securely with clients and vendors using SharePoint — no scattered email attachments',
      /* Plan detail card labels */
      est_ms_teams_tag:'Includes Microsoft Teams',
      est_ms_noteams_tag:'No Teams — use WhatsApp or phone',
      /* Plan descriptions (keyed as est_ms_desc_<planValue>) */
      est_ms_desc_basic:'Business email, web & mobile Office apps, 1 TB OneDrive, and SharePoint for secure file sharing. Includes Microsoft Teams. Good starting point for most small businesses.',
      est_ms_desc_standard:'Full desktop Office apps (Word, Excel, PowerPoint, Outlook) plus SharePoint and Teams. Share files securely with clients and staff — no more scattered email attachments.',
      est_ms_desc_premium:'Everything in Standard with advanced security — Defender for Business, Intune device management, and Azure AD P1. Best protection for businesses handling sensitive data.',
      est_ms_desc_basic_eea:'Business email, web & mobile Office apps, 1 TB OneDrive, and SharePoint for secure file sharing. No Teams — great if your team already uses WhatsApp.',
      est_ms_desc_standard_eea:'Full desktop Office apps plus SharePoint — without Teams. Ideal if you use WhatsApp or phone and want to save on licence costs while keeping your files in the cloud.',
      est_ms_desc_premium_eea:'Advanced security (Defender for Business, Intune, Azure AD P1) with SharePoint, without Teams. Best security for businesses that don\'t need video conferencing built in.',
      est_ms_desc_apps_smb:'Desktop Office apps only (Word, Excel, PowerPoint, Outlook) — no email hosting. Good for businesses with existing email who just need the Office suite.',
      /* Networking section */
      est_net_sub:'Secure business Wi-Fi with no licensing fees and full remote visibility.',
      est_net_b1:'Access your office network remotely',
      est_net_b2:'Built-in firewall protection',
      est_net_b3:'No recurring licensing fees — UniFi advantage',
      est_net_helper:'Perfect for small offices, retail shops, and multi-room setups.',
      /* Camera section */
      est_cam_badge:'NO MONTHLY FEES',
      est_cam_sub:'Check your business from anywhere using the UniFi app — simple, secure, and no subscriptions.',
      est_cam_b1:'View live cameras from your phone',
      est_cam_b2:'Instant alerts and playback',
      est_cam_b3:'No monthly cloud fees',
      est_cam_helper:'Ideal for entrances, offices, warehouses, and retail spaces.',
      /* Summary panel */
      est_summary_head:'Your estimated IT setup',
      est_total_note:'Includes hardware, setup, and monthly services based on your selections.',
      est_val_b1:'No licensing fees for networking',
      est_val_b2:'No subscription required for camera access',
      est_val_b3:'Secure remote access included',
      /* Updated CTA and headline */
      est_h:'Estimate your business IT setup',
      est_p:'Get a quick estimate for your full IT setup — including Microsoft 365, networking, security cameras, and support.',
      est_cta:'Get My Custom IT Plan',
      est_psychology:'This is not just an estimate — it\'s a cleaner, more secure way to run your business.',
      /* Cloud Backup section */
      est_bk_head:'Cloud Backup',
      est_bk_sub:'Protect your business data automatically — laptops, desktops, and servers.',
      est_bk_b1:'Protect files from ransomware and accidental deletion',
      est_bk_b2:'Automatic backups running silently in the background',
      est_bk_b3:'Fast recovery when something goes wrong',
      est_bk_plan_label:'Backup plan',
      est_bk_plan_none:'No backup selected (not recommended)',
      est_bk_plan_essentials:'Essentials — up to 500 GB · €39/month',
      est_bk_plan_standard:'Standard — up to 2 TB · €119/month',
      est_bk_plan_plus:'Plus — up to 5 TB · €249/month',
      est_bk_plan_archive:'Archive Retention — up to 5 TB · €79/month',
      est_bk_hint:'Daily backup checks, tested restores, and a monthly health report — included with every plan.',
      est_bk_included:'included',
      est_bk_info_essentials:'Daily backup checks · Basic retention policy · Restore support (business hours)',
      est_bk_info_standard:'Daily monitoring · 30–90 day retention · Priority restore support · Monthly health report',
      est_bk_info_plus:'Monitoring & alerting · Long-term retention options · Priority restores · Monthly report · Quarterly review',
      est_bk_info_archive:'Long-term archive storage · Compliance-style retention · Low-cost cold storage · Retrieval billed separately',
      est_out_backup_label:'Cloud backup',
      est_out_defender_label:'Endpoint security',

      /* ── Managed Networking — recommendation card ── */
      est_net_recommended:'recommended',
      est_net_desc_none:'No networking hardware selected. Suitable only if you already have a reliable business-grade network in place.',
      est_net_device_small:'UniFi Dream Machine',
      est_net_desc_small:'An all-in-one router, firewall, and Wi-Fi access point. Best for small businesses with 1–8 users in a single space — shops, studios, and compact single-floor offices. Managed remotely via the UniFi app.',
      est_net_fit_small:'Best for: shops, studios, and small single-site offices',
      est_net_device_standard:'UniFi Express 7',
      est_net_desc_standard:'A compact router and Wi-Fi 7 access point in one unit. The right choice for most offices with 5–15 users — fast wireless coverage, integrated firewall, and no subscription licensing. Our most popular choice.',
      est_net_fit_standard:'Best for: most small offices and professional workspaces',
      est_net_device_advanced:'UniFi Dream Machine SE',
      est_net_desc_advanced:'A rack-mount security gateway with a built-in PoE switch. Designed for larger or more complex environments with 15+ users, server rooms, or setups that need managed switching alongside routing.',
      est_net_fit_advanced:'Best for: growing businesses, multi-room offices, and server environments',

      /* ── Endpoint Security (Defender for Business) ── */
      est_def_head:'Endpoint Security',
      est_def_sub:'Enterprise-grade endpoint protection for every device — Windows, macOS, iOS, and Android.',
      est_def_b1:'AI-powered threat detection and automatic attack interruption',
      est_def_b2:'Vulnerability management and security posture reporting',
      est_def_b3:'Up to 5 devices per user — no minimum device count',
      est_def_plan_label:'Endpoint security plan',
      est_def_included_note:'Microsoft Defender for Business is included with your Business Premium licence — no extra cost.',
      est_def_hint:'Configured and monitored by BlueWave IT as part of your managed plan.',
      est_def_users_label:'users',
      est_def_detail_text:'AI threat detection · Vulnerability management · Next-gen antivirus · Automated investigation & remediation · Monthly security reports',

      /* ── MSP Fit Calculator ── */
      fit_label:'MSP Fit Check',
      fit_h:'Is managed IT right for your business?',
      fit_sub:'Answer six questions about how your business operates. Your result updates as you go.',
      fit_trust:'This check is designed to be practical, not inflated. It reflects how your business operates, not worst-case assumptions.',
      fitQ1_label:'How many people use IT in your business?',
      fitQ2_label:'How often does a tech issue stop someone from working?',
      fitQ3_label:'How is your IT currently handled?',
      fitQ4_label:'Do any of your team work remotely or from multiple locations?',
      fitQ5_label:'How concerned are you about cybersecurity and data protection?',
      fitQ6_label:'How critical is your business data? (client records, financial data, operations)',
      fit_score_label:'Your fit score',
      fit_score_of:'out of 15',
      fit_empty_msg:'Answer the questions to see your result.',
      fit_reasons_head:'Why this matters for you',
      fit_budget_head:'What to budget',
      fit_cta_primary:'See My Setup Estimate',
      fit_cta_secondary:'Talk Through My Options',
      fit_r0_title:'Probably not needed yet',
      fit_r0_desc:'Based on your answers, your current setup is likely manageable without a fully managed IT service. You may benefit from occasional ad-hoc support or a single consultation to tighten up security basics.',
      fit_r1_title:'Worth considering',
      fit_r1_desc:'There are signs that IT is starting to create friction in your business. A managed service could reduce that overhead — but it\'s not urgent. It\'s worth a conversation to see what fits.',
      fit_r2_title:'Likely a strong fit',
      fit_r2_desc:'Your business shows clear signs that unmanaged IT is costing you time and creating risk. A managed service would likely pay for itself through reduced downtime, better security, and less distraction for your team.',
      fit_r3_title:'High-value fit for managed IT',
      fit_r3_desc:'Based on your answers, managed IT would deliver meaningful value to your business. Your scale, security exposure, and reliance on IT make this a straightforward operational upgrade.',
      fit_budget_r0:'Ad-hoc support or a one-off security review is likely sufficient at this stage.',
      fit_budget_r1:'A managed plan from €60/user/month would cover the essentials without overcommitting.',
      fit_budget_r2:'Budget for a full managed plan (€60/user/month). Factor in any hardware gaps identified in the Cost Estimator below.',
      fit_budget_r3:'A full managed plan plus security-hardening is worth budgeting for. Use the Cost Estimator below to build out a complete picture.',
      fit_why_users:'With your team size, coordinating IT without a structured service often leads to inconsistency.',
      fit_why_downtime:'Frequent tech issues are a sign that reactive IT is costing your team more than it looks.',
      fit_why_noit:'Without a dedicated IT resource, problems tend to compound quietly until they become expensive.',
      fit_why_remote:'Remote and multi-location working increases your attack surface and support complexity.',
      fit_why_security:'Cybersecurity concerns at your level warrant proactive management, not a wait-and-see approach.',
      fit_why_data:'High-value business data without a managed backup and recovery plan is a serious operational risk.',
    },
    pt: {

      bc_home:'Início', bc_current:'Preços',
      hero_label:'Preços Simples',
      hero_h1_a:'Um preço.', hero_h1_b:'Tudo incluído.', hero_h1_c:'Zero surpresas.',
      hero_p:'Sem funcionalidades por níveis, sem extras, sem faturas surpresa. Cada cliente BlueWave IT tem acesso às seis áreas de serviço por uma tarifa mensal fixa por utilizador — custos previsíveis, IT de nível empresarial.',
      hero_cta_1:'Calcule o Seu Custo', hero_cta_2:'Ver O Que Está Incluído',
      hpd_label:'Plano Gerido Standard', hpd_unit:'por utilizador / mês',
      hpd_note:'Todos os serviços. Todos os utilizadores. Uma fatura.',
      hpd_f1:'Helpdesk IT gerido e monitorização', hpd_f2:'Proteção de endpoints e gestão de patches',
      hpd_f3:'Cibersegurança — EDR, segurança de email, MFA', hpd_f4:'Administração Microsoft 365',
      hpd_f5:'Monitorização e verificação de backups', hpd_f6:'Saúde e suporte de rede',
      hpd_eg_label:'Exemplo — 10 utilizadores', hpd_month:'mês',
      matrix_label:'O Que Está Incluído', matrix_h:'Cada funcionalidade, mapeada para cada área de serviço',
      matrix_p:'Uma análise completa do que vem com o seu plano gerido — comparado com o que as empresas normalmente obtêm num modelo break-fix ou ad-hoc.',
      mx_th1:'Serviço e Funcionalidade', mx_th2:'Break-Fix / Ad Hoc', mx_th3:'BlueWave IT Gerido (€60/utilizador)',
      mx_cat1:'IT Gerido e Helpdesk', mx_cat2:'Cibersegurança', mx_cat3:'Cloud e Microsoft 365', mx_cat4:'Backup e Recuperação', mx_cat5:'Rede e Consultoria',
      mx_r1:'Monitorização 24/7 de endpoints', mx_r2:'Gestão de patches (SO e apps)', mx_r3:'Suporte helpdesk remoto',
      mx_r4:'Integração e saída de dispositivos', mx_r5:'Inventário de ativos e avaliação de saúde',
      mx_r6:'Deteção e resposta de endpoints (EDR)', mx_r7:'Segurança de email e anti-phishing',
      mx_r8:'Autenticação multi-fator (MFA)', mx_r9:'Gestão de firewall', mx_r10:'Relatório de postura de segurança',
      mx_r11:'Gestão de utilizadores e licenças M365', mx_r12:'Administração Teams e SharePoint',
      mx_r13:'Configuração do Defender for Business', mx_r14:'Acesso condicional e Secure Score',
      mx_r15:'Backup cloud automático', mx_r16:'Backup de dados Microsoft 365',
      mx_r17:'Testes regulares de restauro', mx_r18:'Planeamento de disaster recovery',
      mx_r19:'Monitorização de rede e Wi-Fi', mx_r20:'Implementação e gestão de VPN',
      mx_r21:'Roadmap IT anual e planeamento', mx_r22:'Orientação IT RGPD',
      mx_manual:'Manual', mx_perhour:'Por hora', mx_reactive:'Apenas reativo', mx_unverified:'Não verificado',
      cm_title:'Entrar em contacto', cm_sub:'Diga-nos um pouco sobre a sua empresa e responderemos dentro de um dia útil — sem compromisso.',
      cm_lbl_name:'Nome completo', cm_ph_name:'João Silva',
      cm_lbl_email:'Email profissional', cm_ph_email:'joao@suaempresa.pt',
      cm_lbl_company:'Empresa e número aproximado de utilizadores', cm_ph_company:'ex: Acme Lda — 12 utilizadores',
      cm_lbl_msg:'Mais alguma coisa que queira partilhar?', cm_optional:'(opcional)', cm_ph_msg:'Configuração atual de IT, principais problemas, questões…',
      cm_submit:'Enviar Pedido',
      cm_note:'Respondemos dentro de um dia útil. Sem pressão comercial — apenas uma conversa direta sobre se somos a escolha certa para si.',
      cm_success_h:'Pedido enviado', cm_success_p:'Obrigado — entraremos em contacto dentro de um dia útil. Verifique a sua caixa de entrada (e a pasta de spam, por precaução).',
      cmp_label:'Comparação', cmp_h:'Gerido vs. Break-Fix vs. IT Interno',
      cmp_p:'Três formas de gerir o IT. Apenas uma oferece cobertura proativa, custo previsível e ferramentas empresariais à escala das PMEs.',
      cth1:'Fator', cth2:'Break-Fix', cth3:'IT Interno', cth4:'BlueWave IT',
      cr1:'Custo mensal', cr1b:'Imprevisível', cr1c:'€2.500–€4.000+', cr1d:'€60 / utilizador',
      cr2:'Monitorização proativa', cr2c:'Depende da pessoa', cr2d:'24/7 automatizado',
      cr3:'Ferramentas de cibersegurança', cr3c:'Custo extra de licenças', cr3d:'Incluído',
      cr4:'Verificação de backups', cr4c:'Frequentemente ignorado', cr4d:'Testado diariamente',
      cr5:'Administração M365', cr5b:'Por hora', cr5d:'Incluído',
      cr6:'Resposta durante ausências', cr6d:'Sempre coberto',
      cr7:'Estratégia IT e roadmap', cr7c:'Variável', cr7d:'Revisão anual',
      cr8:'Orientação IT RGPD', cr8c:'Normalmente não', cr8d:'Incluído',
      cr9:'Escala com a equipa', cr9d:'Modelo por utilizador',
      faq_label:'FAQ', faq_h:'Perguntas sobre preços respondidas',
      faq_p:'Tudo o que precisa de saber sobre como funciona o modelo de serviço gerido, o que está incluído e como é feita a faturação.',
      fq1_q:'O que está incluído nos €60 por utilizador por mês?',
      fq1_a:'Tudo. Helpdesk IT gerido, monitorização 24/7, gestão de patches, proteção de endpoints, ferramentas de cibersegurança (EDR, segurança de email, MFA), administração Microsoft 365, monitorização e verificação de backups, monitorização de saúde de rede e uma revisão anual de consultoria IT. Não são necessários extras para obter cobertura completa.',
      fq2_q:'Existe um número mínimo de utilizadores?',
      fq2_a:'Não existe mínimo. A BlueWave IT suporta operadores individuais, pequenas equipas e empresas em crescimento — a partir de apenas 1 utilizador. Os planos crescem à medida que a sua equipa cresce, sem requisito mínimo de lugares e sem contratos com penalizações.',
      fq3_q:'Existem taxas de instalação ou integração?',
      fq3_a:'Na maioria dos casos, não. Para ambientes PME standard, a integração está incluída no serviço gerido. Para ambientes mais complexos — múltiplas sedes, sistemas legados ou trabalho significativo de remediação — pode aplicar-se uma taxa de projeto única, que será sempre claramente definida antes de qualquer compromisso.',
      fq4_q:'E se adicionar ou remover utilizadores a meio do mês?',
      fq4_a:'A faturação é ajustada pro-rata na próxima fatura. Quando alguém entra, o utilizador é ativado de imediato e faturado a partir dessa data. Quando alguém sai, o utilizador é desativado e a faturação cessa. Simples, transparente e sempre alinhado com o número real de colaboradores.',
      fq5_q:'Existe contrato de longo prazo ou clausulas de fidelização?',
      fq5_a:'Não há fidelização plurianual. A BlueWave IT opera numa base mensal renovável após um prazo inicial standard. A relação funciona porque gera valor — não por cláusulas de penalização contratuais.',
      fq6_q:'Hardware e licenças de software têm custo adicional?',
      fq6_a:"Hardware (workstations, servidores, switches, APs) é adquirido separadamente ao custo. As licenças Microsoft 365 são faturadas às tarifas publicadas pela Microsoft. A gestão, administração e suporte de todo o hardware e software está incluído na tarifa de €60/utilizador/mês.",
      fq7_q:'Posso obter uma proposta antes de me comprometer?',
      fq7_a:'Claro. Marque uma consulta gratuita — revemos o seu ambiente, definimos o âmbito correto e fornecemos uma proposta escrita clara. A avaliação IT gratuita é exatamente isso: gratuita, sem obrigação de prosseguir.',
      fq8_q:'Posso adicionar backup cloud ao meu plano IT gerido?',
      fq8_a:'Sim — os planos de backup foram concebidos para complementar o serviço IT gerido de forma integrada. O plano de €60/utilizador/mês inclui monitorização e verificação de backups para qualquer sistema de backup que já tenha. Adicionar um plano Cloud Backup dá-lhe o armazenamento offsite gerido, política de retenção, relatórios e gestão de restauros adicionalmente. A maioria dos clientes com plano IT gerido escolhe o Cloud Backup Standard (€119/mês) como camada de armazenamento.',
      cta_h:'Pronto para colocar um número nisso?',
      cta_p:'Marque uma consulta gratuita. Avaliamos o seu ambiente, confirmamos o número de utilizadores e fornecemos uma proposta escrita precisa — normalmente em 48 horas.',
      cta_btn1:'Marcar uma Consulta Gratuita', cta_btn2:'Explorar Serviços',
      /* ── Cost Estimator ── */
      est_label:'Calculadora de Custos',
      est_h:'Construa a sua estimativa de IT',
      est_p:'Selecione o que a sua empresa precisa e obtenha uma estimativa imediata — hardware, licenças Microsoft 365, serviços de configuração e custos mensais geridos combinados.',
      est_ms_head:'Microsoft 365',
      est_users_label:'Número de utilizadores',
      est_ms_plan_label:'Plano Microsoft 365',
      est_net_head:'Redes Geridas',
      est_net_size_label:'Dimensão da rede',
      est_net_size_none:'Sem hardware de rede',
      est_net_size_small:'Local pequeno — UDM (€295,81)',
      est_net_size_standard:'Escritório standard — UniFi Express 7 (€175,47)',
      est_net_size_advanced:'Escritório maior — UDM-SE (€465,49)',
      est_extra_aps_label:'Pontos de acesso Wi-Fi extra',
      est_add_switch_label:'Adicionar switch PoE 8 porto (€229)',
      est_add_install_label:'Adicionar instalação de rede única',
      est_managed_net_label:'Rede gerida mensal (€35/mês)',
      est_cam_head:'Câmaras de Segurança',
      est_cameras_label:'Número de câmaras',
      est_cam_type_label:'Tipo de câmara',
      est_cam_type_essential:'Cobertura Essencial (€77,20 cada)',
      est_cam_type_advanced:'Cobertura Avançada (€168,86 cada)',
      est_cam_rec_label:'Armazenamento de gravação',
      est_cam_rec_none:'Sem armazenamento de gravação',
      est_cam_rec_basic:'Gravação básica (€274,70)',
      est_cam_rec_advanced:'Sistema de gravação avançado (€599,00)',
      est_managed_cam_label:'Câmaras geridas mensais (€25/mês)',
      est_setup_head:'Serviços de Configuração',
      est_email_label:'Configuração e migração de email (€120 único)',
      est_sp_label:'Configuração SharePoint (€220 único)',
      est_onboard_label:'Integração de suporte remoto (€95 único)',
      est_it_head:'Suporte IT Gerido',
      est_managed_it_label:'Suporte IT gerido mensal (€45 base + €12/utilizador)',
      est_out_hardware_label:'Subtotal de hardware',
      est_out_software_label:'Microsoft 365 mensal',
      est_out_managed_label:'Serviços geridos mensais',
      est_out_setup_label:'Custos de configuração únicos',
      est_out_first_month_label:'Total estimado do primeiro mês',
      est_summary_prefix:'Estimativa para',
      est_summary_users:'utilizadores',
      est_summary_cameras:'câmaras',
      est_summary_suffix:'e opções selecionadas.',
      est_disclaimer:'Esta é uma estimativa apenas. O preço final depende do layout do local, cobertura, cablagem, armazenamento, instalação, migração e requisitos de suporte.',
      est_cta:'Pedir Orçamento Personalizado',
      est_ms_basic:'Business Basic — €6,24/utilizador/mês',
      est_ms_standard:'Business Standard — €12,96/utilizador/mês',
      est_ms_premium:'Business Premium — €22,92/utilizador/mês',
      est_ms_basic_eea:'Business Basic EEA — €4,56/utilizador/mês (sem Teams)',
      est_ms_standard_eea:'Business Standard EEA — €9,60/utilizador/mês (sem Teams)',
      est_ms_premium_eea:'Business Premium EEA — €19,56/utilizador/mês (sem Teams)',
      est_ms_apps_smb:'Microsoft 365 Apps para PMEs — €10,92/utilizador/mês (sem Teams)',
      est_ms_teams_note:'Os planos com Teams incluem videochamadas e reuniões.',
      est_ms_noteams_note:'Os planos EEA excluem o Teams — ideais para empresas que usam o WhatsApp.',
      /* Microsoft 365 section — strings previously hardcoded in EN */
      est_ms_sub:'Configurado para email, partilha de ficheiros e comunicação empresarial real — Teams é opcional.',
      est_ms_sharepoint_hint:'Partilhe ficheiros de forma segura com clientes e fornecedores através do SharePoint — sem anexos dispersos por email',
      /* Plan detail card labels */
      est_ms_teams_tag:'Inclui Microsoft Teams',
      est_ms_noteams_tag:'Sem Teams — use WhatsApp ou telefone',
      /* Plan descriptions */
      est_ms_desc_basic:'Email profissional, apps Office para web e telemóvel, 1 TB OneDrive e SharePoint para partilha segura de ficheiros. Inclui Microsoft Teams. Bom ponto de partida para a maioria das pequenas empresas.',
      est_ms_desc_standard:'Apps Office completas para desktop (Word, Excel, PowerPoint, Outlook) mais SharePoint e Teams. Partilhe ficheiros com clientes e colaboradores — sem mais anexos dispersos por email.',
      est_ms_desc_premium:'Tudo do Standard com segurança avançada — Defender for Business, gestão de dispositivos com Intune e Azure AD P1. Melhor proteção para empresas que gerem dados sensíveis.',
      est_ms_desc_basic_eea:'Email profissional, apps Office para web e telemóvel, 1 TB OneDrive e SharePoint para partilha segura de ficheiros. Sem Teams — ideal se a sua equipa já usa WhatsApp.',
      est_ms_desc_standard_eea:'Apps Office completas para desktop mais SharePoint — sem Teams. Ideal se usa WhatsApp ou telefone e quer poupar nos custos de licenciamento mantendo os ficheiros na cloud.',
      est_ms_desc_premium_eea:'Segurança avançada (Defender for Business, Intune, Azure AD P1) com SharePoint, sem Teams. Melhor segurança para empresas que não precisam de videoconferência integrada.',
      est_ms_desc_apps_smb:'Apenas apps Office para desktop (Word, Excel, PowerPoint, Outlook) — sem alojamento de email. Indicado para empresas com email próprio que precisam só do pacote Office.',
      /* Networking section */
      est_net_sub:'Wi-Fi empresarial seguro sem taxas de licenciamento e com visibilidade remota total.',
      est_net_b1:'Aceder à rede do escritório remotamente',
      est_net_b2:'Proteção de firewall integrada',
      est_net_b3:'Sem taxas de licenciamento recorrentes — vantagem UniFi',
      est_net_helper:'Ideal para pequenos escritórios, lojas e espaços multi-divisão.',
      /* Camera section */
      est_cam_badge:'SEM TAXAS MENSAIS',
      est_cam_sub:'Verifique o seu negócio a partir de qualquer lugar com a app UniFi — simples, seguro e sem subscrições.',
      est_cam_b1:'Ver câmaras em tempo real no seu telemóvel',
      est_cam_b2:'Alertas instantâneos e reprodução de gravações',
      est_cam_b3:'Sem taxas mensais de cloud',
      est_cam_helper:'Ideal para entradas, escritórios, armazéns e espaços comerciais.',
      /* Summary panel */
      est_summary_head:'Estimativa do seu setup IT',
      est_total_note:'Inclui hardware, configuração e serviços mensais com base nas suas seleções.',
      est_val_b1:'Sem taxas de licenciamento para redes',
      est_val_b2:'Sem subscrição necessária para acesso a câmaras',
      est_val_b3:'Acesso remoto seguro incluído',
      /* Updated CTA and headline */
      est_h:'Estime o seu setup IT empresarial',
      est_p:'Obtenha uma estimativa rápida para o seu setup IT completo — incluindo Microsoft 365, redes, câmaras de segurança e suporte.',
      est_cta:'Obter o Meu Plano IT Personalizado',
      est_psychology:'Isto não é apenas uma estimativa — é uma forma mais limpa e segura de gerir o seu negócio.',
      /* Cloud Backup section */
      est_bk_head:'Backup na Cloud',
      est_bk_sub:'Proteja os dados do seu negócio automaticamente — portáteis, computadores e servidores.',
      est_bk_b1:'Proteja ficheiros contra ransomware e eliminação acidental',
      est_bk_b2:'Backups automáticos a correr silenciosamente em segundo plano',
      est_bk_b3:'Recuperação rápida quando algo corre mal',
      est_bk_plan_label:'Plano de backup',
      est_bk_plan_none:'Sem backup selecionado (não recomendado)',
      est_bk_plan_essentials:'Essentials — até 500 GB · €39/mês',
      est_bk_plan_standard:'Standard — até 2 TB · €119/mês',
      est_bk_plan_plus:'Plus — até 5 TB · €249/mês',
      est_bk_plan_archive:'Retenção de Arquivo — até 5 TB · €79/mês',
      est_bk_hint:'Verificações diárias de backup, restauros testados e relatório mensal de estado — incluídos em todos os planos.',
      est_bk_included:'incluídos',
      est_bk_info_essentials:'Verificações diárias de backup · Política básica de retenção · Suporte de restauro (horário laboral)',
      est_bk_info_standard:'Monitorização diária · Retenção de 30–90 dias · Suporte de restauro prioritário · Relatório mensal de estado',
      est_bk_info_plus:'Monitorização e alertas · Opções de retenção a longo prazo · Restauros prioritários · Relatório mensal · Revisão trimestral',
      est_bk_info_archive:'Armazenamento de arquivo a longo prazo · Retenção de conformidade · Armazenamento cold de baixo custo · Recuperação faturada separadamente',
      est_out_backup_label:'Backup na cloud',
      est_out_defender_label:'Segurança de endpoint',

      /* ── Managed Networking — recommendation card ── */
      est_net_recommended:'recomendado',
      est_net_desc_none:'Nenhum hardware de rede selecionado. Adequado apenas se já tiver uma rede empresarial fiável instalada.',
      est_net_device_small:'UniFi Dream Machine',
      est_net_desc_small:'Um router, firewall e ponto de acesso Wi-Fi tudo-em-um. Ideal para pequenos negócios com 1–8 utilizadores num único espaço — lojas, estúdios e escritórios de um piso. Gerido remotamente através da app UniFi.',
      est_net_fit_small:'Ideal para: lojas, estúdios e pequenos escritórios num único local',
      est_net_device_standard:'UniFi Express 7',
      est_net_desc_standard:'Um router compacto e ponto de acesso Wi-Fi 7 numa única unidade. A escolha certa para a maioria dos escritórios com 5–15 utilizadores — cobertura sem fios rápida, firewall integrada e sem licenciamento por subscrição. A nossa opção mais popular.',
      est_net_fit_standard:'Ideal para: a maioria dos pequenos escritórios e espaços de trabalho profissionais',
      est_net_device_advanced:'UniFi Dream Machine SE',
      est_net_desc_advanced:'Uma gateway de segurança em rack com switch PoE integrado. Concebida para ambientes maiores ou mais complexos com 15+ utilizadores, salas de servidores ou setups que necessitem de switching gerido para além do routing.',
      est_net_fit_advanced:'Ideal para: negócios em crescimento, escritórios multi-sala e ambientes com servidores',

      /* ── Endpoint Security (Defender for Business) ── */
      est_def_head:'Segurança de Endpoint',
      est_def_sub:'Proteção de endpoint de nível empresarial para todos os dispositivos — Windows, macOS, iOS e Android.',
      est_def_b1:'Deteção de ameaças por IA e interrupção automática de ataques',
      est_def_b2:'Gestão de vulnerabilidades e relatórios de postura de segurança',
      est_def_b3:'Até 5 dispositivos por utilizador — sem mínimo de dispositivos',
      est_def_plan_label:'Plano de segurança de endpoint',
      est_def_included_note:'O Microsoft Defender for Business está incluído na sua licença Business Premium — sem custo adicional.',
      est_def_hint:'Configurado e monitorizado pela BlueWave IT como parte do seu plano gerido.',
      est_def_users_label:'utilizadores',
      est_def_detail_text:'Deteção de ameaças por IA · Gestão de vulnerabilidades · Antivírus de próxima geração · Investigação e remediação automáticas · Relatórios de segurança mensais',

      /* ── MSP Fit Calculator ── */
      fit_label:'Avaliação de Adequação MSP',
      fit_h:'A gestão IT é adequada para o seu negócio?',
      fit_sub:'Responda a seis questões sobre como a sua empresa opera. O resultado atualiza-se à medida que responde.',
      fit_trust:'Esta avaliação foi concebida para ser prática e realista. Reflete como o seu negócio funciona, não pressupostos do pior cenário.',
      fitQ1_label:'Quantas pessoas utilizam IT no seu negócio?',
      fitQ2_label:'Com que frequência um problema técnico impede alguém de trabalhar?',
      fitQ3_label:'Como é gerida a sua IT atualmente?',
      fitQ4_label:'Algum elemento da sua equipa trabalha remotamente ou em vários locais?',
      fitQ5_label:'Qual é o seu nível de preocupação com cibersegurança e proteção de dados?',
      fitQ6_label:'Qual é a criticidade dos dados do seu negócio? (registos de clientes, dados financeiros, operações)',
      fit_score_label:'A sua pontuação',
      fit_score_of:'em 15',
      fit_empty_msg:'Responda às questões para ver o seu resultado.',
      fit_reasons_head:'Porque é que isto importa para si',
      fit_budget_head:'O que orçamentar',
      fit_cta_primary:'Ver a Minha Estimativa',
      fit_cta_secondary:'Falar Sobre as Minhas Opções',
      fit_r0_title:'Provavelmente ainda não é necessário',
      fit_r0_desc:'Com base nas suas respostas, o seu setup atual é provavelmente gerível sem um serviço de IT totalmente gerido. Pode beneficiar de suporte pontual ou de uma consulta para reforçar o básico de segurança.',
      fit_r1_title:'Vale a pena considerar',
      fit_r1_desc:'Há sinais de que a IT está a começar a criar fricção no seu negócio. Um serviço gerido pode reduzir esse esforço — mas não é urgente. Vale a pena uma conversa para perceber o que se adequa.',
      fit_r2_title:'Provavelmente uma boa opção',
      fit_r2_desc:'O seu negócio mostra sinais claros de que a IT não gerida está a custar-lhe tempo e a criar riscos. Um serviço gerido provavelmente pagar-se-ia a si próprio através de menor inatividade, melhor segurança e menos distração para a sua equipa.',
      fit_r3_title:'Elevado valor para IT gerida',
      fit_r3_desc:'Com base nas suas respostas, a IT gerida entregaria valor significativo ao seu negócio. A sua dimensão, exposição de segurança e dependência de IT fazem desta uma melhoria operacional direta.',
      fit_budget_r0:'Suporte pontual ou uma revisão de segurança única é provavelmente suficiente nesta fase.',
      fit_budget_r1:'Um plano gerido a partir de €60/utilizador/mês cobriria o essencial sem sobrecarga.',
      fit_budget_r2:'Orçamente para um plano gerido completo (€60/utilizador/mês). Considere lacunas de hardware identificadas no Estimador de Custos abaixo.',
      fit_budget_r3:'Vale a pena orçamentar um plano gerido completo com reforço de segurança. Use o Estimador de Custos abaixo para ter uma visão completa.',
      fit_why_users:'Com a dimensão da sua equipa, coordenar a IT sem um serviço estruturado tende a levar a inconsistências.',
      fit_why_downtime:'Problemas técnicos frequentes são sinal de que a IT reativa está a custar mais à sua equipa do que parece.',
      fit_why_noit:'Sem um recurso de IT dedicado, os problemas tendem a acumular-se silenciosamente até se tornarem dispendiosos.',
      fit_why_remote:'O trabalho remoto e em vários locais aumenta a sua superfície de ataque e a complexidade de suporte.',
      fit_why_security:'Preocupações de cibersegurança ao seu nível requerem gestão proativa, não uma abordagem de espera.',
      fit_why_data:'Dados empresariais de elevado valor sem um plano gerido de backup e recuperação é um risco operacional sério.',
    }
  };

  /* lang via document.documentElement.lang */

  /* _onLangChange hook — registered inside DOMContentLoaded so it chains
     AFTER site.js's DOMContentLoaded handler (site.js resets _onLangChange
     to only call updatePricing, which would otherwise wipe this hook).
     Capturing _prev at handler-run time picks up site.js's version cleanly. */
  document.addEventListener('DOMContentLoaded', function () {
    var _prev = window._onLangChange;
    window._onLangChange = function (lang) {
      if (typeof _prev === 'function') _prev(lang);
      if (typeof recalcEstimator === 'function') recalcEstimator();
      if (typeof window._fitUpdateResult === 'function') window._fitUpdateResult();
    };
  });

  /* ── MSP FIT CALCULATOR ── */
  (function () {
    /* Score values per question index (option value="0","1","2","3") */
    var Q_SCORES = {
      fitQ1: [0, 1, 2, 3],   /* team size */
      fitQ2: [0, 2, 3],       /* downtime frequency */
      fitQ3: [2, 1, 0],       /* current IT (inverted — more coverage = lower need) */
      fitQ4: [0, 1, 2],       /* remote / multi-site */
      fitQ5: [0, 2, 3],       /* security concern */
      fitQ6: [0, 1, 2],       /* data criticality */
    };

    /* Which option indices trigger each reason string */
    var REASON_CHECKS = [
      { qid: 'fitQ1', trigger: [2, 3], key: 'fit_why_users'    },
      { qid: 'fitQ2', trigger: [1, 2], key: 'fit_why_downtime' },
      { qid: 'fitQ3', trigger: [2],    key: 'fit_why_noit'     },
      { qid: 'fitQ4', trigger: [1, 2], key: 'fit_why_remote'   },
      { qid: 'fitQ5', trigger: [1, 2], key: 'fit_why_security' },
      { qid: 'fitQ6', trigger: [1, 2], key: 'fit_why_data'     },
    ];

    function getT(key) {
      var lang = document.documentElement.lang || 'en';
      var page = (window.PAGE_TRANSLATIONS || {})[lang] || {};
      return page[key] !== undefined ? page[key] : key;
    }

    function calcScore() {
      var total = 0, answered = 0;
      var qids = Object.keys(Q_SCORES);
      for (var i = 0; i < qids.length; i++) {
        var sel = document.getElementById(qids[i]);
        if (!sel) continue;
        var idx = parseInt(sel.value, 10);
        if (!isNaN(idx) && idx >= 0) {
          total += Q_SCORES[qids[i]][idx];
          answered++;
        }
      }
      return { total: total, answered: answered };
    }

    function getBand(score) {
      if (score <= 4)  return 0;
      if (score <= 8)  return 1;
      if (score <= 12) return 2;
      return 3;
    }

    function getReasons() {
      var reasons = [];
      for (var i = 0; i < REASON_CHECKS.length; i++) {
        var c = REASON_CHECKS[i];
        var sel = document.getElementById(c.qid);
        if (!sel) continue;
        var idx = parseInt(sel.value, 10);
        if (!isNaN(idx) && c.trigger.indexOf(idx) !== -1) {
          reasons.push(getT(c.key));
        }
      }
      return reasons.slice(0, 3);
    }

    window._fitUpdateResult = function () {
      var res       = calcScore();
      var scoreEl   = document.getElementById('fitScore');
      var titleEl   = document.getElementById('fitResultTitle');
      var descEl    = document.getElementById('fitResultDesc');
      var reasonsEl = document.getElementById('fitReasonsList');
      var reasonsWr = document.getElementById('fitReasonsWrap');
      var budgetEl  = document.getElementById('fitBudgetText');
      var emptyEl   = document.getElementById('fitEmptyMsg');
      var resultWr  = document.getElementById('fitResultWrap');
      var bandEl    = document.getElementById('fitBandBar');
      if (!scoreEl) return;

      /* Always update the score number */
      scoreEl.textContent = res.total;

      /* Band bar */
      if (bandEl) {
        bandEl.style.width = Math.round((res.total / 15) * 100) + '%';
        bandEl.className = 'fit-band-fill fit-band-' + (res.answered > 0 ? getBand(res.total) : 'empty');
      }

      if (res.answered === 0) {
        if (emptyEl)  emptyEl.style.display  = '';
        if (resultWr) resultWr.style.display = 'none';
        return;
      }

      if (emptyEl)  emptyEl.style.display  = 'none';
      if (resultWr) resultWr.style.display = '';

      var band = getBand(res.total);
      var bk   = ['r0', 'r1', 'r2', 'r3'][band];

      if (titleEl)  titleEl.textContent  = getT('fit_' + bk + '_title');
      if (descEl)   descEl.textContent   = getT('fit_' + bk + '_desc');
      if (budgetEl) budgetEl.textContent = getT('fit_budget_' + bk);

      /* Dynamic reasons (up to 3) */
      var reasons = getReasons();
      if (reasonsEl) {
        reasonsEl.innerHTML = reasons.map(function (r) {
          return '<li>' + r + '</li>';
        }).join('');
      }
      if (reasonsWr) reasonsWr.style.display = reasons.length ? '' : 'none';
    };

    /* Bind change events to all six selects */
    var fitSelects = ['fitQ1','fitQ2','fitQ3','fitQ4','fitQ5','fitQ6'];
    fitSelects.forEach(function (qid) {
      var sel = document.getElementById(qid);
      if (sel) sel.addEventListener('change', window._fitUpdateResult);
    });

    /* Initialise result panel to empty state */
    window._fitUpdateResult();
  })();


  /* ── reveal on scroll ── */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.10 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  function fmt(n) { var _l = document.documentElement.lang; return n.toLocaleString(_l === 'pt' ? 'pt-PT' : 'en-GB'); }

  /* ── FAQ ── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.parentElement.querySelectorAll('.faq-item.open').forEach(f => {
        if (f !== item) f.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });

  /* ── CONTACT MODAL ── */
  let openModal;
  (function(){
    const overlay  = document.getElementById('cmodalOverlay');
    const closeBtn = document.getElementById('cmodalClose');
    const planTag  = document.getElementById('cmodalPlanName');
    const form     = document.getElementById('cmodalForm');
    const success  = document.getElementById('cmodalSuccess');
    const submitBtn= document.getElementById('cmodalSubmit');

    openModal = function(planName) {
      planTag.textContent = planName || 'BlueWave IT Enquiry';
      form.style.display    = '';
      success.style.display = 'none';
      submitBtn.disabled    = false;
      submitBtn.textContent = window.PAGE_TRANSLATIONS[document.documentElement.lang] && window.PAGE_TRANSLATIONS[document.documentElement.lang].cm_submit ? window.PAGE_TRANSLATIONS[document.documentElement.lang].cm_submit : 'Send Enquiry';
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      // Focus first input after transition
      setTimeout(function(){ document.getElementById('cmodalName').focus(); }, 320);
    }

    function closeModal() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Intercept ALL index.html#contact links on this page
    document.querySelectorAll('a[href="index.html#contact"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        // Detect plan name from nearest heading/name context
        var planName = 'BlueWave IT Enquiry';
        var card = link.closest('.bk-card, .os-card, .plan-card, .side-card, .cta-box');
        if (card) {
          var nameEl = card.querySelector('.bk-name, .os-name, .plan-name, h3, h2');
          if (nameEl) planName = nameEl.textContent.trim();
        }
        // Use data-plan override if present
        if (link.dataset.plan) planName = link.dataset.plan;
        // Use button text as fallback label
        if (planName === 'BlueWave IT Enquiry' && link.textContent.trim()) {
          planName = link.textContent.trim();
        }
        openModal(planName);
      });
    });

    // Close on overlay click
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeModal();
    });

    // Close on X button
    closeBtn.addEventListener('click', closeModal);

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });

    // Submit handler — mailto fallback (replace with actual form endpoint when deploying)
    submitBtn.addEventListener('click', function() {
      var name    = document.getElementById('cmodalName').value.trim();
      var email   = document.getElementById('cmodalEmail').value.trim();
      var company = document.getElementById('cmodalCompany').value.trim();
      var msg     = document.getElementById('cmodalMsg').value.trim();

      // Basic validation
      if (!name) { document.getElementById('cmodalName').focus(); return; }
      if (!email || !email.includes('@')) { document.getElementById('cmodalEmail').focus(); return; }

      // Build mailto as a working fallback until a backend is connected
      var subject = encodeURIComponent('BlueWave IT Enquiry — ' + planTag.textContent);
      var body    = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Company / Users: ' + (company || '—') + '\n' +
        'Plan of interest: ' + planTag.textContent + '\n\n' +
        (msg || '(No additional message)')
      );
      window.location.href = 'mailto:hello@bluewaveit.pt?subject=' + subject + '&body=' + body;

      // Show success state
      submitBtn.disabled    = true;
      form.style.display    = 'none';
      success.style.display = 'block';

      // Auto-close after 4s
      setTimeout(closeModal, 4000);
    });
  })();
