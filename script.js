document.addEventListener('DOMContentLoaded', () => {
    initLoading();
    initSnowParticles();
    initInkCanvas();
    initNavigation();
    initScrollAnimations();
    initStatCounters();
    initFormHandling();
    initMobileMenu();
});

function initLoading() {
    const loadingScreen = document.querySelector('.loading-screen');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 2500);
    });
}

function initSnowParticles() {
    const snowContainer = document.querySelector('.snow-container');
    if (!snowContainer) return;
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'snow-particle';
        const size = Math.random() * 3 + 1;
        particle.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (Math.random() * 100) + '%;opacity:' + (Math.random() * 0.5 + 0.3) + ';animation-duration:' + (Math.random() * 10 + 10) + 's;animation-delay:' + (Math.random() * 10) + 's;';
        snowContainer.appendChild(particle);
    }
}

function initInkCanvas() {
    const canvas = document.getElementById('inkCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    
    class InkParticle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.3 + 0.1;
            this.fadeSpeed = Math.random() * 0.005 + 0.002;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.opacity -= this.fadeSpeed;
            if (this.opacity <= 0 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(77, 201, 255, ' + this.opacity + ')';
            ctx.fill();
        }
    }
    
    for (let i = 0; i < 100; i++) { particles.push(new InkParticle()); }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navHeight = document.querySelector('.nav-terminal').offsetHeight;
                window.scrollTo({ top: targetSection.offsetTop - navHeight, behavior: 'smooth' });
            }
        });
    });
    
    function updateActiveNav() {
        const scrollY = window.scrollY;
        const navHeight = document.querySelector('.nav-terminal').offsetHeight;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

function initScrollAnimations() {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll('.skill-category, .project-scroll, .timeline-stage, .stats-panel, .fade-in');
    animateElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.transitionDelay = (index * 0.1) + 's';
        observer.observe(element);
    });
}

function initStatCounters() {
    const statValues = document.querySelectorAll('.stat-value');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    statValues.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
    const text = element.textContent;
    const hasPlus = text.includes('+');
    const hasK = text.includes('K');
    const numericValue = parseInt(text.replace(/[^0-9]/g, ''));
    if (isNaN(numericValue)) return;
    
    let current = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) { current = numericValue; clearInterval(timer); }
        let displayValue = Math.floor(current);
        if (hasK) displayValue += 'K';
        if (hasPlus) displayValue += '+';
        element.textContent = displayValue;
    }, 40);
}

function initFormHandling() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<span class="btn-brackets">[</span> TRANSMITTING... <span class="btn-brackets">]</span>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<span class="btn-brackets">[</span> TRANSMISSION COMPLETE <span class="btn-brackets">]</span>';
            submitBtn.style.background = 'var(--terminal-green)';
            submitBtn.style.borderColor = 'var(--terminal-green)';
            submitBtn.style.color = 'var(--ink-black)';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.style.borderColor = '';
                submitBtn.style.color = '';
                submitBtn.disabled = false;
                form.reset();
            }, 2000);
        }, 1500);
    });
}

function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
    
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const warrior = document.querySelector('.warrior-container');
    const terminal = document.querySelector('.terminal-container');
    if (scrollY < window.innerHeight) {
        if (warrior) warrior.style.transform = 'translateY(' + (scrollY * 0.1) + 'px)';
        if (terminal) terminal.style.transform = 'translateY(' + (scrollY * 0.05) + 'px)';
    }
});

console.log('%c北劍 Northern Blade Portfolio Loaded', 'color: #4dc9ff; font-size: 16px; font-weight: bold;');
