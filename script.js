/* ====================================
   THE AWAKENED KNIGHT PORTFOLIO
   JavaScript - Animations & Interactions
   ==================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initParticles();
    initNavigation();
    initScrollAnimations();
    initSkillCards();
    initProjectCards();
    initContactForm();
    initSmoothScroll();
});

/* ====================================
   PARTICLE SYSTEM
   ==================================== */
function initParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const startX = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 15;
    const hue = Math.random() > 0.5 ? 180 : 260; // Cyan or Purple
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${startX}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        background: hsl(${hue}, 100%, 60%);
        box-shadow: 0 0 ${size * 3}px hsl(${hue}, 100%, 60%);
    `;
    
    container.appendChild(particle);
    
    // Recreate particle after animation
    particle.addEventListener('animationiteration', () => {
        particle.style.left = `${Math.random() * 100}%`;
    });
}

/* ====================================
   NAVIGATION
   ==================================== */
function initNavigation() {
    const nav = document.querySelector('.nav-glass');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Scroll effect for nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(11, 15, 25, 0.95)';
            nav.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(11, 15, 25, 0.7)';
            nav.style.boxShadow = 'none';
        }

        // Update active nav link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Click effect for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add ripple effect
            createRipple(this, e);
        });
    });
}

/* ====================================
   SMOOTH SCROLL
   ==================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

/* ====================================
   SCROLL ANIMATIONS
   ==================================== */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger children animations
                const children = entry.target.querySelectorAll('.skill-card, .project-card, .story-panel');
                children.forEach((child, index) => {
                    child.style.transitionDelay = `${index * 0.1}s`;
                    child.classList.add('animate-in');
                });
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-ready');
        observer.observe(section);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-ready {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .skill-card.animate-ready,
        .project-card.animate-ready,
        .story-panel.animate-ready {
            opacity: 0;
            transform: translateY(30px);
        }
    `;
    document.head.appendChild(style);
}

/* ====================================
   SKILL CARDS
   ==================================== */
function initSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        // Mouse move effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });

        // Energy burst effect on hover
        card.addEventListener('mouseenter', () => {
            createEnergyBurst(card);
        });
    });
}

function createEnergyBurst(element) {
    const burst = document.createElement('div');
    burst.className = 'energy-burst-effect';
    burst.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, rgba(0, 229, 255, 0.8), transparent);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        animation: burstExpand 0.5s ease-out forwards;
    `;
    
    element.appendChild(burst);
    
    setTimeout(() => burst.remove(), 500);
}

// Add burst animation
const burstStyle = document.createElement('style');
burstStyle.textContent = `
    @keyframes burstExpand {
        0% {
            width: 10px;
            height: 10px;
            opacity: 1;
        }
        100% {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(burstStyle);

/* ====================================
   PROJECT CARDS
   ==================================== */
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        // Slash effect on hover
        card.addEventListener('mouseenter', () => {
            const slash = card.querySelector('.slash-effect');
            if (slash) {
                slash.style.animation = 'none';
                slash.offsetHeight; // Trigger reflow
                slash.style.animation = 'slashAttack 0.5s ease-out';
            }
            
            // Play sound effect (optional - commented out)
            // playSlashSound();
        });

        // 3D tilt effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
}

/* ====================================
   CONTACT FORM
   ==================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('.form-input');
    const submitBtn = form.querySelector('.submit-btn');

    // Input focus effects
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
            createAuraEffect(input);
        });

        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });

        // Validate on input
        input.addEventListener('input', () => {
            validateInput(input);
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate all inputs
        let isValid = true;
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Show success animation
            submitBtn.innerHTML = `
                <span class="btn-text">Message Sent!</span>
                <div class="success-icon">✓</div>
            `;
            submitBtn.style.background = 'linear-gradient(135deg, #50FA7B, #00E5FF)';
            
            // Create mana burst effect
            createManaBurst(submitBtn);
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = `
                    <div class="btn-insignia">
                        <svg viewBox="0 0 60 60" class="insignia-svg">
                            <polygon points="30,5 35,25 55,25 40,35 45,55 30,45 15,55 20,35 5,25 25,25" class="insignia-shape"/>
                        </svg>
                    </div>
                    <span class="btn-text">Send Message</span>
                    <div class="mana-pulse"></div>
                `;
                submitBtn.style.background = 'linear-gradient(135deg, #00E5FF, #6C63FF)';
            }, 2000);
        }
    });

    // Submit button hover effect
    submitBtn.addEventListener('mouseenter', () => {
        const pulse = submitBtn.querySelector('.mana-pulse');
        if (pulse) {
            pulse.style.animation = 'manaPulse 0.6s ease-out';
        }
    });
}

function validateInput(input) {
    const value = input.value.trim();
    const isEmail = input.type === 'email';
    
    if (value === '') {
        input.style.borderColor = '#FF3D3D';
        return false;
    }
    
    if (isEmail && !isValidEmail(value)) {
        input.style.borderColor = '#FF3D3D';
        return false;
    }
    
    input.style.borderColor = '#00E5FF';
    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function createAuraEffect(input) {
    const wrapper = input.parentElement;
    const aura = document.createElement('div');
    aura.className = 'input-aura-effect';
    aura.style.cssText = `
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border-radius: 14px;
        background: transparent;
        border: 2px solid transparent;
        background: linear-gradient(var(--ink-black), var(--ink-black)) padding-box,
                    linear-gradient(135deg, rgba(0, 229, 255, 0.5), rgba(108, 99, 255, 0.5)) border-box;
        opacity: 0;
        animation: auraFadeIn 0.3s ease forwards;
        pointer-events: none;
    `;
    
    wrapper.appendChild(aura);
    
    input.addEventListener('blur', () => aura.remove(), { once: true });
}

function createManaBurst(element) {
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const angle = (i / 12) * Math.PI * 2;
        const distance = 100;
        
        particle.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 8px;
            height: 8px;
            background: linear-gradient(135deg, #00E5FF, #6C63FF);
            border-radius: 50%;
            pointer-events: none;
            animation: manaParticle 0.8s ease-out forwards;
            --tx: ${Math.cos(angle) * distance}px;
            --ty: ${Math.sin(angle) * distance}px;
        `;
        
        element.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }
}

// Add mana particle animation
const manaStyle = document.createElement('style');
manaStyle.textContent = `
    @keyframes manaParticle {
        0% {
            transform: translate(-50%, -50%);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty)));
            opacity: 0;
        }
    }
    
    @keyframes auraFadeIn {
        to {
            opacity: 1;
        }
    }
    
    @keyframes manaPulse {
        0% {
            width: 0;
            height: 0;
            opacity: 0.5;
        }
        100% {
            width: 400px;
            height: 400px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(manaStyle);

/* ====================================
   RIPPLE EFFECT
   ==================================== */
function createRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(0, 229, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

/* ====================================
   TYPEWRITER EFFECT (Optional)
   ==================================== */
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/* ====================================
   PARALLAX EFFECT
   ==================================== */
function initParallax() {
    const hero = document.querySelector('.hero-section');
    const knight = document.querySelector('.knight-container');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            const parallaxValue = scrolled * 0.5;
            knight.style.transform = `translateY(${parallaxValue}px)`;
        }
    });
}

