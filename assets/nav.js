(function () {
  "use strict";

  var input = document.getElementById("nav-search");
  var nav = document.getElementById("site-nav");
  var empty = document.getElementById("nav-empty");
  var toggle = document.querySelector(".menu-toggle");
  var backdrop = document.querySelector(".backdrop");

  function setOpen(open) {
    document.body.classList.toggle("nav-open", open);
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setOpen(!document.body.classList.contains("nav-open"));
    });
  }
  if (backdrop) {
    backdrop.addEventListener("click", function () { setOpen(false); });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  if (nav) {
    nav.addEventListener("click", function (e) {
      var a = e.target.closest("a");
      if (a && window.matchMedia("(max-width: 860px)").matches) setOpen(false);
    });
  }

  if (!input || !nav) return;

  var items = Array.prototype.slice.call(nav.querySelectorAll(".nav-item"));
  var groups = Array.prototype.slice.call(nav.querySelectorAll(".nav-group"));

  function filter() {
    var q = (input.value || "").trim().toLowerCase();
    var shown = 0;
    items.forEach(function (li) {
      var hay = (li.getAttribute("data-q") || li.textContent || "").toLowerCase();
      var hit = !q || hay.indexOf(q) !== -1;
      li.hidden = !hit;
      if (hit) shown += 1;
    });
    groups.forEach(function (g) {
      var vis = g.querySelectorAll(".nav-item:not([hidden])").length;
      g.hidden = q !== "" && vis === 0;
    });
    if (empty) empty.style.display = q && shown === 0 ? "block" : "none";
  }

  input.addEventListener("input", filter);
  input.addEventListener("search", filter);
})();
