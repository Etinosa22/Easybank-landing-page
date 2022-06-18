const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-list ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navbar.classList.toggle('open');
})