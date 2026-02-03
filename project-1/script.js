document.getElementById("year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("primary-nav"); 
if (toggle && nav) { 
    toggle.addEventListener("click", () => { 
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
    });
}

const header = document.querySelector(".site-header"); 
const addShadow = () => { 
    if (window.scrollY > 12) header.classList.add("header-shadow");
    else header.classList.remove("header-shadow");
};

addShadow(); 
window.addEventListener("scroll", addShadow, {passive: true }); 

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
        const id = a.getAttribute("href"); 
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
});

function handleForm(form) { 
    const msg = form.querySelector(".form-msg");
    form.addEventListener("submit", e => {
        e.preventDefault();
const valid = [...form.elements].every(el => !el.required || el.value.trim() !== "");
if (valid) {
            msg.textContent = "Thanks. We will reach out soon.";
            msg.style.color = getComputedStyle(document.documentElement).getPropertyValue("--success");
            form.reset();
        } else { 
            msg.textContent = "Please fill in all required fields.";
            msg.style.color = "#b00020";
        }
    }); 
}

document.querySelectorAll("form").forEach(form => handleForm(form));

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.scrollBehavior = "auto";
}

function setHeaderOffset() {
  const header = document.querySelector('.site-header');
  const h = header ? header.offsetHeight : 0;
  document.documentElement.style.setProperty('--header-h', (h + 12) + 'px');
}

setHeaderOffset();
window.addEventListener('resize', setHeaderOffset, { passive: true });

if ('ResizeObserver' in window) {
  const ro = new ResizeObserver(setHeaderOffset);
  const headerEl = document.querySelector('.site-header');
  if (headerEl) ro.observe(headerEl);
}
