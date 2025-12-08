let header          = document.querySelector('header'),
    headerMenuLinks = document.querySelectorAll('.header-menu li a'),
    headerMenu      = document.querySelector('.header-menu'),
    menuNavItems    = document.querySelectorAll('.menu-nav_item'),
    menuNav         = document.querySelector('.menu-nav'),
    menuLists       = document.querySelectorAll('.menu-list');


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



// Начало функции меню разделов меню

if (menuNav) {
    menuNavItems.forEach((el, idx) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            menuNavItems.forEach(i => i.classList.remove('active'));
            el.classList.add('active');
            menuNav.style.setProperty('--n-menu-indicator-left', `calc(((100% / 7) / 2) + (100% / 7 * ${idx}))`);
        });
    })
} else {
    console.warn('Menu nav container not found: .menu-nav');
};

function selectCategory(catId) {
    catId = document.querySelector('#' + catId);
    menuLists.forEach(list => {list.classList.remove('active');});
    catId.classList.add('active');
}



const setsCategory = document.querySelector('#setsCategory'),
    setsCategoryData = {
        set_1: {
            identifier: 'Три пиццы от 80',
            imgSrc: './src/img/triple-pizza.png',
            description: 'Выбирайте любые три пиццы (20 см) по выгодной цене от 80 000 сум',
            price: 'от 80 000 сум'
        },
        set_2: {
            identifier: 'Три пиццы от 80',
            imgSrc: './src/img/triple-pizza.png',
            description: 'Выбирайте любые три пиццы (20 см) по выгодной цене от 80 000 сум',
            price: 'от 80 000 сум'
        },
        set_3: {
            identifier: 'Три пиццы от 80',
            imgSrc: './src/img/triple-pizza.png',
            description: 'Выбирайте любые три пиццы (20 см) по выгодной цене от 80 000 сум',
            price: 'от 80 000 сум'
        },
        set_4: {
            identifier: 'Три пиццы от 80',
            imgSrc: './src/img/triple-pizza.png',
            description: 'Выбирайте любые три пиццы (20 см) по выгодной цене от 80 000 сум',
            price: 'от 80 000 сум'
        },
        set_5: {
            identifier: 'Три пиццы от 80',
            imgSrc: './src/img/triple-pizza.png',
            description: 'Выбирайте любые три пиццы (20 см) по выгодной цене от 80 000 сум',
            price: 'от 80 000 сум'
        },
        set_6: {
            identifier: 'Три пиццы от 80',
            imgSrc: './src/img/triple-pizza.png',
            description: 'Выбирайте любые три пиццы (20 см) по выгодной цене от 80 000 сум',
            price: 'от 80 000 сум'
        },
        set_7: {
            identifier: 'Три пиццы от 80',
            imgSrc: './src/img/triple-pizza.png',
            description: 'Выбирайте любые три пиццы (20 см) по выгодной цене от 80 000 сум',
            price: 'от 80 000 сум'
        },
        set_8: {
            identifier: 'Три пиццы от 80',
            imgSrc: './src/img/triple-pizza.png',
            description: 'Выбирайте любые три пиццы (20 см) по выгодной цене от 80 000 сум',
            price: 'от 80 000 сум'
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
        },
        pizza_5: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        pizza_6: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        pizza_7: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        },
        pizza_8: {
            identifier: 'Пепперони',
            imgSrc: './src/img/peperoni.png',
            description: 'Пепперони, сыр моцарелла и томатный соус',
            price: 'от 50 000 сум'
        }
    };

const snacksCategory = document.querySelector('#snacksCategory'),
    snacksCategoryData = {
        snack_1: {
            identifier: 'Картошка фри',
            imgSrc: './src/img/kartoshka-fri.png',
            description: 'Хрустящая картошка фри прямо из печи',
            price: '19 000 сум'
        },
        snack_2: {
            identifier: 'Картошка фри',
            imgSrc: './src/img/kartoshka-fri.png',
            description: 'Хрустящая картошка фри прямо из печи',
            price: '19 000 сум'
        },
        snack_3: {
            identifier: 'Картошка фри',
            imgSrc: './src/img/kartoshka-fri.png',
            description: 'Хрустящая картошка фри прямо из печи',
            price: '19 000 сум'
        },
        snack_4: {
            identifier: 'Картошка фри',
            imgSrc: './src/img/kartoshka-fri.png',
            description: 'Хрустящая картошка фри прямо из печи',
            price: '19 000 сум'
        },
        snack_5: {
            identifier: 'Картошка фри',
            imgSrc: './src/img/kartoshka-fri.png',
            description: 'Хрустящая картошка фри прямо из печи',
            price: '19 000 сум'
        },
        snack_6: {
            identifier: 'Картошка фри',
            imgSrc: './src/img/kartoshka-fri.png',
            description: 'Хрустящая картошка фри прямо из печи',
            price: '19 000 сум'
        },
        snack_7: {
            identifier: 'Картошка фри',
            imgSrc: './src/img/kartoshka-fri.png',
            description: 'Хрустящая картошка фри прямо из печи',
            price: '19 000 сум'
        },
        snack_8: {
            identifier: 'Картошка фри',
            imgSrc: './src/img/kartoshka-fri.png',
            description: 'Хрустящая картошка фри прямо из печи',
            price: '19 000 сум'
        }
    };

