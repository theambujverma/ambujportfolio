// =========================================================
// Ambuj Verma — Portfolio scripts
// =========================================================
document.addEventListener("DOMContentLoaded", () => {

  /* Sticky header shadow on scroll */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile nav toggle */
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      toggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
      toggle.setAttribute("aria-expanded", isOpen);
    });
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  /* Highlight active nav link */
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  /* Scroll reveal */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 6, 6) * 70}ms`;
      io.observe(el);
    });
  } else {
    revealEls.forEach(el => el.classList.add("in-view"));
  }

  /* Footer year */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
