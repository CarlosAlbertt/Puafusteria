// Cursor personalizado
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
});

(function animCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cur.style.left = mx + 'px';
    cur.style.top = my + 'px';
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button, .service-card, .producto-card, .pillar, .mat-row, .sustain-card')
    .forEach(el => {
        el.addEventListener('mouseenter', () =>
            document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () =>
            document.body.classList.remove('hovering'));
    });
// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 90);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-l').forEach(el => observer.observe(el));
