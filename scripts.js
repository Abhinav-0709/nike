// GSAP Animations and Interactions for Nike Jordan Landing Page
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Logo Intro Animation
function playLogoIntro() {
    const loader = document.getElementById('loader');
    const swooshPath = document.querySelector('.swoosh-path');
    const loadingText = document.querySelector('.loading-text');

    const tl = gsap.timeline({
        onComplete: () => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: () => {
                    loader.style.display = 'none';
                    startPageAnimations();
                }
            });
        }
    });

    // Animate Nike swoosh drawing
    tl.to(swooshPath, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut'
    })
        .to(swooshPath, {
            fill: '#ffffff',
            stroke: 'none',
            duration: 0.3
        }, '-=0.3')
        .to(loadingText, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.2');
}

// Main Page Animations - Simple and Pleasant
function startPageAnimations() {
    // Performance tag fade in
    gsap.fromTo('.performance-tag',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Hero title - simple slide up effect
    gsap.fromTo('.title-word',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.2
        }
    );

    // Subtitle fade in
    gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power2.out' }
    );

    // Buttons slide up
    gsap.fromTo('.hero-buttons',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power2.out' }
    );

    // Performance stats
    gsap.fromTo('.performance-stats',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: 'power2.out' }
    );

    // Color drips animation
    animateColorDrips();
}

// Color drip animation
function animateColorDrips() {
    gsap.fromTo('.drip-1',
        { opacity: 0, y: -100 },
        { opacity: 0.7, y: 0, duration: 1.5, ease: 'bounce.out', delay: 1.5 }
    );

    gsap.fromTo('.drip-2',
        { opacity: 0, y: -100 },
        { opacity: 0.6, y: 0, duration: 1.5, ease: 'bounce.out', delay: 1.7 }
    );

    gsap.fromTo('.drip-3',
        { opacity: 0, y: -100 },
        { opacity: 0.7, y: 0, duration: 1.5, ease: 'bounce.out', delay: 1.9 }
    );

    gsap.fromTo('.drip-4',
        { opacity: 0, y: -100 },
        { opacity: 0.8, y: 0, duration: 1.5, ease: 'bounce.out', delay: 2.1 }
    );
}

// Scroll-triggered animations - Fixed visibility issues
ScrollTrigger.batch('.jordan-card', {
    onEnter: (elements) => {
        gsap.fromTo(elements,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                clearProps: 'all'
            }
        );
    },
    start: 'top 85%',
    once: true
});

ScrollTrigger.batch('.tech-item', {
    onEnter: (elements) => {
        gsap.fromTo(elements,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                clearProps: 'all'
            }
        );
    },
    start: 'top 85%',
    once: true
});

ScrollTrigger.batch('.performance-card', {
    onEnter: (elements) => {
        gsap.fromTo(elements,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                clearProps: 'all'
            }
        );
    },
    start: 'top 85%',
    once: true
});

ScrollTrigger.batch('.timeline-item', {
    onEnter: (elements) => {
        gsap.fromTo(elements,
            { opacity: 0, x: -40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                clearProps: 'all'
            }
        );
    },
    start: 'top 85%',
    once: true
});

// Section title animations - Simple fade and slide
ScrollTrigger.batch('.section-title', {
    onEnter: (elements) => {
        gsap.fromTo(elements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                clearProps: 'all'
            }
        );
    },
    start: 'top 90%',
    once: true
});

// Parallax effects - Subtle and smooth
gsap.to('.jordan-image', {
    y: -50,
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

gsap.to('.floating-elements .float-circle', {
    y: -100,
    rotation: 180,
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
    }
});

// Navbar scroll effect
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }

    lastScrollY = currentScrollY;
});

// Mobile Navigation
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        const bars = navToggle.querySelectorAll('.bar');
        if (navMenu.classList.contains('active')) {
            gsap.to(bars[0], { rotation: 45, y: 6, duration: 0.3 });
            gsap.to(bars[1], { opacity: 0, duration: 0.3 });
            gsap.to(bars[2], { rotation: -45, y: -6, duration: 0.3 });
        } else {
            gsap.to(bars[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(bars[1], { opacity: 1, duration: 0.3 });
            gsap.to(bars[2], { rotation: 0, y: 0, duration: 0.3 });
        }
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            gsap.to(bars, { rotation: 0, y: 0, opacity: 1, duration: 0.3 });
        });
    });
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Interactive button animations
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', function () {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', function () {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    button.addEventListener('click', function () {
        gsap.to(this, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut'
        });
    });
});

