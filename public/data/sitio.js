/*
 * Configuración general del sitio South Meets South.
 * Ver CLAUDE.md (raíz del repo) para las reglas de edición.
 */
window.SMS_SITIO = {
  // true = muestra el aviso "Versión preliminar" y resalta los datos marcados con `verificar: true`.
  // Pasar a false cuando el contenido esté revisado.
  borrador: false,

  // Fecha de la última actualización del contenido (AAAA-MM-DD). Se muestra en el pie.
  actualizado: "2026-10-16",

  // Texto de contexto de la sección «Ediciones». {desde} se reemplaza por el año.
  // Si `desde` queda vacío (null), la frase no se muestra.
  contexto: {
    desde: 2013,
    texto: {
      es: "El Consulado General en Atlanta organiza misiones de empresas argentinas de software y tecnología desde {desde}. Aquí reunimos las ediciones más recientes.",
      en: "The Consulate General in Atlanta has organized Argentine software and technology missions since {desde}. Here are the most recent editions.",
    },
  },

  contacto: {
    organismo: {
      es: "Consulado General de la República Argentina en Atlanta",
      en: "Consulate General of the Argentine Republic in Atlanta",
    },
    email: "comercial_catla@mrecic.gov.ar",
    web: "https://catla.cancilleria.gob.ar",
    linkedin: "https://www.linkedin.com/company/argenatlanta/",
  },

  // Sección «Por qué Argentina» de la portada, pensada para empresas de Atlanta que no conocen el
  // sector. Fuentes: CESSI, «Why Argentina» (2025) y página «Argentina Tech Hub NY» (2026); reporte
  // OPSSI-CESSI de abril de 2026 (datos de 2025). Se usan las cifras más recientes. Los datos con
  // `verificar: true` salen de fuentes públicas y no de la CESSI: confirmarlos antes de quitar la marca.
  porQueArgentina: {
    titulo: { es: "Por qué Argentina", en: "Why Argentina" },
    bajada: {
      es: "La Argentina es el primer exportador de software de América Latina, y casi la mitad de esas ventas va a los Estados Unidos. Sus equipos ya trabajan con clientes estadounidenses, en inglés, en el mismo día laboral y con afinidad cultural.",
      en: "Argentina is Latin America’s leading software exporter, and nearly half of those exports go to the United States. Argentine teams already work with U.S. clients, in English, on the same working day and with a shared business culture.",
    },
    cifras: [
      { valor: { es: "1.º", en: "#1" }, texto: { es: "exportador de software de América Latina", en: "software exporter in Latin America" } },
      { valor: { es: "USD 2.651 M", en: "US$2.65B" }, texto: { es: "en exportaciones de software en 2025, récord histórico", en: "in software exports in 2025, an all-time high" } },
      { valor: { es: "49 %", en: "49%" }, texto: { es: "de esas exportaciones va a los Estados Unidos", en: "of those exports go to the United States" } },
      { valor: { es: "155.000+", en: "155,000+" }, texto: { es: "empleos registrados en la industria del software", en: "registered jobs in the software industry" } },
      { valor: { es: "1.º", en: "#1" }, texto: { es: "en dominio del inglés en América Latina (28.º en el mundo)", en: "in English proficiency in Latin America (28th worldwide)" } },
      { valor: { es: "+14", en: "14+" }, texto: { es: "unicornios tecnológicos nacidos en la Argentina", en: "tech unicorns born in Argentina" } },
    ],
    ofreceTitulo: { es: "Qué ofrece", en: "What Argentina offers" },
    ofrece: [
      {
        titulo: { es: "Talento en cantidad y calidad", en: "Deep, skilled talent" },
        texto: { es: "Más de 140.000 graduados en carreras tecnológicas y más de 5.000 empresas de servicios basados en el conocimiento.", en: "More than 140,000 graduates in tech degrees and over 5,000 knowledge-based services companies." },
      },
      {
        titulo: { es: "Inglés y experiencia internacional", en: "English and global experience" },
        texto: { es: "El mejor nivel de inglés de América Latina y años de trabajo en equipos bilingües con clientes de los Estados Unidos y Europa.", en: "Latin America’s highest English proficiency and years of experience in bilingual teams serving clients in the U.S. and Europe." },
      },
      {
        titulo: { es: "El mismo día laboral", en: "The same working day" },
        texto: { es: "Entre 1 y 2 horas de diferencia con Atlanta: reuniones, revisiones y entregas en tiempo real.", en: "Just 1 to 2 hours ahead of Atlanta: meetings, reviews and releases happen in real time." },
      },
      {
        titulo: { es: "Calidad respaldada por ley", en: "Quality backed by law" },
        texto: { es: "Políticas de Estado para el sector desde 2004. Hoy, las empresas de la Ley de Economía del Conocimiento deben exportar, invertir en I+D, capacitar a su personal y certificar normas de calidad.", en: "Government support for the industry since 2004. Today, companies under the Knowledge Economy Law must export, invest in R&D, train their staff and hold quality certifications." },
      },
      {
        titulo: { es: "Costo eficiente, sin resignar calidad", en: "Cost-effective, not cut-rate" },
        texto: { es: "Costos competitivos en perfiles semisenior y senior, con mejor retorno de la inversión.", en: "Competitive costs for mid-level and senior profiles, with a better return on investment." },
      },
      {
        titulo: { es: "Talento en todo el país", en: "Talent nationwide" },
        texto: { es: "Más de 40 polos y clusters tecnológicos, de Córdoba y Mendoza a Rosario, Tandil y Bariloche.", en: "More than 40 tech hubs and clusters, from Córdoba and Mendoza to Rosario, Tandil and Bariloche." },
      },
    ],
    empresasTitulo: { es: "Nacidas en la Argentina", en: "Born in Argentina" },
    empresasNota: { es: "Algunos de los unicornios tecnológicos argentinos. Es probable que ya uses alguno.", en: "A few of Argentina’s tech unicorns. Chances are you already use one." },
    empresas: [
      { nombre: "Mercado Libre", texto: { es: "Comercio electrónico, pagos y logística. La primera startup argentina en superar los USD 1.000 millones de valor; cotiza en Nasdaq.", en: "E-commerce, payments and logistics. The first Argentine startup valued at over US$1 billion; listed on Nasdaq." } },
      { nombre: "Globant", texto: { es: "Transformación digital para empresas de todo el mundo, con más de 29.000 profesionales en 33 países. Cotiza en la Bolsa de Nueva York.", en: "Digital transformation for companies worldwide, with 29,000+ professionals in 33 countries. Listed on the New York Stock Exchange." } },
      { nombre: "Auth0", texto: { es: "Inicio de sesión y gestión de identidades digitales. Okta la compró en 2021.", en: "Login and digital identity management. Acquired by Okta in 2021." } },
      { nombre: "Vercel", texto: { es: "Plataforma de aplicaciones en la nube que ayuda a los desarrolladores a crear, desplegar y escalar aplicaciones web, frameworks de frontend y herramientas con IA.", en: "A cloud application platform that helps developers build, deploy, and scale web applications, frontend frameworks, and AI-powered tools." } },
      { nombre: "Ualá", texto: { es: "Billetera virtual y servicios financieros con más de 6 millones de usuarios en América Latina.", en: "Digital wallet and financial services with 6 million+ users across Latin America." } },
      { nombre: "Despegar", texto: { es: "La plataforma de viajes líder de América Latina.", en: "Latin America’s leading travel platform." } },
      { nombre: "Tiendanube", texto: { es: "Tiendas en línea que se crean en pocos pasos, para emprendedores y pymes de América Latina.", en: "Online stores built in a few steps, for entrepreneurs and small businesses across Latin America." } },
      { nombre: "Mural", texto: { es: "Pizarras digitales para el trabajo colaborativo.", en: "Digital whiteboards for collaborative work." } },
      { nombre: "Satellogic", texto: { es: "Soluciones satelitales e información geoespacial.", en: "Satellite solutions and geospatial information." } },
      { nombre: "Technisys", texto: { es: "Plataforma de servicios financieros para bancos y fintech.", en: "Digital banking platform for banks and fintech companies." } },
      { nombre: "Aleph", texto: { es: "Herramientas para el comercio digital.", en: "Tools for digital commerce." } },
    ],
    verticalesTitulo: { es: "Dónde exporta más", en: "Top export verticals" },
    verticalesNota: { es: "Exportaciones de software por vertical, 2024", en: "Software exports by vertical, 2024" },
    verticales: [
      { nombre: { es: "Servicios financieros", en: "Financial services" }, valor: 32, destacada: true },
      { nombre: { es: "Software y servicios", en: "Software & services" }, valor: 14 },
      { nombre: "Gov-tech", valor: 10 },
      { nombre: { es: "Telecomunicaciones", en: "Telecommunications" }, valor: 9 },
      { nombre: { es: "Comercio y retail", en: "Commerce & retail" }, valor: 9 },
      { nombre: "HealthTech", valor: 8 },
      { nombre: { es: "Otras (logística, agro, gaming, educación)", en: "Other (logistics, agtech, gaming, edtech)" }, valor: 18 },
    ],
    verticalesRemate: {
      es: "Los servicios financieros encabezan la lista: la Argentina habla el idioma de Transaction Alley.",
      en: "Financial services top the list: Argentina speaks Transaction Alley’s language.",
    },
    datosTitulo: { es: "¿Sabías que…?", en: "Did you know?" },
    datos: [
      { destacado: { es: "1 de cada 6 dólares", en: "1 in every 6 dollars" }, texto: { es: "que la Argentina exporta en servicios viene del software.", en: "of Argentina’s service exports comes from software." } },
      { destacado: { es: "68 %", en: "68%" }, texto: { es: "creció el empleo en software en los últimos diez años.", en: "growth in software jobs over the last ten years." } },
      { destacado: { es: "Se duplicaron", en: "2×" }, texto: { es: "las exportaciones de software en los últimos diez años.", en: "growth in software exports over the last ten years." } },
      { destacado: { es: "35 %", en: "35%" }, texto: { es: "de quienes trabajan en la industria del software son mujeres.", en: "of the software industry’s workforce are women." } },
      { destacado: { es: "3 premios Nobel en ciencias", en: "3 Nobel Prizes in science" }, texto: { es: "recibieron científicos argentinos.", en: "have been awarded to Argentine scientists." } },
      { destacado: { es: "Muchas conexiones aéreas", en: "Plenty of flight options" }, texto: { es: "unen Atlanta con la Argentina, incluido un vuelo sin escalas a Buenos Aires.", en: "connect Atlanta with Argentina, including a nonstop flight to Buenos Aires." } },
    ],
    fuentes: {
      es: "Fuentes: CESSI, «Why Argentina» (2025) y «Argentina Tech Hub NY» (2026); OPSSI-CESSI, reporte sobre el sector de software y servicios informáticos (abril de 2026), con datos del INDEC y del Ministerio de Capital Humano; EF English Proficiency Index.",
      en: "Sources: CESSI, “Why Argentina” (2025) and “Argentina Tech Hub NY” (2026); OPSSI-CESSI report on Argentina’s software and IT services industry (April 2026), based on INDEC and Ministry of Human Capital data; EF English Proficiency Index.",
    },
    fuentesUrl: "https://cessi.org.ar",
  },

  recursos: [
    {
      nombre: "Argentina Delivers",
      url: "https://argentinadelivers.com",
      detalle: {
        es: "Iniciativa del Consulado General en Atlanta que acerca a empresas de EE.UU. la oferta argentina de servicios basados en el conocimiento y nearshoring.",
        en: "Consulate General in Atlanta initiative connecting U.S. companies with Argentina’s knowledge-based services and nearshoring providers.",
      },
    },
    {
      nombre: "Next From Argentina",
      url: {
        es: "https://www.cancilleria.gob.ar/es/nuevas-tecnologias/next-from-argentina",
        en: "https://www.cancilleria.gob.ar/en/new-technologies/next-from-argentina-en",
      },
      detalle: {
        es: "Plataforma bilingüe de la Cancillería que reúne la oferta exportable y de inversión de startups y empresas de la economía del conocimiento.",
        en: "Bilingual platform by Argentina’s Foreign Ministry showcasing the export and investment offering of knowledge-economy startups and companies.",
      },
    },
    {
      nombre: { es: "Argentina TradeNet · Convocatorias", en: "Argentina TradeNet · Open calls" },
      url: "https://www.cancilleria.gob.ar/es/argentinatradenet/convocatorias",
      detalle: {
        es: "Convocatorias abiertas de la Cancillería para misiones comerciales, ferias y rondas de negocios.",
        en: "Open calls from Argentina’s Foreign Ministry for trade missions, fairs and B2B matchmaking.",
      },
    },
    {
      nombre: { es: "Consulado General en Atlanta", en: "Consulate General in Atlanta" },
      url: "https://catla.cancilleria.gob.ar",
      detalle: {
        es: "Sitio oficial del Consulado General de la República Argentina en Atlanta.",
        en: "Official site of the Consulate General of the Argentine Republic in Atlanta.",
      },
    },
  ],
};
