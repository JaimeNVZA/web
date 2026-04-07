/* ============================================================
   main.js — Portfolio Jaime Núñez Viedma
   ============================================================ */

// ===== TYPING ANIMATION =====
const roles = [
    'Desarrollador Backend',
    'Python · Odoo · REST APIs',
    'Automatización de Procesos',
    'Desarrollador de Software',
];

let roleIdx = 0;
let charIdx = 0;
let deleting = false;
const typedEl = document.getElementById('typedText');

function type() {
    if (!typedEl) return;
    const current = roles[roleIdx];

    if (deleting) {
        typedEl.textContent = current.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typedEl.textContent = current.substring(0, charIdx + 1);
        charIdx++;
    }

    let delay = deleting ? 45 : 95;

    if (!deleting && charIdx === current.length) {
        delay = 2200;
        deleting = true;
    } else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        delay = 400;
    }

    setTimeout(type, delay);
}

// ===== SCROLL REVEAL =====
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger delay for sibling cards
                const siblings = Array.from(entry.target.parentElement?.children || []);
                const idx = siblings.indexOf(entry.target);
                const delay = entry.target.classList.contains('project-card') ||
                              entry.target.classList.contains('contact-card') ||
                              entry.target.classList.contains('skill-category')
                    ? Math.min(idx * 80, 400)
                    : 0;

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .skill-category, .project-card, .contact-card, .timeline-item, .section-container').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const links  = document.getElementById('navLinks');

    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // Mobile toggle
    toggle?.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
    });

    // Close on nav link click
    links?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => links.classList.remove('open'));
    });

    // Active section highlight
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(sec => {
            if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
                navAnchors.forEach(a => a.classList.remove('active'));
                const active = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
                active?.classList.add('active');
            }
        });
    }, { passive: true });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    type();
    initReveal();
    initNavbar();
});