// Jordan card hover effects
document.querySelectorAll('.jordan-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        gsap.to(this, {
            y: -10,
            duration: 0.4,
            ease: 'power2.out'
        });

        const shoeImage = this.querySelector('.shoe-image');
        if (shoeImage) {
            gsap.to(shoeImage, {
                scale: 1.05,
                duration: 0.4,
                ease: 'power2.out'
            });
        }
    });

    card.addEventListener('mouseleave', function () {
        gsap.to(this, {
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
        });

        const shoeImage = this.querySelector('.shoe-image');
        if (shoeImage) {
            gsap.to(shoeImage, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        }
    });
});

// Performance card interactions
document.querySelectorAll('.performance-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        gsap.to(this, {
            y: -5,
            duration: 0.3,
            ease: 'power2.out'
        });

        const metrics = this.querySelectorAll('.metric-value');
        gsap.to(metrics, {
            scale: 1.1,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', function () {
        gsap.to(this, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });

        const metrics = this.querySelectorAll('.metric-value');
        gsap.to(metrics, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Form interactions
document.querySelectorAll('.form-input, .form-textarea, .newsletter-input').forEach(input => {
    input.addEventListener('focus', function () {
        gsap.to(this, {
            scale: 1.01,
            duration: 0.2,
            ease: 'power2.out'
        });
    });

    input.addEventListener('blur', function () {
        gsap.to(this, {
            scale: 1,
            duration: 0.2,
            ease: 'power2.out'
        });
    });
});

// Newsletter form animation
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = this.querySelector('.newsletter-btn');
        const input = this.querySelector('.newsletter-input');

        gsap.to(btn, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                const originalText = btn.textContent;
                btn.textContent = 'JOINED!';
                btn.style.background = '#34c759';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    input.value = '';
                }, 2500);
            }
        });
    });
}

// Contact form animation
const contactForm = document.querySelector('.form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = this.querySelector('.form-btn');
        const inputs = this.querySelectorAll('.form-input, .form-textarea, .form-select');

        gsap.to(btn, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                const originalText = btn.textContent;
                btn.textContent = 'MESSAGE SENT!';
                btn.style.background = '#34c759';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    inputs.forEach(input => input.value = '');
                }, 2500);
            }
        });
    });
}

// Tech showcase animation
ScrollTrigger.create({
    trigger: '.tech-showcase',
    start: 'top 85%',
    onEnter: () => {
        gsap.fromTo('.showcase-shoe',
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
        );

        gsap.fromTo('.tech-layers .layer',
            { opacity: 0 },
            { opacity: 0.4, duration: 1, stagger: 0.3, ease: 'power2.out' }
        );
    },
    once: true
});

// Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #dc267f, #007aff, #34c759);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Hero shoe floating animation
gsap.to('.jordan-image', {
    y: 10,
    rotation: 2,
    duration: 3,
    ease: 'power2.inOut',
    yoyo: true,
    repeat: -1
});

// Custom cursor for desktop
if (window.innerWidth > 1024) {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: linear-gradient(45deg, #dc267f, #007aff);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        opacity: 0;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.1
        });
    });

    document.addEventListener('mouseenter', () => {
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
    });

    document.addEventListener('mouseleave', () => {
        gsap.to(cursor, { opacity: 0, duration: 0.3 });
    });

    // Scale cursor on interactive elements
    document.querySelectorAll('a, button, .jordan-card, .performance-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 1.5, duration: 0.3 });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
        });
    });
}

// Initialize everything when page loads
window.addEventListener('load', () => {
    playLogoIntro();
});

// Refresh ScrollTrigger on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// Performance optimization
ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
});

// Newsletter section animation
ScrollTrigger.create({
    trigger: '.newsletter',
    start: 'top 85%',
    onEnter: () => {
        gsap.fromTo('.newsletter-content > *',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
                clearProps: 'all'
            }
        );
    },
    once: true
});