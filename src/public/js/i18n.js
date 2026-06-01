// ── i18n.js — Gestor de idiomas ES / VAL ─────────────────────
const TRANSLATIONS = {
    es: {
        // NAV
        "nav.nosotros": "Nosotros",
        "nav.servicios": "Servicios",
        "nav.galeria": "Galería",
        "nav.presupuesto": "Presupuesto",

        // HERO
        "hero.tag": "Benlloc, Castellón · Desde 2019",
        "hero.title1": "Fustería",
        "hero.title2": "artesanal",
        "hero.title3": "sostenible",
        "hero.desc": "Diseño, fabricación y restauración de mobiliario único con materiales reciclados y sostenibles. Cada pieza, una historia propia.",
        "hero.cta": "Pedir presupuesto",
        "hero.catalog": "Ver catálogo ↓",
        "hero.stat1": "Años de experiencia",
        "hero.stat2": "Material sostenible",
        "hero.ringtag": "Anillos de la madera · Materiales naturales",

        // ABOUT
        "about.eyebrow": "Sobre Pua Fusteria",
        "about.title": "Muebles con",
        "about.title.em": "alma propia",
        "about.body": "Pua Fusteria nace de una pasión por la carpintería iniciada en 2019. Desde nuestro taller en Benlloc, creamos mobiliario artesanal con materiales reciclados: palets, restos de poda y madera recuperada de derribos.",
        "about.p1.title": "Artesanía con identidad propia",
        "about.p1.sub": "Cada pieza, única e irrepetible",
        "about.p2.title": "Diseño colaborativo con el cliente",
        "about.p2.sub": "Tu idea, nuestra ejecución artesanal",
        "about.p3.title": "Compromiso medioambiental real",
        "about.p3.sub": "Alineados con los ODS",

        // PROCESS
        "process.eyebrow": "Cómo trabajamos",
        "process.title": "El proceso",
        "step1.name": "Consulta",
        "step1.desc": "Nos cuentas tu idea o el mueble que quieres recuperar. Sin compromiso.",
        "step2.name": "Diseño",
        "step2.desc": "Exploramos juntos materiales, estilos y medidas hasta dar con la pieza perfecta.",
        "step3.name": "Fabricación",
        "step3.desc": "Trabajamos con materiales reciclados y técnicas artesanales. Con tiempo y detalle.",
        "step4.name": "Entrega",
        "step4.desc": "Tu pieza lista e instalada. Única, sostenible y hecha para durar toda la vida.",

        // SERVICES
        "services.eyebrow": "Lo que hacemos",
        "services.title": "Servicios",
        "svc1.name": "Restauración",
        "svc1.desc": "Recuperamos piezas con valor histórico o sentimental. Cada restauración respeta la esencia original de la madera.",
        "svc1.i1": "Muebles antiguos y de familia",
        "svc1.i2": "Técnicas artesanales y sostenibles",
        "svc1.i3": "Barnices ecológicos al agua",
        "svc2.name": "Fabricación a medida",
        "svc2.desc": "Desde el diseño hasta la colocación final. Muebles nuevos adaptados completamente a tu espacio y estilo de vida.",
        "svc2.i1": "Diseño colaborativo",
        "svc2.i2": "Fabricación completa en taller",
        "svc2.i3": "Instalación incluida",
        "svc3.name": "Catálogo base",
        "svc3.desc": "Colección de piezas exclusivas disponibles. Cada una adaptable en medidas, materiales y acabados según tu gusto.",
        "svc3.i1": "Piezas en stock disponibles",
        "svc3.i2": "Totalmente personalizables",
        "svc3.i3": "Venta online y en redes",

        // PRODUCTS
        "products.eyebrow": "Catálogo",
        "products.title": "Productos estrella",
        "prd1.name": "Marcos decorativos",
        "prd1.mat": "Madera de palet",
        "prd1.tag": "A medida",
        "prd2.name": "Mesas de comedor",
        "prd2.mat": "Palet · Madera de poda",
        "prd2.tag": "A medida",
        "prd3.name": "Lámparas",
        "prd3.mat": "Ramas de olivo y viña",
        "prd3.tag": "Exclusivas",
        "prd4.name": "Bibliotecas infantiles",
        "prd4.mat": "Listones de palet",
        "prd4.tag": "A medida",
        "prd5.name": "Tablas de corte",
        "prd5.mat": "Madera de olivo",
        "prd5.tag": "Decorativas",
        "prd6.name": "Mesitas de noche",
        "prd6.mat": "Palet · Pino certificado",
        "prd6.tag": "A medida",
        "prd7.name": "Rótulos",
        "prd7.mat": "Pino · Madera reciclada",
        "prd7.tag": "Personalizados",
        "prd8.name": "Decoración personalizada",
        "prd8.mat": "Nombres · Iniciales · Regalos",
        "prd8.tag": "Único",

        // MATERIALS
        "mat.eyebrow": "Nuestros materiales",
        "mat.title": "La madera",
        "mat.title2": "tiene ",
        "mat.title.em": "historia",
        "mat.body": "Trabajamos exclusivamente con maderas sostenibles y recicladas. Cada material tiene su propio carácter y aporta autenticidad a cada pieza.",
        "mat.1": "Madera de palet",
        "mat.1.tag": "Reciclada",
        "mat.2": "Ramas de olivo y viña",
        "mat.2.tag": "Poda local",
        "mat.3": "Madera de almendro",
        "mat.3.tag": "Poda local",
        "mat.4": "Madera de derribo",
        "mat.4.tag": "Recuperada",
        "mat.5": "Pino certificado FSC",
        "mat.5.tag": "Sostenible",

        // SUSTAINABILITY
        "sus.eyebrow": "Compromiso",
        "sus.title": "Fustería con",
        "sus.title.em": "conciencia",
        "sus1.title": "Materiales reciclados",
        "sus1.text": "Palets, restos de poda y madera de derribos como materia prima. Cero compra de madera nueva cuando es posible.",
        "sus2.title": "Cero residuos",
        "sus2.text": "Los restos de madera se usan como energía térmica. El serrín se emplea como abono natural en huertos del entorno.",
        "sus3.title": "Barnices ecológicos",
        "sus3.text": "Exclusivamente barnices al agua y materiales de bajo impacto ambiental. Sin productos tóxicos, seguros para el hogar.",
        "sus4.title": "Innovación constante",
        "sus4.text": "Resina epoxi, integración de LEDs y nuevas técnicas de ensamblaje sostenible. Mejora y aprendizaje continuo.",
        "ods.label": "Objetivos de Desarrollo Sostenible",
        "ods.text": "Pua Fusteria trabaja alineada con los ODS de Naciones Unidas: consumo responsable, producción sostenible y acción por el clima. Cada pieza es un acto de compromiso con el planeta.",

        // GALLERY
        "gallery.eyebrow": "Nuestro trabajo",
        "gallery.title": "Galería",
        "gallery.link": "Ver todos los trabajos →",

        // CONTACT
        "contact.eyebrow": "Hablemos",
        "contact.title": "¿Tienes una",
        "contact.title.em": "idea en mente?",
        "contact.body": "Cuéntanos lo que necesitas por WhatsApp y te respondemos lo antes posible. Sin formularios, sin esperas. Trato directo y cercano.",
        "contact.taller": "Taller",
        "contact.wa": "WhatsApp",
        "contact.email": "Email",
        "contact.ig": "Instagram",
        "contact.btn.wa": "Escríbenos por WhatsApp",
        "contact.btn.ig": "Síguenos en Instagram",
        "wa.tooltip": "¿Hablamos?",

        // MARQUEE
        "marquee.1": "Piezas Únicas Artesanas",
        "marquee.2": "Madera Reciclada",
        "marquee.3": "Diseño Personalizado",
        "marquee.4": "Fabricación Artesanal",
        "marquee.5": "Compromiso Ecológico",

        // MATERIAL BLOCKS
        "matblock.1": "Palet reciclado",
        "matblock.2": "Madera de poda",
        "matblock.3": "Madera de derribo",
        "matblock.4": "Pino certificado",

        // GALLERY LABELS
        "glbl.1": "Interiorismo restaurante",
        "glbl.2": "Mesa de comedor",
        "glbl.3": "Marco de fotos",
        "glbl.4": "Estantería LED",
        "glbl.5": "Rótulo personalizado",

        // FOOTER
        "footer.rights": "Todos los derechos reservados",
        "footer.tagline": "Piezas Únicas Artesanas",
    },

    val: {
        // NAV
        "nav.nosotros": "Nosaltres",
        "nav.servicios": "Serveis",
        "nav.galeria": "Galeria",
        "nav.presupuesto": "Pressupost",

        // HERO
        "hero.tag": "Benlloc, Castelló · Des de 2019",
        "hero.title1": "Fusteria",
        "hero.title2": "artesanal",
        "hero.title3": "sostenible",
        "hero.desc": "Disseny, fabricació i restauració de mobiliari únic amb materials reciclats i sostenibles. Cada peça, una història pròpia.",
        "hero.cta": "Demanar pressupost",
        "hero.catalog": "Veure catàleg ↓",
        "hero.stat1": "Anys d'experiència",
        "hero.stat2": "Material sostenible",
        "hero.ringtag": "Anells de la fusta · Materials naturals",

        // ABOUT
        "about.eyebrow": "Sobre Pua Fusteria",
        "about.title": "Mobles amb",
        "about.title.em": "ànima pròpia",
        "about.body": "Pua Fusteria naix d'una passió per la fusteria iniciada el 2019. Des del nostre taller a Benlloc, creem mobiliari artesanal amb materials reciclats: palets, restes de poda i fusta recuperada de derrocs.",
        "about.p1.title": "Artesania amb identitat pròpia",
        "about.p1.sub": "Cada peça, única i irrepetible",
        "about.p2.title": "Disseny col·laboratiu amb el client",
        "about.p2.sub": "La teua idea, la nostra execució artesanal",
        "about.p3.title": "Compromís mediambiental real",
        "about.p3.sub": "Alineats amb els ODS",

        // PROCESS
        "process.eyebrow": "Com treballem",
        "process.title": "El procés",
        "step1.name": "Consulta",
        "step1.desc": "Ens expliques la teua idea o el moble que vols recuperar. Sense compromís.",
        "step2.name": "Disseny",
        "step2.desc": "Explorem junts materials, estils i mides fins a trobar la peça perfecta.",
        "step3.name": "Fabricació",
        "step3.desc": "Treballem amb materials reciclats i tècniques artesanals. Amb temps i detall.",
        "step4.name": "Lliurament",
        "step4.desc": "La teua peça llesta i instal·lada. Única, sostenible i feta per durar tota la vida.",

        // SERVICES
        "services.eyebrow": "El que fem",
        "services.title": "Serveis",
        "svc1.name": "Restauració",
        "svc1.desc": "Recuperem peces amb valor històric o sentimental. Cada restauració respecta l'essència original de la fusta.",
        "svc1.i1": "Mobles antics i de família",
        "svc1.i2": "Tècniques artesanals i sostenibles",
        "svc1.i3": "Vernissos ecològics a l'aigua",
        "svc2.name": "Fabricació a mida",
        "svc2.desc": "Des del disseny fins a la col·locació final. Mobles nous adaptats completament al teu espai i estil de vida.",
        "svc2.i1": "Disseny col·laboratiu",
        "svc2.i2": "Fabricació completa al taller",
        "svc2.i3": "Instal·lació inclosa",
        "svc3.name": "Catàleg base",
        "svc3.desc": "Col·lecció de peces exclusives disponibles. Cada una adaptable en mides, materials i acabats segons el teu gust.",
        "svc3.i1": "Peces en estoc disponibles",
        "svc3.i2": "Totalment personalitzables",
        "svc3.i3": "Venda online i a xarxes",

        // PRODUCTS
        "products.eyebrow": "Catàleg",
        "products.title": "Productes estrela",
        "prd1.name": "Marcs decoratius",
        "prd1.mat": "Fusta de palet",
        "prd1.tag": "A mida",
        "prd2.name": "Taules de menjador",
        "prd2.mat": "Palet · Fusta de poda",
        "prd2.tag": "A mida",
        "prd3.name": "Llums",
        "prd3.mat": "Branques d'oliu i vinya",
        "prd3.tag": "Exclusives",
        "prd4.name": "Biblioteques infantils",
        "prd4.mat": "Llistons de palet",
        "prd4.tag": "A mida",
        "prd5.name": "Tauletes de tall",
        "prd5.mat": "Fusta d'oliu",
        "prd5.tag": "Decoratives",
        "prd6.name": "Tauletes de nit",
        "prd6.mat": "Palet · Pi certificat",
        "prd6.tag": "A mida",
        "prd7.name": "Rètols",
        "prd7.mat": "Pi · Fusta reciclada",
        "prd7.tag": "Personalitzats",
        "prd8.name": "Decoració personalitzada",
        "prd8.mat": "Noms · Inicials · Regals",
        "prd8.tag": "Únic",

        // MATERIALS
        "mat.eyebrow": "Els nostres materials",
        "mat.title": "La fusta",
        "mat.title2": "té ",
        "mat.title.em": "història",
        "mat.body": "Treballem exclusivament amb fustes sostenibles i reciclades. Cada material té el seu propi caràcter i aporta autenticitat a cada peça.",
        "mat.1": "Fusta de palet",
        "mat.1.tag": "Reciclada",
        "mat.2": "Branques d'oliu i vinya",
        "mat.2.tag": "Poda local",
        "mat.3": "Fusta d'ametler",
        "mat.3.tag": "Poda local",
        "mat.4": "Fusta de derroc",
        "mat.4.tag": "Recuperada",
        "mat.5": "Pi certificat FSC",
        "mat.5.tag": "Sostenible",

        // SUSTAINABILITY
        "sus.eyebrow": "Compromís",
        "sus.title": "Fusteria amb",
        "sus.title.em": "consciència",
        "sus1.title": "Materials reciclats",
        "sus1.text": "Palets, restes de poda i fusta de derrocs com a matèria primera. Zero compra de fusta nova quan és possible.",
        "sus2.title": "Zero residus",
        "sus2.text": "Les restes de fusta s'usen com a energia tèrmica. El serradís s'empra com a adob natural en horts de l'entorn.",
        "sus3.title": "Vernissos ecològics",
        "sus3.text": "Exclusivament vernissos a l'aigua i materials de baix impacte ambiental. Sense productes tòxics, segurs per a la llar.",
        "sus4.title": "Innovació constant",
        "sus4.text": "Resina epoxi, integració de LEDs i noves tècniques d'assemblatge sostenible. Millora i aprenentatge continu.",
        "ods.label": "Objectius de Desenvolupament Sostenible",
        "ods.text": "Pua Fusteria treballa alineada amb els ODS de Nacions Unides: consum responsable, producció sostenible i acció pel clima. Cada peça és un acte de compromís amb el planeta.",

        // GALLERY
        "gallery.eyebrow": "El nostre treball",
        "gallery.title": "Galeria",
        "gallery.link": "Veure tots els treballs →",

        // CONTACT
        "contact.eyebrow": "Parlem",
        "contact.title": "Tens una",
        "contact.title.em": "idea en ment?",
        "contact.body": "Explica'ns el que necessites per WhatsApp i et responem al més aviat possible. Sense formularis, sense esperes. Tracte directe i proper.",
        "contact.taller": "Taller",
        "contact.wa": "WhatsApp",
        "contact.email": "Correu",
        "contact.ig": "Instagram",
        "contact.btn.wa": "Escriu-nos per WhatsApp",
        "contact.btn.ig": "Segueix-nos a Instagram",
        "wa.tooltip": "Parlem?",

        // MARQUEE
        "marquee.1": "Peces Úniques Artesanes",
        "marquee.2": "Fusta Reciclada",
        "marquee.3": "Disseny Personalitzat",
        "marquee.4": "Fabricació Artesanal",
        "marquee.5": "Compromís Ecològic",

        // MATERIAL BLOCKS
        "matblock.1": "Palet reciclat",
        "matblock.2": "Fusta de poda",
        "matblock.3": "Fusta de derroc",
        "matblock.4": "Pi certificat",

        // GALLERY LABELS
        "glbl.1": "Interiorisme restaurant",
        "glbl.2": "Taula de menjador",
        "glbl.3": "Marc de fotos",
        "glbl.4": "Prestatgeria LED",
        "glbl.5": "Rètol personalitzat",

        // FOOTER
        "footer.rights": "Tots els drets reservats",
        "footer.tagline": "Peces Úniques Artesanes",
    }
};

// ── Aplicar idioma ────────────────────────────────────────────
function applyLang(lang) {
    const t = TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // Actualizar botones activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Guardar preferencia
    localStorage.setItem('pua-lang', lang);

    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang === 'val' ? 'ca' : 'es';
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('pua-lang') || 'val';
    applyLang(saved);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
});