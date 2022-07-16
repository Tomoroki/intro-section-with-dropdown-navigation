
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
    
    // REMOVE MENU MOBILE ON MENU__LINK
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
    // REMOVE MENU MOBILE ON MENU__ITEM--LINK
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
    // REMOVE MENU MOBILE ON MENU__FORM
    const menuForm = document.querySelectorAll('.menu__form');
    function linkAction() {
        navMenu.classList.remove('menu__links--show');
    }
    menuForm.forEach(link => {
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
    const navLinks = document.querySelectorAll('.menu__link');
    function linkAction() {
        companyA.classList.remove('show--p');
        featuresA.classList.remove('show--p');
    }
    navLinks.forEach(link => {
        link.addEventListener('click', linkAction);
        link.addEventListener("click", () => {
            navFeatures.classList.remove("show");
            navCompany.classList.remove("show");
        });
    });
})();

// dropdown();
