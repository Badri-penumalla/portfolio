/* --- Toggle Mobile Menu --- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Changes hamburger to X
    navbar.classList.toggle('active');
};

/* --- Scroll Active Links --- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Remove menu on scroll (mobile) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* --- Typing Effect (using Typed.js) --- */
const typed = new Typed('.auto-type', {
    strings: ['Java Full Stack Intern', 'AI & Data Science Student', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});