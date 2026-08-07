/* facundofranco.com — minimal progressive enhancement.
   Sole responsibility: the accessible mobile navigation toggle.
   The site is fully readable and navigable with JavaScript disabled. */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (!header || !toggle || !nav) {
    return;
  }

  function setOpen(open) {
    header.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    setOpen(!header.classList.contains("nav-open"));
  });

  // Close after choosing a destination.
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  // Close on Escape.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });

  // Reset state when the viewport grows back to desktop.
  var desktop = window.matchMedia("(min-width: 721px)");
  desktop.addEventListener("change", function (event) {
    if (event.matches) {
      setOpen(false);
    }
  });
})();
