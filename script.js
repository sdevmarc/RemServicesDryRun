const btnHire = document.getElementById('btnHire');
const music = document.getElementById('music');

btnHire.addEventListener('click', () => {
    music.play();
});


let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')



// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
delay: 200
})


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



const typed = new Typed('.multiple-text', {
    strings: [' Basic Video Editing Services', ' Advanced Video Editing Services', 'Video Marketing Services'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});
