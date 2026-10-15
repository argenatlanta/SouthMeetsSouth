/*
 * Configuración general del sitio South Meets South.
 * Ver CLAUDE.md (raíz del repo) para las reglas de edición.
 */
window.SMS_SITIO = {
  // true = muestra el aviso "Versión preliminar" y resalta los datos marcados con `verificar: true`.
  // Pasar a false cuando el contenido esté revisado.
  borrador: true,

  // Fecha de la última actualización del contenido (AAAA-MM-DD). Se muestra en el pie.
  actualizado: "2026-10-15",

  contacto: {
    organismo: {
      es: "Consulado General de la República Argentina en Atlanta",
      en: "Consulate General of the Argentine Republic in Atlanta",
    },
    // Completar con el correo de la sección comercial. Si queda vacío, se muestra solo el sitio web.
    email: "",
    web: "https://catla.cancilleria.gob.ar",
    linkedin: "",
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
      url: "",
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
