/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', () => {
  // Tabs
  let tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', function (event) {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); //timer

  const deadline = '2021-12-31'; //задаём крайнюю дату до которой будет считать таймер, именно в виде такой строки так как в проектах в основном в таком виде приоходит в результате парсинга

  function getTimeRemaining(endtime) {
    // создаём функцию которая будет высчитывать разницу во времени
    const t = Date.parse(endtime) - Date.parse(new Date()); //превращаем строку в числовое, получаем кол-во милисекунд  отнимаем сегодняшнюю дату

    const days = Math.floor(t / (1000 * 60 * 60 * 24)),
          //получение кол-ва дней
    //делим на 1000 что б получить секунды из миллисекунд
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
          //получаем остаток кот-ый не влез в текущие сутки
    minutes = Math.floor(t / 1000 / 60 % 60),
          seconds = Math.floor(t / 1000 % 60); //для вывода значений функции наружу возвращаем объект

    return {
      'total': t,
      //общее кол-во миллисекунд и присваем переменной t, будет нажна для проверки не закончился ли таймер
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  } //функция которая будет проверять и подставлять нули перед односложными числами, для красоты отображения напр 01 а не 1


  function getZero(num) {
    if (num >= 0 && num < 10) {
      //проверка что б пришло число и оно меньше 10
      return `0${num}`;
    } else {
      return num; //если число 20 30 или в этом духе вернуть num без изменений
    }
  }

  function setClock(selector, endtime) {
    //установка наших часов
    const timer = document.querySelector(selector),
          //установка таймера
    days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(udpateClock, 1000); //создаем переменную для того чтобы функция updateClock() вызывалась каждую секунду

    udpateClock(); //вызываем первый раз вручную что б не мигала верста и старт отсчета установился сразу а не через 1000 милисек

    function udpateClock() {
      //ф-я обновляет наш таймер каждую секунду
      //первым делом расчет сколько осталось времени
      const t = getTimeRemaining(endtime); //и передаем деад лайн который будем передавать setclock();
      //и тем самым мы получили разницу во времени

      days.innerHTML = getZero(t.days); //отображаем на странице кол-во дней которых осталось

      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds); //условия для того чтобы остановить таймер при достижении дефдлайна

      if (t.total <= 0) {
        //еесли время вышло то не обновляем наш таймер
        clearInterval(timeInterval); //остановка таймера
      }
    }
  }

  setClock('.timer', deadline); //modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
        //кнопки вызывающие модальное окно
  modal = document.querySelector('.modal'),
        // непослердсетенно само мод окно
  modalCloseBtn = document.querySelector('[data-close]'); //крестик закрывающий модальное окно

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ""; //оставляем поле пустым брузерр сам примит решение какое подставить занчение hidden or not по дефолту
  }

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; //чтоб при открытом окне не скролилась страница
    //очищаем интервал если пользователь сам открыл модальное окно

    clearInterval(modalTimeId);
  }

  modalCloseBtn.addEventListener('click', closeModal); //закрытие модального окна при нажатии на любую точку сайта кнопку ESC

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal(); //вызываем функции когда условие истинно
    }
  }); //закрытие модального окна при нажатии на кнопку ESC

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      //проверяем четко что нажатая кн будет строка Эскейп
      //что бы найти правильный код клавиш можно загуглить
      //contains означает что сработка будет только когда мод окно открыто!
      closeModal();
    }
  }); //Вывод модального окна через определенное кол-во времени
  // const modalTimeId = setTimeout(openModal, 5000);

  function showModalByScroll() {
    //показ окна мод когда скролим
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      //это значит что пользователь долистал до конца страницы минус 1 пиксель что б не было бага
      //первое условие - это видимая часть конента, скрол срава складываем с контеном слева
      openModal(); //пользователь долистал - показываем модальное окно

      window.removeEventListener('scroll', showModalByScroll); //после запуска модального сразу удаляем обработчик события что б не откр повторно
    }
  } //Если пользователь долистал страницу до конца - показать ему модально окно
  // window.addEventListener('scroll', showModalByScroll); 
  //Используем классы для карточек


  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes; //аргумент для присваивания классов, и это Массив!!

      this.transfer = 27; //статический курс валют

      this.changToUah(); //вызваем метод при формировании браузером верстки сайта

      this.parent = document.querySelector(parentSelector); //определеяем родителя куда будем пушить html структуру
      //в сво-ве this.parent лежит именно дом элемент
    }

    changToUah() {
      //метод для конвертации валют
      this.price = this.price * this.transfer;
    }

    render() {
      //метод для формирования верстки на сайти динамически
      const element = document.createElement('div'); //создаем структуру и помещаем ее в определенный див
      //создаем условие которое назначит класс по умолчанию если вдруг не передастя в метод render() в виде параметра

      if (this.classes.length === 0) {
        //если не будет передано параметр и вернется пустой массив благодаря rest
        this.element = 'menu__item'; //присваиваем класс по умолчанию

        element.classList.add(this.element);
      } else {
        //иначе если передан все таки аргументы с классами - присваиваем их
        this.classes.forEach(className => element.classList.add(className)); //проходимся по массиву и добавляем каждому элементу каждый
      }

      element.innerHTML = `
              <div class="menu__item">
                  <img src=${this.src} alt=${this.alt}>
                  <h3 class="menu__item-subtitle">${this.title}</h3>
                  <div class="menu__item-descr">${this.descr}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                      <div class="menu__item-cost">Цена:</div>
                      <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                  </div>
              </div>
          `;
      this.parent.append(element); //помещаем структуру на страницу в созданный нами DIv
    }

  } //первый способ размещение объектов DOM
  // const div = new MenuCard();
  // div.render();
  //второй четкий способ с сокращенным кодом
  //объект может судествовать без переменной, делается когда объект исп только в этом месте
  //далее этот объект удалится потому что на него не будет ссылок


  new MenuCard("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 9, '.menu .container', 'menu__item').render();
  new MenuCard("img/tabs/elite.jpg", "elite", 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 24, '.menu .container', 'menu__item').render();
  new MenuCard("img/tabs/post.jpg", "post", 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 18, '.menu .container', 'menu__item').render();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map