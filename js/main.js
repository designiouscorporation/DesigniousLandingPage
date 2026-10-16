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
        "nav.services": "Servicios", "nav.case": "Caso de éxito", "nav.process": "Proceso", "nav.about": "Nosotros", "nav.contact": "Contacto",
        "cta.whatsapp": "Escríbenos por WhatsApp",
        "hero.title": "Tecnología inteligente a la medida de tu negocio",
        "hero.lead": "IA, visión por computadora y drones que convierten tus imágenes y datos en decisiones.",
        "hero.case": "Ver un caso real", "hero.pdf": "Descargar portafolio",
        "theme.group": "Estilo", "theme.black": "Estilo negro", "theme.white": "Estilo blanco",
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
        "team.title": "Las personas detrás de Designious",
        "team.lead": "Un equipo que une dirección, relación con clientes e ingeniería para que tu proyecto salga adelante. Conócenos y visita nuestros perfiles profesionales.",
        "team.linkedin": "Ver perfil en LinkedIn",
        "t1.role": "CEO",
        "t1.bio": "Lidera la visión y la estrategia de Designious. Se encarga de la visión por computadora y de las tecnologías técnicas que requieren nuestras soluciones.",
        "t1.c1": "Visión y estrategia", "t1.c2": "Innovación", "t1.c3": "Automatización", "t1.c4": "Visión por computadora",
        "t2.bio": "Pieza fundamental, junto al CEO, para guiar la visión de la empresa. Es el primer contacto de cada proyecto: escucha lo que necesitas, define el alcance contigo y te acompaña hasta la propuesta.",
        "t2.c1": "Alianzas con clientes", "t2.c5": "Visión de la empresa", "t2.c2": "Asesoría comercial", "t2.c3": "Propuestas", "t2.c4": "Atención a clientes",
        "t3.role": "Ingeniero eléctrico",
        "t3.bio": "Aporta el hardware que las soluciones necesitan para funcionar en sitio: electrónica, equipos de campo y microcomputadoras que procesan datos donde se usan.",
        "t3.c1": "Electrónica", "t3.c2": "Prototipado", "t3.c3": "Microcomputadoras",
        "t4.role": "Equipo de ingeniería",
        "t4.bio": "Desarrolla las soluciones de ingeniería que requiere Designious.",
        "t4.c1": "Ingeniería",
        "ct.title": "Cuéntanos qué quieres resolver",
        "ct.lead": "Escríbenos por WhatsApp y conversemos sobre tu proyecto.",
        "ct.mail": "Escríbenos por correo",
        "ct.role": "Gerente comercial", "ct.note": "WhatsApp o llamada",
        "ap.tag": "Aplicaciones",
        "ap.title": "Dónde puede ayudarte nuestra tecnología",
        "ap.lead": "Hoy atendemos el sector agroindustrial, con un caso real en palma de aceite. La misma tecnología aplica a estas áreas.",
        "a1.t": "Agroindustria",
        "a1.d": "Conteo de plantas, vigor del cultivo y zonas que necesitan atención.",
        "a2.t": "Terrenos y mapas",
        "a2.d": "Mapas 2D y 3D de lotes, predios y obras, tomados desde el aire.",
        "a3.t": "Industria y procesos",
        "a3.d": "Automatización de tareas repetitivas y tableros para decidir con datos.",
        "a4.t": "Innovación y prototipos",
        "a4.d": "De la idea a un equipo electrónico que funciona y procesa datos en sitio.",
        "pr.tag": "Cómo trabajamos",
        "pr.title": "De tu necesidad a resultados que puedes usar",
        "pr.lead": "Un proceso simple y transparente, con entregables claros en cada paso.",
        "p1.t": "Diagnóstico",
        "p1.d": "Escuchamos qué quieres resolver y revisamos tus datos o imágenes.",
        "p2.t": "Propuesta",
        "p2.d": "Definimos el alcance, los entregables y los tiempos antes de empezar.",
        "p3.t": "Desarrollo",
        "p3.d": "Construimos y probamos la solución, y te mostramos los avances.",
        "p4.t": "Entrega",
        "p4.d": "Recibes los resultados en un formato claro y te explicamos cómo usarlos.",
        "ab.tag": "Sobre nosotros",
        "ab.title": "Una startup de innovación tecnológica en Neiva, Huila",
        "ab.p1": "Designious Corporation es una startup joven que nació para llevar la inteligencia artificial, la visión por computadora y los drones a empresas y productores que quieren decidir con datos.",
        "ab.p2": "Estamos empezando y lo decimos con claridad: tenemos un caso real, con cifras reales, y preferimos mostrar lo que hemos hecho antes que prometer lo que no hemos hecho. Recientemente presentamos nuestra tecnología en una feria de innovación tecnológica de la región.",
        "ab.f1": "Neiva, Huila, Colombia",
        "ab.f2": "Startup de innovación tecnológica",
        "ab.f3": "Atención en español e inglés",
        "ab.m.t": "Misión",
        "ab.m.d": "Hacer accesible la tecnología inteligente para que más negocios de la región conviertan sus imágenes y datos en decisiones.",
        "v1.t": "Claridad",
        "v1.d": "Explicamos nuestro trabajo en lenguaje simple y con resultados medibles.",
        "v2.t": "Honestidad",
        "v2.d": "Solo prometemos lo que podemos entregar.",
        "v3.t": "A la medida",
        "v3.d": "Cada solución parte de tu problema, no de una plantilla.",
        "faq.tag": "Preguntas frecuentes",
        "faq.title": "Lo que nos suelen preguntar",
        "q1.q": "¿Con qué datos puedo empezar?",
        "q1.a": "Con fotos aéreas, imágenes, hojas de cálculo o registros que ya tengas. Si aún no los tienes, lo definimos juntos en el diagnóstico.",
        "q2.q": "¿Cuánto cuesta y cuánto tarda?",
        "q2.a": "Depende del alcance. Después del diagnóstico te enviamos una propuesta con el precio, los entregables y los tiempos.",
        "q3.q": "¿Qué recibo al final?",
        "q3.a": "Resultados que puedes usar: mapas, tableros e informes con recomendaciones, como en el caso de la plantación de palma.",
        "q4.q": "¿Atienden fuera de Neiva?",
        "q4.a": "Estamos en Neiva, Huila, Colombia. Cuéntanos dónde está tu proyecto y evaluamos cómo atenderlo.",
        "s1.o": "Entregas: tableros e informes claros",
        "s2.o": "Entregas: conteos, detecciones y mapas de vigor",
        "s3.o": "Entregas: prototipo funcional",
        "s4.o": "Entregas: mapas 2D/3D e índices de vegetación",
        "s5.o": "Entregas: procesos que se ejecutan solos",
        "s6.o": "Entregas: equipos listos para trabajar en campo",
        "ct.loc": "Neiva, Huila, Colombia",
        "foot.privacy": "Política de privacidad",
        "ap.now": "Sector que atendemos hoy",
        "ab.f4": "Sector actual: agroindustria",
        "fair.title": "Presentes en la feria de innovación de la Cámara de Comercio",
        "fair.lead": "Presentamos nuestras soluciones en vivo y logramos acercamientos comerciales con clientes, federaciones y gremios importantes de la región.",
        "fair.c1": "Pantalla 1: cámara de espectro infrarrojo para analizar el comportamiento humano, otra de nuestras soluciones. Pantalla 2: el caso de éxito de la plantación de palma, desde las imágenes del dron hasta el mapa de vigor y las zonas prioritarias.",
        "fair.c2": "En nuestro stand durante la feria.",
        "fair.a1": "Stand de Designious Corporation con dos pantallas: análisis de comportamiento humano con cámara infrarroja y el caso de éxito de la palma, junto al cartel del caso",
        "fair.a2": "Tres personas frente al stand de Designious Corporation durante la feria",
        "case.pause": "Pausar cambio automático",
        "case.play": "Reanudar cambio automático",
        "foot.linkedin": "Síguenos en LinkedIn",
        "foot.rights": "© 2026 Designious Corporation. Todos los derechos reservados."
      }
    },
    en: {
      title: "Designious Corporation | Smart technology tailored to your business",
      desc: "AI, computer vision, drones, 2D/3D maps, data analysis and custom automation. Your vision, our purpose.",
      wa: "Hello, I'd like information about Designious Corporation's services.",
      i18n: {
        "skip": "Skip to content",
        "nav.services": "Services", "nav.case": "Success story", "nav.process": "Process", "nav.about": "About us", "nav.contact": "Contact",
        "cta.whatsapp": "Message us on WhatsApp",
        "hero.title": "Smart technology tailored to your business",
        "hero.lead": "AI, computer vision and drones that turn your images and data into decisions.",
        "hero.case": "See a real case", "hero.pdf": "Download portfolio",
        "theme.group": "Style", "theme.black": "Black style", "theme.white": "White style",
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
        "team.title": "The people behind Designious",
        "team.lead": "A team that brings together leadership, client relations and engineering so your project succeeds. Get to know us and visit our professional profiles.",
        "team.linkedin": "View LinkedIn profile",
        "t1.role": "CEO",
        "t1.bio": "Leads Designious' vision and strategy. He is in charge of computer vision and the technical technologies our solutions require.",
        "t1.c1": "Vision and strategy", "t1.c2": "Innovation", "t1.c3": "Automation", "t1.c4": "Computer vision",
        "t2.bio": "A key piece, together with the CEO, in guiding the company's vision. The first point of contact for every project: listens to what you need, defines the scope with you and stays with you through to the proposal.",
        "t2.c1": "Client partnerships", "t2.c5": "Company vision", "t2.c2": "Sales advisory", "t2.c3": "Proposals", "t2.c4": "Client care",
        "t3.role": "Electrical engineer",
        "t3.bio": "Provides the hardware our solutions need to work on site: electronics, field equipment and microcomputers that process data where they are used.",
        "t3.c1": "Electronics", "t3.c2": "Prototyping", "t3.c3": "Microcomputers",
        "t4.role": "Engineering team",
        "t4.bio": "Develops the engineering solutions that Designious requires.",
        "t4.c1": "Engineering",
        "ct.title": "Tell us what you want to solve",
        "ct.lead": "Message us on WhatsApp and let's talk about your project.",
        "ct.mail": "Email us",
        "ct.role": "Commercial manager", "ct.note": "WhatsApp or call",
        "ap.tag": "Applications",
        "ap.title": "Where our technology can help you",
        "ap.lead": "Today we serve the agribusiness sector, with a real oil palm case. The same technology applies to these areas.",
        "a1.t": "Agribusiness",
        "a1.d": "Plant counts, crop vigor and the zones that need attention.",
        "a2.t": "Land and maps",
        "a2.d": "2D and 3D maps of plots, properties and works, captured from the air.",
        "a3.t": "Industry and processes",
        "a3.d": "Automation of repetitive tasks and dashboards to decide with data.",
        "a4.t": "Innovation and prototypes",
        "a4.d": "From idea to working electronic hardware that processes data on site.",
        "pr.tag": "How we work",
        "pr.title": "From your need to results you can use",
        "pr.lead": "A simple, transparent process with clear deliverables at every step.",
        "p1.t": "Diagnosis",
        "p1.d": "We listen to what you want to solve and review your data or images.",
        "p2.t": "Proposal",
        "p2.d": "We define the scope, deliverables and timeline before we start.",
        "p3.t": "Development",
        "p3.d": "We build and test the solution, and show you our progress.",
        "p4.t": "Delivery",
        "p4.d": "You receive the results in a clear format and we explain how to use them.",
        "ab.tag": "About us",
        "ab.title": "A technology innovation startup in Neiva, Huila",
        "ab.p1": "Designious Corporation is a young startup created to bring artificial intelligence, computer vision and drones to companies and producers who want to decide with data.",
        "ab.p2": "We are just getting started and we say so openly: we have one real case with real numbers, and we would rather show what we have done than promise what we have not. We recently presented our technology at a regional technology innovation fair.",
        "ab.f1": "Neiva, Huila, Colombia",
        "ab.f2": "Technology innovation startup",
        "ab.f3": "Service in Spanish and English",
        "ab.m.t": "Mission",
        "ab.m.d": "Make smart technology accessible so more businesses in the region can turn their images and data into decisions.",
        "v1.t": "Clarity",
        "v1.d": "We explain our work in plain language, with measurable results.",
        "v2.t": "Honesty",
        "v2.d": "We only promise what we can deliver.",
        "v3.t": "Tailored",
        "v3.d": "Every solution starts from your problem, not from a template.",
        "faq.tag": "FAQ",
        "faq.title": "What people usually ask us",
        "q1.q": "What data can I start with?",
        "q1.a": "With aerial photos, images, spreadsheets or records you already have. If you do not have them yet, we define it together during the diagnosis.",
        "q2.q": "How much does it cost and how long does it take?",
        "q2.a": "It depends on the scope. After the diagnosis we send you a proposal with the price, deliverables and timeline.",
        "q3.q": "What do I receive at the end?",
        "q3.a": "Results you can use: maps, dashboards and reports with recommendations, as in the oil palm plantation case.",
        "q4.q": "Do you work outside Neiva?",
        "q4.a": "We are based in Neiva, Huila, Colombia. Tell us where your project is and we will assess how to serve it.",
        "s1.o": "Delivers: clear dashboards and reports",
        "s2.o": "Delivers: counts, detections and vigor maps",
        "s3.o": "Delivers: a working prototype",
        "s4.o": "Delivers: 2D/3D maps and vegetation indices",
        "s5.o": "Delivers: processes that run on their own",
        "s6.o": "Delivers: devices ready to work in the field",
        "ct.loc": "Neiva, Huila, Colombia",
        "foot.privacy": "Privacy policy",
        "ap.now": "Sector we serve today",
        "ab.f4": "Current sector: agribusiness",
        "fair.title": "At the Chamber of Commerce innovation fair",
        "fair.lead": "We presented our solutions live and achieved business approaches with clients, federations and key trade associations in the region.",
        "fair.c1": "Screen 1: infrared-spectrum camera for human behavior analysis, another of our solutions. Screen 2: the oil palm plantation success story, from drone images to the vigor map and priority zones.",
        "fair.c2": "At our booth during the fair.",
        "fair.a1": "Designious Corporation booth with two screens: human behavior analysis with an infrared camera and the oil palm success story, next to the case poster",
        "fair.a2": "Three people in front of the Designious Corporation booth at the fair",
        "case.pause": "Pause auto-advance",
        "case.play": "Resume auto-advance",
        "foot.linkedin": "Follow us on LinkedIn",
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
    if (!Object.prototype.hasOwnProperty.call(T, next)) next = "es";
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

  /* ----- Estilo (blanco / negro) ----- */
  var THEME_COLOR = { black: "#030408", white: "#ffffff" };
  var theme = "white";
  function setTheme(next) {
    if (!Object.prototype.hasOwnProperty.call(THEME_COLOR, next)) next = "white";
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

  /* ----- Caso de éxito: las etapas cambian solas mientras se ven en pantalla ----- */
  (function () {
    var box = doc.querySelector(".steps"), btn = doc.querySelector(".steps__toggle");
    if (!box || !tabs.length || !("IntersectionObserver" in window)) return;
    var EVERY = 2500, timer = null, visible = false, stopped = false;
    box.style.setProperty("--auto", EVERY + "ms");

    function current() {
      for (var i = 0; i < tabs.length; i++) if (tabs[i].classList.contains("is-active")) return i;
      return 0;
    }
    function label() {
      if (!btn) return;
      var key = stopped ? "case.play" : "case.pause";
      btn.setAttribute("data-i18n", key);
      btn.setAttribute("aria-pressed", String(stopped));
      btn.textContent = T[lang].i18n[key];
    }
    function update() {
      clearInterval(timer);
      box.classList.remove("is-auto");
      label();
      if (!visible || stopped || doc.hidden) return;
      void box.offsetWidth;                      // reinicia la barra de avance
      box.classList.add("is-auto");
      timer = setInterval(function () {
        showStep(tabs[(current() + 1) % tabs.length].getAttribute("data-step"));
      }, EVERY);
    }
    // Si la persona elige una etapa, deja de cambiar sola; el botón permite reanudar
    function stop() { stopped = true; update(); }

    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; update(); }, { threshold: 0.2 }).observe(box);
    box.addEventListener("click", function (e) { if (e.target.closest && e.target.closest(".step")) stop(); });
    box.addEventListener("keydown", function (e) { if (e.target.closest && e.target.closest(".step")) stop(); });
    if (btn) btn.addEventListener("click", function () { stopped = !stopped; update(); });
    doc.addEventListener("visibilitychange", update);
  })();

  /* ----- Equipo: si falta la foto de una persona, quedan sus iniciales ----- */
  var PHOTO_EXT = ["jpg", "png", "jpeg", "webp"];   // acepta la foto en cualquiera de estos formatos
  doc.querySelectorAll(".member__photo img").forEach(function (img) {
    var base = img.getAttribute("src").replace(/\.[a-z]+$/i, ""), i = 0;
    function next() {
      i += 1;
      if (i < PHOTO_EXT.length) img.src = base + "." + PHOTO_EXT[i]; else img.remove();
    }
    img.addEventListener("error", next);
    if (img.complete && img.naturalWidth === 0) next();
  });

  /* ----- Inicio ----- */
  setTheme("white");   // la página siempre abre en blanco
  var saved = store("dz-lang");
  var nav = (navigator.language || "es").toLowerCase();
  setLang(saved || (nav.indexOf("en") === 0 ? "en" : "es"));
  countUp();
})();