const drinksCategory = document.querySelector('#drinksCategory'),
    drinksCategoryData = {
        drink_1: {
            identifier: 'Coca-Cola 0,5 л',
            imgSrc: './src/img/coca-cola05.png',
            price: '10 000 сум'
        },
        drink_2: {
            identifier: 'Coca-Cola 0,5 л',
            imgSrc: './src/img/coca-cola05.png',
            price: '10 000 сум'
        },
        drink_3: {
            identifier: 'Coca-Cola 0,5 л',
            imgSrc: './src/img/coca-cola05.png',
            price: '10 000 сум'
        },
        drink_4: {
            identifier: 'Coca-Cola 0,5 л',
            imgSrc: './src/img/coca-cola05.png',
            price: '10 000 сум'
        },
        drink_5: {
            identifier: 'Coca-Cola 0,5 л',
            imgSrc: './src/img/coca-cola05.png',
            price: '10 000 сум'
        },
        drink_6: {
            identifier: 'Coca-Cola 0,5 л',
            imgSrc: './src/img/coca-cola05.png',
            price: '10 000 сум'
        },
        drink_7: {
            identifier: 'Coca-Cola 0,5 л',
            imgSrc: './src/img/coca-cola05.png',
            price: '10 000 сум'
        },
        drink_8: {
            identifier: 'Coca-Cola 0,5 л',
            imgSrc: './src/img/coca-cola05.png',
            price: '10 000 сум'
        }
    };

const saladsCategory = document.querySelector('#saladsCategory'),
    saladsCategoryData = {
        salad_1: {
            identifier: 'Салат "Цезарь"',
            imgSrc: './src/img/cezar-salad.png',
            price: '29 000 сум'
        },
        salad_2: {
            identifier: 'Салат "Цезарь"',
            imgSrc: './src/img/cezar-salad.png',
            price: '29 000 сум'
        },
        salad_3: {
            identifier: 'Салат "Цезарь"',
            imgSrc: './src/img/cezar-salad.png',
            price: '29 000 сум'
        },
        salad_4: {
            identifier: 'Салат "Цезарь"',
            imgSrc: './src/img/cezar-salad.png',
            price: '29 000 сум'
        },
        salad_5: {
            identifier: 'Салат "Цезарь"',
            imgSrc: './src/img/cezar-salad.png',
            price: '29 000 сум'
        },
        salad_6: {
            identifier: 'Салат "Цезарь"',
            imgSrc: './src/img/cezar-salad.png',
            price: '29 000 сум'
        },
        salad_7: {
            identifier: 'Салат "Цезарь"',
            imgSrc: './src/img/cezar-salad.png',
            price: '29 000 сум'
        },
        salad_8: {
            identifier: 'Салат "Цезарь"',
            imgSrc: './src/img/cezar-salad.png',
            price: '29 000 сум'
        }
    };

const dessertsCategory = document.querySelector('#dessertsCategory'),
    dessertsCategoryData = {
        dessert_1: {
            identifier: 'Шоколадный чизкейк',
            imgSrc: './src/img/chocolate-cheesecake.png',
            price: '24 000 сум'
        },
        dessert_2: {
            identifier: 'Шоколадный чизкейк',
            imgSrc: './src/img/chocolate-cheesecake.png',
            price: '24 000 сум'
        },
        dessert_3: {
            identifier: 'Шоколадный чизкейк',
            imgSrc: './src/img/chocolate-cheesecake.png',
            price: '24 000 сум'
        },
        dessert_4: {
            identifier: 'Шоколадный чизкейк',
            imgSrc: './src/img/chocolate-cheesecake.png',
            price: '24 000 сум'
        },
        dessert_5: {
            identifier: 'Шоколадный чизкейк',
            imgSrc: './src/img/chocolate-cheesecake.png',
            price: '24 000 сум'
        },
        dessert_6: {
            identifier: 'Шоколадный чизкейк',
            imgSrc: './src/img/chocolate-cheesecake.png',
            price: '24 000 сум'
        },
        dessert_7: {
            identifier: 'Шоколадный чизкейк',
            imgSrc: './src/img/chocolate-cheesecake.png',
            price: '24 000 сум'
        },
        dessert_8: {
            identifier: 'Шоколадный чизкейк',
            imgSrc: './src/img/chocolate-cheesecake.png',
            price: '24 000 сум'
        }
    };
        
const saucesCategory = document.querySelector('#saucesCategory'),
    saucesCategoryData = {
        sauce_1: {
            identifier: 'Барбекю соус',
            imgSrc: './src/img/barbecue-sauce.png',
            price: '5 000 сум'
        },
        sauce_2: {
            identifier: 'Барбекю соус',
            imgSrc: './src/img/barbecue-sauce.png',
            price: '5 000 сум'
        },
        sauce_3: {
            identifier: 'Барбекю соус',
            imgSrc: './src/img/barbecue-sauce.png',
            price: '5 000 сум'
        },
        sauce_4: {
            identifier: 'Барбекю соус',
            imgSrc: './src/img/barbecue-sauce.png',
            price: '5 000 сум'
        },
        sauce_5: {
            identifier: 'Барбекю соус',
            imgSrc: './src/img/barbecue-sauce.png',
            price: '5 000 сум'
        },
        sauce_6: {
            identifier: 'Барбекю соус',
            imgSrc: './src/img/barbecue-sauce.png',
            price: '5 000 сум'
        },
        sauce_7: {
            identifier: 'Барбекю соус',
            imgSrc: './src/img/barbecue-sauce.png',
            price: '5 000 сум'
        },
        sauce_8: {
            identifier: 'Барбекю соус',
            imgSrc: './src/img/barbecue-sauce.png',
            price: '5 000 сум'
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
                <div class="menu-list_item-price">${cat.price}</div>
            </div>
        </div>
    `
    ).join('')}
`;

// Конец функции меню разделов меню