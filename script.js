/* -------------------------------------------------------------
   LALIT.DEV / W3LALIT - PRODUCTION READY JAVASCRIPT & GSAP LOGIC
   ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins safely
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

        if (typeof ScrollTrigger !== 'undefined') {
            lenis.on('scroll', ScrollTrigger.update);
        }

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
    }

    // -------------------------------------------------------------
    // Slide-out Navigation Drawer (Desktop & Mobile)
    // -------------------------------------------------------------
    const siteDrawer = document.getElementById('siteDrawer');
    const menuToggle = document.getElementById('menuToggle');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    function openDrawer() {
        if (!siteDrawer) return;
        siteDrawer.classList.add('open');
        siteDrawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (lenis) lenis.stop();

        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.drawer-link',
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, stagger: 0.03, duration: 0.35, ease: 'power2.out', delay: 0.08 }
            );
        }
    }

    function closeDrawer() {
        if (!siteDrawer || !siteDrawer.classList.contains('open')) return;
        siteDrawer.classList.remove('open');
        siteDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lenis) lenis.start();
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            openDrawer();
        });
    }

    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeDrawer();
        });
    }

    if (drawerBackdrop) {
        drawerBackdrop.addEventListener('click', closeDrawer);
    }

    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // -------------------------------------------------------------
    // Smooth Anchor Navigation
    // -------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                closeDrawer();
                if (lenis) {
                    lenis.scrollTo(target, {
                        offset: -80,
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
    // Dynamic Navbar Scroll Behavior (Hide on scroll down, show on scroll up)
    // -------------------------------------------------------------
    let lastScrollY = 0;
    const navbar = document.getElementById('mainNavbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 120) {
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
    // Active Navigation Highlight
    // -------------------------------------------------------------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length && typeof ScrollTrigger !== 'undefined') {
        sections.forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top 45%',
                end: 'bottom 45%',
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

            drawerLinks.forEach(link => {
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
    if (statCards.length && typeof ScrollTrigger !== 'undefined') {
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
                    if (typeof gsap !== 'undefined') {
                        gsap.fromTo(card,
                            { opacity: 0, scale: 0.98, y: 10 },
                            { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power2.out' }
                        );
                    }
                } else {
                    card.style.display = 'none';
                }
            });

            if (typeof ScrollTrigger !== 'undefined') {
                setTimeout(() => ScrollTrigger.refresh(), 300);
            }
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

    // Global Keydown Handler (ESC closes modal or drawer)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal && modal.classList.contains('open')) {
                closeProjectModal();
            }
            if (siteDrawer && siteDrawer.classList.contains('open')) {
                closeDrawer();
            }
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

                // Close other accordion items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                        const otherHeader = otherItem.querySelector('.faq-header');
                        if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
                    }
                });

                // Toggle selected item
                if (isOpen) {
                    item.classList.remove('open');
                    header.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('open');
                    header.setAttribute('aria-expanded', 'true');
                }

                if (typeof ScrollTrigger !== 'undefined') {
                    setTimeout(() => ScrollTrigger.refresh(), 300);
                }
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
    // Direct Email Copy Button
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
