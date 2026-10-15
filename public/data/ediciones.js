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
      es: "South Meets South vuelve a Atlanta el 16 y 17 de noviembre con una delegación de 22 empresas argentinas de software y tecnología de cinco provincias y la Ciudad de Buenos Aires. El programa combina rondas de negocios B2B, un reverse pitch en el que empresas de Atlanta presentan sus necesidades tecnológicas, encuentros de networking, mesas con inversores y visitas a empresas locales.",
      en: "South Meets South returns to Atlanta on November 16–17 with a delegation of 22 Argentine software and technology companies from five provinces and the City of Buenos Aires. The program combines B2B business meetings, a reverse pitch where Atlanta companies share their technology needs, networking events, investor roundtables and visits to local companies.",
    },
    cifras: [
      { valor: "22", texto: { es: "empresas argentinas", en: "Argentine companies" } },
      { valor: "2", texto: { es: "días de agenda en Atlanta", en: "days in Atlanta" } },
      { valor: "6", texto: { es: "jurisdicciones: CABA y 5 provincias", en: "home regions: Buenos Aires City and 5 provinces" } },
    ],
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
      { es: "Mesas con inversores", en: "VC roundtables" },
      { es: "Visitas a empresas locales", en: "Visits to local companies" },
    ],
    agendaNota: {
      es: "Agenda provisional, sujeta a cambios.",
      en: "Provisional agenda, subject to change.",
    },
    notaInterna: {
      es: "Agenda provisional al 14 de octubre de 2026. Solo se publican las actividades abiertas; sedes y participantes a confirmar.",
      en: "Provisional agenda as of October 14, 2026. Only public-facing activities are listed; venues and participants to be confirmed.",
    },
    agenda: [
      {
        fecha: "2026-11-16",
        hora: "11:00–12:30",
        titulo: { es: "Reverse pitch", en: "Reverse pitch" },
        detalle: {
          es: "Empresas de Atlanta presentan sus necesidades y desafíos tecnológicos a la delegación argentina para explorar soluciones y alianzas.",
          en: "Atlanta companies share their technology needs and challenges with the Argentine delegation to explore solutions and partnerships.",
        },
        lugar: "Burr & Forman · 1075 Peachtree St NE, Midtown",
      },
      {
        fecha: "2026-11-16",
        hora: "14:00–17:30",
        titulo: { es: "Programa con TAG: apertura, panel y rondas B2B", en: "Program with TAG: opening, panel and B2B meetings" },
        detalle: {
          es: "Apertura y panel con referentes de la industria tecnológica local, seguidos de rondas de negocios con empresas de Atlanta.",
          en: "Opening and panel with local tech industry leaders, followed by B2B meetings with Atlanta companies.",
        },
        lugar: "Midtown, Atlanta",
        verificar: true,
      },
      {
        fecha: "2026-11-16",
        hora: "18:00–20:00",
        titulo: { es: "Recepción de networking", en: "Networking reception" },
        lugar: "Midtown, Atlanta",
        verificar: true,
      },
      {
        fecha: "2026-11-17",
        titulo: { es: "Mesa con inversores (VC roundtable)", en: "VC roundtable" },
        verificar: true,
      },
      {
        fecha: "2026-11-17",
        titulo: { es: "Visita a una empresa de Atlanta", en: "Company visit in Atlanta" },
        detalle: {
          es: "Una empresa local recibe a la delegación para mostrar sus tecnologías, proyectos de innovación y necesidades de negocio.",
          en: "A local company hosts the delegation to share its technologies, innovation projects and business needs.",
        },
        verificar: true,
      },
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
        provincia: "Córdoba",
        sector: { es: "Transformación digital, datos e IA", en: "Digital transformation, data & AI" },
        detalle: {
          es: "Más de 30 años acelerando la transformación digital de grandes empresas: consultoría, software a medida, datos e IA, cloud y servicios gestionados.",
          en: "30+ years accelerating digital transformation for large enterprises: consulting, custom software, data & AI, cloud and managed services.",
        },
        web: "https://www.avenga.com",
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
      },
      {
        nombre: "Immersive Global Solutions (IGS)",
        logo: "img/empresas/immersive-global-solutions.png",
        provincia: "Córdoba",
        sector: { es: "IA y realidad extendida", en: "AI & extended reality" },
        detalle: {
          es: "Transformación digital con IA generativa, realidad aumentada y virtual, con sede en Metro Atlanta y más de 500 proyectos realizados.",
          en: "Digital transformation with generative AI, augmented and virtual reality; headquartered in Metro Atlanta with 500+ projects delivered.",
        },
        web: "https://www.igs.com.ar",
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
      },
      {
        nombre: "Meta Software",
        provincia: "Buenos Aires",
        sector: { es: "Software a medida", en: "Custom software" },
        detalle: {
          es: "Más de 15 años desarrollando software a medida, con productos propios y clientes en mercados del exterior.",
          en: "15+ years developing custom software, with proprietary products and clients abroad.",
        },
        web: "https://www.metaok.com",
      },
      {
        nombre: "Novasoft",
        provincia: "Buenos Aires",
        sector: { es: "Software a medida y SaaS", en: "Custom software & SaaS" },
        detalle: {
          es: "Software a medida, automatizaciones, integraciones y productos SaaS propios, desde La Plata.",
          en: "Custom software, automation, integrations and its own SaaS products, based in La Plata.",
        },
        web: "https://novasoftarg.com",
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
      },
      {
        nombre: "QKStudio",
        logo: "img/empresas/qkstudio.png",
        provincia: "Buenos Aires",
        sector: { es: "Plataformas digitales y UX", en: "Digital platforms & UX" },
        detalle: {
          es: "Más de 19 años creando plataformas digitales y desarrollos a medida con foco en UX/UI: apps, webapps, e-learning y e-commerce.",
          en: "19+ years building digital platforms and custom software with a strong UX/UI focus: apps, web apps, e-learning and e-commerce.",
        },
        web: "https://www.qkstudio.com",
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
      },
      {
        nombre: "QuantyIA",
        provincia: "Buenos Aires",
        sector: { es: "Datos para IA", en: "Data for AI" },
        detalle: {
          es: "Etiquetado de datos con criterio humano para proyectos de IA en automotriz, industria, salud y sistemas de percepción.",
          en: "Human-led data labeling for AI projects in automotive, industrial, healthcare and perception systems.",
        },
        web: "https://quantyia.ar",
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
      },
      {
        nombre: "RH Vision",
        provincia: "Córdoba",
        sector: { es: "Talento IT y staff augmentation", en: "IT talent & staff augmentation" },
        detalle: {
          es: "Staff augmentation, outsourcing tecnológico y selección de talento IT en software, IA, automatización, ciberseguridad y robótica.",
          en: "Staff augmentation, tech outsourcing and IT recruiting in software, AI, automation, cybersecurity and robotics.",
        },
        web: "https://www.rhvision.org",
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
      },
      {
        nombre: "TPS",
        logo: "img/empresas/tps.png",
        provincia: "Ciudad de Buenos Aires",
        sector: { es: "Ingeniería de software y fintech", en: "Software engineering & fintech" },
        detalle: {
          es: "Más de 30 años en soluciones de software a gran escala, con experiencia en banca digital y pagos. Certificada ISO 9001:2015.",
          en: "30+ years delivering large-scale software solutions, with deep experience in digital banking and payments. ISO 9001:2015 certified.",
        },
        web: "https://www.tpssa.com.ar",
      },
      {
        nombre: "UNIQS",
        provincia: "Ciudad de Buenos Aires",
        sector: { es: "Ciberseguridad", en: "Cybersecurity" },
        detalle: {
          es: "Más de 20 años en ciberseguridad y protección de datos, con presencia en Argentina, España y Latinoamérica.",
          en: "20+ years in cybersecurity and data protection, operating in Argentina, Spain and Latin America.",
        },
        web: "https://uniqs.com.ar",
      },
      {
        nombre: "Wootic",
        logo: "img/empresas/wootic.png",
        provincia: "Córdoba",
        sector: { es: "Software, IA y tokenización", en: "Software, AI & tokenization" },
        detalle: {
          es: "Tecnología, ingeniería y consultoría: soluciones digitales, automatización, IA, datos y blockchain/tokenización.",
          en: "Technology, engineering and consulting: digital solutions, automation, AI, data and blockchain/tokenization.",
        },
        web: "https://www.wootic.co",
      },
    ],
    anfitriones: [],
    reuniones: [],
    organizadores: [
      {
        nombre: { es: "Consulado General de la República Argentina en Atlanta", en: "Consulate General of Argentina in Atlanta" },
      },
      {
        nombre: { es: "Cancillería Argentina · DNTEC", en: "Argentine Ministry of Foreign Affairs · DNTEC" },
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
        titulo: { es: "Keynote del Embajador y fireside chat con TAG", en: "Ambassador keynote and fireside chat with TAG" },
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
        detalle: { es: "Cónsul General Alana Lomónaco Busto", en: "Consul General Alana Lomónaco Busto" },
      },
      { nombre: { es: "Embajada de la República Argentina en los Estados Unidos", en: "Embassy of Argentina in the United States" } },
      { nombre: { es: "Cancillería Argentina", en: "Argentine Ministry of Foreign Affairs" } },
    ],
    resultados: [
      { es: "Más de 100 reuniones de negocios entre la delegación y empresas de Atlanta.", en: "More than 100 business meetings between the delegation and Atlanta companies." },
      { es: "Reverse pitch con UPS, Kimberly-Clark, CONA Services y Mercedes-Benz USA.", en: "Reverse pitch with UPS, Kimberly-Clark, CONA Services and Mercedes-Benz USA." },
      { es: "Cobertura en Atlanta Business Chronicle, Global Atlanta y La Nación.", en: "Coverage in the Atlanta Business Chronicle, Global Atlanta and La Nación." },
    ],
    galeria: [],
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
        detalle: { es: "Cónsul General Alana Lomónaco Busto", en: "Consul General Alana Lomónaco Busto" },
      },
      {
        nombre: { es: "Cancillería Argentina · DNTEC", en: "Argentine Ministry of Foreign Affairs · DNTEC" },
      },
    ],
    resultados: [],
    galeria: [],
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
