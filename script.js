/* -------------------------------------------------------------
   LALIT.DEV / W3LALIT - PRODUCTION READY JAVASCRIPT & GSAP LOGIC
   ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // -------------------------------------------------------------
    // Lenis Smooth Scroll Setup
    // -------------------------------------------------------------
    let lenis;
    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
    }

    // Smooth scroll for internal navigation anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                if (lenis) {
                    lenis.scrollTo(target, {
                        offset: -80, // Navbar height offset
                        duration: 1.2,
                        ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                } else {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // -------------------------------------------------------------
    // Custom Interactive Cursor
    // -------------------------------------------------------------
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('customCursorDot');

    if (cursor && cursorDot && window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.22, ease: 'power2.out' });
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.05, ease: 'power2.out' });
        });

        const hoverSelectors = 'a, button, select, input, textarea, .service-row, .bento-card, .project-card, .filter-btn, .pricing-card, .faq-header, .stat-card';
        const hoverElements = document.querySelectorAll(hoverSelectors);

        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                gsap.to(cursor, {
                    width: 42,
                    height: 42,
                    backgroundColor: 'rgba(0, 102, 255, 0.06)',
                    borderColor: 'rgba(0, 102, 255, 0.4)',
                    duration: 0.3
                });
                gsap.to(cursorDot, {
                    scale: 1.5,
                    backgroundColor: 'var(--color-primary)',
                    duration: 0.2
                });
            });
            element.addEventListener('mouseleave', () => {
                gsap.to(cursor, {
                    width: 20,
                    height: 20,
                    backgroundColor: 'transparent',
                    borderColor: 'var(--color-primary)',
                    duration: 0.3
                });
                gsap.to(cursorDot, {
                    scale: 1.0,
                    backgroundColor: 'var(--color-primary)',
                    duration: 0.2
                });
            });
        });
    }

    // -------------------------------------------------------------
    // Dynamic Navbar Scroll Behavior
    // -------------------------------------------------------------
    let lastScrollY = 0;
    const navbar = document.getElementById('mainNavbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
                    navbar.classList.add('nav-hidden');
                } else if (lastScrollY - currentScrollY > 5) {
                    navbar.classList.remove('nav-hidden');
                }
            } else {
                navbar.classList.remove('nav-hidden');
            }
            lastScrollY = currentScrollY;
        }, { passive: true });
    }

    // -------------------------------------------------------------
    // Mobile Navigation Menu Drawer
    // -------------------------------------------------------------
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && mobileMenu) {
        const menuIcon = menuToggle.querySelector('i');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            if (mobileMenu.classList.contains('open')) {
                if (menuIcon) menuIcon.textContent = 'close';
                if (lenis) lenis.stop();

                gsap.fromTo('.mobile-menu-link',
                    { opacity: 0, x: 20 },
                    { opacity: 1, x: 0, stagger: 0.08, duration: 0.5, ease: 'power3.out', delay: 0.15 }
                );
            } else {
                if (menuIcon) menuIcon.textContent = 'menu';
                if (lenis) lenis.start();
            }
        });

        document.querySelectorAll('.mobile-menu-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                if (menuIcon) menuIcon.textContent = 'menu';
                if (lenis) lenis.start();
            });
        });
    }

    // -------------------------------------------------------------
    // Active Nav Item Highlighting
    // -------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length && navLinks.length) {
        sections.forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top 40%',
                end: 'bottom 40%',
                onEnter: () => updateActiveNav(section.id),
                onEnterBack: () => updateActiveNav(section.id)
            });
        });

        function updateActiveNav(id) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    // -------------------------------------------------------------
    // Animated Stats Counters
    // -------------------------------------------------------------
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length) {
        let statsCounted = false;

        ScrollTrigger.create({
            trigger: '#stats',
            start: 'top 85%',
            onEnter: () => {
                if (!statsCounted) {
                    statsCounted = true;
                    statCards.forEach(card => {
                        const numElem = card.querySelector('.stat-number');
                        if (!numElem) return;
                        const target = parseInt(numElem.getAttribute('data-target'), 10) || 0;
                        const obj = { count: 0 };

                        gsap.to(obj, {
                            count: target,
                            duration: 1.8,
                            ease: 'power2.out',
                            onUpdate: () => {
                                numElem.textContent = Math.floor(obj.count);
                            }
                        });
                    });
                }
            }
        });
    }

    // -------------------------------------------------------------
    // GSAP ScrollTrigger Section Animations
    // -------------------------------------------------------------
    if (typeof gsap !== 'undefined') {
        // Hero Section Reveal
        const heroTl = gsap.timeline();
        heroTl.from('.hero-meta', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' })
            .from('.hero-title h1', { opacity: 0, y: 35, duration: 0.9, ease: 'power4.out' }, '-=0.4')
            .from('.hero-desc p', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, '-=0.5')
            .from('.hero-actions a', { opacity: 0, y: 20, stagger: 0.15, duration: 0.7, ease: 'power3.out' }, '-=0.5')
            .from('.marquee-badge', { opacity: 0, scale: 0.92, stagger: 0.05, duration: 0.5, ease: 'power2.out' }, '-=0.4');

        // Section Labels
        sections.forEach(section => {
            const label = section.querySelector('.section-label');
            if (label) {
                gsap.from(label, {
                    scrollTrigger: { trigger: section, start: 'top 85%' },
                    opacity: 0,
                    x: -25,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            }
        });

        // Bento Cards
        gsap.from('.bento-card', {
            scrollTrigger: { trigger: '#capabilities', start: 'top 75%' },
            opacity: 0,
            y: 35,
            stagger: 0.12,
            duration: 0.9,
            ease: 'power3.out'
        });

        // Project Cards
        gsap.from('.project-card', {
            scrollTrigger: { trigger: '#work', start: 'top 75%' },
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 1.0,
            ease: 'power3.out'
        });

        // Service Rows
        gsap.from('.service-row', {
            scrollTrigger: { trigger: '#services', start: 'top 75%' },
            opacity: 0,
            y: 30,
            stagger: 0.12,
            duration: 0.9,
            ease: 'power3.out'
        });

        // Pricing Cards
        gsap.from('.pricing-card', {
            scrollTrigger: { trigger: '#pricing', start: 'top 75%' },
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.9,
            ease: 'power3.out'
        });

        // Testimonial Cards
        gsap.from('.testimonial-card', {
            scrollTrigger: { trigger: '#testimonials', start: 'top 75%' },
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.9,
            ease: 'power3.out'
        });

        // Process Cards
        gsap.from('.process-card', {
            scrollTrigger: { trigger: '#process', start: 'top 75%' },
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out'
        });

        // FAQ Items
        gsap.from('.faq-item', {
            scrollTrigger: { trigger: '#faq', start: 'top 75%' },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out'
        });

        // Contact Section
        gsap.from('.contact-form-container', {
            scrollTrigger: { trigger: '#contact', start: 'top 75%' },
            opacity: 0,
            x: -30,
            duration: 1.0,
            ease: 'power3.out'
        });

        gsap.from('.contact-info-col .info-card', {
            scrollTrigger: { trigger: '#contact', start: 'top 75%' },
            opacity: 0,
            x: 30,
            stagger: 0.2,
            duration: 1.0,
            ease: 'power3.out'
        });
    }

    // -------------------------------------------------------------
    // Project Category Filtering
    // -------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.filter;

            projectCards.forEach(card => {
                const cardCategory = card.dataset.category;

                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'flex';
                    gsap.fromTo(card,
                        { opacity: 0, scale: 0.96, y: 15 },
                        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out' }
                    );
                } else {
                    gsap.to(card, {
                        opacity: 0,
                        scale: 0.96,
                        y: 10,
                        duration: 0.25,
                        ease: 'power3.in',
                        onComplete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });

            setTimeout(() => {
                if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
            }, 350);
        });
    });

    // -------------------------------------------------------------
    // Project Detail Modal Dialog
    // -------------------------------------------------------------
    const modal = document.getElementById('projectModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalTags = document.getElementById('modalTags');
    const modalVisitLink = document.getElementById('modalVisitLink');

    function openProjectModal(card) {
        if (!modal) return;
        const title = card.getAttribute('data-title') || '';
        const subtitle = card.getAttribute('data-subtitle') || '';
        const image = card.getAttribute('data-image') || '';
        const link = card.getAttribute('data-link') || '#';
        const desc = card.getAttribute('data-desc') || '';
        const tags = (card.getAttribute('data-tags') || '').split(',').filter(Boolean);

        if (modalTitle) modalTitle.textContent = title;
        if (modalSubtitle) modalSubtitle.textContent = subtitle;
        if (modalImg) modalImg.src = image;
        if (modalDesc) modalDesc.textContent = desc;
        if (modalVisitLink) modalVisitLink.href = link;

        if (modalTags) {
            modalTags.innerHTML = '';
            tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'chip';
                span.textContent = tag.trim();
                modalTags.appendChild(span);
            });
        }

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Modal Trigger Buttons
    document.querySelectorAll('.project-modal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.project-card');
            if (card) openProjectModal(card);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeProjectModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeProjectModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
            closeProjectModal();
        }
    });

    // -------------------------------------------------------------
    // FAQ Accordion Toggle
    // -------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        if (header) {
            header.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');

                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                        const otherHeader = otherItem.querySelector('.faq-header');
                        if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
                    }
                });

                // Toggle current item
                if (isOpen) {
                    item.classList.remove('open');
                    header.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('open');
                    header.setAttribute('aria-expanded', 'true');
                }

                setTimeout(() => {
                    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
                }, 350);
            });
        }
    });

    // -------------------------------------------------------------
    // Formspree / AJAX Contact Form
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (formStatus) {
                formStatus.textContent = 'STATUS: SENDING_REQUEST...';
                formStatus.style.color = 'var(--color-primary)';
            }

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    if (formStatus) {
                        formStatus.textContent = 'STATUS: MESSAGE_SENT_SUCCESSFULLY';
                        formStatus.style.color = '#10b981';
                    }
                    contactForm.reset();

                    setTimeout(() => {
                        if (formStatus) {
                            formStatus.textContent = 'STATUS: AWAITING_INPUT';
                            formStatus.style.color = '';
                        }
                    }, 6000);
                } else {
                    if (formStatus) {
                        formStatus.textContent = 'STATUS: ERROR_FAILED_TO_SEND';
                        formStatus.style.color = 'var(--color-error)';
                    }
                }
            } catch (error) {
                if (formStatus) {
                    formStatus.textContent = 'STATUS: NETWORK_ERROR';
                    formStatus.style.color = 'var(--color-error)';
                }
            }
        });
    }

    // -------------------------------------------------------------
    // One-Click Direct Email & Phone Copy
    // -------------------------------------------------------------
    const emailBtn = document.getElementById('emailCopyBtn');
    const emailIcon = document.getElementById('emailCopyIcon');

    if (emailBtn) {
        emailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'Sainilalit2751@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                if (emailIcon) emailIcon.textContent = 'check';
                emailBtn.style.color = '#10b981';

                setTimeout(() => {
                    if (emailIcon) emailIcon.textContent = 'content_copy';
                    emailBtn.style.color = '';
                }, 2500);
            }).catch(() => {
                window.location.href = `mailto:${email}`;
            });
        });
    }

    // -------------------------------------------------------------
    // Dynamic Copyright Year
    // -------------------------------------------------------------
    document.querySelectorAll('.current-year').forEach(span => {
        span.textContent = new Date().getFullYear();
    });
});
