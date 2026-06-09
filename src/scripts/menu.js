/**
 * AQUEON - Monitores Contra Incendios
 * JavaScript Principal - Sin animaciones
 * (portado de js/main.js a módulo Astro)
 */

(function () {
    'use strict';

    // ============================================
    // Navegación: menú móvil + submenús (acordeón)
    // ============================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const dropdownItems = Array.from(document.querySelectorAll('.has-dropdown'));
    const MOBILE_BP = 768;

    const isMobile = function () {
        return window.innerWidth <= MOBILE_BP;
    };

    // -- Cerrar todos los submenús --
    function closeAllSubmenus() {
        dropdownItems.forEach(function (item) {
            item.classList.remove('open');
            const toggle = item.querySelector('.submenu-toggle');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
    }

    // -- Abrir / cerrar panel móvil --
    function openMobileMenu() {
        if (!navMenu) return;
        navMenu.classList.add('active');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
        if (navOverlay) navOverlay.classList.add('active');
        document.body.classList.add('nav-open');
    }

    function closeMobileMenu() {
        if (!navMenu) return;
        navMenu.classList.remove('active');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.classList.remove('nav-open');
        closeAllSubmenus();
    }

    // -- Hamburguesa --
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // -- Overlay: cerrar al tocar fuera --
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMobileMenu);
    }

    // -- Toggles de submenú (acordeón en móvil) --
    dropdownItems.forEach(function (item) {
        const toggle = item.querySelector('.submenu-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const willOpen = !item.classList.contains('open');
            // Acordeón: cerrar los demás al abrir uno
            if (willOpen) {
                dropdownItems.forEach(function (other) {
                    if (other !== item) {
                        other.classList.remove('open');
                        const t = other.querySelector('.submenu-toggle');
                        if (t) t.setAttribute('aria-expanded', 'false');
                    }
                });
            }
            item.classList.toggle('open', willOpen);
            toggle.setAttribute('aria-expanded', String(willOpen));
        });
    });

    // -- Cerrar el panel al navegar a un enlace real --
    if (navMenu) {
        navMenu.querySelectorAll('a[href]').forEach(function (a) {
            a.addEventListener('click', function () {
                if (isMobile()) closeMobileMenu();
            });
        });
    }

    // -- Tecla Escape cierra todo --
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (navMenu && navMenu.classList.contains('active')) {
                closeMobileMenu();
                if (mobileToggle) mobileToggle.focus();
            } else {
                closeAllSubmenus();
            }
        }
    });

    // -- Click fuera del nav cierra submenús en desktop --
    document.addEventListener('click', function (e) {
        if (!isMobile() && !e.target.closest('.has-dropdown')) {
            closeAllSubmenus();
        }
    });

    // ============================================
    // Form Validation
    // ============================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic validation
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(function (field) {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#dc3545';
                } else {
                    field.style.borderColor = '#dee2e6';
                }
            });

            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.style.borderColor = '#dc3545';
                }
            }

            if (isValid) {
                // Here you would normally submit the form
                // For now, show a success message
                alert('Gracias por su mensaje. Nos pondremos en contacto en menos de 24 horas.');
                contactForm.reset();
            } else {
                alert('Por favor, complete todos los campos requeridos correctamente.');
            }
        });
    }

    // ============================================
    // Smooth Scroll for Anchor Links
    // (soporta href="#id" y href="/#id" en el index)
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"], a[href^="/#"]');
    const isHome = window.location.pathname === '/' || window.location.pathname === '/index.html';

    anchorLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const targetId = href.startsWith('/#') ? href.slice(1) : href;

            if (targetId === '#') return;
            if (href.startsWith('/#') && !isHome) return; // navegación entre páginas

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                // Cerrar el menú móvil si está abierto
                if (navMenu && navMenu.classList.contains('active')) {
                    closeMobileMenu();
                }

                // Scroll to target
                const headerHeight = document.querySelector('.header').offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Back to Top Button Visibility
    // ============================================
    const backToTopBtn = document.querySelector('.back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 500) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        });

        // Initial state
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }

    // ============================================
    // Cerrar el menú al pasar a desktop (resize)
    // ============================================
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (window.innerWidth > MOBILE_BP) {
                closeMobileMenu();
            }
        }, 150);
    });

    // ============================================
    // Active Navigation Link on Scroll
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    const href = link.getAttribute('href');
                    if (href === '#' + sectionId || href === '/#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
})();
