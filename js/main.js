const body               = document.querySelector('body'),
      header             = document.querySelector('.header'),
      themeToggleBtn     = document.querySelector('.header-theme'),
      burger             = document.querySelector('.header-burger'),
      menu               = document.querySelector('.header-menu'),
      menuLinks          = document.querySelectorAll('.header-menu ul li a'),
      myName             = document.querySelector('.my-name');

const aboutImgA          = document.querySelector('.about-con_img-a'),
      aboutImgB          = document.querySelector('.about-con_img-b'),
      aboutImgC          = document.querySelector('.about-con_img-c'),
      bottomArrow        = document.querySelector('.bottom-arrow img'),
      gitImg            = document.querySelector('.git-img'),
      emailImg          = document.querySelector('.email-img img'),
      telegramImg       = document.querySelector('.telegram-img img'),
      callImg           = document.querySelector('.call-img img');

const knowledgeProgressA = 6,
      knowledgeProgressB = 5,
      knowledgeProgressC = 3;

const scrollOffset       = 64,
      scrollUpBtn        = document.querySelector('.scroll-up'),
      scrollUpPath       = document.querySelector('.scroll-up svg path'),
      scrollUpPathLength = scrollUpPath.getTotalLength();



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
    if (window.scrollY > 80) {
        header.classList.add('fixed');
        document.querySelector('.logo').setAttribute('href', '#margin');
        document.querySelector('.header-menu_main').setAttribute('href', '#margin');
    }
    else {
        header.classList.remove('fixed');
        document.querySelector('.logo').setAttribute('href', '#header');
        document.querySelector('.header-menu_main').setAttribute('href', '#header');
    }
});

// Конец функции header-fixed-scroll



// Начало функции scroll up

scrollUpPath.style.strokeDasharray = `${scrollUpPathLength} ${scrollUpPathLength}`;
scrollUpPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight,
    dashOffset = scrollUpPathLength - (getTop() * scrollUpPathLength / height);
    scrollUpPath.style.strokeDashoffset = dashOffset;
};

window.addEventListener('scroll', () => {
    updateDashoffset();

    if (getTop() > scrollOffset) {
        scrollUpBtn.classList.add('active');
    }
    else {
        scrollUpBtn.classList.remove('active');
    }
});

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Конец функции scroll up



// Начало функции перемещения header-title

const headerBody = document.querySelector('.header-body');
const headerTitle = document.querySelector('.header-title');
let originalTitleIndex = Array.from(headerBody.children).indexOf(headerTitle);

function moveHeaderTitle() {
    if (window.innerWidth <= 640) {
        // Переместить в конец
        if (headerBody.lastElementChild !== headerTitle) {
            headerBody.appendChild(headerTitle);
            headerTitle.classList.add('moved');
        }
    } else {
        // Вернуть на исходное место
        if (Array.from(headerBody.children).indexOf(headerTitle) !== originalTitleIndex) {
            const refNode = headerBody.children[originalTitleIndex];
            if (refNode) {
                headerBody.insertBefore(headerTitle, refNode);
            } else {
                // Если исходного места нет, просто вставить в начало
                headerBody.insertBefore(headerTitle, headerBody.firstChild);
            }
        }
    }
}

// Конец функции перемещения header-title



// Начало функции burger меню

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
    });
});

// Конец функции burger меню



// Начало функции смены темы

themeToggleBtn.addEventListener('click', () => {
	if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    } 
    else {
        localStorage.setItem('theme', 'dark');
    };
    themeToggle();

    progressBlocks.forEach((block, idx) => {
        animateProgress(block, progressCounts[idx], themeCheck());
    });
});

function themeToggle() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark');
            themeToggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>';
            gitImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22" width="50" height="50" fill="#0f0"><path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"/></svg></svg>';
			properties.bgColor = '#1b1b1b';
			properties.particleColor = '#0f0';

            aboutImgA.src   = './src/img/me1_dark.svg';
            aboutImgB.src   = './src/img/me2_dark.svg';
            aboutImgC.src   = './src/img/me3_dark.svg';
            bottomArrow.src = './src/img/arrow-down_d.svg';
            emailImg.src    = './src/img/mail_d.svg';
            telegramImg.src = './src/img/telegram_d.svg';
            callImg.src     = './src/img/call_d.svg';
        }
        else {
            body.classList.remove('dark');
            themeToggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>';
            gitImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22" width="50" height="50" fill="#000"><path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"/></svg></svg>';
			properties.bgColor = '#fff';
			properties.particleColor = '#000';

            aboutImgA.src   = './src/img/me1_light.svg';
            aboutImgB.src   = './src/img/me2_light.svg';
            aboutImgC.src   = './src/img/me3_light.svg';
            bottomArrow.src = './src/img/arrow-down_l.svg';
            emailImg.src    = './src/img/mail_l.svg';
            telegramImg.src = './src/img/telegram_l.svg';
            callImg.src     = './src/img/call_l.svg';
        }
    } catch (err) { }
};

themeToggle();

// Конец функции смены темы



// Начало функции клика по my-name

