
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
const menuIcon = document.querySelector('#burger');
const navMenu = document.querySelector('#navLinks');

window.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active')) { 
        if (!navMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    }
});


    document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress');
    const observeBars = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percentage = entry.target.getAttribute('data-progress');
                entry.target.style.width = percentage;
            }
        });
    }, { threshold: 0.1 });

    progressBars.forEach(bar => observeBars.observe(bar));
});

const btn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const currentPosition = window.innerHeight + window.scrollY;
    if (currentPosition >= scrollHeight - 5) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});
btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});