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
      nav_editions: "Ediciones",
      nav_why: "Por qué Atlanta",
      nav_resources: "Recursos",
      nav_contact: "Contacto",
      menu: "Menú",
      draft_banner: "Versión preliminar · El contenido está en revisión y puede cambiar.",
      verify: "a verificar",
      hero_eyebrow: "Conectando los ecosistemas tecnológicos de Georgia y la Argentina",
      hero_lead:
        "Empresas argentinas de software y tecnología viajan a Atlanta para hacer negocios con el ecosistema de innovación del sur de los Estados Unidos. Acá reunimos cada edición de la misión y lo que viene.",
      hero_cta_next: "Ver la próxima misión",
      hero_cta_editions: "Ediciones anteriores",
      hero_art_title: "Buenos Aires y Atlanta, a latitudes espejo",
      hero_art_caption: "Dos ciudades del sur, a latitudes espejo y con 1 a 2 horas de diferencia horaria.",
      equator: "Ecuador",
      countdown_n: "Faltan {n} días para la misión en {city}",
      countdown_1: "Falta 1 día para la misión en {city}",
      countdown_0: "Hoy comienza la misión en {city}",
      countdown_live: "Misión en curso",
      next_eyebrow: "Próxima misión",
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
      interest_form: "Quiero participar",
      past_eyebrow: "Ediciones anteriores",
      past_title: "Lo que construimos en cada misión",
      past_lead:
        "Actividades, reuniones, empresas de la delegación y las instituciones que nos recibieron en cada edición.",
      total_editions: "ediciones recientes",
      total_since: "primera misión a Atlanta",
      total_companies: "empresas argentinas",
      total_companies_editions: "empresas argentinas en esas ediciones",
      companies_n: "{n} empresas",
      view_edition: "Ver edición",
      why_eyebrow: "Por qué Atlanta",
      why_title: "El sur de EE.UU. y el sur del continente, cerca",
      why_lead: "Atlanta combina un ecosistema tecnológico en crecimiento con una ubicación ideal para equipos argentinos.",
      why_1_t: "Misma jornada laboral",
      why_1_p: "Buenos Aires está apenas 1 o 2 horas adelante de Atlanta: los equipos argentinos trabajan en tiempo real con clientes de EE.UU.",
      why_2_t: "Polo fintech",
      why_2_p: "Georgia es conocida como «Transaction Alley», uno de los mayores centros de procesamiento de pagos de los Estados Unidos.",
      why_3_t: "Ecosistema de innovación",
      why_3_p: "Georgia Tech y su incubadora ATDC, Atlanta Tech Village y la Technology Association of Georgia impulsan una comunidad tecnológica en crecimiento.",
      why_4_t: "Puerta de entrada",
      why_4_p: "El aeropuerto Hartsfield-Jackson, uno de los más transitados del mundo, conecta Atlanta con todo Estados Unidos.",
      resources_eyebrow: "Recursos",
      resources_title: "Para seguir conectados",
      contact_eyebrow: "Contacto",
      contact_title: "Hablemos",
      contact_lead:
        "Para sumarse a una próxima misión, recibir a la delegación en Atlanta o proponer actividades, comuníquese con el Consulado.",
      contact_web: "Sitio del Consulado",
      contact_email: "Escribir un correo",
      contact_linkedin: "LinkedIn",
      footer_tagline: "South Meets South · Misión de Software y Tecnología Argentina → Atlanta",
      footer_updated: "Actualizado: {date}",
      back: "← Todas las ediciones",
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
      nav_editions: "Past editions",
      nav_why: "Why Atlanta",
      nav_resources: "Resources",
      nav_contact: "Contact",
      menu: "Menu",
      draft_banner: "Preview version · Content is under review and may change.",
      verify: "to verify",
      hero_eyebrow: "Connecting Georgia’s and Argentina’s Tech Ecosystems",
      hero_lead:
        "Argentine software and technology companies travel to Atlanta to do business with the innovation ecosystem of the U.S. South. Here you’ll find every edition of the mission — and what’s next.",
      hero_cta_next: "See the next mission",
      hero_cta_editions: "Past editions",
      hero_art_title: "Buenos Aires and Atlanta, at mirror latitudes",
      hero_art_caption: "Two southern cities at mirror latitudes, just 1 to 2 hours apart.",
      equator: "Equator",
      countdown_n: "{n} days until the mission arrives in {city}",
      countdown_1: "1 day until the mission arrives in {city}",
      countdown_0: "The mission arrives in {city} today",
      countdown_live: "Mission in progress",
      next_eyebrow: "Next mission",
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
      interest_form: "I’m interested",
      past_eyebrow: "Past editions",
      past_title: "What we built on each mission",
      past_lead:
        "Activities, meetings, delegation companies and the organizations that hosted us, edition by edition.",
      total_editions: "recent editions",
      total_since: "first mission to Atlanta",
      total_companies: "Argentine companies",
      total_companies_editions: "Argentine companies in those editions",
      companies_n: "{n} companies",
      view_edition: "View edition",
      why_eyebrow: "Why Atlanta",
      why_title: "The U.S. South and the Southern Cone, close together",
      why_lead: "Atlanta pairs a growing tech ecosystem with an ideal location for Argentine teams.",
      why_1_t: "Same working day",
      why_1_p: "Buenos Aires is just 1–2 hours ahead of Atlanta, so Argentine teams work in real time with U.S. clients.",
      why_2_t: "Fintech powerhouse",
      why_2_p: "Georgia is known as “Transaction Alley,” one of the largest payment-processing hubs in the United States.",
      why_3_t: "Innovation ecosystem",
      why_3_p: "Georgia Tech and its ATDC incubator, Atlanta Tech Village and the Technology Association of Georgia power a growing tech community.",
      why_4_t: "Gateway city",
      why_4_p: "Hartsfield-Jackson, one of the world’s busiest airports, connects Atlanta with the entire United States.",
      resources_eyebrow: "Resources",
      resources_title: "Stay connected",
      contact_eyebrow: "Contact",
      contact_title: "Let’s talk",
      contact_lead:
        "To join an upcoming mission, host the delegation in Atlanta or propose activities, please contact the Consulate.",
      contact_web: "Consulate website",
      contact_email: "Send an email",
      contact_linkedin: "LinkedIn",
      footer_tagline: "South Meets South · Argentina → Atlanta Software & Technology Mission",
      footer_updated: "Updated: {date}",
      back: "← All editions",
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
  function otherLegsNote(ed) {
    var list = (ed.otrasEtapas || []).map(function (o) {
      var extra = o.inicio ? fmtRange(o.inicio, o.fin, false) : t(o.nota);
      return o.ciudad + (extra ? " (" + extra + ")" : "");
    });
    if (!list.length) return "";
    return ui(ed.estado === "proxima" ? "other_legs_next" : "other_legs_past", { cities: list.join(", ") });
  }

  function verifyTag(item) {
    return BORRADOR && item && item.verificar ? '<span class="verify-tag">' + esc(ui("verify")) + "</span>" : "";
  }
  function verifyClass(item) {
    return BORRADOR && item && item.verificar ? " needs-verify" : "";
  }

  function edUrl(ed) {
    return "edicion.html?id=" + encodeURIComponent(ed.id) + (lang === "en" ? "&lang=en" : "");
  }

  function isEmpty(list) { return !list || !list.length; }

  var ICON = {
    arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    ext: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    pin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>',
    clock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    card: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>',
    spark: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>',
    plane: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 16l20-6-20-6 4 6-4 6zM6 10h8"/></svg>',
  };

  // ───────────────────────── Elementos comunes ─────────────────────────
  function applyStaticTexts() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = ui(el.getAttribute("data-i18n"));
    });
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
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
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
      '<text x="225" y="308" text-anchor="end" font-size="20" font-weight="700">Buenos Aires</text>' +
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
      '<span class="eyebrow">' + esc(ui("hero_eyebrow")) + "</span>" +
      '<h1>South <span class="accent">Meets</span> South</h1>' +
      '<p class="hero-lead">' + esc(ui("hero_lead")) + "</p>" +
      '<div class="hero-actions">' +
      (nx ? '<a class="btn btn-primary" href="#proxima">' + esc(ui("hero_cta_next")) + ICON.arrow + "</a>" : "") +
      '<a class="btn btn-ghost" href="#ediciones">' + esc(ui("hero_cta_editions")) + "</a>" +
      "</div>" +
      (cd ? '<div class="countdown" role="status"><span class="dot" aria-hidden="true"></span>' + esc(cd) + "</div>" : "") +
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
  function hostsBox(ed) {
    if (!ed.llamadoAnfitriones) return "";
    var form = safeUrl(ed.formularioInteres);
    var buttons = form
      ? '<a class="btn btn-primary" href="' + esc(form) + '" target="_blank" rel="noopener">' + esc(ui("interest_form")) + " " + ICON.ext + "</a>" + emailButton("btn-outline")
      : contactButtons("btn-primary");
    return '<div class="hosts-cta"><p class="label">' + esc(ui("hosts_title")) + "</p><p>" + esc(t(ed.llamadoAnfitriones)) + '</p><div class="hero-actions">' + buttons + "</div></div>";
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
    var legs =
      '<li class="leg is-atlanta"><span class="leg-city">Atlanta</span><span class="leg-dates">' + esc(fmtRange(ed.inicio, ed.fin)) + "</span></li>" +
      (typeof ed.empresas === "number" ? '<li class="leg"><span class="leg-city">' + ed.empresas + '</span><span class="leg-dates">' + esc(ui("total_companies")) + "</span></li>" : "");

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
      '<p class="label">' + esc(ui("itinerary")) + '</p><ul class="legs">' + legs + "</ul>" +
      (others ? '<p class="legs-note">' + esc(others) + "</p>" : "") +
      sectors +
      (isEmpty(ed.delegacion) ? "" : '<p style="margin:24px 0 0"><a class="btn btn-outline" href="' + esc(edUrl(ed)) + '#delegacion">' + esc(ui("see_delegation")) + ICON.arrow + "</a></p>") +
      "</div>" +
      '<div class="next-side">' + program + call + hosts +
      '<p style="margin:16px 0 0"><a href="' + esc(edUrl(ed)) + '">' + esc(ui("see_details")) + " →</a></p>" +
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

    var totals =
      '<div class="totals">' +
      (since ? '<div class="card total' + verifyClass(ctx) + '"><strong>' + esc(since) + "</strong><span>" + esc(ui("total_since")) + verifyTag(ctx) + "</span></div>" : "") +
      '<div class="card total"><strong>' + past.length + "</strong><span>" + esc(ui("total_editions")) + "</span></div>" +
      (totalCompanies ? '<div class="card total"><strong>' + totalCompanies + (partial ? "+" : "") + "</strong><span>" + esc(ui("total_companies_editions")) + "</span></div>" : "") +
      "</div>";

    var cards = past.map(function (ed) {
      var meta = ["<span>" + esc(fmtRange(ed.inicio, ed.fin)) + "</span>", "<span>Atlanta</span>"];
      if (typeof ed.empresas === "number") meta.push("<span>" + esc(ui("companies_n", { n: ed.empresas })) + "</span>");
      return (
        '<li><a class="card edition-card" href="' + esc(edUrl(ed)) + '">' +
        '<div class="edition-year">' + esc(year(ed)) + "</div>" +
        "<div><h3>" + esc(t(ed.titulo)) + '</h3><div class="edition-meta">' + meta.join("") + "</div></div>" +
        '<span class="edition-go">' + esc(ui("view_edition")) + ICON.arrow + "</span>" +
        "</a></li>"
      );
    }).join("");

    el.innerHTML = context + totals + '<ul class="editions">' + cards + "</ul>";
  }

  function renderWhy() {
    var el = document.getElementById("atlanta-body");
    if (!el) return;
    var items = [
      [ICON.clock, "why_1_t", "why_1_p"],
      [ICON.card, "why_2_t", "why_2_p"],
      [ICON.spark, "why_3_t", "why_3_p"],
      [ICON.plane, "why_4_t", "why_4_p"],
    ];
    el.innerHTML = '<div class="grid-4">' + items.map(function (i) {
      return '<div class="card why"><div class="why-icon">' + i[0] + "</div><h3>" + esc(ui(i[1])) + "</h3><p>" + esc(ui(i[2])) + "</p></div>";
    }).join("") + "</div>";
  }

  function renderResources() {
    var el = document.getElementById("recursos-body");
    if (!el) return;
    var list = SITIO.recursos || [];
    el.innerHTML = '<div class="grid-2">' + list.map(function (r) {
      var url = safeUrl(r.url);
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
      '<div><span class="eyebrow">' + esc(ui("contact_eyebrow")) + "</span><h2>" + esc(ui("contact_title")) + "</h2><p>" + esc(ui("contact_lead")) + "</p></div>" +
      '<div class="contact-links">' + contactButtons("btn-primary") + "</div>" +
      "</div>";
  }

  function renderHome() {
    document.title = ui("page_title_home");
    renderHero();
    renderNext();
    renderPast();
    renderWhy();
    renderResources();
    renderContact();
  }

  // ───────────────────────── Página de edición ─────────────────────────
  function section(id, title, body) {
    return '<section class="ed-section" id="' + id + '" aria-labelledby="' + id + '-t"><h2 id="' + id + '-t">' + esc(title) + "</h2>" + body + "</section>";
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

  function renderOrgs(list, withKind) {
    var withLogos = list.some(function (o) { return o.logo; });
    return '<ul class="cards">' + list.map(function (o) {
      var url = safeUrl(o.web);
      return (
        '<li class="card org' + verifyClass(o) + '">' +
        (withLogos ? orgLogo(o) : "") +
        (withKind ? '<span class="kind">' + esc(ui("kind_" + (o.tipo || "otro"))) + "</span>" : "") +
        "<h3>" + esc(o.nombre) + verifyTag(o) + "</h3>" +
        (o.sector ? '<span class="sector">' + esc(t(o.sector)) + "</span>" : "") +
        (o.provincia ? '<span class="prov">' + ICON.pin + esc(t(o.provincia)) + "</span>" : "") +
        (o.detalle ? "<p>" + esc(t(o.detalle)) + "</p>" : "") +
        (url ? '<a class="web" href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(ui("website")) + " " + ICON.ext + "</a>" : "") +
        "</li>"
      );
    }).join("") + "</ul>";
  }

  function renderPeople(list) {
    return '<ul class="people">' + list.map(function (p) {
      var role = [t(p.cargo), t(p.organizacion)].filter(Boolean).join(" · ");
      return (
        '<li class="card person' + verifyClass(p) + '"><span class="avatar" aria-hidden="true">' + esc(initials(p.nombre)) + "</span>" +
        "<div><strong>" + esc(p.nombre) + verifyTag(p) + "</strong>" +
        (role ? "<span>" + esc(role) + "</span>" : "") +
        (p.detalle ? '<p style="margin:4px 0 0;color:var(--ink-2);font-size:15px">' + esc(t(p.detalle)) + "</p>" : "") +
        "</div></li>"
      );
    }).join("") + "</ul>";
  }

  function renderPress(list) {
    return '<ul class="press">' + list.map(function (p) {
      var url = safeUrl(p.url);
      var meta = [p.medio, p.fecha ? fmtDate(p.fecha) : ""].filter(Boolean).join(" · ");
      var inner = '<div><div class="t">' + esc(t(p.titulo)) + '</div><div class="m">' + esc(meta) + "</div></div>" +
        (p.idioma ? '<span class="lang-badge">' + esc(String(p.idioma).toUpperCase()) + "</span>" : "");
      return "<li>" + (url ? '<a class="card" href="' + esc(url) + '" target="_blank" rel="noopener">' + inner + "</a>" : '<div class="card" style="padding:16px 20px">' + inner + "</div>") + "</li>";
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

  function renderEdition() {
    var main = document.getElementById("main");
    var id = new URLSearchParams(window.location.search).get("id");
    var ed = EDICIONES.filter(function (e) { return e.id === id; })[0];

    if (!ed) {
      document.title = ui("not_found_t") + " · South Meets South";
      main.innerHTML =
        '<div class="container not-found"><h1>' + esc(ui("not_found_t")) + "</h1><p>" + esc(ui("not_found_p")) + '</p><p><a class="btn btn-outline" href="index.html#ediciones">' + esc(ui("back")) + "</a></p></div>";
      return;
    }

    var isNext = ed.estado === "proxima";
    document.title = year(ed) + " · " + t(ed.titulo) + " · South Meets South";

    var others = otherLegsNote(ed);

    var hero =
      '<header class="ed-hero"><div class="container">' +
      '<a class="back-link" href="index.html' + (lang === "en" ? "?lang=en" : "") + '#ediciones">' + esc(ui("back")) + "</a>" +
      '<div class="ed-year" aria-hidden="true">' + esc(year(ed)) + "</div>" +
      "<h1>" + esc(t(ed.titulo)) + "</h1>" +
      '<div class="ed-when"><span class="status-badge' + (isNext ? "" : " done") + '">' + esc(ui(isNext ? "status_next" : "status_done")) + "</span>" +
      '<span class="chip">Atlanta</span><span>' + esc(fmtRange(ed.inicio, ed.fin)) + "</span></div>" +
      (others ? '<p class="ed-other">' + esc(others) + "</p>" : "") +
      "</div></header>";

    var stats = isEmpty(ed.cifras) ? "" :
      '<div class="container"><div class="ed-stats">' + ed.cifras.map(function (c) {
        return '<div class="card ed-stat' + verifyClass(c) + '"><strong>' + esc(c.valor) + "</strong><span>" + esc(t(c.texto)) + verifyTag(c) + "</span></div>";
      }).join("") + "</div></div>";

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
      if (participate) sections.push(["participar", ui("sec_participate"), '<div style="max-width:640px">' + participate + "</div>", false]);
    } else {
      sections.push(["agenda", ui("sec_agenda"), isEmpty(ed.agenda) ? null : renderAgenda(ed), true]);
    }

    // La nota de la delegación es interna: solo se ve en modo borrador.
    var delegNote = BORRADOR && ed.delegacionNota ? '<p class="note">' + esc(t(ed.delegacionNota)) + "</p>" : "";
    var delegTitle = ui("sec_delegation") + (isEmpty(ed.delegacion) ? "" : " · " + ed.delegacion.length);
    sections.push(["delegacion", delegTitle, isEmpty(ed.delegacion) ? (delegNote || null) : delegNote + renderOrgs(ed.delegacion, false), !isNext]);
    sections.push(["anfitriones", ui("sec_hosts"), isEmpty(ed.anfitriones) ? null : renderOrgs(ed.anfitriones, true), !isNext]);
    sections.push(["reuniones", ui("sec_meetings"), isEmpty(ed.reuniones) ? null : renderPeople(ed.reuniones), !isNext]);
    sections.push(["resultados", ui("sec_results"), isEmpty(ed.resultados) ? null : '<ul class="results">' + ed.resultados.map(function (r) { return "<li>" + ICON.check + "<span>" + esc(t(r)) + "</span></li>"; }).join("") + "</ul>", !isNext]);
    sections.push(["galeria", ui("sec_gallery"), isEmpty(ed.galeria) ? null : renderGallery(ed.galeria), !isNext]);
    sections.push(["organizan", ui("sec_organizers"), isEmpty(ed.organizadores) ? null : '<ul class="organizers">' + ed.organizadores.map(function (o) {
      return '<li class="card">' + esc(t(o.nombre)) + (o.detalle ? "<small>" + esc(t(o.detalle)) + "</small>" : "") + "</li>";
    }).join("") + "</ul>", false]);
    sections.push(["prensa", ui("sec_press"), isEmpty(ed.prensa) ? null : renderPress(ed.prensa), false]);

    var visible = sections.filter(function (s) { return s[2] || (BORRADOR && s[3]); });

    var nav = '<nav class="ed-nav" aria-label="' + esc(t(ed.titulo)) + '"><div class="container"><ul>' +
      visible.map(function (s) { return '<li><a href="#' + s[0] + '">' + esc(s[1]) + "</a></li>"; }).join("") +
      "</ul></div></nav>";

    var body = '<div class="container">' + visible.map(function (s) { return section(s[0], s[1], s[2] || emptyBox()); }).join("") + "</div>";

    // Navegación entre ediciones (cronológica: anterior = más vieja).
    var idx = EDICIONES.indexOf(ed);
    var older = EDICIONES[idx + 1], newer = EDICIONES[idx - 1];
    var pager = '<div class="container"><nav class="pager" aria-label="' + esc(ui("nav_editions")) + '">' +
      (older ? '<a class="card" href="' + esc(edUrl(older)) + '"><small>← ' + esc(ui("prev_edition")) + "</small><strong>" + esc(year(older)) + "</strong></a>" : "<span></span>") +
      (newer ? '<a class="card next-link" href="' + esc(edUrl(newer)) + '"><small>' + esc(ui("next_edition")) + " →</small><strong>" + esc(year(newer)) + "</strong></a>" : "") +
      "</nav></div>";

    main.innerHTML = hero + stats + internal + nav + body + pager;
    setupScrollSpy();
  }

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
  function init() {
    var page = document.body.getAttribute("data-page");
    var render = page === "edicion" ? renderEdition : renderHome;
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
