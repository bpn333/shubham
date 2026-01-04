// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Theme toggle (light/dark simple)
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
let light = false;
if (localStorage.getItem('light-theme') === '1') { light = true; root.style.setProperty('--bg', '#f6f9fb'); root.style.setProperty('--text', '#071127'); }
themeToggle?.addEventListener('click', () => {
    light = !light;
    if (light) {
        root.style.setProperty('--bg', '#f6f9fb');
        root.style.setProperty('--text', '#071127');
        localStorage.setItem('light-theme', '1');
    } else {
        root.style.removeProperty('--bg');
        root.style.setProperty('--text', '#e6eef6');
        localStorage.removeItem('light-theme');
    }
});

// Contact form (mock)
const form = document.getElementById('contact-form');
const result = document.getElementById('form-result');
form?.addEventListener('submit', e => {
    e.preventDefault();
    const fdata = new FormData(form);
    result.textContent = `Thanks, ${fdata.get('name')} — message received.`;
    form.reset();
});

// Current year
document.getElementById('year').textContent = new Date().getFullYear();