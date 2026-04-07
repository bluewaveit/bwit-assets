/* BlueWave IT — faq.js
   Page-specific translations + accordion + category nav.
   lang.js (loaded before site.js) owns window.setLanguage.
   ================================================================ */

/* ── Page-specific translations (registered with lang.js) ─────── */
window.PAGE_TRANSLATIONS = {
  en: {
    /* ── Hero ── */
    bc_home:    'Home',
    bc_current: 'FAQ',
    hero_label: 'Help Centre',
    hero_h1_a:  'Got a question?',
    hero_h1_b:  "We've got",
    hero_h1_c:  'a straight answer.',
    hero_p:     'Everything you need to know about managed IT services, pricing, security, support, and working with BlueWave IT — organised by topic.',
    hero_stat1_num: '1',  hero_stat1_label: 'user minimum\n(none)',
    hero_stat2_num: '1h', hero_stat2_label: 'critical issue\nresponse',
    hero_stat3_num: '0',  hero_stat3_label: 'lock-in\ncontracts',
    hero_stat4_num: '6',  hero_stat4_label: 'service areas\ncovered',

    /* ── Trust strip ── */
    trust_1: 'Starting from 1 user',
    trust_2: 'No minimum seat requirement',
    trust_3: 'No lock-in contracts',
    trust_4: 'Fast support across the Algarve',
    trust_5: 'AI-optimised IT services',

    /* ── Category nav ── */
    cat_1: 'Getting Started',
    cat_2: 'Pricing & Plans',
    cat_3: 'Support & Services',
    cat_4: 'Security & Reliability',
    cat_5: 'About BlueWave IT',
    cat_6: 'Service Area',

    /* ── Section 1: Getting Started ── */
    s1_label: 'Getting Started',
    s1_h: 'Getting Started',
    s1_p: 'New to managed IT? Here is what to expect when you work with BlueWave IT.',

    s1q1: 'How does managed IT actually work?',
    s1a1: 'BlueWave IT takes over the daily management of your IT environment — monitoring, maintenance, security, helpdesk, and cloud administration — for a predictable monthly fee. Instead of waiting for things to break, we keep systems running proactively. You call us, we handle it. No per-incident fees, no surprise bills.',

    s1q2: 'Do I need to replace my current equipment or software?',
    s1a2: 'No. We start by supporting what you already have. We assess your setup, identify what works well and what needs attention, and guide upgrades only where they are genuinely necessary — not to hit a sales target. Most clients continue with their existing hardware for years after onboarding.',

    s1q3: 'How quickly can BlueWave IT get started?',
    s1a3: 'Most new clients are fully onboarded within a few working days. We handle the setup, agent deployments, monitoring activation, and documentation — without disrupting your team\'s daily operations.',

    s1q4: 'What does the onboarding process look like?',
    s1a4: 'We start with a discovery session reviewing your users, devices, existing services, and pain points. Then we deploy our monitoring and management tools, establish admin access and documentation, confirm your backup position, and brief your team on how to reach us for support. No disruption to daily operations.',

    s1q5: 'Do I need any technical knowledge to work with you?',
    s1a5: 'None required. You tell us what your business needs — we handle the technical side entirely. Most of our clients are business owners and managers who want IT sorted, not to understand every detail. That is exactly what we are here for.',

    /* ── Section 2: Pricing & Plans ── */
    s2_label: 'Pricing & Plans',
    s2_h: 'Pricing & Plans',
    s2_p: 'Clear, honest answers about how the managed service is priced, billed, and structured.',

    s2q1: "What's included in the €60 per user per month?",
    s2a1: 'Everything. Managed IT helpdesk, 24/7 monitoring, patch management, endpoint protection, cybersecurity tools (EDR, email security, MFA), Microsoft 365 administration, backup monitoring and verification, network health monitoring, and an annual IT consulting review. There are no add-ons required to get complete coverage.',

    s2q2: 'Is there a minimum number of users?',
    s2a2: 'No minimum. BlueWave IT supports solo operators, small teams, and growing businesses — starting from just 1 user. Plans scale as your team grows, with no minimum seat requirement and no lock-in contracts.',

    s2q3: 'Are there any setup or onboarding fees?',
    s2a3: 'In most cases, no. For standard SMB environments, onboarding is included in the managed service. For more complex environments — multiple sites, legacy systems, or significant remediation work — a one-time project fee may apply, and it will always be clearly scoped in writing before any commitment.',

    s2q4: 'What if I add or remove users mid-month?',
    s2a4: 'Billing is adjusted on a pro-rated basis at the next invoice. When someone joins, their user is activated immediately and billed from that date. When someone leaves, their user is offboarded and billing stops. Simple, transparent, and always aligned with your actual headcount.',

    s2q5: 'Is there a long-term contract or lock-in?',
    s2a5: 'No multi-year lock-in. BlueWave IT operates on a monthly rolling basis after a standard initial term. The relationship works because it delivers value — not because of contract penalty clauses.',

    s2q6: 'Do hardware and software licences cost extra?',
    s2a6: "Hardware (workstations, servers, switches, APs) is procured separately at cost. Microsoft 365 licences are billed at Microsoft's published rates. The management, administration, and support of all hardware and software is included in the €60/user/month fee.",

    s2q7: 'Can I get a quote before committing?',
    s2a7: "Absolutely. Book a free consultation — we'll review your environment, scope the right engagement, and provide a clear written proposal. The free IT assessment is exactly that: free, with no obligation to proceed.",

    s2q8: 'Can I add cloud backup to my managed IT plan?',
    s2a8: "Yes — backup plans are designed to complement the managed IT service seamlessly. The €60/user/month plan includes backup monitoring and verification for any backup system you already have. Adding a Cloud Backup plan gives you managed offsite storage, a retention policy, reporting, and restore handling on top of that. Most clients running a managed IT plan choose Cloud Backup Standard (€119/month) as their storage layer.",

    /* ── Section 3: Support & Services ── */
    s3_label: 'Support & Services',
    s3_h: 'Support & Services',
    s3_p: 'How we respond, what we cover, and how AI improves the support experience.',

    s3q1: 'How fast do you respond to IT issues?',
    s3a1: 'For critical issues — systems down, security incidents, complete outages — we aim to respond within 1 hour and begin remediation immediately. For non-critical issues, response is within 4 business hours. Priority is assessed based on business impact, not queue position.',

    s3q2: 'What does "24/7 monitoring" actually mean in practice?',
    s3a2: 'Our monitoring tools run continuously on your servers, workstations, and network devices — checking uptime, performance, patch status, security events, and anomalies. If something unexpected happens outside business hours, we are alerted and can take action before your team notices a problem.',

    s3q3: 'Can you support Microsoft 365 and shared files?',
    s3a3: 'Yes. Microsoft 365 administration, collaboration support, SharePoint, Teams, OneDrive, and file access workflows are all part of the core managed service offering — no extra charge.',

    s3q4: 'Do you offer on-site support or is everything remote?',
    s3a4: 'Both. Remote support handles the majority of issues faster and with less disruption. On-site visits are available across the Algarve for hardware, cabling, new device setups, and issues that genuinely require physical presence. There is no separate call-out fee for on-site visits within our service area under a managed plan.',

    s3q5: 'How does AI improve your IT support?',
    s3a5: 'We use AI-assisted tooling across monitoring, threat detection, and support workflows. This means faster pattern recognition for anomalies, smarter automated responses to low-level alerts, and more efficient resolution tracking — so tickets get resolved faster and recurring issues are fixed at the root, not just patched.',

    /* ── Section 4: Security & Reliability ── */
    s4_label: 'Security & Reliability',
    s4_h: 'Security & Reliability',
    s4_p: 'How we protect your business, handle threats, and keep you compliant.',

    s4q1: 'What cybersecurity tools are included?',
    s4a1: 'Endpoint Detection and Response (EDR) on all managed devices, email security filtering (anti-phishing, anti-malware), Multi-Factor Authentication (MFA) enforcement, network monitoring for unusual activity, and continuous patch management to close known vulnerabilities. All tools are managed and monitored by BlueWave IT — you do not need to do anything.',

    s4q2: 'How is backup and recovery handled?',
    s4a2: 'BlueWave IT includes backup monitoring and verification in the managed service — we confirm that your existing backups are running, completing successfully, and can be restored. If you need managed cloud backup with off-site storage, a defined retention policy, and restore handling, that is available as an add-on starting at €119/month.',

    s4q3: 'What happens if we experience a ransomware attack?',
    s4a3: 'We respond immediately: contain and isolate the affected systems, investigate the attack vector, and begin recovery from clean backups. Our proactive controls — EDR, MFA, patching, email filtering — are specifically designed to prevent ransomware from gaining a foothold in the first place. All managed clients benefit from all of these layers by default.',

    s4q4: 'Are you GDPR compliant? Can you help us with GDPR?',
    s4a4: 'Yes. BlueWave IT operates as a data processor under GDPR and maintains a formal Data Processing Agreement (DPA) with all managed clients. We can also help your business understand and meet its own GDPR obligations as a controller — from securing personal data to policy guidance.',

    s4q5: 'What happens if a server fails or the internet goes down outside business hours?',
    s4a5: 'Our monitoring detects outages automatically. For critical failures outside hours, our on-call process ensures the issue is assessed and remote recovery is attempted where possible. For hardware failures, we coordinate replacement and restoration as a priority on the next business day — or sooner where the situation requires it.',

    /* ── Section 5: About BlueWave IT ── */
    s5_label: 'About BlueWave IT',
    s5_h: 'About BlueWave IT',
    s5_p: 'Who we are, how we work, and what sets us apart.',

    s5q1: 'Where is BlueWave IT based?',
    s5a1: 'We are based in Portimão, Algarve, Portugal. Our office is at Av. 25 de Abril 6, 8500-511 Portimão. On-site support is available throughout the Algarve region at no extra call-out cost under a managed plan.',

    s5q2: 'What makes BlueWave IT different from a typical IT company?',
    s5a2: 'Three things: we operate proactively rather than reactively; we use AI-assisted tooling to deliver faster and smarter support; and we price simply — one all-in monthly fee per user, no hidden extras. Most IT companies charge per incident or per hour, making costs unpredictable. We remove that unpredictability entirely.',

    s5q3: 'Do you work alongside an existing internal IT person or team?',
    s5a3: 'Yes — we complement internal teams well. We handle the infrastructure layer, monitoring, security tooling, and vendor management, while your internal person focuses on user-facing support or strategic projects. Some clients use us as fully outsourced IT; others use us as a specialist layer alongside their own team. We adapt to whatever structure works best.',

    s5q4: 'How do I contact BlueWave IT for support or a new enquiry?',
    s5a4: 'Managed clients have a dedicated support channel and can raise tickets by email, phone, or the support portal. For new enquiries and general questions, you can reach us via the contact page or email us directly at hello@bluewaveit.pt.',

    /* ── Section 6: Service Area ── */
    s6_label: 'Service Area',
    s6_h: 'Service Area',
    s6_p: 'Where we work, what on-site visits cover, and how we support distributed teams.',

    s6q1: 'Which areas do you cover for on-site support?',
    s6a1: 'We cover the full Algarve region, including Portimão, Lagos, Faro, Albufeira, Loulé, Tavira, Silves, Lagoa, Olhão, and surrounding towns. Travel within the Algarve is included in the managed service — no additional call-out fees.',

    s6q2: 'Can you support businesses with remote workers or multiple locations?',
    s6a2: 'Yes. Remote worker devices are managed exactly like office devices — monitoring agents, security controls, patch management, and helpdesk access all apply regardless of where someone is working. Multi-location businesses are fully supported within a single managed plan.',

    s6q3: 'Can you support internationally-based businesses operating in the Algarve?',
    s6a3: 'Yes. We work with businesses headquartered elsewhere but with operations, staff, or offices in the Algarve. If your team uses IT in the region, we can manage it — and we coordinate with your group IT team where relevant to ensure nothing falls through the gaps.',

    /* ── CTA section ── */
    cta_label:  'Free IT Assessment',
    cta_h:      'Still have questions? Let\'s talk.',
    cta_p:      'Book a free IT assessment — we review your environment, answer your specific questions, and give you a clear written proposal. No obligation, no sales pressure.',
    cta_btn1:   'Get a Free IT Assessment',
    cta_btn2:   'View Pricing',
    cta_m1:     'No minimum users',
    cta_m2:     'No lock-in contracts',
    cta_m3:     'Reply within 1 business day',
  },

  pt: {
    /* ── Hero ── */
    bc_home:    'Início',
    bc_current: 'FAQ',
    hero_label: 'Centro de Apoio',
    hero_h1_a:  'Tem uma pergunta?',
    hero_h1_b:  'Temos uma',
    hero_h1_c:  'resposta direta.',
    hero_p:     'Tudo o que precisa de saber sobre serviços IT geridos, preços, segurança, suporte e como trabalhar com a BlueWave IT — organizado por tema.',
    hero_stat1_num: '1',  hero_stat1_label: 'utilizador mínimo\n(nenhum)',
    hero_stat2_num: '1h', hero_stat2_label: 'resposta a incidentes\ncríticos',
    hero_stat3_num: '0',  hero_stat3_label: 'contratos com\nfidelização',
    hero_stat4_num: '6',  hero_stat4_label: 'áreas de serviço\ncovertas',

    /* ── Trust strip ── */
    trust_1: 'A partir de 1 utilizador',
    trust_2: 'Sem requisito mínimo de lugares',
    trust_3: 'Sem contratos com fidelização',
    trust_4: 'Suporte rápido no Algarve',
    trust_5: 'Serviços IT otimizados com IA',

    /* ── Category nav ── */
    cat_1: 'Como Começar',
    cat_2: 'Preços e Planos',
    cat_3: 'Suporte e Serviços',
    cat_4: 'Segurança e Fiabilidade',
    cat_5: 'Sobre a BlueWave IT',
    cat_6: 'Área de Serviço',

    /* ── Section 1 ── */
    s1_label: 'Como Começar',
    s1_h: 'Como Começar',
    s1_p: 'Novo nos serviços IT geridos? Saiba o que esperar ao trabalhar com a BlueWave IT.',

    s1q1: 'Como funciona um serviço IT gerido?',
    s1a1: 'A BlueWave IT assume a gestão diária do seu ambiente IT — monitorização, manutenção, segurança, helpdesk e administração cloud — por uma mensalidade previsível. Em vez de esperar que algo falhe, mantemos os sistemas a funcionar proativamente. Liga-nos, nós tratamos. Sem custos por incidente, sem faturas surpresa.',

    s1q2: 'Preciso de substituir o equipamento ou software atual?',
    s1a2: 'Não. Começamos por suportar o que já tem. Avaliamos a sua configuração, identificamos o que funciona bem e o que precisa de atenção, e orientamos upgrades apenas quando genuinamente necessários — não por objetivos comerciais. A maioria dos clientes mantém o hardware existente durante anos após a integração.',

    s1q3: 'Com que rapidez pode a BlueWave IT começar?',
    s1a3: 'A maioria dos novos clientes está totalmente integrada em poucos dias úteis. Tratamos da configuração, implementação de agentes, ativação da monitorização e documentação — sem perturbar as operações diárias da sua equipa.',

    s1q4: 'Como é o processo de integração?',
    s1a4: 'Começamos com uma sessão de descoberta para analisar os seus utilizadores, dispositivos, serviços existentes e pontos de dificuldade. Depois implementamos as nossas ferramentas de monitorização e gestão, estabelecemos acesso administrativo e documentação, confirmamos a situação do backup e informamos a sua equipa sobre como nos contactar para suporte. Sem perturbação para as operações.',

    s1q5: 'Preciso de conhecimentos técnicos para trabalhar com vocês?',
    s1a5: 'Não é necessário nenhum. Diz-nos o que a sua empresa precisa — nós tratamos do lado técnico integralmente. A maioria dos nossos clientes são empresários e gestores que querem o IT resolvido, não compreender cada detalhe. É exatamente para isso que estamos aqui.',

    /* ── Section 2 ── */
    s2_label: 'Preços e Planos',
    s2_h: 'Preços e Planos',
    s2_p: 'Respostas claras e honestas sobre como o serviço gerido é definido em termos de preço, faturação e estrutura.',

    s2q1: 'O que está incluído nos €60 por utilizador por mês?',
    s2a1: 'Tudo. Helpdesk IT gerido, monitorização 24/7, gestão de patches, proteção de endpoints, ferramentas de cibersegurança (EDR, segurança de email, MFA), administração Microsoft 365, monitorização e verificação de backups, monitorização de saúde de rede e uma revisão anual de consultoria IT. Não são necessários extras para obter cobertura completa.',

    s2q2: 'Existe um número mínimo de utilizadores?',
    s2a2: 'Não existe mínimo. A BlueWave IT suporta operadores individuais, pequenas equipas e empresas em crescimento — a partir de apenas 1 utilizador. Os planos crescem à medida que a sua equipa cresce, sem requisito mínimo de lugares e sem contratos com penalizações.',

    s2q3: 'Existem taxas de instalação ou integração?',
    s2a3: 'Na maioria dos casos, não. Para ambientes PME standard, a integração está incluída no serviço gerido. Para ambientes mais complexos — múltiplas sedes, sistemas legados ou trabalho significativo de remediação — pode aplicar-se uma taxa de projeto única, que será sempre claramente definida por escrito antes de qualquer compromisso.',

    s2q4: 'E se adicionar ou remover utilizadores a meio do mês?',
    s2a4: 'A faturação é ajustada pro-rata na próxima fatura. Quando alguém entra, o utilizador é ativado imediatamente e faturado a partir dessa data. Quando alguém sai, o utilizador é desativado e a faturação cessa. Simples, transparente e sempre alinhado com o número real de colaboradores.',

    s2q5: 'Existe contrato de longo prazo ou cláusulas de fidelização?',
    s2a5: 'Não há fidelização plurianual. A BlueWave IT opera numa base mensal renovável após um prazo inicial standard. A relação funciona porque gera valor — não por cláusulas de penalização contratuais.',

    s2q6: 'Hardware e licenças de software têm custo adicional?',
    s2a6: 'Hardware (workstations, servidores, switches, APs) é adquirido separadamente ao custo. As licenças Microsoft 365 são faturadas às tarifas publicadas pela Microsoft. A gestão, administração e suporte de todo o hardware e software está incluído na tarifa de €60/utilizador/mês.',

    s2q7: 'Posso obter uma proposta antes de me comprometer?',
    s2a7: 'Claro. Marque uma consulta gratuita — revemos o seu ambiente, definimos o âmbito correto e fornecemos uma proposta escrita clara. A avaliação IT gratuita é exatamente isso: gratuita, sem obrigação de prosseguir.',

    s2q8: 'Posso adicionar backup cloud ao meu plano de IT gerido?',
    s2a8: 'Sim — os planos de backup são pensados para complementar o serviço gerido de forma integrada. O plano de €60/utilizador/mês inclui monitorização e verificação de backups para qualquer sistema que já tenha. Adicionar um plano Cloud Backup dá-lhe armazenamento externo gerido, política de retenção, relatórios e gestão de restauro. A maioria dos clientes com plano de IT gerido escolhe o Cloud Backup Standard (€119/mês).',

    /* ── Section 3 ── */
    s3_label: 'Suporte e Serviços',
    s3_h: 'Suporte e Serviços',
    s3_p: 'Como respondemos, o que cobrimos e como a IA melhora a experiência de suporte.',

    s3q1: 'Com que rapidez respondem a problemas IT?',
    s3a1: 'Para problemas críticos — sistemas em baixo, incidentes de segurança, falhas totais — respondemos em 1 hora e iniciamos a remediação de imediato. Para problemas não críticos, respondemos em 4 horas úteis. A prioridade é avaliada com base no impacto no negócio, não na ordem de chegada.',

    s3q2: 'O que significa "monitorização 24/7" na prática?',
    s3a2: 'As nossas ferramentas de monitorização funcionam continuamente nos seus servidores, workstations e dispositivos de rede — verificando disponibilidade, desempenho, estado de patches, eventos de segurança e anomalias. Se algo inesperado acontecer fora do horário de trabalho, somos alertados e podemos agir antes de a sua equipa notar o problema.',

    s3q3: 'Podem dar suporte a Microsoft 365 e ficheiros partilhados?',
    s3a3: 'Sim. Administração Microsoft 365, suporte à colaboração, SharePoint, Teams, OneDrive e fluxos de acesso a ficheiros fazem todos parte da oferta de serviço gerido principal — sem custo adicional.',

    s3q4: 'Oferecem suporte presencial ou tudo é remoto?',
    s3a4: 'Ambos. O suporte remoto resolve a maioria dos problemas com mais rapidez e menos perturbação. Visitas presenciais estão disponíveis em todo o Algarve para hardware, cablagem, configuração de novos dispositivos e problemas que genuinamente requerem presença física. Não existe taxa de deslocação adicional para visitas na área de serviço num plano gerido.',

    s3q5: 'Como é que a IA melhora o suporte IT?',
    s3a5: 'Utilizamos ferramentas assistidas por IA em monitorização, deteção de ameaças e fluxos de suporte. Isto significa reconhecimento mais rápido de padrões para anomalias, respostas automáticas mais inteligentes a alertas de baixo nível e acompanhamento de resolução mais eficiente — para que os tickets sejam resolvidos mais rapidamente e os problemas recorrentes sejam corrigidos na raiz, não apenas remediados.',

    /* ── Section 4 ── */
    s4_label: 'Segurança e Fiabilidade',
    s4_h: 'Segurança e Fiabilidade',
    s4_p: 'Como protegemos a sua empresa, gerimos ameaças e mantemos a conformidade.',

    s4q1: 'Que ferramentas de cibersegurança estão incluídas?',
    s4a1: 'Deteção e Resposta em Endpoint (EDR) em todos os dispositivos geridos, filtragem de segurança de email (anti-phishing, anti-malware), aplicação de Autenticação Multi-Fator (MFA), monitorização de rede para atividade incomum e gestão contínua de patches para fechar vulnerabilidades conhecidas. Todas as ferramentas são geridas e monitorizadas pela BlueWave IT — não precisa de fazer nada.',

    s4q2: 'Como é gerido o backup e a recuperação?',
    s4a2: 'A BlueWave IT inclui monitorização e verificação de backups no serviço gerido — confirmamos que os seus backups estão a correr, a completar com sucesso e podem ser restaurados. Se precisar de backup cloud gerido com armazenamento externo, política de retenção definida e gestão de restauro, está disponível como add-on a partir de €119/mês.',

    s4q3: 'O que acontece se sofrermos um ataque de ransomware?',
    s4a3: 'Respondemos de imediato: contemos e isolamos os sistemas afetados, investigamos o vetor de ataque e iniciamos a recuperação a partir de backups limpos. Os nossos controlos proativos — EDR, MFA, patches, filtragem de email — são especificamente concebidos para impedir que o ransomware se instale. Todos os clientes geridos beneficiam destas camadas por defeito.',

    s4q4: 'São conformes com o RGPD? Podem ajudar-nos com o RGPD?',
    s4a4: 'Sim. A BlueWave IT opera como subcontratante de dados ao abrigo do RGPD e mantém um Acordo de Tratamento de Dados (DPA) formal com todos os clientes geridos. Podemos também ajudar a sua empresa a compreender e cumprir as suas próprias obrigações RGPD como responsável pelo tratamento — desde a proteção de dados pessoais à orientação em políticas.',

    s4q5: 'O que acontece se um servidor falhar ou a internet cair fora do horário de trabalho?',
    s4a5: 'A nossa monitorização deteta interrupções automaticamente. Para falhas críticas fora de horas, o nosso processo de serviço de urgência garante que o problema é avaliado e a recuperação remota é tentada sempre que possível. Para falhas de hardware, coordenamos a substituição e restauro como prioridade no próximo dia útil — ou mais cedo se a situação o exigir.',

    /* ── Section 5 ── */
    s5_label: 'Sobre a BlueWave IT',
    s5_h: 'Sobre a BlueWave IT',
    s5_p: 'Quem somos, como trabalhamos e o que nos distingue.',

    s5q1: 'Onde está sediada a BlueWave IT?',
    s5a1: 'Estamos sediados em Portimão, Algarve, Portugal. O nosso escritório fica na Av. 25 de Abril 6, 8500-511 Portimão. Suporte presencial disponível em toda a região do Algarve sem custos adicionais de deslocação num plano gerido.',

    s5q2: 'O que distingue a BlueWave IT de uma empresa de IT típica?',
    s5a2: 'Três coisas: operamos proativamente em vez de reativamente; utilizamos ferramentas assistidas por IA para fornecer suporte mais rápido e inteligente; e temos preços simples — uma mensalidade tudo-incluído por utilizador, sem extras escondidos. A maioria das empresas de IT cobra por incidente ou por hora, tornando os custos imprevisíveis. Eliminamos essa imprevisibilidade por completo.',

    s5q3: 'Trabalham a par de uma pessoa ou equipa de IT interna já existente?',
    s5a3: 'Sim — complementamos bem as equipas internas. Tratamos da camada de infraestrutura, monitorização, ferramentas de segurança e gestão de fornecedores, enquanto a sua pessoa interna se foca no suporte ao utilizador ou em projetos estratégicos. Alguns clientes utilizam-nos como IT totalmente externalizado; outros como uma camada especializada ao lado da sua própria equipa. Adaptamo-nos à estrutura que funcionar melhor.',

    s5q4: 'Como posso contactar a BlueWave IT para suporte ou uma nova consulta?',
    s5a4: 'Os clientes geridos têm um canal de suporte dedicado e podem abrir tickets por email, telefone ou portal de suporte. Para novas consultas e questões gerais, pode contactar-nos através da página de contacto ou enviar email para hello@bluewaveit.pt.',

    /* ── Section 6 ── */
    s6_label: 'Área de Serviço',
    s6_h: 'Área de Serviço',
    s6_p: 'Onde trabalhamos, o que cobrem as visitas presenciais e como suportamos equipas distribuídas.',

    s6q1: 'Que zonas cobrem para suporte presencial?',
    s6a1: 'Cobrimos toda a região do Algarve, incluindo Portimão, Lagos, Faro, Albufeira, Loulé, Tavira, Silves, Lagoa, Olhão e localidades próximas. As deslocações no Algarve estão incluídas no serviço gerido — sem taxas adicionais de chamada.',

    s6q2: 'Podem suportar empresas com trabalhadores remotos ou múltiplas localizações?',
    s6a2: 'Sim. Os dispositivos de trabalhadores remotos são geridos exatamente como dispositivos de escritório — agentes de monitorização, controlos de segurança, gestão de patches e acesso ao helpdesk aplicam-se independentemente de onde alguém trabalha. Empresas com múltiplas localizações são totalmente suportadas num único plano gerido.',

    s6q3: 'Podem trabalhar com empresas com sede no estrangeiro que operam no Algarve?',
    s6a3: 'Sim. Trabalhamos com empresas sediadas noutros países mas com operações, colaboradores ou escritórios no Algarve. Se a sua equipa utiliza IT na região, podemos geri-lo — e coordenamos com a sua equipa de IT corporativa quando relevante, para garantir que nada fica por cobrir.',

    /* ── CTA section ── */
    cta_label:  'Avaliação IT Gratuita',
    cta_h:      'Ainda tem perguntas? Vamos conversar.',
    cta_p:      'Marque uma avaliação IT gratuita — analisamos o seu ambiente, respondemos às suas questões específicas e entregamos uma proposta escrita clara. Sem obrigações, sem pressão comercial.',
    cta_btn1:   'Obter Avaliação IT Gratuita',
    cta_btn2:   'Ver Preços',
    cta_m1:     'Sem utilizadores mínimos',
    cta_m2:     'Sem contratos com fidelização',
    cta_m3:     'Resposta em 1 dia útil',
  }
};

/* ================================================================
   FAQ ACCORDION
   Runs after DOM is ready.
   One open item per section. Click again to close.
   ================================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ── Accordion ─────────────────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item    = btn.closest('.faq-item');
      var section = btn.closest('.faq-list');

      /* Close other open items in the same list */
      if (section) {
        section.querySelectorAll('.faq-item.open').forEach(function (other) {
          if (other !== item) {
            other.classList.remove('open');
            var otherBtn = other.querySelector('.faq-q');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });
      }

      /* Toggle this item */
      var isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });

  /* ── Category nav: smooth scroll + active state ─────────────── */
  var sections = document.querySelectorAll('.faq-block[id]');
  var catBtns  = document.querySelectorAll('.faq-cat-btn');

  if (sections.length && catBtns.length) {
    /* Smooth scroll on button click */
    catBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = document.getElementById(btn.dataset.target);
        if (!target) return;
        var offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--hh') || '70', 10) + 56;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });

    /* Highlight active category on scroll */
    var ioNav = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          catBtns.forEach(function (b) {
            b.classList.toggle('active', b.dataset.target === id);
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

    sections.forEach(function (s) { ioNav.observe(s); });
  }
});
