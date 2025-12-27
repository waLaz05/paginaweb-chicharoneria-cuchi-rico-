/* Mobile Menu Toggle */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

/* Scroll Spy & Header Shadow */
const sections = document.querySelectorAll('section[id]');
const header = document.querySelector('.navbar');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const searchLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (searchLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                searchLink.classList.add('active');
            } else {
                searchLink.classList.remove('active');
            }
        }
    });

    // Header shadow on scroll
    if (scrollY > 50) {
        header.style.boxShadow = "var(--shadow-md)";
    } else {
        header.style.boxShadow = "var(--shadow-sm)";
    }
}

window.addEventListener('scroll', scrollActive);

/* Reveal Animations on Scroll (Simple version) */
/* Reveal Animations on Scroll */
const revealElements = document.querySelectorAll(
    '.feature-card, .menu-item, .gallery-item, .review-card, .delivery-container, .section-header'
);

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            // Simple stagger effect based on position in list
            // For grids, we want a small delay between items
            // We can approximate this by checking if it's already visible or just add a fixed small delay
            setTimeout(() => {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}

// Initial style for reveal
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.5, 0, 0, 1)';
});

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal); // Also check on map load etc
