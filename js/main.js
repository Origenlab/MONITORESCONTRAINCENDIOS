/* ============================================
   AQUEON - Monitores Contra Incendios
   JavaScript Principal
   ============================================ */

(function() {
    'use strict';

    /* ============================================
       1. VARIABLES GLOBALES
       ============================================ */
    const DOM = {
        preloader: document.getElementById('preloader'),
        header: document.querySelector('.main-header'),
        mobileToggle: document.querySelector('.mobile-toggle'),
        mainNav: document.querySelector('.main-nav'),
        navItems: document.querySelectorAll('.nav-item'),
        tabButtons: document.querySelectorAll('.tab-btn'),
        tabContents: document.querySelectorAll('.tab-content'),
        testimonialItems: document.querySelectorAll('.testimonial-item'),
        sliderDots: document.querySelectorAll('.slider-dot'),
        sliderPrev: document.querySelector('.slider-prev'),
        sliderNext: document.querySelector('.slider-next'),
        backToTop: document.getElementById('backToTop'),
        contactForm: document.getElementById('contactForm'),
        newsletterForm: document.querySelector('.newsletter-form')
    };

    let currentTestimonial = 0;
    let testimonialInterval;

    /* ============================================
       2. PRELOADER
       ============================================ */
    function initPreloader() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (DOM.preloader) {
                    DOM.preloader.classList.add('hidden');
                    document.body.classList.remove('no-scroll');
                }
            }, 500);
        });
    }

    /* ============================================
       3. HEADER SCROLL EFFECT
       ============================================ */
    function initHeaderScroll() {
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (DOM.header) {
                if (scrollTop > 100) {
                    DOM.header.classList.add('scrolled');
                } else {
                    DOM.header.classList.remove('scrolled');
                }
            }

            lastScrollTop = scrollTop;
        });
    }

    /* ============================================
       4. MOBILE NAVIGATION
       ============================================ */
    function initMobileNav() {
        if (DOM.mobileToggle && DOM.mainNav) {
            DOM.mobileToggle.addEventListener('click', () => {
                DOM.mobileToggle.classList.toggle('active');
                DOM.mainNav.classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            });

            // Handle dropdowns on mobile
            DOM.navItems.forEach(item => {
                const link = item.querySelector('.nav-link');
                const dropdown = item.querySelector('.dropdown');

                if (dropdown && link) {
                    link.addEventListener('click', (e) => {
                        if (window.innerWidth <= 768) {
                            e.preventDefault();
                            item.classList.toggle('open');

                            // Close other dropdowns
                            DOM.navItems.forEach(otherItem => {
                                if (otherItem !== item) {
                                    otherItem.classList.remove('open');
                                }
                            });
                        }
                    });
                }
            });

            // Close mobile nav on window resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    DOM.mobileToggle.classList.remove('active');
                    DOM.mainNav.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                    DOM.navItems.forEach(item => item.classList.remove('open'));
                }
            });
        }
    }

    /* ============================================
       5. PRODUCT TABS
       ============================================ */
    function initProductTabs() {
        if (DOM.tabButtons.length > 0) {
            DOM.tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const targetTab = button.getAttribute('data-tab');

                    // Remove active class from all buttons and contents
                    DOM.tabButtons.forEach(btn => btn.classList.remove('active'));
                    DOM.tabContents.forEach(content => content.classList.remove('active'));

                    // Add active class to clicked button and corresponding content
                    button.classList.add('active');
                    const targetContent = document.getElementById(`tab-${targetTab}`);
                    if (targetContent) {
                        targetContent.classList.add('active');
                    }
                });
            });
        }
    }

    /* ============================================
       6. TESTIMONIALS SLIDER
       ============================================ */
    function initTestimonialsSlider() {
        if (DOM.testimonialItems.length === 0) return;

        function showTestimonial(index) {
            // Handle index bounds
            if (index >= DOM.testimonialItems.length) {
                currentTestimonial = 0;
            } else if (index < 0) {
                currentTestimonial = DOM.testimonialItems.length - 1;
            } else {
                currentTestimonial = index;
            }

            // Update testimonials
            DOM.testimonialItems.forEach((item, i) => {
                item.classList.remove('active');
                if (i === currentTestimonial) {
                    item.classList.add('active');
                }
            });

            // Update dots
            DOM.sliderDots.forEach((dot, i) => {
                dot.classList.remove('active');
                if (i === currentTestimonial) {
                    dot.classList.add('active');
                }
            });
        }

        function nextTestimonial() {
            showTestimonial(currentTestimonial + 1);
        }

        function prevTestimonial() {
            showTestimonial(currentTestimonial - 1);
        }

        // Auto-play
        function startAutoPlay() {
            testimonialInterval = setInterval(nextTestimonial, 5000);
        }

        function stopAutoPlay() {
            clearInterval(testimonialInterval);
        }

        // Event listeners
        if (DOM.sliderNext) {
            DOM.sliderNext.addEventListener('click', () => {
                nextTestimonial();
                stopAutoPlay();
                startAutoPlay();
            });
        }

        if (DOM.sliderPrev) {
            DOM.sliderPrev.addEventListener('click', () => {
                prevTestimonial();
                stopAutoPlay();
                startAutoPlay();
            });
        }

        DOM.sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
                stopAutoPlay();
                startAutoPlay();
            });
        });

        // Start auto-play
        startAutoPlay();

        // Pause on hover
        const sliderContainer = document.querySelector('.testimonials-slider');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', stopAutoPlay);
            sliderContainer.addEventListener('mouseleave', startAutoPlay);
        }
    }

    /* ============================================
       7. BACK TO TOP BUTTON
       ============================================ */
    function initBackToTop() {
        if (DOM.backToTop) {
            // Show/hide button based on scroll position
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    DOM.backToTop.classList.add('visible');
                } else {
                    DOM.backToTop.classList.remove('visible');
                }
            });

            // Scroll to top on click
            DOM.backToTop.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    /* ============================================
       8. SMOOTH SCROLL FOR ANCHOR LINKS
       ============================================ */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');

                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

                    const headerHeight = DOM.header ? DOM.header.offsetHeight : 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile nav if open
                    if (DOM.mainNav && DOM.mainNav.classList.contains('active')) {
                        DOM.mobileToggle.classList.remove('active');
                        DOM.mainNav.classList.remove('active');
                        document.body.classList.remove('no-scroll');
                    }
                }
            });
        });
    }

    /* ============================================
       9. CONTACT FORM VALIDATION
       ============================================ */
    function initContactForm() {
        if (DOM.contactForm) {
            DOM.contactForm.addEventListener('submit', function(e) {
                e.preventDefault();

                // Get form elements
                const name = this.querySelector('#name');
                const email = this.querySelector('#email');
                const phone = this.querySelector('#phone');
                const company = this.querySelector('#company');
                const subject = this.querySelector('#subject');
                const message = this.querySelector('#message');
                const privacy = this.querySelector('#privacy');

                let isValid = true;
                const errors = [];

                // Clear previous errors
                this.querySelectorAll('.form-group').forEach(group => {
                    group.classList.remove('error');
                });

                // Validate name
                if (name && !name.value.trim()) {
                    isValid = false;
                    errors.push('El nombre es requerido');
                    name.parentElement.classList.add('error');
                }

                // Validate email
                if (email) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!email.value.trim()) {
                        isValid = false;
                        errors.push('El correo electrónico es requerido');
                        email.parentElement.classList.add('error');
                    } else if (!emailRegex.test(email.value)) {
                        isValid = false;
                        errors.push('Ingrese un correo electrónico válido');
                        email.parentElement.classList.add('error');
                    }
                }

                // Validate phone (optional but if provided, validate format)
                if (phone && phone.value.trim()) {
                    const phoneRegex = /^[+]?[\d\s()-]{10,}$/;
                    if (!phoneRegex.test(phone.value)) {
                        isValid = false;
                        errors.push('Ingrese un número de teléfono válido');
                        phone.parentElement.classList.add('error');
                    }
                }

                // Validate message
                if (message && !message.value.trim()) {
                    isValid = false;
                    errors.push('El mensaje es requerido');
                    message.parentElement.classList.add('error');
                }

                // Validate privacy checkbox
                if (privacy && !privacy.checked) {
                    isValid = false;
                    errors.push('Debe aceptar la política de privacidad');
                    privacy.parentElement.classList.add('error');
                }

                if (isValid) {
                    // Show success message
                    showFormMessage('success', '¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.');

                    // Reset form
                    this.reset();
                } else {
                    // Show error message
                    showFormMessage('error', errors.join('<br>'));
                }
            });
        }
    }

    function showFormMessage(type, message) {
        // Remove existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message form-message-${type}`;
        messageEl.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;

        // Add styles inline for the message
        messageEl.style.cssText = `
            padding: 1rem 1.5rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            animation: fadeIn 0.3s ease;
            ${type === 'success'
                ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;'
                : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'}
        `;

        // Insert before form
        const form = document.querySelector('.contact-form');
        if (form) {
            form.insertBefore(messageEl, form.firstChild);
        }

        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageEl.style.opacity = '0';
            setTimeout(() => messageEl.remove(), 300);
        }, 5000);
    }

    /* ============================================
       10. NEWSLETTER FORM
       ============================================ */
    function initNewsletterForm() {
        if (DOM.newsletterForm) {
            DOM.newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const emailInput = this.querySelector('input[type="email"]');

                if (emailInput && emailInput.value.trim()) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    if (emailRegex.test(emailInput.value)) {
                        // Success
                        alert('¡Gracias por suscribirte! Recibirás nuestras novedades pronto.');
                        this.reset();
                    } else {
                        alert('Por favor, ingresa un correo electrónico válido.');
                    }
                } else {
                    alert('Por favor, ingresa tu correo electrónico.');
                }
            });
        }
    }

    /* ============================================
       11. AOS (Animate On Scroll) INITIALIZATION
       ============================================ */
    function initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 50,
                delay: 0,
                anchorPlacement: 'top-bottom'
            });
        }
    }

    /* ============================================
       12. COUNTER ANIMATION
       ============================================ */
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number, .why-stat-number');

        if (counters.length === 0) return;

        const animateCounter = (counter) => {
            const target = parseInt(counter.innerText.replace(/[^0-9]/g, ''));
            const suffix = counter.innerText.replace(/[0-9]/g, '');
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.innerText = Math.floor(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target + suffix;
                }
            };

            updateCounter();
        };

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    animateCounter(entry.target);
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    }

    /* ============================================
       13. LAZY LOADING FOR IMAGES
       ============================================ */
    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[data-src]');

        if (lazyImages.length === 0) return;

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    /* ============================================
       14. PARALLAX EFFECT
       ============================================ */
    function initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        if (parallaxElements.length === 0) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(element => {
                const speed = parseFloat(element.dataset.parallax) || 0.5;
                const offset = scrolled * speed;
                element.style.transform = `translateY(${offset}px)`;
            });
        });
    }

    /* ============================================
       15. ACTIVE NAVIGATION STATE
       ============================================ */
    function initActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');

        if (sections.length === 0) return;

        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            const headerHeight = DOM.header ? DOM.header.offsetHeight : 0;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - headerHeight - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    /* ============================================
       16. HEADER SEARCH FUNCTIONALITY
       ============================================ */
    function initSearch() {
        const searchBtn = document.querySelector('.header-search');

        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                // Could open a search modal or expand a search input
                alert('Función de búsqueda próximamente disponible');
            });
        }
    }

    /* ============================================
       17. QUICK VIEW MODAL (Products)
       ============================================ */
    function initQuickView() {
        const quickViewBtns = document.querySelectorAll('.quick-view-btn');

        quickViewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const productCard = btn.closest('.product-card');
                const productTitle = productCard.querySelector('.product-title a').textContent;

                // Could open a modal with product details
                alert(`Vista rápida de: ${productTitle}\n\nFuncionalidad de modal próximamente.`);
            });
        });
    }

    /* ============================================
       18. BRANDS SLIDER PAUSE ON HOVER
       ============================================ */
    function initBrandsSlider() {
        const brandsSlider = document.querySelector('.brands-slider');

        if (brandsSlider) {
            brandsSlider.addEventListener('mouseenter', () => {
                brandsSlider.style.animationPlayState = 'paused';
            });

            brandsSlider.addEventListener('mouseleave', () => {
                brandsSlider.style.animationPlayState = 'running';
            });
        }
    }

    /* ============================================
       19. FORM INPUT ANIMATIONS
       ============================================ */
    function initFormAnimations() {
        const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

        formInputs.forEach(input => {
            // Add filled class if input has value
            if (input.value.trim()) {
                input.parentElement.classList.add('filled');
            }

            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
                if (input.value.trim()) {
                    input.parentElement.classList.add('filled');
                } else {
                    input.parentElement.classList.remove('filled');
                }
            });
        });
    }

    /* ============================================
       20. KEYBOARD NAVIGATION
       ============================================ */
    function initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Close mobile menu on Escape
            if (e.key === 'Escape') {
                if (DOM.mainNav && DOM.mainNav.classList.contains('active')) {
                    DOM.mobileToggle.classList.remove('active');
                    DOM.mainNav.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            }
        });
    }

    /* ============================================
       21. SCROLL REVEAL ANIMATION
       ============================================ */
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal');

        if (revealElements.length === 0) return;

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    /* ============================================
       22. PERFORMANCE OPTIMIZATION
       ============================================ */
    function initPerformanceOptimizations() {
        // Debounce function for scroll events
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Throttle function for scroll events
        function throttle(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        }

        // Apply throttle to scroll-heavy functions
        const throttledScroll = throttle(() => {
            // Scroll-based functions that need throttling
        }, 100);

        window.addEventListener('scroll', throttledScroll, { passive: true });
    }

    /* ============================================
       23. INITIALIZATION
       ============================================ */
    function init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAll);
        } else {
            initAll();
        }
    }

    function initAll() {
        initPreloader();
        initHeaderScroll();
        initMobileNav();
        initProductTabs();
        initTestimonialsSlider();
        initBackToTop();
        initSmoothScroll();
        initContactForm();
        initNewsletterForm();
        initAOS();
        initCounterAnimation();
        initLazyLoading();
        initParallax();
        initActiveNavigation();
        initSearch();
        initQuickView();
        initBrandsSlider();
        initFormAnimations();
        initKeyboardNavigation();
        initScrollReveal();
        initPerformanceOptimizations();

        console.log('AQUEON Website Initialized Successfully');
    }

    // Start initialization
    init();

})();