if (w > 768) {
    myName.addEventListener('mousedown', () => {
        myName.classList.remove('mouse-up');
        myName.classList.add('mouse-down');
    });
    
    myName.addEventListener('mouseup', () => {
        myName.classList.remove('mouse-down');
        myName.classList.add('mouse-up');
    });
}

// Конец функции клика по my-name



// Начало функции уровня знаний

function setSizes() {
  const titles = document.querySelectorAll('.about-cont_title');
  const elems = document.querySelectorAll('.about-cont_elem');

  // 1. Найти максимальную ширину
  let biggestTitle = 0;
  titles.forEach(title => {
    const width = title.offsetWidth;
    if (width > biggestTitle) biggestTitle = width;
  });

  // 2. Задать максимальную ширину всем заголовкам
  titles.forEach(title => {
    title.style.width = biggestTitle + 'px';
  });

  // 3. Задать ширину прогресс-блокам и каждому progress_el
  elems.forEach(elem => {
    const progress = elem.querySelector('.about-cont_progress');
    if (progress) {
        const elemWidth = elem.offsetWidth,
              gap = 1; // ширина отступа между progress_el

        // Задаем ширину прогресс-блоку
        progress.style.width = (elemWidth - biggestTitle - 30 - gap * 9) + 'px';

        const progressEls = progress.querySelectorAll('.progress_el');
        // Задаем ширину каждому progress_el
        const progressElWidth = ((elemWidth - biggestTitle - gap * 9) / 10);
        progressEls.forEach((el, idx) => {
            el.style.width = progressElWidth + 'px';
            if (idx < 9) el.style.marginRight = gap + 'px';
            else el.style.marginRight = '0';
        });
    }
  });
}

function animateProgress(container, count, color) {
  const items = container.querySelectorAll('.progress_el');
  items.forEach((el, i) => {
    el.style.setProperty('--progress-color', color);
    if (i < count) {
      setTimeout(() => {
        el.classList.add('animated');
      }, i * 150);
    } else {
      el.classList.remove('animated');
      el.style.backgroundColor = '#fff';
    }
  });
}

const progressBlocks = document.querySelectorAll('.about-cont_progress');
const progressCounts = [knowledgeProgressA, knowledgeProgressB, knowledgeProgressC];

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      const idx = Array.from(progressBlocks).indexOf(entry.target);
      animateProgress(entry.target, progressCounts[idx], themeCheck());
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

progressBlocks.forEach((block, idx) => observer.observe(block));

function themeCheck() {
  if (localStorage.getItem('theme') === 'dark') {
    return '#0f0';
  } else {
    return '#1b1b1b'
  }
}

// Конец функции уровня знаний



// Начало функции портфолио

const portfolioInfo      = document.querySelector('.portfolio-info'),
      portfolioItemsData = {
            PizzaShop: {
                name: 'pizzashop',
                imgSrc: './src/img/pizzashop.png',
                description: 'Удобный и функциональный сайт для заказа пиццы онлайн с адаптивным дизайном.',
                link: '../websites/pizzashop/main.html'
            }
      };

portfolioInfo.innerHTML = `
    ${Object.values(portfolioItemsData).map(project => `
        <div class="portfolio-info_item">
            <div class="portfolio-info_img">
                <img src="${project.imgSrc}">   
            </div>
            <div class="portfolio-info_body">
                <h3 class="portfolio-info_title">${project.name}</h3>
                <p class="portfolio-info_text">${project.description}</p>
                <a href="${project.link}" class="portfolio-info_link">Подробнее</a>
            </div>
        </div>
    `
    ).join('')}
`;

// Конец функции портфолио



// Начало функции копирования текста по клику

const email = document.querySelector('.email'),
      telegram = document.querySelector('.telegram'),
      call = document.querySelector('.call'),
      textCopied = document.querySelector('.text-copied');

function textCope(text) {
	const textarea = document.createElement('textarea');
    
	textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
};

function getCursorPos(e) {
    let x = e.pageX + 15;
    let y = e.pageY - 20;

    textCopied.style.left = x + 'px';
    textCopied.style.top = y + 'px';
};

email.addEventListener('click', (elem) => {
	let t = 'odylbek311@gmail.com';
	textCope(t);
    getCursorPos(elem);

    textCopied.classList.add('active');
    setTimeout(() => {
        textCopied.classList.remove('active');
    }, 1000);
});

telegram.addEventListener('click', (elem) => {
	let t = '@odil311';
	textCope(t);
    getCursorPos(elem);

    textCopied.classList.add('active');
    setTimeout(() => {
        textCopied.classList.remove('active');
    }, 1000);
});
call.addEventListener('click', (elem) => {
	let t = '+998954354885';
	textCope(t);
    getCursorPos(elem);

    textCopied.classList.add('active');
    setTimeout(() => {
        textCopied.classList.remove('active');
    }, 1000);
});

// Конец функции копирования текста по клику



// Вызовы при загрузке
moveHeaderTitle();
setSizes();

// Вызовы при изменении размера окна
window.addEventListener('resize', moveHeaderTitle);
window.addEventListener('resize', setSizes);