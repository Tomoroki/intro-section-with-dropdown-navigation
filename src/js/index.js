
(function () {
    const navMenu = document.querySelector('.menu__items');
    const navToggle = document.querySelector('.menu__hamburger');
    const navClose = document.querySelector('.menu__close');

    // MENU SHOW
    // Validade if constant exists
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('menu__links--show');
        });
    };
    // MENU HIDDEN
    // Validade if constant exists
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('menu__links--show');
        });
    }
    // REMOVE MENU MOBILE
    const navLinks = document.querySelectorAll('.menu__link');
    function linkAction() {
        navMenu.classList.remove('menu__links--show');
    }
    navLinks.forEach((link) => {
        link.addEventListener('click', linkAction);
    });
})();

(function dropdownNav() { 
    const navTitle = document.querySelector('.menu__test--title');
    const navParagraph = document.querySelector('.menu__test--p');
    if (navTitle) {
        navTitle.addEventListener('click', () => {
            navParagraph.classList.toggle('show--p');
        });
    }
})();

// dropdown();
