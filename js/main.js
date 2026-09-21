/* ==========================================================
   main.js — Comportamiento del portafolio
   1. Tema claro/oscuro (localStorage)
   2. Menú responsive
   3. Filtro de proyectos
   4. Modal de proyecto
   5. Validación del formulario
   6. Navegación activa según scroll
   7. Botón volver arriba
   8. Valores de color en el Design System
   ========================================================== */
(function () {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  /* ---------- Utilidad: localStorage seguro ---------- */
  const storage = {
    get(key) {
      try { return localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); } catch { /* modo privado */ }
    },
  };

  /* ---------- 1. Tema claro/oscuro ---------- */
  const themeToggle = $("#theme-toggle");
  const themeIcon = $("#theme-icon");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Activar tema claro" : "Activar tema oscuro");
    themeIcon.textContent = isDark ? "☀" : "☾";
    renderColorValues();
  }

  const savedTheme = storage.get("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    storage.set("theme", next);
  });

  /* ---------- 2. Menú responsive ---------- */
  const menuToggle = $("#menu-toggle");
  const menu = $("#menu");

  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }

  menuToggle.addEventListener("click", () => {
    setMenu(!menu.classList.contains("is-open"));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  /* ---------- 3. Filtro de proyectos ---------- */
  const filterButtons = $$(".chip[data-filter]");
  const projectCards = $$("#projects-grid .card");
  const filterStatus = $("#filter-status");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));

      let visible = 0;
      projectCards.forEach((card) => {
        const show = filter === "todos" || card.dataset.tech.split(" ").includes(filter);
        card.hidden = !show;
        if (show) visible += 1;
      });

      filterStatus.textContent = `Mostrando ${visible} ${visible === 1 ? "proyecto" : "proyectos"}`;
    });
  });

  /* ---------- 4. Modal de proyecto ---------- */
  const modal = $("#project-modal");
  const modalTitle = $("#modal-title");
  const modalProblem = $("#modal-problem");
  const modalFeatures = $("#modal-features");
  const modalTech = $("#modal-tech");
  let lastTrigger = null;

  function openModal(card, trigger) {
    lastTrigger = trigger;
    modalTitle.textContent = $(".card__title", card).textContent;
    modalProblem.textContent = card.dataset.problem;

    modalFeatures.replaceChildren(
      ...card.dataset.features.split("|").map((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
      })
    );

    modalTech.replaceChildren(
      ...$$(".badge-list .badge", card).map((badge) => {
        const li = document.createElement("li");
        li.className = "badge badge--primary";
        li.textContent = badge.textContent;
        return li;
      })
    );

    modal.showModal();
  }

  $$(".js-open-modal").forEach((button) => {
    button.addEventListener("click", () => openModal(button.closest(".card"), button));
  });

  $("#modal-close").addEventListener("click", () => modal.close());

  // Cerrar al hacer clic fuera del contenido
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });

  modal.addEventListener("close", () => {
    if (lastTrigger) lastTrigger.focus();
  });

  /* ---------- 5. Validación del formulario ---------- */
  const form = $("#contact-form");
  const formStatus = $("#form-status");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const rules = {
    nombre: (value) => (value.trim().length < 2 ? "Escribe tu nombre (mínimo 2 caracteres)." : ""),
    correo: (value) => {
      if (!value.trim()) return "Escribe tu correo electrónico.";
      return emailPattern.test(value.trim()) ? "" : "Revisa el formato, por ejemplo: nombre@correo.com.";
    },
    mensaje: (value) => (value.trim().length < 10 ? "Cuéntame un poco más (mínimo 10 caracteres)." : ""),
  };

  function validateField(field) {
    const message = rules[field.name](field.value);
    $(`#error-${field.name}`).textContent = message;
    field.setAttribute("aria-invalid", String(Boolean(message)));
    return !message;
  }

  $$("input, textarea", form).forEach((field) => {
    field.addEventListener("blur", () => validateField(field));
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") validateField(field);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.className = "form__status";

    const fields = $$("input, textarea", form);
    const results = fields.map(validateField);

    if (results.includes(false)) {
      fields[results.indexOf(false)].focus();
      formStatus.textContent = "Corrige los campos marcados.";
      formStatus.classList.add("is-error");
      return;
    }

    /* Este sitio es estático: aquí no se envía a ningún servidor.
       Para recibir mensajes reales conecta un servicio como Formspree
       (ver README.md). */
    form.reset();
    formStatus.textContent = "Mensaje validado. Gracias por escribir.";
    formStatus.classList.add("is-success");
  });

  /* ---------- 6. Navegación activa según scroll ---------- */
  const navLinks = $$(".nav__list .nav__link", $("#menu"));
  const sections = navLinks
    .map((link) => $(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            const active = link.getAttribute("href") === `#${entry.target.id}`;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
  }

  /* ---------- 7. Botón volver arriba ---------- */
  const toTop = $("#to-top");

  window.addEventListener(
    "scroll",
    () => { toTop.hidden = window.scrollY < 500; },
    { passive: true }
  );

  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
  });

  /* ---------- 8. Valores de color en el Design System ---------- */
  function renderColorValues() {
    const styles = getComputedStyle(document.documentElement);
    $$("[data-token]").forEach((el) => {
      el.textContent = `${el.dataset.token}: ${styles.getPropertyValue(el.dataset.token).trim()}`;
    });
  }

  /* ---------- Año del footer ---------- */
  $("#year").textContent = new Date().getFullYear();
})();
