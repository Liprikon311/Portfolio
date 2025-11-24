let header          = document.querySelector('header'),
    headerMenuLinks = document.querySelectorAll('.header-menu li a'),
    headerMenu      = document.querySelector('.header-menu'),
    menuNavItems    = document.querySelectorAll('.menu-nav_item'),
    menuNav         = document.querySelector('.menu-nav'),
    menuLists       = document.querySelectorAll('.menu-list'),
    burgerMenuBtn     = document.querySelector('.burger-menu');


// Начало убирания хэштегов из URL

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, null, window.location.pathname);
    }
  });
});

// Конец убирания хэштегов из URL

// Начало функции header-fixed-scroll

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('fixed');
        document.querySelector('.logo').setAttribute('href', '#margin');
        document.querySelector('#mainLink').setAttribute('href', '#margin');
    }
    else {
        header.classList.remove('fixed');
        document.querySelector('.logo').setAttribute('href', '#header');
        document.querySelector('#mainLink').setAttribute('href', '#header');
    };
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    let targetId = '#mainLink';
        indicatorLeft = '40px';

    if (scrollY >= 700 && scrollY < 1500) {
        targetId = '#menuLink';
        indicatorLeft = '220px';
        headerMenuLinks.forEach(link => link.classList.remove('active'));
    } else if (scrollY >= 1500) {
        targetId = '#eventsLink';
        indicatorLeft = '400px';
        headerMenuLinks.forEach(link => link.classList.remove('active'));
    };

    const targetLink = document.querySelector(targetId);

    if (targetLink) {
        headerMenuLinks.forEach(link => link.classList.remove('active'));
        targetLink.classList.add('active')
    };

    if (headerMenu && indicatorLeft !== null) {
        headerMenu.style.setProperty('--h-menu-indicator-left', indicatorLeft);
    };
});

// Конец функции header-fixed-scroll

// Начало функции перемещения индикатора меню

if (headerMenu) {
    headerMenuLinks.forEach((el, idx) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            headerMenuLinks.forEach(link => link.classList.remove('active'));
            el.classList.add('active');
            headerMenu.style.setProperty('--h-menu-indicator-left', `calc((180px * ${idx}) + 40px)`);
        });
    });
} else {
    console.warn('Header menu container not found: .header-menu');
}

// Конец функции перемещения индикатора меню

// Начало функции меню разделов меню

if (menuNav) {
    menuNavItems.forEach((el, idx) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            menuNavItems.forEach(i => i.classList.remove('active'));
            el.classList.add('active');
            menuNav.style.setProperty('--n-menu-indicator-left', `calc(((100% / 7) / 2) + (100% / 7 * ${idx}))`);
            // menuNav.style.setProperty('--n-menu-indicator-left', `calc(((100% - (5px * 6)) / 7) / 2)`);
        });
    })
} else {
    console.warn('Menu nav container not found: .menu-nav');
};

function selectCategory(catId) {
    catId = document.querySelector('#' + catId);
    menuLists.forEach(list => {list.classList.remove('active');});
    catId.classList.add('active');
    // setTimeout(() => {
    //     menuLists.forEach(list => {list.classList.add('dis-none');});
    //     menuLists.forEach(list => {list.classList.add('dis-none');});
    //     catId.classList.remove('dis-none');
    // }, 500);
}



const setsCategory = document.querySelector('#setsCategory'),
        setsCategoryData = {
            set_1: {
                identifier: 'Пепперони',
                imgSrc: './src/img/peperoni.png',
                description: 'Пепперони, сыр моцарелла и томатный соус',
                price: 'от 50 000 сум'
            },
            set_2: {
                identifier: 'Пепперони',
                imgSrc: './src/img/peperoni.png',
                description: 'Пепперони, сыр моцарелла и томатный соус',
                price: 'от 50 000 сум'
            },
            set_3: {
                identifier: 'Пепперони',
                imgSrc: './src/img/peperoni.png',
                description: 'Пепперони, сыр моцарелла и томатный соус',
                price: 'от 50 000 сум'
            },
            set_4: {
                identifier: 'Пепперони',
                imgSrc: './src/img/peperoni.png',
                description: 'Пепперони, сыр моцарелла и томатный соус',
                price: 'от 50 000 сум'
            }
        };

const pizzaCategory = document.querySelector('#pizzaCategory'),
    pizzaCategoryData = {
        pizza_1: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        pizza_2: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        pizza_3: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        pizza_4: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        }
    };

const snacksCategory = document.querySelector('#snacksCategory'),
    snacksCategoryData = {
        snack_1: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        snack_2: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        snack_3: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        snack_4: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        }
    };

