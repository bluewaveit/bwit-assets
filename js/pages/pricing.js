/* BlueWave IT — pricing.js — loads after site.js */
/* ── TRANSLATIONS ── */
  const T = {
    en: {

      /* ── Web Presence Pricing ── */
      wp_section_label:'Web Presence Pricing',
      wp_h:'Fast, affordable web presence packages for businesses with little or no online visibility.',
      wp_subhead:'web presence packages',
      wp_intro_p:'This service is designed for speed, clarity, and results. The goal is not a large custom website project. The goal is to get a business online quickly with a polished presence, better credibility, and a clear path for customer inquiries.',
      wp_c1_name:'Starter Presence',
      wp_c1_desc:'Best for businesses with no website or a very weak online presence that need something clean, credible, and live quickly.',
      wp_c1_f1:'1–3 page polished website',
      wp_c1_f2:'Mobile-friendly design',
      wp_c1_f3:'Contact form and WhatsApp button',
      wp_c1_f4:'Google Business setup or cleanup',
      wp_c1_f5:'Hosting and basic updates',
      wp_c1_setup:'€300–€800 setup', wp_c1_mo:'€39–€79/mo', wp_c1_tag:'Fast Launch',
      wp_c1_cta:'See Starter Details',
      wp_c2_name:'Growth Presence',
      wp_c2_desc:'For businesses that want a stronger lead flow, clearer service pages, and a more active online presence without moving into a high-end custom build.',
      wp_c2_f1:'Everything in Starter Presence',
      wp_c2_f2:'Extra landing pages or service pages',
      wp_c2_f3:'Lead capture improvements',
      wp_c2_f4:'Review and trust-building elements',
      wp_c2_f5:'Monthly content and visibility improvements',
      wp_c2_setup:'€800–€1,500 setup', wp_c2_mo:'€99–€199/mo', wp_c2_tag:'Lead Focused',
      wp_c2_cta:'See Growth Details',
      wp_c3_name:'Presence + AI Boost',
      wp_c3_desc:'For organizations that want a stronger web presence plus practical AI-assisted enhancements for content, lead handling, and workflow support.',
      wp_c3_f1:'Everything in Growth Presence',
      wp_c3_f2:'AI-assisted content refinement',
      wp_c3_f3:'Smarter inquiry and form workflows',
      wp_c3_f4:'Basic automation guidance',
      wp_c3_f5:'Ongoing optimization support',
      wp_c3_setup:'€1,200–€2,000 setup', wp_c3_mo:'€149–€299/mo', wp_c3_tag:'AI Enhanced',
      wp_c3_cta:'See AI Boost Details',
      wp_note:'All packages are designed to get your business online quickly and professionally. Setup fees vary based on complexity and existing content. Monthly fees cover hosting, support, and ongoing improvements. <strong>Contact us to discuss which package fits your situation.</strong>',
      roi_gross_label:'Gross value delivered per year',
      roi_roi_pct:'ROI in year 1',
      roi_payback2:'Payback period (gross)',
      roi_3yr_label:'3-year net benefit projection',
      roi_yr1:'Year 1', roi_yr2:'Year 2', roi_yr3:'Year 3',
      nav_label:'Managed IT Services', nav_home:'Home', nav_services:'Services', nav_about:'About', nav_pricing:'Pricing', nav_contact:'Contact', cta_book:'Book a Consultation',
      theme_dark:'Dark', theme_light:'Light',
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
      calc_h:'Cost calculator', calc_p:'Adjust the sliders to model your environment. Pricing updates in real time.',
      calc_live:'Live estimate',
      sl_users_label:'Number of users', sl_users_desc:'Staff members who need IT support, email, and device management',
      sl_backup_plan_label:'Cloud backup plan', sl_backup_plan_desc:'Optional add-on — select the plan that fits your data volume',
      sl_bp_none:'None',
      sl_backup_label:'Estimated data volume (GB)', sl_backup_desc:'Business data across local storage and Microsoft 365',
      calc_monthly_label:'Estimated monthly investment', calc_year:'year',
      cb_users_label:'Managed users', cb_backup_plan_label:'Cloud backup plan',
      cb_backup_label:'Estimated data volume', cb_total_label:'Total monthly',
      calc_tip_head:'Why this model saves money',
      calc_tip_base:'Ad-hoc IT support in the Algarve costs €75–€120/hr with no proactive coverage. The managed model delivers monitoring, security, backups, and helpdesk for a flat monthly fee — predictable budgeting, no surprise invoices.',
      plan_label:'The Plan', plan_h:'One plan, fully loaded',
      plan_p:'All six service areas are active for every managed client from day one. There are no starter tiers or upgrade paths — just complete, proactive IT management.',
      plan_badge:'Standard Managed Plan', plan_name:'Complete Managed IT',
      plan_desc:"Everything your business needs to run reliably, stay secure, and scale with confidence — managed proactively by BlueWave IT.",
      plan_unit:'per user / month', plan_sub:'Billed monthly. Minimum 5 users. No lock-in contracts.',
      inc_1_name:'Managed IT & Helpdesk',  inc_1_sub:'24/7 monitoring, fast response',
      inc_2_name:'Cybersecurity',           inc_2_sub:'EDR, email filter, MFA',
      inc_3_name:'Cloud & Microsoft 365',   inc_3_sub:'Admin, Teams, SharePoint',
      inc_4_name:'Backup & Recovery',       inc_4_sub:'Daily verification, DR planning',
      inc_5_name:'Network Management',      inc_5_sub:'UniFi, firewall, VPN',
      inc_6_name:'IT Consulting',           inc_6_sub:'Roadmaps, GDPR, strategy',
      plan_cta:'Get Started — Book a Consultation',
      free_val:'Free', free_unit:'IT assessment',
      free_h:'Start with a free review',
      free_p:"Not ready to commit? We'll review your current IT environment, identify gaps, and give you a clear, written summary of risks and opportunities — at no cost and no obligation.",
      free_f1:'Full environment audit', free_f2:'Security gap identification',
      free_f3:'Backup status check', free_f4:'Written recommendations',
      free_cta:'Request Free Assessment',
      addon_h:'Need something specific?',
      addon_p:'For larger environments, multi-site deployments, or specialist project work — infrastructure design, server builds, office relocations — we scope bespoke engagements. Contact us to discuss.',
      addon_cta:'Discuss a Custom Scope',
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
      roi_label:'ROI Estimator', roi_h:'See what managed IT is worth to your business',
      roi_p:'Enter your current IT situation to calculate your total annual burden — and see exactly how a managed service stacks up. Licences are always client-paid; BlueWave IT eliminates the hidden costs around them.',
      roi_inputs_h:'Your current situation',
      roi_inputs_p:'Fill in what your business currently spends. Licences you already pay stay yours — BlueWave eliminates the labour, risk, and hidden overhead around them.',
      roi_sec_staff:'Staff & Downtime', roi_sec_software:'Software & Licences', roi_sec_adhoc:'Ad-Hoc Support & Security Risk', roi_sec_infra:'Infrastructure & Hardware',
      roi_licence_note:'Licence costs remain ', roi_licence_note_strong:'yours to pay',
      roi_lbl_users:'Number of users', roi_hint_users:'headcount on IT',
      roi_lbl_wage:'Avg hourly cost per employee', roi_hint_wage:'€/hr incl. oncosts',
      roi_lbl_hours:'Hours lost to IT issues / employee / month', roi_hint_hours:'avg SMB: 3–6 hrs',
      roi_lbl_outages:'Major IT outages per year',
      roi_lbl_outagecost:'Estimated cost per outage (€)', roi_hint_outagecost:'productivity + recovery',
      roi_lbl_m365:'Microsoft 365 licences / year (€)', roi_hint_m365:'current annual total',
      roi_lbl_av:'Antivirus / endpoint security / year (€)',
      roi_lbl_saas:'Other SaaS & software subscriptions / year (€)',
      roi_lbl_adhoc:'Ad-hoc IT callouts per year', roi_hint_adhoc:'€75–€120/hr typical Algarve',
      roi_prefix_visits:'visits',
      roi_lbl_adhocrate:'Average cost per callout (€)',
      roi_lbl_breach:'Security incident / breach cost past 3 yrs (€)', roi_hint_breach:'amortised annually',
      roi_lbl_hardware:'Hardware replacement & repairs / year (€)',
      roi_lbl_backup:'Backup storage & services / year (€)',
      roi_lbl_network:'Network & connectivity costs / year (€)',
      roi_results_h2:'Annual cost analysis',
      roi_saving_label:'Estimated net annual benefit',
      roi_saving_sub:'What switching to BlueWave IT puts back in your business each year',
      roi_meta_payback:'Payback period', roi_meta_peruser:'Cost per user / month',
      roi_bar_current:'Your current annual IT costs', roi_bar_msp:'BlueWave IT managed service',
      roi_bar_prod:'Productivity lost', roi_bar_outage:'Outage cost', roi_bar_sw:'Software licences', roi_bar_adhoc:'Ad-hoc + breaches', roi_bar_infra:'Infrastructure', roi_bar_msp_cost:'BlueWave IT cost',
      roi_bk_prod_name:'Productivity lost to IT friction', roi_bk_prod_note:'hrs × wage × users × 12 — 70% recoverable under managed model',
      roi_bk_outage_name:'Unplanned outage cost', roi_bk_outage_note:'outages × cost per event — 80% prevented proactively',
      roi_bk_sw_name:'Software & licences', roi_bk_sw_note:'M365 + AV + SaaS — client-paid, BlueWave managed',
      roi_bk_managed_tag:'Managed by us',
      roi_bk_adhoc_name:'Ad-hoc support & security incidents', roi_bk_adhoc_note:'callouts × rate + breach amortisation — 85% eliminated',
      roi_bk_infra_name:'Infrastructure & hardware', roi_bk_infra_note:'hardware + backup + network — better managed, ~10% optimised',
      roi_total_lbl:'Total current annual IT burden',
      roi_bk_msp_name:'BlueWave IT — annual investment', roi_bk_msp_note:'€60 × users × 12 months — all 6 service areas included',
      roi_disclaimer:'Indicative estimates based on typical Algarve SMB data. Productivity and outage savings modelled at 70% / 80% reduction. Licence costs remain client-paid and are excluded from savings calculation — BlueWave IT manages them as part of the service. Actual results will vary.',
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
      fq2_a:'Yes — the minimum is 5 users. This reflects the minimum environment size needed to deliver a properly managed service at the tooling and monitoring depth BlueWave IT operates at. Most clients start between 8 and 20 users.',
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
      ft_tagline:'Enterprise-grade IT management for growing businesses across the Algarve. Reliable, secure, and predictably priced.',
      ft_svc_h:'Services', ft_co_h:'Company',
      ft_s1:'Managed IT', ft_s2:'Cybersecurity', ft_s3:'Cloud & M365', ft_s4:'Backup & Recovery', ft_s5:'Network Management', ft_s6:'IT Consulting',
      ft_c1:'Home', ft_c2:'About', ft_c3:'Pricing', ft_c4:'FAQ', ft_c5:'Contact',
      ft_copy:'© 2026 BlueWave IT. Reliable technology for growing businesses.',
      footer_privacy:'Privacy Policy', footer_gdpr:'GDPR',footer_terms:'Terms and Conditions',
      /* backup pricing */
      bk_label:'Cloud Backup & Storage',
      bk_h:'Managed cloud backup pricing',
      bk_p:'Predictable, packaged backup plans with managed storage, daily monitoring, and tested restores. Add to any managed IT plan or run standalone.',
      bk_toggle_plans:'Storage Plans', bk_toggle_overage:'Overage & Restores',
      bk_month:'/month', bk_popular:'Most Popular', bk_plus_badge:'Full Coverage',
      bk_arc_badge:'Long-Term',
      bk_e_name:'Cloud Backup Essentials', bk_e_storage:'Up to 500 GB included',
      bk_e_note:'Ideal for small teams with moderate data needs',
      bk_e_f1:'Managed backup storage', bk_e_f2:'Daily backup checks',
      bk_e_f3:'Basic retention policy', bk_e_f4:'Restore support (business hours)',
      bk_s_name:'Cloud Backup Standard', bk_s_storage:'Up to 2 TB included',
      bk_s_note:'Best fit for most Algarve SMBs',
      bk_s_f1:'Managed backup storage', bk_s_f2:'Daily backup monitoring',
      bk_s_f3:'30–90 day retention', bk_s_f4:'Priority restore support',
      bk_s_f5:'Monthly backup health report',
      bk_p_name:'Cloud Backup Plus', bk_p_storage:'Up to 5 TB included',
      bk_p_note:'For data-heavy operations and full DR coverage',
      bk_p_f1:'Managed backup storage', bk_p_f2:'Monitoring and alerting',
      bk_p_f3:'Long-term retention options', bk_p_f4:'Priority restores',
      bk_p_f5:'Monthly backup health report', bk_p_f6:'Quarterly backup review',
      bk_a_name:'Archive Retention', bk_a_storage:'Up to 5 TB archived',
      bk_a_note:'Retrieval billed separately if needed',
      bk_a_f1:'Long-term archive storage', bk_a_f2:'Compliance-style retention',
      bk_a_f3:'Low-cost cold storage design', bk_a_f4:'Retrieval billed separately',
      bk_cta_start:'Get Started', bk_cta_recommended:'Get Standard Plan',
      sv_h:'Storage tier cost comparison — price per GB at included capacity',
      sv_hot:'Hot (active)', sv_overhot:'Hot overage', sv_cool:'Cool storage', sv_archive:'Archive',
      sv_standard_note:'Standard plan avg.', sv_overage_note:'Beyond plan limit',
      sv_cool_note:'Infrequent access', sv_archive_note:'Long-term cold',
      ov_h:'Overage & restore pricing',
      ov_p:'All plans include storage up to the stated limit. Usage above the included capacity is billed at the rates below, keeping plan fees predictable.',
      ov_hot_type:'Hot Storage', ov_cool_type:'Cool Storage', ov_archive_type:'Archive Storage',
      ov_per_gb:'per GB / month',
      ov_restore_std:'Standard restore request (fair use)', ov_restore_std_val:'✓ Included in all plans',
      ov_restore_large:'Large restore or urgent out-of-hours recovery', ov_restore_large_val:'Scoped & billed separately',
      ov_tip_h:'Best-practice structure for most clients',
      ov_tip_body:'The packaged plan fee covers the non-storage work: setup, monitoring, support, retention policy management, reporting, and restore handling. Raw storage overages are billed at cost. This keeps billing transparent and aligned with actual usage.',
      /* on-site backup */
      os_label:'On-Site Backup Solutions',
      os_h:'Local backup appliances — deployed and managed on your premises',
      os_p:'For organisations that prefer local backup infrastructure instead of cloud storage. We deploy and manage dedicated backup appliances installed at your office — providing high-speed local backups, rapid restore capability, and full data control within your premises.',
      os_tip:'Hybrid backup is our recommended default for most clients',
      os_recommended:'Recommended',
      os_includes_head:'Includes', os_suitable_head:'Suitable for', os_benefits_head:'Benefits',
      os_hw_label:'hardware', os_month_mgmt:'/month management',
      os_e_name:'Local Backup Appliance — Entry',
      os_e_hw_price:'From €499',
      os_e_f1:'On-site backup device', os_e_f2:'Automated backups',
      os_e_f3:'Monitoring and alerts', os_e_f4:'Restore assistance', os_e_f5:'Health checks',
      os_e_s1:'Small offices', os_e_s2:'Workstations', os_e_s3:'Small file servers',
      os_b_name:'Local Backup Appliance — Business',
      os_b_hw_price:'From €899',
      os_b_f1:'Larger storage capacity', os_b_f2:'Automated backups',
      os_b_f3:'Monitoring and alerts', os_b_f4:'Backup integrity verification',
      os_b_f5:'Priority restore support',
      os_b_s1:'Business servers', os_b_s2:'Shared storage', os_b_s3:'Multi-user environments',
      os_h_name:'Hybrid Backup',
      os_h_price:'From €79', os_h_unit:'/month',
      os_h_sub:'Local backup + secure off-site replication',
      os_h_f1:'Fast local restores',
      os_h_f2:'Protected against fire, theft, or ransomware',
      os_h_f3:'Off-site disaster recovery',
      os_h_f4:'Automated monitoring',
      os_h_f5:'Best of local and cloud in one plan',
      os_diag_devices:'Devices', os_diag_local:'Local NAS', os_diag_cloud:'Off-site',
      os_cta_enquire:'Enquire About This Plan',
      os_cta_hybrid:'Get Hybrid Backup',
      os_hw_note:'Hardware pricing is indicative and depends on storage capacity, RAID configuration, and final specification. All appliances are sourced, configured, and deployed by BlueWave IT. Monthly management fees cover monitoring, firmware updates, health checks, and restore support.',
    },
    pt: {

      /* ── Web Presence Pricing ── */
      wp_section_label:'Preços Web Presence',
      wp_h:'Pacotes web presence rápidos e acessíveis para empresas com pouca ou nenhuma visibilidade online.',
      wp_subhead:'pacotes web presence',
      wp_intro_p:'Este serviço é desenhado para velocidade, clareza e resultados. O objetivo não é um projeto de website personalizado. O objetivo é colocar uma empresa online rapidamente com uma presença cuidada, melhor credibilidade e um caminho claro para consultas de clientes.',
      wp_c1_name:'Presença Starter',
      wp_c1_desc:'Ideal para empresas sem website ou com uma presença online muito fraca que precisam de algo limpo, credível e rápido.',
      wp_c1_f1:'Website polido de 1 a 3 páginas',
      wp_c1_f2:'Design compatível com dispositivos móveis',
      wp_c1_f3:'Formulário de contacto e botão WhatsApp',
      wp_c1_f4:'Configuração ou limpeza do Google Business',
      wp_c1_f5:'Alojamento e atualizações básicas',
      wp_c1_setup:'€300–€800 setup', wp_c1_mo:'€39–€79/mês', wp_c1_tag:'Lançamento Rápido',
      wp_c1_cta:'Ver Detalhes Starter',
      wp_c2_name:'Presença Growth',
      wp_c2_desc:'Para empresas que querem mais fluxo de leads, páginas de serviço mais claras e uma presença online mais ativa sem avançar para um build personalizado.',
      wp_c2_f1:'Tudo na Presença Starter',
      wp_c2_f2:'Páginas de serviço ou landing pages extra',
      wp_c2_f3:'Melhorias na captura de leads',
      wp_c2_f4:'Elementos de avaliação e credibilidade',
      wp_c2_f5:'Melhorias mensais de conteúdo e visibilidade',
      wp_c2_setup:'€800–€1.500 setup', wp_c2_mo:'€99–€199/mês', wp_c2_tag:'Foco em Leads',
      wp_c2_cta:'Ver Detalhes Growth',
      wp_c3_name:'Presença + AI Boost',
      wp_c3_desc:'Para organizações que querem uma presença web mais forte e melhorias práticas com IA para conteúdo, gestão de leads e suporte a fluxos de trabalho.',
      wp_c3_f1:'Tudo na Presença Growth',
      wp_c3_f2:'Refinamento de conteúdo com IA',
      wp_c3_f3:'Fluxos de formulários e consultas mais inteligentes',
      wp_c3_f4:'Orientação básica de automação',
      wp_c3_f5:'Suporte de otimização contínua',
      wp_c3_setup:'€1.200–€2.000 setup', wp_c3_mo:'€149–€299/mês', wp_c3_tag:'IA Melhorado',
      wp_c3_cta:'Ver Detalhes AI Boost',
      wp_note:'Todos os pacotes são desenhados para colocar a sua empresa online rapidamente e profissionalmente. Os valores de setup variam conforme a complexidade e conteúdo existente. As mensalidades cobrem alojamento, suporte e melhorias contínuas. <strong>Contacte-nos para discutir qual pacote se adequa à sua situação.</strong>',
      roi_gross_label:'Valor bruto entregue por ano',
      roi_roi_pct:'ROI no ano 1',
      roi_payback2:'Período de retorno (bruto)',
      roi_3yr_label:'Projeção de benefício líquido a 3 anos',
      roi_yr1:'Ano 1', roi_yr2:'Ano 2', roi_yr3:'Ano 3',
      nav_label:'Serviços IT Geridos', nav_home:'Início', nav_services:'Serviços', nav_about:'Sobre', nav_pricing:'Preços', nav_contact:'Contacto', cta_book:'Marcar Consulta',
      theme_dark:'Escuro', theme_light:'Claro',
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
      calc_h:'Calculadora de custos', calc_p:'Ajuste os controlos para modelar o seu ambiente. O preço atualiza em tempo real.',
      calc_live:'Estimativa em direto',
      sl_users_label:'Número de utilizadores', sl_users_desc:'Colaboradores que precisam de suporte IT, email e gestão de dispositivos',
      sl_backup_plan_label:'Plano de backup cloud', sl_backup_plan_desc:'Extra opcional — selecione o plano adequado ao seu volume de dados',
      sl_bp_none:'Nenhum',
      sl_backup_label:'Volume de dados estimado (GB)', sl_backup_desc:'Dados empresariais em armazenamento local e Microsoft 365',
      calc_monthly_label:'Investimento mensal estimado', calc_year:'ano',
      cb_users_label:'Utilizadores geridos', cb_backup_plan_label:'Plano de backup cloud',
      cb_backup_label:'Volume de dados estimado', cb_total_label:'Total mensal',
      calc_tip_head:'Porque este modelo poupa dinheiro',
      calc_tip_base:'O suporte IT pontual no Algarve custa €75–€120/hora sem cobertura proativa. O modelo gerido oferece monitorização, segurança, backups e helpdesk por uma mensalidade fixa — orçamento previsível, sem faturas surpresa.',
      plan_label:'O Plano', plan_h:'Um plano, completo',
      plan_p:'As seis áreas de serviço estão ativas para todos os clientes geridos desde o primeiro dia. Não há níveis iniciais nem caminhos de upgrade — apenas gestão IT completa e proativa.',
      plan_badge:'Plano Gerido Standard', plan_name:'IT Gerido Completo',
      plan_desc:'Tudo o que a sua empresa precisa para funcionar de forma fiável, manter-se segura e crescer com confiança — gerido proativamente pela BlueWave IT.',
      plan_unit:'por utilizador / mês', plan_sub:'Faturação mensal. Mínimo 5 utilizadores. Sem contratos com penalizações.',
      inc_1_name:'IT Gerido e Helpdesk',    inc_1_sub:'Monitorização 24/7, resposta rápida',
      inc_2_name:'Cibersegurança',           inc_2_sub:'EDR, filtragem de email, MFA',
      inc_3_name:'Cloud e Microsoft 365',    inc_3_sub:'Admin, Teams, SharePoint',
      inc_4_name:'Backup e Recuperação',     inc_4_sub:'Verificação diária, plano DR',
      inc_5_name:'Gestão de Rede',           inc_5_sub:'UniFi, firewall, VPN',
      inc_6_name:'Consultoria IT',           inc_6_sub:'Roadmaps, RGPD, estratégia',
      plan_cta:'Começar — Marcar uma Consulta',
      free_val:'Grátis', free_unit:'avaliação IT',
      free_h:'Comece com uma avaliação gratuita',
      free_p:'Não está pronto para se comprometer? Revemos o seu ambiente IT atual, identificamos lacunas e fornecemos um resumo escrito claro de riscos e oportunidades — sem custos e sem obrigações.',
      free_f1:'Auditoria completa do ambiente', free_f2:'Identificação de lacunas de segurança',
      free_f3:'Verificação do estado dos backups', free_f4:'Recomendações escritas',
      free_cta:'Pedir Avaliação Gratuita',
      addon_h:'Precisa de algo específico?',
      addon_p:'Para ambientes maiores, implementações multi-sede ou trabalho de projeto especializado — design de infraestrutura, construção de servidores, mudanças de escritório — elaboramos propostas personalizadas. Contacte-nos.',
      addon_cta:'Discutir um Âmbito Personalizado',
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
      roi_label:'Estimador de ROI', roi_h:'Veja quanto vale o IT gerido para o seu negócio',
      roi_p:'Introduza a sua situação atual de IT para calcular o encargo anual total — e veja exatamente como um serviço gerido se compara. As licenças são sempre pagas pelo cliente; a BlueWave IT elimina os custos ocultos à sua volta.',
      roi_inputs_h:'A sua situação atual',
      roi_inputs_p:'Preencha o que a sua empresa gasta atualmente. As licenças que já paga continuam suas — a BlueWave elimina o trabalho, o risco e os encargos ocultos em torno delas.',
      roi_sec_staff:'Equipa e Tempo Perdido', roi_sec_software:'Software e Licenças', roi_sec_adhoc:'Suporte Pontual e Risco de Segurança', roi_sec_infra:'Infraestrutura e Hardware',
      roi_licence_note:'Os custos das licenças continuam ', roi_licence_note_strong:'a seu cargo',
      roi_lbl_users:'Número de utilizadores', roi_hint_users:'pessoas com acesso a IT',
      roi_lbl_wage:'Custo médio horário por colaborador', roi_hint_wage:'€/h incl. encargos',
      roi_lbl_hours:'Horas perdidas com IT / colaborador / mês', roi_hint_hours:'média PME: 3–6 h',
      roi_lbl_outages:'Grandes falhas de IT por ano',
      roi_lbl_outagecost:'Custo estimado por falha (€)', roi_hint_outagecost:'produtividade perdida + recuperação',
      roi_lbl_m365:'Licenças Microsoft 365 / ano (€)', roi_hint_m365:'total anual atual',
      roi_lbl_av:'Antivírus / segurança de endpoint / ano (€)',
      roi_lbl_saas:'Outras subscrições SaaS e software / ano (€)',
      roi_lbl_adhoc:'Chamadas IT pontuais por ano', roi_hint_adhoc:'€75–€120/h típico no Algarve',
      roi_prefix_visits:'chamadas',
      roi_lbl_adhocrate:'Custo médio por chamada (€)',
      roi_lbl_breach:'Custo de incidente de segurança nos últimos 3 anos (€)', roi_hint_breach:'amortizado anualmente',
      roi_lbl_hardware:'Substituição e reparação de hardware / ano (€)',
      roi_lbl_backup:'Armazenamento e serviços de backup / ano (€)',
      roi_lbl_network:'Custos de rede e conectividade / ano (€)',
      roi_results_h2:'Análise de custos anual',
      roi_saving_label:'Benefício líquido anual estimado',
      roi_saving_sub:'O que a mudança para a BlueWave IT devolve ao seu negócio por ano',
      roi_meta_payback:'Período de retorno', roi_meta_peruser:'Custo por utilizador / mês',
      roi_bar_current:'Os seus custos anuais de IT atuais', roi_bar_msp:'Serviço gerido BlueWave IT',
      roi_bar_prod:'Produtividade perdida', roi_bar_outage:'Custo de falhas', roi_bar_sw:'Licenças de software', roi_bar_adhoc:'Ad-hoc + incidentes', roi_bar_infra:'Infraestrutura', roi_bar_msp_cost:'Custo BlueWave IT',
      roi_bk_prod_name:'Produtividade perdida com problemas de IT', roi_bk_prod_note:'h × custo × utilizadores × 12 — 70% recuperável com modelo gerido',
      roi_bk_outage_name:'Custo de falhas não planeadas', roi_bk_outage_note:'falhas × custo por evento — 80% prevenidas proativamente',
      roi_bk_sw_name:'Software e licenças', roi_bk_sw_note:'M365 + AV + SaaS — pagas pelo cliente, geridas pela BlueWave',
      roi_bk_managed_tag:'Gerido por nós',
      roi_bk_adhoc_name:'Suporte pontual e incidentes de segurança', roi_bk_adhoc_note:'chamadas × custo + amortização de incidentes — 85% eliminadas',
      roi_bk_infra_name:'Infraestrutura e hardware', roi_bk_infra_note:'hardware + backup + rede — melhor gestão, ~10% otimizado',
      roi_total_lbl:'Encargo total anual de IT atual',
      roi_bk_msp_name:'BlueWave IT — investimento anual', roi_bk_msp_note:'€60 × utilizadores × 12 meses — todas as 6 áreas de serviço incluídas',
      roi_disclaimer:'Estimativas indicativas baseadas em dados típicos de PMEs do Algarve. Poupanças em produtividade e falhas modeladas a 70% / 80% de redução. Os custos de licenças continuam a ser pagos pelo cliente e excluídos do cálculo de poupança — a BlueWave IT gere-os como parte do serviço. Os resultados reais podem variar.',
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
      fq2_a:'Sim — o mínimo é 5 utilizadores. Reflete o tamanho mínimo de ambiente necessário para prestar um serviço gerido adequadamente com a profundidade de ferramentas e monitorização com que a BlueWave IT opera. A maioria dos clientes começa entre 8 e 20 utilizadores.',
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
      ft_tagline:'Gestão IT de nível empresarial para empresas em crescimento no Algarve. Fiável, segura e com preço previsível.',
      ft_svc_h:'Serviços', ft_co_h:'Empresa',
      ft_s1:'IT Gerido', ft_s2:'Cibersegurança', ft_s3:'Cloud e M365', ft_s4:'Backup e Recuperação', ft_s5:'Gestão de Rede', ft_s6:'Consultoria IT',
      ft_c1:'Início', ft_c2:'Sobre', ft_c3:'Preços', ft_c4:'FAQ', ft_c5:'Contacto',
      ft_copy:'© 2026 BlueWave IT. Tecnologia fiável para empresas em crescimento.',
      footer_privacy:'Política de Privacidade', footer_gdpr:'RGPD', footer_terms:'Termos e Condições', 
      /* backup pricing */
      bk_label:'Backup e Armazenamento Cloud',
      bk_h:'Preços de backup cloud gerido',
      bk_p:'Planos de backup previsíveis e estruturados com armazenamento gerido, monitorização diária e restauros testados. Adicione a qualquer plano IT gerido ou utilize de forma independente.',
      bk_toggle_plans:'Planos de Armazenamento', bk_toggle_overage:'Excedentes e Restauros',
      bk_month:'/mês', bk_popular:'Mais Popular', bk_plus_badge:'Cobertura Total',
      bk_arc_badge:'Longo Prazo',
      bk_e_name:'Cloud Backup Essentials', bk_e_storage:'Até 500 GB incluído',
      bk_e_note:'Ideal para equipas pequenas com necessidades moderadas de dados',
      bk_e_f1:'Armazenamento de backup gerido', bk_e_f2:'Verificações diárias de backup',
      bk_e_f3:'Política de retenção básica', bk_e_f4:'Suporte de restauro (horário comercial)',
      bk_s_name:'Cloud Backup Standard', bk_s_storage:'Até 2 TB incluído',
      bk_s_note:'Melhor opção para a maioria das PMEs do Algarve',
      bk_s_f1:'Armazenamento de backup gerido', bk_s_f2:'Monitorização diária de backups',
      bk_s_f3:'Retenção de 30 a 90 dias', bk_s_f4:'Suporte prioritário de restauro',
      bk_s_f5:'Relatório mensal de saúde dos backups',
      bk_p_name:'Cloud Backup Plus', bk_p_storage:'Até 5 TB incluído',
      bk_p_note:'Para operações com muitos dados e cobertura DR completa',
      bk_p_f1:'Armazenamento de backup gerido', bk_p_f2:'Monitorização e alertas',
      bk_p_f3:'Opções de retenção a longo prazo', bk_p_f4:'Restauros prioritários',
      bk_p_f5:'Relatório mensal de saúde dos backups', bk_p_f6:'Revisão trimestral de backups',
      bk_a_name:'Retenção de Arquivo', bk_a_storage:'Até 5 TB arquivado',
      bk_a_note:'Recuperação faturada separadamente se necessário',
      bk_a_f1:'Armazenamento de arquivo a longo prazo', bk_a_f2:'Retenção para conformidade',
      bk_a_f3:'Design de armazenamento frio de baixo custo', bk_a_f4:'Recuperação faturada separadamente',
      bk_cta_start:'Começar', bk_cta_recommended:'Obter Plano Standard',
      sv_h:'Comparação de custos por camada — preço por GB na capacidade incluída',
      sv_hot:'Quente (ativo)', sv_overhot:'Excedente quente', sv_cool:'Armazenamento cool', sv_archive:'Arquivo',
      sv_standard_note:'Média plano Standard', sv_overage_note:'Acima do limite do plano',
      sv_cool_note:'Acesso pouco frequente', sv_archive_note:'Frio a longo prazo',
      ov_h:'Preços de excedente e restauro',
      ov_p:'Todos os planos incluem armazenamento até ao limite indicado. O uso acima da capacidade incluída é faturado às tarifas abaixo, mantendo as mensalidades previsíveis.',
      ov_hot_type:'Armazenamento Quente', ov_cool_type:'Armazenamento Cool', ov_archive_type:'Armazenamento Arquivo',
      ov_per_gb:'por GB / mês',
      ov_restore_std:'Pedido de restauro standard (uso justo)', ov_restore_std_val:'✓ Incluído em todos os planos',
      ov_restore_large:'Restauro grande ou recuperação urgente fora do horário', ov_restore_large_val:'Definido e faturado separadamente',
      ov_tip_h:'Estrutura de boas práticas para a maioria dos clientes',
      ov_tip_body:'A mensalidade do plano cobre o trabalho não relacionado com armazenamento: configuração, monitorização, suporte, gestão de políticas de retenção, relatórios e gestão de restauros. Os excedentes de armazenamento são faturados ao custo. Mantém a faturação transparente e alinhada com o uso real.',
      /* on-site backup */
      os_label:'Soluções de Backup Local',
      os_h:'Appliances de backup local — implementados e geridos nas suas instalações',
      os_p:'Para organizações que preferem infraestrutura de backup local em vez de armazenamento cloud. Implementamos e gerimos appliances de backup dedicados instalados no seu escritório — proporcionando backups locais de alta velocidade, capacidade de restauro rápido e controlo total dos dados nas suas instalações.',
      os_tip:'O backup híbrido é a nossa recomendação padrão para a maioria dos clientes',
      os_recommended:'Recomendado',
      os_includes_head:'Inclui', os_suitable_head:'Adequado para', os_benefits_head:'Benefícios',
      os_hw_label:'hardware', os_month_mgmt:'/mês gestão',
      os_e_name:'Appliance de Backup Local — Entry',
      os_e_hw_price:'A partir de €499',
      os_e_f1:'Dispositivo de backup local', os_e_f2:'Backups automáticos',
      os_e_f3:'Monitorização e alertas', os_e_f4:'Assistência de restauro', os_e_f5:'Verificações de saúde',
      os_e_s1:'Escritórios pequenos', os_e_s2:'Workstations', os_e_s3:'Pequenos servidores de ficheiros',
      os_b_name:'Appliance de Backup Local — Business',
      os_b_hw_price:'A partir de €899',
      os_b_f1:'Maior capacidade de armazenamento', os_b_f2:'Backups automáticos',
      os_b_f3:'Monitorização e alertas', os_b_f4:'Verificação de integridade dos backups',
      os_b_f5:'Suporte prioritário de restauro',
      os_b_s1:'Servidores empresariais', os_b_s2:'Armazenamento partilhado', os_b_s3:'Ambientes multi-utilizador',
      os_h_name:'Backup Híbrido',
      os_h_price:'A partir de €79', os_h_unit:'/mês',
      os_h_sub:'Backup local + replicação off-site segura',
      os_h_f1:'Restauros locais rápidos',
      os_h_f2:'Proteção contra incêndio, roubo ou ransomware',
      os_h_f3:'Recuperação de desastres off-site',
      os_h_f4:'Monitorização automática',
      os_h_f5:'O melhor do local e cloud num único plano',
      os_diag_devices:'Dispositivos', os_diag_local:'NAS Local', os_diag_cloud:'Off-site',
      os_cta_enquire:'Pedir Informação Sobre Este Plano',
      os_cta_hybrid:'Obter Backup Híbrido',
      os_hw_note:'O preço do hardware é indicativo e depende da capacidade de armazenamento, configuração RAID e especificação final. Todos os appliances são fornecidos, configurados e implementados pela BlueWave IT. As mensalidades de gestão cobrem monitorização, atualizações de firmware, verificações de saúde e suporte de restauro.',
    }
  };

  let lang = 'en';

  function setLanguage(l) {
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (T[l][k] !== undefined) el.textContent = T[l][k];
    });
    // Translate input/textarea placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const k = el.dataset.i18nPlaceholder;
      if (T[l][k] !== undefined) el.placeholder = T[l][k];
    });
    document.querySelectorAll('[data-lang]').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === l)
    );
    updateCalc();
    updateROI();
  }
  document.querySelectorAll('[data-lang]').forEach(b =>
    b.addEventListener('click', () => setLanguage(b.dataset.lang))
  );

  /* ── theme ── */
  document.querySelectorAll('[data-theme]').forEach(b => {
    b.addEventListener('click', () => {
      const isLight = b.dataset.theme === 'light';
      document.body.classList.toggle('theme-light', isLight);
      document.querySelectorAll('.logo-img').forEach(img => {
        img.src = isLight ? img.dataset.light : img.dataset.dark;
      });
      document.querySelectorAll('[data-theme]').forEach(x =>
        x.classList.toggle('active', x.dataset.theme === b.dataset.theme)
      );
    });
  });

  /* ── mobile nav ── */
  const navToggle  = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('open');
    navToggle.textContent = mobileMenu?.classList.contains('open') ? '✕' : '☰';
  });
  document.querySelectorAll('.mobile-menu a').forEach(l =>
    l.addEventListener('click', () => {
      mobileMenu?.classList.remove('open');
      if (navToggle) navToggle.textContent = '☰';
    })
  );

  /* ── header scroll ── */
  const header  = document.getElementById('siteHeader');
  const backTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (header)  header.classList.toggle('scrolled', window.scrollY > 16);
    if (backTop) backTop.classList.toggle('show', window.scrollY > 500);
  });
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── reveal ── */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
  }, { threshold: 0.10 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* ── CALCULATOR ── */
  const usersRange      = document.getElementById('usersRange');
  const backupPlanRange = document.getElementById('backupPlanRange');
  const backupRange     = document.getElementById('backupRange');

  // Backup plan data — index maps to slider position 0–4
  const backupPlans = [
    { nameEn: 'None',                  namePt: 'Nenhum',                   price: 0   },
    { nameEn: 'Essentials — 500 GB',   namePt: 'Essentials — 500 GB',      price: 39  },
    { nameEn: 'Standard — 2 TB',       namePt: 'Standard — 2 TB',          price: 119 },
    { nameEn: 'Plus — 5 TB',           namePt: 'Plus — 5 TB',              price: 249 },
    { nameEn: 'Archive Retention',     namePt: 'Retenção de Arquivo',       price: 79  },
  ];

  function fmt(n) { return n.toLocaleString(lang === 'pt' ? 'pt-PT' : 'en-GB'); }

  function updateCalc() {
    const users      = parseInt(usersRange.value);
    const planIdx    = parseInt(backupPlanRange.value);
    const backup     = parseInt(backupRange.value);
    const plan       = backupPlans[planIdx];
    const mspCost    = users * 60;
    const totalMonthly = mspCost + plan.price;
    const annual     = totalMonthly * 12;

    // Slider display values
    document.getElementById('usersVal').textContent  = users;
    document.getElementById('backupVal').textContent = fmt(backup) + ' GB';

    // Backup plan label on slider
    const planLabel = lang === 'pt' ? plan.namePt : plan.nameEn;
    document.getElementById('backupPlanVal').textContent = plan.price > 0
      ? planLabel + ' — €' + plan.price
      : (lang === 'pt' ? 'Sem backup cloud' : 'No cloud backup');

    // Main output totals
    document.getElementById('calcTotal').textContent  = '€' + fmt(totalMonthly);
    document.getElementById('calcAnnual').textContent = '€' + fmt(annual) + ' / ' + (T[lang].calc_year || 'year');

    // Breakdown rows
    document.getElementById('cbUsers').textContent   = users + ' ' + (lang === 'pt' ? 'utilizadores' : 'users') + ' × €60';
    document.getElementById('cbBackup').textContent  = fmt(backup) + ' GB';
    document.getElementById('cbTotal').textContent   = '€' + fmt(totalMonthly);

    // Backup plan row — show/hide based on selection
    const backupRow = document.getElementById('cbBackupRow');
    if (plan.price > 0) {
      backupRow.style.display = 'flex';
      document.getElementById('cbBackupPlan').textContent = planLabel + ' — €' + plan.price + (lang === 'pt' ? '/mês' : '/mo');
    } else {
      backupRow.style.display = 'none';
    }

    // Contextual savings tip — updated with current Portugal market data
    const tipEl = document.getElementById('calcTip');
    const inHouseLow  = 28000;   // junior IT technician, Portugal, 2024
    const inHouseHigh = 45000;   // mid-level IT administrator
    const toolsEst    = 4000;    // RMM + AV + backup tooling per year

    if (users >= 25) {
      tipEl.textContent = lang === 'pt'
        ? `Para ${users} utilizadores, o investimento anual é €${fmt(annual)}. Um técnico IT sénior em Portugal custa €${fmt(inHouseLow)}–€${fmt(inHouseHigh)}/ano em salário bruto, sem contar com ferramentas (~€${fmt(toolsEst)}/ano), formação ou cobertura de férias. A poupança típica com o modelo gerido é de €${fmt(Math.round(((inHouseLow + inHouseHigh) / 2 + toolsEst) - annual))} /ano.`
        : `For ${users} users, annual investment is €${fmt(annual)}. A senior IT technician in Portugal costs €${fmt(inHouseLow)}–€${fmt(inHouseHigh)}/yr gross — before tools (~€${fmt(toolsEst)}/yr), training, or holiday cover. Typical savings with the managed model: ~€${fmt(Math.round(((inHouseLow + inHouseHigh) / 2 + toolsEst) - annual))}/yr.`;
    } else if (users >= 10) {
      tipEl.textContent = lang === 'pt'
        ? `Para ${users} utilizadores, o investimento anual é €${fmt(annual)}. Um técnico IT júnior a tempo inteiro em Portugal custa €${fmt(inHouseLow)}–€${fmt(32000)}/ano — sem ferramentas de monitorização (RMM, AV, backup), que acrescentam tipicamente €${fmt(toolsEst)}/ano.`
        : `For ${users} users, annual investment is €${fmt(annual)}. A full-time junior IT hire in Portugal costs €${fmt(inHouseLow)}–€${fmt(32000)}/yr — without monitoring tools (RMM, AV, backup), which typically add another €${fmt(toolsEst)}/yr.`;
    } else if (users >= 5) {
      tipEl.textContent = lang === 'pt'
        ? `Para ${users} utilizadores, o investimento mensal é €${fmt(totalMonthly)}. Para equipas desta dimensão, contratar IT interno não é viável — e as chamadas pontuais de um técnico externo custam tipicamente €75–€120/hora sem qualquer cobertura proativa.`
        : `For ${users} users, monthly investment is €${fmt(totalMonthly)}. At this team size, in-house IT isn't viable — and ad-hoc callout support in the Algarve typically costs €75–€120/hr with no proactive coverage.`;
    } else {
      tipEl.textContent = T[lang].calc_tip_base;
    }
  }

  [usersRange, backupPlanRange, backupRange].forEach(r =>
    r?.addEventListener('input', updateCalc)
  );

  /* ── ROI ESTIMATOR ── */
  function updateROI() {
    // ── Read inputs ──
    const users      = parseFloat(document.getElementById('roiUsers2').value)        || 10;
    const wage       = parseFloat(document.getElementById('roiWage').value)           || 18;
    const hours      = parseFloat(document.getElementById('roiHours').value)          || 6;
    const outages    = parseFloat(document.getElementById('roiOutage').value)         || 3;
    const osCost     = parseFloat(document.getElementById('roiOutageCost').value)     || 2000;
    const m365       = parseFloat(document.getElementById('roiM365').value)           || 0;
    const antivirus  = parseFloat(document.getElementById('roiAntivirus').value)      || 0;
    const otherSw    = parseFloat(document.getElementById('roiOtherSoftware').value)  || 0;
    const adHocCalls = parseFloat(document.getElementById('roiAdHocCalls').value)     || 0;
    const adHocRate  = parseFloat(document.getElementById('roiAdHocRate').value)      || 150;
    const breach     = parseFloat(document.getElementById('roiSecurityBreach').value) || 0;
    const hardware   = parseFloat(document.getElementById('roiHardware').value)       || 0;
    const backup     = parseFloat(document.getElementById('roiBackupCost').value)     || 0;
    const network    = parseFloat(document.getElementById('roiNetworkCost').value)    || 0;

    // ── Update slider display labels ──
    document.getElementById('roiUsers2Val').textContent = users;
    document.getElementById('roiWageVal').textContent   = '€' + wage;
    document.getElementById('roiHoursVal').textContent  = hours + ' hrs';
    document.getElementById('roiOutageVal').textContent = outages;

    // ── Cost buckets ──
    const prodLost    = hours * wage * users * 12;
    const outageTot   = outages * osCost;
    const softwareTot = m365 + antivirus + otherSw;
    const adHocTot    = (adHocCalls * adHocRate) + breach;
    const infraTot    = hardware + backup + network;
    const burdenTot   = prodLost + outageTot + softwareTot + adHocTot + infraTot;
    const mspCost     = users * 60 * 12;

    // ── Value model ──
    // grossValue = what BlueWave IT actually prevents/recovers each year
    // Licences stay client-paid; BlueWave saves only the admin overhead (~25%)
    const grossValue = Math.round(
      (prodLost    * 0.70) +   // 70% of productivity losses recovered via proactive IT
      (outageTot   * 0.80) +   // 80% of outages prevented via monitoring & patching
      (softwareTot * 0.25) +   // admin overhead saved; licence cost stays with client
      (adHocTot    * 0.85) +   // ad-hoc callouts nearly eliminated under managed model
      (infraTot    * 0.10)     // better management extends hardware & infrastructure life
    );

    // Net benefit = gross value delivered minus MSP cost
    const saving = grossValue - mspCost;

    // ── ROI % ──
    const roiPct = (mspCost > 0 && saving > 0) ? Math.round(saving / mspCost * 100) : 0;

    // ── Payback: months until MSP pays for itself in gross value delivered ──
    const paybackMonths = (mspCost > 0 && grossValue > 0) ? (mspCost / (grossValue / 12)) : null;
    const paybackStr = paybackMonths === null ? 'N/A'
      : paybackMonths < 1   ? '< 1 month'
      : paybackMonths < 1.5 ? '~1 month'
      : `~${paybackMonths.toFixed(1)} months`;

    // ── 3-year projection (value compounds as environment matures) ──
    const yr2 = Math.round(saving * 1.15);
    const yr3 = Math.round(saving * 1.32);

    // ── Per-user monthly ──
    const perUser = users > 0 ? (mspCost / users / 12).toFixed(2) : '60.00';

    // ── Bar chart max ──
    const maxBar = Math.max(prodLost, outageTot, softwareTot, adHocTot, infraTot, mspCost, 1);
    function barPct(v) { return Math.round(Math.max(v / maxBar * 100, v > 0 ? 3 : 0)) + '%'; }

    // ── DOM updates ──
    // Hero strip
    document.getElementById('rhsSMB').textContent    = '€' + fmt(Math.round(burdenTot));
    document.getElementById('rhsMSP').textContent    = '€' + fmt(Math.round(mspCost));
    const savEl = document.getElementById('rhsSaving');
    savEl.textContent = (saving > 0 ? '+' : '') + '€' + fmt(saving);

    // Breakdown rows
    document.getElementById('roiLost').textContent        = '€' + fmt(Math.round(prodLost));
    document.getElementById('roiOutageTot').textContent   = '€' + fmt(Math.round(outageTot));
    document.getElementById('roiSoftwareTot').textContent = '€' + fmt(Math.round(softwareTot));
    document.getElementById('roiAdHocTot').textContent    = '€' + fmt(Math.round(adHocTot));
    document.getElementById('roiInfraTot').textContent    = '€' + fmt(Math.round(infraTot));
    document.getElementById('roiBurdenTot').textContent   = '€' + fmt(Math.round(burdenTot));
    document.getElementById('roiMspCost').textContent     = '€' + fmt(Math.round(mspCost));

    // ── Gross value + ROI % + 3-year projection (new elements) ──
    const grossEl = document.getElementById('roiGrossValue');
    if (grossEl) grossEl.textContent = '€' + fmt(grossValue);
    const roiPctEl = document.getElementById('roiPctVal');
    if (roiPctEl) roiPctEl.textContent = roiPct + '%';
    const paybackEl2 = document.getElementById('roiPaybackVal2');
    if (paybackEl2) paybackEl2.textContent = paybackStr;
    const yr1El = document.getElementById('roiYr1');
    if (yr1El) yr1El.textContent = (saving > 0 ? '+' : '') + '€' + fmt(saving);
    const yr2El = document.getElementById('roiYr2');
    if (yr2El) yr2El.textContent = (yr2 > 0 ? '+' : '') + '€' + fmt(yr2);
    const yr3El = document.getElementById('roiYr3');
    if (yr3El) yr3El.textContent = (yr3 > 0 ? '+' : '') + '€' + fmt(yr3);

    // Big saving number + colour
    const savingEl = document.getElementById('roiSaving');
    savingEl.textContent  = (saving > 0 ? '+' : '') + '€' + fmt(saving);
    savingEl.style.color  = saving > 0 ? 'var(--green)' : 'var(--danger)';

    // Meta strip
    document.getElementById('roiPayback').textContent  = paybackStr;
    document.getElementById('roiPerUser').textContent  = '€' + perUser;

    // Bar chart fills
    document.getElementById('barProd').style.width    = barPct(prodLost);
    document.getElementById('barOutage').style.width  = barPct(outageTot);
    document.getElementById('barSw').style.width      = barPct(softwareTot);
    document.getElementById('barAdHoc').style.width   = barPct(adHocTot);
    document.getElementById('barInfra').style.width   = barPct(infraTot);
    document.getElementById('barMsp').style.width     = barPct(mspCost);

    // Bar chart value labels
    document.getElementById('barProdVal').textContent   = '€' + fmt(Math.round(prodLost));
    document.getElementById('barOutageVal').textContent = '€' + fmt(Math.round(outageTot));
    document.getElementById('barSwVal').textContent     = '€' + fmt(Math.round(softwareTot));
    document.getElementById('barAdHocVal').textContent  = '€' + fmt(Math.round(adHocTot));
    document.getElementById('barInfraVal').textContent  = '€' + fmt(Math.round(infraTot));
    document.getElementById('barMspVal').textContent    = '€' + fmt(Math.round(mspCost));
  }

  ['roiUsers2','roiWage','roiHours','roiOutage','roiOutageCost',
   'roiM365','roiAntivirus','roiOtherSoftware',
   'roiAdHocCalls','roiAdHocRate','roiSecurityBreach',
   'roiHardware','roiBackupCost','roiNetworkCost'
  ].forEach(id => document.getElementById(id)?.addEventListener('input', updateROI));

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

  /* ── BACKUP VIEW TOGGLE ── */
  document.querySelectorAll('.storage-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.storage-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      document.getElementById('bkPlansView').style.display   = view === 'plans'   ? 'block' : 'none';
      document.getElementById('bkOverageView').style.display = view === 'overage' ? 'block' : 'none';
    });
  });

  /* ── init ── */
  setLanguage('en');
  
  /* ── initialise both calculators so values display correctly on first load */
  updateCalc();
  updateROI();

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
      submitBtn.textContent = T[lang] && T[lang].cm_submit ? T[lang].cm_submit : 'Send Enquiry';
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
