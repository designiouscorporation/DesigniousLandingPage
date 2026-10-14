/* Designious Corporation — idioma (ES/EN), etapas del caso, contadores y sonido */
(function () {
  "use strict";

  var T = {
    es: {
      title: "Designious Corporation | Tecnología inteligente a la medida de tu negocio",
      desc: "IA, visión por computadora, drones, mapas 2D/3D, análisis de datos y automatización a la medida. Tu visión, nuestro propósito.",
      wa: "Hola, quiero información sobre los servicios de Designious Corporation.",
      i18n: {
        "skip": "Saltar al contenido",
        "nav.services": "Servicios", "nav.case": "Caso de éxito", "nav.videos": "En acción", "nav.contact": "Contacto",
        "cta.whatsapp": "Escríbenos por WhatsApp",
        "hero.title": "Tecnología inteligente a la medida de tu negocio",
        "hero.lead": "IA, visión por computadora y drones que convierten tus imágenes y datos en decisiones.",
        "hero.case": "Ver un caso real", "hero.pdf": "Descargar portafolio",
        "theme.group": "Estilo", "theme.black": "Estilo negro", "theme.white": "Estilo blanco", "theme.red": "Estilo rojo",
        "motto": "Tu visión, nuestro propósito",
        "video.sound": "Ver con sonido", "video.mute": "Silenciar", "nav.down": "Bajar",
        "services.title": "Lo que Designious puede hacer por tu negocio",
        "s1.t": "Análisis de datos", "s1.d": "Tus datos, en tableros claros para decidir.",
        "s2.t": "Visión por computadora", "s2.d": "Tus imágenes, convertidas en información.",
        "s3.t": "Prototipado electrónico", "s3.d": "De la idea a un equipo que funciona.",
        "s4.t": "Drones y mapas 2D / 3D", "s4.d": "Tu terreno o cultivo, mapeado desde el aire.",
        "s5.t": "Automatización a la medida", "s5.d": "Tareas repetitivas que se hacen solas.",
        "s6.t": "Microcomputadoras inteligentes", "s6.d": "Equipos pequeños que procesan datos en sitio.",
        "case.tag": "Caso de éxito",
        "case.title": "Una plantación de palma de aceite, de las fotos del dron a un plan de acción",
        "case.steps": "Etapas del caso",
        "c1.t": "Lo que capta el dron",
        "c1.d": "Un vuelo con cámara multiespectral fotografía toda la plantación: miles de imágenes sueltas, difíciles de usar por sí solas.",
        "c1.alt": "Foto aérea en escala de grises de la plantación de palma",
        "c2.t": "La IA lo analiza",
        "c2.d": "Revisa cada palma y mide su vigor con un índice de vegetación: verde, vegetación vigorosa; rojo, poca vegetación (caminos, suelo o palmas débiles). También marca dónde falta una palma.",
        "c2.alt": "Mapa de vigor palma por palma con escala de bajo a alto",
        "c3.t": "El veredicto: 4 zonas prioritarias",
        "c3.d": "Aquí se actúa primero (círculos numerados).",
        "c3.alt": "Mapa de la plantación con cuatro zonas prioritarias numeradas",
        "res.title": "Lo que recibió el cliente",
        "res.palms": "palmas contadas", "res.gaps": "espacios vacíos", "res.stress": "palmas con estrés", "res.zones": "zonas prioritarias",
        "k1.t": "Qué está pasando",
        "k1.a1": "Falta de clorofila:", "k1.a2": "24 focos, 738 palmas.",
        "k1.b1": "Vigor bajo del dosel:", "k1.b2": "32 focos, 513 palmas.",
        "k1.c1": "Huecos y estrés", "k1.c2": "localizados palma por palma.",
        "k2.t": "Índices: para qué sirven",
        "k2.a": "clorofila y nutrición de la palma.", "k2.b": "vigor general del follaje.",
        "k2.c": "vigor sin que el suelo estorbe.", "k2.d": "verdor y salud de la hoja.",
        "k3.t": "Qué puede hacer",
        "k3.a1": "Abonar", "k3.a2": "solo donde falta clorofila.",
        "k3.b1": "Replantar", "k3.b2": "los espacios vacíos.",
        "k3.c1": "Revisar primero", "k3.c2": "las palmas con estrés.",
        "k3.d1": "Ordenar", "k3.d2": "las visitas de campo por zonas.",
        "k3.impact": "Impacto: menos insumos y recorridos, decisiones a tiempo.",
        "vid.title": "Míralo en acción",
        "vid.lead": "Así convertimos las fotos de un dron en mapas 2D y 3D, índices de vegetación y zonas prioritarias.",
        "vid.a": "La plataforma en uso, del archivo del dron al mapa",
        "vid.b": "Recorrido corto por la plataforma",
        "vid.note": "Los textos dentro de los videos están en español.",
        "ct.title": "Cuéntanos qué quieres resolver",
        "ct.lead": "Escríbenos por WhatsApp y conversemos sobre tu proyecto.",
        "ct.pdf": "Descargar portafolio (PDF)", "ct.mail": "Escríbenos por correo",
        "ct.role": "Gerente comercial", "ct.note": "WhatsApp o llamada",
        "foot.rights": "© 2026 Designious Corporation. Todos los derechos reservados."
      }
    },
    en: {
      title: "Designious Corporation | Smart technology tailored to your business",
      desc: "AI, computer vision, drones, 2D/3D maps, data analysis and custom automation. Your vision, our purpose.",
      wa: "Hello, I'd like information about Designious Corporation's services.",
      i18n: {
        "skip": "Skip to content",
        "nav.services": "Services", "nav.case": "Success story", "nav.videos": "In action", "nav.contact": "Contact",
        "cta.whatsapp": "Message us on WhatsApp",
        "hero.title": "Smart technology tailored to your business",
        "hero.lead": "AI, computer vision and drones that turn your images and data into decisions.",
        "hero.case": "See a real case", "hero.pdf": "Download portfolio",
        "theme.group": "Style", "theme.black": "Black style", "theme.white": "White style", "theme.red": "Red style",
        "motto": "Your vision, our purpose",
        "video.sound": "Watch with sound", "video.mute": "Mute", "nav.down": "Scroll down",
        "services.title": "What Designious can do for your business",
        "s1.t": "Data analysis", "s1.d": "Your data, in clear dashboards to decide with.",
        "s2.t": "Computer vision", "s2.d": "Your images, turned into information.",
        "s3.t": "Electronic prototyping", "s3.d": "From idea to working hardware.",
        "s4.t": "Drones and 2D / 3D maps", "s4.d": "Your land or crop, mapped from the air.",
        "s5.t": "Custom automation", "s5.d": "Repetitive tasks that run themselves.",
        "s6.t": "Smart microcomputers", "s6.d": "Small devices that process data on site.",
        "case.tag": "Success story",
        "case.title": "An oil palm plantation, from drone photos to an action plan",
        "case.steps": "Stages of the case",
        "c1.t": "What the drone captures",
        "c1.d": "A flight with a multispectral camera photographs the entire plantation: thousands of loose images, hard to use on their own.",
        "c1.alt": "Grayscale aerial photo of the palm plantation",
        "c2.t": "AI analyzes it",
        "c2.d": "It checks every palm and measures its vigor with a vegetation index: green means vigorous vegetation; red means little vegetation (roads, soil or weak palms). It also flags where a palm is missing.",
        "c2.alt": "Palm-by-palm vigor map with a low-to-high scale",
        "c3.t": "The verdict: 4 priority zones",
        "c3.d": "This is where to act first (numbered circles).",
        "c3.alt": "Plantation map with four numbered priority zones",
        "res.title": "What the client received",
        "res.palms": "palms counted", "res.gaps": "empty gaps", "res.stress": "stressed palms", "res.zones": "priority zones",
        "k1.t": "What is happening",
        "k1.a1": "Low chlorophyll:", "k1.a2": "24 hotspots, 738 palms.",
        "k1.b1": "Low canopy vigor:", "k1.b2": "32 hotspots, 513 palms.",
        "k1.c1": "Gaps and stress", "k1.c2": "located palm by palm.",
        "k2.t": "Indices: what they are for",
        "k2.a": "chlorophyll and palm nutrition.", "k2.b": "overall foliage vigor.",
        "k2.c": "vigor without soil interference.", "k2.d": "greenness and leaf health.",
        "k3.t": "What you can do",
        "k3.a1": "Fertilize", "k3.a2": "only where chlorophyll is lacking.",
        "k3.b1": "Replant", "k3.b2": "the empty gaps.",
        "k3.c1": "Check first", "k3.c2": "the stressed palms.",
        "k3.d1": "Organize", "k3.d2": "field visits by zone.",
        "k3.impact": "Impact: fewer inputs and trips, decisions made on time.",
        "vid.title": "See it in action",
        "vid.lead": "This is how we turn drone photos into 2D and 3D maps, vegetation indices and priority zones.",
        "vid.a": "The platform in use, from drone file to map",
        "vid.b": "Short tour of the platform",
        "vid.note": "Text inside the videos is in Spanish.",
        "ct.title": "Tell us what you want to solve",
        "ct.lead": "Message us on WhatsApp and let's talk about your project.",
        "ct.pdf": "Download portfolio (PDF)", "ct.mail": "Email us",
        "ct.role": "Commercial manager", "ct.note": "WhatsApp or call",
        "foot.rights": "© 2026 Designious Corporation. All rights reserved."
      }
    }
  };

  var doc = document, root = doc.documentElement;
  var lang = "es";

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }

  /* ----- Idioma ----- */
  function formatCounters() {
    var nf = new Intl.NumberFormat(lang === "en" ? "en-US" : "es-CO");
    doc.querySelectorAll("[data-count]").forEach(function (el) {
      el.textContent = nf.format(parseInt(el.getAttribute("data-count"), 10));
    });
  }

  function setLang(next) {
    if (!T[next]) next = "es";
    lang = next;
    var d = T[lang];
    root.lang = lang;
    doc.title = d.title;
    var md = doc.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", d.desc);

    doc.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (el.classList.contains("js-sound-txt")) return;
      var v = d.i18n[el.getAttribute("data-i18n")];
      if (v !== undefined) el.textContent = v;
    });
    doc.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var v = d.i18n[el.getAttribute("data-i18n-alt")];
      if (v !== undefined) el.setAttribute("alt", v);
    });
    doc.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = d.i18n[el.getAttribute("data-i18n-aria")];
      if (v !== undefined) el.setAttribute("aria-label", v);
    });
    doc.querySelectorAll(".js-wa").forEach(function (a) {
      a.href = "https://wa.me/573112087255?text=" + encodeURIComponent(d.wa);
    });
    doc.querySelectorAll(".lang__btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    syncSoundLabel();
    formatCounters();
    store("dz-lang", lang);
  }

  doc.querySelectorAll(".lang__btn").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  /* ----- Estilo (negro / blanco / rojo) ----- */
  var THEME_COLOR = { black: "#030408", white: "#ffffff", red: "#fe0000" };
  var theme = "white";
  function setTheme(next) {
    if (!THEME_COLOR[next]) next = "white";
    theme = next;
    root.setAttribute("data-theme", theme);
    var tone = theme === "white" ? "black" : "white";   // logo oscuro sobre fondo blanco; claro en los demás
    doc.querySelectorAll("[data-logo]").forEach(function (img) {
      img.src = "assets/img/logo-" + img.getAttribute("data-logo") + "-" + tone + ".png";
    });
    doc.querySelectorAll(".theme").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-theme-btn") === theme));
    });
    var mt = doc.querySelector('meta[name="theme-color"]');
    if (mt) mt.setAttribute("content", THEME_COLOR[theme]);
  }
  doc.querySelectorAll(".theme").forEach(function (b) {
    b.addEventListener("click", function () { setTheme(b.getAttribute("data-theme-btn")); });
  });

  /* ----- Etapas del caso (pestañas) ----- */
  var tabs = Array.prototype.slice.call(doc.querySelectorAll(".step"));
  function showStep(n, focus) {
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-step") === String(n);
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      var pane = doc.getElementById(t.getAttribute("aria-controls"));
      if (pane) { pane.hidden = !on; pane.classList.toggle("is-active", on); }
      if (on && focus) t.focus();
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { showStep(t.getAttribute("data-step")); });
    t.addEventListener("keydown", function (e) {
      var k = e.key, j = null;
      if (k === "ArrowDown" || k === "ArrowRight") j = (i + 1) % tabs.length;
      else if (k === "ArrowUp" || k === "ArrowLeft") j = (i - 1 + tabs.length) % tabs.length;
      else if (k === "Home") j = 0;
      else if (k === "End") j = tabs.length - 1;
      if (j !== null) { e.preventDefault(); showStep(tabs[j].getAttribute("data-step"), true); }
    });
  });

  /* ----- Contadores (una sola vez al entrar en pantalla) ----- */
  function countUp() {
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    var els = doc.querySelectorAll("[data-count]");
    if (reduce || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target, end = parseInt(el.getAttribute("data-count"), 10), t0 = null, dur = 1100;
        var nf = new Intl.NumberFormat(lang === "en" ? "en-US" : "es-CO");
        function step(ts) {
          if (t0 === null) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
          el.textContent = nf.format(Math.round(end * e));
          if (p < 1) requestAnimationFrame(step); else el.textContent = nf.format(end);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ----- Videos de portada: banner a pantalla completa y video "cómo funciona" ----- */
  var reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var players = [];   // { video, btn, txt }

  function syncSound() {
    var d = T[lang].i18n;
    players.forEach(function (p) {
      var on = !p.video.muted, label = on ? d["video.mute"] : d["video.sound"];
      p.btn.setAttribute("aria-pressed", String(on));
      p.btn.setAttribute("aria-label", label);
      if (p.txt) p.txt.textContent = label;
    });
  }
  var syncSoundLabel = syncSound;   // lo usa setLang

  doc.querySelectorAll(".js-sound").forEach(function (btn) {
    var video = doc.getElementById(btn.getAttribute("data-video"));
    if (!video) return;
    players.push({ video: video, btn: btn, txt: btn.querySelector(".js-sound-txt") });
    btn.addEventListener("click", function () {
      var willUnmute = video.muted;
      players.forEach(function (p) { p.video.muted = true; });      // un solo video con sonido a la vez
      video.muted = !willUnmute;
      if (!video.muted && video.paused) video.play().catch(function () {});
      syncSound();
    });
  });

  // El banner carga la versión HD en pantallas grandes y la liviana en celulares o con ahorro de datos
  var banner = doc.getElementById("bannerVideo");
  if (banner) {
    var small = window.innerWidth < 900 || (navigator.connection && (navigator.connection.saveData || /(^|-)2g$/.test(navigator.connection.effectiveType || "")));
    if (!reduceMotion) {
      banner.src = banner.getAttribute(small ? "data-src-sd" : "data-src-hd");
      banner.play().catch(function () {});
    }
  }

  // Pausa los videos que no están a la vista (ahorra datos y batería)
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io2 = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting) { v.play().catch(function () {}); } else { v.pause(); }
      });
    }, { threshold: 0.25 });
    ["bannerVideo", "introVideo"].forEach(function (id) { var v = doc.getElementById(id); if (v) io2.observe(v); });
  }

  // Al reproducir uno de los videos de la sección "En acción", se silencian los de la portada
  doc.querySelectorAll(".vid video").forEach(function (v) {
    v.addEventListener("play", function () {
      doc.querySelectorAll(".vid video").forEach(function (o) { if (o !== v) o.pause(); });
      players.forEach(function (p) { p.video.muted = true; });
      syncSound();
    });
  });

  /* ----- Inicio ----- */
  setTheme("white");   // la página siempre abre en blanco
  var saved = store("dz-lang");
  var nav = (navigator.language || "es").toLowerCase();
  setLang(saved || (nav.indexOf("en") === 0 ? "en" : "es"));
  countUp();
})();
