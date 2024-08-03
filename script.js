const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');







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
}




// click diluar tombol
hamburger.addEventListener('click', function () {
    navbar.classList.toggle('hidden');
});

window.addEventListener('click', function (e) {
    if(e.target != navbar && e.target != hamburger) {
        navbar.classList.add('hidden')
    }
})
