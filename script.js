document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            } else {
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });
    }

    // Close menu when link clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('ph-x');
                    icon.classList.add('ph-list');
                }
            }
        });
    });

    // Copy Email functionality
    const copyBtn = document.querySelector('.copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const email = 'contact@tajulislam.com';
            navigator.clipboard.writeText(email).then(() => {
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="ph ph-check"></i> Copied!';
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Add a small offset to trigger active state earlier
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Modal Logic
    const aboutTrigger = document.getElementById('about-trigger');
    const aboutModal = document.getElementById('about-modal');
    
    const contactTriggers = document.querySelectorAll('.get-started-trigger');
    const contactModal = document.getElementById('contact-modal');
    
    const closeBtns = document.querySelectorAll('.mac-btn.close-modal-btn');

    // About Modal
    if (aboutTrigger && aboutModal) {
        aboutTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            aboutModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }

    // Contact Modal
    if (contactTriggers.length > 0 && contactModal) {
        contactTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                contactModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });
    }

    // Close logic for all modals
    const modals = [aboutModal, contactModal].filter(m => m !== null);
    
    // Close on X button
    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            modals.forEach(modal => modal.classList.add('hidden'));
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside the window
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    });
});