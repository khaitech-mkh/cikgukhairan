// cikgukhairan.my — interaksi ringkas: nav mobile, reveal, type-in hero, tahun footer
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Tahun footer ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Nav mobile toggle ----
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Tutup menu bila link diklik
    nav.querySelectorAll(".nav__link, .nav__cta .btn").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Reveal on scroll ----
  var revealEls = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // ---- Brand type-in (gaya terminal) — taip huruf demi huruf ----
  var brandEl = document.querySelector(".nav__brand-type");
  if (brandEl) {
    var brandText = brandEl.getAttribute("data-type") || brandEl.textContent;
    if (reduce) {
      brandEl.textContent = brandText;
    } else {
      brandEl.textContent = "";
      var bi = 0;
      (function typeBrand() {
        if (bi <= brandText.length) {
          brandEl.textContent = brandText.slice(0, bi);
          bi++;
          setTimeout(typeBrand, 90);
        }
      })();
    }
  }

  // ---- Kursor spotlight — cahaya ikut tetikus di hero ----
  var hero = document.querySelector(".hero");
  var spot = document.querySelector(".hero__spot");
  if (hero && spot && !reduce) {
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      spot.style.setProperty("--mx", (e.clientX - r.left) + "px");
      spot.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  }

  // ---- Terminal hidup — log berkitar, menaip huruf demi huruf ----
  var termEl = document.getElementById("term-log");
  if (termEl) {
    var lines;
    try { lines = JSON.parse(termEl.getAttribute("data-lines")); }
    catch (err) { lines = []; }

    if (reduce || !lines.length) {
      termEl.textContent = lines.length ? lines[0] : "";
    } else {
      var li = 0;
      function typeLine() {
        var text = lines[li];
        var ci = 0;
        (function typeChar() {
          if (ci <= text.length) {
            termEl.textContent = text.slice(0, ci);
            ci++;
            setTimeout(typeChar, 34);
          } else {
            // tahan sekejap, kemudian padam & baris seterusnya
            setTimeout(function () {
              li = (li + 1) % lines.length;
              typeLine();
            }, 1800);
          }
        })();
      }
      typeLine();
    }
  }

  // ---- Type-in sekali untuk satu baris hero (pilihan) ----
  var typeEl = document.querySelector("[data-typein]");
  if (typeEl && !reduce) {
    var full = typeEl.getAttribute("data-typein");
    typeEl.textContent = "";
    var i = 0;
    (function tick() {
      if (i <= full.length) {
        typeEl.textContent = full.slice(0, i);
        i++;
        setTimeout(tick, 28);
      }
    })();
  } else if (typeEl) {
    typeEl.textContent = typeEl.getAttribute("data-typein");
  }
})();
