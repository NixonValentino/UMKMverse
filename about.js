document.addEventListener('DOMContentLoaded', function() {
    // === INTERSECTION OBSERVER SETUP ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                
                // Trigger counter animation untuk stat items
                if (entry.target.classList.contains('stat-item')) {
                    animateCounters(entry.target);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // === OBSERVE ALL ELEMENTS ===
    const advantageCards = document.querySelectorAll('.advantage-card');
    advantageCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        observer.observe(item);
    });

    // Observe other cards
    document.querySelectorAll('.mission-item, .stat-card, .value-card, .benefit-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // === SCROLL PROGRESS BAR ===
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        const progressBar = document.querySelector('.scroll-progress-bar');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    });

    // === COUNTER ANIMATION FUNCTION ===
    function animateCounters(container) {
        const counters = container.querySelectorAll('.counter');
        counters.forEach(counter => {
            if (counter.dataset.animated) return;
            
            counter.dataset.animated = true;
            const target = parseInt(counter.dataset.target);
            const increment = target / 30;
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            };
            
            updateCounter();
            container.classList.add('animated');
        });
    }

    // === SMOOTH SCROLL ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // === PARALLAX EFFECT ===
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });

    // === GLOW EFFECT ON HOVER ===
    const cards = document.querySelectorAll('.vision-card, .mission-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', x + 'px');
            this.style.setProperty('--mouse-y', y + 'px');
        });
    });

    // === HAMBURGER MENU ===
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    const navigation = document.getElementById('navigation');

    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            navigation.classList.toggle('active');
        });

        const navLinks = navigation.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                navigation.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                navigation.classList.remove('active');
            }
        });
    }

    // === ADD ANIMATIONS ===
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

console.log('About.js loaded successfully! 🚀');
