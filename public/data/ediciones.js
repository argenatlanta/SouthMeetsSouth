/*
 * Ediciones de la misión South Meets South (solo la etapa de Atlanta).
 *
 * Cada edición es un objeto de esta lista. El orden no importa: el sitio las ordena por fecha.
 * Los textos van en los dos idiomas: { es: "...", en: "..." }. Un texto simple ("Atlanta") vale para ambos.
 * `inicio` y `fin` son las fechas de Atlanta. Las otras ciudades de la misión van en `otrasEtapas`.
 * `verificar: true` marca un dato que el Consulado todavía debe confirmar.
 * Las secciones vacías ([]) no se muestran en el sitio publicado.
 *
 * Esquema completo y reglas de edición: ver CLAUDE.md en la raíz del repo.
 */
window.SMS_EDICIONES = [
  // ───────────────────────────── 2026 · PRÓXIMA ─────────────────────────────
  {
    id: "2026",
    estado: "proxima",
    titulo: {
      es: "South Meets South 2026 · Misión de Software y Tecnología a Atlanta",
      en: "South Meets South 2026 · Argentine Software & Technology Mission to Atlanta",
    },
    inicio: "2026-11-16",
    fin: "2026-11-17",
    otrasEtapas: [{ ciudad: "Chicago", inicio: "2026-11-18", fin: "2026-11-19" }],
    cuentaRegresiva: { fecha: "2026-11-16", ciudad: "Atlanta" },
    empresas: 22,
    resumen: {
      es: "South Meets South vuelve a Atlanta el 16 y 17 de noviembre con una delegación de 22 empresas argentinas de software y tecnología de cinco provincias y la Ciudad de Buenos Aires. El programa combina rondas de negocios B2B, un reverse pitch en el que empresas de Atlanta presentan sus necesidades tecnológicas, encuentros de networking, mesas de Soft Landing, una práctica de pitch y visitas a empresas locales.",
      en: "South Meets South returns to Atlanta on November 16–17 with a delegation of 22 Argentine software and technology companies from five provinces and the City of Buenos Aires. The program combines B2B business meetings, a reverse pitch where Atlanta companies share their technology needs, networking events, Soft Landing roundtables, pitch practice and visits to local companies.",
    },
    sectores: [
      { es: "Inteligencia artificial", en: "Artificial intelligence" },
      { es: "Ciberseguridad", en: "Cybersecurity" },
      { es: "Transformación digital", en: "Digital transformation" },
      "Fintech",
      "HealthTech",
      { es: "IoT e ingeniería", en: "IoT & engineering" },
      { es: "Retail y e-commerce", en: "Retail & e-commerce" },
      { es: "Aeroespacial", en: "Aerospace" },
      { es: "Videojuegos", en: "Gaming" },
      "Software",
    ],
    programa: [
      { es: "Rondas de negocios B2B", en: "B2B business meetings" },
      { es: "Reverse pitch con empresas de Atlanta", en: "Reverse pitch with Atlanta companies" },
      { es: "Encuentros de networking", en: "Networking events" },
      { es: "Mesas de Soft Landing", en: "Soft Landing roundtables" },
      { es: "Visitas a empresas locales", en: "Visits to local companies" },
      { es: "Pitch practice", en: "Pitch practice" },
    ],
    convocatoria: {
      estado: "cerrada",
      cierre: "2026-10-09",
      url: "https://www.cancilleria.gob.ar/es/argentinatradenet/noticias/mision-comercial-de-software-y-tecnologia-estados-unidos",
      nota: {
        es: "Los gastos de pasajes, alojamiento y viáticos corren por cuenta de cada empresa participante.",
        en: "Airfare, lodging and travel expenses are covered by each participating company.",
      },
    },
    llamadoAnfitriones: {
      es: "¿Su empresa quiere participar del reverse pitch, recibir a la delegación o reunirse con las empresas argentinas? Escríbanos o complete el formulario de interés.",
      en: "Would your company like to join the reverse pitch, host the delegation or meet the Argentine companies? Email us or fill out the interest form.",
    },
    formularioInteres: "https://docs.google.com/forms/d/e/1FAIpQLScWaJzINNc0kwMQ0tLMI-A77zw04CoOIyE6xpX9SK0Z1t6CMQ/viewform",
    delegacion: [
      {
        nombre: "Avenga",
        logo: "img/empresas/avenga.png",
        provincia: "Córdoba",
        sector: { es: "Transformación digital, datos e IA", en: "Digital transformation, data & AI" },
        detalle: {
          es: "Más de 30 años acelerando la transformación digital de grandes empresas: consultoría, software a medida, datos e IA, cloud y servicios gestionados.",
          en: "30+ years accelerating digital transformation for large enterprises: consulting, custom software, data & AI, cloud and managed services.",
        },
        web: "https://www.avenga.com",
        ficha: {
          resumen: {
            es: "Empresa global de ingeniería y consultoría que acelera la transformación digital de grandes empresas con software, datos e inteligencia artificial. En la Argentina tiene sede en Córdoba.",
            en: "Global engineering and consulting company that accelerates digital transformation for large enterprises through software, data and artificial intelligence. In Argentina, it is based in Córdoba.",
          },
          servicios: [
            { es: "Consultoría y estrategia digital", en: "Digital strategy consulting" },
            { es: "Desarrollo de software a medida", en: "Custom software development" },
            { es: "Datos e inteligencia artificial", en: "Data and artificial intelligence" },
            { es: "Servicios cloud", en: "Cloud services" },
            { es: "Servicios gestionados de IT", en: "Managed IT services" },
          ],
          trayectoria: [
            { es: "Más de 30 años en el mercado", en: "30+ years in the market" },
            { es: "Más de 6.000 especialistas y presencia en más de 15 países", en: "6,000+ specialists and a presence in 15+ countries" },
            { es: "Certificada ISO 27001", en: "ISO 27001 certified" },
          ],
          eeuu: { es: "Cuenta con presencia en EE.UU. como parte de su red global de oficinas.", en: "Has a presence in the U.S. as part of its global office network." },
          clientes: ["ABB", "Allianz", "GSK", "Santander", "Volvo"],
        },
      },
      {
        nombre: "Borderless Software",
        logo: "img/empresas/borderless-software.png",
        provincia: "Buenos Aires",
        sector: { es: "Software y consultoría IT", en: "Software & IT consulting" },
        detalle: {
          es: "Desarrollo de software y consultoría IT con base en Atlanta y Buenos Aires; su producto principal son agentes de voz con IA para call centers.",
          en: "Software development and IT consulting based in Atlanta and Buenos Aires; its flagship product is AI voice agents for call centers.",
        },
        web: "https://www.borderless-software.com",
        ficha: {
          resumen: {
            es: "Empresa de software nearshore con oficinas en Atlanta y Buenos Aires. Desarrolla software a medida y ofrece Loqui CX, una plataforma de contact center con IA que atiende por WhatsApp, voz y web.",
            en: "Nearshore software company with offices in Atlanta and Buenos Aires. It builds custom software and offers Loqui CX, an AI-powered contact center platform that engages customers on WhatsApp, voice and web.",
          },
          servicios: [
            { es: "IA conversacional para WhatsApp, voz y web", en: "Conversational AI for WhatsApp, voice and web" },
            { es: "Loqui CX: agentes de IA y copiloto para operadores", en: "Loqui CX: AI agents and agent copilot" },
            { es: "Desarrollo de software a medida", en: "Custom software development" },
            { es: "Staff augmentation", en: "Staff augmentation" },
            { es: "Servicios gestionados de IT", en: "Managed IT services" },
          ],
          trayectoria: [
            { es: "Más de 20 años de experiencia", en: "20+ years of experience" },
            { es: "Oficinas en Atlanta y Buenos Aires", en: "Offices in Atlanta and Buenos Aires" },
            { es: "Miembro de la Cámara de la Industria Argentina del Software (CESSI)", en: "Member of the Argentine Software Industry Chamber (CESSI)" },
          ],
          eeuu: { es: "Opera desde Atlanta, con una cartera de clientes activos radicados mayormente en EE.UU.", en: "Operates from Atlanta, with an active client base located mostly in the U.S." },
        },
      },
      {
        nombre: "Clarika",
        logo: "img/empresas/clarika.png",
        logoFondo: "oscuro",
        provincia: "Córdoba",
        sector: { es: "Software a medida y staffing", en: "Custom software & tech staffing" },
        detalle: {
          es: "Desde 2007, desarrollo de software a medida y staffing tecnológico para clientes de Argentina, Latinoamérica y Norteamérica. Certificada ISO 9001:2015.",
          en: "Since 2007, custom software development and tech staffing for clients in Argentina, Latin America and North America. ISO 9001:2015 certified.",
        },
        web: "https://www.clarikagroup.com",
        ficha: {
          resumen: {
            es: "Empresa de ingeniería de software que construye sistemas con IA integrados a la operación de sus clientes, con la ingeniería, la seguridad y el soporte necesarios para sostenerlos en el tiempo.",
            en: "Software engineering company that builds AI-powered systems integrated into its clients’ operations, with the engineering, security and support to keep them running over time.",
          },
          servicios: [
            { es: "Software a medida, de la arquitectura a producción", en: "Custom software, from architecture to production" },
            { es: "Apps web y móviles, y reemplazo de sistemas heredados", en: "Web and mobile apps, and legacy system replacement" },
            { es: "Staff augmentation con desarrolladores senior", en: "Staff augmentation with senior developers" },
            { es: "Agentes de IA y copilotos conectados a los datos (RAG)", en: "AI agents and copilots connected to data (RAG)" },
            { es: "Automatización de flujos y procesamiento de documentos", en: "Workflow automation and document processing" },
          ],
          trayectoria: [
            { es: "Fundada en 2007, con más de 100 clientes en el mundo", en: "Founded in 2007, with 100+ clients worldwide" },
            { es: "Certificada ISO 9001:2015", en: "ISO 9001:2015 certified" },
            { es: "Great Place to Work 2026: 4.º mejor lugar para trabajar en tecnología de la Argentina", en: "Great Place to Work 2026: #4 Best Workplace in Technology in Argentina" },
          ],
          eeuu: { es: "Trabaja con clientes de Norteamérica, con equipos en zona horaria compatible y nivel de inglés B2 garantizado.", en: "Works with North American clients, with teams in a compatible time zone and guaranteed B2-level English." },
          clientes: ["McDonald's", "DAC Group", "Figmu"],
        },
      },
      {
        nombre: "Code First Lab",
        logo: "img/empresas/code-first-lab.png",
        provincia: "Mendoza",
        sector: { es: "Software a medida e IA", en: "Custom software & AI" },
        detalle: {
          es: "Software a medida, equipos dedicados, IoT y soluciones de IA generativa para acelerar la transformación digital.",
          en: "Custom software, dedicated teams, IoT and generative AI solutions to accelerate digital transformation.",
        },
        web: "https://www.codefirstlab.com",
        ficha: {
          resumen: {
            es: "Empresa de desarrollo de software con oficina en el área de Atlanta y sede operativa en Mendoza. Desarrolla software a medida, MVPs y soluciones de IA, y amplía los equipos de sus clientes con talento latinoamericano.",
            en: "Software development company with an office in the Atlanta area and operational headquarters in Mendoza. It builds custom software, MVPs and AI solutions, and extends its clients’ teams with Latin American talent.",
          },
          servicios: [
            { es: "Desarrollo a medida: web, móvil y e-commerce", en: "Custom development: web, mobile and e-commerce" },
            { es: "Desarrollo rápido de MVPs", en: "Rapid MVP development" },
            { es: "Desarrollo con LLMs e ingeniería de software con IA", en: "Custom LLM development and AI-powered engineering" },
            { es: "Software para IoT", en: "IoT software development" },
            { es: "Transformación digital", en: "Digital transformation" },
            { es: "Extensión de equipos nearshore y onshore", en: "Nearshore and onshore team extension" },
          ],
          trayectoria: [
            { es: "Oficina en Brookhaven (Georgia) y sede operativa en Mendoza", en: "Office in Brookhaven, Georgia, and operational headquarters in Mendoza" },
            { es: "Miembro del Polo TIC Mendoza", en: "Member of Polo TIC Mendoza" },
          ],
          eeuu: { es: "Tiene oficina en Brookhaven, en el área metropolitana de Atlanta.", en: "Has an office in Brookhaven, in the Atlanta metropolitan area." },
        },
      },
      {
        nombre: "Digital Beings",
        logo: "img/empresas/digital-beings.png",
        provincia: "Ciudad de Buenos Aires",
        sector: { es: "Software, IA y blockchain", en: "Software, AI & blockchain" },
        detalle: {
          es: "Consultoría y desarrollo de software en inteligencia artificial, blockchain, web y apps móviles para clientes de todas las industrias.",
          en: "Software consulting and development in AI, blockchain, web and mobile apps for clients across industries.",
        },
        web: "https://www.digitalbeings.net",
        ficha: {
          resumen: {
            es: "Empresa de consultoría y desarrollo de software especializada en inteligencia artificial, blockchain, web y apps móviles, que trabaja tanto ampliando los equipos de sus clientes como en proyectos de punta a punta.",
            en: "Software consulting and development company specialized in artificial intelligence, blockchain, web and mobile apps, working both as an extension of its clients’ teams and on end-to-end projects.",
          },
          servicios: [
            { es: "Soluciones de inteligencia artificial", en: "Artificial intelligence solutions" },
            { es: "Blockchain y aplicaciones descentralizadas", en: "Blockchain and decentralized applications" },
            { es: "Desarrollo web, e-commerce y e-learning", en: "Web, e-commerce and e-learning development" },
            { es: "Apps móviles para iOS y Android", en: "iOS and Android mobile apps" },
            { es: "Staff augmentation", en: "Staff augmentation" },
            { es: "Proyectos de punta a punta, del concepto a la operación", en: "End-to-end projects, from concept to operation" },
          ],
          trayectoria: [
            { es: "Proyectos en fintech, seguros, e-commerce y entretenimiento", en: "Projects in fintech, insurance, e-commerce and entertainment" },
            { es: "Billetera digital sobre la blockchain RSK y pagos en más de 50 criptomonedas para e-commerce", en: "A digital wallet on the RSK blockchain and payments in 50+ cryptocurrencies for e-commerce" },
          ],
          clientes: ["Wayni Móvil", "uPay", "Seguro Select", "BrushUpClub", "Zeppelin Solutions", "Gathr Films"],
        },
      },
      {
        nombre: "HIPCAM",
        logo: "img/empresas/hipcam.png",
        provincia: "Ciudad de Buenos Aires",
        sector: { es: "PropTech y seguridad", en: "PropTech & security" },
        detalle: {
          es: "Control de accesos, portería virtual y seguridad para edificios como servicio, sobre una única plataforma y app con monitoreo 24/7.",
          en: "Smart access as a service: access control, virtual concierge and building security on a single platform and app with 24/7 monitoring.",
        },
        web: "https://www.hipcam.com",
        ficha: {
          resumen: {
            es: "Proptech argentina especializada en Smart Access as a Service: control de accesos, portería virtual y seguridad para edificios, operados sobre una sola plataforma, una app y un centro de monitoreo 24/7.",
            en: "Argentine proptech specialized in Smart Access as a Service: access control, virtual concierge and building security, run on a single platform, one app and a 24/7 monitoring center.",
          },
          servicios: [
            { es: "App para residentes: credencial, intercomunicador y apertura remota", en: "Resident app: credential, intercom and remote door opening" },
            { es: "Reconocimiento facial e invitaciones con QR o PIN", en: "Facial recognition and QR or PIN guest invitations" },
            { es: "Portería virtual con centro de monitoreo 24/7", en: "Virtual concierge with a 24/7 monitoring center" },
            { es: "Plataforma web para administradores", en: "Web platform for property managers" },
            { es: "Hardware integrado: videoportero, control vehicular y cerraduras inteligentes", en: "Integrated hardware: video doorbell, vehicle access and smart locks" },
            { es: "Soluciones para industria, retail y sector público", en: "Solutions for industry, retail and the public sector" },
          ],
          trayectoria: [
            { es: "Más de 10 años en el mercado", en: "10+ years in the market" },
            { es: "Más de 2.600 edificios y 400.000 usuarios activos", en: "2,600+ buildings and 400,000+ active users" },
            { es: "Presencia en 16 países de Latinoamérica y alianza tecnológica con Hikvision", en: "A presence in 16 Latin American countries and a technology partnership with Hikvision" },
          ],
        },
      },
      {
        nombre: "I+DIoT Lab",
        logo: "img/empresas/id-iot-lab.png",
        provincia: "Ciudad de Buenos Aires",
        sector: { es: "Retail tech, IoT e IA", en: "Retail tech, IoT & AI" },
        detalle: {
          es: "Hardware, software, IoT e IA para digitalizar el retail físico: kioscos de autogestión, operación de tienda y retiro inteligente.",
          en: "Hardware, software, IoT and AI to digitize physical retail: self-service kiosks, store operations and smart pickup.",
        },
        web: "https://www.idiotlab.io",
        ficha: {
          resumen: {
            es: "Empresa argentina que diseña e implementa soluciones integradas de hardware, software, IoT e IA para el retail físico, conectando la experiencia del cliente con la operación de la tienda.",
            en: "Argentina-based company that designs and deploys integrated hardware, software, IoT and AI solutions for physical retail, connecting customer interactions with store operations.",
          },
          servicios: [
            { es: "Kioscos de autogestión y pedidos digitales", en: "Self-service kiosks and digital ordering" },
            { es: "Operación de tienda: tablets para el personal y gestión de filas", en: "Store operations: staff tablets and queue management" },
            { es: "Retiro inteligente: lockers y click-and-collect", en: "Smart pickup: lockers and click-and-collect" },
            { es: "Soluciones Fast-Fit para tiendas de calzado", en: "Fast-Fit solutions for footwear retail" },
            { es: "Datos e IA sobre la actividad en la tienda", en: "In-store data and AI" },
          ],
          trayectoria: [
            { es: "Partner de Zebra Technologies", en: "Zebra Technologies partner" },
            { es: "Clientes en cadenas de retail, comida rápida, cafeterías, tiendas de conveniencia y estaciones de servicio", en: "Clients across retail chains, quick-service restaurants, coffee shops, convenience stores and fuel retail" },
          ],
          eeuu: { es: "Presentó su solución de autogestión en el stand de Zebra Technologies en NRF 2026, en Nueva York.", en: "Showcased its self-service solution at Zebra Technologies’ booth at NRF 2026 in New York." },
          clientes: ["Nike", "Under Armour", "Converse", "Pan American Energy", "Falabella", "Grido"],
        },
      },
      {
        nombre: "Immersive Global Solutions (IGS)",
        logo: "img/empresas/immersive-global-solutions.png",
        provincia: "Córdoba",
        sector: { es: "IA y realidad extendida", en: "AI & extended reality" },
        detalle: {
          es: "IA aplicada, visión por computadora y tecnologías inmersivas para la industria manufacturera, desde Metro Atlanta. Más de 500 proyectos de realidad aumentada y virtual.",
          en: "Practical AI, computer vision and immersive technologies for manufacturers, from Metro Atlanta. 500+ AR/VR projects delivered.",
        },
        web: "https://igsmanufacturing.com/",
        ficha: {
          resumen: {
            es: "A través de IGS Manufacturing, su división para la industria con sede en Metro Atlanta, ayuda a fabricantes a reducir paradas, mejorar la calidad, optimizar la producción y capacitar al personal de planta con IA aplicada, visión por computadora y tecnologías inmersivas.",
            en: "Through IGS Manufacturing, its manufacturing division based in Metro Atlanta, it helps manufacturers reduce downtime, improve quality, optimize production and train frontline workers with practical AI, computer vision and immersive technologies.",
          },
          servicios: [
            { es: "Optimización de procesos con IA", en: "AI process optimization" },
            { es: "Visión por computadora para control de calidad", en: "Computer vision for quality inspection" },
            { es: "Capacitación y soporte remoto con 3D, realidad aumentada y virtual", en: "3D, AR and VR training and remote support" },
            { es: "Asistentes de IA privados sobre ERP, procedimientos y documentos", en: "Private AI assistants for ERP data, procedures and documents" },
            { es: "Staff augmentation en IA y realidad extendida", en: "AI and XR staff augmentation" },
          ],
          trayectoria: [
            { es: "Más de 500 proyectos de realidad aumentada y virtual", en: "500+ AR/VR projects delivered" },
            { es: "Calificación de 5 estrellas en Clutch, donde figura 2.ª entre las empresas de RV y RA de EE.UU.", en: "Rated 5 stars on Clutch, where it ranks #2 among U.S. VR and AR companies" },
            { es: "Equipos en Georgia, Florida, España y Latinoamérica", en: "Teams in Georgia, Florida, Spain and Latin America" },
          ],
          eeuu: { es: "Pequeña empresa (SBE) con sede en Atlanta. En 2025 fue subadjudicataria de un subsidio de la National Science Foundation para el proyecto ENVISION, junto a West Virginia University, Millersville University y el Stroud Water Research Center.", en: "Atlanta-based small business enterprise (SBE). In 2025 it was a sub-awardee of a National Science Foundation grant for the ENVISION project, alongside West Virginia University, Millersville University and the Stroud Water Research Center." },
          clientes: ["Fiat Chrysler", { es: "Banco Mundial", en: "World Bank" }, "Growglide", { es: "Equipos de la MLS", en: "MLS teams" }],
        },
      },
      {
        nombre: "Lila Software Studio",
        logo: "img/empresas/lila-software-studio.png",
        logoFondo: "oscuro",
        provincia: "Mendoza",
        sector: { es: "Productos digitales a medida", en: "Custom digital products" },
        detalle: {
          es: "Estudio que diseña, desarrolla y evoluciona productos digitales a medida, con un equipo 100% senior en producto, UX/UI e ingeniería.",
          en: "Studio that designs, builds and evolves custom digital products with a 100% senior product, UX/UI and engineering team.",
        },
        web: "https://lilastudio.com.ar",
        ficha: {
          resumen: {
            es: "Estudio de software que diseña, desarrolla y evoluciona productos digitales a medida para empresas en crecimiento, con un equipo 100% senior en producto, UX/UI e ingeniería que trabaja integrado a la operación del cliente.",
            en: "Software studio that designs, builds and evolves custom digital products for growing companies, with a 100% senior team in product, UX/UI and engineering embedded in each client’s operation.",
          },
          servicios: [
            { es: "Productos digitales a medida, del discovery al lanzamiento", en: "Custom digital products, from discovery to launch" },
            { es: "Diseño de producto y UX/UI", en: "Product and UX/UI design" },
            { es: "Plataformas multirol con reglas de negocio e integraciones", en: "Multi-role platforms with business rules and integrations" },
            { es: "Apps fintech centradas en la conversión y la confianza", en: "Fintech apps focused on conversion and user trust" },
            { es: "Desarrollo acelerado con IA", en: "AI-accelerated delivery" },
          ],
          trayectoria: [
            { es: "Más de 6 años de trayectoria", en: "6+ years in the market" },
            { es: "35 productos en su portfolio y experiencia en 5 mercados del exterior", en: "35 products in its portfolio and experience in 5 international markets" },
            { es: "NPS de 9,66 entre sus clientes", en: "Client NPS of 9.66" },
          ],
          clientes: ["Welfi", "Propify", "Hudson App"],
        },
      },
      {
        nombre: "Meta Software",
        logo: "img/empresas/meta-software.png",
        provincia: "Buenos Aires",
        sector: { es: "Software a medida", en: "Custom software" },
        detalle: {
          es: "Más de 15 años desarrollando software a medida, con productos propios y clientes en mercados del exterior.",
          en: "15+ years developing custom software, with proprietary products and clients abroad.",
        },
        web: "https://www.metaok.com",
        ficha: {
          resumen: {
            es: "Empresa especializada en tecnologías emergentes y software a medida, socio tecnológico estratégico para aplicaciones de misión crítica, con equipos en la Argentina y España.",
            en: "Company specialized in emerging technologies and custom software, a strategic technology partner for mission-critical applications, with teams in Argentina and Spain.",
          },
          servicios: [
            { es: "Desarrollo de software de escritorio, web, cloud y móvil", en: "Desktop, web, cloud and mobile development" },
            { es: "Outsourcing y equipos dedicados", en: "Outsourcing and dedicated teams" },
            { es: "Staff augmentation", en: "Staff augmentation" },
            { es: "Ciencia de datos e IA: big data, BI y machine learning", en: "Data science and AI: big data, BI and machine learning" },
            { es: "Infraestructura, DevOps y servicios de IT", en: "Infrastructure, DevOps and IT services" },
            { es: "Diseño UI/UX", en: "UI/UX design" },
          ],
          trayectoria: [
            { es: "Más de 15 años desarrollando software a medida", en: "15+ years building custom software" },
            { es: "Equipos en la Argentina y España", en: "Teams in Argentina and Spain" },
            { es: "Proyectos en salud, producción, entretenimiento y sector público", en: "Projects in healthcare, production, entertainment and the public sector" },
          ],
          clientes: ["Grifols", "OPKO Health Europe", "Telecom", { es: "Hospital Garrahan", en: "Garrahan Children’s Hospital" }, "Boca Juniors", { es: "Municipalidad de Trenque Lauquen", en: "Municipality of Trenque Lauquen" }],
        },
      },
      {
        nombre: "Novasoft",
        logo: "img/empresas/novasoft.png",
        provincia: "Buenos Aires",
        sector: { es: "Software a medida y SaaS", en: "Custom software & SaaS" },
        detalle: {
          es: "Software a medida, automatizaciones, integraciones y productos SaaS propios, desde La Plata.",
          en: "Custom software, automation, integrations and its own SaaS products, based in La Plata.",
        },
        web: "https://novasoftarg.com",
        ficha: {
          resumen: {
            es: "Empresa de software de La Plata que desarrolla software a medida, automatizaciones, integraciones y productos SaaS para empresas.",
            en: "Software company based in La Plata that builds custom software, automations, integrations and SaaS products for businesses.",
          },
          servicios: [
            { es: "Desarrollo de software a medida", en: "Custom software development" },
            { es: "Automatización de procesos", en: "Process automation" },
            { es: "Integraciones y APIs", en: "Integrations and APIs" },
            { es: "Plataformas SaaS y dashboards", en: "SaaS platforms and dashboards" },
            { es: "Soporte técnico 24/7", en: "24/7 technical support" },
          ],
          trayectoria: [
            { es: "Productos propios: Rentium, Coreva y Terva", en: "Proprietary products: Rentium, Coreva and Terva" },
            { es: "Partner de Tiendanube", en: "Tiendanube partner" },
          ],
        },
      },
      {
        nombre: "OWL Services",
        logo: "img/empresas/owl-services.png",
        provincia: "Santa Fe",
        sector: { es: "Sistemas embebidos, IoT y ciberseguridad", en: "Embedded systems, IoT & cybersecurity" },
        detalle: {
          es: "Sistemas embebidos y software crítico, con clientes en Latinoamérica, Norteamérica, Europa y Medio Oriente.",
          en: "Embedded systems and mission-critical software, with clients in Latin America, North America, Europe and the Middle East.",
        },
        web: "https://www.owl-services.com",
        ficha: {
          resumen: {
            es: "Socio de ingeniería y tecnología especializado en firmware, sistemas embebidos, programación de sistemas, conectividad, ciberseguridad y software a medida, que convierte desafíos complejos de hardware y software en soluciones confiables y listas para producción.",
            en: "Engineering and technology partner specialized in firmware, embedded systems, system programming, connectivity, cybersecurity and custom software, turning complex hardware-software challenges into reliable, production-ready solutions.",
          },
          servicios: [
            { es: "Sistemas embebidos, firmware e IA en el borde", en: "Embedded systems, firmware and edge AI" },
            { es: "Programación de sistemas: kernel, drivers y bootloaders", en: "System programming: kernel, drivers and bootloaders" },
            { es: "Middleware y conectividad: BLE, Wi-Fi, celular y LPWAN", en: "Middleware and connectivity: BLE, Wi-Fi, cellular and LPWAN" },
            { es: "Ciberseguridad a nivel de dispositivo", en: "Device-level cybersecurity" },
            { es: "DevOps y software a medida", en: "DevOps and custom software" },
            { es: "Diseño electrónico, de PCB y mecánico", en: "Electronics, PCB and mechanical design" },
          ],
          trayectoria: [
            { es: "Certificada ISO 27001", en: "ISO 27001 certified" },
            { es: "Sistemas en tiempo real: Linux, Zephyr, VxWorks y otros RTOS", en: "Real-time expertise: Linux, Zephyr, VxWorks and other RTOS" },
            { es: "Industrias: aeroespacial y defensa, automotriz, industria y robótica, salud y agtech", en: "Industries: aerospace and defense, automotive, industrial and robotics, medical and agtech" },
          ],
          eeuu: { es: "Con oficina en St. Petersburg (Florida), desarrolla proyectos en EE.UU., la Argentina, Perú y Brasil.", en: "With an office in St. Petersburg, Florida, it delivers projects in the U.S., Argentina, Peru and Brazil." },
        },
      },
      {
        nombre: "Pleiada",
        logo: "img/empresas/pleiada.png",
        provincia: "Buenos Aires",
        sector: { es: "IA y videojuegos", en: "AI & gaming" },
        detalle: {
          es: "Startup en el cruce entre IA y videojuegos: entornos 3D donde personas reales generan datos de comportamiento para entrenar modelos de IA.",
          en: "Startup at the intersection of AI and gaming: 3D environments where real people generate behavioral data to train AI models.",
        },
        web: "https://pleiada.ai",
        ficha: {
          resumen: {
            es: "Startup argentina en el cruce entre la inteligencia artificial y los videojuegos: produce a medida datos de comportamiento humano en entornos 3D para entrenar modelos de IA.",
            en: "Argentine startup at the intersection of artificial intelligence and video games: it produces custom human-behavior data in 3D environments to train AI models.",
          },
          servicios: [
            { es: "Playgrounds: entornos 3D propios con física real", en: "Playgrounds: proprietary 3D environments with real physics" },
            { es: "MindSets: escenarios conversacionales con avatares de IA", en: "MindSets: conversational scenarios with AI avatars" },
            { es: "Producción de datos a demanda con su red de creadores", en: "On-demand data production through its creator network" },
            { es: "Evaluación de modelos de IA frente a comportamiento humano real", en: "Testing AI models against real human behavior" },
            { es: "Control de calidad en cuatro etapas, automáticas y humanas", en: "Four-stage quality control, automated and human" },
          ],
          trayectoria: [
            { es: "Fundadores con más de 20 años en gaming y tecnología, con paso por Microsoft, Globant, Tencent y Gameloft", en: "Founders with 20+ years in gaming and technology, including Microsoft, Globant, Tencent and Gameloft" },
            { es: "Red de 10.000 gamers en 18 países de Latinoamérica", en: "A network of 10,000 gamers across 18 Latin American countries" },
            { es: "Capacidad para producir miles de horas de datos por semana", en: "Capacity to produce thousands of hours of data per week" },
          ],
        },
      },
      {
        nombre: "QKStudio",
        logo: "img/empresas/qkstudio.png",
        provincia: "Buenos Aires",
        sector: { es: "Plataformas digitales y UX", en: "Digital platforms & UX" },
        detalle: {
          es: "19 años creando plataformas digitales y desarrollos a medida con foco en UX/UI: apps, webapps, e-learning y e-commerce.",
          en: "19 years building digital platforms and custom software with a strong UX/UI focus: apps, web apps, e-learning and e-commerce.",
        },
        web: "https://www.qkstudio.com",
        ficha: {
          resumen: {
            es: "Con 19 años de experiencia, crea plataformas digitales y software a medida con un fuerte foco en UI/UX, creatividad y funcionalidad. Tiene presencia en la Argentina, Latinoamérica, EE.UU. y España.",
            en: "With 19 years of experience, it creates digital platforms and custom software with a strong focus on UI/UX, creativity and functionality. It has a presence in Argentina, Latin America, the U.S. and Spain.",
          },
          servicios: [
            { es: "Apps web y software a medida", en: "Web apps and custom software" },
            { es: "Apps móviles: Android, iOS, React Native e IoT", en: "Mobile apps: Android, iOS, React Native and IoT" },
            { es: "Sitios corporativos, e-commerce y e-learning", en: "Corporate websites, e-commerce and e-learning" },
            { es: "Marca y contenidos", en: "Brand and content" },
            { es: "Investigación y diseño UX/UI", en: "UX/UI research and design" },
            { es: "Marketing digital", en: "Digital marketing" },
          ],
          trayectoria: [
            { es: "19 años de experiencia", en: "19 years of experience" },
            { es: "Google Partner Premier 2026", en: "Google Partner Premier 2026" },
            { es: "Premios: Sello de Buen Diseño argentino (2025 y 2026), Eikon (2024 y 2025) y Sadosky (2015 y 2020)", en: "Awards: Argentine Good Design Seal (2025 and 2026), Eikon (2024 and 2025) and Sadosky (2015 and 2020)" },
          ],
          eeuu: { es: "Tiene presencia en EE.UU.; entre las marcas de su portfolio figuran Citibank, Visa y Western Union.", en: "It has a presence in the U.S.; brands in its portfolio include Citibank, Visa and Western Union." },
          clientes: ["Citibank", "Visa", "Western Union", "Sony", "Nestlé", "McDonald's"],
        },
      },
      {
        nombre: "Quadion Technologies",
        logo: "img/empresas/quadion-technologies.png",
        provincia: "Ciudad de Buenos Aires",
        sector: { es: "Software a medida", en: "Custom software development" },
        detalle: {
          es: "Más de 20 años desarrollando software a medida para clientes internacionales. Certificada ISO 9001:2015.",
          en: "20+ years building custom software for international clients. ISO 9001:2015 certified.",
        },
        web: "https://www.quadiontech.com",
        ficha: {
          resumen: {
            es: "Desarrolla software a medida con metodologías ágiles y entregas incrementales, con equipos especializados en plataformas web y móviles.",
            en: "Builds custom software through agile methodologies and incremental delivery, with teams specialized in web and mobile platforms.",
          },
          servicios: [
            { es: "Desarrollo de software a medida", en: "Custom software development" },
            { es: "Desarrollo nearshore", en: "Nearshore software development" },
            { es: "Apps web y móviles: Angular, React, iOS y Android", en: "Web and mobile apps: Angular, React, iOS and Android" },
            { es: "Backend y cloud: .NET, Java, Node.js, Azure y AWS", en: "Backend and cloud: .NET, Java, Node.js, Azure and AWS" },
          ],
          trayectoria: [
            { es: "Desde 2004, más de 250 proyectos completados", en: "250+ projects completed since 2004" },
            { es: "Más de 100 profesionales; el 78% habla inglés", en: "100+ professionals; 78% English-speaking" },
            { es: "Certificada ISO 9001:2015", en: "ISO 9001:2015 certified" },
          ],
          eeuu: { es: "Más del 70% de sus proyectos son para empresas de EE.UU.", en: "U.S. companies account for over 70% of its engagements." },
        },
      },
      {
        nombre: "QuantyIA",
        logo: "img/empresas/quantyia.png",
        provincia: "Buenos Aires",
        sector: { es: "Datos para IA", en: "Data for AI" },
        detalle: {
          es: "Etiquetado de datos con criterio humano para proyectos de IA en automotriz, industria, salud y sistemas de percepción.",
          en: "Human-led data labeling for AI projects in automotive, industrial, healthcare and perception systems.",
        },
        web: "https://quantyia.ar",
        ficha: {
          resumen: {
            es: "Empresa argentina especializada en curaduría y validación de datos de alta precisión para sistemas de IA, en áreas donde la exactitud y el contexto son críticos: automotriz, control de calidad industrial y salud.",
            en: "Argentine company specialized in high-precision data curation and validation for AI systems in areas where accuracy and context are critical: automotive, industrial quality control and healthcare.",
          },
          servicios: [
            { es: "Anotación de datos para percepción automotriz y ADAS", en: "Data annotation for automotive perception and ADAS" },
            { es: "Datasets para detección de defectos en manufactura", en: "Defect-detection datasets for manufacturing" },
            { es: "Imágenes diagnósticas y datos clínicos", en: "Diagnostic imaging and clinical data" },
            { es: "Control de calidad con supervisión humana (human-in-the-loop)", en: "Human-in-the-loop (HITL) quality assurance" },
          ],
          trayectoria: [
            { es: "Socio de laboratorios de I+D y empresas tecnológicas que exigen estándares de calidad internacionales", en: "Partner to R&D labs and tech companies that demand export-grade quality standards" },
            { es: "Procesos diseñados según GDPR, HIPAA y los criterios SOC 2 de AICPA", en: "Processes structured around GDPR, HIPAA and AICPA SOC 2 criteria" },
          ],
          eeuu: { es: "Trabaja para empresas de Europa y América del Norte.", en: "Serves companies in Europe and North America." },
        },
      },
      {
        nombre: "Realidad 360°",
        logo: "img/empresas/realidad-360.png",
        logoFondo: "oscuro",
        provincia: "Ciudad de Buenos Aires",
        sector: { es: "Experiencias inmersivas", en: "Immersive experiences" },
        detalle: {
          es: "Productora de experiencias inmersivas: salas inmersivas, realidad virtual y aumentada, tours virtuales y creaciones con IA.",
          en: "Immersive experience studio: immersive rooms, VR and AR, virtual tours and AI-powered creations.",
        },
        web: "https://realidad360.com.ar",
        ficha: {
          resumen: {
            es: "Productora argentina de experiencias inmersivas que diseña, produce y opera de punta a punta salas inmersivas, realidad virtual y aumentada, tours virtuales, pantallas interactivas y contenidos con IA.",
            en: "Argentine immersive experience studio that designs, produces and runs immersive rooms, virtual and augmented reality, virtual tours, interactive screens and AI-generated content, end to end.",
          },
          servicios: [
            { es: "Salas inmersivas: contenido, proyección, sonido y montaje", en: "Immersive rooms: content, projection, sound and installation" },
            { es: "Cine y documental 360° con sonido inmersivo", en: "360° film and documentary with immersive sound" },
            { es: "Realidad virtual para grupos con sistema propio sincronizado", en: "Group VR with a proprietary synchronized system" },
            { es: "Pantallas interactivas y tótems", en: "Interactive screens and kiosks" },
            { es: "Realidad aumentada y tours virtuales", en: "Augmented reality and virtual tours" },
            { es: "Contenidos personalizados con IA", en: "Personalized AI-generated content" },
          ],
          trayectoria: [
            { es: "13 años en el mercado", en: "13 years in the market" },
            { es: "Obras en más de 25 festivales internacionales, entre ellos Venecia, Sundance, SXSW y Cannes XR", en: "Work shown at 25+ international festivals, including Venice, Sundance, SXSW and Cannes XR" },
            { es: "Premios en GIFF (2018), Virtuality (2018) y Trends (2017)", en: "Awards at GIFF (2018), Virtuality (2018) and Trends (2017)" },
          ],
          eeuu: { es: "En Miami desarrolló el contenido y la supervisión técnica de «Surreal 360: A Salvador Dalí Experience», en Ice Palace Studios, y en Puerto Rico filmó 23 visualizers 360° para Bad Bunny.", en: "In Miami it created the content and technical supervision for “Surreal 360: A Salvador Dalí Experience” at Ice Palace Studios, and in Puerto Rico it filmed 23 360° visualizers for Bad Bunny." },
          clientes: ["FIBA", { es: "CAF – Banco de Desarrollo de América Latina y el Caribe", en: "CAF – Development Bank of Latin America and the Caribbean" }, "Bad Bunny", "CONICET", { es: "Ministerio de Cultura de la Nación", en: "Argentina’s Ministry of Culture" }, "Banco Galicia"],
        },
      },
      {
        nombre: "RH Vision",
        logo: "img/empresas/rh-vision.png",
        provincia: "Córdoba",
        sector: { es: "Talento IT y staff augmentation", en: "IT talent & staff augmentation" },
        detalle: {
          es: "Staff augmentation, outsourcing tecnológico y selección de talento IT en software, IA, automatización, ciberseguridad y robótica.",
          en: "Staff augmentation, tech outsourcing and IT recruiting in software, AI, automation, cybersecurity and robotics.",
        },
        web: "https://www.rhvision.org",
        ficha: {
          resumen: {
            es: "Firma argentina de tecnología y servicios profesionales especializada en diseñar e implementar soluciones de transformación digital, que combina ingeniería de software, inteligencia artificial y talento IT.",
            en: "Argentina-based technology and professional services firm specialized in designing and implementing digital transformation solutions, combining software engineering, artificial intelligence and IT talent.",
          },
          servicios: [
            { es: "Desarrollo de software a medida", en: "Custom software development" },
            { es: "IA y automatización de procesos", en: "AI and process automation" },
            { es: "Ciberseguridad", en: "Cybersecurity" },
            { es: "Robótica aplicada: plataformas autónomas y robots cuadrúpedos", en: "Applied robotics: autonomous platforms and quadruped robots" },
            { es: "Consultoría y transformación digital", en: "Consulting and digital transformation" },
            { es: "Staff augmentation, outsourcing y selección de talento IT", en: "Staff augmentation, outsourcing and IT recruiting" },
          ],
          trayectoria: [
            { es: "Más de 10 años en staff augmentation", en: "10+ years in staff augmentation" },
            { es: "Oficinas en Córdoba y St. Petersburg (Florida)", en: "Offices in Córdoba and St. Petersburg, Florida" },
            { es: "Clientes pymes y grandes empresas en logística, industria, construcción, energías renovables y agroindustria", en: "SME and enterprise clients in logistics, manufacturing, construction, renewable energy and agribusiness" },
          ],
          eeuu: { es: "Con oficina en St. Petersburg (Florida), apunta a alianzas de largo plazo con empresas, integradores tecnológicos e instituciones financieras de EE.UU.", en: "With an office in St. Petersburg, Florida, it seeks long-term partnerships with U.S. companies, technology integrators and financial institutions." },
        },
      },
      {
        nombre: "Tecro",
        logo: "img/empresas/tecro.png",
        provincia: "La Pampa",
        sector: { es: "Pagos y core bancario", en: "Payments & core banking" },
        detalle: {
          es: "Fábrica de software especializada en infraestructura de pagos y core bancario: gateways, procesamiento de tarjetas, settlement, ACH y APIs.",
          en: "Software firm specializing in payments infrastructure and core banking: gateways, card processing, settlement, ACH and APIs.",
        },
        web: "https://www.tecro.dev",
        ficha: {
          resumen: {
            es: "Fábrica de software argentina especializada en infraestructura de pagos y core bancario, que diseña, desarrolla y moderniza plataformas transaccionales críticas para bancos, fintechs, procesadoras de pago y retailers.",
            en: "Argentine software company specialized in payments infrastructure and core banking, designing, building and modernizing mission-critical transaction platforms for banks, fintechs, payment processors and retailers.",
          },
          servicios: [
            { es: "Gateways y procesamiento de pagos", en: "Payment gateways and processing" },
            { es: "Autorización de tarjetas, prepago y gift cards", en: "Card authorization, prepaid and gift cards" },
            { es: "Settlement, ACH y conciliación", en: "Settlement, ACH and reconciliation" },
            { es: "Seguridad PCI: P2PE, tokenización y HSM", en: "PCI security: P2PE, tokenization and HSM" },
            { es: "Pagos para retail y estaciones de servicio", en: "Payments for retail and fuel stations" },
            { es: "APIs sobre core bancario y modernización a microservicios", en: "Core banking APIs and modernization to microservices" },
          ],
          trayectoria: [
            { es: "Más de 15 años de trayectoria", en: "15+ years in the market" },
            { es: "Plataformas de autorización de 400 TPS con store-and-forward", en: "400 TPS authorization platforms with store-and-forward" },
            { es: "Miembro de la Cámara Argentina Fintech", en: "Member of the Argentine Fintech Chamber" },
          ],
          eeuu: { es: "Desarrolló gateways para grandes cadenas de retail de EE.UU. y soluciones para líderes del sector como InComm Payments.", en: "Has built gateways for major U.S. retail chains and solutions for industry leaders such as InComm Payments." },
          clientes: ["InComm Payments"],
        },
      },
      {
        nombre: "TPS",
        logo: "img/empresas/tps.png",
        provincia: "Ciudad de Buenos Aires",
        sector: { es: "Ingeniería de software y fintech", en: "Software engineering & fintech" },
        detalle: {
          es: "35 años en proyectos de software de gran escala, con experiencia en banca, pagos y remesas. Certificada ISO 9001:2015.",
          en: "35 years delivering large-scale software projects, with deep experience in banking, payments and remittances. ISO 9001:2015 certified.",
        },
        web: "https://www.tpssa.com.ar",
        ficha: {
          resumen: {
            es: "Socio de ingeniería nearshore para sistemas de misión crítica, con 35 años en proyectos tecnológicos de gran escala y foco en seguridad, cumplimiento regulatorio, alta disponibilidad y continuidad del negocio.",
            en: "Nearshore engineering partner for mission-critical systems, with 35 years delivering large-scale technology projects and a focus on security, regulatory compliance, high availability and business continuity.",
          },
          servicios: [
            { es: "Plataformas de banca, pagos y remesas", en: "Banking, payments and remittance platforms" },
            { es: "Desarrollo de software de punta a punta", en: "End-to-end software development" },
            { es: "Staff augmentation y equipos ágiles dedicados", en: "Staff augmentation and dedicated agile teams" },
            { es: "QA y automatización de pruebas", en: "QA and test automation" },
            { es: "Integración y modernización de sistemas heredados", en: "Integration and legacy modernization" },
            { es: "Microsoft Dynamics 365, Power Platform y automatización con IA", en: "Microsoft Dynamics 365, Power Platform and AI automation" },
          ],
          trayectoria: [
            { es: "35 años de experiencia", en: "35 years of experience" },
            { es: "Certificada ISO 9001:2015", en: "ISO 9001:2015 certified" },
            { es: "Exporta desde 2001", en: "Exporting since 2001" },
          ],
          eeuu: { es: "Ha desarrollado soluciones para instituciones financieras y empresas de remesas de EE.UU. y Puerto Rico, con equipos bilingües alineados al horario estadounidense.", en: "Has delivered solutions for financial institutions and money transfer companies in the U.S. and Puerto Rico, with bilingual teams aligned to U.S. business hours." },
        },
      },
      {
        nombre: "UNIQS",
        logo: "img/empresas/uniqs.png",
        provincia: "Ciudad de Buenos Aires",
        sector: { es: "Ciberseguridad", en: "Cybersecurity" },
        detalle: {
          es: "Más de 20 años en ciberseguridad y protección de datos, con presencia en Argentina, España y Latinoamérica.",
          en: "20+ years in cybersecurity and data protection, operating in Argentina, Spain and Latin America.",
        },
        web: "https://uniqs.com.ar",
        ficha: {
          resumen: {
            es: "Empresa con más de 20 años en ciberseguridad, protección de datos y servicios de infraestructura IT, con presencia en la Argentina, España y Latinoamérica.",
            en: "Company with 20+ years in cybersecurity, data protection and IT infrastructure services, with a presence in Argentina, Spain and Latin America.",
          },
          servicios: [
            { es: "Seguridad informática y protección de datos", en: "IT security and data protection" },
            { es: "Respaldo, alta disponibilidad y recuperación ante desastres", en: "Backup, high availability and disaster recovery" },
            { es: "Monitoreo de infraestructura", en: "Infrastructure monitoring" },
            { es: "Gestión de riesgos y de proyectos", en: "Risk and project management" },
            { es: "Capacitación y soporte", en: "Training and support" },
            { es: "Desarrollo y outsourcing de software", en: "Software development and outsourcing" },
          ],
          trayectoria: [
            { es: "Más de 20 años en el mercado", en: "20+ years in the market" },
            { es: "Certificaciones de fabricantes: Dell, HP y Veeam", en: "Vendor certifications: Dell, HP and Veeam" },
            { es: "Miembro del Córdoba Technology Cluster", en: "Member of the Córdoba Technology Cluster" },
          ],
        },
      },
      {
        nombre: "Wootic",
        logo: "img/empresas/wootic.png",
        provincia: "Córdoba",
        sector: { es: "Tecnología, negocio y datos", en: "Technology, business & data" },
        detalle: {
          es: "Diseña, valida y construye soluciones que integran tecnología, negocio, datos y estructuración legal y financiera.",
          en: "Designs, validates and builds solutions that bring together technology, business, data and legal-financial structuring.",
        },
        web: "https://www.wootic.co",
        ficha: {
          resumen: {
            es: "Empresa argentina de tecnología e innovación que acompaña a organizaciones desde la identificación de oportunidades hasta el diseño, el desarrollo y la implementación de soluciones, integrando tecnología, negocio, datos y estructuración legal y financiera.",
            en: "Argentine technology and innovation company that supports organizations from opportunity identification through solution design, development and implementation, bringing together technology, business, data and legal-financial structuring.",
          },
          servicios: [
            { es: "Diseño de negocio y de producto", en: "Business and product design" },
            { es: "Estructuración legal y financiera", en: "Legal and financial structuring" },
            { es: "Datos y analítica", en: "Data and analytics" },
            { es: "Software a medida", en: "Custom software" },
            { es: "Inteligencia artificial y automatización", en: "Artificial intelligence and automation" },
            { es: "Cloud e integraciones", en: "Cloud and integrations" },
          ],
          trayectoria: [
            { es: "Más de 80 clientes", en: "80+ clients" },
            { es: "Más de 150 proyectos entregados", en: "150+ projects delivered" },
            { es: "Más de 60 integrantes", en: "60+ team members" },
          ],
          eeuu: { es: "Ha trabajado con organizaciones estadounidenses como John Deere, AmeriCorps y Housing Navigator Massachusetts.", en: "Has worked with U.S. organizations such as John Deere, AmeriCorps and Housing Navigator Massachusetts." },
          clientes: [{ es: "Gobierno de la Provincia de Córdoba", en: "Government of the Province of Córdoba" }, "John Deere", "SanCor", "Ledesma", { es: "Universidad de Buenos Aires", en: "University of Buenos Aires" }, "AmeriCorps"],
        },
      },
    ],
    anfitriones: [],
    reuniones: [],
    organizadores: [
      {
        nombre: { es: "Consulado General de la República Argentina en Atlanta", en: "Consulate General of Argentina in Atlanta" },
        logo: { es: "img/organizadores/consulado-es.png", en: "img/organizadores/consulado-en.png" },
        logoOscuro: { es: "img/organizadores/consulado-es-oscuro.png", en: "img/organizadores/consulado-en-oscuro.png" },
      },
      {
        nombre: { es: "Cancillería Argentina · DNTEC", en: "Argentine Ministry of Foreign Affairs · DNTEC" },
        logo: { es: "img/organizadores/cancilleria-es.png", en: "img/organizadores/cancilleria-en.png" },
        logoOscuro: { es: "img/organizadores/cancilleria-es-oscuro.png", en: "img/organizadores/cancilleria-en-oscuro.png" },
      },
    ],
    resultados: [],
    galeria: [],
    prensa: [
      {
        titulo: "Misión Comercial de Software y Tecnología a Estados Unidos",
        medio: "Argentina TradeNet · Cancillería",
        url: "https://www.cancilleria.gob.ar/es/argentinatradenet/noticias/mision-comercial-de-software-y-tecnologia-estados-unidos",
        idioma: "es",
      },
    ],
  },

  // ─────────────────────────────── 2025 ───────────────────────────────
  {
    id: "2025",
    estado: "realizada",
    titulo: {
      es: "South Meets South 2025 · Misión de Software y Tecnología a Atlanta",
      en: "South Meets South 2025 · Argentine Software & Technology Mission to Atlanta",
    },
    inicio: "2025-11-17",
    fin: "2025-11-18",
    otrasEtapas: [{ ciudad: "Austin" }],
    empresas: 13,
    resumen: {
      es: "Encabezada por el Embajador argentino en los Estados Unidos, Alec Oxenford, la misión llevó a 13 empresas argentinas de tecnología a Atlanta para más de 100 reuniones de negocios, un reverse pitch con grandes corporaciones y networking con la comunidad de innovación local. Con el apoyo de TAG, FinTech Atlanta, Frazier & Deeter y otros socios locales, el programa sumó visitas a Atlanta Tech Village y Delta TechOps, y degustaciones de vino argentino.",
      en: "Led by Argentina’s Ambassador to the United States, Alec Oxenford, the mission brought 13 Argentine technology companies to Atlanta for more than 100 business meetings, a corporate reverse pitch and networking with the local innovation community. Supported by TAG, FinTech Atlanta, Frazier & Deeter and other local partners, the program included visits to Atlanta Tech Village and Delta TechOps, paired with Argentine wine tastings.",
    },
    cifras: [
      { valor: "13", texto: { es: "empresas argentinas", en: "Argentine companies" } },
      { valor: "+100", texto: { es: "reuniones de negocios", en: "business meetings" } },
      { valor: "4", texto: { es: "corporaciones en el reverse pitch", en: "corporations at the reverse pitch" } },
    ],
    sectores: [
      { es: "Inteligencia artificial", en: "Artificial intelligence" },
      "HealthTech",
      "Fintech",
      "IoT",
      { es: "Realidad extendida", en: "Extended reality" },
      { es: "Talento y staff augmentation", en: "Talent & staff augmentation" },
      { es: "Software a medida", en: "Custom software" },
    ],
    agenda: [
      {
        fecha: "2025-11-17",
        hora: "10:00–11:00",
        titulo: { es: "Pitch practice", en: "Pitch practice" },
        detalle: {
          es: "Sesión práctica con especialistas para afinar la presentación ante clientes e inversores.",
          en: "Hands-on session with experts to sharpen pitches for clients and investors.",
        },
        lugar: "Atlanta Tech Village · Buckhead",
      },
      {
        fecha: "2025-11-17",
        hora: "11:00–12:00",
        titulo: { es: "Mesa con inversores", en: "Investors roundtable" },
        detalle: {
          es: "Conversación moderada por John Yates (Gunderson Dettmer) con inversores de Valor Ventures, Laerdal Million Lives Fund, Tech Square Ventures, Knoll Ventures y Circadian Ventures sobre inversión y captación de fondos en EE.UU.",
          en: "Conversation moderated by John Yates (Gunderson Dettmer) with investors from Valor Ventures, Laerdal Million Lives Fund, Tech Square Ventures, Knoll Ventures and Circadian Ventures on investment and fundraising in the U.S.",
        },
        lugar: "Atlanta Tech Village · Buckhead",
      },
      {
        fecha: "2025-11-17",
        hora: "12:00–13:00",
        titulo: { es: "Almuerzo de trabajo y networking", en: "Working lunch & networking" },
        detalle: {
          es: "Encuentro informal con miembros de la comunidad tecnológica de Atlanta.",
          en: "Informal lunch with members of Atlanta’s tech community.",
        },
        lugar: "Atlanta Tech Village · Buckhead",
      },
      {
        fecha: "2025-11-17",
        hora: "14:00–15:00",
        titulo: { es: "Keynote del Embajador y fireside chat con Larry K. Williams", en: "Ambassador keynote and fireside chat with Larry K. Williams" },
        detalle: {
          es: "Palabras de apertura de TAG y de la Cónsul General, keynote del Embajador Alec Oxenford, conversación con Larry K. Williams (presidente y CEO de TAG) y presentación de la delegación.",
          en: "Opening remarks by TAG and the Consul General, keynote by Ambassador Alec Oxenford, fireside chat with Larry K. Williams (TAG President & CEO) and a brief presentation by the delegation.",
        },
        lugar: "1200 Peachtree St NE · Midtown",
      },
      {
        fecha: "2025-11-17",
        hora: "15:00–17:00",
        titulo: { es: "Speed meetings B2B y degustación de vinos argentinos", en: "B2B speed meetings and Argentine wine tasting" },
        detalle: {
          es: "Rondas de negocios con miembros de TAG y empresas locales.",
          en: "Business meetings with TAG members and local companies.",
        },
        lugar: "1200 Peachtree St NE · Midtown",
      },
      {
        fecha: "2025-11-17",
        hora: "18:00–20:00",
        titulo: { es: "Recepción de networking con el Embajador", en: "Networking reception with the Ambassador" },
        detalle: {
          es: "Recepción con toda la delegación, el Embajador e invitados especiales.",
          en: "Reception with the full delegation, the Ambassador and special guests.",
        },
        lugar: "Woodruff Arts Center · Midtown",
      },
      {
        fecha: "2025-11-18",
        hora: "9:00–11:30",
        titulo: { es: "Reverse pitch con grandes corporaciones", en: "Corporate reverse pitch" },
        detalle: {
          es: "Líderes de tecnología de UPS, Kimberly-Clark, CONA Services y Mercedes-Benz USA presentaron sus necesidades, desafíos y modos de contratación.",
          en: "Technology leaders from UPS, Kimberly-Clark, CONA Services and Mercedes-Benz USA shared their needs, challenges and procurement models.",
        },
        lugar: "Burr & Forman · 1075 Peachtree St NE, Midtown",
      },
      {
        fecha: "2025-11-18",
        hora: "12:00–13:30",
        titulo: { es: "Almuerzo de networking con NXTMoves y FinTech Atlanta", en: "Networking lunch with NXTMoves and FinTech Atlanta" },
        lugar: "NXTMoves · 2827 Peachtree Rd NE",
      },
      {
        fecha: "2025-11-18",
        hora: "15:00–17:00",
        titulo: { es: "Visita a Delta TechOps", en: "Visit to Delta TechOps" },
        detalle: {
          es: "Recorrido por Tech Ops y conversación con líderes de tecnología de la aerolínea con sede en Atlanta.",
          en: "Tour of Tech Ops and conversation with technology leaders at the Atlanta-based airline.",
        },
        lugar: "Delta Air Lines",
      },
    ],
    delegacion: [
      {
        nombre: "Borderless Software",
        logo: "img/empresas/borderless-software.png",
        sector: { es: "Software y consultoría IT", en: "Software & IT consulting" },
        detalle: {
          es: "Desarrollo de software y consultoría IT con oficinas en EE.UU. y Argentina: soluciones a medida, servicios gestionados y staff augmentation.",
          en: "Software development and IT consulting with offices in the U.S. and Argentina: tailor-made solutions, managed services and staff augmentation.",
        },
        web: "https://www.borderless-software.com",
      },
      {
        nombre: "Code First Lab",
        logo: "img/empresas/code-first-lab.png",
        sector: { es: "Software a medida e IA", en: "Custom software & AI" },
        detalle: {
          es: "Software a medida, equipos dedicados, IoT, MVPs y soluciones de IA generativa.",
          en: "Custom software, dedicated teams, IoT, rapid MVPs and generative AI solutions.",
        },
        web: "https://www.codefirstlab.com",
      },
      {
        nombre: "Darwoft",
        logo: "img/empresas/darwoft.png",
        sector: { es: "Software para salud", en: "Healthcare software" },
        detalle: {
          es: "Equipo nearshore especializado en soluciones para el sector salud, alineadas con HIPAA y HITRUST.",
          en: "Nearshore team specialized in healthcare solutions, aligned with HIPAA and HITRUST.",
        },
        web: "https://www.darwoft.com",
      },
      {
        nombre: "Eureka Labs",
        logo: "img/empresas/eureka-labs.png",
        sector: { es: "Talento tech e IA", en: "Tech talent & AI" },
        detalle: {
          es: "Talento tech, equipos integrados y soluciones de IA a medida para equipos de tecnología de todas las industrias.",
          en: "Top-tier tech talent, integrated teams and tailored AI solutions for tech teams across industries.",
        },
      },
      {
        nombre: "GOSYS Global",
        logo: "img/empresas/gosys-global.png",
        sector: { es: "IA para finanzas corporativas", en: "AI for corporate finance" },
        detalle: {
          es: "Planificación integrada de negocios para CFOs de grandes empresas con AITANA, su socio financiero basado en IA.",
          en: "Integrated business planning for enterprise CFOs with AITANA, its AI-based financial business partner.",
        },
      },
      {
        nombre: "I+DIoT Lab",
        logo: "img/empresas/id-iot-lab.png",
        sector: { es: "Retail tech e IoT", en: "Retail tech & IoT" },
        detalle: {
          es: "Software, hardware e IoT para digitalizar el retail físico y la industria gastronómica.",
          en: "Software, hardware and IoT to digitize physical retail and food service.",
        },
        web: "https://www.idiotlab.io",
      },
      {
        nombre: "Immersive Global Solutions (IGS)",
        logo: "img/empresas/immersive-global-solutions.png",
        sector: { es: "IA y realidad extendida", en: "AI & extended reality" },
        detalle: {
          es: "IA (visión por computadora, NLP, IA generativa) y realidad extendida para la industria y la capacitación, con sede en Atlanta.",
          en: "AI (computer vision, NLP, generative AI) and extended reality for manufacturing and training, headquartered in Atlanta.",
        },
        web: "https://www.igs.com.ar",
      },
      {
        nombre: "Nybble Group",
        logo: "img/empresas/nybble-group.png",
        sector: { es: "Automatización inteligente", en: "Intelligent automation" },
        detalle: {
          es: "Consultora tecnológica con software a medida y automatización inteligente (BPA, RPA, IA) para fintech, seguros, e-commerce e industria.",
          en: "Technology consultancy offering custom software and intelligent automation (BPA, RPA, AI) for fintech, insurance, e-commerce and manufacturing.",
        },
        web: "https://www.nybblegroup.com",
      },
      {
        nombre: "Quadion Technologies",
        logo: "img/empresas/quadion-technologies.png",
        sector: { es: "Software a medida", en: "Custom software development" },
        detalle: {
          es: "Desarrollo ágil de software con más de 20 años de trayectoria en gobierno, salud, finanzas y medios.",
          en: "Agile software development with 20+ years serving government, healthcare, finance and media.",
        },
        web: "https://www.quadiontech.com",
      },
      {
        nombre: "RD IT",
        logo: "img/empresas/rd-it.png",
        sector: { es: "Consultoría IT y SaaS", en: "IT consulting & SaaS" },
        detalle: {
          es: "Consultoría estratégica de IT y HOLO, su plataforma SaaS para la gestión de proveedores y gastos de IT.",
          en: "Strategic IT consulting and HOLO, its SaaS platform for vendor management and IT expense control.",
        },
      },
      {
        nombre: "Rooftop",
        logo: "img/empresas/rooftop.png",
        sector: { es: "Talento tech", en: "Tech talent" },
        detalle: {
          es: "Conecta empresas con desarrolladores de Latinoamérica mediante un sistema de evaluación con IA y personas.",
          en: "Connects businesses with top Latin American developers through an AI- and human-powered vetting system.",
        },
      },
      {
        nombre: "The Flock",
        logo: "img/empresas/the-flock.png",
        sector: { es: "Equipos de software gestionados", en: "Managed software teams" },
        detalle: {
          es: "Equipos de software gestionados y talento on-demand, con una red de más de 13.000 profesionales.",
          en: "Managed software teams and on-demand talent, backed by a network of 13,000+ professionals.",
        },
      },
      {
        nombre: "Wootic",
        logo: "img/empresas/wootic.png",
        sector: { es: "Software y plataformas digitales", en: "Software & digital platforms" },
        detalle: {
          es: "Más de 15 años desarrollando software a medida y plataformas digitales.",
          en: "15+ years developing custom software and digital platforms.",
        },
        web: "https://www.wootic.co",
      },
    ],
    anfitriones: [
      {
        nombre: "Technology Association of Georgia (TAG)",
        tipo: "asociacion",
        detalle: {
          es: "Coorganizó el keynote, el fireside chat y las rondas B2B; su International Business Society fue coanfitriona.",
          en: "Co-hosted the keynote, fireside chat and B2B meetings; its International Business Society co-hosted the program.",
        },
        web: "https://www.tagonline.org",
      },
      {
        nombre: "Frazier & Deeter",
        tipo: "empresa",
        detalle: { es: "Coanfitriona junto con TAG International Business.", en: "Co-host together with TAG International Business." },
        web: "https://www.frazierdeeter.com",
      },
      {
        nombre: "Atlanta Tech Village",
        tipo: "hub",
        detalle: {
          es: "Sede del pitch practice, la mesa con inversores y el almuerzo de networking.",
          en: "Hosted the pitch practice, investors roundtable and networking lunch.",
        },
        web: "https://atlantatechvillage.com",
      },
      {
        nombre: "Burr & Forman",
        tipo: "empresa",
        detalle: { es: "Sede del reverse pitch.", en: "Hosted the reverse pitch." },
        web: "https://www.burr.com",
      },
      {
        nombre: "Gunderson Dettmer",
        tipo: "empresa",
        detalle: { es: "Coorganizó la mesa con inversores.", en: "Co-organized the investors roundtable." },
        web: "https://www.gunder.com",
      },
      {
        nombre: "FinTech Atlanta",
        tipo: "asociacion",
        detalle: { es: "Coanfitriona del almuerzo de networking.", en: "Co-hosted the networking lunch." },
        web: "https://fintechatlanta.org",
      },
      {
        nombre: "NXTMoves",
        tipo: "empresa",
        detalle: { es: "Recibió el almuerzo de networking en sus oficinas.", en: "Hosted the networking lunch at its offices." },
        web: "https://nxtmoves.io",
      },
      {
        nombre: "Delta Air Lines",
        tipo: "empresa",
        detalle: { es: "Recibió a la delegación en Delta TechOps.", en: "Hosted the delegation at Delta TechOps." },
        web: "https://www.delta.com",
      },
    ],
    reuniones: [
      { nombre: "Larry K. Williams", cargo: { es: "Presidente y CEO", en: "President & CEO" }, organizacion: "Technology Association of Georgia (TAG)" },
      { nombre: "Brian Holloway", cargo: { es: "Principal", en: "Principal" }, organizacion: "Frazier & Deeter · TAG International Business" },
      { nombre: "John Yates", cargo: { es: "Moderador de la mesa con inversores", en: "Investors roundtable moderator" }, organizacion: "Gunderson Dettmer" },
      { nombre: "Lisa Calhoun", organizacion: "Valor Ventures" },
      { nombre: "Becca Shmukler", organizacion: "Laerdal Million Lives Fund" },
      { nombre: "Scott Lopano", organizacion: "Tech Square Ventures" },
      { nombre: "Andrew Dorman", organizacion: "Knoll Ventures" },
      { nombre: "Steve Hasty", organizacion: "Circadian Ventures" },
    ],
    organizadores: [
      {
        nombre: { es: "Consulado General de la República Argentina en Atlanta", en: "Consulate General of Argentina in Atlanta" },
        logo: { es: "img/organizadores/consulado-es.png", en: "img/organizadores/consulado-en.png" },
        logoOscuro: { es: "img/organizadores/consulado-es-oscuro.png", en: "img/organizadores/consulado-en-oscuro.png" },
      },
      {
        nombre: { es: "Embajada de la República Argentina en los Estados Unidos", en: "Embassy of Argentina in the United States" },
        logo: { es: "img/organizadores/embajada-es.png", en: "img/organizadores/embajada-en.png" },
        logoOscuro: { es: "img/organizadores/embajada-es-oscuro.png", en: "img/organizadores/embajada-en-oscuro.png" },
      },
      {
        nombre: { es: "Cancillería Argentina", en: "Argentine Ministry of Foreign Affairs" },
        logo: { es: "img/organizadores/cancilleria-es.png", en: "img/organizadores/cancilleria-en.png" },
        logoOscuro: { es: "img/organizadores/cancilleria-es-oscuro.png", en: "img/organizadores/cancilleria-en-oscuro.png" },
      },
    ],
    resultados: [
      { es: "Más de 100 reuniones de negocios entre la delegación y empresas de Atlanta.", en: "More than 100 business meetings between the delegation and Atlanta companies." },
      { es: "Reverse pitch con UPS, Kimberly-Clark, CONA Services y Mercedes-Benz USA.", en: "Reverse pitch with UPS, Kimberly-Clark, CONA Services and Mercedes-Benz USA." },
      { es: "Cobertura en Atlanta Business Chronicle, Global Atlanta y La Nación.", en: "Coverage in the Atlanta Business Chronicle, Global Atlanta and La Nación." },
    ],
    galeriaCredito: { es: "Consulado General de la República Argentina en Atlanta", en: "Consulate General of the Argentine Republic in Atlanta" },
    galeria: [
      {
        titulo: { es: "La delegación", en: "The delegation" },
        fotos: [
          { src: "img/ediciones/2025/delegacion-embajador.jpg", mini: "img/ediciones/2025/delegacion-embajador-mini.jpg", alt: { es: "La delegación argentina junto al Embajador frente al cartel de Argentine Software + Tech Atlanta 2025.", en: "The Argentine delegation with the Ambassador in front of the Argentine Software + Tech Atlanta 2025 banner." } },
          { src: "img/ediciones/2025/delegacion.jpg", mini: "img/ediciones/2025/delegacion-mini.jpg", alt: { es: "Foto grupal de la delegación argentina en Atlanta.", en: "Group photo of the Argentine delegation in Atlanta." } },
        ],
      },
      {
        titulo: { es: "Pitch practice", en: "Pitch practice" },
        fotos: [
          { src: "img/ediciones/2025/pitch-practice.jpg", mini: "img/ediciones/2025/pitch-practice-mini.jpg", alt: { es: "Una presentación durante el pitch practice.", en: "A presentation during the pitch practice session." } },
        ],
      },
      {
        titulo: { es: "Mesa con inversores", en: "Investors roundtable" },
        fotos: [
          { src: "img/ediciones/2025/mesa-inversores.jpg", mini: "img/ediciones/2025/mesa-inversores-mini.jpg", alt: { es: "Inversores de Atlanta conversan con la delegación en la mesa con inversores.", en: "Atlanta investors speak with the delegation at the investors roundtable." } },
        ],
      },
      {
        titulo: { es: "Keynote del Embajador y fireside chat con Larry K. Williams", en: "Ambassador keynote and fireside chat with Larry K. Williams" },
        fotos: [
          { src: "img/ediciones/2025/keynote-embajador.jpg", mini: "img/ediciones/2025/keynote-embajador-mini.jpg", alt: { es: "El Embajador durante su keynote.", en: "The Ambassador delivering the keynote." } },
          { src: "img/ediciones/2025/fireside-chat.jpg", mini: "img/ediciones/2025/fireside-chat-mini.jpg", alt: { es: "El fireside chat con Larry K. Williams, presidente y CEO de TAG.", en: "The fireside chat with Larry K. Williams, TAG President & CEO." } },
          { src: "img/ediciones/2025/fireside-chat-publico.jpg", mini: "img/ediciones/2025/fireside-chat-publico-mini.jpg", alt: { es: "El público durante el fireside chat.", en: "The audience during the fireside chat." } },
        ],
      },
      {
        titulo: { es: "Speed meetings B2B y degustación de vinos argentinos", en: "B2B speed meetings and Argentine wine tasting" },
        fotos: [
          { src: "img/ediciones/2025/b2b-1.jpg", mini: "img/ediciones/2025/b2b-1-mini.jpg", alt: { es: "Reuniones B2B entre empresas argentinas y de Atlanta.", en: "B2B meetings between Argentine and Atlanta companies." } },
          { src: "img/ediciones/2025/b2b-2.jpg", mini: "img/ediciones/2025/b2b-2-mini.jpg", alt: { es: "Speed meetings B2B con degustación de vinos argentinos.", en: "B2B speed meetings with an Argentine wine tasting." } },
        ],
      },
      {
        titulo: { es: "Recepción de networking con el Embajador", en: "Networking reception with the Ambassador" },
        fotos: [
          { src: "img/ediciones/2025/recepcion-embajador.jpg", mini: "img/ediciones/2025/recepcion-embajador-mini.jpg", alt: { es: "El Embajador habla en la recepción de networking.", en: "The Ambassador speaks at the networking reception." } },
        ],
      },
      {
        titulo: { es: "Reverse pitch con grandes corporaciones", en: "Corporate reverse pitch" },
        fotos: [
          { src: "img/ediciones/2025/reverse-pitch-1.jpg", mini: "img/ediciones/2025/reverse-pitch-1-mini.jpg", alt: { es: "Panel del reverse pitch con grandes corporaciones de Atlanta.", en: "Reverse pitch panel with major Atlanta corporations." } },
          { src: "img/ediciones/2025/reverse-pitch-2.jpg", mini: "img/ediciones/2025/reverse-pitch-2-mini.jpg", alt: { es: "Los panelistas del reverse pitch frente a la delegación.", en: "Reverse pitch panelists addressing the delegation." } },
          { src: "img/ediciones/2025/reverse-pitch-3.jpg", mini: "img/ediciones/2025/reverse-pitch-3-mini.jpg", alt: { es: "La delegación sigue el primer panel del reverse pitch.", en: "The delegation follows the first reverse pitch panel." } },
          { src: "img/ediciones/2025/reverse-pitch-grupo.jpg", mini: "img/ediciones/2025/reverse-pitch-grupo-mini.jpg", alt: { es: "Foto grupal en el reverse pitch.", en: "Group photo at the reverse pitch." } },
        ],
      },
      {
        titulo: { es: "Almuerzo de networking con NXTMoves y FinTech Atlanta", en: "Networking lunch with NXTMoves and FinTech Atlanta" },
        fotos: [
          { src: "img/ediciones/2025/almuerzo-nxtmoves-1.jpg", mini: "img/ediciones/2025/almuerzo-nxtmoves-1-mini.jpg", alt: { es: "Presentaciones en el almuerzo de networking con NXTMoves y FinTech Atlanta.", en: "Presentations at the networking lunch with NXTMoves and FinTech Atlanta." } },
          { src: "img/ediciones/2025/almuerzo-nxtmoves-2.jpg", mini: "img/ediciones/2025/almuerzo-nxtmoves-2-mini.jpg", alt: { es: "Conversaciones durante el almuerzo de networking.", en: "Conversations during the networking lunch." } },
          { src: "img/ediciones/2025/almuerzo-nxtmoves-3.jpg", mini: "img/ediciones/2025/almuerzo-nxtmoves-3-mini.jpg", alt: { es: "Participantes del almuerzo de networking.", en: "Participants at the networking lunch." } },
        ],
      },
      {
        titulo: { es: "Visita a Delta TechOps", en: "Visit to Delta TechOps" },
        fotos: [
          { src: "img/ediciones/2025/delta-techops-1.jpg", mini: "img/ediciones/2025/delta-techops-1-mini.jpg", alt: { es: "La delegación junto a un motor de avión en Delta TechOps.", en: "The delegation next to an aircraft engine at Delta TechOps." } },
          { src: "img/ediciones/2025/delta-techops-2.jpg", mini: "img/ediciones/2025/delta-techops-2-mini.jpg", alt: { es: "Foto grupal en el taller de motores de Delta TechOps.", en: "Group photo at the Delta TechOps engine shop." } },
          { src: "img/ediciones/2025/delta-techops-hangar.jpg", mini: "img/ediciones/2025/delta-techops-hangar-mini.jpg", alt: { es: "Un hangar de Delta TechOps.", en: "A Delta TechOps hangar." } },
        ],
      },
    ],
    prensa: [
      {
        titulo: "Argentine software firms explore Atlanta partnerships",
        medio: "Atlanta Business Chronicle",
        url: "https://www.bizjournals.com/atlanta/news/2025/11/25/argentina-economic-trade-fintech-atlanta-partners.html",
        fecha: "2025-11-25",
        idioma: "en",
      },
      {
        titulo: "Ambassador: How Argentina’s Tech Sector Aligns With Atlanta at an Opportune Moment",
        medio: "Global Atlanta",
        url: "https://www.globalatlanta.com/ambassador-how-argentinas-tech-sector-aligns-with-atlanta-at-an-opportune-moment/",
        fecha: "2025-11-21",
        idioma: "en",
      },
      {
        titulo: "La economía del conocimiento argentina se impulsa en Estados Unidos",
        medio: "Cancillería Argentina",
        url: "https://www.cancilleria.gob.ar/es/actualidad/noticias/la-economia-del-conocimiento-argentina-se-impulsa-en-estados-unidos-mision",
        fecha: "2025-11-21",
        idioma: "es",
      },
      {
        titulo: "El Gobierno avanza con su estrategia en EE.UU. para reforzar vínculos con empresas tecnológicas y atraer inversiones",
        medio: "La Nación",
        url: "https://www.lanacion.com.ar/estados-unidos/el-gobierno-avanza-con-su-estrategia-en-eeuu-para-reforzar-vinculos-con-empresas-tecnologicas-y-nid17112025/",
        fecha: "2025-11-17",
        idioma: "es",
      },
      {
        titulo: "Rooftop, la startup cordobesa que se destacó en la misión comercial de software y tecnología en EE.UU.",
        medio: "Radiocanal",
        url: "https://www.radiocanal.com.ar/noticia/rooftop-la-startup-cordobesa-que-se-destaco-en-la-mision-comercial-de-software-y-tecnologia-en-eeuu-178898",
        fecha: "2025-11-28",
        idioma: "es",
      },
      {
        titulo: "Argentina Tech Delegation · South Meets South",
        medio: "TheSharedWorld",
        url: "https://thesharedworld.com/argentina-tech-delegation-south-meets-south/",
        fecha: "2025-11-21",
        idioma: "en",
      },
      {
        titulo: "Argentina Tech Delegation: Meet 16 Companies and an Ambassador Who Breeds Unicorns",
        medio: "Global Atlanta",
        url: "https://www.globalatlanta.com/argentina-tech-delegation-meet-16-companies-and-an-ambassador-who-breeds-unicorns/",
        fecha: "2025-11-12",
        idioma: "en",
      },
      {
        titulo: "Argentina Tech Delegation in Atlanta 2025",
        medio: "Hypepotamus",
        url: "https://hypepotamus.com/startup-news/argentina-tech-delegation-in-atlanta-2025/",
        fecha: "2025-11-13",
        idioma: "en",
      },
      {
        titulo: "TAG International Business & Frazier & Deeter: highlights",
        medio: "LinkedIn · Brian Holloway",
        url: "https://www.linkedin.com/posts/brian-holloway-354a7a1_frazierdeeter-tag-taginternationalbusiness-activity-7397674151743930368-Cb4y",
        idioma: "en",
      },
      {
        titulo: "Ambassador Alec Oxenford’s visit to Atlanta and South Meets South",
        medio: "LinkedIn · Alana Lomónaco Busto",
        url: "https://www.linkedin.com/posts/alana-lomonaco-busto_it-was-an-honor-to-welcome-ambassador-alec-activity-7401693360945545216-dX1A",
        idioma: "en",
      },
    ],
  },

  // ─────────────────────────────── 2024 ───────────────────────────────
  {
    id: "2024",
    estado: "realizada",
    titulo: {
      es: "Misión Tecnológica de Software «Ecosistema 360°» a Atlanta",
      en: "“Ecosystem 360°” Software Technology Mission to Atlanta",
    },
    inicio: "2024-04-15",
    fin: "2024-04-16",
    otrasEtapas: [{ ciudad: "Miami", nota: { es: "eMerge Americas 2024", en: "eMerge Americas 2024" } }],
    empresas: 13,
    resumen: {
      es: "Organizada por el Consulado General en Atlanta junto con la DNTEC de la Cancillería, en la antesala de eMerge Americas 2024 en Miami, la misión ofreció a la delegación una visión de 360° del ecosistema tecnológico de Metro Atlanta: Georgia Tech y su incubadora ATDC, la Metro Atlanta Chamber, la Cámara de Comercio Argentino-Americana del Sudeste, Atlanta Tech Village y la Technology Association of Georgia, además de encuentros con líderes de grandes corporaciones de la región.",
      en: "Organized by the Consulate General in Atlanta with the Foreign Ministry’s DNTEC, ahead of eMerge Americas 2024 in Miami, the mission gave the delegation a 360° view of Metro Atlanta’s tech ecosystem: Georgia Tech and its ATDC incubator, the Metro Atlanta Chamber, the Argentine American Chamber of Commerce Southeast, Atlanta Tech Village and the Technology Association of Georgia, plus conversations with leaders from major corporations in the region.",
    },
    cifras: [
      { valor: "13", texto: { es: "empresas e instituciones argentinas", en: "Argentine companies and organizations" } },
      { valor: "2", texto: { es: "jornadas de agenda en Atlanta", en: "days in Atlanta" } },
      { valor: "+10", texto: { es: "organizaciones de Atlanta", en: "Atlanta organizations" } },
    ],
    sectores: [
      "Fintech",
      "HealthTech",
      { es: "Ciberseguridad", en: "Cybersecurity" },
      { es: "Inteligencia artificial", en: "Artificial intelligence" },
      "Blockchain",
      "ClimateTech",
      { es: "Realidad aumentada y virtual", en: "AR / VR" },
      { es: "Software a medida", en: "Custom software" },
    ],
    agenda: [
      {
        fecha: "2024-04-15",
        hora: "10:40",
        titulo: { es: "Georgia Tech Enterprise Innovation Institute", en: "Georgia Tech Enterprise Innovation Institute" },
        detalle: {
          es: "Presentación del Enterprise Innovation Institute y del programa Soft Landings de Georgia Tech.",
          en: "Overview of the Enterprise Innovation Institute and Georgia Tech’s Soft Landings program.",
        },
        lugar: "75 5th St NW · Tech Square",
      },
      {
        fecha: "2024-04-15",
        hora: "11:00",
        titulo: { es: "Advanced Technology Development Center (ATDC)", en: "Advanced Technology Development Center (ATDC)" },
        detalle: {
          es: "Presentación y preguntas y respuestas con el equipo de la incubadora de Georgia Tech, seguidas de un almuerzo en el Georgia Tech Hotel and Conference Center.",
          en: "Presentation and Q&A with Georgia Tech’s incubator team, followed by lunch at the Georgia Tech Hotel and Conference Center.",
        },
        lugar: "75 5th St NW · Tech Square",
      },
      {
        fecha: "2024-04-15",
        hora: "14:00–16:00",
        titulo: { es: "Metro Atlanta Chamber: doing business y mesa redonda", en: "Metro Atlanta Chamber: doing business and roundtable" },
        detalle: {
          es: "Introducción a los negocios en Metro Atlanta con la MAC, Invest Atlanta y el Georgia Department of Economic Development, y mesa redonda con Chick-fil-A, Carter’s, Capgemini, la Georgia Game Developers Association y Web3 ATL.",
          en: "Introduction to doing business in Metro Atlanta with the MAC, Invest Atlanta and the Georgia Department of Economic Development, and a roundtable with Chick-fil-A, Carter’s, Capgemini, the Georgia Game Developers Association and Web3 ATL.",
        },
        lugar: "191 Peachtree Tower · Downtown",
      },
      {
        fecha: "2024-04-15",
        hora: "17:30–19:30",
        titulo: { es: "Argentine Tech & Wine: recepción de networking", en: "Argentine Tech & Wine networking reception" },
        detalle: {
          es: "Recepción ofrecida por la Cónsul General Alana Lomónaco Busto, con palabras de Donnie Beamer (asesor senior de Tecnología de la Ciudad de Atlanta) y Larry K. Williams (TAG).",
          en: "Reception hosted by Consul General Alana Lomónaco Busto, with remarks by Donnie Beamer (City of Atlanta Senior Technology Advisor) and Larry K. Williams (TAG).",
        },
        lugar: "Buckhead Club · 3344 Peachtree Rd NE",
      },
      {
        fecha: "2024-04-16",
        hora: "9:30–10:45",
        titulo: { es: "Encuentro con la Argentine American Chamber of Commerce Southeast", en: "Meeting with the Argentine American Chamber of Commerce Southeast" },
        detalle: {
          es: "Recomendaciones de la Cámara sobre cómo hacer negocios en el Sudeste de EE.UU. y networking.",
          en: "The Chamber’s insights on doing business in the U.S. Southeast, plus networking.",
        },
        lugar: { es: "Consulado General en Atlanta", en: "Consulate General in Atlanta" },
      },
      {
        fecha: "2024-04-16",
        hora: "11:00–12:00",
        titulo: { es: "Panel «El ecosistema de negocios en Atlanta, con foco en el mundo corporativo»", en: "Panel: “Atlanta’s business ecosystem, with a corporate focus”" },
        detalle: {
          es: "Ejecutivos argentinos de Equifax, Kimberly-Clark y Coca-Cola North America compartieron su visión sobre el sector IT en la región y cómo insertarse.",
          en: "Argentine executives from Equifax, Kimberly-Clark and Coca-Cola North America shared their views on the region’s IT sector and how to break in.",
        },
        lugar: { es: "Consulado General en Atlanta", en: "Consulate General in Atlanta" },
      },
      {
        fecha: "2024-04-16",
        hora: "14:00–16:00",
        titulo: { es: "Atlanta Tech Village", en: "Atlanta Tech Village" },
        detalle: {
          es: "Recorrida por el hub, sesión con startups de la comunidad (Puzzle, WORKOPTI y EZ Innovation), degustación de vino argentino y networking.",
          en: "Tour of the hub, session with community startups (Puzzle, WORKOPTI and EZ Innovation), Argentine wine tasting and networking.",
        },
        lugar: "3423 Piedmont Rd NE · Buckhead",
      },
      {
        fecha: "2024-04-16",
        hora: "17:00–18:00",
        titulo: { es: "Networking con la Technology Association of Georgia", en: "Networking with the Technology Association of Georgia" },
        detalle: {
          es: "Presentaciones de la delegación y de TAG, con degustación de vino argentino.",
          en: "Presentations by the delegation and TAG, with an Argentine wine tasting.",
        },
        lugar: "Frazier & Deeter Learning Center · 1230 Peachtree St NE",
      },
    ],
    delegacion: [
      {
        nombre: "Baquero Translations",
        sector: { es: "Traducción y localización", en: "Translation & localization" },
        detalle: { es: "Traducción y localización que combina IA y servicio humano.", en: "Translation and localization combining AI and human expertise." },
        web: "https://www.baquerotranslations.com",
      },
      {
        nombre: "Borderless Software",
        logo: "img/empresas/borderless-software.png",
        sector: { es: "Software y consultoría IT", en: "Software & IT consulting" },
        detalle: { es: "Software a medida, consultoría, servicios cloud y e-commerce.", en: "Custom software, consulting, cloud services and e-commerce." },
        web: "https://www.borderless-software.com",
      },
      {
        nombre: "Darwoft",
        logo: "img/empresas/darwoft.png",
        sector: { es: "Software para salud", en: "Healthcare software" },
        detalle: { es: "Soluciones de datos, IA y MVPs para el sector salud.", en: "Data, AI and MVP solutions for healthcare." },
        web: "https://www.darwoft.com",
      },
      {
        nombre: "Diproach",
        sector: { es: "Apps y blockchain", en: "Apps & blockchain" },
        detalle: { es: "Desarrollo de aplicaciones y blockchain, con más de 70 proyectos realizados.", en: "App and blockchain development, with 70+ projects delivered." },
        web: "https://www.diproach.com",
      },
      {
        nombre: "Federación Económica de Catamarca · W3Mine",
        sector: { es: "Trazabilidad minera en blockchain", en: "Blockchain mining traceability" },
        detalle: {
          es: "Plataforma de trazabilidad de minerales sobre blockchain con certificados digitales de impacto ambiental y social.",
          en: "Blockchain-based mineral traceability platform issuing digital certificates of environmental and social impact.",
        },
      },
      {
        nombre: "G&L Group",
        sector: { es: "Servicios de tecnología", en: "Technology services" },
        detalle: {
          es: "Servicios de tecnología desde 1994 para banca y finanzas, agro, e-commerce, gobierno y salud.",
          en: "Technology services since 1994 for banking and finance, agribusiness, e-commerce, government and healthcare.",
        },
        web: "https://www.gylgroup.com",
      },
      {
        nombre: "Immersive Global Solutions (IGS)",
        logo: "img/empresas/immersive-global-solutions.png",
        sector: { es: "Realidad aumentada, virtual e IA", en: "AR, VR & AI" },
        web: "https://www.igs.com.ar",
      },
      {
        nombre: "Innovaction · DappsFactory",
        sector: { es: "Blockchain e IA", en: "Blockchain & AI" },
        detalle: { es: "Tokenización de activos, NFTs y agentes de inteligencia artificial.", en: "Asset tokenization, NFTs and AI agents." },
        web: "https://dappsfactory.io",
      },
      {
        nombre: "Khem Labs",
        sector: { es: "Software a medida", en: "Custom software" },
        detalle: { es: "Apps móviles y web, microservicios y desarrollos en blockchain.", en: "Mobile and web apps, microservices and blockchain development." },
        web: "https://khemlabs.com",
      },
      {
        nombre: "LEAF",
        sector: { es: "ClimateTech", en: "ClimateTech" },
        detalle: { es: "Plataforma SaaS para gestionar la huella de carbono de empresas.", en: "SaaS platform for corporate carbon footprint management." },
        web: "https://leaf-si.com",
      },
      {
        nombre: "Nybble Group",
        logo: "img/empresas/nybble-group.png",
        sector: { es: "Automatización inteligente", en: "Intelligent automation" },
        detalle: { es: "Automatización inteligente de procesos y software a medida.", en: "Intelligent process automation and custom software." },
        web: "https://www.nybblegroup.com",
      },
      {
        nombre: "Quadion Technologies",
        logo: "img/empresas/quadion-technologies.png",
        sector: { es: "Software a medida", en: "Custom software development" },
        web: "https://www.quadiontech.com",
      },
      {
        nombre: "Wootic",
        logo: "img/empresas/wootic.png",
        sector: { es: "Software y LegalFinTech", en: "Software & LegalFinTech" },
        web: "https://www.wootic.co",
      },
    ],
    anfitriones: [
      {
        nombre: "Georgia Tech Enterprise Innovation Institute",
        tipo: "universidad",
        detalle: { es: "Presentó el programa Soft Landings de Georgia Tech.", en: "Presented Georgia Tech’s Soft Landings program." },
        web: "https://innovate.gatech.edu",
      },
      {
        nombre: "ATDC · Georgia Tech",
        tipo: "universidad",
        detalle: { es: "Advanced Technology Development Center, la incubadora de Georgia Tech.", en: "Advanced Technology Development Center, Georgia Tech’s startup incubator." },
        web: "https://atdc.org",
      },
      {
        nombre: "Metro Atlanta Chamber",
        tipo: "camara",
        detalle: { es: "Organizó la sesión de doing business y la mesa redonda con empresas.", en: "Hosted the doing-business session and the corporate roundtable." },
        web: "https://www.metroatlantachamber.com",
      },
      {
        nombre: "Invest Atlanta",
        tipo: "gobierno",
        web: "https://www.investatlanta.com",
      },
      {
        nombre: "Georgia Department of Economic Development",
        tipo: "gobierno",
        web: "https://www.georgia.org",
      },
      {
        nombre: "Argentine American Chamber of Commerce Southeast",
        tipo: "camara",
      },
      {
        nombre: "Atlanta Tech Village",
        tipo: "hub",
        web: "https://atlantatechvillage.com",
      },
      {
        nombre: "Technology Association of Georgia (TAG)",
        tipo: "asociacion",
        detalle: { es: "Encuentro de networking con sus miembros.", en: "Networking event with its members." },
        web: "https://www.tagonline.org",
      },
      {
        nombre: "Frazier & Deeter",
        tipo: "empresa",
        detalle: { es: "Sede del encuentro con TAG.", en: "Hosted the TAG networking event." },
        web: "https://www.frazierdeeter.com",
      },
    ],
    reuniones: [
      { nombre: "Juli Golemi", cargo: { es: "Directora de Ecosistemas de Innovación", en: "Director, Innovation Ecosystems" }, organizacion: "Georgia Tech Enterprise Innovation Institute" },
      { nombre: "Alberto Ponce", cargo: { es: "Program Manager", en: "Program Manager" }, organizacion: "Georgia Tech Enterprise Innovation Institute" },
      { nombre: "John Avery", cargo: { es: "Director", en: "Director" }, organizacion: "ATDC · Georgia Tech" },
      { nombre: "Robert “Red” Daniel", cargo: { es: "FinTech Catalyst", en: "FinTech Catalyst" }, organizacion: "ATDC · Georgia Tech" },
      { nombre: "Stefan Harrigan", cargo: { es: "Global Business Development", en: "Global Business Development" }, organizacion: "Metro Atlanta Chamber" },
      { nombre: "Grant Wainscott", cargo: { es: "VP de Expansión del Ecosistema", en: "VP, Ecosystem Expansion" }, organizacion: "Metro Atlanta Chamber" },
      { nombre: "Laurie Prickett", cargo: { es: "Desarrollo Económico", en: "Economic Development" }, organizacion: "Invest Atlanta" },
      { nombre: "Kimberlyn Daniel", cargo: { es: "Project Manager", en: "Project Manager" }, organizacion: "Georgia Department of Economic Development" },
      { nombre: "Donnie Beamer", cargo: { es: "Asesor senior de Tecnología", en: "Senior Technology Advisor" }, organizacion: "City of Atlanta" },
      { nombre: "Larry K. Williams", cargo: { es: "Presidente y CEO", en: "President & CEO" }, organizacion: "Technology Association of Georgia (TAG)" },
      { nombre: "Guillermo Wasserman", cargo: { es: "Presidente", en: "Chairman" }, organizacion: "Argentine American Chamber of Commerce Southeast" },
      { nombre: "Mariano Saldaña", cargo: { es: "Vicepresidente", en: "Vice President" }, organizacion: "Argentine American Chamber of Commerce Southeast" },
      { nombre: "Alejandra Torchia", cargo: { es: "SVP de Tecnología", en: "SVP, Technology" }, organizacion: "Equifax" },
      { nombre: "Mariano Maluf", cargo: { es: "Global Director, Digital Innovation", en: "Global Director, Digital Innovation" }, organizacion: "Kimberly-Clark" },
      { nombre: "Nicolás Faletty", cargo: { es: "Director de Arquitectura de Plataformas", en: "Director, Customer Platforms Architecture" }, organizacion: "CONA Services · Coca-Cola North America" },
      { nombre: "Ania Lackey", cargo: { es: "Directora de Alianzas", en: "Director of Partnerships" }, organizacion: "Atlanta Tech Village" },
    ],
    organizadores: [
      {
        nombre: { es: "Consulado General de la República Argentina en Atlanta", en: "Consulate General of Argentina in Atlanta" },
        logo: { es: "img/organizadores/consulado-es.png", en: "img/organizadores/consulado-en.png" },
        logoOscuro: { es: "img/organizadores/consulado-es-oscuro.png", en: "img/organizadores/consulado-en-oscuro.png" },
      },
      {
        nombre: { es: "Cancillería Argentina · DNTEC", en: "Argentine Ministry of Foreign Affairs · DNTEC" },
        logo: { es: "img/organizadores/cancilleria-es.png", en: "img/organizadores/cancilleria-en.png" },
        logoOscuro: { es: "img/organizadores/cancilleria-es-oscuro.png", en: "img/organizadores/cancilleria-en-oscuro.png" },
      },
    ],
    resultados: [],
    galeriaCredito: { es: "Consulado General de la República Argentina en Atlanta", en: "Consulate General of the Argentine Republic in Atlanta" },
    galeria: [
      {
        titulo: { es: "Metro Atlanta Chamber: doing business y mesa redonda", en: "Metro Atlanta Chamber: doing business and roundtable" },
        fotos: [
          { src: "img/ediciones/2024/mac-mesa-redonda.jpg", mini: "img/ediciones/2024/mac-mesa-redonda-mini.jpg", alt: { es: "La Cónsul General en la mesa redonda de la Metro Atlanta Chamber.", en: "The Consul General at the Metro Atlanta Chamber roundtable." } },
          { src: "img/ediciones/2024/mac-presentacion.jpg", mini: "img/ediciones/2024/mac-presentacion-mini.jpg", alt: { es: "Presentación de la Metro Atlanta Chamber sobre el ecosistema tecnológico de Atlanta.", en: "Metro Atlanta Chamber presentation on Atlanta’s tech ecosystem." } },
        ],
      },
      {
        titulo: { es: "Argentine Tech & Wine: recepción de networking", en: "Argentine Tech & Wine networking reception" },
        fotos: [
          { src: "img/ediciones/2024/recepcion-palabras.jpg", mini: "img/ediciones/2024/recepcion-palabras-mini.jpg", alt: { es: "Palabras de la Cónsul General y de Donnie Beamer, asesor senior de Tecnología de la Ciudad de Atlanta.", en: "Remarks by the Consul General and Donnie Beamer, City of Atlanta Senior Technology Advisor." } },
          { src: "img/ediciones/2024/recepcion-publico.jpg", mini: "img/ediciones/2024/recepcion-publico-mini.jpg", alt: { es: "Los invitados escuchan las palabras de apertura de la recepción.", en: "Guests listen to the opening remarks at the reception." } },
          { src: "img/ediciones/2024/recepcion-invitados.jpg", mini: "img/ediciones/2024/recepcion-invitados-mini.jpg", alt: { es: "La Cónsul General con Donnie Beamer y otros invitados.", en: "The Consul General with Donnie Beamer and other guests." } },
          { src: "img/ediciones/2024/recepcion-laac.jpg", mini: "img/ediciones/2024/recepcion-laac-mini.jpg", alt: { es: "Invitados de LAAC Georgia junto a la Cónsul General.", en: "LAAC Georgia guests with the Consul General." } },
          { src: "img/ediciones/2024/recepcion-bevington.jpg", mini: "img/ediciones/2024/recepcion-bevington-mini.jpg", alt: { es: "La Cónsul General junto a Rickey Bevington.", en: "The Consul General with Rickey Bevington." } },
          { src: "img/ediciones/2024/vinos-wofa.jpg", mini: "img/ediciones/2024/vinos-wofa-mini.jpg", alt: { es: "Vinos argentinos de la promoción de Wines of Argentina.", en: "Argentine wines from the Wines of Argentina promotion." } },
          { src: "img/ediciones/2024/vinos-piattelli.jpg", mini: "img/ediciones/2024/vinos-piattelli-mini.jpg", alt: { es: "Vinos de Piattelli Vineyards en la recepción.", en: "Piattelli Vineyards wines at the reception." } },
          { src: "img/ediciones/2024/vinos-1.jpg", mini: "img/ediciones/2024/vinos-1-mini.jpg", alt: { es: "Malbec argentino servido en la recepción.", en: "Argentine Malbec served at the reception." } },
          { src: "img/ediciones/2024/vinos-2.jpg", mini: "img/ediciones/2024/vinos-2-mini.jpg", alt: { es: "Degustación de vinos argentinos durante la recepción.", en: "Argentine wine tasting during the reception." } },
          { src: "img/ediciones/2024/brindis-1.jpg", mini: "img/ediciones/2024/brindis-1-mini.jpg", alt: { es: "Brindis con vino argentino.", en: "A toast with Argentine wine." } },
          { src: "img/ediciones/2024/brindis-2.jpg", mini: "img/ediciones/2024/brindis-2-mini.jpg", alt: { es: "Brindis con vino argentino durante la recepción.", en: "A toast with Argentine wine during the reception." } },
        ],
      },
      {
        titulo: { es: "Encuentro con la Argentine American Chamber of Commerce Southeast", en: "Meeting with the Argentine American Chamber of Commerce Southeast" },
        fotos: [
          { src: "img/ediciones/2024/aacc-grupo.jpg", mini: "img/ediciones/2024/aacc-grupo-mini.jpg", alt: { es: "Foto grupal con la Argentine American Chamber of Commerce Southeast en el Consulado General.", en: "Group photo with the Argentine American Chamber of Commerce Southeast at the Consulate General." } },
        ],
      },
      {
        titulo: { es: "Networking con la Technology Association of Georgia", en: "Networking with the Technology Association of Georgia" },
        fotos: [
          { src: "img/ediciones/2024/tag-sala.jpg", mini: "img/ediciones/2024/tag-sala-mini.jpg", alt: { es: "Encuentro de networking con la Technology Association of Georgia.", en: "Networking session with the Technology Association of Georgia." } },
          { src: "img/ediciones/2024/tag-presentacion.jpg", mini: "img/ediciones/2024/tag-presentacion-mini.jpg", alt: { es: "Presentación de TAG ante la delegación.", en: "TAG presentation to the delegation." } },
          { src: "img/ediciones/2024/tag-grupo.jpg", mini: "img/ediciones/2024/tag-grupo-mini.jpg", alt: { es: "Foto grupal de la delegación en el encuentro con TAG.", en: "Group photo of the delegation at the TAG networking session." } },
        ],
      },
    ],
    prensa: [
      {
        titulo: "Misión comercial de software en Atlanta",
        medio: "Cancillería Argentina",
        url: "https://cancilleria.gob.ar/es/actualidad/noticias/mision-comercial-de-software-en-atlanta",
        fecha: "2024-04-17",
        idioma: "es",
      },
      {
        titulo: "Argentine Software Companies Again Targeting Atlanta With Mid-April Trade Mission",
        medio: "Global Atlanta",
        url: "https://www.globalatlanta.com/argentine-software-companies-once-again-targeting-atlanta-with-mid-april-trade-mission/",
        fecha: "2024-04-05",
        idioma: "en",
      },
      {
        titulo: "Argentine Continues to Build Software Brand in Atlanta’s Tech Ecosystem",
        medio: "Global Atlanta",
        url: "https://www.globalatlanta.com/argentine-continues-to-build-software-brand-in-atlantas-tech-ecosystem/",
        idioma: "en",
      },
      {
        titulo: "Argentina Promotes Business and Technology in Atlanta",
        medio: "Argentina Delivers",
        url: "https://argentinadelivers.com/argentina-promotes-business-and-technology-in-atlanta/",
        idioma: "en",
      },
    ],
  },
];
