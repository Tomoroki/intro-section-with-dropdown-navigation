
(function () {
    const navToggle = document.querySelector('.menu__hamburger');
    const navMenu = document.querySelector('.menu__items');

    // MENU SHOW
    // Validade if constant exists
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('menu__links--show');
            navToggle.classList.toggle("is-active");
        });
    };
    
    // REMOVE MENU MOBILE
    const navLinks = document.querySelectorAll('.menu__link');
    function linkAction() {
        navMenu.classList.remove('menu__links--show');
    }
    navLinks.forEach(link => {
        link.addEventListener('click', linkAction);
        link.addEventListener("click", () => {
            navToggle.classList.remove("is-active");
        });
    });

    const itemLink = document.querySelectorAll('.menu__item--link');
    function linkAction() {
        navMenu.classList.remove('menu__links--show');
    }
    itemLink.forEach(link => {
        link.addEventListener('click', linkAction);
        link.addEventListener("click", () => {
            navToggle.classList.remove("is-active");
        });
    });
})();


(function dropdownNav() { 
    const navFeatures = document.querySelector('.features');
    const navCompany = document.querySelector('.company');
    const dropFeatures = document.querySelector('.dropdown__features');
    const dropCompany = document.querySelector('.dropdown__company');
    const featuresA = document.querySelector('.features--a');
    const companyA = document.querySelector('.company--a');
    
    dropFeatures.addEventListener('click', () => {
        navFeatures.classList.toggle('show');
        featuresA.classList.toggle('show--p');
    });
    dropCompany.addEventListener('click', () => {
        navCompany.classList.toggle('show');
        companyA.classList.toggle('show--p');
    });
})();

// dropdown();
