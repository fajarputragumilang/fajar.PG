
// scroll
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.add('btn-toTop');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('btn-toTop');

    }
};


const darkToogle = document.querySelector('#dark-toogle');
const html = document.querySelector('html');
const navbar = document.querySelector('#navbar');
const hamburgerMenu = document.querySelector('#hamburgerMenu');


hamburgerMenu.addEventListener('click', function () {
    navbar.classList.toggle('hidden');
});

darkToogle.addEventListener('click', function() {
    if (darkToogle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark')
    }
});




