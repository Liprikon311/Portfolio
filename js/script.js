let burger        = document.querySelector('.burger'),
    navbar        = document.querySelector('.navbar'),
    navbarItems   = document.querySelectorAll('.navbar-item'),
    navbarElems   = document.querySelectorAll('.navbar-elem'),
    navbarLinks   = document.querySelectorAll('.navbar-link'),
    sections      = document.querySelectorAll('section'),
    homeInt       = document.querySelector('.home-int'),
    homeBtn       = document.querySelector('.home-button'),
    aboutTeqItems = document.querySelectorAll('.about-teq_item');


/* Начало скриптов бургер-меню */
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navbar.classList.toggle('active');
});
/* Конец скриптов бургер-меню */



/* Начало скриптов навигационной панели */
navbarItems.forEach(link => {
    let hoverDiv = link.querySelector('.navbar-hover');
    link.addEventListener('mouseover', () => {
        hoverDiv.classList.add('active');
    });
    link.addEventListener('mouseout', () => {
        hoverDiv.classList.remove('active');
    });
});

navbarElems.forEach(link => {
    let hoverDiv = link.querySelector('.navbar-hover');
    link.addEventListener('mouseover', () => {
        hoverDiv.classList.add('active');
    });
    link.addEventListener('mouseout', () => {
        hoverDiv.classList.remove('active');
    });
});

navbarLinks.forEach(function (link, sectionIndex) {
    link.addEventListener('click', () => {
        navbarLinks.forEach(navLink => {navLink.classList.remove('active')});
        sections.forEach(section => {section.classList.remove('visible')});
        link.classList.add('active');
        sections[sectionIndex].classList.add('visible');
    });
});

homeInt.addEventListener('click', () => {
    navbarLinks.forEach(navLink => {navLink.classList.remove('active')});
    sections.forEach(section => {section.classList.remove('visible')});
    navbarLinks[1].classList.add('active');
    sections[1].classList.add('visible');
});

homeBtn.addEventListener('click', () => {
    navbarLinks.forEach(navLink => {navLink.classList.remove('active')});
    sections.forEach(section => {section.classList.remove('visible')});
    navbarLinks[2].classList.add('active');
    sections[2].classList.add('visible');
});
/* Конец скриптов навигационной панели */



/* Начало скриптов для секции о себе */
aboutTeqItems.forEach(item => {
    item.addEventListener('mousedown', () => {
        item.classList.add('clicked');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('clicked');
    });
    item.addEventListener('mouseup', () => {
        item.classList.remove('clicked');
    });
});
/* Конец скриптов для секции о себе */


// Авто-выбор секции "Проекты" при загрузке страницы
navbarLinks.forEach(navLink => {navLink.classList.remove('active')});
    sections.forEach(section => {section.classList.remove('visible')});
    navbarLinks[2].classList.add('active');
    sections[2].classList.add('visible');