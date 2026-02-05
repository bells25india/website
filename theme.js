// Theme Management
const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

function updateIcon(isDark) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (isDark) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Initial icon update
updateIcon(root.classList.contains('dark'));

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = root.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateIcon(isDark);
    });
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('hide');
    observer.observe(section);
});
