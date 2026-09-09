// Enables the CSS reveal-on-scroll animation. Content stays visible by
// default in CSS so a JS failure never leaves it permanently hidden.
document.documentElement.classList.add("js-ready");

// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll progress bar + header "scrolled" state
const progressBar = document.getElementById("scrollProgress");
const header = document.querySelector(".site-header");

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
  header.classList.toggle("scrolled", scrollTop > 8);
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

// Scrollspy: highlight the nav link for the section currently in view
const spySections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a[href^='#']");

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

spySections.forEach((section) => spyObserver.observe(section));

// Reveal-on-scroll for sections/cards, staggered within card grids
const revealEls = document.querySelectorAll(".reveal");

revealEls.forEach((el) => {
  const group = el.closest(".card-grid");
  if (group) {
    const indexInGroup = Array.from(group.children).indexOf(el);
    el.style.transitionDelay = `${indexInGroup * 80}ms`;
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));

// Safety net: if the observer ever fails to fire for an element
// (unusual viewport/rendering edge cases), don't leave content hidden.
setTimeout(() => {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
    el.classList.add("is-visible");
  });
}, 2500);

// Services showcase: tabs + auto-cycling "live" step indicator
const tabButtons = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tabpanel");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let stepInterval;

function startStepper(panelId) {
  clearInterval(stepInterval);
  const panel = document.getElementById(panelId);
  if (!panel) return;
  const steps = panel.querySelectorAll(".step");
  if (!steps.length) return;

  let current = 0;
  steps.forEach((step, i) => step.classList.toggle("active", i === 0));

  if (prefersReducedMotion) return;

  stepInterval = setInterval(() => {
    steps[current].classList.remove("active");
    current = (current + 1) % steps.length;
    steps[current].classList.add("active");
  }, 2000);
}

function activateTab(tab) {
  tabButtons.forEach((btn) => {
    const isActive = btn === tab;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
    btn.tabIndex = isActive ? 0 : -1;
  });

  tabPanels.forEach((panel) => {
    panel.hidden = panel.id !== tab.getAttribute("aria-controls");
  });

  startStepper(tab.getAttribute("aria-controls"));
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => activateTab(btn));
});

if (tabPanels.length) startStepper(tabPanels[0].id);

// Hero cursor spotlight (only for mouse/trackpad users)
const hero = document.querySelector(".hero");

if (hero && window.matchMedia("(pointer: fine)").matches) {
  hero.addEventListener("mousemove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty("--mx", `${x}%`);
    hero.style.setProperty("--my", `${y}%`);
  });
}

// Contact form -> Web3Forms (kein eigenes Backend nötig)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const formStatusMessages = {
  sending: {
    de: "Nachricht wird gesendet …",
    en: "Sending message …",
    tr: "Mesaj gönderiliyor …",
  },
  success: {
    de: "Danke! Ihre Nachricht wurde erfolgreich versendet.",
    en: "Thank you! Your message has been sent successfully.",
    tr: "Teşekkürler! Mesajınız başarıyla gönderildi.",
  },
  error: {
    de: "Da ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt eine E-Mail.",
    en: "Something went wrong. Please try again or email us directly.",
    tr: "Bir şeyler ters gitti. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.",
  },
};

function setFormStatus(state) {
  const lang = document.documentElement.lang || "de";
  formStatus.textContent = formStatusMessages[state][lang] || formStatusMessages[state].de;
  delete formStatus.dataset.i18n;
}

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = contactForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  setFormStatus("sending");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(contactForm),
    });
    const result = await response.json();

    if (result.success) {
      setFormStatus("success");
      contactForm.reset();
    } else {
      setFormStatus("error");
    }
  } catch (error) {
    setFormStatus("error");
  } finally {
    submitButton.disabled = false;
  }
});
