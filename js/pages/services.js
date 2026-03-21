/* BlueWave IT — services.js — loads after site.js */
/* ================================================================
   BlueWave IT — services.js
   Page-specific JS for services.html. Loads after site.js
   ================================================================ */


    /* ── full i18n engine ── */
    const T = {
      en: {
        ai_label: 'AI-Optimized Services for Algarve Businesses',
        ai_h2_a: 'Modern IT, web,', ai_h2_b: 'and AI workflow', ai_h2_c: 'services for your organization.',
        ai_intro_p: 'BlueWave IT helps businesses improve visibility, strengthen security, and reduce manual work with practical technology services. From websites and lead capture to managed IT and AI-assisted workflow implementation, we focus on solutions that make your organization faster, clearer, and easier to run.',
        ai_c1_h: 'Web Presence & Digital Experience', ai_c1_p: 'Professional websites and customer-facing digital tools designed to help your business look credible, rank better, and convert more visitors into real inquiries.',
        ai_c1_f1: 'Website design, refresh, and landing pages', ai_c1_f2: 'Multilingual content structure for PT, EN, and major EU languages, with localization-ready design', ai_c1_f3: 'Google Business Profile and local visibility improvements', ai_c1_f4: 'Quote forms, booking flows, contact funnels, and WhatsApp integration',
        ai_c1_t1: 'Web Design', ai_c1_t2: 'Lead Capture', ai_c1_t3: 'Local SEO', ai_c1_t4: 'Conversion Focused',
        ai_c2_h: 'Managed IT & Secure Operations', ai_c2_p: 'Reliable support, proactive monitoring, and practical cybersecurity to keep your systems stable, your users productive, and your data protected.',
        ai_c2_f1: 'Managed IT support, patching, and endpoint oversight', ai_c2_f2: 'Email security, MFA, Microsoft 365 hardening, and backup strategy', ai_c2_f3: 'Network, Wi-Fi, firewall, and remote access management', ai_c2_f4: 'Clear standards, documentation, and ongoing operational support',
        ai_c2_t1: 'Managed IT', ai_c2_t2: 'Cybersecurity', ai_c2_t3: 'M365', ai_c2_t4: 'Backup & Network',
        ai_c3_h: 'AI Workflow Implementation', ai_c3_p: 'We help your organization use AI in a practical, controlled way by improving repetitive processes, internal workflows, and team efficiency without overcomplicating your stack.',
        ai_c3_f1: 'AI-assisted workflow reviews for admin, service, and internal processes', ai_c3_f2: 'Guidance on where AI can reduce repetitive work and improve response times', ai_c3_f3: 'Implementation support for safer, more structured AI usage inside your organization', ai_c3_f4: 'Process design that keeps human oversight, security, and business value in focus',
        ai_c3_t1: 'AI Workflows', ai_c3_t2: 'Process Improvement', ai_c3_t3: 'Team Efficiency', ai_c3_t4: 'Practical AI',
        ai_view_details: 'View Details',
        /* meta */
        page_title: 'Services | BlueWave IT — Managed IT Services, Algarve',
        /* nav */
        nav_home: 'Home', nav_services: 'Services', nav_about: 'About',
        nav_pricing: 'Pricing', nav_contact: 'Contact',
        nav_label: 'Managed IT Services',
        cta_book: 'Book a Consultation',
        /* breadcrumb */
        bc_home: 'Home', bc_current: 'Services',
        /* hero */
        hero_label: 'What We Deliver',
        hero_h1_a: 'Every service your',
        hero_h1_b: 'business needs to',
        hero_h1_c: 'run without IT stress.',
        hero_p: 'Six focused service areas — each designed to remove a specific layer of IT risk, cost, or complexity for small and midsize businesses across the Algarve.',
        hero_cta_1: 'Explore All Services',
        hero_cta_2: 'Request a Consultation',
        stat_1_val: '€60', stat_1_lbl: 'per user / month',
        stat_2_val: '6',   stat_2_lbl: 'core service areas',
        stat_3_val: '24/7',stat_3_lbl: 'monitoring coverage',
        stat_4_val: '1',   stat_4_lbl: 'dedicated MSP partner',
        /* sticky nav */
        snav_managed: 'Managed IT',
        snav_cyber:   'Cybersecurity',
        snav_cloud:   'Cloud & M365',
        snav_backup:  'Backup & Recovery',
        snav_net:     'Networking',
        snav_consult: 'IT Consulting',
        /* overview cards */
        ov_label: 'Our Services',
        ov_managed_h: 'Managed IT Services',
        ov_managed_p: 'Your complete IT department — monitoring, helpdesk, patch management, and endpoint management under one monthly plan.',
        ov_managed_t1:'Helpdesk', ov_managed_t2:'Monitoring', ov_managed_t3:'Patch Mgmt',
        ov_cyber_h: 'Cybersecurity',
        ov_cyber_p: 'Layered protection for your users, devices, and data — from endpoint security to email filtering and MFA deployment.',
        ov_cyber_t1:'Endpoint', ov_cyber_t2:'Email Security', ov_cyber_t3:'MFA',
        ov_cloud_h: 'Cloud & Microsoft 365',
        ov_cloud_p: 'Microsoft 365 administration, cloud migrations, SharePoint, Teams, and email — all managed and supported for your team.',
        ov_cloud_t1:'M365', ov_cloud_t2:'Teams', ov_cloud_t3:'Migrations',
        ov_backup_h: 'Backup & Recovery',
        ov_backup_p: 'Automated, verified, and tested backups — so you know exactly what happens if things go wrong, and recovery is measured in hours not days.',
        ov_backup_t1:'Cloud Backup', ov_backup_t2:'NAS Backup', ov_backup_t3:'DR Planning',
        ov_net_h: 'Network Management',
        ov_net_p: 'Reliable infrastructure from firewall to Wi-Fi — with ongoing monitoring, UniFi management, and network health visibility.',
        ov_net_t1:'UniFi', ov_net_t2:'Firewall', ov_net_t3:'VPN',
        ov_consult_h: 'IT Consulting',
        ov_consult_p: 'Strategic guidance for technology decisions — budgeting, infrastructure planning, vendor selection, and growth roadmaps.',
        ov_consult_t1:'Roadmaps', ov_consult_t2:'Budgeting', ov_consult_t3:'Strategy',
        see_details: 'See full details',
        /* managed IT detail */
        d_mit_label: 'Managed IT Services',
        d_mit_h: 'Your complete IT team — without the overhead.',
        d_mit_p: 'BlueWave IT acts as your outsourced IT department. We handle the day-to-day so your team can stay focused on work — not tech problems.',
        d_mit_f1_t: '24/7 Monitoring & Alerting',
        d_mit_f1_b: 'Continuous monitoring of endpoints, servers, and services. Automated alerts when something needs attention — often before you even notice a problem.',
        d_mit_f2_t: 'Helpdesk Support',
        d_mit_f2_b: 'Fast, friendly support for your team via remote connection, email, or phone. Issues are triaged, tracked, and resolved — with clear communication throughout.',
        d_mit_f3_t: 'Patch & Update Management',
        d_mit_f3_b: 'Scheduled deployment of OS and software patches across all managed devices. Tested before rollout to avoid disruption, with compliance reporting available.',
        d_mit_f4_t: 'Endpoint Management',
        d_mit_f4_b: 'Full lifecycle management of workstations and laptops — asset inventory, health scoring, remote access, and onboarding/offboarding for new team members.',
        d_mit_cta: 'Get Managed IT Support',
        d_mit_vis_h: 'Environment Health Overview',
        d_mit_m1: 'Patch compliance', d_mit_m2: 'Devices online', d_mit_m3: 'Avg. response time',
        d_mit_m4: 'Open tickets', d_mit_m5: 'This month resolved',
        d_mit_ok: '✓ All systems operational', d_mit_ok2: 'Last check: 2 minutes ago',
        /* cybersecurity detail */
        d_sec_label: 'Cybersecurity',
        d_sec_h: 'Security that actually fits a small business.',
        d_sec_p: 'Enterprise-level protection, tuned for the reality of SMBs — without complexity or bloat. We handle the security stack so you don\'t have to think about it.',
        d_sec_f1_t: 'Endpoint Detection & Protection',
        d_sec_f1_b: 'Next-generation antivirus and EDR deployed to every managed device. Behavioural detection catches threats that signature-based tools miss — including ransomware.',
        d_sec_f2_t: 'Email Security & Anti-Phishing',
        d_sec_f2_b: 'Email filtering that blocks phishing, malicious attachments, and spoofing before they reach your inbox — integrated with Microsoft 365 mail flow.',
        d_sec_f3_t: 'Multi-Factor Authentication',
        d_sec_f3_b: 'MFA deployment and enforcement across Microsoft 365, VPN, and business applications. Reduces account takeover risk by over 99% for covered accounts.',
        d_sec_f4_t: 'Firewall & Network Security',
        d_sec_f4_b: 'Managed firewall rules, regular policy reviews, DNS filtering, and traffic visibility — keeping threats out at the perimeter before they touch your devices.',
        d_sec_cta: 'Improve Your Security Posture',
        d_sec_vis_h: 'Security Posture Score',
        d_sec_grade: 'Security Grade',
        d_sec_m1: 'Endpoint protection', d_sec_m2: 'Email filtering',
        d_sec_m3: 'MFA coverage', d_sec_m4: 'Threats blocked (30d)',
        d_sec_v1: 'Active', d_sec_v2: 'Active', d_sec_v3: '91%', d_sec_v4: '143',
        /* cloud detail */
        d_cld_label: 'Cloud & Microsoft 365',
        d_cld_h: 'Cloud tools, properly configured and continuously managed.',
        d_cld_p: 'Microsoft 365 is powerful — but misconfigured M365 is a security risk and a productivity drain. We make sure it\'s set up right, licensed correctly, and supported for your team.',
        d_cld_f1_t: 'Microsoft 365 Administration',
        d_cld_f1_b: 'User management, license assignment, mailbox configuration, and security settings — all maintained as part of your managed service. New hires and departures handled cleanly.',
        d_cld_f2_t: 'Teams & SharePoint Support',
        d_cld_f2_b: 'Setting up Teams structure, SharePoint sites, shared drives, and access permissions that match how your business actually works — not just defaults.',
        d_cld_f3_t: 'Cloud Migrations',
        d_cld_f3_b: 'Moving from on-premise file servers, legacy email systems, or other cloud providers to Microsoft 365 — with minimal disruption and proper data validation.',
        d_cld_f4_t: 'M365 Security Configuration',
        d_cld_f4_b: 'Conditional access policies, Defender for Business setup, Secure Score improvement, and ongoing security posture monitoring within your tenant.',
        d_cld_cta: 'Talk About Your Cloud Setup',
        d_cld_vis_h: 'Microsoft 365 Tenant Overview',
        d_cld_r1: 'Exchange Online', d_cld_r2: 'Microsoft Teams', d_cld_r3: 'SharePoint / OneDrive',
        d_cld_r4: 'Defender for Business', d_cld_r5: 'Secure Score', d_cld_r6: 'Unlicensed Users',
        d_cld_s1: 'Healthy', d_cld_s2: 'Healthy', d_cld_s3: 'Healthy',
        d_cld_s4: 'Active', d_cld_s5: '78 / 100', d_cld_s6: '2 flagged',
        /* backup detail */
        d_bak_label: 'Backup & Disaster Recovery',
        d_bak_h: 'Know exactly what happens when something goes wrong.',
        d_bak_p: 'Most businesses assume their backups work. We verify it. Tested, documented, and monitored backup systems — so recovery is a controlled process, not a crisis.',
        d_bak_f1_t: 'Cloud Backup',
        d_bak_f1_b: 'Automated offsite backups of critical data to encrypted cloud storage. Retention policies configured to match your business requirements — daily, weekly, and monthly restore points.',
        d_bak_f2_t: 'NAS / Local Backup',
        d_bak_f2_b: 'On-premises Synology NAS backup for fast local restores — reducing recovery time for large datasets. Configured in a 3-2-1 backup strategy for maximum resilience.',
        d_bak_f3_t: 'Microsoft 365 Backup',
        d_bak_f3_b: 'Microsoft does not back up your M365 mailboxes or SharePoint data by default. We deploy third-party backup to ensure your cloud data has independent protection.',
        d_bak_f4_t: 'Restore Testing & DR Planning',
        d_bak_f4_b: 'Regular restore drills, documented recovery procedures, and RTO/RPO targets agreed for your key systems. You\'ll know exactly how long recovery takes before you ever need it.',
        d_bak_cta: 'Review Your Backup Strategy',
        d_bak_vis_h: 'Backup Job Status',
        d_bak_ok: '✓ Full', d_bak_ok2: '✓ Incremental', d_bak_ok3: '✓ Incremental', d_bak_warn: '⚠ Review',
        d_bak_m1: 'Overall success rate', d_bak_m2: 'Last restore test', d_bak_m3: 'Data protected',
        d_bak_v1: '99.8%', d_bak_v2: '7 days ago', d_bak_v3: '2.4 TB',
        /* networking detail */
        d_net_label: 'Network Management',
        d_net_h: 'A network that works quietly in the background — always.',
        d_net_p: 'Poor networking is the root cause of more productivity loss than any other IT issue. We build, monitor, and maintain reliable infrastructure so connectivity is never the bottleneck.',
        d_net_f1_t: 'Firewall Management',
        d_net_f1_b: 'Rule set maintenance, firmware updates, traffic policy reviews, and intrusion detection tuning — keeping the perimeter hardened without blocking legitimate business traffic.',
        d_net_f2_t: 'UniFi Wi-Fi Management',
        d_net_f2_b: 'Full UniFi controller management — SSID segmentation, guest network isolation, coverage optimization, and access point health monitoring. Proper business Wi-Fi, not consumer kit.',
        d_net_f3_t: 'VPN & Remote Access',
        d_net_f3_b: 'Site-to-site and client VPN for secure remote access. Deployed and managed for home offices, multi-site businesses, and travelling staff — with device-level enforcement.',
        d_net_f4_t: 'Network Monitoring & Health',
        d_net_f4_b: 'Continuous visibility into switch ports, access points, and uplinks. Bandwidth trending, anomaly detection, and proactive alerts before outages affect your team.',
        d_net_cta: 'Review Your Network Setup',
        d_net_vis_h: 'Network Topology',
        d_net_m1: 'Uptime (30d)', d_net_m2: 'Active devices',
        d_net_v1: '99.9%', d_net_v2: '22',
        /* consulting detail */
        d_con_label: 'IT Consulting',
        d_con_h: 'Technology decisions that actually align with your business.',
        d_con_p: 'No vendor bias. No unnecessary complexity. Just honest guidance on what your business needs — with a roadmap to get there at a pace that works for your budget.',
        d_con_f1_t: 'IT Roadmap Planning',
        d_con_f1_b: 'A structured, prioritised plan for your IT over the next 12–36 months — hardware refresh cycles, software upgrades, security improvements, and budget allocation.',
        d_con_f2_t: 'Vendor & Procurement Guidance',
        d_con_f2_b: 'Recommendations on hardware, software, and SaaS tools that are right for your size and industry — avoiding vendor lock-in and overpriced enterprise tools that SMBs don\'t need.',
        d_con_f3_t: 'Infrastructure Design',
        d_con_f3_b: 'Design of scalable infrastructure for office moves, new locations, or business growth — including networking, server environments, and cloud architecture.',
        d_con_f4_t: 'GDPR & Compliance Guidance',
        d_con_f4_b: 'Practical IT guidance around GDPR obligations for Algarve businesses — data handling, access controls, retention policies, and documentation requirements.',
        d_con_cta: 'Start a Consulting Conversation',
        d_con_vis_h: 'Sample IT Roadmap',
        d_con_vis_period: 'Q1–Q4 2026',
        d_con_rm1_h: 'Security Baseline Audit', d_con_rm1_p: 'MFA, endpoint review, firewall assessment — Q1 2026',
        d_con_rm2_h: 'M365 Security Hardening', d_con_rm2_p: 'Conditional access, Secure Score improvements — Q1 2026',
        d_con_rm3_h: 'Backup Strategy Upgrade', d_con_rm3_p: 'Cloud + NAS 3-2-1 setup, restore testing — Q2 2026',
        d_con_rm4_h: 'Hardware Refresh',         d_con_rm4_p: 'Workstation lifecycle review, 3 replacements planned — Q3 2026',
        d_con_rm5_h: 'Network Upgrade',           d_con_rm5_p: 'UniFi rollout, Wi-Fi 6 APs, new core switch — Q4 2026',
        /* comparison table */
        cmp_label: 'Service Comparison',
        cmp_h: 'Reactive IT vs. Managed IT',
        cmp_p: 'See how BlueWave IT\'s managed service model compares to the traditional break-fix approach that most small businesses are still using.',
        cmp_th1: 'What you get', cmp_th2: 'Break-Fix / Ad Hoc', cmp_th3: 'BlueWave IT Managed',
        cmp_r1: 'Monitoring & alerting',        cmp_r1b: '—', cmp_r1m: '✓ 24/7 automated',
        cmp_r2: 'Patch management',             cmp_r2b: 'Manual / inconsistent', cmp_r2m: '✓ Scheduled & tested',
        cmp_r3: 'Helpdesk support',             cmp_r3b: 'Pay per incident', cmp_r3m: '✓ Included, fast response',
        cmp_r4: 'Cybersecurity tools',          cmp_r4b: '—', cmp_r4m: '✓ EDR, email, MFA',
        cmp_r5: 'Backup monitoring',            cmp_r5b: '—', cmp_r5m: '✓ Daily verification',
        cmp_r6: 'M365 administration',          cmp_r6b: 'Per-hour, reactive', cmp_r6m: '✓ Ongoing management',
        cmp_r7: 'Network management',           cmp_r7b: '—', cmp_r7m: '✓ Monitored & supported',
        cmp_r8: 'IT strategy & roadmap',        cmp_r8b: '—', cmp_r8m: '✓ Annual review',
        cmp_r9: 'Predictable monthly cost',     cmp_r9b: '—', cmp_r9m: '✓ €60 per user/month',
        cmp_r10:'GDPR IT guidance',             cmp_r10b:'—', cmp_r10m:'✓ Included',
        /* pricing */
        prc_label: 'Pricing',
        prc_h: 'One plan. Everything included.',
        prc_p: 'No tiered features, no surprise add-ons. All six service areas are covered under a single per-user monthly fee.',
        prc_plan_lbl: 'Standard Managed Plan',
        prc_val: '€60', prc_unit: 'per user / month',
        prc_desc: 'Everything your business needs to run reliably, stay secure, and scale with confidence.',
        prc_f1:'Managed IT helpdesk & monitoring', prc_f2:'Endpoint protection & patch management',
        prc_f3:'Cybersecurity — EDR, email, MFA',  prc_f4:'Microsoft 365 administration',
        prc_f5:'Backup monitoring & verification',  prc_f6:'Network health & support',
        prc_f7:'Annual IT consulting review',       prc_f8:'GDPR IT guidance',
        prc_cta: 'Get Started — Book a Consultation',
        prc_free_lbl:  'Free Before You Commit',
        prc_free_val:  'Free', prc_free_unit: 'IT assessment',
        prc_free_desc: 'Not sure where to start? We\'ll review your current environment, identify risks, and give you a clear picture of where you stand — no strings attached.',
        prc_ff1:'Full environment review',   prc_ff2:'Security gap identification',
        prc_ff3:'Backup status assessment',  prc_ff4:'Network health check',
        prc_ff5:'Clear written summary',     prc_ff6:'Prioritised recommendations',
        prc_free_cta: 'Request Free Assessment',
        /* CTA */
        cta_h: 'Ready to stop reacting and start managing?',
        cta_p: 'Talk to BlueWave IT about how managed services can eliminate the IT stress that\'s costing your business time and money every week.',
        cta_btn1: 'Book a Free Consultation',
        cta_btn2: 'Request IT Assessment',
        /* footer */
        ft_tagline: 'Enterprise-grade IT management for growing businesses across the Algarve. Reliable, secure, and predictably priced.',
        ft_svc_h: 'Services', ft_co_h: 'Company',
        ft_s1:'Managed IT', ft_s2:'Cybersecurity', ft_s3:'Cloud & M365',
        ft_s4:'Backup & Recovery', ft_s5:'Network Management', ft_s6:'IT Consulting',
        ft_c1:'Home', ft_c2:'About', ft_c3:'Pricing', ft_c4:'FAQ', ft_c5:'Contact',
        ft_copy: '© 2026 BlueWave IT. Reliable technology for growing businesses.',
        ft_privacy: 'Privacy Policy', ft_gdpr: 'GDPR',ft_terms:'Terms and Conditions',
        theme_dark: 'Dark', theme_light: 'Light',
      },
      pt: {
        ai_label: 'Serviços Otimizados por IA para Empresas do Algarve',
        ai_h2_a: 'IT moderno, web,', ai_h2_b: 'e fluxos de trabalho com IA', ai_h2_c: 'para a sua organização.',
        ai_intro_p: 'A BlueWave IT ajuda empresas a melhorar a visibilidade, reforçar a segurança e reduzir o trabalho manual com serviços tecnológicos práticos. Desde websites e captação de contactos até IT gerido e implementação de fluxos de trabalho com IA, focamo-nos em soluções que tornam a sua organização mais rápida, clara e fácil de gerir.',
        ai_c1_h: 'Presença Web e Experiência Digital', ai_c1_p: 'Websites profissionais e ferramentas digitais voltadas para o cliente, desenhadas para tornar a sua empresa mais credível, melhorar o posicionamento e converter mais visitantes em contactos reais.',
        ai_c1_f1: 'Design de websites, renovações e landing pages', ai_c1_f2: 'Estrutura de conteúdo multilingue para PT, EN e principais idiomas da UE, com design pronto para localização', ai_c1_f3: 'Google Business Profile e melhorias de visibilidade local', ai_c1_f4: 'Formulários de orçamento, funis de contacto e integração com WhatsApp',
        ai_c1_t1: 'Web Design', ai_c1_t2: 'Captação de Leads', ai_c1_t3: 'SEO Local', ai_c1_t4: 'Foco na Conversão',
        ai_c2_h: 'IT Gerido e Operações Seguras', ai_c2_p: 'Suporte fiável, monitorização proativa e cibersegurança prática para manter os seus sistemas estáveis, a sua equipa produtiva e os seus dados protegidos.',
        ai_c2_f1: 'Suporte IT gerido, patches e gestão de endpoints', ai_c2_f2: 'Segurança de email, MFA, reforço do M365 e estratégia de backup', ai_c2_f3: 'Gestão de rede, Wi-Fi, firewall e acesso remoto', ai_c2_f4: 'Padrões claros, documentação e suporte operacional contínuo',
        ai_c2_t1: 'IT Gerido', ai_c2_t2: 'Cibersegurança', ai_c2_t3: 'M365', ai_c2_t4: 'Backup e Rede',
        ai_c3_h: 'Implementação de Fluxos de Trabalho com IA', ai_c3_p: 'Ajudamos a sua organização a utilizar IA de forma prática e controlada, melhorando processos repetitivos e eficiência da equipa sem complicar o seu stack.',
        ai_c3_f1: 'Revisões de fluxos de trabalho com IA para processos admin, serviço e internos', ai_c3_f2: 'Orientação sobre onde a IA pode reduzir trabalho repetitivo e melhorar tempos de resposta', ai_c3_f3: 'Suporte à implementação de utilização de IA mais segura e estruturada', ai_c3_f4: 'Design de processos que mantém supervisão humana, segurança e valor de negócio em foco',
        ai_c3_t1: 'Fluxos IA', ai_c3_t2: 'Melhoria de Processos', ai_c3_t3: 'Eficiência da Equipa', ai_c3_t4: 'IA Prática',
        ai_view_details: 'Ver Detalhes',
        page_title: 'Serviços | BlueWave IT — Serviços IT Geridos, Algarve',
        nav_home: 'Início', nav_services: 'Serviços', nav_about: 'Sobre',
        nav_pricing: 'Preços', nav_contact: 'Contacto',
        nav_label: 'Serviços IT Geridos',
        cta_book: 'Marcar Consulta',
        bc_home: 'Início', bc_current: 'Serviços',
        hero_label: 'O Que Entregamos',
        hero_h1_a: 'Todos os serviços que',
        hero_h1_b: 'a sua empresa precisa para',
        hero_h1_c: 'funcionar sem stress de IT.',
        hero_p: 'Seis áreas de serviço focadas — cada uma desenhada para eliminar uma camada específica de risco, custo ou complexidade de IT para pequenas e médias empresas no Algarve.',
        hero_cta_1: 'Explorar Todos os Serviços',
        hero_cta_2: 'Pedir uma Consulta',
        stat_1_val: '€60', stat_1_lbl: 'por utilizador / mês',
        stat_2_val: '6',   stat_2_lbl: 'áreas de serviço',
        stat_3_val: '24/7',stat_3_lbl: 'cobertura de monitorização',
        stat_4_val: '1',   stat_4_lbl: 'parceiro MSP dedicado',
        snav_managed: 'IT Gerido',
        snav_cyber:   'Cibersegurança',
        snav_cloud:   'Cloud & M365',
        snav_backup:  'Backup e Recuperação',
        snav_net:     'Redes',
        snav_consult: 'Consultoria IT',
        ov_label: 'Os Nossos Serviços',
        ov_managed_h: 'Serviços IT Geridos',
        ov_managed_p: 'O seu departamento de IT completo — monitorização, helpdesk, gestão de patches e endpoints, num único plano mensal.',
        ov_managed_t1:'Helpdesk', ov_managed_t2:'Monitorização', ov_managed_t3:'Patches',
        ov_cyber_h: 'Cibersegurança',
        ov_cyber_p: 'Proteção em camadas para utilizadores, dispositivos e dados — de segurança de endpoints a filtragem de email e implementação de MFA.',
        ov_cyber_t1:'Endpoints', ov_cyber_t2:'Segurança Email', ov_cyber_t3:'MFA',
        ov_cloud_h: 'Cloud e Microsoft 365',
        ov_cloud_p: 'Administração Microsoft 365, migrações cloud, SharePoint, Teams e email — tudo gerido e suportado para a sua equipa.',
        ov_cloud_t1:'M365', ov_cloud_t2:'Teams', ov_cloud_t3:'Migrações',
        ov_backup_h: 'Backup e Recuperação',
        ov_backup_p: 'Backups automáticos, verificados e testados — para saber exatamente o que acontece se algo correr mal, com recuperação em horas e não em dias.',
        ov_backup_t1:'Backup Cloud', ov_backup_t2:'Backup NAS', ov_backup_t3:'Plano DR',
        ov_net_h: 'Gestão de Rede',
        ov_net_p: 'Infraestrutura fiável desde a firewall ao Wi-Fi — com monitorização contínua, gestão UniFi e visibilidade sobre a saúde da rede.',
        ov_net_t1:'UniFi', ov_net_t2:'Firewall', ov_net_t3:'VPN',
        ov_consult_h: 'Consultoria IT',
        ov_consult_p: 'Orientação estratégica para decisões tecnológicas — orçamentação, planeamento de infraestrutura, seleção de fornecedores e roadmaps de crescimento.',
        ov_consult_t1:'Roadmaps', ov_consult_t2:'Orçamentos', ov_consult_t3:'Estratégia',
        see_details: 'Ver detalhes completos',
        d_mit_label: 'Serviços IT Geridos',
        d_mit_h: 'A sua equipa de IT completa — sem os custos fixos.',
        d_mit_p: 'A BlueWave IT atua como o seu departamento de IT externalizado. Tratamos do dia-a-dia para que a sua equipa se foque no trabalho — e não nos problemas técnicos.',
        d_mit_f1_t: 'Monitorização e Alertas 24/7',
        d_mit_f1_b: 'Monitorização contínua de endpoints, servidores e serviços. Alertas automáticos quando algo precisa de atenção — muitas vezes antes de notar qualquer problema.',
        d_mit_f2_t: 'Suporte Helpdesk',
        d_mit_f2_b: 'Suporte rápido e eficaz para a sua equipa por ligação remota, email ou telefone. Os problemas são triados, acompanhados e resolvidos — com comunicação clara em todo o processo.',
        d_mit_f3_t: 'Gestão de Patches e Atualizações',
        d_mit_f3_b: 'Implementação programada de patches de SO e software em todos os dispositivos geridos. Testados antes da instalação para evitar interrupções, com relatórios de conformidade disponíveis.',
        d_mit_f4_t: 'Gestão de Endpoints',
        d_mit_f4_b: 'Gestão de ciclo de vida completa de workstations e portáteis — inventário de ativos, avaliação de saúde, acesso remoto e integração/saída de colaboradores.',
        d_mit_cta: 'Obter Suporte IT Gerido',
        d_mit_vis_h: 'Visão Geral da Saúde do Ambiente',
        d_mit_m1: 'Conformidade de patches', d_mit_m2: 'Dispositivos online', d_mit_m3: 'Tempo médio de resposta',
        d_mit_m4: 'Tickets abertos', d_mit_m5: 'Resolvidos este mês',
        d_mit_ok: '✓ Todos os sistemas operacionais', d_mit_ok2: 'Última verificação: há 2 minutos',
        d_sec_label: 'Cibersegurança',
        d_sec_h: 'Segurança que realmente se adapta a uma pequena empresa.',
        d_sec_p: 'Proteção de nível empresarial, calibrada para a realidade das PMEs — sem complexidade nem excesso. Gerimos a camada de segurança para que não precise de se preocupar com isso.',
        d_sec_f1_t: 'Deteção e Proteção de Endpoints',
        d_sec_f1_b: 'Antivírus de nova geração e EDR implementados em todos os dispositivos geridos. A deteção comportamental apanha ameaças que as ferramentas baseadas em assinaturas falham — incluindo ransomware.',
        d_sec_f2_t: 'Segurança de Email e Anti-Phishing',
        d_sec_f2_b: 'Filtragem de email que bloqueia phishing, anexos maliciosos e spoofing antes de chegarem à caixa de entrada — integrado com o fluxo de correio do Microsoft 365.',
        d_sec_f3_t: 'Autenticação Multi-Fator',
        d_sec_f3_b: 'Implementação e aplicação de MFA no Microsoft 365, VPN e aplicações empresariais. Reduz o risco de comprometimento de contas em mais de 99% nas contas abrangidas.',
        d_sec_f4_t: 'Firewall e Segurança de Rede',
        d_sec_f4_b: 'Gestão de regras de firewall, revisões periódicas de políticas, filtragem DNS e visibilidade do tráfego — mantendo as ameaças fora do perímetro antes de atingirem os dispositivos.',
        d_sec_cta: 'Melhorar a Postura de Segurança',
        d_sec_vis_h: 'Pontuação de Postura de Segurança',
        d_sec_grade: 'Classificação de Segurança',
        d_sec_m1: 'Proteção de endpoints', d_sec_m2: 'Filtragem de email',
        d_sec_m3: 'Cobertura MFA', d_sec_m4: 'Ameaças bloqueadas (30d)',
        d_sec_v1: 'Ativo', d_sec_v2: 'Ativo', d_sec_v3: '91%', d_sec_v4: '143',
        d_cld_label: 'Cloud e Microsoft 365',
        d_cld_h: 'Ferramentas cloud, bem configuradas e continuamente geridas.',
        d_cld_p: 'O Microsoft 365 é poderoso — mas mal configurado é um risco de segurança e um bloqueio à produtividade. Garantimos que está configurado corretamente, com licenciamento adequado e suporte para a sua equipa.',
        d_cld_f1_t: 'Administração Microsoft 365',
        d_cld_f1_b: 'Gestão de utilizadores, atribuição de licenças, configuração de caixas de correio e definições de segurança — tudo mantido como parte do serviço gerido. Integrações e saídas tratadas de forma limpa.',
        d_cld_f2_t: 'Suporte Teams e SharePoint',
        d_cld_f2_b: 'Configuração da estrutura do Teams, sites SharePoint, drives partilhadas e permissões de acesso que correspondem ao funcionamento real da sua empresa — não apenas predefinições.',
        d_cld_f3_t: 'Migrações Cloud',
        d_cld_f3_b: 'Migração de servidores de ficheiros locais, sistemas de email legados ou outros fornecedores cloud para o Microsoft 365 — com disrupção mínima e validação adequada dos dados.',
        d_cld_f4_t: 'Configuração de Segurança M365',
        d_cld_f4_b: 'Políticas de acesso condicional, configuração do Defender for Business, melhoria do Secure Score e monitorização contínua da postura de segurança no seu tenant.',
        d_cld_cta: 'Falar Sobre a Sua Configuração Cloud',
        d_cld_vis_h: 'Visão Geral do Tenant M365',
        d_cld_r1: 'Exchange Online', d_cld_r2: 'Microsoft Teams', d_cld_r3: 'SharePoint / OneDrive',
        d_cld_r4: 'Defender for Business', d_cld_r5: 'Secure Score', d_cld_r6: 'Utilizadores sem Licença',
        d_cld_s1: 'Saudável', d_cld_s2: 'Saudável', d_cld_s3: 'Saudável',
        d_cld_s4: 'Ativo', d_cld_s5: '78 / 100', d_cld_s6: '2 sinalizados',
        d_bak_label: 'Backup e Recuperação de Desastres',
        d_bak_h: 'Saiba exatamente o que acontece quando algo corre mal.',
        d_bak_p: 'A maioria das empresas assume que os backups funcionam. Nós verificamos. Sistemas de backup testados, documentados e monitorizados — para que a recuperação seja um processo controlado, não uma crise.',
        d_bak_f1_t: 'Backup Cloud',
        d_bak_f1_b: 'Backups automáticos offsite de dados críticos para armazenamento cloud encriptado. Políticas de retenção configuradas de acordo com os requisitos da sua empresa — pontos de restauro diários, semanais e mensais.',
        d_bak_f2_t: 'Backup NAS / Local',
        d_bak_f2_b: 'Backup NAS Synology local para restauros rápidos — reduzindo o tempo de recuperação de grandes volumes de dados. Configurado numa estratégia de backup 3-2-1 para máxima resiliência.',
        d_bak_f3_t: 'Backup Microsoft 365',
        d_bak_f3_b: 'A Microsoft não faz backup das caixas de correio M365 nem dos dados SharePoint por defeito. Implementamos backup de terceiros para garantir que os seus dados cloud têm proteção independente.',
        d_bak_f4_t: 'Testes de Restauro e Plano DR',
        d_bak_f4_b: 'Simulações regulares de restauro, procedimentos de recuperação documentados e objetivos RTO/RPO acordados para os sistemas críticos. Saberá exatamente quanto tempo demora a recuperação antes de precisar.',
        d_bak_cta: 'Rever a Estratégia de Backup',
        d_bak_vis_h: 'Estado dos Jobs de Backup',
        d_bak_ok: '✓ Completo', d_bak_ok2: '✓ Incremental', d_bak_ok3: '✓ Incremental', d_bak_warn: '⚠ Rever',
        d_bak_m1: 'Taxa de sucesso geral', d_bak_m2: 'Último teste de restauro', d_bak_m3: 'Dados protegidos',
        d_bak_v1: '99,8%', d_bak_v2: 'há 7 dias', d_bak_v3: '2,4 TB',
        d_net_label: 'Gestão de Rede',
        d_net_h: 'Uma rede que funciona silenciosamente em segundo plano — sempre.',
        d_net_p: 'A rede deficiente é a principal causa de perda de produtividade entre todos os problemas de IT. Construímos, monitorizamos e mantemos infraestrutura fiável para que a conectividade nunca seja o obstáculo.',
        d_net_f1_t: 'Gestão de Firewall',
        d_net_f1_b: 'Manutenção de regras, atualizações de firmware, revisões de políticas de tráfego e ajuste de deteção de intrusões — mantendo o perímetro protegido sem bloquear tráfego legítimo.',
        d_net_f2_t: 'Gestão Wi-Fi UniFi',
        d_net_f2_b: 'Gestão completa do controlador UniFi — segmentação de SSIDs, isolamento de rede de convidados, otimização de cobertura e monitorização de pontos de acesso. Wi-Fi empresarial real, não equipamento doméstico.',
        d_net_f3_t: 'VPN e Acesso Remoto',
        d_net_f3_b: 'VPN site-to-site e cliente para acesso remoto seguro. Implementado e gerido para escritórios domésticos, empresas multi-sede e colaboradores em viagem — com aplicação ao nível do dispositivo.',
        d_net_f4_t: 'Monitorização e Saúde da Rede',
        d_net_f4_b: 'Visibilidade contínua sobre portas de switch, pontos de acesso e uplinks. Análise de largura de banda, deteção de anomalias e alertas proativos antes de interrupções afetarem a sua equipa.',
        d_net_cta: 'Rever a Configuração de Rede',
        d_net_vis_h: 'Topologia de Rede',
        d_net_m1: 'Disponibilidade (30d)', d_net_m2: 'Dispositivos ativos',
        d_net_v1: '99,9%', d_net_v2: '22',
        d_con_label: 'Consultoria IT',
        d_con_h: 'Decisões tecnológicas que realmente se alinham com o seu negócio.',
        d_con_p: 'Sem favoritismo de fornecedores. Sem complexidade desnecessária. Apenas orientação honesta sobre o que a sua empresa precisa — com um roadmap para lá chegar ao ritmo do seu orçamento.',
        d_con_f1_t: 'Planeamento de Roadmap IT',
        d_con_f1_b: 'Um plano estruturado e priorizado para o seu IT nos próximos 12 a 36 meses — ciclos de renovação de hardware, upgrades de software, melhorias de segurança e alocação de orçamento.',
        d_con_f2_t: 'Orientação de Fornecedores e Compras',
        d_con_f2_b: 'Recomendações de hardware, software e ferramentas SaaS adequadas ao seu tamanho e setor — evitando dependência de fornecedores e ferramentas empresariais sobrevalorizadas que as PMEs não precisam.',
        d_con_f3_t: 'Desenho de Infraestrutura',
        d_con_f3_b: 'Desenho de infraestrutura escalável para mudanças de escritório, novas localizações ou crescimento empresarial — incluindo redes, ambientes de servidor e arquitetura cloud.',
        d_con_f4_t: 'Orientação RGPD e Conformidade',
        d_con_f4_b: 'Orientação prática de IT sobre obrigações RGPD para empresas do Algarve — tratamento de dados, controlos de acesso, políticas de retenção e requisitos de documentação.',
        d_con_cta: 'Iniciar uma Conversa de Consultoria',
        d_con_vis_h: 'Exemplo de Roadmap IT',
        d_con_vis_period: 'T1–T4 2026',
        d_con_rm1_h: 'Auditoria de Segurança Base', d_con_rm1_p: 'MFA, revisão de endpoints, avaliação de firewall — T1 2026',
        d_con_rm2_h: 'Reforço de Segurança M365', d_con_rm2_p: 'Acesso condicional, melhorias do Secure Score — T1 2026',
        d_con_rm3_h: 'Upgrade da Estratégia de Backup', d_con_rm3_p: 'Configuração 3-2-1 cloud + NAS, testes de restauro — T2 2026',
        d_con_rm4_h: 'Renovação de Hardware',         d_con_rm4_p: 'Revisão do ciclo de vida, 3 substituições planeadas — T3 2026',
        d_con_rm5_h: 'Upgrade de Rede',               d_con_rm5_p: 'Instalação UniFi, APs Wi-Fi 6, novo switch core — T4 2026',
        cmp_label: 'Comparação de Serviços',
        cmp_h: 'IT Reativo vs. IT Gerido',
        cmp_p: 'Veja como o modelo de serviço gerido da BlueWave IT se compara com a abordagem break-fix tradicional que a maioria das pequenas empresas ainda usa.',
        cmp_th1: 'O que obtém', cmp_th2: 'Break-Fix / Ad Hoc', cmp_th3: 'BlueWave IT Gerido',
        cmp_r1: 'Monitorização e alertas',      cmp_r1b: '—', cmp_r1m: '✓ 24/7 automatizado',
        cmp_r2: 'Gestão de patches',            cmp_r2b: 'Manual / inconsistente', cmp_r2m: '✓ Programado e testado',
        cmp_r3: 'Suporte helpdesk',             cmp_r3b: 'Pago por incidente', cmp_r3m: '✓ Incluído, resposta rápida',
        cmp_r4: 'Ferramentas de cibersegurança',cmp_r4b: '—', cmp_r4m: '✓ EDR, email, MFA',
        cmp_r5: 'Monitorização de backups',     cmp_r5b: '—', cmp_r5m: '✓ Verificação diária',
        cmp_r6: 'Administração M365',           cmp_r6b: 'Por hora, reativo', cmp_r6m: '✓ Gestão contínua',
        cmp_r7: 'Gestão de rede',               cmp_r7b: '—', cmp_r7m: '✓ Monitorizado e suportado',
        cmp_r8: 'Estratégia IT e roadmap',      cmp_r8b: '—', cmp_r8m: '✓ Revisão anual',
        cmp_r9: 'Custo mensal previsível',      cmp_r9b: '—', cmp_r9m: '✓ €60 por utilizador/mês',
        cmp_r10:'Orientação IT RGPD',           cmp_r10b:'—', cmp_r10m:'✓ Incluído',
        prc_label: 'Preços',
        prc_h: 'Um plano. Tudo incluído.',
        prc_p: 'Sem funcionalidades por níveis, sem custos surpresa. As seis áreas de serviço estão cobertas numa única tarifa mensal por utilizador.',
        prc_plan_lbl: 'Plano Gerido Standard',
        prc_val: '€60', prc_unit: 'por utilizador / mês',
        prc_desc: 'Tudo o que a sua empresa precisa para funcionar de forma fiável, manter-se segura e crescer com confiança.',
        prc_f1:'Helpdesk IT gerido e monitorização', prc_f2:'Proteção de endpoints e gestão de patches',
        prc_f3:'Cibersegurança — EDR, email, MFA',   prc_f4:'Administração Microsoft 365',
        prc_f5:'Monitorização e verificação de backups',prc_f6:'Saúde e suporte de rede',
        prc_f7:'Revisão anual de consultoria IT',    prc_f8:'Orientação IT RGPD',
        prc_cta: 'Começar — Marcar uma Consulta',
        prc_free_lbl:  'Grátis Antes de Comprometer',
        prc_free_val:  'Grátis', prc_free_unit: 'avaliação IT',
        prc_free_desc: 'Não sabe por onde começar? Revemos o seu ambiente atual, identificamos riscos e damos-lhe uma visão clara de onde se encontra — sem compromissos.',
        prc_ff1:'Revisão completa do ambiente', prc_ff2:'Identificação de lacunas de segurança',
        prc_ff3:'Avaliação do estado dos backups',prc_ff4:'Verificação da saúde da rede',
        prc_ff5:'Resumo escrito claro',          prc_ff6:'Recomendações prioritizadas',
        prc_free_cta: 'Pedir Avaliação Gratuita',
        cta_h: 'Pronto para parar de reagir e começar a gerir?',
        cta_p: 'Fale com a BlueWave IT sobre como os serviços geridos podem eliminar o stress de IT que custa tempo e dinheiro à sua empresa todas as semanas.',
        cta_btn1: 'Marcar uma Consulta Gratuita',
        cta_btn2: 'Pedir Avaliação IT',
        ft_tagline: 'Gestão IT de nível empresarial para empresas em crescimento no Algarve. Fiável, segura e com preço previsível.',
        ft_svc_h: 'Serviços', ft_co_h: 'Empresa',
        ft_s1:'IT Gerido', ft_s2:'Cibersegurança', ft_s3:'Cloud e M365',
        ft_s4:'Backup e Recuperação', ft_s5:'Gestão de Rede', ft_s6:'Consultoria IT',
        ft_c1:'Início', ft_c2:'Sobre', ft_c3:'Preços', ft_c4:'FAQ', ft_c5:'Contacto',
        ft_copy: '© 2026 BlueWave IT. Tecnologia fiável para empresas em crescimento.',
        ft_privacy: 'Política de Privacidade', ft_gdpr: 'RGPD',
        theme_dark: 'Escuro', theme_light: 'Claro',
      }
    };

    let currentLang = 'en';

    window.setLanguage = function setLanguage(lang) {
      currentLang = lang;
      document.documentElement.lang = lang;
      document.title = T[lang].page_title;

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.dataset.i18n;
        if (T[lang][k] !== undefined) el.textContent = T[lang][k];
      });

      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const k = el.dataset.i18nPh;
        if (T[lang][k] !== undefined) el.placeholder = T[lang][k];
      });

      document.querySelectorAll('[data-lang]').forEach(b =>
        b.classList.toggle('active', b.dataset.lang === lang)
      );
    }


    /* ── reveal ── */
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, {threshold: 0.10});
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    /* ── sub-feature accordions ── */
    document.querySelectorAll('.sub-feat-head').forEach(btn => {
      btn.addEventListener('click', () => {
        const feat = btn.parentElement;
        // Close siblings
        feat.parentElement.querySelectorAll('.sub-feat.open').forEach(f => {
          if (f !== feat) f.classList.remove('open');
        });
        feat.classList.toggle('open');
      });
    });

    /* ── sticky service nav active state on scroll ── */
    const sections  = ['managed-it','cybersecurity','cloud','backup','networking','consulting'];
    const navBtns   = document.querySelectorAll('.svc-nav-btn');
    const navOffset = document.getElementById('svcNav').offsetHeight + 72 + 20;

    function updateActiveNav() {
      let current = sections[0];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= navOffset + 40) current = id;
      });
      navBtns.forEach(b => b.classList.toggle('active', b.dataset.target === current));
    }
    window.addEventListener('scroll', updateActiveNav, {passive:true});

    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const el = document.getElementById(btn.dataset.target);
        if (el) { el.scrollIntoView({behavior:'smooth'}); }
      });
    });

    /* ── init ── */
    window.setLanguage(localStorage.getItem('bwit-lang') || 'en');
  /* init logo */
  (function(){
    var isL = document.body.classList.contains('theme-light');
    document.querySelectorAll('.logo-img').forEach(function(img){
      img.src = isL ? img.dataset.light : img.dataset.dark;
    });
  })();