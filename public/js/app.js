/*
 * South Meets South · lógica del sitio.
 * Renderiza la portada (index.html) y la página de cada edición (edicion.html?id=AAAA)
 * a partir de data/sitio.js y data/ediciones.js. Sin dependencias externas.
 */
(function () {
  "use strict";

  var SITIO = window.SMS_SITIO || {};
  var EDICIONES = (window.SMS_EDICIONES || []).slice().sort(function (a, b) {
    return String(b.inicio).localeCompare(String(a.inicio));
  });
  var BORRADOR = !!SITIO.borrador;

  // ───────────────────────── Textos de la interfaz ─────────────────────────
  var UI = {
    es: {
      skip: "Ir al contenido",
      nav_next: "Próxima misión",
      nav_mission: "Misión {year}",
      nav_argentina: "Por qué Argentina",
      nav_editions: "Ediciones anteriores",
      nav_why: "Sobre Georgia",
      nav_resources: "Recursos",
      nav_contact: "Contacto",
      menu: "Menú",
      draft_banner: "Versión preliminar · El contenido está en revisión y puede cambiar.",
      verify: "a verificar",
      hero_tagline: "Conectando los ecosistemas tecnológicos de la Argentina y del Sudeste de EE.UU.",
      hero_lead:
        "Empresas argentinas de software y tecnología viajan a Atlanta para hacer negocios con el ecosistema de innovación del sur de los Estados Unidos. Acá reunimos cada edición de la misión y lo que viene.",
      hero_cta_next: "Ver la próxima misión",
      hero_cta_editions: "Ediciones anteriores",
      hero_art_title: "Argentina y Atlanta, a latitudes espejo",
      hero_art_caption: "Dos regiones del sur, a latitudes espejo y con 1 a 2 horas de diferencia horaria.",
      equator: "Ecuador",
      countdown_n: "Faltan {n} días para la misión en {city}",
      countdown_1: "Falta 1 día para la misión en {city}",
      countdown_0: "Hoy comienza la misión en {city}",
      countdown_live: "Misión en curso",
      next_title: "Lo que viene",
      next_none: "Pronto anunciaremos la próxima edición.",
      itinerary: "En Atlanta",
      other_legs_next: "La misión continúa luego en {cities}.",
      other_legs_past: "La misión continuó luego en {cities}.",
      program: "Programa previsto",
      sectors: "Sectores",
      call_title: "Convocatoria para empresas argentinas",
      call_open: "Inscripción abierta",
      call_closed: "Inscripción cerrada",
      call_open_until: "Hasta el {date}.",
      call_closed_on: "Cerró el {date}.",
      call_link: "Ver convocatoria oficial",
      hosts_title: "Empresas e instituciones de Atlanta",
      contact_btn: "Contactar al Consulado",
      see_details: "Ver detalle",
      see_delegation: "Conocer la delegación",
      find_fit: "Encontrar la empresa indicada",
      interest_form: "Regístrese en la sesión B2B",
      b2b_note: "Las inscripciones quedan sujetas a confirmación del Consulado.",
      b2b_cta: "¿Quiere reunirse con estas empresas en la sesión B2B?",
      meet_btn: "Quiero reunirme",
      meet_bar_one: "Mi lista B2B: 1 empresa",
      meet_bar: "Mi lista B2B: {n} empresas",
      meet_bar_label: "Mi lista para la sesión B2B",
      meet_review: "Revisar y enviar",
      meet_add_full: "Sumar a mi lista las que coinciden en todo ({n})",
      meet_added: "{name} se sumó a su lista.",
      meet_removed: "{name} se quitó de su lista.",
      meet_title: "Su lista para la sesión B2B",
      meet_intro: "Estas son las empresas de la delegación con las que le gustaría reunirse. Compártala con el Consulado para que podamos organizar mejor sus reuniones B2B.",
      meet_searched: "Lo que buscó",
      meet_companies: "Empresas con las que quiere reunirse",
      meet_empty: "Su lista está vacía. Use «Quiero reunirme» en las empresas que le interesen.",
      meet_remove: "Quitar {name} de la lista",
      meet_step_luma: "Si todavía no se registró, regístrese en la sesión B2B y pegue su lista en la pregunta sobre el tipo de empresas con las que quiere conectarse.",
      meet_copy: "Copiar mi lista",
      meet_copied: "Lista copiada",
      meet_or_mail: "¿Ya se registró o prefiere enviarla por correo? Mándela al Consulado.",
      meet_company: "Su empresa",
      meet_name: "Su nombre y cargo",
      meet_notes: "Comentarios (opcional)",
      meet_send: "Enviar por correo",
      meet_err: "Complete su empresa y su nombre para enviar la lista.",
      meet_done: "Se abrió su programa de correo con la lista dirigida a {email}. Si no se abrió, copie su lista y envíela a esa dirección.",
      meet_t_head: "Mi lista para la sesión B2B · South Meets South {year}",
      meet_t_company: "Empresa",
      meet_t_by: "Contacto",
      meet_t_needs: "Busca",
      meet_t_industries: "Industria",
      meet_t_list: "Empresas argentinas con las que quiero reunirme",
      meet_t_notes: "Comentarios",
      meet_t_link: "Enlace a la lista",
      meet_subject: "Lista B2B – {name}",
      past_title: "Lo que construimos en cada misión",
      past_lead:
        "Actividades, reuniones, empresas de la delegación y las instituciones que nos recibieron en cada edición.",
      total_editions: "ediciones recientes",
      total_since: "primera misión a Atlanta",
      total_companies: "empresas argentinas",
      total_companies_editions: "empresas argentinas en esas ediciones",
      companies_n: "{n} empresas",
      view_edition: "Ver edición",
      why_title: "Sobre Georgia",
      why_lead: "Un estado favorable a los negocios y un polo tecnológico en crecimiento: Georgia y su capital, Atlanta, son una base natural para las empresas argentinas que buscan llegar al Sudeste de los Estados Unidos.",
      why_1_t: "Misma jornada laboral",
      why_1_p: "Argentina está apenas 1 o 2 horas adelante de Atlanta: los equipos argentinos trabajan en tiempo real con clientes de EE.UU.",
      why_2_t: "Polo fintech",
      why_2_p: "Georgia es conocida como «Transaction Alley», uno de los mayores centros de procesamiento de pagos de los Estados Unidos.",
      why_3_t: "Ecosistema de innovación",
      why_3_p: "Georgia Tech y su incubadora ATDC, Atlanta Tech Village y la Technology Association of Georgia impulsan una comunidad tecnológica en crecimiento.",
      why_4_t: "Puerta de entrada",
      why_4_p: "El aeropuerto Hartsfield-Jackson, uno de los más transitados del mundo, conecta Atlanta con todo Estados Unidos.",
      resources_title: "Para seguir conectados",
      contact_title: "Hablemos",
      contact_lead:
        "Para sumarse a una próxima misión, recibir a la delegación en Atlanta o proponer actividades, comuníquese con el Consulado.",
      contact_web: "Sitio del Consulado",
      contact_email: "Escribir un correo",
      contact_linkedin: "LinkedIn",
      footer_tagline: "South Meets South · Misión de Software y Tecnología Argentina → Atlanta",
      footer_updated: "Actualizado: {date}",
      back: "Todas las ediciones",
      status_next: "Próxima",
      status_done: "Realizada",
      sec_summary: "Resumen",
      sec_agenda: "Lo que hicimos",
      sec_agenda_next: "Programa",
      sec_participate: "Cómo participar",
      sec_delegation: "Empresas de la delegación",
      sec_hosts: "Nos recibieron",
      sec_meetings: "Con quiénes nos reunimos",
      sec_results: "Resultados",
      sec_gallery: "Galería",
      sec_press: "Prensa y documentos",
      sec_organizers: "Organizan",
      empty: "Sección a completar.",
      during: "Durante la misión",
      website: "Sitio web",
      more_info: "Más información",
      finder_search: "Buscar por palabra clave",
      finder_search_ph: "Por ejemplo: pagos, React, salud",
      finder_clear: "Limpiar filtros",
      finder_all: "Se muestran las {total} empresas de la delegación.",
      finder_ranked: "Resultados: {n} de {total} empresas, ordenadas por coincidencia.",
      finder_filtered: "Resultados: {n} de {total} empresas.",
      finder_empty: "Ninguna empresa coincide con esa búsqueda. Pruebe con otra palabra clave.",
      fit_all: "Coincide en todo",
      fit_some: "Coincide en {n} de {m}",
      val_title: "Validación de etiquetas",
      val_intro: "El buscador «Encuentre la empresa indicada» ayuda a las empresas de Atlanta a encontrar la empresa argentina que mejor se ajusta a lo que necesitan. Estas son las etiquetas con las que hoy aparece su empresa: desmarque las que no correspondan, marque las que falten y envíe la respuesta al Consulado.",
      val_choose: "Su empresa",
      val_choose_ph: "Seleccione su empresa",
      val_offer: "¿Qué ofrece su empresa?",
      val_industries: "¿En qué industrias tiene experiencia?",
      val_help: "Marque todas las que correspondan.",
      val_notes: "¿Falta alguna categoría o quiere aclarar algo? (opcional)",
      val_name: "Nombre y cargo de quien responde",
      val_name_err: "Escriba su nombre y cargo para enviar la respuesta.",
      val_nochanges: "Sin cambios: confirma las etiquetas actuales.",
      val_changes: "Cambios: {add} agregadas y {del} quitadas.",
      val_send: "Enviar al Consulado",
      val_done_t: "Su respuesta está lista",
      val_done_p: "Se abrió su programa de correo con la respuesta dirigida a {email}. Si no se abrió, copie el texto y envíelo a esa dirección.",
      val_copy: "Copiar respuesta",
      val_copied: "Respuesta copiada",
      val_edit: "Volver a editar",
      val_see: "Ver el buscador",
      val_subject: "Validación de etiquetas – {name}",
      val_m_company: "Empresa",
      val_m_by: "Respondió",
      val_m_added: "Agregadas",
      val_m_removed: "Quitadas",
      val_m_none: "Sin cambios",
      val_m_changes: "Cambios respecto de lo publicado",
      val_m_notes: "Comentarios",
      close: "Cerrar",
      photos_by: "Fotos",
      photo_prev: "Foto anterior",
      photo_next: "Foto siguiente",
      photo_of: "{n} de {total}",
      ficha_about: "Qué hace",
      ficha_services: "Servicios",
      ficha_track: "Trayectoria",
      ficha_us: "En Estados Unidos",
      ficha_clients: "Clientes y proyectos destacados",
      prev_edition: "Edición anterior",
      next_edition: "Edición siguiente",
      not_found_t: "No encontramos esa edición",
      not_found_p: "Puede que el enlace esté mal escrito.",
      kind_asociacion: "Asociación",
      kind_hub: "Hub de innovación",
      kind_universidad: "Universidad / incubadora",
      kind_empresa: "Empresa",
      kind_camara: "Cámara de comercio",
      kind_gobierno: "Gobierno",
      kind_otro: "Institución",
      page_title_home: "South Meets South · Misión de Software y Tecnología Argentina → Atlanta",
      noscript: "Este sitio necesita JavaScript para mostrar su contenido.",
    },
    en: {
      skip: "Skip to content",
      nav_next: "Next mission",
      nav_mission: "{year} mission",
      nav_argentina: "Why Argentina",
      nav_editions: "Past editions",
      nav_why: "About Georgia",
      nav_resources: "Resources",
      nav_contact: "Contact",
      menu: "Menu",
      draft_banner: "Preview version · Content is under review and may change.",
      verify: "to verify",
      hero_tagline: "Connecting Argentina’s and US Southeast Tech Ecosystems",
      hero_lead:
        "Argentine software and technology companies travel to Atlanta to do business with the innovation ecosystem of the U.S. South. Here you’ll find every edition of the mission — and what’s next.",
      hero_cta_next: "See the next mission",
      hero_cta_editions: "Past editions",
      hero_art_title: "Argentina and Atlanta, at mirror latitudes",
      hero_art_caption: "Two southern regions at mirror latitudes, just 1 to 2 hours apart.",
      equator: "Equator",
      countdown_n: "{n} days until the mission arrives in {city}",
      countdown_1: "1 day until the mission arrives in {city}",
      countdown_0: "The mission arrives in {city} today",
      countdown_live: "Mission in progress",
      next_title: "What’s next",
      next_none: "The next edition will be announced soon.",
      itinerary: "In Atlanta",
      other_legs_next: "The mission then continues to {cities}.",
      other_legs_past: "The mission then continued to {cities}.",
      program: "Planned program",
      sectors: "Sectors",
      call_title: "Call for Argentine companies",
      call_open: "Applications open",
      call_closed: "Applications closed",
      call_open_until: "Until {date}.",
      call_closed_on: "Closed on {date}.",
      call_link: "See the official call",
      hosts_title: "Atlanta companies and organizations",
      contact_btn: "Contact the Consulate",
      see_details: "See details",
      see_delegation: "Meet the delegation",
      find_fit: "Find your best fit",
      interest_form: "Register for the B2B session",
      b2b_note: "Registrations are subject to confirmation by the Consulate.",
      b2b_cta: "Would you like to meet these companies at the B2B session?",
      meet_btn: "I’d like to meet",
      meet_bar_one: "My B2B list: 1 company",
      meet_bar: "My B2B list: {n} companies",
      meet_bar_label: "My B2B session list",
      meet_review: "Review and send",
      meet_add_full: "Add full matches to my list ({n})",
      meet_added: "{name} was added to your list.",
      meet_removed: "{name} was removed from your list.",
      meet_title: "Your B2B session list",
      meet_intro: "These are the delegation companies you’d like to meet. Share your list with the Consulate so we can plan your B2B meetings better.",
      meet_searched: "What you searched for",
      meet_companies: "Companies you’d like to meet",
      meet_empty: "Your list is empty. Use “I’d like to meet” on the companies you’re interested in.",
      meet_remove: "Remove {name} from the list",
      meet_step_luma: "If you haven’t registered yet, register for the B2B session and paste your list in the question about the kind of companies you’d like to connect with.",
      meet_copy: "Copy my list",
      meet_copied: "List copied",
      meet_or_mail: "Already registered, or prefer email? Send your list to the Consulate.",
      meet_company: "Your company",
      meet_name: "Your name and role",
      meet_notes: "Comments (optional)",
      meet_send: "Send by email",
      meet_err: "Enter your company and your name to send the list.",
      meet_done: "Your email app opened with the list addressed to {email}. If it didn’t open, copy your list and send it to that address.",
      meet_t_head: "My B2B session list · South Meets South {year}",
      meet_t_company: "Company",
      meet_t_by: "Contact",
      meet_t_needs: "Looking for",
      meet_t_industries: "Industry",
      meet_t_list: "Argentine companies I’d like to meet",
      meet_t_notes: "Comments",
      meet_t_link: "Link to the list",
      meet_subject: "B2B list – {name}",
      past_title: "What we built on each mission",
      past_lead:
        "Activities, meetings, delegation companies and the organizations that hosted us, edition by edition.",
      total_editions: "recent editions",
      total_since: "first mission to Atlanta",
      total_companies: "Argentine companies",
      total_companies_editions: "Argentine companies in those editions",
      companies_n: "{n} companies",
      view_edition: "View edition",
      why_title: "About Georgia",
      why_lead: "A pro-business state with a growing tech hub: Georgia and its capital, Atlanta, are a natural base for Argentine companies looking to reach the U.S. Southeast.",
      why_1_t: "Same working day",
      why_1_p: "Argentina is just 1–2 hours ahead of Atlanta, so Argentine teams work in real time with U.S. clients.",
      why_2_t: "Fintech powerhouse",
      why_2_p: "Georgia is known as “Transaction Alley,” one of the largest payment-processing hubs in the United States.",
      why_3_t: "Innovation ecosystem",
      why_3_p: "Georgia Tech and its ATDC incubator, Atlanta Tech Village and the Technology Association of Georgia power a growing tech community.",
      why_4_t: "Gateway city",
      why_4_p: "Hartsfield-Jackson, one of the world’s busiest airports, connects Atlanta with the entire United States.",
      resources_title: "Stay connected",
      contact_title: "Let’s talk",
      contact_lead:
        "To join an upcoming mission, host the delegation in Atlanta or propose activities, please contact the Consulate.",
      contact_web: "Consulate website",
      contact_email: "Send an email",
      contact_linkedin: "LinkedIn",
      footer_tagline: "South Meets South · Argentina → Atlanta Software & Technology Mission",
      footer_updated: "Updated: {date}",
      back: "All editions",
      status_next: "Upcoming",
      status_done: "Completed",
      sec_summary: "Overview",
      sec_agenda: "What we did",
      sec_agenda_next: "Program",
      sec_participate: "How to take part",
      sec_delegation: "Delegation companies",
      sec_hosts: "Who hosted us",
      sec_meetings: "Who we met",
      sec_results: "Results",
      sec_gallery: "Gallery",
      sec_press: "Press & documents",
      sec_organizers: "Organized by",
      empty: "Section to be completed.",
      during: "During the mission",
      website: "Website",
      more_info: "More information",
      finder_search: "Search by keyword",
      finder_search_ph: "e.g., payments, React, healthcare",
      finder_clear: "Clear filters",
      finder_all: "Showing all {total} delegation companies.",
      finder_ranked: "Results: {n} of {total} companies, sorted by best fit.",
      finder_filtered: "Results: {n} of {total} companies.",
      finder_empty: "No company matches that search. Try another keyword.",
      fit_all: "Matches everything",
      fit_some: "Matches {n} of {m}",
      val_title: "Tag review",
      val_intro: "The “Find your best fit” search helps Atlanta companies find the Argentine company that best matches what they need. These are the tags your company appears under today: untick any that don’t apply, tick any that are missing and send your answer to the Consulate.",
      val_choose: "Your company",
      val_choose_ph: "Select your company",
      val_offer: "What does your company offer?",
      val_industries: "Which industries do you have experience in?",
      val_help: "Tick all that apply.",
      val_notes: "Is a category missing, or anything to clarify? (optional)",
      val_name: "Your name and role",
      val_name_err: "Enter your name and role to send your answer.",
      val_nochanges: "No changes: you confirm the current tags.",
      val_changes: "Changes: {add} added and {del} removed.",
      val_send: "Send to the Consulate",
      val_done_t: "Your answer is ready",
      val_done_p: "Your email app opened with the answer addressed to {email}. If it didn’t open, copy the text and send it to that address.",
      val_copy: "Copy answer",
      val_copied: "Answer copied",
      val_edit: "Back to edit",
      val_see: "See the search",
      val_subject: "Tag review – {name}",
      val_m_company: "Company",
      val_m_by: "Answered by",
      val_m_added: "Added",
      val_m_removed: "Removed",
      val_m_none: "No changes",
      val_m_changes: "Changes from what is published",
      val_m_notes: "Comments",
      close: "Close",
      photos_by: "Photos",
      photo_prev: "Previous photo",
      photo_next: "Next photo",
      photo_of: "{n} of {total}",
      ficha_about: "What they do",
      ficha_services: "Services",
      ficha_track: "Track record",
      ficha_us: "In the United States",
      ficha_clients: "Selected clients and projects",
      prev_edition: "Previous edition",
      next_edition: "Next edition",
      not_found_t: "Edition not found",
      not_found_p: "The link may be mistyped.",
      kind_asociacion: "Association",
      kind_hub: "Innovation hub",
      kind_universidad: "University / incubator",
      kind_empresa: "Company",
      kind_camara: "Chamber of commerce",
      kind_gobierno: "Government",
      kind_otro: "Organization",
      page_title_home: "South Meets South · Argentina → Atlanta Software & Technology Mission",
      noscript: "This site needs JavaScript to display its content.",
    },
  };

  // ───────────────────────── Idioma ─────────────────────────
  function storageGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function storageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* sin almacenamiento */ }
  }

  function detectLang() {
    var fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "es" || fromUrl === "en") return fromUrl;
    var saved = storageGet("sms-lang");
    if (saved === "es" || saved === "en") return saved;
    var nav = (navigator.language || "es").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }

  var lang = detectLang();

  function ui(key, vars) {
    var s = (UI[lang] && UI[lang][key]) || UI.es[key] || key;
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        s = s.split("{" + k + "}").join(vars[k]);
      });
    }
    return s;
  }

  // Texto bilingüe: acepta "texto" o { es: "...", en: "..." }.
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    return v[lang] || v.es || v.en || "";
  }

  // ───────────────────────── Utilidades ─────────────────────────
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function safeUrl(u) {
    if (!u) return "";
    var s = String(u).trim();
    if (/^(https?:|mailto:)/i.test(s)) return s;
    if (/^[a-z0-9_./-]+$/i.test(s) && s.indexOf("..") === -1) return s; // ruta relativa (imágenes)
    return "";
  }

  function parseDate(s) {
    var p = String(s || "").split("-").map(Number);
    if (p.length !== 3 || p.some(isNaN)) return null;
    return new Date(p[0], p[1] - 1, p[2]);
  }

  function locale() { return lang === "es" ? "es-AR" : "en-US"; }

  function fmtDate(s, opts) {
    var d = parseDate(s);
    if (!d) return "";
    return new Intl.DateTimeFormat(locale(), opts || { day: "numeric", month: "long", year: "numeric" }).format(d);
  }

  function fmtRange(a, b, withYear) {
    var d1 = parseDate(a), d2 = parseDate(b || a);
    if (!d1) return "";
    var opts = withYear === false ? { day: "numeric", month: "long" } : { day: "numeric", month: "long", year: "numeric" };
    var f = new Intl.DateTimeFormat(locale(), opts);
    if (!d2 || d1.getTime() === d2.getTime()) return f.format(d1);
    if (typeof f.formatRange === "function") return f.formatRange(d1, d2);
    return f.format(d1) + " – " + f.format(d2);
  }

  function today() {
    var n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate());
  }

  function daysUntil(s) {
    var d = parseDate(s);
    if (!d) return null;
    return Math.round((d - today()) / 86400000);
  }

  function year(ed) { return String(ed.inicio || "").slice(0, 4) || ed.id; }

  // El sitio cubre solo la etapa de Atlanta; las otras ciudades de la misión se mencionan en una línea.
  // Devuelve HTML (ya escapado): «La misión continúa luego en Chicago los días 18 y 19 de noviembre.»
  // y, si la etapa tiene contacto, un enlace por correo al consulado de esa ciudad.
  function otherLegsNote(ed) {
    var legs = ed.otrasEtapas || [];
    if (!legs.length) return "";
    var list = legs.map(function (o) {
      if (o.inicio) return esc(o.ciudad) + " " + esc(datesPhrase(o.inicio, o.fin));
      var nota = t(o.nota);
      return esc(o.ciudad) + (nota ? " (" + esc(nota) + ")" : "");
    });
    var contacts = legs.filter(function (o) { return o.contacto && o.contacto.email; }).map(function (o) {
      return '<a href="mailto:' + esc(o.contacto.email) + '">' + esc(t(o.contacto.texto)) + "</a>";
    });
    return esc(ui(ed.estado === "proxima" ? "other_legs_next" : "other_legs_past")).split("{cities}").join(list.join(", ")) +
      (contacts.length ? " " + contacts.join(" ") : "");
  }

  // «los días 18 y 19 de noviembre», «del 18 al 21 de noviembre» / «on November 18 – 19».
  function datesPhrase(a, b) {
    var d1 = parseDate(a), d2 = parseDate(b || a);
    if (!d1) return "";
    if (lang === "en") return "on " + fmtRange(a, b, false);
    var month = new Intl.DateTimeFormat("es-AR", { month: "long" });
    if (!d2 || d1.getTime() === d2.getTime()) return "el " + d1.getDate() + " de " + month.format(d1);
    if (d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()) {
      return (d2.getDate() - d1.getDate() === 1 ? "los días " + d1.getDate() + " y " : "del " + d1.getDate() + " al ") + d2.getDate() + " de " + month.format(d2);
    }
    return "del " + d1.getDate() + " de " + month.format(d1) + " al " + d2.getDate() + " de " + month.format(d2);
  }

  function verifyTag(item) {
    return BORRADOR && item && item.verificar ? '<span class="verify-tag">' + esc(ui("verify")) + "</span>" : "";
  }
  function verifyClass(item) {
    return BORRADOR && item && item.verificar ? " needs-verify" : "";
  }

  // Cifras en fila (portada y página de edición): [{ valor, texto, item? }]; item lleva `verificar`.
  // valor y texto pueden ser bilingües. cls agrega una clase a la grilla (p. ej. "stats-3").
  function stats(list, cls) {
    return '<dl class="stats' + (cls ? " " + cls : "") + '">' + list.filter(Boolean).map(function (s) {
      return '<div class="stat' + verifyClass(s.item) + '"><dt>' + esc(t(s.texto)) + verifyTag(s.item) + "</dt><dd>" + esc(t(s.valor)) + "</dd></div>";
    }).join("") + "</dl>";
  }

  function edUrl(ed) {
    return "edicion.html?id=" + encodeURIComponent(ed.id) + (lang === "en" ? "&lang=en" : "");
  }

  function isEmpty(list) { return !list || !list.length; }

  var ICON = {
    plus: '<svg class="plus" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
    tick: '<svg class="tick" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
    back: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    ext: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    pin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>',
    chevron: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    prev: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    next: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  };

  // ───────────────────────── Elementos comunes ─────────────────────────
  function applyStaticTexts() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = ui(el.getAttribute("data-i18n"));
    });
    // El ítem del menú lleva el año de la próxima misión («Misión 2026»); sin misión anunciada, «Próxima misión».
    var nx = nextEdition();
    if (nx) document.querySelectorAll('[data-i18n="nav_next"]').forEach(function (el) { el.textContent = ui("nav_mission", { year: year(nx) }); });
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    var banner = document.getElementById("draft-banner");
    if (banner) {
      banner.hidden = !BORRADOR;
      banner.textContent = ui("draft_banner");
    }
    document.body.classList.toggle("is-draft", BORRADOR);
    // Los enlaces del menú en la página de edición apuntan a la portada.
    var home = document.body.getAttribute("data-page") === "home" ? "" : "index.html" + (lang === "en" ? "?lang=en" : "");
    document.querySelectorAll("[data-home-anchor]").forEach(function (a) {
      a.setAttribute("href", home + "#" + a.getAttribute("data-home-anchor"));
    });
    var brand = document.querySelector(".brand");
    if (brand) brand.setAttribute("href", "index.html" + (lang === "en" ? "?lang=en" : ""));
  }

  function renderFooter() {
    var el = document.getElementById("footer");
    if (!el) return;
    var c = SITIO.contacto || {};
    var updated = SITIO.actualizado ? ui("footer_updated", { date: fmtDate(SITIO.actualizado) }) : "";
    el.innerHTML =
      '<div class="container footer-inner">' +
      "<div><div>" + esc(ui("footer_tagline")) + "</div><div>" + esc(t(c.organismo)) + "</div></div>" +
      "<div>" + esc(updated) + "</div>" +
      "</div>";
  }

  function setupMenu() {
    var btn = document.querySelector(".menu-toggle");
    var nav = document.getElementById("main-nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    function close(focus) {
      if (!nav.classList.contains("open")) return;
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      if (focus) btn.focus();
    }
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) close(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(true); });
    document.addEventListener("click", function (e) { if (!e.target.closest(".main-nav, .menu-toggle")) close(false); });
  }

  function setupLangSwitch(render) {
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () {
        var l = b.getAttribute("data-lang");
        if (l === lang) return;
        lang = l;
        storageSet("sms-lang", l);
        var url = new URL(window.location.href);
        if (l === "en") url.searchParams.set("lang", "en");
        else url.searchParams.delete("lang");
        window.history.replaceState(null, "", url.pathname + url.search + url.hash);
        applyStaticTexts();
        render();
        renderFooter();
      });
    });
  }

  // ───────────────────────── Portada ─────────────────────────
  function nextEdition() {
    var upcoming = EDICIONES.filter(function (e) { return e.estado === "proxima"; });
    return upcoming.length ? upcoming[upcoming.length - 1] : null; // la más cercana
  }

  function pastEditions() {
    return EDICIONES.filter(function (e) { return e.estado !== "proxima"; });
  }

  function countdownText(ed) {
    var cd = ed.cuentaRegresiva || { fecha: ed.inicio, ciudad: "Atlanta" };
    var n = daysUntil(cd.fecha);
    if (n == null) return "";
    var city = cd.ciudad || "Atlanta";
    if (n > 1) return ui("countdown_n", { n: n, city: city });
    if (n === 1) return ui("countdown_1", { city: city });
    if (n === 0) return ui("countdown_0", { city: city });
    var end = daysUntil(ed.fin);
    if (end != null && end >= 0) return ui("countdown_live");
    return "";
  }

  function heroArt() {
    return (
      '<svg viewBox="0 0 420 420" role="img" aria-labelledby="hero-art-title">' +
      '<title id="hero-art-title">' + esc(ui("hero_art_title")) + "</title>" +
      "<defs>" +
      '<radialGradient id="globe" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#1c3d61"/><stop offset="1" stop-color="#0b1a2c"/></radialGradient>' +
      '<clipPath id="globe-clip"><circle cx="210" cy="210" r="180"/></clipPath>' +
      "</defs>" +
      '<circle cx="210" cy="210" r="180" fill="url(#globe)" stroke="rgba(116,172,223,.45)" stroke-width="1.5"/>' +
      '<g clip-path="url(#globe-clip)" fill="none" stroke="rgba(116,172,223,.22)" stroke-width="1">' +
      '<line x1="30" y1="120" x2="390" y2="120"/><line x1="30" y1="300" x2="390" y2="300"/>' +
      '<line x1="30" y1="54" x2="390" y2="54"/><line x1="30" y1="366" x2="390" y2="366"/>' +
      '<ellipse cx="210" cy="210" rx="60" ry="180"/><ellipse cx="210" cy="210" rx="120" ry="180"/><ellipse cx="210" cy="210" rx="165" ry="180"/>' +
      '<line x1="210" y1="30" x2="210" y2="390"/>' +
      "</g>" +
      '<line x1="30" y1="210" x2="390" y2="210" stroke="rgba(116,172,223,.7)" stroke-width="1.5" stroke-dasharray="4 6"/>' +
      '<text x="384" y="202" text-anchor="end" fill="#a9bdd3" font-size="11" font-family="Inter, sans-serif" letter-spacing="1.5">' + esc(ui("equator").toUpperCase()) + " 0°</text>" +
      '<line x1="173" y1="110" x2="400" y2="110" stroke="rgba(242,176,30,.35)" stroke-dasharray="2 5"/>' +
      '<line x1="240" y1="312" x2="400" y2="312" stroke="rgba(242,176,30,.35)" stroke-dasharray="2 5"/>' +
      '<path class="route" d="M240 312 Q 345 215 173 110" fill="none" stroke="#f2b01e" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="173" cy="110" r="7" fill="#f2b01e"/><circle cx="173" cy="110" r="14" fill="none" stroke="rgba(242,176,30,.5)"/>' +
      '<circle cx="240" cy="312" r="7" fill="#74acdf"/><circle cx="240" cy="312" r="14" fill="none" stroke="rgba(116,172,223,.5)"/>' +
      '<g font-family="Bricolage Grotesque, Inter, sans-serif" fill="#eaf2fb">' +
      '<text x="158" y="106" text-anchor="end" font-size="20" font-weight="700">Atlanta</text>' +
      '<text x="158" y="124" text-anchor="end" font-size="12" fill="#a9bdd3" font-family="Inter, sans-serif">33°45′ N</text>' +
      '<text x="225" y="308" text-anchor="end" font-size="20" font-weight="700">Argentina</text>' +
      '<text x="225" y="326" text-anchor="end" font-size="12" fill="#a9bdd3" font-family="Inter, sans-serif">34°36′ S</text>' +
      "</g></svg>"
    );
  }

  function renderHero() {
    var el = document.getElementById("hero");
    if (!el) return;
    var nx = nextEdition();
    var cd = nx ? countdownText(nx) : "";
    el.innerHTML =
      '<div class="container hero-grid">' +
      "<div>" +
      '<h1>South <span class="accent">Meets</span> South</h1>' +
      '<p class="hero-tagline">' + esc(ui("hero_tagline")) + "</p>" +
      '<p class="hero-lead">' + esc(ui("hero_lead")) + "</p>" +
      '<div class="hero-actions">' +
      (nx ? '<a class="btn btn-primary" href="#proxima">' + esc(ui("hero_cta_next")) + ICON.arrow + "</a>" : "") +
      '<a class="btn btn-ghost" href="#ediciones">' + esc(ui("hero_cta_editions")) + "</a>" +
      "</div>" +
      (cd ? '<p class="countdown"><span class="dot" aria-hidden="true"></span>' + esc(cd) + "</p>" : "") +
      "</div>" +
      '<figure class="hero-art">' + heroArt() + "<figcaption>" + esc(ui("hero_art_caption")) + "</figcaption></figure>" +
      "</div>";
  }

  function emailButton(cls) {
    var c = SITIO.contacto || {};
    return c.email ? '<a class="btn ' + cls + '" href="mailto:' + esc(c.email) + '">' + esc(ui("contact_email")) + "</a>" : "";
  }

  function contactButtons(primaryClass) {
    var c = SITIO.contacto || {};
    var out = [];
    if (c.email) out.push(emailButton(primaryClass || "btn-primary"));
    if (safeUrl(c.web)) {
      out.push('<a class="btn ' + (c.email ? "btn-outline" : primaryClass || "btn-primary") + '" href="' + esc(safeUrl(c.web)) + '" target="_blank" rel="noopener">' + esc(ui("contact_web")) + " " + ICON.ext + "</a>");
    }
    if (safeUrl(c.linkedin)) {
      out.push('<a class="btn btn-outline" href="' + esc(safeUrl(c.linkedin)) + '" target="_blank" rel="noopener">' + esc(ui("contact_linkedin")) + " " + ICON.ext + "</a>");
    }
    return out.join("");
  }

  // Estado de la convocatoria para empresas argentinas (edición próxima).
  function callBox(ed) {
    if (!ed.convocatoria) return "";
    var cv = ed.convocatoria;
    var open = cv.estado === "abierta";
    var when = cv.cierre ? ui(open ? "call_open_until" : "call_closed_on", { date: fmtDate(cv.cierre) }) : "";
    return (
      '<div class="call">' +
      '<p class="label">' + esc(ui("call_title")) + "</p>" +
      '<div class="call-status"><span class="pill ' + (open ? "pill-open" : "pill-closed") + '">' + esc(ui(open ? "call_open" : "call_closed")) + "</span></div>" +
      (when ? "<p>" + esc(when) + "</p>" : "") +
      (cv.nota ? "<p>" + esc(t(cv.nota)) + "</p>" : "") +
      (safeUrl(cv.url) ? '<p><a href="' + esc(safeUrl(cv.url)) + '" target="_blank" rel="noopener">' + esc(ui("call_link")) + " " + ICON.ext + "</a></p>" : "") +
      "</div>"
    );
  }

  // Llamado a empresas e instituciones de Atlanta para reunirse con la delegación.
  // Botón de registro a la sesión B2B (Luma): la inscripción queda pendiente hasta que el Consulado la confirma.
  function b2bButton(ed, cls) {
    var url = safeUrl(ed.registroB2B);
    return url ? '<a class="btn ' + (cls || "btn-primary") + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(ui("interest_form")) + " " + ICON.ext + "</a>" : "";
  }

  function hostsBox(ed) {
    if (!ed.llamadoAnfitriones) return "";
    var b2b = b2bButton(ed);
    var buttons = b2b ? b2b + emailButton("btn-outline") : contactButtons("btn-primary");
    return '<div class="hosts-cta"><p class="label">' + esc(ui("hosts_title")) + "</p><p>" + esc(t(ed.llamadoAnfitriones)) + '</p><div class="hero-actions">' + buttons + "</div>" +
      (b2b ? '<p class="b2b-note">' + esc(ui("b2b_note")) + "</p>" : "") + "</div>";
  }

  function renderNext() {
    var el = document.getElementById("proxima-body");
    if (!el) return;
    var ed = nextEdition();
    if (!ed) {
      el.innerHTML = '<div class="card empty">' + esc(ui("next_none")) + "</div>";
      return;
    }
    var others = otherLegsNote(ed);
    // Fechas de la etapa Atlanta y tamaño de la delegación, sin cajas dentro de la tarjeta.
    var when =
      '<div class="next-when"><span class="next-dates">' + esc(fmtRange(ed.inicio, ed.fin)) + "</span>" +
      (typeof ed.empresas === "number" ? '<span class="next-count"><strong>' + ed.empresas + "</strong> " + esc(ui("total_companies")) + "</span>" : "") +
      "</div>";

    var program = isEmpty(ed.programa) ? "" :
      '<p class="label">' + esc(ui("program")) + '</p><ul class="program">' +
      ed.programa.map(function (p) { return "<li>" + esc(t(p)) + "</li>"; }).join("") + "</ul>";

    var sectors = isEmpty(ed.sectores) ? "" :
      '<p class="label">' + esc(ui("sectors")) + '</p><ul class="chips">' +
      ed.sectores.map(function (s) { return '<li class="chip">' + esc(t(s)) + "</li>"; }).join("") + "</ul>";

    var call = callBox(ed);
    var hosts = hostsBox(ed);

    el.innerHTML =
      '<article class="card next">' +
      '<div class="next-main">' +
      "<h3>" + esc(t(ed.titulo)) + "</h3>" +
      "<p>" + esc(t(ed.resumen)) + "</p>" +
      '<p class="label">' + esc(ui("itinerary")) + "</p>" + when +
      (others ? '<p class="legs-note">' + others + "</p>" : "") +
      sectors +
      (isEmpty(ed.delegacion) ? "" : '<p class="next-actions"><a class="btn btn-outline" href="' + esc(edUrl(ed)) + '#delegacion">' + esc(ui("see_delegation")) + ICON.arrow + "</a>" +
        (hasFinder(ed) ? '<a class="btn btn-outline" href="' + esc(edUrl(ed)) + '#buscador">' + ICON.search + esc(ui("find_fit")) + "</a>" : "") + "</p>") +
      "</div>" +
      '<div class="next-side">' + program + call + hosts +
      '<p class="next-more"><a class="link-arrow" href="' + esc(edUrl(ed)) + '">' + esc(ui("see_details")) + ICON.arrow + "</a></p>" +
      "</div>" +
      "</article>";
  }

  function renderPast() {
    var el = document.getElementById("ediciones-body");
    if (!el) return;
    var past = pastEditions();
    var known = past.filter(function (e) { return typeof e.empresas === "number"; });
    var totalCompanies = known.reduce(function (s, e) { return s + e.empresas; }, 0);
    var partial = known.length < past.length;
    var ctx = SITIO.contexto || {};
    var since = ctx.desde ? String(ctx.desde) : "";

    var context = since && ctx.texto
      ? '<p class="context' + verifyClass(ctx) + '">' + esc(t(ctx.texto).split("{desde}").join(since)) + verifyTag(ctx) + "</p>"
      : "";

    var totals = stats([
      since ? { valor: since, texto: ui("total_since"), item: ctx } : null,
      { valor: past.length, texto: ui("total_editions") },
      totalCompanies ? { valor: totalCompanies + (partial ? "+" : ""), texto: ui("total_companies_editions") } : null,
    ]);

    var cards = past.map(function (ed) {
      var meta = [fmtRange(ed.inicio, ed.fin), "Atlanta"];
      if (typeof ed.empresas === "number") meta.push(ui("companies_n", { n: ed.empresas }));
      return (
        '<li><a class="card edition-card" href="' + esc(edUrl(ed)) + '">' +
        '<div class="edition-year">' + esc(year(ed)) + "</div>" +
        // Espacio duro antes del punto: si la línea se corta, el punto queda al final y no al principio.
        "<div><h3>" + esc(t(ed.titulo)) + '</h3><p class="edition-meta">' + meta.map(esc).join(" · ") + "</p></div>" +
        '<span class="edition-go">' + esc(ui("view_edition")) + ICON.arrow + "</span>" +
        "</a></li>"
      );
    }).join("");

    el.innerHTML = context + totals + '<ul class="editions">' + cards + "</ul>";
  }

  // «Por qué Argentina»: cifras, qué ofrece, empresas nacidas en el país, exportaciones por
  // vertical y datos que sorprenden. El contenido vive en data/sitio.js (porQueArgentina).
  function renderArgentina() {
    var sec = document.getElementById("argentina");
    var el = document.getElementById("argentina-body");
    var a = SITIO.porQueArgentina;
    if (!sec || !el) return;
    sec.hidden = !a;
    if (!a) return;

    var head = '<div class="section-head"><h2>' + esc(t(a.titulo)) + "</h2>" + (a.bajada ? "<p>" + esc(t(a.bajada)) + "</p>" : "") + "</div>";

    var figures = isEmpty(a.cifras) ? "" : stats(a.cifras.map(function (c) {
      return { valor: c.valor, texto: c.texto, item: c };
    }), "stats-3");

    var offers = isEmpty(a.ofrece) ? "" :
      '<div class="ar-block"><h3 class="ar-title">' + esc(t(a.ofreceTitulo)) + '</h3><ul class="why-list cols-3">' +
      a.ofrece.map(function (o) { return '<li class="why"><h4>' + esc(t(o.titulo)) + "</h4><p>" + esc(t(o.texto)) + "</p></li>"; }).join("") +
      "</ul></div>";

    var companies = isEmpty(a.empresas) ? "" :
      '<div class="ar-block"><h3 class="ar-title">' + esc(t(a.empresasTitulo)) + "</h3>" +
      (a.empresasNota ? '<p class="ar-note">' + esc(t(a.empresasNota)) + "</p>" : "") +
      '<ul class="ar-companies">' + a.empresas.map(function (c) {
        return '<li class="' + verifyClass(c).trim() + '"><strong>' + esc(c.nombre) + verifyTag(c) + "</strong><p>" + esc(t(c.texto)) + "</p></li>";
      }).join("") + "</ul></div>";

    // Barras horizontales: una sola serie, la vertical destacada en color y el resto en gris.
    // Cada barra lleva su valor escrito, así el dato no depende del color ni del largo.
    var max = Math.max.apply(null, (a.verticales || []).map(function (v) { return v.valor; }).concat([1]));
    var chart = isEmpty(a.verticales) ? "" :
      '<div class="ar-chart"><h3 class="ar-title">' + esc(t(a.verticalesTitulo)) + "</h3>" +
      (a.verticalesNota ? '<p class="ar-note">' + esc(t(a.verticalesNota)) + "</p>" : "") +
      '<ul class="bars">' + a.verticales.map(function (v) {
        var pct = (lang === "es" ? String(v.valor) + " %" : String(v.valor) + "%");
        // El valor va en la punta de la barra; la barra ocupa una fracción del espacio que le deja.
        return '<li class="' + (v.destacada ? "is-accent" : "") + '"><span class="bar-label">' + esc(t(v.nombre)) + "</span>" +
          '<span class="bar-track"><span class="bar" aria-hidden="true" style="--f:' + (v.valor / max).toFixed(3) + '"></span>' +
          '<span class="bar-value">' + esc(pct) + "</span></span></li>";
      }).join("") + "</ul>" +
      (a.verticalesRemate ? '<p class="ar-punch">' + esc(t(a.verticalesRemate)) + "</p>" : "") + "</div>";

    var facts = isEmpty(a.datos) ? "" :
      '<div class="ar-facts"><h3 class="ar-title">' + esc(t(a.datosTitulo)) + '</h3><ul>' + a.datos.map(function (d) {
        return '<li class="' + verifyClass(d).trim() + '"><strong>' + esc(t(d.destacado)) + "</strong> " + esc(t(d.texto)) + verifyTag(d) + "</li>";
      }).join("") + "</ul></div>";

    var src = safeUrl(a.fuentesUrl);
    var sources = a.fuentes ? '<p class="ar-sources">' + esc(t(a.fuentes)) +
      (src ? ' <a href="' + esc(src) + '" target="_blank" rel="noopener">cessi.org.ar ' + ICON.ext + "</a>" : "") + "</p>" : "";

    el.innerHTML = head + figures + offers + companies +
      (chart || facts ? '<div class="ar-block ar-split">' + chart + facts + "</div>" : "") + sources;
  }

  function renderWhy() {
    var el = document.getElementById("atlanta-body");
    if (!el) return;
    var g = SITIO.sobreGeorgia || {};
    var items = [1, 2, 3, 4];
    var figures = isEmpty(g.cifras) ? "" : stats(g.cifras.map(function (c) {
      return { valor: c.valor, texto: c.texto, item: c };
    }), "stats-4");
    el.innerHTML = figures + '<ul class="why-list">' + items.map(function (n) {
      return '<li class="why"><h3>' + esc(ui("why_" + n + "_t")) + "</h3><p>" + esc(ui("why_" + n + "_p")) + "</p></li>";
    }).join("") + "</ul>" +
      (g.fuentes ? '<p class="ar-sources">' + esc(t(g.fuentes)) + "</p>" : "");
  }

  function renderResources() {
    var el = document.getElementById("recursos-body");
    if (!el) return;
    var list = SITIO.recursos || [];
    el.innerHTML = '<div class="grid-2">' + list.map(function (r) {
      var url = safeUrl(t(r.url)); // url puede ser una sola o { es, en }
      var inner = "<h3>" + esc(t(r.nombre)) + (url ? " " + ICON.ext : "") + "</h3><p>" + esc(t(r.detalle)) + "</p>";
      return url
        ? '<a class="card resource" href="' + esc(url) + '" target="_blank" rel="noopener">' + inner + "</a>"
        : '<div class="card resource">' + inner + "</div>";
    }).join("") + "</div>";
  }

  function renderContact() {
    var el = document.getElementById("contacto-body");
    if (!el) return;
    el.innerHTML =
      '<div class="card contact">' +
      "<div><h2>" + esc(ui("contact_title")) + "</h2><p>" + esc(ui("contact_lead")) + "</p></div>" +
      '<div class="contact-links">' + contactButtons("btn-primary") + "</div>" +
      "</div>";
  }

  function renderHome() {
    document.title = ui("page_title_home");
    renderHero();
    renderNext();
    renderArgentina();
    renderPast();
    renderWhy();
    renderResources();
    renderContact();
  }

  // ───────────────────────── Página de edición ─────────────────────────
  function section(id, title, body) {
    return '<section class="ed-section" id="' + id + '" aria-labelledby="' + id + '-t"><h2 id="' + id + '-t">' + esc(title) + "</h2>" + body + "</section>";
  }

  // ───────────────────────── Movimiento ─────────────────────────
  // Mismas curvas que --ease-out y --ease-drawer en styles.css.
  var EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";
  var EASE_DRAWER = "cubic-bezier(0.32, 0.72, 0, 1)";

  function reducedMotion() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  // Abre o cierra un bloque plegable animando alto y opacidad en 200 ms. Si se vuelve a tocar a
  // mitad de camino, retoma desde la altura en la que está. setShown(true|false) lo muestra u
  // oculta de verdad (atributo hidden u open); shown dice si hoy está visible (Chrome calcula el
  // alto del contenido de un <details> cerrado, así que no alcanza con medirlo).
  // Con movimiento reducido, solo un fundido al abrir.
  function toggleCollapse(el, open, setShown, shown) {
    var from = shown ? el.getBoundingClientRect().height : 0;
    var fromOpacity = from ? Number(getComputedStyle(el).opacity) : 0;
    if (el._anim) el._anim.cancel();
    if (open) setShown(true);
    if (typeof el.animate !== "function") { if (!open) setShown(false); return; }
    if (reducedMotion()) {
      if (open) el._anim = el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, easing: EASE_OUT });
      else setShown(false);
      return;
    }
    el.style.overflow = "hidden";
    var anim = el.animate(
      [{ height: from + "px", opacity: fromOpacity }, { height: (open ? el.scrollHeight : 0) + "px", opacity: open ? 1 : 0 }],
      { duration: 200, easing: EASE_OUT }
    );
    el._anim = anim;
    anim.oncancel = function () { el.style.overflow = ""; };
    anim.onfinish = function () {
      el.style.overflow = "";
      el._anim = null;
      if (!open) setShown(false);
    };
  }

  // Sección cerrada por defecto: el título es un botón con una flecha que la despliega.
  function foldSection(id, title, body) {
    return '<section class="ed-section fold" id="' + id + '" aria-labelledby="' + id + '-t">' +
      '<h2 id="' + id + '-t"><button type="button" class="fold-btn" aria-expanded="false" aria-controls="' + id + '-body">' +
      esc(title) + '<span class="chev" aria-hidden="true">' + ICON.chevron + "</span></button></h2>" +
      '<div class="fold-body" id="' + id + '-body" hidden><div class="fold-inner">' + body + "</div></div></section>";
  }

  function bindFolds() {
    document.querySelectorAll(".fold-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        var open = b.getAttribute("aria-expanded") !== "true";
        var body = document.getElementById(b.getAttribute("aria-controls"));
        b.setAttribute("aria-expanded", String(open));
        toggleCollapse(body, open, function (shown) { body.hidden = !shown; }, !body.hidden);
      });
    });
    // Momentos de la galería (<details>): la flecha gira al instante (clase is-open) y el
    // contenido se despliega; el atributo open se quita recién cuando termina de cerrarse.
    document.querySelectorAll("details.gallery-group").forEach(function (d) {
      var body = d.querySelector(".group-body");
      d.querySelector("summary").addEventListener("click", function (e) {
        e.preventDefault();
        var open = !d.classList.contains("is-open");
        d.classList.toggle("is-open", open);
        toggleCollapse(body, open, function (shown) { d.open = shown; }, d.open);
      });
      // Si el navegador lo abre por su cuenta (por ejemplo, al buscar texto), la flecha acompaña.
      d.addEventListener("toggle", function () { if (d.open) d.classList.add("is-open"); });
    });
  }

  function emptyBox() { return '<div class="empty">' + esc(ui("empty")) + "</div>"; }

  function initials(name) {
    return String(name || "").split(/\s+/).filter(function (w) { return /^[A-Za-zÀ-ÿ]/.test(w); }).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase();
  }

  function renderAgenda(ed) {
    var items = ed.agenda || [];
    var dated = items.filter(function (a) { return a.fecha; });
    var undated = items.filter(function (a) { return !a.fecha; });
    // Ordena por fecha y hora de inicio ("9:00" va antes que "15:00"); sin hora se respeta el orden de la lista.
    function timeKey(h) {
      var m = /^(\d{1,2}):(\d{2})/.exec(h || "");
      return m ? ("0" + m[1]).slice(-2) + m[2] : "";
    }
    dated.sort(function (a, b) { return (a.fecha + timeKey(a.hora)).localeCompare(b.fecha + timeKey(b.hora)); });
    return '<ol class="agenda">' + dated.concat(undated).map(function (a) {
      var when = a.fecha ? fmtDate(a.fecha, { weekday: "short", day: "numeric", month: "short" }) + (a.hora ? " · " + a.hora : "") : ui("during");
      return (
        '<li class="' + verifyClass(a).trim() + '">' +
        '<div class="agenda-when">' + esc(when) + "</div>" +
        "<div><h3>" + esc(t(a.titulo)) + verifyTag(a) + "</h3>" +
        (a.detalle ? "<p>" + esc(t(a.detalle)) + "</p>" : "") +
        (a.lugar ? '<span class="place">' + ICON.pin + esc(t(a.lugar)) + "</span>" : "") +
        "</div></li>"
      );
    }).join("") + "</ol>";
  }

  // Logo sobre un fondo fijo (blanco, u oscuro con logoFondo: "oscuro") para que se vea igual en
  // modo claro y oscuro. alt vacío: el nombre de la empresa ya está debajo, en el título.
  // Si la lista tiene logos y una empresa no, se muestran sus iniciales para mantener la grilla pareja.
  function orgLogo(o) {
    var src = safeUrl(o.logo);
    if (!src) return '<div class="logo none" aria-hidden="true">' + esc(initials(o.nombre)) + "</div>";
    return '<div class="logo' + (o.logoFondo === "oscuro" ? " dark" : "") + '"><img src="' + esc(src) + '" alt="" loading="lazy"></div>';
  }

  // `ed` solo se pasa para la delegación: habilita el botón de la ficha.
  function renderOrgs(list, withKind, ed) {
    var withLogos = list.some(function (o) { return o.logo; });
    return '<ul class="cards">' + list.map(function (o, i) {
      var url = safeUrl(o.web);
      var more = ed && o.ficha ? '<button type="button" class="more-info" data-ficha="' + i + '">' + esc(ui("more_info")) + "</button>" : "";
      var web = url ? '<a class="web" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(ui("website")) + " " + ICON.ext + "</a>" : "";
      return (
        '<li class="card org' + verifyClass(o) + '"' + (ed ? ' data-idx="' + i + '"' : "") + ">" +
        (withLogos ? orgLogo(o) : "") +
        (withKind ? '<span class="kind">' + esc(ui("kind_" + (o.tipo || "otro"))) + "</span>" : "") +
        "<h3>" + esc(o.nombre) + verifyTag(o) + "</h3>" +
        (o.sector ? '<span class="sector">' + esc(t(o.sector)) + "</span>" : "") +
        (ed && o.perfil ? '<p class="fit" hidden></p>' : "") +
        (o.detalle ? "<p>" + esc(t(o.detalle)) + "</p>" : "") +
        (more || web || (ed && meetEnabled(ed)) ? '<div class="org-actions">' + more + (ed && meetEnabled(ed) ? meetButton(o) : "") + web + "</div>" : "") +
        "</li>"
      );
    }).join("") + "</ul>";
  }

  // Organizadores: logo (por idioma y, si hay, versión para modo oscuro) o, si no hay logo, el nombre.
  function renderOrganizers(list) {
    return '<ul class="organizers">' + list.map(function (o) {
      var name = t(o.nombre);
      var src = safeUrl(t(o.logo));
      var dark = safeUrl(t(o.logoOscuro));
      var mark = src
        ? '<span class="org-mark">' +
          '<img class="' + (dark ? "on-light" : "") + '" src="' + esc(src) + '" alt="' + esc(name) + '" loading="lazy">' +
          (dark ? '<img class="on-dark" src="' + esc(dark) + '" alt="' + esc(name) + '" loading="lazy">' : "") +
          "</span>"
        : esc(name);
      return '<li class="card' + (src ? " with-logo" : "") + '">' + mark + (o.detalle ? "<small>" + esc(t(o.detalle)) + "</small>" : "") + "</li>";
    }).join("") + "</ul>";
  }

  // ───────────────────────── Buscador de la delegación ─────────────────────────
  // Las opciones están en SITIO.buscador; cada empresa declara las suyas en `perfil`. Las opciones
  // elegidas suman `peso` puntos por coincidencia y ordenan la lista; la palabra clave filtra.
  // La búsqueda queda en la URL para poder compartirla.
  function hasFinder(ed) {
    var b = SITIO.buscador;
    return !!(b && !isEmpty(b.grupos) && (ed.delegacion || []).some(function (o) { return o.perfil; }));
  }

  function finderParams() {
    var params = new URLSearchParams(window.location.search);
    var st = { q: params.get("q") || "" };
    SITIO.buscador.grupos.forEach(function (g) {
      var valid = g.opciones.map(function (o) { return o.id; });
      st[g.id] = (params.get(g.id) || "").split(",").filter(function (v) { return valid.indexOf(v) > -1; });
    });
    return st;
  }

  function renderFinder(ed) {
    var b = SITIO.buscador;
    var st = finderParams();
    function group(g) {
      var gid = "fg-" + g.id;
      return '<div class="finder-group" role="group" aria-labelledby="' + gid + '"><p class="finder-label" id="' + gid + '">' + esc(t(g.titulo)) + "</p>" +
        '<div class="finder-opts">' + g.opciones.map(function (o) {
          var on = st[g.id].indexOf(o.id) > -1;
          return '<button type="button" class="opt" data-g="' + esc(g.id) + '" data-v="' + esc(o.id) + '" aria-pressed="' + on + '">' + ICON.tick + "<span>" + esc(t(o)) + "</span></button>";
        }).join("") + "</div></div>";
    }
    return '<div class="finder" id="buscador">' +
      "<h3>" + esc(t(b.titulo)) + "</h3>" +
      (b.bajada ? '<p class="finder-lead">' + esc(t(b.bajada)) + "</p>" : "") +
      '<div class="finder-search"><label for="finder-q">' + esc(ui("finder_search")) + "</label>" +
      '<span class="finder-input">' + ICON.search + '<input type="search" id="finder-q" autocomplete="off" placeholder="' + esc(ui("finder_search_ph")) + '" value="' + esc(st.q) + '"></span></div>' +
      b.grupos.map(group).join("") +
      '<div class="finder-status"><p id="finder-result" aria-live="polite"></p><button type="button" class="finder-clear" hidden>' + esc(ui("finder_clear")) + "</button>" +
      (meetEnabled(ed) ? '<button type="button" class="finder-clear meet-add-full" hidden></button>' : "") +
      (b2bButton(ed) ? '<span class="finder-b2b" hidden>' + b2bButton(ed) + "</span>" : "") + "</div>" +
      "</div>";
  }

  function normText(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  // Texto de búsqueda de cada empresa, en los dos idiomas.
  function haystack(o) {
    var parts = [o.nombre];
    function add(v) {
      if (!v) return;
      if (typeof v === "string") parts.push(v);
      else if (Array.isArray(v)) v.forEach(add);
      else { parts.push(v.es); parts.push(v.en); }
    }
    add(o.sector); add(o.detalle);
    var f = o.ficha || {};
    add(f.resumen); add(f.servicios); add(f.trayectoria); add(f.eeuu); add(f.clientes);
    var p = o.perfil || {};
    SITIO.buscador.grupos.forEach(function (g) {
      g.opciones.forEach(function (op) { if ((p[g.id] || []).indexOf(op.id) > -1) add(op); });
    });
    return normText(parts.join(" "));
  }

  function bindFinder(ed) {
    var box = document.getElementById("buscador");
    if (!box) return;
    var b = SITIO.buscador;
    var list = ed.delegacion || [];
    var ul = box.parentNode.querySelector(".cards");
    var items = Array.prototype.slice.call(ul.children);
    var texts = list.map(haystack);
    var input = box.querySelector("#finder-q");
    var result = box.querySelector("#finder-result");
    var clear = box.querySelector(".finder-clear");
    var empty = box.parentNode.querySelector(".finder-empty");
    var st = finderParams();
    var labels = {};
    b.grupos.forEach(function (g) { g.opciones.forEach(function (o) { labels[g.id + ":" + o.id] = t(o); }); });

    function saveUrl() {
      var url = new URL(window.location.href);
      b.grupos.forEach(function (g) {
        if (st[g.id].length) url.searchParams.set(g.id, st[g.id].join(","));
        else url.searchParams.delete(g.id);
      });
      if (st.q.trim()) url.searchParams.set("q", st.q.trim());
      else url.searchParams.delete("q");
      window.history.replaceState(null, "", url.pathname + url.search.replace(/%2C/g, ",") + url.hash);
    }

    function apply() {
      var chosen = b.grupos.reduce(function (n, g) { return n + st[g.id].length; }, 0);
      var words = normText(st.q).split(/\s+/).filter(Boolean);
      var rows = list.map(function (o, i) {
        var p = o.perfil || {};
        var ok = words.every(function (w) { return texts[i].indexOf(w) > -1; });
        var score = 0, hits = [];
        b.grupos.forEach(function (g) {
          st[g.id].forEach(function (v) {
            if ((p[g.id] || []).indexOf(v) > -1) { score += g.peso || 1; hits.push(labels[g.id + ":" + v]); }
          });
        });
        return { i: i, show: ok && (!chosen || score > 0), score: score, hits: hits };
      });
      var order = rows.slice();
      if (chosen) order.sort(function (a, z) { return z.score - a.score || z.hits.length - a.hits.length || a.i - z.i; });
      order.forEach(function (r) {
        var li = items[r.i];
        ul.appendChild(li);
        li.hidden = !r.show;
        var fit = li.querySelector(".fit");
        if (!fit) return;
        fit.hidden = !(chosen && r.show);
        if (fit.hidden) { fit.innerHTML = ""; return; }
        var full = r.hits.length === chosen;
        fit.className = "fit" + (full ? " full" : "");
        fit.innerHTML = ICON.tick + "<span><strong>" + esc(full ? ui("fit_all") : ui("fit_some", { n: r.hits.length, m: chosen })) + "</strong> · " + esc(r.hits.join(" · ")) + "</span>";
      });
      var shown = rows.filter(function (r) { return r.show; }).length;
      var any = chosen || words.length;
      result.textContent = !any ? ui("finder_all", { total: list.length }) :
        ui(chosen ? "finder_ranked" : "finder_filtered", { n: shown, total: list.length });
      clear.hidden = !any;
      var addFull = box.querySelector(".meet-add-full");
      if (addFull) {
        var full = rows.filter(function (r) { return chosen && r.show && r.hits.length === chosen; }).map(function (r) { return slugify(list[r.i].nombre); });
        var missing = full.filter(function (x) { return MEET.list.indexOf(x) < 0; });
        addFull.hidden = !missing.length;
        addFull.textContent = ui("meet_add_full", { n: missing.length });
        addFull.onclick = function () { meetAdd(missing); };
      }
      var b2b = box.querySelector(".finder-b2b");
      if (b2b) b2b.hidden = !any;
      if (empty) empty.hidden = shown > 0;
    }

    box.querySelectorAll(".opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var g = btn.getAttribute("data-g"), v = btn.getAttribute("data-v");
        var k = st[g].indexOf(v);
        if (k > -1) st[g].splice(k, 1); else st[g].push(v);
        btn.setAttribute("aria-pressed", String(k === -1));
        apply(); saveUrl();
      });
    });
    input.addEventListener("input", function () { st.q = input.value; apply(); saveUrl(); });
    MEET.finderApply = apply;
    clear.addEventListener("click", function () {
      b.grupos.forEach(function (g) { st[g.id] = []; });
      st.q = ""; input.value = "";
      box.querySelectorAll(".opt").forEach(function (btn) { btn.setAttribute("aria-pressed", "false"); });
      apply(); saveUrl();
      input.focus();
    });
    apply();
  }

  // ───────────────────────── Lista B2B («Quiero reunirme») ─────────────────────────
  // En la edición próxima con `registroB2B`, cada empresa de la delegación se suma a una lista para la sesión
  // B2B. La lista vive en la URL (?lista=slug1,slug2), así se puede compartir; el sitio no la guarda.
  // Se envía pegándola en el registro de Luma o por correo a `buscador.listaEmail`.
  var MEET = { ed: null, list: [], refresh: null, finderApply: null };

  function meetEnabled(ed) { return !!(ed && ed.estado === "proxima" && safeUrl(ed.registroB2B)); }

  function meetFromUrl(ed) {
    var valid = (ed.delegacion || []).map(function (o) { return slugify(o.nombre); });
    return (new URLSearchParams(window.location.search).get("lista") || "").split(",")
      .filter(function (x, i, a) { return valid.indexOf(x) > -1 && a.indexOf(x) === i; });
  }

  function meetName(slug) {
    var o = (MEET.ed.delegacion || []).filter(function (x) { return slugify(x.nombre) === slug; })[0];
    return o ? o.nombre : slug;
  }

  function meetButton(o) {
    var x = slugify(o.nombre);
    return '<button type="button" class="meet-btn" data-meet="' + esc(x) + '" aria-pressed="' + (MEET.list.indexOf(x) > -1) + '">' +
      ICON.plus + ICON.tick + "<span>" + esc(ui("meet_btn")) + "</span></button>";
  }

  function meetSync() {
    var url = new URL(window.location.href);
    if (MEET.list.length) url.searchParams.set("lista", MEET.list.join(",")); else url.searchParams.delete("lista");
    window.history.replaceState(null, "", url.pathname + url.search.replace(/%2C/g, ",") + url.hash);
    document.querySelectorAll("[data-meet]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(MEET.list.indexOf(b.getAttribute("data-meet")) > -1));
    });
    var bar = document.getElementById("meet-bar");
    if (bar) {
      var n = MEET.list.length;
      bar.hidden = !n;
      document.body.classList.toggle("has-meet-bar", !!n);
      bar.querySelector(".meet-count").textContent = n === 1 ? ui("meet_bar_one") : ui("meet_bar", { n: n });
    }
    if (MEET.refresh) MEET.refresh();
    if (MEET.finderApply) MEET.finderApply();
  }

  function meetSay(msg) {
    var live = document.getElementById("meet-live");
    if (live) live.textContent = msg;
  }

  function meetToggle(x) {
    var k = MEET.list.indexOf(x);
    if (k > -1) MEET.list.splice(k, 1); else MEET.list.push(x);
    meetSync();
    meetSay(ui(k > -1 ? "meet_removed" : "meet_added", { name: meetName(x) }));
  }

  function meetAdd(slugs) {
    slugs.forEach(function (x) { if (MEET.list.indexOf(x) < 0) MEET.list.push(x); });
    meetSync();
  }

  function renderMeetBar(ed) {
    ["meet-bar", "meet-live"].forEach(function (id) { var old = document.getElementById(id); if (old) old.remove(); });
    document.body.classList.remove("has-meet-bar");
    if (!meetEnabled(ed)) return;
    var bar = document.createElement("div");
    bar.id = "meet-bar";
    bar.className = "meet-bar";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", ui("meet_bar_label"));
    bar.hidden = true;
    bar.innerHTML = '<div class="container meet-bar-inner"><p class="meet-count"></p>' +
      '<button type="button" class="btn btn-primary">' + esc(ui("meet_review")) + ICON.arrow + "</button></div>";
    bar.querySelector("button").addEventListener("click", openMeet);
    document.body.appendChild(bar);
    var live = document.createElement("p");
    live.id = "meet-live";
    live.className = "visually-hidden";
    live.setAttribute("aria-live", "polite");
    document.body.appendChild(live);
    meetSync();
  }

  // Texto que se copia o se envía: lo que buscó, las empresas elegidas y el enlace a la lista.
  function meetText(extra) {
    var ed = MEET.ed;
    var lines = [ui("meet_t_head", { year: year(ed) })];
    if (extra.company) lines.push(ui("meet_t_company") + ": " + extra.company);
    if (extra.name) lines.push(ui("meet_t_by") + ": " + extra.name);
    if (SITIO.buscador && hasFinder(ed)) {
      var st = finderParams();
      var keys = { ofrece: "meet_t_needs", industrias: "meet_t_industries" };
      SITIO.buscador.grupos.forEach(function (g) {
        var chosen = g.opciones.filter(function (o) { return st[g.id].indexOf(o.id) > -1; }).map(function (o) { return t(o); });
        if (chosen.length && keys[g.id]) lines.push(ui(keys[g.id]) + ": " + chosen.join(", "));
      });
    }
    lines.push("", ui("meet_t_list") + ":");
    MEET.list.forEach(function (x) { lines.push("- " + meetName(x)); });
    if (extra.notes) lines.push("", ui("meet_t_notes") + ":", extra.notes);
    var url = new URL(window.location.href);
    url.hash = "delegacion";
    url.searchParams.delete("lang");
    lines.push("", ui("meet_t_link") + ": " + url.toString().replace(/%2C/g, ","));
    return lines.join("\n");
  }

  function meetDialog() {
    var d = document.getElementById("meet-dialog");
    if (d) return d;
    d = document.createElement("dialog");
    d.id = "meet-dialog";
    d.className = "ficha meet-dialog";
    d.setAttribute("aria-labelledby", "meet-title");
    document.body.appendChild(d);
    d.addEventListener("click", function (e) { if (e.target === d) d.close(); });
    d.addEventListener("close", function () { MEET.refresh = null; });
    return d;
  }

  function openMeet() {
    var ed = MEET.ed;
    var d = meetDialog();
    var email = (SITIO.buscador || {}).listaEmail || (SITIO.contacto || {}).email || "";
    var st = hasFinder(ed) ? finderParams() : null;
    var searched = !st ? [] : SITIO.buscador.grupos.reduce(function (acc, g) {
      return acc.concat(g.opciones.filter(function (o) { return st[g.id].indexOf(o.id) > -1; }).map(function (o) { return t(o); }));
    }, []);
    d.innerHTML =
      '<button type="button" class="ficha-close" aria-label="' + esc(ui("close")) + '">' + ICON.close + "</button>" +
      '<div class="ficha-body">' +
      '<h2 id="meet-title">' + esc(ui("meet_title")) + '</h2><p class="meet-intro">' + esc(ui("meet_intro")) + "</p>" +
      (searched.length ? '<section class="ficha-block"><h3>' + esc(ui("meet_searched")) + '</h3><ul class="chips">' + searched.map(function (x) { return '<li class="chip">' + esc(x) + "</li>"; }).join("") + "</ul></section>" : "") +
      '<section class="ficha-block"><h3>' + esc(ui("meet_companies")) + '</h3><ul class="meet-list"></ul><p class="meet-empty" hidden>' + esc(ui("meet_empty")) + "</p></section>" +
      '<section class="meet-step"><p>' + esc(ui("meet_step_luma")) + '</p><div class="meet-actions">' +
      '<button type="button" class="btn btn-outline meet-copy">' + esc(ui("meet_copy")) + "</button>" + b2bButton(ed) + "</div></section>" +
      '<section class="meet-step"><p><strong>' + esc(ui("meet_or_mail")) + "</strong></p>" +
      '<form class="meet-form" novalidate>' +
      '<div class="val-field"><label for="meet-company">' + esc(ui("meet_company")) + '</label><input id="meet-company" type="text" autocomplete="organization" required></div>' +
      '<div class="val-field"><label for="meet-name">' + esc(ui("meet_name")) + '</label><input id="meet-name" type="text" autocomplete="name" required></div>' +
      '<div class="val-field"><label for="meet-notes">' + esc(ui("meet_notes")) + '</label><textarea id="meet-notes" rows="3"></textarea></div>' +
      '<p class="val-error" id="meet-err" hidden>' + esc(ui("meet_err")) + "</p>" +
      '<div class="meet-actions"><button type="submit" class="btn btn-primary">' + esc(ui("meet_send")) + ICON.arrow + "</button></div>" +
      "</form>" +
      '<p class="meet-done" hidden>' + esc(ui("meet_done", { email: email })) + "</p>" +
      '<textarea class="meet-text" id="meet-text" rows="9" readonly hidden aria-label="' + esc(ui("meet_title")) + '"></textarea>' +
      "</section></div>";

    var ul = d.querySelector(".meet-list");
    function drawList() {
      ul.innerHTML = MEET.list.map(function (x) {
        return '<li><span>' + esc(meetName(x)) + '</span><button type="button" class="meet-remove" data-remove="' + esc(x) + '" aria-label="' + esc(ui("meet_remove", { name: meetName(x) })) + '">' + ICON.close + "</button></li>";
      }).join("");
      d.querySelector(".meet-empty").hidden = MEET.list.length > 0;
      d.querySelectorAll(".meet-copy, .meet-form button[type=submit]").forEach(function (b) { b.disabled = !MEET.list.length; });
    }
    MEET.refresh = drawList;
    drawList();
    ul.addEventListener("click", function (e) {
      var b = e.target.closest("[data-remove]");
      if (b) { meetToggle(b.getAttribute("data-remove")); var first = ul.querySelector("button"); (first || d.querySelector(".ficha-close")).focus(); }
    });
    d.querySelector(".ficha-close").addEventListener("click", function () { d.close(); });

    var textArea = d.querySelector("#meet-text");
    function showText(text) { textArea.value = text; textArea.hidden = false; }
    d.querySelector(".meet-copy").addEventListener("click", function () {
      var btn = this;
      var text = meetText({});
      function ok() { btn.textContent = ui("meet_copied"); }
      function fallback() { showText(text); textArea.select(); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, fallback);
      else fallback();
    });
    var form = d.querySelector(".meet-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var company = form.querySelector("#meet-company").value.trim();
      var name = form.querySelector("#meet-name").value.trim();
      var err = d.querySelector("#meet-err");
      if (!company || !name) { err.hidden = false; (company ? form.querySelector("#meet-name") : form.querySelector("#meet-company")).focus(); return; }
      err.hidden = true;
      var text = meetText({ company: company, name: name, notes: form.querySelector("#meet-notes").value.trim() });
      showText(text);
      d.querySelector(".meet-done").hidden = false;
      window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(ui("meet_subject", { name: company })) + "&body=" + encodeURIComponent(text);
    });
    if (!d.open) d.showModal();
    d.scrollTop = 0;
  }

  // ───────────────────────── Ficha de empresa («Más información») ─────────────────────────
  function slugify(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  function renderFicha(o, ed) {
    var f = o.ficha;
    var url = safeUrl(o.web);
    var li = safeUrl(o.linkedin);
    function block(title, body) { return body ? '<section class="ficha-block"><h3>' + esc(title) + "</h3>" + body + "</section>" : ""; }
    function list(items) { return isEmpty(items) ? "" : '<ul class="ficha-list">' + items.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("") + "</ul>"; }
    return (
      '<div class="ficha-head">' + orgLogo(o) + "<div>" +
      '<h2 id="ficha-title">' + esc(o.nombre) + "</h2>" +
      (o.sector ? '<span class="sector">' + esc(t(o.sector)) + "</span>" : "") +
      "</div></div>" +
      block(ui("ficha_about"), f.resumen ? "<p>" + esc(t(f.resumen)) + "</p>" : "") +
      block(ui("ficha_services"), list(f.servicios)) +
      block(ui("ficha_track"), list(f.trayectoria)) +
      block(ui("ficha_us"), f.eeuu ? "<p>" + esc(t(f.eeuu)) + "</p>" : "") +
      block(ui("ficha_clients"), isEmpty(f.clientes) ? "" : '<ul class="chips">' + f.clientes.map(function (c) { return '<li class="chip">' + esc(t(c)) + "</li>"; }).join("") + "</ul>") +
      (isEmpty(f.imagenes) ? "" : renderGallery(f.imagenes)) +
      (url || li || meetEnabled(ed) ? '<div class="ficha-foot">' +
        (url ? '<a class="btn btn-primary" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(ui("website")) + " " + ICON.ext + "</a>" : "") +
        (li ? '<a class="btn btn-outline" href="' + esc(li) + '" target="_blank" rel="noopener">LinkedIn ' + ICON.ext + "</a>" : "") +
        (meetEnabled(ed) ? meetButton(o) : "") +
        "</div>" : "")
    );
  }

  function fichaDialog() {
    var d = document.getElementById("ficha-dialog");
    if (d) return d;
    d = document.createElement("dialog");
    d.id = "ficha-dialog";
    d.className = "ficha";
    d.setAttribute("aria-labelledby", "ficha-title");
    document.body.appendChild(d);
    // Un clic fuera del contenido (sobre el fondo) cierra la ficha.
    d.addEventListener("click", function (e) { if (e.target === d) d.close(); });
    d.addEventListener("close", function () {
      if (window.location.hash.indexOf("#empresa-") === 0) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    });
    return d;
  }

  function openFicha(o, ed) {
    var d = fichaDialog();
    d.innerHTML =
      '<button type="button" class="ficha-close" aria-label="' + esc(ui("close")) + '">' + ICON.close + "</button>" +
      '<div class="ficha-body">' + renderFicha(o, ed) + "</div>";
    d.querySelector(".ficha-close").addEventListener("click", function () { d.close(); });
    if (!d.open) d.showModal();
    d.scrollTop = 0;
    // El enlace #empresa-<nombre> permite compartir la ficha abierta.
    window.history.replaceState(null, "", window.location.pathname + window.location.search + "#empresa-" + slugify(o.nombre));
  }

  function bindFichas(ed) {
    var list = ed.delegacion || [];
    document.querySelectorAll("[data-ficha]").forEach(function (b) {
      b.addEventListener("click", function () { openFicha(list[Number(b.getAttribute("data-ficha"))], ed); });
    });
    var m = /^#empresa-(.+)$/.exec(window.location.hash);
    var o = m && list.filter(function (x) { return x.ficha && slugify(x.nombre) === m[1]; })[0];
    if (o) openFicha(o, ed);
  }

  function renderPeople(list) {
    return '<ul class="people">' + list.map(function (p) {
      var role = [t(p.cargo), t(p.organizacion)].filter(Boolean).join(" · ");
      return (
        '<li class="card person' + verifyClass(p) + '"><span class="avatar" aria-hidden="true">' + esc(initials(p.nombre)) + "</span>" +
        "<div><strong>" + esc(p.nombre) + verifyTag(p) + "</strong>" +
        (role ? "<span>" + esc(role) + "</span>" : "") +
        (p.detalle ? "<p>" + esc(t(p.detalle)) + "</p>" : "") +
        "</div></li>"
      );
    }).join("") + "</ul>";
  }

  // Cada nota lleva una miniatura de la página a la que lleva (imagen: "img/prensa/…", 480 × 270).
  // Sin imagen, un recuadro con el nombre del medio mantiene la lista alineada.
  function renderPress(list) {
    return '<ul class="press">' + list.map(function (p) {
      var url = safeUrl(p.url);
      var img = safeUrl(p.imagen);
      var meta = [p.medio, p.fecha ? fmtDate(p.fecha) : ""].filter(Boolean).join(" · ");
      var thumb = img
        ? '<img class="press-thumb" src="' + esc(img) + '" alt="" loading="lazy" width="480" height="270">'
        : '<span class="press-thumb none" aria-hidden="true">' + esc(String(p.medio || "").split(" · ")[0]) + "</span>";
      var inner = thumb + '<div class="press-text"><div class="t">' + esc(t(p.titulo)) + '</div><div class="m">' + esc(meta) + "</div></div>" +
        (p.idioma ? '<span class="lang-badge">' + esc(String(p.idioma).toUpperCase()) + "</span>" : "");
      return "<li>" + (url ? '<a class="card" href="' + esc(url) + '" target="_blank" rel="noopener">' + inner + "</a>" : '<div class="card">' + inner + "</div>") + "</li>";
    }).join("") + "</ul>";
  }

  function renderGallery(list) {
    return '<div class="gallery">' + list.map(function (g) {
      var src = safeUrl(g.src);
      if (!src) return "";
      return '<figure><img src="' + esc(src) + '" alt="' + esc(t(g.alt)) + '" loading="lazy">' +
        (g.alt || g.credito ? "<figcaption>" + esc(t(g.alt)) + (g.credito ? " · " + esc(g.credito) : "") + "</figcaption>" : "") +
        "</figure>";
    }).join("") + "</div>";
  }

  // ───────────────────────── Galería por momentos, con visor ─────────────────────────
  // galeria: [{ titulo, fotos: [{ src, mini?, alt }] }]. Una lista de fotos sueltas
  // ({ src, alt }) se muestra como un solo grupo sin título.
  function galleryGroups(ed) {
    var list = ed.galeria || [];
    return list.length && !list[0].fotos ? [{ fotos: list }] : list;
  }

  function galleryPhotos(ed) {
    var out = [];
    galleryGroups(ed).forEach(function (g) {
      (g.fotos || []).forEach(function (f) { if (safeUrl(f.src)) out.push({ foto: f, grupo: g }); });
    });
    return out;
  }

  function renderPhotoGallery(ed) {
    var i = 0;
    var groups = galleryGroups(ed).map(function (g) {
      var fotos = (g.fotos || []).filter(function (f) { return safeUrl(f.src); });
      var thumbs = fotos.map(function (f) {
        var html = '<li><button type="button" class="photo" data-foto="' + i + '">' +
          '<img src="' + esc(safeUrl(f.mini) || safeUrl(f.src)) + '" alt="' + esc(t(f.alt)) + '" loading="lazy" width="720" height="540">' +
          "</button></li>";
        i++;
        return html;
      }).join("");
      if (!thumbs) return "";
      var list = '<ul class="gallery photos">' + thumbs + "</ul>";
      // Cada momento se despliega con su título; las fotos sueltas, sin título, se muestran directo.
      return g.titulo
        ? '<details class="gallery-group"><summary><h3>' + esc(t(g.titulo)) + '</h3><span class="chev" aria-hidden="true">' + ICON.chevron + '</span></summary><div class="group-body">' + list + "</div></details>"
        : list;
    }).join("");
    var credit = ed.galeriaCredito ? '<p class="gallery-credit">' + esc(ui("photos_by")) + ": " + esc(t(ed.galeriaCredito)) + "</p>" : "";
    return '<div class="gallery-groups">' + groups + "</div>" + credit;
  }

  function lightbox() {
    var d = document.getElementById("lightbox");
    if (d) return d;
    d = document.createElement("dialog");
    d.id = "lightbox";
    d.className = "lightbox";
    d.setAttribute("aria-label", ui("sec_gallery"));
    d.innerHTML =
      '<figure><img alt=""><figcaption><span class="lb-text" aria-hidden="true"></span><span class="lb-count"></span></figcaption></figure>' +
      '<button type="button" class="lb-btn lb-prev" aria-label="' + esc(ui("photo_prev")) + '">' + ICON.prev + "</button>" +
      '<button type="button" class="lb-btn lb-next" aria-label="' + esc(ui("photo_next")) + '">' + ICON.next + "</button>" +
      '<button type="button" class="lb-btn lb-close" aria-label="' + esc(ui("close")) + '">' + ICON.close + "</button>";
    document.body.appendChild(d);
    // Un clic fuera de la foto y de los botones cierra el visor.
    d.addEventListener("click", function (e) {
      if (d._dragged) return; // el clic que sigue a un deslizamiento no cierra el visor
      if (e.target === d || e.target.tagName === "FIGURE") d.close();
    });
    d.querySelector(".lb-close").addEventListener("click", function () { d.close(); });
    return d;
  }

  function bindGallery(ed) {
    var photos = galleryPhotos(ed);
    if (!photos.length) return;
    var d = lightbox();
    var img = d.querySelector("img"), text = d.querySelector(".lb-text"), count = d.querySelector(".lb-count");
    var current = 0;
    function show(n) {
      // Las flechas y el teclado cambian de foto al instante: se corta cualquier animación en curso.
      if (img._anim) { img._anim.cancel(); img._anim = null; }
      img.style.transform = "";
      current = (n + photos.length) % photos.length;
      var p = photos[current];
      img.src = safeUrl(p.foto.src);
      img.alt = t(p.foto.alt);
      text.textContent = t(p.foto.alt);
      count.textContent = (p.grupo.titulo ? t(p.grupo.titulo) + " · " : "") + ui("photo_of", { n: current + 1, total: photos.length });
      // Precarga la siguiente y la anterior para que el paso sea inmediato en ambos sentidos.
      [1, -1].forEach(function (k) {
        var near = photos[(current + k + photos.length) % photos.length];
        if (near) { var pre = new Image(); pre.src = safeUrl(near.foto.src); }
      });
    }
    d.querySelector(".lb-prev").onclick = function () { show(current - 1); };
    d.querySelector(".lb-next").onclick = function () { show(current + 1); };
    d.onkeydown = function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); show(current - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); show(current + 1); }
    };
    // Deslizar con el dedo: la foto acompaña el gesto. Al soltar pasa de foto si se movió más
    // de 50 px o rápido (más de 0,11 px/ms); si no, vuelve a su lugar. El mouse usa las flechas.
    var fig = d.querySelector("figure");
    var drag = null;
    function slide(dir) {
      if (reducedMotion() || typeof img.animate !== "function") {
        show(current + dir);
        if (typeof img.animate === "function") img._anim = img.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200, easing: EASE_OUT });
        return;
      }
      // Sale hacia el lado del gesto; la siguiente entra desde el lado opuesto.
      var out = img.animate(
        [{ transform: img.style.transform || "translateX(0px)" }, { transform: "translateX(" + (-dir * fig.clientWidth) + "px)" }],
        { duration: 200, easing: EASE_OUT, fill: "forwards" }
      );
      img._anim = out;
      out.onfinish = function () {
        show(current + dir);
        img._anim = img.animate(
          [{ transform: "translateX(" + dir * 24 + "px)", opacity: 0 }, { transform: "translateX(0px)", opacity: 1 }],
          { duration: 200, easing: EASE_OUT }
        );
      };
    }
    function settle(dx) {
      img.style.transform = "";
      if (!dx || reducedMotion() || typeof img.animate !== "function") return;
      img._anim = img.animate([{ transform: "translateX(" + dx + "px)" }, { transform: "translateX(0px)" }], { duration: 300, easing: EASE_DRAWER });
    }
    function endDrag(e, cancelled) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = drag.dx, moved = drag.captured;
      var velocity = Math.abs(dx) / Math.max(1, Date.now() - drag.t);
      drag = null;
      if (moved) { d._dragged = true; setTimeout(function () { d._dragged = false; }, 0); }
      if (!cancelled && moved && (Math.abs(dx) >= 50 || velocity > 0.11)) slide(dx < 0 ? 1 : -1);
      else settle(dx);
    }
    fig.onpointerdown = function (e) {
      if (e.pointerType === "mouse" || drag) return; // un solo dedo a la vez
      if (img._anim) { img._anim.cancel(); img._anim = null; }
      drag = { id: e.pointerId, x: e.clientX, t: Date.now(), dx: 0, captured: false };
    };
    fig.onpointermove = function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      drag.dx = e.clientX - drag.x;
      // Se toma el gesto recién cuando pasa los 10 px: un toque sobre la foto sigue siendo un toque.
      if (!drag.captured && Math.abs(drag.dx) > 10) { drag.captured = true; fig.setPointerCapture(e.pointerId); }
      if (drag.captured && !reducedMotion()) img.style.transform = "translateX(" + drag.dx + "px)";
    };
    fig.onpointerup = function (e) { endDrag(e, false); };
    fig.onpointercancel = function (e) { endDrag(e, true); };
    document.querySelectorAll("[data-foto]").forEach(function (b) {
      b.addEventListener("click", function () {
        show(Number(b.getAttribute("data-foto")));
        if (!d.open) d.showModal();
        d.querySelector(".lb-next").focus();
      });
    });
  }

  function renderEdition() {
    var main = document.getElementById("main");
    var id = new URLSearchParams(window.location.search).get("id");
    var ed = EDICIONES.filter(function (e) { return e.id === id; })[0];

    if (!ed) {
      document.title = ui("not_found_t") + " · South Meets South";
      main.innerHTML =
        '<div class="container not-found"><h1>' + esc(ui("not_found_t")) + "</h1><p>" + esc(ui("not_found_p")) + '</p><p><a class="btn btn-outline" href="index.html#ediciones">' + ICON.back + esc(ui("back")) + "</a></p></div>";
      return;
    }

    var isNext = ed.estado === "proxima";
    document.title = year(ed) + " · " + t(ed.titulo) + " · South Meets South";

    var others = otherLegsNote(ed);

    var hero =
      '<header class="ed-hero"><div class="container">' +
      '<a class="back-link" href="index.html' + (lang === "en" ? "?lang=en" : "") + '#ediciones">' + ICON.back + esc(ui("back")) + "</a>" +
      '<div class="ed-year" aria-hidden="true">' + esc(year(ed)) + "</div>" +
      "<h1>" + esc(t(ed.titulo)) + "</h1>" +
      '<div class="ed-when"><span class="status-badge' + (isNext ? "" : " done") + '">' + esc(ui(isNext ? "status_next" : "status_done")) + "</span>" +
      '<span class="chip">Atlanta</span><span>' + esc(fmtRange(ed.inicio, ed.fin)) + "</span></div>" +
      (others ? '<p class="ed-other">' + others + "</p>" : "") +
      "</div></header>";

    var figures = isEmpty(ed.cifras) ? "" :
      '<div class="container ed-stats">' + stats(ed.cifras.map(function (c) {
        return { valor: c.valor, texto: t(c.texto), item: c };
      })) + "</div>";

    // Nota interna sobre el origen de los datos: solo se ve en modo borrador.
    var internal = BORRADOR && ed.notaInterna
      ? '<div class="container"><p class="internal-note">' + esc(t(ed.notaInterna)) + "</p></div>"
      : "";

    // Secciones: [id, título, contenido o null si está vacía, mostrar vacía en borrador]
    var sections = [];
    var summaryBody = '<p class="ed-summary">' + esc(t(ed.resumen)) + "</p>" +
      (isEmpty(ed.sectores) ? "" : '<p class="label">' + esc(ui("sectors")) + '</p><ul class="chips">' + ed.sectores.map(function (s) { return '<li class="chip">' + esc(t(s)) + "</li>"; }).join("") + "</ul>");
    sections.push(["resumen", ui("sec_summary"), summaryBody, false]);

    if (isNext) {
      var progBody = isEmpty(ed.programa) ? null : '<ul class="program">' + ed.programa.map(function (p) { return "<li>" + esc(t(p)) + "</li>"; }).join("") + "</ul>";
      if (!isEmpty(ed.agenda)) {
        progBody = (progBody || "") + (ed.agendaNota ? '<p class="note">' + esc(t(ed.agendaNota)) + "</p>" : "") + renderAgenda(ed);
      }
      sections.push(["agenda", ui("sec_agenda_next"), progBody, true]);
      var participate = callBox(ed) + hostsBox(ed);
      if (participate) sections.push(["participar", ui("sec_participate"), '<div class="participate">' + participate + "</div>", false]);
    } else {
      sections.push(["agenda", ui("sec_agenda"), isEmpty(ed.agenda) ? null : renderAgenda(ed), true]);
    }

    // La nota de la delegación es interna: solo se ve en modo borrador.
    var delegNote = BORRADOR && ed.delegacionNota ? '<p class="note">' + esc(t(ed.delegacionNota)) + "</p>" : "";
    var delegBody = isEmpty(ed.delegacion) ? (delegNote || null) :
      delegNote + (hasFinder(ed) ? renderFinder(ed) : "") + renderOrgs(ed.delegacion, false, ed) +
      (hasFinder(ed) ? '<p class="finder-empty" hidden>' + esc(ui("finder_empty")) + "</p>" : "") +
      (hasFinder(ed) && b2bButton(ed) ? '<div class="b2b-band"><p><strong>' + esc(ui("b2b_cta")) + "</strong> " + esc(ui("b2b_note")) + "</p>" + b2bButton(ed) + "</div>" : "");
    sections.push(["delegacion", ui("sec_delegation"), delegBody, !isNext]);
    sections.push(["anfitriones", ui("sec_hosts"), isEmpty(ed.anfitriones) ? null : renderOrgs(ed.anfitriones, true), !isNext]);
    sections.push(["reuniones", ui("sec_meetings"), isEmpty(ed.reuniones) ? null : renderPeople(ed.reuniones), !isNext]);
    sections.push(["resultados", ui("sec_results"), isEmpty(ed.resultados) ? null : '<ul class="results">' + ed.resultados.map(function (r) { return "<li>" + ICON.check + "<span>" + esc(t(r)) + "</span></li>"; }).join("") + "</ul>", !isNext]);
    sections.push(["galeria", ui("sec_gallery"), isEmpty(ed.galeria) ? null : renderPhotoGallery(ed), !isNext, true]);
    sections.push(["organizan", ui("sec_organizers"), isEmpty(ed.organizadores) ? null : renderOrganizers(ed.organizadores), false]);
    sections.push(["prensa", ui("sec_press"), isEmpty(ed.prensa) ? null : renderPress(ed.prensa), false]);

    var visible = sections.filter(function (s) { return s[2] || (BORRADOR && s[3]); });

    var nav = '<nav class="ed-nav" aria-label="' + esc(t(ed.titulo)) + '"><div class="container"><ul>' +
      visible.map(function (s) { return '<li><a href="#' + s[0] + '">' + esc(s[1]) + "</a></li>"; }).join("") +
      "</ul></div></nav>";

    var body = '<div class="container">' + visible.map(function (s) { return (s[4] && s[2] ? foldSection : section)(s[0], s[1], s[2] || emptyBox()); }).join("") + "</div>";

    // Navegación entre ediciones (cronológica: anterior = más vieja).
    var idx = EDICIONES.indexOf(ed);
    var older = EDICIONES[idx + 1], newer = EDICIONES[idx - 1];
    var pager = '<div class="container"><nav class="pager" aria-label="' + esc(ui("nav_editions")) + '">' +
      (older ? '<a class="card" href="' + esc(edUrl(older)) + '"><small>' + ICON.back + esc(ui("prev_edition")) + "</small><strong>" + esc(year(older)) + "</strong></a>" : "<span></span>") +
      (newer ? '<a class="card next-link" href="' + esc(edUrl(newer)) + '"><small>' + esc(ui("next_edition")) + ICON.arrow + "</small><strong>" + esc(year(newer)) + "</strong></a>" : "") +
      "</nav></div>";

    main.innerHTML = hero + figures + internal + nav + body + pager;
    // Al cambiar de idioma, el visor se vuelve a crear con los textos nuevos.
    var oldLightbox = document.getElementById("lightbox");
    if (oldLightbox) oldLightbox.remove();
    setupScrollSpy();
    syncScrollPadding();
    MEET.ed = ed;
    MEET.list = meetEnabled(ed) ? meetFromUrl(ed) : [];
    MEET.refresh = null;
    MEET.finderApply = null;
    renderMeetBar(ed);
    bindFichas(ed);
    bindFinder(ed);
    bindFolds();
    bindGallery(ed);
  }

  // Los anclas de las secciones quedan debajo del encabezado y del menú de secciones, que son fijos
  // y cuya altura cambia con el idioma y el ancho de pantalla.
  function syncScrollPadding() {
    var head = document.querySelector(".site-header");
    var nav = document.querySelector(".ed-nav");
    if (!nav) return;
    document.documentElement.style.scrollPaddingTop = ((head ? head.offsetHeight : 0) + nav.offsetHeight + 16) + "px";
  }
  window.addEventListener("resize", syncScrollPadding);

  function setupScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    var links = Array.prototype.slice.call(document.querySelectorAll(".ed-nav a"));
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) { a.classList.remove("active"); });
          var a = map[e.target.id];
          if (a) {
            a.classList.add("active");
            // En móvil, desplaza horizontalmente el menú para que el ítem activo quede a la vista.
            var ul = a.closest("ul");
            if (ul && ul.scrollWidth > ul.clientWidth) {
              ul.scrollLeft = a.offsetLeft - ul.offsetLeft - (ul.clientWidth - a.offsetWidth) / 2;
            }
          }
        }
      });
    }, { rootMargin: "-140px 0px -60% 0px" });
    document.querySelectorAll(".ed-section").forEach(function (s) { obs.observe(s); });
  }

  // ───────────────────────── Inicio ─────────────────────────
  // ───────────────────────── Validación de etiquetas (validar.html) ─────────────────────────
  // Página sin enlaces desde el sitio: cada empresa recibe validar.html?empresa=<slug> y revisa su `perfil`.
  // La respuesta se envía por correo al Consulado (no hay servidor); también se puede copiar.
  function renderValidation() {
    var main = document.getElementById("main");
    var params = new URLSearchParams(window.location.search);
    var ed = EDICIONES.filter(function (e) { return e.id === params.get("id"); })[0] || nextEdition() || EDICIONES[0];
    var b = SITIO.buscador;
    var list = (ed && ed.delegacion || []).filter(function (o) { return o.perfil; });
    var slug = params.get("empresa") || "";
    var o = list.filter(function (x) { return slugify(x.nombre) === slug; })[0];
    var email = b.validacionEmail || (SITIO.contacto || {}).email || "";
    document.title = ui("val_title") + (o ? " · " + o.nombre : "") + " · South Meets South";

    var picker = '<div class="val-field"><label for="val-empresa">' + esc(ui("val_choose")) + '</label><select id="val-empresa">' +
      '<option value="">' + esc(ui("val_choose_ph")) + "</option>" +
      list.map(function (x) { var v = slugify(x.nombre); return '<option value="' + esc(v) + '"' + (v === slug ? " selected" : "") + ">" + esc(x.nombre) + "</option>"; }).join("") +
      "</select></div>";

    function group(g, title) {
      var mine = (o.perfil[g.id] || []);
      return '<fieldset class="val-group"><legend>' + esc(title) + '</legend><p class="val-help">' + esc(ui("val_help")) + "</p>" +
        '<div class="finder-opts">' + g.opciones.map(function (op) {
          var id = "val-" + g.id + "-" + op.id;
          return '<label class="check-chip" for="' + id + '"><input type="checkbox" id="' + id + '" name="' + esc(g.id) + '" value="' + esc(op.id) + '"' + (mine.indexOf(op.id) > -1 ? " checked" : "") + ">" +
            "<span>" + ICON.tick + esc(t(op)) + "</span></label>";
        }).join("") + "</div></fieldset>";
    }
    var titles = { ofrece: ui("val_offer"), industrias: ui("val_industries") };
    var form = !o ? "" :
      '<form id="val-form" class="val-form" novalidate>' +
      '<div class="val-company">' + orgLogo(o) + "<div><h2>" + esc(o.nombre) + "</h2>" + (o.sector ? '<span class="sector">' + esc(t(o.sector)) + "</span>" : "") + "</div></div>" +
      b.grupos.map(function (g) { return group(g, titles[g.id] || t(g.titulo)); }).join("") +
      '<div class="val-field"><label for="val-notes">' + esc(ui("val_notes")) + '</label><textarea id="val-notes" rows="4"></textarea></div>' +
      '<div class="val-field"><label for="val-name">' + esc(ui("val_name")) + '</label><input id="val-name" type="text" autocomplete="name" required aria-describedby="val-name-err">' +
      '<p class="val-error" id="val-name-err" hidden>' + esc(ui("val_name_err")) + "</p></div>" +
      '<div class="val-submit"><p class="val-summary" id="val-summary" aria-live="polite"></p>' +
      '<button type="submit" class="btn btn-primary">' + esc(ui("val_send")) + ICON.arrow + "</button></div>" +
      "</form>" +
      '<section class="val-done" id="val-done" hidden tabindex="-1" aria-labelledby="val-done-t"><h2 id="val-done-t">' + esc(ui("val_done_t")) + "</h2>" +
      "<p>" + esc(ui("val_done_p", { email: email })) + "</p>" +
      '<textarea id="val-text" rows="12" readonly></textarea>' +
      '<div class="val-actions"><button type="button" class="btn btn-primary" id="val-copy">' + esc(ui("val_copy")) + '</button><button type="button" class="btn btn-outline" id="val-edit">' + esc(ui("val_edit")) + "</button></div></section>";

    main.innerHTML =
      '<header class="ed-hero"><div class="container"><h1>' + esc(ui("val_title")) + "</h1>" +
      '<p class="val-lead">' + esc(ui("val_intro")) + "</p></div></header>" +
      '<div class="container val">' + picker + form +
      (ed ? '<p class="val-see"><a href="' + esc(edUrl(ed)) + '#buscador">' + esc(ui("val_see")) + " " + ICON.arrow + "</a></p>" : "") + "</div>";

    document.getElementById("val-empresa").addEventListener("change", function (e) {
      var url = new URL(window.location.href);
      if (e.target.value) url.searchParams.set("empresa", e.target.value); else url.searchParams.delete("empresa");
      window.history.replaceState(null, "", url.pathname + url.search);
      renderValidation();
    });
    if (!o) return;

    var f = document.getElementById("val-form");
    var summary = document.getElementById("val-summary");
    function label(gid, v) { var op = b.grupos.filter(function (g) { return g.id === gid; })[0].opciones.filter(function (x) { return x.id === v; })[0]; return t(op); }
    function diff() {
      var add = [], del = [], chosen = {};
      b.grupos.forEach(function (g) {
        var now = Array.prototype.map.call(f.querySelectorAll('input[name="' + g.id + '"]:checked'), function (i) { return i.value; });
        var before = o.perfil[g.id] || [];
        chosen[g.id] = now;
        now.forEach(function (v) { if (before.indexOf(v) < 0) add.push([g.id, v]); });
        before.forEach(function (v) { if (now.indexOf(v) < 0) del.push([g.id, v]); });
      });
      return { add: add, del: del, chosen: chosen };
    }
    function showSummary() {
      var d = diff();
      summary.textContent = d.add.length || d.del.length ? ui("val_changes", { add: d.add.length, del: d.del.length }) : ui("val_nochanges");
    }
    f.addEventListener("change", showSummary);
    showSummary();

    var nameInput = document.getElementById("val-name");
    var nameErr = document.getElementById("val-name-err");
    nameInput.addEventListener("input", function () { if (nameInput.value.trim()) { nameErr.hidden = true; nameInput.removeAttribute("aria-invalid"); } });

    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!nameInput.value.trim()) { nameErr.hidden = false; nameInput.setAttribute("aria-invalid", "true"); nameInput.focus(); return; }
      var d = diff();
      var lines = [ui("val_m_company") + ": " + o.nombre, ui("val_m_by") + ": " + nameInput.value.trim(), ""];
      b.grupos.forEach(function (g) {
        lines.push((titles[g.id] || t(g.titulo)));
        d.chosen[g.id].forEach(function (v) { lines.push("- " + label(g.id, v) + " [" + v + "]"); });
        if (!d.chosen[g.id].length) lines.push("-");
        lines.push("");
      });
      lines.push(ui("val_m_changes") + ":");
      if (!d.add.length && !d.del.length) lines.push(ui("val_m_none"));
      if (d.add.length) lines.push("+ " + ui("val_m_added") + ": " + d.add.map(function (x) { return label(x[0], x[1]); }).join(", "));
      if (d.del.length) lines.push("- " + ui("val_m_removed") + ": " + d.del.map(function (x) { return label(x[0], x[1]); }).join(", "));
      var notes = document.getElementById("val-notes").value.trim();
      if (notes) { lines.push(""); lines.push(ui("val_m_notes") + ":"); lines.push(notes); }
      var text = lines.join("\n");
      document.getElementById("val-text").value = text;
      f.hidden = true;
      var done = document.getElementById("val-done");
      done.hidden = false;
      done.focus();
      window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(ui("val_subject", { name: o.nombre })) + "&body=" + encodeURIComponent(text);
    });

    document.getElementById("val-copy").addEventListener("click", function () {
      var ta = document.getElementById("val-text");
      var btn = this;
      function ok() { btn.textContent = ui("val_copied"); }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(ta.value).then(ok, function () { ta.select(); });
      } else { ta.select(); }
    });
    document.getElementById("val-edit").addEventListener("click", function () {
      document.getElementById("val-done").hidden = true;
      f.hidden = false;
      nameInput.focus();
    });
  }

  function init() {
    var page = document.body.getAttribute("data-page");
    document.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest("[data-meet]");
      if (b && MEET.ed) meetToggle(b.getAttribute("data-meet"));
    });
    var render = page === "edicion" ? renderEdition : page === "validar" ? renderValidation : renderHome;
    applyStaticTexts();
    setupMenu();
    setupLangSwitch(render);
    render();
    renderFooter();
    if (page === "home" && window.location.hash) {
      var target = document.querySelector(window.location.hash);
      if (target) target.scrollIntoView();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
