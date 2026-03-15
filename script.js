document.addEventListener('DOMContentLoaded', () => {
    // 2. Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-up');
    animateElements.forEach(el => observer.observe(el));

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Mobile Menu Toggle (Basic)
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Add CSS for active class in a real scenario
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(0, 0, 0, 0.95)';
            navLinks.style.padding = '2rem';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // 5. Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // 6. Typing Animation
    const typingElement = document.getElementById('typing-role');
    const text = "IOT and Embedded Systems Engineer";
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = text.slice(0, index);
        typingElement.textContent = currentText;

        if (!isDeleting && index < text.length) {
            index++;
            typingSpeed = 100;
        } else if (isDeleting && index > 0) {
            index--;
            typingSpeed = 50;
        } else {
            isDeleting = !isDeleting;
            typingSpeed = isDeleting ? 1000 : 500; // Pause at ends
        }

        setTimeout(type, typingSpeed);
    }

    if (typingElement) {
        type();
    }
});
