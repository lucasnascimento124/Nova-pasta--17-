
gsap.registerPlugin(ScrollTrigger);

// Animação para os cards de serviço
gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out'
    });
});

// Animação para a seção de contato
gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

// Interação do formulário
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simular envio do formulário
    const btn = form.querySelector('.btn');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = 'Mensagem Enviada!';
        btn.style.backgroundColor = '#4CAF50';
        
        // Resetar o formulário após 3 segundos
        setTimeout(() => {
            form.reset();
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
            btn.disabled = false;
        }, 3000);
    }, 2000);
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

