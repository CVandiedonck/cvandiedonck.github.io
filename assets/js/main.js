// JavaScript principal pour le site Jekyll
document.addEventListener('DOMContentLoaded', function() {
    
    // Gestion du changement de langue (pour version multilingue simple)
    function switchLanguage(lang) {
        document.body.className = lang;
        
        // Update button states
        const btnFr = document.getElementById('btn-fr');
        const btnEn = document.getElementById('btn-en');
        
        if (btnFr && btnEn) {
            btnFr.classList.toggle('active', lang === 'fr');
            btnEn.classList.toggle('active', lang === 'en');
        }
        
        // Store preference
        localStorage.setItem('language', lang);
    }

    // Load saved language preference
    const savedLang = localStorage.getItem('language') || 'fr';
    if (document.body.className !== savedLang) {
        switchLanguage(savedLang);
    }

    // Add event listeners for language buttons (if they're buttons)
    const langButtons = document.querySelectorAll('.language-toggle button');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.id === 'btn-fr' ? 'fr' : 'en';
            switchLanguage(lang);
        });
    });

    // Smooth scroll navigation
    document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
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

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animations
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Dynamic nav highlighting
    function updateActiveNavLink() {
        let current = '';
        const sections = document.querySelectorAll('.section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        // Update nav links
        document.querySelectorAll('.nav a').forEach(link => {
            link.classList.remove('current');
            const href = link.getAttribute('href');
            if (href === '#' + current || (href === '/' && current === '')) {
                link.classList.add('current');
            }
        });
    }

    // Listen to scroll events
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveNavLink();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Enhanced timeline interactions
    const timelineMilestones = document.querySelectorAll('.timeline-milestone');
    timelineMilestones.forEach(milestone => {
        milestone.addEventListener('mouseenter', function() {
            // Add subtle scale effect
            this.style.transform = 'translateY(-70%) scale(1.02)';
            this.style.zIndex = '20';
        });

        milestone.addEventListener('mouseleave', function() {
            // Reset transform
            this.style.transform = 'translateY(-50%)';
            this.style.zIndex = '1';
        });
    });

    // CV buttons hover effects
    const cvButtons = document.querySelectorAll('.cv-links .btn');
    cvButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-3px) scale(1)';
        });
    });

    // Lazy loading for images (when added)
    const images = document.querySelectorAll('img[data-src]');
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Form enhancements (for future contact forms)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Basic form validation could be added here
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
            }
        });
    });

    // Back to top functionality
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color, #3498db);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(backToTop);

    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    // Back to top click handler
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Performance: Preload critical resources
    function preloadCriticalResources() {
        const criticalImages = [
            '/assets/images/profile.jpg',
            '/assets/images/logo.png'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // Initialize performance optimizations
    preloadCriticalResources();

    // Console message for developers
    console.log('🚀 Site académique de Claire Vandiedonck');
    console.log('💻 Développé avec Jekyll et hébergé sur GitHub Pages');
    console.log('📧 Contact: claire.vandiedonck@inserm.fr');

});