// Initialize parallax
initParallax();

/* ====================================
   CURSOR EFFECTS (Optional Enhancement)
   ==================================== */
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.innerHTML = `
        <div class="cursor-dot"></div>
        <div class="cursor-ring"></div>
    `;
    document.body.appendChild(cursor);
    
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .custom-cursor {
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
        }
        
        .cursor-dot {
            position: absolute;
            width: 8px;
            height: 8px;
            background: #00E5FF;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
        
        .cursor-ring {
            position: absolute;
            width: 40px;
            height: 40px;
            border: 2px solid rgba(0, 229, 255, 0.5);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.2s, height 0.2s;
        }
        
        .cursor-ring.expanded {
            width: 60px;
            height: 60px;
            border-color: rgba(108, 99, 255, 0.5);
        }
    `;
    document.head.appendChild(cursorStyle);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Expand cursor on interactive elements
    const interactives = document.querySelectorAll('a, button, .skill-card, .project-card');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.querySelector('.cursor-ring').classList.add('expanded');
        });
        el.addEventListener('mouseleave', () => {
            cursor.querySelector('.cursor-ring').classList.remove('expanded');
        });
    });
}

// Uncomment to enable custom cursor
// initCustomCursor();

/* ====================================
   LOADING ANIMATION
   ==================================== */
window.addEventListener('load', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    setTimeout(() => {
        const heroCard = document.querySelector('.hero-card');
        const knight = document.querySelector('.knight-container');
        
        if (heroCard) {
            heroCard.style.opacity = '1';
            heroCard.style.transform = 'translateX(0)';
        }
        
        if (knight) {
            knight.style.opacity = '1';
            knight.style.transform = 'translateX(0)';
        }
    }, 100);
});

// Add loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) .hero-card {
        opacity: 0;
        transform: translateX(50px);
    }
    
    body:not(.loaded) .knight-container {
        opacity: 0;
        transform: translateX(-50px);
    }
    
    .hero-card,
    .knight-container {
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
`;
document.head.appendChild(loadingStyle);

/* ====================================
   SOUND EFFECTS (Optional)
   ==================================== */
function playSlashSound() {
    // Create audio context for sound effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

/* ====================================
   MOBILE MENU (For smaller screens)
   ==================================== */
function initMobileMenu() {
    const nav = document.querySelector('.nav-glass');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger menu
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    hamburger.style.cssText = `
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
    `;
    
    const hamburgerStyle = document.createElement('style');
    hamburgerStyle.textContent = `
        .hamburger span {
            display: block;
            width: 25px;
            height: 2px;
            background: var(--neon-blue);
            transition: all 0.3s ease;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }
        
        @media (max-width: 768px) {
            .hamburger {
                display: flex !important;
            }
            
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                flex-direction: column;
                background: rgba(11, 15, 25, 0.95);
                backdrop-filter: blur(20px);
                padding: 20px;
                border-radius: 0 0 24px 24px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-20px);
                transition: all 0.3s ease;
            }
            
            .nav-links.active {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(hamburgerStyle);
    
    nav.appendChild(hamburger);
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

initMobileMenu();

console.log('⚔️ THE AWAKENED KNIGHT Portfolio Loaded ⚔️');
