/*
 * Ediciones de la misión South Meets South.
 *
 * Cada edición es un objeto de esta lista. El orden no importa: el sitio las ordena por fecha.
 * Los textos van en los dos idiomas: { es: "...", en: "..." }. Un texto simple ("Atlanta") vale para ambos.
 * `verificar: true` marca un dato tomado de fuentes públicas que el Consulado todavía debe confirmar.
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
      es: "Misión Comercial de Software y Tecnología a Estados Unidos",
      en: "Software & Technology Trade Mission to the United States",
    },
    inicio: "2026-11-16",
    fin: "2026-11-19",
    tramos: [
      { ciudad: "Chicago", inicio: "2026-11-16", fin: "2026-11-17" },
      { ciudad: "Atlanta", inicio: "2026-11-18", fin: "2026-11-19" },
    ],
    // Fecha que usa la cuenta regresiva de la portada.
    cuentaRegresiva: { fecha: "2026-11-18", ciudad: "Atlanta" },
    resumen: {
      es: "La próxima edición recorre Chicago y Atlanta. La convoca la Cancillería argentina a través de la Dirección de Promoción de Exportaciones de Servicios Basados en el Conocimiento, Industrias Creativas, Turismo y Deportes (DNTEC), con foco en empresas de HealthTech, Fintech, DeepTech, Ciberseguridad, Inteligencia Artificial, Videojuegos y Logística.",
      en: "The next edition visits Chicago and Atlanta. It is organized by Argentina’s Ministry of Foreign Affairs through its Directorate for the Promotion of Knowledge-Based Services, Creative Industries, Tourism and Sports Exports (DNTEC), focusing on HealthTech, Fintech, DeepTech, Cybersecurity, Artificial Intelligence, Video Games and Logistics companies.",
    },
    sectores: [
      "HealthTech",
      "Fintech",
      "DeepTech",
      { es: "Ciberseguridad", en: "Cybersecurity" },
      { es: "Inteligencia Artificial", en: "Artificial Intelligence" },
      { es: "Videojuegos", en: "Video games" },
      { es: "Logística", en: "Logistics" },
    ],
    programa: [
      { es: "Rondas de negocios B2B", en: "B2B business meetings" },
      { es: "Encuentros de networking", en: "Networking events" },
      { es: "Paneles de expertos", en: "Expert panels" },
      { es: "Visitas institucionales", en: "Institutional visits" },
    ],
    convocatoria: {
      estado: "cerrada", // "abierta" | "cerrada"
      cierre: "2026-10-09",
      url: "https://www.cancilleria.gob.ar/es/argentinatradenet/noticias/mision-comercial-de-software-y-tecnologia-estados-unidos",
      nota: {
        es: "Los gastos de pasajes, alojamiento y viáticos corren por cuenta de cada empresa participante.",
        en: "Airfare, lodging and travel expenses are covered by each participating company.",
      },
    },
    // Mensaje para empresas e instituciones de Atlanta que quieran reunirse con la delegación.
    llamadoAnfitriones: {
      es: "¿Su empresa o institución quiere reunirse con la delegación argentina en Atlanta? Escríbanos y coordinamos la agenda.",
      en: "Would your company or organization like to meet the Argentine delegation in Atlanta? Get in touch and we’ll coordinate the agenda.",
    },
    agenda: [],
    delegacion: [],
    anfitriones: [],
    reuniones: [],
    organizadores: [
      {
        nombre: { es: "Cancillería Argentina · DNTEC", en: "Argentine Ministry of Foreign Affairs · DNTEC" },
      },
      {
        nombre: { es: "Consulado General en Atlanta", en: "Consulate General in Atlanta" },
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
      es: "South Meets South · Misión de Software y Tecnología a Atlanta y Austin",
      en: "South Meets South · Software & Technology Mission to Atlanta and Austin",
    },
    inicio: "2025-11-17",
    fin: "2025-11-20",
    ciudades: ["Atlanta", "Austin"],
    empresas: 13,
    resumen: {
      es: "Encabezada por el Embajador argentino en los Estados Unidos, Alec Oxenford, la delegación de empresas argentinas de software y tecnología recorrió Atlanta y Austin. En Atlanta, el foro South Meets South reunió a la delegación con el ecosistema tecnológico local en una jornada de keynote, conversación y rondas de negocios, y se presentó el Portfolio de Startups «Next From Argentina».",
      en: "Led by Argentina’s Ambassador to the United States, Alec Oxenford, the delegation of Argentine software and technology companies visited Atlanta and Austin. In Atlanta, the South Meets South forum brought the delegation together with the local tech ecosystem for a keynote, a fireside chat and B2B speed meetings, and the “Next From Argentina” startup portfolio was launched.",
    },
    cifras: [
      { valor: "13", texto: { es: "empresas argentinas", en: "Argentine companies" } },
      { valor: "+100", texto: { es: "reuniones bilaterales en Atlanta", en: "bilateral meetings in Atlanta" } },
      { valor: "2", texto: { es: "ciudades: Atlanta y Austin", en: "cities: Atlanta and Austin" } },
    ],
    sectores: [
      "HealthTech",
      "Fintech",
      { es: "Inteligencia Artificial", en: "Artificial Intelligence" },
      { es: "Videojuegos y e-sports", en: "Gaming & e-sports" },
      "IoT",
      { es: "Realidad aumentada y virtual", en: "AR / VR" },
      { es: "Desarrollo de software", en: "Software development" },
    ],
    agenda: [
      {
        fecha: "2025-11-17",
        hora: "14:00",
        titulo: { es: "Keynote del Embajador y fireside chat", en: "Ambassador keynote and fireside chat" },
        detalle: {
          es: "Keynote del Embajador Alec Oxenford, seguida de una conversación con Larry K. Williams, presidente y CEO de la Technology Association of Georgia (TAG).",
          en: "Keynote by Ambassador Alec Oxenford, followed by a conversation with Larry K. Williams, President & CEO of the Technology Association of Georgia (TAG).",
        },
      },
      {
        fecha: "2025-11-17",
        hora: "15:00",
        titulo: { es: "Speed meetings B2B y degustación de vinos argentinos", en: "B2B speed meetings and Argentine wine tasting" },
        detalle: {
          es: "Reuniones curadas entre empresas de Atlanta y la delegación argentina.",
          en: "Curated meetings between Atlanta companies and the Argentine delegation.",
        },
        lugar: "1200 Peachtree St NE, Atlanta",
      },
      {
        titulo: { es: "Visita a Atlanta Tech Village", en: "Visit to Atlanta Tech Village" },
        detalle: {
          es: "El Embajador acompañó a las empresas de la delegación en su visita al principal hub de startups de Atlanta.",
          en: "The Ambassador joined the delegation on a visit to Atlanta’s leading startup hub.",
        },
        verificar: true,
      },
      {
        titulo: { es: "Lanzamiento del Portfolio de Startups «Next From Argentina»", en: "Launch of the “Next From Argentina” startup portfolio" },
        detalle: {
          es: "Presentación de la plataforma que reúne la oferta exportable y de inversión de startups argentinas.",
          en: "Launch of the platform showcasing the export and investment offering of Argentine startups.",
        },
        verificar: true,
      },
      {
        titulo: { es: "Agenda en Austin, Texas", en: "Program in Austin, Texas" },
        detalle: {
          es: "Segunda etapa de la misión. Completar con las actividades realizadas.",
          en: "Second leg of the mission. Activities to be added.",
        },
        verificar: true,
      },
    ],
    delegacionNota: {
      es: "Listado publicado por la prensa antes del viaje (16 empresas convocadas). Confirmar las 13 empresas que viajaron.",
      en: "List published by the press before the trip (16 companies invited). Confirm the 13 companies that traveled.",
    },
    delegacion: [
      {
        nombre: "Borderless Software",
        sector: { es: "Desarrollo de software y consultoría IT", en: "Software development & IT consulting" },
        detalle: { es: "Oficinas en Atlanta y Buenos Aires.", en: "Offices in Atlanta and Buenos Aires." },
        verificar: true,
      },
      {
        nombre: "Code First Lab",
        sector: { es: "Desarrollo ágil de software", en: "Agile software development" },
        verificar: true,
      },
      {
        nombre: "Crombie",
        sector: { es: "Ingeniería y estrategia de software", en: "Software engineering & strategy" },
        detalle: { es: "Clientes en retail, fintech y otras industrias.", en: "Clients in retail, fintech and other industries." },
        verificar: true,
      },
      {
        nombre: "Darwoft",
        sector: { es: "Software a medida", en: "Custom software" },
        verificar: true,
      },
      {
        nombre: "Eureka Labs",
        sector: { es: "Product factory", en: "Product factory" },
        detalle: { es: "Con base en Córdoba.", en: "Based in Córdoba." },
        verificar: true,
      },
      {
        nombre: "GOSyS · Global Operations Systems",
        sector: { es: "Transformación digital", en: "Digital transformation" },
        verificar: true,
      },
      {
        nombre: "I+DIoT Lab",
        sector: { es: "Innovación en IoT", en: "IoT innovation" },
        verificar: true,
      },
      {
        nombre: "Immersive Global Solutions (IGS)",
        sector: { es: "Realidad aumentada y virtual", en: "AR / VR" },
        verificar: true,
      },
      {
        nombre: "ISURUS",
        sector: { es: "Videojuegos y e-sports", en: "Gaming & e-sports" },
        verificar: true,
      },
      {
        nombre: "Nybble Group",
        sector: { es: "Transformación digital e IA", en: "Digital transformation & AI" },
        verificar: true,
      },
      { nombre: "Quadion Technologies", verificar: true },
      { nombre: "Rooftop", verificar: true },
      { nombre: "Siltium", verificar: true },
      {
        nombre: "The Flock",
        sector: { es: "Consultora tecnológica", en: "Tech consulting" },
        verificar: true,
      },
      {
        nombre: "Wootic",
        sector: { es: "Software y outsourcing", en: "Software & outsourcing" },
        verificar: true,
      },
    ],
    anfitriones: [
      {
        nombre: "Technology Association of Georgia (TAG)",
        tipo: "asociacion",
        detalle: {
          es: "Su presidente, Larry K. Williams, participó del fireside chat; su International Business Society colaboró con la organización del foro.",
          en: "Its President, Larry K. Williams, joined the fireside chat; its International Business Society helped organize the forum.",
        },
        web: "https://www.tagonline.org",
      },
      {
        nombre: "Atlanta Tech Village",
        tipo: "hub",
        detalle: { es: "Recibió a la delegación junto al Embajador.", en: "Hosted the delegation and the Ambassador." },
        web: "https://atlantatechvillage.com",
        verificar: true,
      },
    ],
    reuniones: [
      {
        nombre: "Larry K. Williams",
        cargo: { es: "Presidente y CEO", en: "President & CEO" },
        organizacion: "Technology Association of Georgia (TAG)",
      },
    ],
    organizadores: [
      { nombre: { es: "Embajada de la República Argentina en los Estados Unidos", en: "Embassy of the Argentine Republic in the United States" } },
      { nombre: { es: "Consulado General en Atlanta", en: "Consulate General in Atlanta" } },
      { nombre: { es: "Cancillería Argentina", en: "Argentine Ministry of Foreign Affairs" } },
    ],
    resultados: [
      { es: "Más de 100 reuniones bilaterales entre la delegación y empresas de Atlanta.", en: "Over 100 bilateral meetings between the delegation and Atlanta companies." },
      { es: "Lanzamiento del Portfolio de Startups «Next From Argentina».", en: "Launch of the “Next From Argentina” startup portfolio." },
    ],
    galeria: [],
    prensa: [
      {
        titulo: "La economía del conocimiento argentina se impulsa en Estados Unidos",
        medio: "Cancillería Argentina",
        url: "https://cancilleria.gob.ar/es/actualidad/noticias/la-economia-del-conocimiento-argentina-se-impulsa-en-estados-unidos-mision",
        idioma: "es",
      },
      {
        titulo: "Ambassador: How Argentina’s Tech Sector Aligns With Atlanta at an Opportune Moment",
        medio: "Global Atlanta",
        url: "https://www.globalatlanta.com/ambassador-how-argentinas-tech-sector-aligns-with-atlanta-at-an-opportune-moment/",
        fecha: "2025-11-21",
        idioma: "en",
      },
      {
        titulo: "Argentina Tech Delegation: Meet 16 Companies and an Ambassador Who Breeds Unicorns",
        medio: "Hypepotamus",
        url: "https://hypepotamus.com/startup-news/argentina-tech-delegation-in-atlanta-2025/",
        idioma: "en",
      },
      {
        titulo: "El Gobierno avanza con su estrategia en EE.UU. para reforzar vínculos con empresas tecnológicas y atraer inversiones",
        medio: "La Nación",
        url: "https://www.lanacion.com.ar/estados-unidos/el-gobierno-avanza-con-su-estrategia-en-eeuu-para-reforzar-vinculos-con-empresas-tecnologicas-y-nid17112025/",
        fecha: "2025-11-17",
        idioma: "es",
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
    ciudades: ["Atlanta"],
    empresas: 15,
    resumen: {
      es: "Organizada por el Consulado General en Atlanta junto con la Dirección de Promoción de Servicios Basados en el Conocimiento de la Cancillería, en el marco de eMerge Americas 2024, la misión llevó a quince empresas argentinas de software a recorrer el ecosistema de innovación de Atlanta: asociaciones del sector, incubadoras, hubs de startups y potenciales socios comerciales.",
      en: "Organized by the Consulate General in Atlanta together with the Foreign Ministry’s Directorate for the Promotion of Knowledge-Based Services, alongside eMerge Americas 2024, the mission brought fifteen Argentine software companies to explore Atlanta’s innovation ecosystem: industry associations, incubators, startup hubs and potential business partners.",
    },
    cifras: [
      { valor: "15", texto: { es: "empresas argentinas de software", en: "Argentine software companies" } },
      { valor: "2", texto: { es: "jornadas de agenda en Atlanta", en: "days of meetings in Atlanta" } },
      { valor: "4+", texto: { es: "hubs e incubadoras visitados", en: "hubs and incubators visited" } },
    ],
    sectores: [
      "Fintech",
      { es: "Realidad aumentada", en: "Augmented reality" },
      { es: "Inteligencia Artificial", en: "Artificial Intelligence" },
      { es: "Desarrollo de software", en: "Software development" },
    ],
    agenda: [
      {
        fecha: "2024-04-15",
        titulo: { es: "Encuentro con la Technology Association of Georgia", en: "Meeting with the Technology Association of Georgia" },
        detalle: {
          es: "La delegación fue recibida por el presidente de TAG, Larry K. Williams.",
          en: "The delegation was welcomed by TAG President Larry K. Williams.",
        },
      },
      {
        fecha: "2024-04-15",
        titulo: { es: "Recepción de networking", en: "Networking reception" },
        detalle: {
          es: "Cierre de la jornada con vinos argentinos y palabras de la Cónsul General Alana Lomónaco Busto y de Larry K. Williams (TAG).",
          en: "Closing reception with Argentine wine and remarks by Consul General Alana Lomónaco Busto and Larry K. Williams (TAG).",
        },
        lugar: "Buckhead Club, Atlanta",
        verificar: true,
      },
      {
        titulo: { es: "Recepción con la International Business Society de TAG", en: "Reception with TAG’s International Business Society" },
        detalle: {
          es: "Encuentro en las oficinas de Frazier & Deeter en Midtown.",
          en: "Gathering at Frazier & Deeter’s Midtown offices.",
        },
        lugar: "Frazier & Deeter, Midtown Atlanta",
        verificar: true,
      },
      {
        fecha: "2024-04-16",
        titulo: { es: "Reunión con la Argentine-American Chamber of Commerce", en: "Meeting with the Argentine-American Chamber of Commerce" },
        verificar: true,
      },
      {
        fecha: "2024-04-16",
        titulo: { es: "Visita a Atlanta Tech Village", en: "Visit to Atlanta Tech Village" },
      },
      {
        titulo: { es: "Visitas a incubadoras: ATDC y Tech Alpharetta", en: "Incubator visits: ATDC and Tech Alpharetta" },
        detalle: {
          es: "Recorrida por el Advanced Technology Development Center de Georgia Tech, Tech Alpharetta y otras incubadoras locales.",
          en: "Tours of Georgia Tech’s Advanced Technology Development Center, Tech Alpharetta and other local incubators.",
        },
      },
    ],
    delegacionNota: {
      es: "Listado de empresas a completar.",
      en: "Company list to be added.",
    },
    delegacion: [],
    anfitriones: [
      {
        nombre: "Technology Association of Georgia (TAG)",
        tipo: "asociacion",
        detalle: {
          es: "Recibió a la delegación y organizó el encuentro de networking de cierre.",
          en: "Welcomed the delegation and hosted the closing networking event.",
        },
        web: "https://www.tagonline.org",
      },
      {
        nombre: "TAG International Business Society",
        tipo: "asociacion",
        detalle: { es: "Coorganizó la recepción en Frazier & Deeter.", en: "Co-hosted the reception at Frazier & Deeter." },
        verificar: true,
      },
      {
        nombre: "Frazier & Deeter",
        tipo: "empresa",
        detalle: { es: "Firma contable y de consultoría; sede de la recepción en Midtown.", en: "Accounting and advisory firm; hosted the reception in Midtown." },
        web: "https://www.frazierdeeter.com",
        verificar: true,
      },
      {
        nombre: "Atlanta Tech Village",
        tipo: "hub",
        web: "https://atlantatechvillage.com",
      },
      {
        nombre: "ATDC · Georgia Tech",
        tipo: "universidad",
        detalle: { es: "Advanced Technology Development Center, la incubadora de Georgia Tech.", en: "Advanced Technology Development Center, Georgia Tech’s startup incubator." },
        web: "https://atdc.org",
      },
      {
        nombre: "Tech Alpharetta",
        tipo: "hub",
        web: "https://techalpharetta.org",
      },
      {
        nombre: "Argentine-American Chamber of Commerce",
        tipo: "camara",
        verificar: true,
      },
    ],
    reuniones: [
      {
        nombre: "Larry K. Williams",
        cargo: { es: "Presidente y CEO", en: "President & CEO" },
        organizacion: "Technology Association of Georgia (TAG)",
      },
    ],
    organizadores: [
      {
        nombre: { es: "Consulado General en Atlanta", en: "Consulate General in Atlanta" },
        detalle: { es: "Cónsul General Alana Lomónaco Busto", en: "Consul General Alana Lomónaco Busto" },
      },
      {
        nombre: {
          es: "Cancillería Argentina · Dirección de Promoción de Servicios Basados en el Conocimiento",
          en: "Argentine Ministry of Foreign Affairs · Directorate for the Promotion of Knowledge-Based Services",
        },
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
      {
        titulo: "Argentine Software Roadshow · One Pager (PDF)",
        medio: "Global Atlanta",
        url: "https://www.globalatlanta.com/wp-content/uploads/Argentine-Software-Roadshow-One-Pager-Atlanta-2024-2.pdf",
        idioma: "en",
      },
    ],
  },

  // ─────────────────────────────── 2022 ───────────────────────────────
  {
    id: "2022",
    estado: "realizada",
    titulo: {
      es: "Misión Comercial de Software a EE.UU.: Miami y Atlanta",
      en: "Software Trade Mission to the U.S.: Miami and Atlanta",
    },
    inicio: "2022-10-03",
    fin: "2022-10-07",
    tramos: [
      { ciudad: "Miami", inicio: "2022-10-03", fin: "2022-10-05" },
      { ciudad: "Atlanta", inicio: "2022-10-06", fin: "2022-10-07" },
    ],
    resumen: {
      es: "Organizada por la Cancillería argentina junto con los consulados en Atlanta y Miami y el Consejo Público Privado para la Promoción de Exportaciones (CPPPE). En Atlanta, el «Día de la Tecnología Argentina» presentó la oferta del sector ante entidades locales, referentes públicos y privados y la prensa, con sesiones de reverse pitching en las que empresas estadounidenses contaron sus necesidades a la delegación.",
      en: "Organized by Argentina’s Ministry of Foreign Affairs together with the consulates in Atlanta and Miami and the Public-Private Export Promotion Council (CPPPE). In Atlanta, “Argentine Technology Day” presented the sector to local industry bodies, public and private leaders and the press, with reverse-pitching sessions in which U.S. companies shared their needs with the delegation.",
    },
    cifras: [
      { valor: "2", texto: { es: "ciudades: Miami y Atlanta", en: "cities: Miami and Atlanta" } },
      { valor: "5", texto: { es: "días de misión", en: "days on the ground" } },
    ],
    sectores: [
      { es: "Servicios gestionados de alto valor", en: "High-value managed services" },
      { es: "Aplicaciones de software", en: "Software applications" },
      { es: "Plataformas y servicios de software", en: "Software platforms & services" },
    ],
    agenda: [
      {
        fecha: "2022-10-06",
        titulo: { es: "Día de la Tecnología Argentina", en: "Argentine Technology Day" },
        detalle: {
          es: "Presentaciones de autoridades y entidades del sector privado argentino ante entidades sectoriales locales, referentes y prensa, seguidas de networking con empresas locales.",
          en: "Presentations by Argentine officials and private-sector organizations to local industry bodies, leaders and the press, followed by networking with local companies.",
        },
        verificar: true,
      },
      {
        titulo: { es: "Sesiones de reverse pitching", en: "Reverse-pitching sessions" },
        detalle: {
          es: "Empresas estadounidenses presentaron sus necesidades tecnológicas a las empresas argentinas.",
          en: "U.S. companies presented their technology needs to the Argentine companies.",
        },
      },
    ],
    delegacionNota: {
      es: "Listado de empresas a completar.",
      en: "Company list to be added.",
    },
    delegacion: [
      {
        nombre: "Accion Point",
        sector: { es: "Software", en: "Software" },
      },
    ],
    anfitriones: [],
    reuniones: [],
    organizadores: [
      { nombre: { es: "Cancillería Argentina", en: "Argentine Ministry of Foreign Affairs" } },
      { nombre: { es: "Consulado General en Atlanta", en: "Consulate General in Atlanta" } },
      { nombre: { es: "Consulado General y Centro de Promoción en Miami", en: "Consulate General and Promotion Center in Miami" } },
      { nombre: { es: "Consejo Público Privado para la Promoción de Exportaciones (CPPPE)", en: "Public-Private Export Promotion Council (CPPPE)" } },
    ],
    resultados: [],
    galeria: [],
    prensa: [
      {
        titulo: "Misión Comercial Software EEUU (Miami y Atlanta) · 03-07/10/2022",
        medio: "Argentina TradeNet · Cancillería",
        url: "https://www.cancilleria.gob.ar/es/argentinatradenet/noticias/mision-comercial-software-eeuu-miami-y-atlanta-03-07102022",
        idioma: "es",
      },
      {
        titulo: "Accion Point participó de la Misión Comercial de Software a Estados Unidos en Miami y Atlanta",
        medio: "CESSI",
        url: "https://cessi.org.ar/2022/12/10/accion-point-ha-participado-de-la-mision-comercial-de-software-a-estados-unidos-en-miami-y-atlanta/",
        fecha: "2022-12-10",
        idioma: "es",
      },
      {
        titulo: "Newsletter SUPCI · Edición N.º 5 · Octubre 2022 (PDF)",
        medio: "Cancillería Argentina",
        url: "https://cancilleria.gob.ar/userfiles/ut/newsletter_supci_-_edicion_nro._5_-_octubre_2022.pdf",
        idioma: "es",
      },
    ],
  },
];