const drinksCategory = document.querySelector('#drinksCategory'),
    drinksCategoryData = {
        drink_1: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        drink_2: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        drink_3: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        drink_4: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        }
    };

const saladsCategory = document.querySelector('#saladsCategory'),
    saladsCategoryData = {
        salad_1: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        salad_2: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        salad_3: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        salad_4: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        }
    };

const dessertsCategory = document.querySelector('#dessertsCategory'),
    dessertsCategoryData = {
        dessert_1: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        dessert_2: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        dessert_3: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        dessert_4: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        }
    };
        
const saucesCategory = document.querySelector('#saucesCategory'),
    saucesCategoryData = {
        sauce_1: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        sauce_2: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        sauce_3: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        sauce_4: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        }
    };


setsCategory.innerHTML = `
    ${Object.values(setsCategoryData).map(cat => `
        <div class="menu-list_item">
            <div class="menu-list_item-img">
                <img src="${cat.imgSrc}">
            </div>
            <div class="menu-list_item-body">
                <div class="menu-list_item-title">${cat.identifier}</div>
                <div class="menu-list_item-text">${cat.description}</div>
                <div class="menu-list_item-price">${cat.price}</div>
            </div>
        </div>
    `
    ).join('')}
`;
pizzaCategory.innerHTML = `
    ${Object.values(pizzaCategoryData).map(cat => `
        <div class="menu-list_item">
            <div class="menu-list_item-img">
                <img src="${cat.imgSrc}">
            </div>
            <div class="menu-list_item-body">
                <div class="menu-list_item-title">${cat.identifier}</div>
                <div class="menu-list_item-text">${cat.description}</div>
                <div class="menu-list_item-price">${cat.price}</div>
            </div>
        </div>
    `
    ).join('')}
`;
snacksCategory.innerHTML = `
    ${Object.values(snacksCategoryData).map(cat => `
        <div class="menu-list_item">
            <div class="menu-list_item-img">
                <img src="${cat.imgSrc}">
            </div>
            <div class="menu-list_item-body">
                <div class="menu-list_item-title">${cat.identifier}</div>
                <div class="menu-list_item-text">${cat.description}</div>
                <div class="menu-list_item-price">${cat.price}</div>
            </div>
        </div>
    `
    ).join('')}
`;
drinksCategory.innerHTML = `
    ${Object.values(drinksCategoryData).map(cat => `
        <div class="menu-list_item">
            <div class="menu-list_item-img">
                <img src="${cat.imgSrc}">
            </div>
            <div class="menu-list_item-body">
                <div class="menu-list_item-title">${cat.identifier}</div>
                <div class="menu-list_item-text">${cat.description}</div>
                <div class="menu-list_item-price">${cat.price}</div>
            </div>
        </div>
    `
    ).join('')}
`;
saladsCategory.innerHTML = `
    ${Object.values(saladsCategoryData).map(cat => `
        <div class="menu-list_item">
            <div class="menu-list_item-img">
                <img src="${cat.imgSrc}">
            </div>
            <div class="menu-list_item-body">
                <div class="menu-list_item-title">${cat.identifier}</div>
                <div class="menu-list_item-text">${cat.description}</div>
                <div class="menu-list_item-price">${cat.price}</div>
            </div>
        </div>
    `
    ).join('')}
`;
dessertsCategory.innerHTML = `
    ${Object.values(dessertsCategoryData).map(cat => `
        <div class="menu-list_item">
            <div class="menu-list_item-img">
                <img src="${cat.imgSrc}">
            </div>
            <div class="menu-list_item-body">
                <div class="menu-list_item-title">${cat.identifier}</div>
                <div class="menu-list_item-text">${cat.description}</div>
                <div class="menu-list_item-price">${cat.price}</div>
            </div>
        </div>
    `
    ).join('')}
`;
saucesCategory.innerHTML = `
    ${Object.values(saucesCategoryData).map(cat => `
        <div class="menu-list_item">
            <div class="menu-list_item-img">
                <img src="${cat.imgSrc}">
            </div>
            <div class="menu-list_item-body">
                <div class="menu-list_item-title">${cat.identifier}</div>
                <div class="menu-list_item-text">${cat.description}</div>
                <div class="menu-list_item-price">${cat.price}</div>
            </div>
        </div>
    `
    ).join('')}
`;

// Конец функции меню разделов меню

// Начало функции бургер-меню

burgerMenuBtn.addEventListener('click', () => {
    burgerMenuBtn.classList.toggle('active');
    // headerMenu.classList.toggle('active');
});

// Конец функции бургер-меню