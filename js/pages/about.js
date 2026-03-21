/* BlueWave IT — about.js — loads after site.js */
const T = {
    en: {
      nav_label:'Managed IT Services', nav_home:'Home', nav_services:'Services', nav_about:'About', nav_pricing:'Pricing', nav_contact:'Contact', cta_book:'Book a Consultation',
      theme_dark:'Dark', theme_light:'Light',
      bc_home:'Home', bc_current:'About',
      hero_label:'Who We Are',
      hero_h1_a:'Built for the', hero_h1_b:'businesses that', hero_h1_c:'keep the Algarve moving.',
      hero_p:'BlueWave IT is a Portimão-based managed service provider delivering enterprise-grade IT support, cybersecurity, and cloud management to small and midsize businesses across the Algarve region.',
      hero_cta_1:'Work With Us', hero_cta_2:'View Services',
      id_hq_label:'Headquarters',   id_hq_value:'Portimão, Algarve, Portugal',
      id_addr_label:'Address',      id_addr_value:'Av. 25 de Abril 6, 8500-511 Portimão',
      id_type_label:'Business Type',id_type_value:'Managed Service Provider (MSP)',
      id_focus_label:'Focus',       id_focus_value:'SMBs — 5 to 50 employees',
      id_comp_label:'Compliance',   id_comp_value:'GDPR-aligned, EU data practices',
      stat_1_lbl:'Businesses supported across the Algarve',
      stat_2_lbl:'Average backup integrity across all clients',
      stat_3_lbl:'Average helpdesk response time',
      stat_4_lbl:'Core service areas delivered per client',
      mission_label:'Mission & Values',
      mission_h:'Technology should work. Quietly. Reliably. Every single day.',
      mission_p1:'Too many small businesses in the Algarve are running on reactive IT — calling for help when things break, crossing fingers during backups, and wondering if they\'re actually protected. BlueWave IT was built to change that.',
      mission_p2:'We believe every business — regardless of size — deserves the kind of IT infrastructure that enterprises take for granted: monitored, secured, backed up, and actively managed by people who actually understand it.',
      val_1_t:'Proactive over reactive',    val_1_b:'We don\'t wait for things to break. We monitor, patch, verify, and alert — so problems are caught before they become incidents and incidents don\'t become disasters.',
      val_2_t:'Clarity without jargon',     val_2_b:'IT support shouldn\'t require a degree to understand. We communicate clearly, explain our reasoning, and make sure clients always know what we\'re doing and why.',
      val_3_t:'Security as a foundation',   val_3_b:'Security isn\'t an add-on. Every service we deliver — from patch management to cloud configuration — is built with security thinking from the ground up, not bolted on afterwards.',
      val_4_t:'Right-sized for your business', val_4_b:'We don\'t oversell. We match the solution to the need — recommending only what actually serves the business, and growing the relationship as the business grows.',
      rings_h:'Core pillars of our service model',
      rings_center_val:'MSP', rings_center_lbl:'Managed Services',
      pillar_1:'Security', pillar_2:'Cloud', pillar_3:'Network', pillar_4:'Backup', pillar_5:'Support', pillar_6:'Consulting',
      tl_label:'Our Story', tl_h:'How BlueWave IT came to be', tl_p:'Built from years of hands-on experience with the real IT challenges that Algarve SMBs face every day.',
      tl_1_year:'Foundation',   tl_1_h:'Born from firsthand frustration',        tl_1_p:'BlueWave IT was founded after seeing too many Algarve businesses lose time and money to preventable IT problems — slow responses, unverified backups, and security gaps that no one was watching.',
      tl_2_year:'First clients', tl_2_h:'Starting with local businesses',        tl_2_p:'The first managed service contracts came from real estate agencies and professional services firms in Portimão and Lagos — businesses with no internal IT and real stakes in keeping systems running.',
      tl_3_year:'Security focus',tl_3_h:'Cybersecurity becomes core',            tl_3_p:'As ransomware attacks on small businesses accelerated across Europe, BlueWave IT built a full cybersecurity layer into every managed service engagement — EDR, email security, MFA, and firewall management.',
      tl_4_year:'Cloud expansion',tl_4_h:'Microsoft 365 & cloud services',       tl_4_p:'Growing adoption of cloud tools in the Algarve business community led to a full M365 administration practice — migrations, SharePoint, Teams, and Defender — alongside backup and recovery services.',
      tl_5_year:'Today',         tl_5_h:'One team. Six services. One region.',   tl_5_p:'BlueWave IT operates from Portimão as the Algarve\'s dedicated MSP — delivering comprehensive, proactive IT across managed services, cybersecurity, cloud, networking, backup, and consulting.',
      alg_label:'Our Region',
      alg_h:'Rooted in the Algarve. Built for Algarve businesses.',
      alg_p1:'We\'re not a remote helpdesk or a multinational franchise. BlueWave IT is based in Portimão — we know the region, the business community, the seasonality challenges, and the specific IT pressures that come with running a company here.',
      alg_p2:'From tourism operations that need rock-solid connectivity in high season, to law and accounting firms that need GDPR-compliant data handling, to construction companies managing remote sites — we understand the context that generic IT providers miss.',
      chip_portimao:'Portimão', chip_lagos:'Lagos', chip_faro:'Faro', chip_albufeira:'Albufeira', chip_silves:'Silves', chip_tavira:'Tavira', chip_vilareal:'Vila Real de Santo António',
      map_h:'BlueWave IT — Portimão Office', map_live:'Open',
      map_addr_label:'Address',       map_addr_value:'Av. 25 de Abril 6, 8500-511 Portimão',
      map_region_label:'Service Region', map_region_value:'Algarve, Portugal',
      map_hours_label:'Business Hours',  map_hours_value:'Mon–Fri, 9:00–18:00 WET',
      map_cta:'Open in Google Maps →',
      approach_label:'How We Work', approach_h:'The BlueWave IT way', approach_p:'A few non-negotiable principles that shape every client relationship and every service we deliver.',
      ap_1_h:'Always-on visibility',     ap_1_p:'We monitor your environment continuously — not just when something breaks. You always have a clear picture of the health of your systems, and so do we.',
      ap_2_h:'A real person answers',    ap_2_p:'No ticket black holes. No endless call trees. When something needs attention, a qualified engineer responds — not a bot, not a first-tier script reader.',
      ap_3_h:'Predictable costs, no surprises', ap_3_p:'The €60/user/month model exists because your IT budget shouldn\'t be a mystery. One invoice, all six service areas, nothing hidden.',
      ap_4_h:'Security-first, always',   ap_4_p:'Security is a design principle, not an upsell. Every environment we manage is hardened, every user we onboard gets MFA, every backup is encrypted and tested.',
      ap_5_h:'Clear documentation',      ap_5_p:'We document what we build. Network diagrams, runbooks, recovery procedures — you own the knowledge about your own infrastructure, not just us.',
      ap_6_h:'Built to scale with you',  ap_6_p:'Whether you grow from 10 to 30 users or open a second office in Faro, the managed service model scales with you — no renegotiation, no re-scoping.',
      stack_label:'Technology Stack', stack_h:'The tools we use to manage your environment', stack_p:'Industry-standard platforms chosen for reliability, security, and the ability to deliver enterprise-grade management at SMB scale.',
      stab_all:'All', stab_platform:'Platforms', stab_security:'Security', stab_network:'Networking', stab_backup:'Backup', stab_cloud:'Cloud',
      s_platform:'Platform', s_security:'Security', s_network:'Networking', s_backup:'Backup', s_cloud:'Cloud',
      comp_label:'Standards & Compliance', comp_h:'Operating to EU standards in every engagement', comp_p:'Every client environment we manage is handled with EU data protection practices and industry-standard security frameworks.',
      cb_1_name:'GDPR Aligned',      cb_1_desc:'EU data handling practices',
      cb_2_name:'Zero Trust Approach',cb_2_desc:'Verify every user, every access',
      cb_3_name:'Verified Backups',   cb_3_desc:'Tested restore procedures',
      cb_4_name:'MFA Enforced',       cb_4_desc:'All managed accounts',
      cb_5_name:'Email Security',     cb_5_desc:'Anti-phishing & filtering',
      pillar_sec_desc:'Every environment we manage is hardened from day one. Security is a design principle built into every layer — not an afterthought or an upsell.',
      pillar_sec_1:'Endpoint Detection & Response (EDR)',pillar_sec_2:'Multi-Factor Authentication on all accounts',pillar_sec_3:'Email security & anti-phishing filters',pillar_sec_4:'Firewall configuration & continuous monitoring',
      pillar_cloud_desc:'We manage your Microsoft 365 environment end-to-end — from identity and access to productivity tools and cloud security posture.',
      pillar_cloud_1:'Microsoft 365 administration & licensing',pillar_cloud_2:'Azure AD / Entra ID identity management',pillar_cloud_3:'SharePoint, Teams & OneDrive configuration',pillar_cloud_4:'Cloud migrations & tenant onboarding',
      pillar_net_desc:'Reliable, fast, and secure networks are the foundation of everything else. We design, deploy, and manage infrastructure built for how your team actually works.',
      pillar_net_1:'UniFi switching & Wi-Fi 6 deployment',pillar_net_2:'Firewall configuration & segmentation',pillar_net_3:'VPN & secure remote access',pillar_net_4:'Ongoing network monitoring & alerting',
      pillar_bk_desc:'Backups mean nothing if they don\'t restore. We verify every backup, test restores regularly, and maintain the 3-2-1 standard across all client environments.',
      pillar_bk_1:'NAS-based local backup with versioning',pillar_bk_2:'Offsite & cloud backup replication',pillar_bk_3:'Microsoft 365 mailbox & SharePoint backup',pillar_bk_4:'Tested restore procedures & monthly reports',
      pillar_sup_desc:'A qualified engineer answers — not a bot. We provide fast, human helpdesk support during business hours with clear escalation for anything critical.',
      pillar_sup_1:'Helpdesk via phone, email & ticket portal',pillar_sup_2:'Remote troubleshooting & resolution',pillar_sup_3:'On-site support across the Algarve region',pillar_sup_4:'Patch management & proactive device health',
      pillar_con_desc:'Beyond day-to-day management, we act as your strategic IT partner — aligning technology decisions with business goals and long-term growth.',
      pillar_con_1:'IT roadmap & budget planning',pillar_con_2:'Infrastructure design & architecture review',pillar_con_3:'Vendor selection & procurement guidance',pillar_con_4:'GDPR compliance & risk assessments',
      recruit_label:'Careers / Carreiras',
      recruit_h:'Looking to meet local tech talent in the Algarve.',
      recruit_p:'BlueWave IT is growing and we want to connect with practical, reliable tech people in the Algarve. We know strong technical talent is limited locally, so at this stage we are less focused on perfect CVs and more focused on meeting people with a solid foundation, good attitude, and the ability to grow into the role.',
      recruit_en:'We are open to meeting IT support, systems, networking, Microsoft 365, and cybersecurity candidates. A valid driver\'s licence is required, since some client visits and on-site work across the Algarve will be part of the role.',
      recruit_pt:'Estamos à procura de pessoas na área de suporte informático, sistemas, redes, Microsoft 365 e cibersegurança. Carta de condução válida é obrigatória, porque parte do trabalho inclui deslocações e apoio no local em clientes no Algarve.',
      recruit_v1_t:'What we value',     recruit_v1_p:'Reliability, communication, professionalism, and a real interest in solving client problems.',
      recruit_v2_t:'Good starting point',recruit_v2_p:'Experience in helpdesk, Microsoft 365, Windows, networking, field support, or general SMB IT.',
      recruit_v3_t:'Local fit matters', recruit_v3_p:'Algarve-based or nearby candidates are preferred, especially those comfortable with both remote and on-site work.',
      recruit_note:'Even if you do not meet every requirement, we would still like to hear from you if you have a technical background, a valid driver\'s licence, and the right mindset to support businesses professionally.',
      recruit_btn:'Get in Touch / Entrar em Contacto',
      cert_label:'Certified Professionals', cert_h:'Every technician. Fully certified.',
      cert_p:'All BlueWave IT technicians hold industry-recognised certifications across Microsoft technologies, hardware support, networking, and cybersecurity — so you always have a qualified expert on your side.',
      cert_ms_name:'Microsoft Certified',   cert_ms_desc:'Validated expertise across Microsoft 365, Azure Active Directory, Entra ID, and the broader Microsoft cloud ecosystem.',
      cert_aplus_name:'CompTIA A+',         cert_aplus_desc:'The global benchmark for IT support professionals — hardware troubleshooting, operating systems, device configuration, and end-user support.',
      cert_netplus_name:'CompTIA Network+', cert_netplus_desc:'Proven knowledge of network infrastructure, TCP/IP, routing, switching, VPN, and wireless — the foundation of every network we deploy.',
      cert_secplus_name:'CompTIA Security+',cert_secplus_desc:'DoD-approved and globally recognised — covering threat management, cryptography, identity, access control, and risk management.',
      cert_footer:'<strong>Every technician on your account</strong> holds all four certifications — not just senior staff. You get the same standard of expertise on every call, every visit, every ticket.',
      cert_footer_strong:'Every technician on your account', cert_footer_rest:'holds all four certifications — not just senior staff. You get the same standard of expertise on every call, every visit, every ticket.',
      cta_h:'Ready to meet your new IT partner?', cta_p:'Book a free consultation with BlueWave IT and let\'s talk about where your business is today, and where your IT should take it next.',
      cta_btn1:'Book a Free Consultation', cta_btn2:'Explore Our Services',
      ft_tagline:'Enterprise-grade IT management for growing businesses across the Algarve. Reliable, secure, and predictably priced.',
      ft_svc_h:'Services', ft_co_h:'Company',
      ft_s1:'Managed IT', ft_s2:'Cybersecurity', ft_s3:'Cloud & M365', ft_s4:'Backup & Recovery', ft_s5:'Network Management', ft_s6:'IT Consulting',
      ft_c1:'Home', ft_c2:'About', ft_c3:'Pricing', ft_c4:'FAQ', ft_c5:'Contact',
      ft_copy:'© 2026 BlueWave IT. Reliable technology for growing businesses.',
      ft_privacy:'Privacy Policy', ft_gdpr:'GDPR', ft_terms:'Terms and Conditions',
    },
    pt: {
      nav_label:'Serviços IT Geridos', nav_home:'Início', nav_services:'Serviços', nav_about:'Sobre', nav_pricing:'Preços', nav_contact:'Contacto', cta_book:'Marcar Consulta',
      theme_dark:'Escuro', theme_light:'Claro',
      bc_home:'Início', bc_current:'Sobre',
      hero_label:'Quem Somos',
      hero_h1_a:'Construída para as', hero_h1_b:'empresas que fazem', hero_h1_c:'o Algarve funcionar.',
      hero_p:'A BlueWave IT é um fornecedor de serviços geridos sediado em Portimão, que oferece suporte IT, cibersegurança e gestão cloud de nível empresarial a pequenas e médias empresas em toda a região do Algarve.',
      hero_cta_1:'Trabalhe Connosco', hero_cta_2:'Ver Serviços',
      id_hq_label:'Sede',            id_hq_value:'Portimão, Algarve, Portugal',
      id_addr_label:'Morada',        id_addr_value:'Av. 25 de Abril 6, 8500-511 Portimão',
      id_type_label:'Tipo de Empresa',id_type_value:'Fornecedor de Serviços Geridos (MSP)',
      id_focus_label:'Foco',         id_focus_value:'PMEs — 5 a 50 colaboradores',
      id_comp_label:'Conformidade',  id_comp_value:'Alinhado com RGPD, práticas de dados EU',
      stat_1_lbl:'Empresas apoiadas em todo o Algarve',
      stat_2_lbl:'Taxa média de integridade de backups em todos os clientes',
      stat_3_lbl:'Tempo médio de resposta do helpdesk',
      stat_4_lbl:'Áreas de serviço principais entregues por cliente',
      mission_label:'Missão e Valores',
      mission_h:'A tecnologia deve funcionar. Silenciosamente. De forma fiável. Todos os dias.',
      mission_p1:'Demasiadas pequenas empresas no Algarve operam com um IT reativo — pedindo ajuda quando as coisas falham, cruzando os dedos durante os backups e sem saber se estão realmente protegidas. A BlueWave IT foi criada para mudar isso.',
      mission_p2:'Acreditamos que cada empresa — independentemente do tamanho — merece o tipo de infraestrutura IT que as grandes empresas consideram garantido: monitorizada, segura, com backups e gerida ativamente por pessoas que realmente a entendem.',
      val_1_t:'Proativo em vez de reativo',  val_1_b:'Não esperamos que as coisas falhem. Monitorizamos, aplicamos patches, verificamos e alertamos — para que os problemas sejam detetados antes de se tornarem incidentes e os incidentes não se tornem desastres.',
      val_2_t:'Clareza sem jargão',          val_2_b:'O suporte IT não deve exigir um curso para ser compreendido. Comunicamos de forma clara, explicamos o nosso raciocínio e garantimos que os clientes sabem sempre o que estamos a fazer e porquê.',
      val_3_t:'Segurança como fundação',     val_3_b:'A segurança não é um extra. Cada serviço que prestamos — da gestão de patches à configuração cloud — é construído com pensamento de segurança desde a base, não acrescentado depois.',
      val_4_t:'Adequado ao seu negócio',     val_4_b:'Não vendemos em excesso. Ajustamos a solução à necessidade — recomendando apenas o que serve o negócio, e fazendo crescer a relação à medida que o negócio cresce.',
      rings_h:'Pilares centrais do nosso modelo de serviço',
      rings_center_val:'MSP', rings_center_lbl:'Serviços Geridos',
      pillar_1:'Segurança', pillar_2:'Cloud', pillar_3:'Rede', pillar_4:'Backup', pillar_5:'Suporte', pillar_6:'Consultoria',
      tl_label:'A Nossa História', tl_h:'Como surgiu a BlueWave IT', tl_p:'Construída com anos de experiência prática nos desafios reais de IT que as PMEs do Algarve enfrentam todos os dias.',
      tl_1_year:'Fundação',       tl_1_h:'Nascida da frustração em primeira mão',    tl_1_p:'A BlueWave IT foi fundada depois de assistir a demasiadas empresas do Algarve perderem tempo e dinheiro com problemas IT evitáveis — respostas lentas, backups não verificados e falhas de segurança que ninguém estava a vigiar.',
      tl_2_year:'Primeiros clientes',tl_2_h:'A começar com empresas locais',        tl_2_p:'Os primeiros contratos de serviço gerido vieram de agências imobiliárias e empresas de serviços profissionais em Portimão e Lagos — empresas sem IT interno e com muito a perder se os sistemas falhassem.',
      tl_3_year:'Foco na segurança',tl_3_h:'A cibersegurança torna-se central',     tl_3_p:'Com a aceleração dos ataques de ransomware a pequenas empresas em toda a Europa, a BlueWave IT integrou uma camada completa de cibersegurança em todos os contratos — EDR, segurança de email, MFA e gestão de firewall.',
      tl_4_year:'Expansão cloud',   tl_4_h:'Microsoft 365 e serviços cloud',        tl_4_p:'A crescente adoção de ferramentas cloud na comunidade empresarial do Algarve levou a uma prática completa de administração M365 — migrações, SharePoint, Teams e Defender — a par de serviços de backup e recuperação.',
      tl_5_year:'Hoje',             tl_5_h:'Uma equipa. Seis serviços. Uma região.', tl_5_p:'A BlueWave IT opera a partir de Portimão como o MSP dedicado do Algarve — prestando IT proativo e abrangente em serviços geridos, cibersegurança, cloud, redes, backup e consultoria.',
      alg_label:'A Nossa Região',
      alg_h:'Enraizados no Algarve. Construídos para as empresas do Algarve.',
      alg_p1:'Não somos um helpdesk remoto nem uma franquia multinacional. A BlueWave IT está sediada em Portimão — conhecemos a região, a comunidade empresarial, os desafios da sazonalidade e as pressões específicas de IT que vêm com gerir uma empresa aqui.',
      alg_p2:'De operações turísticas que precisam de conectividade sólida na época alta, a escritórios de advogados e contabilistas que precisam de tratamento de dados conforme o RGPD, a empresas de construção a gerir estaleiros remotos — compreendemos o contexto que os fornecedores genéricos não entendem.',
      chip_portimao:'Portimão', chip_lagos:'Lagos', chip_faro:'Faro', chip_albufeira:'Albufeira', chip_silves:'Silves', chip_tavira:'Tavira', chip_vilareal:'Vila Real de Santo António',
      map_h:'BlueWave IT — Escritório de Portimão', map_live:'Aberto',
      map_addr_label:'Morada',        map_addr_value:'Av. 25 de Abril 6, 8500-511 Portimão',
      map_region_label:'Região de Serviço', map_region_value:'Algarve, Portugal',
      map_hours_label:'Horário',      map_hours_value:'Seg–Sex, 9:00–18:00 WET',
      map_cta:'Abrir no Google Maps →',
      approach_label:'Como Trabalhamos', approach_h:'A forma BlueWave IT', approach_p:'Alguns princípios inegociáveis que moldam cada relação com o cliente e cada serviço que prestamos.',
      ap_1_h:'Visibilidade permanente',       ap_1_p:'Monitorizamos o seu ambiente continuamente — não apenas quando algo falha. Tem sempre uma imagem clara da saúde dos seus sistemas, e nós também.',
      ap_2_h:'Uma pessoa real responde',      ap_2_p:'Sem tickets sem resposta. Sem árvores de chamada intermináveis. Quando algo precisa de atenção, um engenheiro qualificado responde — não um bot, não um leitor de scripts de primeiro nível.',
      ap_3_h:'Custos previsíveis, sem surpresas', ap_3_p:'O modelo €60/utilizador/mês existe porque o seu orçamento de IT não deve ser um mistério. Uma fatura, seis áreas de serviço, nada escondido.',
      ap_4_h:'Segurança primeiro, sempre',    ap_4_p:'A segurança é um princípio de design, não um extra. Cada ambiente que gerimos é reforçado, cada utilizador que integramos tem MFA, cada backup é encriptado e testado.',
      ap_5_h:'Documentação clara',            ap_5_p:'Documentamos o que construímos. Diagramas de rede, runbooks, procedimentos de recuperação — é o proprietário do conhecimento sobre a sua infraestrutura, não apenas nós.',
      ap_6_h:'Construído para crescer consigo',ap_6_p:'Quer cresça de 10 para 30 utilizadores ou abra um segundo escritório em Faro, o modelo de serviço gerido escala consigo — sem renegociação, sem redefinição de âmbito.',
      stack_label:'Tecnologias', stack_h:'As ferramentas que usamos para gerir o seu ambiente', stack_p:'Plataformas standard do sector escolhidas pela fiabilidade, segurança e capacidade de fornecer gestão de nível empresarial à escala das PMEs.',
      stab_all:'Todas', stab_platform:'Plataformas', stab_security:'Segurança', stab_network:'Redes', stab_backup:'Backup', stab_cloud:'Cloud',
      s_platform:'Plataforma', s_security:'Segurança', s_network:'Redes', s_backup:'Backup', s_cloud:'Cloud',
      comp_label:'Normas e Conformidade', comp_h:'A operar segundo normas europeias em cada projeto', comp_p:'Cada ambiente cliente que gerimos é tratado com práticas de proteção de dados da UE e frameworks de segurança standard do sector.',
      cb_1_name:'Alinhado com RGPD',       cb_1_desc:'Práticas de dados da UE',
      cb_2_name:'Abordagem Zero Trust',    cb_2_desc:'Verificar cada utilizador, cada acesso',
      cb_3_name:'Backups Verificados',     cb_3_desc:'Procedimentos de restauro testados',
      cb_4_name:'MFA Aplicado',            cb_4_desc:'Todas as contas geridas',
      cb_5_name:'Segurança de Email',      cb_5_desc:'Anti-phishing e filtragem',
      pillar_sec_desc:'Cada ambiente que gerimos é reforçado desde o primeiro dia. A segurança é um princípio de design integrado em cada camada — não um extra ou acrescento posterior.',
      pillar_sec_1:'Deteção e Resposta a Endpoints (EDR)',pillar_sec_2:'Autenticação Multi-Fator em todas as contas',pillar_sec_3:'Segurança de email e filtros anti-phishing',pillar_sec_4:'Configuração de firewall e monitorização contínua',
      pillar_cloud_desc:'Gerimos o seu ambiente Microsoft 365 de ponta a ponta — desde identidade e acesso até ferramentas de produtividade e postura de segurança cloud.',
      pillar_cloud_1:'Administração e licenciamento Microsoft 365',pillar_cloud_2:'Gestão de identidade Azure AD / Entra ID',pillar_cloud_3:'Configuração de SharePoint, Teams e OneDrive',pillar_cloud_4:'Migrações cloud e integração de tenants',
      pillar_net_desc:'Redes fiáveis, rápidas e seguras são a base de tudo o resto. Desenhamos, implementamos e gerimos infraestrutura construída para a forma como a sua equipa realmente trabalha.',
      pillar_net_1:'Switching UniFi e implementação Wi-Fi 6',pillar_net_2:'Configuração de firewall e segmentação',pillar_net_3:'VPN e acesso remoto seguro',pillar_net_4:'Monitorização de rede e alertas contínuos',
      pillar_bk_desc:'Backups sem restauro não têm valor. Verificamos cada backup, testamos restauros regularmente e mantemos o padrão 3-2-1 em todos os ambientes clientes.',
      pillar_bk_1:'Backup local NAS com versionamento',pillar_bk_2:'Replicação de backup externo e cloud',pillar_bk_3:'Backup de caixa de correio M365 e SharePoint',pillar_bk_4:'Procedimentos de restauro testados e relatórios mensais',
      pillar_sup_desc:'Um engenheiro qualificado responde — não um bot. Fornecemos suporte helpdesk humano e rápido em horário comercial, com escalamento claro para qualquer situação crítica.',
      pillar_sup_1:'Helpdesk por telefone, email e portal de tickets',pillar_sup_2:'Resolução e troubleshooting remoto',pillar_sup_3:'Suporte no local em toda a região do Algarve',pillar_sup_4:'Gestão de patches e saúde proativa dos dispositivos',
      pillar_con_desc:'Para além da gestão diária, atuamos como parceiro IT estratégico — alinhando decisões tecnológicas com objetivos de negócio e crescimento a longo prazo.',
      pillar_con_1:'Roadmap IT e planeamento orçamental',pillar_con_2:'Design de infraestrutura e revisão de arquitetura',pillar_con_3:'Seleção de fornecedores e orientação de aquisição',pillar_con_4:'Conformidade RGPD e avaliações de risco',
      recruit_label:'Carreiras / Careers',
      recruit_h:'À procura de talento tecnológico local no Algarve.',
      recruit_p:'A BlueWave IT está a crescer e queremos conhecer pessoas práticas e fiáveis na área de IT no Algarve. Sabemos que o talento técnico local é limitado, por isso nesta fase estamos menos focados em CVs perfeitos e mais em conhecer pessoas com uma base sólida, boa atitude e capacidade de crescer para a função.',
      recruit_en:'We are open to meeting IT support, systems, networking, Microsoft 365, and cybersecurity candidates. A valid driver\'s licence is required, since some client visits and on-site work across the Algarve will be part of the role.',
      recruit_pt:'Estamos à procura de pessoas na área de suporte informático, sistemas, redes, Microsoft 365 e cibersegurança. Carta de condução válida é obrigatória, porque parte do trabalho inclui deslocações e apoio no local em clientes no Algarve.',
      recruit_v1_t:'O que valorizamos',   recruit_v1_p:'Fiabilidade, comunicação, profissionalismo e interesse genuíno em resolver os problemas dos clientes.',
      recruit_v2_t:'Bom ponto de partida',recruit_v2_p:'Experiência em helpdesk, Microsoft 365, Windows, redes, suporte de campo ou IT geral para PMEs.',
      recruit_v3_t:'Proximidade local importa',recruit_v3_p:'Preferimos candidatos baseados no Algarve ou proximidades, especialmente confortáveis com trabalho remoto e presencial.',
      recruit_note:'Mesmo que não cumpra todos os requisitos, gostaríamos de conhecê-lo se tiver formação técnica, carta de condução válida e a mentalidade certa para apoiar empresas profissionalmente.',
      recruit_btn:'Entrar em Contacto / Get in Touch',
      cert_label:'Profissionais Certificados', cert_h:'Cada técnico. Totalmente certificado.',
      cert_p:'Todos os técnicos da BlueWave IT possuem certificações reconhecidas internacionalmente em tecnologias Microsoft, suporte técnico, redes e cibersegurança — para que tenha sempre um especialista qualificado do seu lado.',
      cert_ms_name:'Microsoft Certified',    cert_ms_desc:'Competências validadas em Microsoft 365, Azure Active Directory, Entra ID e todo o ecossistema cloud Microsoft.',
      cert_aplus_name:'CompTIA A+',          cert_aplus_desc:'O referencial global para profissionais de suporte IT — resolução de problemas de hardware, sistemas operativos, configuração de dispositivos e suporte ao utilizador.',
      cert_netplus_name:'CompTIA Network+',  cert_netplus_desc:'Conhecimento comprovado de infraestrutura de rede, TCP/IP, roteamento, switching, VPN e wireless — a base de todas as redes que implementamos.',
      cert_secplus_name:'CompTIA Security+', cert_secplus_desc:'Aprovado pelo DoD e reconhecido globalmente — abrange gestão de ameaças, criptografia, identidade, controlo de acesso e gestão de risco.',
      cert_footer:'<strong>Todos os técnicos da sua conta</strong> possuem as quatro certificações — não apenas os seniores. Obtém o mesmo nível de especialização em cada chamada, cada visita, cada ticket.',
      cert_footer_strong:'Todos os técnicos da sua conta', cert_footer_rest:'possuem as quatro certificações — não apenas os seniores. Obtém o mesmo nível de especialização em cada chamada, cada visita, cada ticket.',
      cta_h:'Pronto para conhecer o seu novo parceiro IT?', cta_p:'Marque uma consulta gratuita com a BlueWave IT e falemos sobre onde está o seu negócio hoje e para onde o seu IT o deve levar a seguir.',
      cta_btn1:'Marcar uma Consulta Gratuita', cta_btn2:'Explorar os Nossos Serviços',
      ft_tagline:'Gestão IT de nível empresarial para empresas em crescimento no Algarve. Fiável, segura e com preço previsível.',
      ft_svc_h:'Serviços', ft_co_h:'Empresa',
      ft_s1:'IT Gerido', ft_s2:'Cibersegurança', ft_s3:'Cloud e M365', ft_s4:'Backup e Recuperação', ft_s5:'Gestão de Rede', ft_s6:'Consultoria IT',
      ft_c1:'Início', ft_c2:'Sobre', ft_c3:'Preços', ft_c4:'FAQ', ft_c5:'Contacto',
      ft_copy:'© 2026 BlueWave IT. Tecnologia fiável para empresas em crescimento.',
      ft_privacy:'Política de Privacidade', ft_gdpr:'RGPD',ft_terms:'Termos e Condições', 
    }
  };

  let currentLang = 'en';

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (T[lang][k] !== undefined) el.textContent = T[lang][k];
    });
    document.querySelectorAll('[data-lang]').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === lang)
    );
    // Re-run stack filter to update category labels
    filterStack(document.querySelector('.stack-tab.active')?.dataset.filter || 'all');
  }

  document.querySelectorAll('[data-lang]').forEach(b =>
    b.addEventListener('click', () => setLanguage(b.dataset.lang))
  );

  /* ── theme ── */
  document.querySelectorAll('[data-theme]').forEach(b => {
    b.addEventListener('click', () => {
      const t = b.dataset.theme;
      document.body.classList.toggle('theme-light', t === 'light');
      document.querySelectorAll('.logo-img').forEach(function(img){
        img.src = (t === 'light') ? img.dataset.light : img.dataset.dark;
      });
      document.querySelectorAll('[data-theme]').forEach(x =>
        x.classList.toggle('active', x.dataset.theme === t)
      );
    });
  });

  /* ── mobile nav ── */
  }, { threshold: 0.10 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* ── animated counters ── */
  let countersStarted = false;
  function animateCounters() {
    if (countersStarted) return;
    countersStarted = true;
    document.querySelectorAll('.counter').forEach(el => {
      const target   = parseFloat(el.dataset.target);
      const suffix   = el.dataset.suffix || '';
      const decimals = Number.isInteger(target) ? 0 : 1;
      const dur = 1400, t0 = performance.now();
      (function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = (decimals ? (target * e).toFixed(1) : Math.round(target * e)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }
  const statsObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) animateCounters(); });
  }, { threshold: 0.3 });
  const firstStat = document.querySelector('.stat-card');
  if (firstStat) statsObs.observe(firstStat);

  /* ── pillar tabs ── */
  (function() {
    let current = 0;
    const total = 6;
    const tabs   = document.querySelectorAll('.pillar-tab');
    const panels = document.querySelectorAll('.pillar-panel');
    const dots   = document.querySelectorAll('.pillar-dot');
    const count  = document.getElementById('pillarCount');
    const prev   = document.getElementById('pillarPrev');
    const next   = document.getElementById('pillarNext');

    function activatePillar(idx) {
      current = (idx + total) % total;
      tabs.forEach((t, i)   => t.classList.toggle('active', i === current));
      panels.forEach((p, i) => p.classList.toggle('active', i === current));
      dots.forEach((d, i)   => d.classList.toggle('active', i === current));
      if (count) count.textContent = (current + 1) + ' / ' + total;
      // animate progress bar
      const panel = panels[current];
      const fill  = panel?.querySelector('.pillar-progress-fill');
      if (fill) {
        fill.style.width = '0';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            fill.style.width = parseFloat(fill.dataset.fill) + '%';
          });
        });
      }
    }

    tabs.forEach((tab, i) => tab.addEventListener('click', () => activatePillar(i)));
    dots.forEach((dot, i) => dot.addEventListener('click', () => activatePillar(i)));
    prev?.addEventListener('click', () => activatePillar(current - 1));
    next?.addEventListener('click', () => activatePillar(current + 1));

    // trigger initial fill animation
    setTimeout(() => activatePillar(0), 400);
  })();

  /* ── values accordion ── */
  document.querySelectorAll('.value-head').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      // close siblings
      item.parentElement.querySelectorAll('.value-item.open').forEach(v => {
        if (v !== item) v.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });

  /* ── tech stack filter ── */
  function filterStack(filter) {
    document.querySelectorAll('.stack-item').forEach(item => {
      const show = filter === 'all' || item.dataset.cat === filter;
      item.classList.toggle('hidden', !show);
    });
    document.querySelectorAll('.stack-tab').forEach(t =>
      t.classList.toggle('active', t.dataset.filter === filter)
    );
  }
  document.querySelectorAll('.stack-tab').forEach(tab =>
    tab.addEventListener('click', () => filterStack(tab.dataset.filter))
  );

  /* ── init ── */
  setLanguage('en');
  /* init logo */
  (function(){
    var isL = document.body.classList.contains('theme-light');
    document.querySelectorAll('.logo-img').forEach(function(img){
      img.src = isL ? img.dataset.light : img.dataset.dark;
    });
  })();