/* ==========================================================================
   BETTY · TEJIDOS EN TELAR
   Único archivo de JavaScript.

   QUÉ HACE ESTE ARCHIVO
   1. Abre y cierra el menú en celular
   2. Abre y cierra los paneles de "Preguntas frecuentes"
   3. Marca el header cuando bajás en la página
   4. Escribe el año actual en el footer

   No hay código dentro del HTML: todo el comportamiento vive acá.
   ========================================================================== */

(function () {
  "use strict";


  /* ------------------------------------------------------------------------
     1. MENÚ MÓVIL
     ------------------------------------------------------------------------ */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("navMenu");

  if (burger && nav) {

    const setMenu = function (open) {
      nav.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    };

    burger.addEventListener("click", function () {
      const isOpen = burger.getAttribute("aria-expanded") === "true";
      setMenu(!isOpen);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  }


  /* ------------------------------------------------------------------------
     2. ACORDEÓN DE "PREGUNTAS FRECUENTES"
     Al abrir un panel se cierran los demás.
     ------------------------------------------------------------------------ */
  const accordion = document.getElementById("accordion");

  if (accordion) {
    const heads = accordion.querySelectorAll(".acc__head");

    const openPanel = function (head) {
      const panel = document.getElementById(head.dataset.acc);
      if (!panel) return;
      head.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = panel.scrollHeight + "px";
    };

    const closePanel = function (head) {
      const panel = document.getElementById(head.dataset.acc);
      if (!panel) return;
      head.setAttribute("aria-expanded", "false");
      panel.style.maxHeight = "0px";
    };

    heads.forEach(function (head) {
      head.addEventListener("click", function () {
        const wasOpen = head.getAttribute("aria-expanded") === "true";
        heads.forEach(closePanel);
        if (!wasOpen) openPanel(head);
      });
    });

    heads.forEach(function (head) {
      if (head.getAttribute("aria-expanded") === "true") openPanel(head);
    });

    window.addEventListener("resize", function () {
      heads.forEach(function (head) {
        if (head.getAttribute("aria-expanded") === "true") openPanel(head);
      });
    });
  }


  /* ------------------------------------------------------------------------
     3. SOMBRA DEL HEADER AL BAJAR
     ------------------------------------------------------------------------ */
  const header = document.getElementById("siteHeader");

  if (header) {
    const onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }


  /* ------------------------------------------------------------------------
     4. AÑO EN EL FOOTER
     ------------------------------------------------------------------------ */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

})();
