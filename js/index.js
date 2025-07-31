document.addEventListener("DOMContentLoaded", function () {
  // Кэширование DOM-элементов
  const selectInternet = document.getElementById("select-internet");
  const fillInternet = document.getElementById("internet-fill");
  const sliderRout = document.getElementById("slider-rout");
  const selectRout = document.getElementById("select-rout");
  const fillRout = document.getElementById("rout-fill");
  const sliderTv = document.getElementById("slider-tv");
  const selectTv = document.getElementById("select-tv");
  const fillTV = document.getElementById("tv-fill");
  const rout = document.getElementById("rout");
  const textInet = document.getElementsByClassName("value-tariffs");
  const priceDisplay = document.getElementById("final-price");
  const tv = document.getElementById("tv");
  const box = document.getElementById("box");
  const movie = document.getElementById("movie");
  const toggle = document.querySelectorAll("input[type=checkbox], input[type=radio]");
  const tvBox = document.getElementsByName("tvBox");
  const cookie = document.getElementById("cookie");
  const cookieReject = document.getElementById("cookie-reject");
  const cookieAccept = document.getElementById("cookie-accept");




  let basePrice = 0;
  let cableTVText = "Без ТВ";  // Текущий текст для ТВ-слайдера

  // Объект с тарифами. В разделе router добавлено специальное значение для роутера 5 ГГц,
  // а в разделе tv – дисконтированная цена для расширенного пакета.
  const prices = {
    internet: {
      nonInternet: 0,     // Нет интернета
      Internet50: 18.9,   // 50 мб/с
      Internet100: 28.8,  // 100 мб/с
      Internet250: 37.7   // 250 мб/с
    },
    router: {
      noRouter: 0,        // Без роутера
      router2_4: 0.9,     // Роутер 2.4 ГГц
      router5: 1.9,       // Роутер 5 ГГц
      router5Special: 3.9 // Роутер 5 ГГц при тарифе 250 мб/с (1Гбит/с)
    },
    tv: {
      noTV: 0,                  // Без ТВ
      basicTV: 3.6,             // Базовый пакет (12 каналов)
      extendedTV: 12,           // Расширенный пакет (105 каналов)
      extendedTVDiscount: 5.4   // Дисконтированная цена для расширенного ТВ при интернете
    },
    options: {
      tvInteractive: 12,  // Интерактивное ТВ (checkbox)
      tvFullHD: 3,        // ТВ-приставка FULL HD
      tv4k: 6             // ТВ-приставка 4K
    }
  };

  // Функция fullLength для корректировки отображения слайдера (например, при выборе тарифа 250 мб/с)
  function fullLength(slide, select, fill) {
    if (window.innerWidth < 768) {
      select.style.left = (slide.value - 7) + '%';
      fill.style.width = (slide.value - 5) + '%';
    } else {
      select.style.left = (slide.value - 4) + '%';
      fill.style.width = `${slide.value - 2}%`


    }



    // slide.style.background = `linear-gradient(to right, #00abfe ${slide.value - 2}%, #bbbbbb ${slide.value - 2}%)`;
  }

  // Функция обновления отображения ТВ-опций
  function updateTVDisplay() {
    let parts = [];
    const tvInteractive = document.getElementById("tvInteractive");
    if (tvInteractive && tvInteractive.checked) {
      parts.push("Интерактивное ТВ (170 каналов)");
    }
    if (cableTVText && cableTVText !== "Без ТВ") {
      parts.push(cableTVText);
    }
    if (parts.length === 0 && cableTVText) {
      parts.push(cableTVText);
    }
    tv.textContent = parts.join(" + ");
  }

  // Функция обновления подписи для роутера.
  // Если выбран роутер 5 ГГц (sliderRout.value === "100"),
  // то если интернет выбран 250 мб/с – выводится "Роутер 5ГГц 1Гбит/с", иначе "+ Роутер 5 ГГц".
  function updateRouterDisplay() {
    if (sliderRout.value === "100") {
      let internetSpeed;
      if (sliderInternet.value === "0") {
        internetSpeed = "Без интернета";
      } else if (sliderInternet.value === "33.33") {
        internetSpeed = "50 мб/с";
      } else if (sliderInternet.value === "66.66") {
        internetSpeed = "100 мб/с";
      } else {
        internetSpeed = "250 мб/с";
      }
      if (internetSpeed === "250 мб/с") {
        rout.textContent = "Роутер 5ГГц 1Гбит/с";
      } else {
        rout.textContent = "+ Роутер 5 ГГц";
      }
    } else if (sliderRout.value === "50") {
      rout.textContent = "+ Роутер 2.4 ГГц";
    } else {
      rout.textContent = "";
    }
  }

  // Функция перерасчёта итоговой цены
  // Для ТВ применяется скидка, если выбран расширенный пакет и интернет не "0".
  // Для роутера в функции getRouterKey выбирается специальный тариф при тарифе 250 мб/с.
  function updatePrice() {
    let totalPrice = basePrice;

    function getInternetKey(value) {
      if (value === "0") return "nonInternet";
      else if (value === "33.33") return "Internet50";
      else if (value === "66.66") return "Internet100";
      else return "Internet250";
    }
    function getRouterKey(value) {
      if (value === "0") return "noRouter";
      else if (value === "50") return "router2_4";
      else if (value === "100") {
        return sliderInternet.value === "100" ? "router5Special" : "router5";
      }
    }
    function getTvKey(value) {
      if (value === "0") return "noTV";
      else if (value === "50") return "basicTV";
      else if (value === "100") return "extendedTV";
    }
if (document.getElementById("slider-internet")) {
  
  totalPrice += prices.internet[getInternetKey(document.getElementById("slider-internet").value)] || 0;
} else {
  totalPrice += prices.internet[getInternetKey('33.33')] || 0;
}
    totalPrice += prices.router[getRouterKey(sliderRout.value)] || 0;

    let tvKey = getTvKey(sliderTv.value);
    let tvPrice = prices.tv[tvKey] || 0;
    if (tvKey === "extendedTV" && document.getElementById("slider-internet").value !== "0") {
      tvPrice = prices.tv.extendedTVDiscount;
    } 
    
    totalPrice += tvPrice;

    toggle.forEach(input => {
      if (input.checked) {
        totalPrice += prices.options[input.id] || 0;
      }
    });
    priceDisplay.textContent = `${totalPrice.toFixed(2)} р./ месяц`;
  }

  // Функция обработки изменений слайдеров
  function change(slide, select, fill) {

    // Общий стандарт обновления стилей для слайдеров, кроме интернет-слайдера
    // if (slide.id !== "slider-internet") {
    //   const val = parseFloat(slide.value);
    //   select.style.left = `calc(${val}% - ${select.offsetWidth / 2}px)`;
    //   fill.style.width = `${slide.value}%`
    // } else {
    //   // Для интернет-слайдера – исходное позиционирование
    select.style.left = slide.value - 1 + "%";
    fill.style.width = `${Number(slide.value) + 2}%`
    // }
    if (slide.id === "slider-internet") {
      let speed = "";
      if (slide.value === "0") speed = "Без интернета";
      else if (slide.value === "33.33") speed = "50 мб/с";
      else if (slide.value === "66.66") speed = "100 мб/с";
      else speed = "250 мб/с";


      // Если выбран тариф 250 мб/с, то если на роутере сейчас стоит 2.4 ГГц, переводим его в 5 ГГц
      if (speed === "250 мб/с") {
        fullLength(slide, select, fill);
        if (sliderRout.value === "50") {
          // Переключаем роутер в режим 5 ГГц
          if (window.innerWidth < 768) {
            selectRout.style.left = (slide.value - 7) + '%';
            sliderRout.value = "100";
            fillRout.style.width = (slide.value - 5) + '%';
          } else {
            selectRout.style.left = (slide.value - 4) + '%';
            sliderRout.value = "100";
            fillRout.style.width = (slide.value - 2) + '%';
          }
        }
      }
      textInet[0].textContent = slide.value === "0" ? "Без интернета" : `Тариф ${speed}`;
      textInet[1].textContent = slide.value === "0" ? "Без интернета" : `Интернет ${speed}`;

    } else if (slide.id === "slider-rout") {
      sliderRout.step = sliderInternet.value === "99.99" ? "100" : "50";
      if (slide.value === "100") {
        fullLength(slide, select, fill);
      }
    } else if (slide.id === "slider-tv") {
      let tvText = "";
      if (slide.value === "0") {
        tvText = "Без ТВ";
      } else if (slide.value === "50") {
        tvText = "Базовый пакет (12 каналов)";
      } else if (slide.value === "100") {
        tvText = "Расширенный пакет (105 каналов)";
        fullLength(slide, select, fill);
      }
      cableTVText = tvText;
      const val = parseFloat(slide.value);
      updateTVDisplay();
    }

    // После обработки конкретной логики вызываем обновление подписи роутера и цены
    updateRouterDisplay();
    updatePrice();
  }

  // Подписываем обработчики событий для слайдеров
  if ( document.getElementById("slider-internet")) {
   const sliderInternet = document.getElementById("slider-internet");

  sliderInternet.addEventListener("input", () => change(sliderInternet, selectInternet, fillInternet));
  }
  
  sliderRout.addEventListener("input", () => change(sliderRout, selectRout, fillRout));
  sliderTv.addEventListener("input", () => change(sliderTv, selectTv, fillTV));

  // Обработка переключения чекбоксов и радио для ТВ-приставок и опций
  toggle.forEach(input => {
    input.addEventListener("change", () => {
      let idTV = "";
      if (input.name === "tvBox") {
        Array.from(tvBox).forEach(cb => {
          if (cb !== input) {
            cb.checked = false;
          }
        });
        if (input.checked) idTV = input.id;
      }
      updateTVDisplay();
      switch (idTV) {
        case "tvFullHD":
          box.textContent = "ТВ-приставка FULL HD";
          break;
        case "tv4k":
          box.textContent = "ТВ-приставка 4K";
          break;
        default:
          box.textContent = "Без приставки";
          break;
      }
      updatePrice();
    });
  });

  updateRouterDisplay();
  updatePrice();



  //Cookie start

  let timer = setTimeout(() => {
    cookie.style.right = '5%';
  }, 2000)

  cookieAccept.addEventListener('click', (e) => {
    cookie.style.display = 'none'
    e.preventDefault()
  })
  cookieReject.addEventListener('click', (e) => {
    cookie.style.display = 'none'
    e.preventDefault()
  })
  //Cookie end


  // Burger start

  const burgerButton = document.querySelector('.burger__button')
  const burgerMenu = document.querySelector('.burger__menu')
  const serviceBurger = document.getElementById('service__burger')
  const arrow = document.getElementById('arrow')
  const burgerList = document.getElementById('service__burger-list')

  serviceBurger.addEventListener('click', () => {
    arrow.classList.toggle('rotate__arrow')
    burgerList.classList.toggle('service__burger-active')
  })
  burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('open')
    document.body.classList.toggle('lock')
  })
  //Burger end

// Menu select start

function selectCity(params) {
  const selectSingle = document.querySelectorAll('.form__select');
  const selectSingle_title = document.querySelector('.form__select__title-span');
  const selectSingle_labels = document.querySelectorAll('.form__select__label');
  const selectSingle_input = document.getElementsByClassName('form__select__input');


  // Toggle menu
  selectSingle.forEach(element => {


    element.addEventListener('click', () => {
      console.log(1);


      const selectSingle_content = element.querySelector('.form__select__content')

      if (selectSingle_content.style.display == 'flex') {
        selectSingle_content.style.display = 'none'
      } else {
        selectSingle_content.style.display = 'flex'
      }

      if ('active' === element.getAttribute('data-state')) {
        element.setAttribute('data-state', '');

      } else {
        element.setAttribute('data-state', 'active');
      }
    });





  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {

    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '',);

      selectSingle_content.style.display = 'none';

    });



  }
}



// Menu select end


//Modal connect

function modal(params) {
  const buttonsModal = document.querySelectorAll('[data-modal]');
  const body = document.querySelector('body');
  
  buttonsModal.forEach(element => {

    element.addEventListener('click', (e) => {
      e.preventDefault();


      const maskOptions = {
        mask: '+{375} (00) 000-00-00',
        lazy: false,
      };


      if (e.target.id === "button-connect") {


        body.insertAdjacentHTML('beforeend', `<dialog id="modal-wrap">
        <section class="modal__connect">
            <div class="modal__title modal__title--color">
                <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>
                <div class="modal__close-wrap" onclick="closeModal()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </div>

            <form action="#" class="modal__form ">
                <div class="tariffs__connect">
                    <p class="tariffs__connect--bigText modal__value-tariffs">Тариф 50 Мбит/с</p>
                    <p class="tariffs__connect--mobile">Рекомендуется для нескольких пользователей, просмотра
                        видео
                        и онлайн игр.</p>
                    <ul class="tariffs__connect-list">
                        <li>
                            <img src="img/icons/wifi-int.png" alt="">
                            <p class="modal__value-tariffs">Интернет 50 Мбит/с</p>
                            <p id="modal-rout"></p>
                        </li>
                        <li>
                            <img src="img/icons/smart-tv_tar.png" alt="">
                            <p id="modal-tv">Без ТВ</p>
                        </li>
                        <li>
                            <img src="img/icons/wifi_tar.png" alt="">
                            <p id="modal-box">Без приставки</p>
                        </li>
                        <li>
                            <img src="img/icons/video_10402668.png" alt="">
                            <p id="modal-movie">Онлайн кинотеатр</p>
                        </li>
                    </ul>
                    <hr>
                    <div class="price__pay">
                        <p>Ежемесячный платеж</p>
                        <p id="modal__final-price" class="tariffs__connect--bigText">21,70р./ месяц</p>
                    </div>
                    <!-- <button id="modal__button-connect" class="tariffs__connect-button">Подключить</button> -->
                    <!-- <a href="">Или заказать консультацию специалиста</a> -->
                </div>
                <div class="modal__form-inner ">
                    <!-- Имя -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="text" id="nameModal" name="name" required
                            minlength="2" maxlength="50" pattern="^[А-Яа-яЁё\s]+$" placeholder="Введите ваше имя">
                    </fieldset>

                    <!-- Телефон -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="tel" id="phoneModal" name="phone">
                    </fieldset>
                    <fieldset class="form__item-wrapper modal--widht">
                        <fieldset class="form__select modal--widht form__item">


                            <!--  -->
                            <!-- <select class="street" name="" id="">
                                <option value="1">Махновича</option>
                                <option value="2">Рябцева</option>
                                <option value="3">Суворова</option>
                            </select> -->

                            <div class="form__select__title" data-default="Option 0">
                                <span class="form__select__title-span modal--widht">Героев обороны</span>
                                <span class="form__select__title-arrow"></span>
                            </div>
                            <div class="form__select__content">
                                <input id="singleSelect01" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect01" class="form__select__label">Махновича</label>
                                <input id="singleSelect11" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect11" class="form__select__label">Рябцева</label>
                                <input id="singleSelect21" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect21" class="form__select__label">Суворова</label>
                                <input id="singleSelect31" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect31" class="form__select__label">Героев обороны</label>
                            </div>

                        </fieldset>
                    </fieldset>
                    <div class="modal__form-item">
                        <!-- Номер дома -->

                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Дом" name="home" class="form__item modal--widht" type="text">
                        </fieldset>

                        <!-- Квартира -->
                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Квартира" name="appart" class="form__item modal--widht" type="text">

                        </fieldset>
                    </div>
                    <!-- Выбор улицы -->
                    <div class="modal__area-wrap">
                        <p>Примечание</p>
                        <textarea
                            placeholder="(опишите здесь любые нюансы, которые вы хотели бы учесть при подключении)"
                            class="modal__area" name="x" id="x" rows="5"></textarea>
                    </div>

                    <div class="check modal__check">
                        <input type="checkbox" name="check-policy" id="check-policy-modal">
                        <label for="check-policy">Я ознакомлен(а) с <a href="#">Политикой</a> и согласен(а) на обработку
                            персональных данных.</label>

                    </div>

                    <button class="button button--border" type="submit">Подключить</button>
                </div>
            </form>
        </section>

    </dialog>
     `);
        IMask(document.getElementById('phoneModal'), maskOptions);
        selectCity()

        const modal = document.getElementById('modal-wrap');

        const modalTariffs = document.querySelectorAll('.modal__value-tariffs');
        const modalRout = document.getElementById('modal-rout');
        const modalTv = document.getElementById('modal-tv');
        const modalBox = document.getElementById('modal-box');
        const modalMovie = document.getElementById('modal-movie');
        const modalPrice = document.getElementById('modal__final-price');
console.log(modalTariffs);

        modal.showModal();
        document.body.classList.add('lock');
        modalTariffs.forEach(element => {
          element.textContent = textInet[0].textContent;
        });
        modalRout.textContent = rout.textContent;
        modalTv.textContent = tv.textContent;
        modalBox.textContent = box.textContent;
        modalMovie.textContent = movie.textContent;
        modalPrice.textContent = priceDisplay.textContent;
        modal.style = "opacity: 1";


        modal.addEventListener('click', (e) => {
          const modal = e.currentTarget;
          const clickBackDrop = e.target === modal;

          if (clickBackDrop) {
            closeModal()
          }


          modal.style = "opacity: 1";

          modal.addEventListener("submit", (event) => {

            event.preventDefault();

            closeModal();
            document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', `<div class="sent__form">
        <p>Форма успешно отправлена</p>

    </div>`)

            setTimeout(() => {
              document.getElementsByClassName('sent__form')[0].style = "opacity: 1"
            }, 100)
            setTimeout(() => {
              document.getElementsByClassName('sent__form')[0].style = "opacity: 0"
              document.getElementsByClassName('sent__form')[0].remove()
            }, 4000)

          })

        });

      } else if (e.target.id === "support__button") {


        body.insertAdjacentHTML('beforeend', `<dialog id="modal-wrap">
        <section class="form-wrap modal__support  form-wrap--950 radius">
            <div class="modal__support-title ">
                <h2>ОСТАЛИСЬ ВОПРОСЫ? ЗАКАЖИТЕ ОБРАТНЫЙ ЗВОНОК</h2>

                <div class="modal__close-wrap" onclick="closeModal()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </div>
            <form action="#" class="form form--top">
                <div class="form__item-wrap">

                    <!-- Имя -->
                    <fieldset class="form__item-wrapper">
                        <p>Имя</p>
                        <input class="form__item form__item-input--long" type="text" id="name" name="name" required
                            minlength="2" maxlength="50" pattern="^[А-Яа-яЁё\s]+$" placeholder="Введите ваше имя">
                    </fieldset>

                    <!-- Телефон -->
                    <fieldset class="form__item-wrapper">
                        <p>Телефон</p>
                        <input class="form__item form__item-input--long" type="tel" id="phoneModal" name="phone" required
                            value="+375(__)___-__-__" onfocus="setCursorPosition(this)"
                            pattern="\+375\(\d{2}\)\d{3}-\d{2}-\d{2}">
                    </fieldset>

                    <button class="button button--border" type="submit">Отправить</button>
                </div>
                <div class="check">
                    <input type="checkbox" name="check-policy" id="check-policy">
                    <label for="check-policy">Я ознакомлен(а) с <a href="#">Политикой</a> и согласен(а) на обработку
                        персональных данных.</label>

                </div>
            </form>
        </section>
        </dialog>`);



        const modal = document.getElementById('modal-wrap');
        modal.showModal();
        IMask(document.getElementById('phoneModal'), maskOptions);
        selectCity();
        document.body.classList.add('lock')

        modal.addEventListener('click', (e) => {
          const modal = e.currentTarget;
          const clickBackDrop = e.target === modal;

          if (clickBackDrop) {
            closeModal()
          }
        });


        modal.style = "opacity: 1";

        modal.addEventListener("submit", (event) => {

          event.preventDefault();

          closeModal();
          document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', `<div class="sent__form">
          <p>Форма успешно отправлена</p>

          </div>`)

          setTimeout(() => {
            document.getElementsByClassName('sent__form')[0].style = "opacity: 1"
          }, 100)
          setTimeout(() => {
            document.getElementsByClassName('sent__form')[0].style = "opacity: 0"
            document.getElementsByClassName('sent__form')[0].remove()
          }, 4000)

        })
      } else if (e.target.id === "button-social") {

      }


      document.addEventListener('keydown', (e) => {

        if (e.code == 'Escape') closeModal();

      })


    })
  });
}

modal();

function closeModal() {
  const modal = document.getElementById('modal-wrap');

  modal.close();
  document.body.classList.remove('lock')
  modal.style = "opacity: 0"

  modal.remove()
}

//internet 

if (document.getElementById('internet-button__change')) {

  const buttonChange = document.querySelectorAll('.button__change-item');


  buttonChange.forEach(element => {

    element.addEventListener('click', (e) => {

      const tariffsForm = document.querySelector('.tariffs__calc-wrap');
      console.log(e.target.id);


      const button = e.target.id

      if (button === "social-int") {
        document.querySelector('.tariffs__calc').style = `left: -${window.innerWidth}px`;
        document.querySelector('.tariffs__connect').style = `left: ${window.innerWidth}px`;
        setTimeout(() => {
          tariffsForm.innerHTML = `

                               <section class="tariffs__calc" style="left: -${window.innerWidth}px;">
                                    <h2>Соберите удобный тариф</h2>

                                  

                                    <div class="tariffs__calc-slider">
                                        <p>Роутер</p>
                                        <div class="slider-wrap">
                                            <div class="slider-fill" id="rout-fill"></div>
                                            <input type="range" id="slider-rout" value="0" max="100" step="50">
                                            <div id="select-rout"></div>
                                        </div>
                                        <div class="slider__value slider__value-rout">
                                            <span>Без роутера</span>
                                            <span>Роутер 2.4 ГГц</span>
                                            <span>Роутер 5 ГГц</span>
                                        </div>
                                    </div>
                                    <div class="tariffs__calc-slider">
                                        <p>Кабельное ТВ</p>
                                        <div class="slider-wrap">
                                            <div class="slider-fill" id="tv-fill"></div>
                                            <input type="range" id="slider-tv" value="0" max="100" step="50">
                                            <div id="select-tv"></div>
                                        </div>
                                        <div class="slider__value slider__value-tv">
                                            <span>Без ТВ</span>
                                            <span>12 Каналов</span>
                                            <span>105 каналов</span>
                                        </div>
                                    </div>


                                    <div class="tariffs__calc-toggle">
                                        <label class="toggle">
                                            <input type="checkbox" id="tvInteractive">
                                            <span class="toggle-label"></span> Интерактивное ТВ
                                        </label>

                                        <label class="toggle">
                                            <input type="checkbox" id="tvFullHD" name="tvBox">
                                            <span class="toggle-label"></span> ТВ-приставка FULL HD
                                        </label>
                                        <label class="toggle">
                                            <input type="checkbox" id="tv4k" name="tvBox">
                                            <span class="toggle-label"></span> ТВ-приставка 4K
                                        </label>
                                    </div>
                                </section>

                                <div class="tariffs__connect radius boxshadow" style="left: ${window.innerWidth}px;">
                                    <p class="tariffs__connect--bigText value-tariffs">Тариф 50 Мбит/с</p>
                                    <p class="tariffs__connect--mobile">Рекомендуется для нескольких пользователей,
                                        просмотра
                                        видео
                                        и онлайн игр.</p>
                                    <ul class="tariffs__connect-list">
                                        <li>
                                            <img src="img/icons/wifi-int.png" alt="">
                                            <p class="value-tariffs">Интернет 50 Мбит/с</p>
                                            <p id="rout"></p>
                                        </li>
                                        <li>
                                            <img src="img/icons/smart-tv_tar.png" alt="">
                                            <p id="tv">Без ТВ</p>
                                        </li>
                                        <li>
                                            <img src="img/icons/wifi_tar.png" alt="">
                                            <p id="box">Без приставки</p>
                                        </li>
                                        <li>
                                            <img src="img/icons/video_10402668.png" alt="">
                                            <p id="movie">Онлайн кинотеатр</p>
                                        </li>
                                    </ul>
                                    <p id="final-price" class="tariffs__connect--bigText">21,70р./ месяц</p>
                                    <button id="button-connect" class="tariffs__connect-button"
                                        data-modal>Подключить</button>
                                    <p class="support__button" id="support__button" data-modal>Или заказать консультацию
                                        специалиста</p>
                                </div>

`;
          // document.querySelector('.tariffs__connect').style = `left: ${window.innerWidth}px`;


        }, 300);
        setTimeout(() => {
           document.querySelector('.tariffs__calc').style = `left: 0px`;
           document.querySelector('.tariffs__connect').style = `left: 0px`;
          modal()
        }, 400);

      } else if (button === "base-int") {
        
        document.querySelector('.tariffs__calc').style = `left: -${window.innerWidth}px`;
        document.querySelector('.tariffs__connect').style = `left: ${window.innerWidth}px`;
      
        setTimeout(() => {
          tariffsForm.innerHTML = `
                                <section class="tariffs__calc" style="left: -${window.innerWidth}px;">
                                    <h2>Соберите удобный тариф</h2>

                                    <!-- слайдер интернета -->
                                    <div class="tariffs__calc-slider">
                                        <p>Скорость интернет (Мбит/с)</p>
                                        <div class="slider-wrap">
                                            <div class="slider-fill" id="internet-fill"></div>
                                            <input type="range" id="slider-internet" value="33.33" max="100"
                                                step="33.33">
                                            <div id="select-internet" style="left: 33.33%"></div>

                                        </div>
                                        <div class="slider__value slider__value-inet">
                                            <span>Без интернета</span>
                                            <span>50</span>
                                            <span>100</span>
                                            <span>250</span>
                                        </div>
                                    </div>

                                    <!-- слайдер роутера -->
                                    <div class="tariffs__calc-slider">
                                        <p>Роутер</p>
                                        <div class="slider-wrap">
                                            <div class="slider-fill" id="rout-fill"></div>
                                            <input type="range" id="slider-rout" value="0" max="100" step="50">
                                            <div id="select-rout"></div>
                                        </div>
                                        <div class="slider__value slider__value-rout">
                                            <span>Без роутера</span>
                                            <span>Роутер 2.4 ГГц</span>
                                            <span>Роутер 5 ГГц</span>
                                        </div>
                                    </div>
                                    <div class="tariffs__calc-slider">
                                        <p>Кабельное ТВ</p>
                                        <div class="slider-wrap">
                                            <div class="slider-fill" id="tv-fill"></div>
                                            <input type="range" id="slider-tv" value="0" max="100" step="50">
                                            <div id="select-tv"></div>
                                        </div>
                                        <div class="slider__value slider__value-tv">
                                            <span>Без ТВ</span>
                                            <span>12 Каналов</span>
                                            <span>105 каналов</span>
                                        </div>
                                    </div>


                                    <!-- Выбор ТВ -->
                                    <div class="tariffs__calc-toggle">
                                        <label class="toggle">
                                            <input type="checkbox" id="tvInteractive">
                                            <span class="toggle-label"></span> Интерактивное ТВ
                                        </label>

                                        <!-- Выбор приставки -->
                                        <label class="toggle">
                                            <input type="checkbox" id="tvFullHD" name="tvBox">
                                            <span class="toggle-label"></span> ТВ-приставка FULL HD
                                        </label>
                                        <label class="toggle">
                                            <input type="checkbox" id="tv4k" name="tvBox">
                                            <span class="toggle-label"></span> ТВ-приставка 4K
                                        </label>
                                    </div>
                                </section>

                                <!-- Итоговая информация -->
                                <div class="tariffs__connect radius boxshadow" style="left: ${window.innerWidth}px;">
                                    <p class="tariffs__connect--bigText value-tariffs">Тариф 50 Мбит/с</p>
                                    <p class="tariffs__connect--mobile">Рекомендуется для нескольких пользователей,
                                        просмотра
                                        видео
                                        и онлайн игр.</p>
                                    <ul class="tariffs__connect-list">
                                        <li>
                                            <img src="img/icons/wifi-int.png" alt="">
                                            <p class="value-tariffs">Интернет 50 Мбит/с</p>
                                            <p id="rout"></p>
                                        </li>
                                        <li>
                                            <img src="img/icons/smart-tv_tar.png" alt="">
                                            <p id="tv">Без ТВ</p>
                                        </li>
                                        <li>
                                            <img src="img/icons/wifi_tar.png" alt="">
                                            <p id="box">Без приставки</p>
                                        </li>
                                        <li>
                                            <img src="img/icons/video_10402668.png" alt="">
                                            <p id="movie">Онлайн кинотеатр</p>
                                        </li>
                                    </ul>
                                    <p id="final-price" class="tariffs__connect--bigText">21,70р./ месяц</p>
                                    <button id="button-connect" class="tariffs__connect-button"
                                        data-modal>Подключить</button>
                                    <p class="support__button" id="support__button" data-modal>Или заказать консультацию
                                        специалиста</p>
                                </div>

`
        }, 300)


        setTimeout(() => {
          document.querySelector('.tariffs__calc').style = `left: 0px`
          document.querySelector('.tariffs__connect').style = `left: 0px`;
          modal()
        }, 400)

      }





      buttonChange.forEach(element => {
        element.removeAttribute('disabled')
      });


      e.target.setAttribute('disabled', '');
    })

  });

}

// news 
if (document.querySelector('.button__news')) {
  const buttonNews = document.querySelector('.button__news');

  buttonNews.addEventListener('mouseenter', () => {

    const img = document.getElementsByClassName('news__operator-img');
    console.log(img[0]);

    img[0].classList.add("news__operator-img--active");
  })
  buttonNews.addEventListener('mouseleave', () => {

    const img = document.getElementsByClassName('news__operator-img');

    img[0].classList.remove("news__operator-img--active")
  })
}




});


// // Menu select start

// function selectCity(params) {
//   const selectSingle = document.querySelectorAll('.form__select');
//   const selectSingle_title = document.querySelector('.form__select__title-span');
//   const selectSingle_labels = document.querySelectorAll('.form__select__label');
//   const selectSingle_input = document.getElementsByClassName('form__select__input');


//   // Toggle menu
//   selectSingle.forEach(element => {


//     element.addEventListener('click', () => {
//       console.log(1);


//       const selectSingle_content = element.querySelector('.form__select__content')

//       if (selectSingle_content.style.display == 'flex') {
//         selectSingle_content.style.display = 'none'
//       } else {
//         selectSingle_content.style.display = 'flex'
//       }

//       if ('active' === element.getAttribute('data-state')) {
//         element.setAttribute('data-state', '');

//       } else {
//         element.setAttribute('data-state', 'active');
//       }
//     });





//   });

//   // Close when click to option
//   for (let i = 0; i < selectSingle_labels.length; i++) {

//     selectSingle_labels[i].addEventListener('click', (evt) => {
//       selectSingle_title.textContent = evt.target.textContent;
//       selectSingle.setAttribute('data-state', '',);

//       selectSingle_content.style.display = 'none';

//     });



//   }
// }



// // Menu select end
// //Modal connect

// function modal(params) {
//   const buttonsModal = document.querySelectorAll('[data-modal]');
//   const body = document.querySelector('body');
  
//   buttonsModal.forEach(element => {

//     element.addEventListener('click', (e) => {
//       e.preventDefault();


//       const maskOptions = {
//         mask: '+{375} (00) 000-00-00',
//         lazy: false,
//       };


//       if (e.target.id === "button-connect") {


//         body.insertAdjacentHTML('beforeend', `<dialog id="modal-wrap">
//         <section class="modal__connect">
//             <div class="modal__title modal__title--color">
//                 <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>
//                 <div class="modal__close-wrap" onclick="closeModal()">
//                     <div class="modal__close"><span></span><span></span></div>
//                 </div>
//             </div>

//             <form action="#" class="modal__form ">
//                 <div class="tariffs__connect">
//                     <p class="tariffs__connect--bigText modal__value-tariffs">Тариф 50 Мбит/с</p>
//                     <p class="tariffs__connect--mobile">Рекомендуется для нескольких пользователей, просмотра
//                         видео
//                         и онлайн игр.</p>
//                     <ul class="tariffs__connect-list">
//                         <li>
//                             <img src="img/icons/wifi-int.png" alt="">
//                             <p class="modal__value-tariffs">Интернет 50 Мбит/с</p>
//                             <p id="modal-rout"></p>
//                         </li>
//                         <li>
//                             <img src="img/icons/smart-tv_tar.png" alt="">
//                             <p id="modal-tv">Без ТВ</p>
//                         </li>
//                         <li>
//                             <img src="img/icons/wifi_tar.png" alt="">
//                             <p id="modal-box">Без приставки</p>
//                         </li>
//                         <li>
//                             <img src="img/icons/video_10402668.png" alt="">
//                             <p id="modal-movie">Онлайн кинотеатр</p>
//                         </li>
//                     </ul>
//                     <hr>
//                     <div class="price__pay">
//                         <p>Ежемесячный платеж</p>
//                         <p id="modal__final-price" class="tariffs__connect--bigText">21,70р./ месяц</p>
//                     </div>
//                     <!-- <button id="modal__button-connect" class="tariffs__connect-button">Подключить</button> -->
//                     <!-- <a href="">Или заказать консультацию специалиста</a> -->
//                 </div>
//                 <div class="modal__form-inner ">
//                     <!-- Имя -->
//                     <fieldset class="form__item-wrapper modal--widht">
//                         <input class="form__item modal--widht" type="text" id="nameModal" name="name" required
//                             minlength="2" maxlength="50" pattern="^[А-Яа-яЁё\s]+$" placeholder="Введите ваше имя">
//                     </fieldset>

//                     <!-- Телефон -->
//                     <fieldset class="form__item-wrapper modal--widht">
//                         <input class="form__item modal--widht" type="tel" id="phoneModal" name="phone">
//                     </fieldset>
//                     <fieldset class="form__item-wrapper modal--widht">
//                         <fieldset class="form__select modal--widht form__item">


//                             <!--  -->
//                             <!-- <select class="street" name="" id="">
//                                 <option value="1">Махновича</option>
//                                 <option value="2">Рябцева</option>
//                                 <option value="3">Суворова</option>
//                             </select> -->

//                             <div class="form__select__title" data-default="Option 0">
//                                 <span class="form__select__title-span modal--widht">Героев обороны</span>
//                                 <span class="form__select__title-arrow"></span>
//                             </div>
//                             <div class="form__select__content">
//                                 <input id="singleSelect01" class="form__select__input" type="radio" name="singleSelect">
//                                 <label for="singleSelect01" class="form__select__label">Махновича</label>
//                                 <input id="singleSelect11" class="form__select__input" type="radio" name="singleSelect">
//                                 <label for="singleSelect11" class="form__select__label">Рябцева</label>
//                                 <input id="singleSelect21" class="form__select__input" type="radio" name="singleSelect">
//                                 <label for="singleSelect21" class="form__select__label">Суворова</label>
//                                 <input id="singleSelect31" class="form__select__input" type="radio" name="singleSelect">
//                                 <label for="singleSelect31" class="form__select__label">Героев обороны</label>
//                             </div>

//                         </fieldset>
//                     </fieldset>
//                     <div class="modal__form-item">
//                         <!-- Номер дома -->

//                         <fieldset class="form__item-wrapper modal--widht">
//                             <input placeholder="Дом" name="home" class="form__item modal--widht" type="text">
//                         </fieldset>

//                         <!-- Квартира -->
//                         <fieldset class="form__item-wrapper modal--widht">
//                             <input placeholder="Квартира" name="appart" class="form__item modal--widht" type="text">

//                         </fieldset>
//                     </div>
//                     <!-- Выбор улицы -->
//                     <div class="modal__area-wrap">
//                         <p>Примечание</p>
//                         <textarea
//                             placeholder="(опишите здесь любые нюансы, которые вы хотели бы учесть при подключении)"
//                             class="modal__area" name="x" id="x" rows="5"></textarea>
//                     </div>

//                     <div class="check modal__check">
//                         <input type="checkbox" name="check-policy" id="check-policy-modal">
//                         <label for="check-policy">Я ознакомлен(а) с <a href="#">Политикой</a> и согласен(а) на обработку
//                             персональных данных.</label>

//                     </div>

//                     <button class="button button--border" type="submit">Подключить</button>
//                 </div>
//             </form>
//         </section>

//     </dialog>
//      `);
//         IMask(document.getElementById('phoneModal'), maskOptions);
//         selectCity()

//         const modal = document.getElementById('modal-wrap');

//         const modalTariffs = document.querySelectorAll('.modal__value-tariffs');
//         const modalRout = document.getElementById('modal-rout');
//         const modalTv = document.getElementById('modal-tv');
//         const modalBox = document.getElementById('modal-box');
//         const modalMovie = document.getElementById('modal-movie');
//         const modalPrice = document.getElementById('modal__final-price');
// console.log(modalTariffs);

//         modal.showModal();
//         document.body.classList.add('lock');
//         modalTariffs.forEach(element => {
//           element.textContent = textInet[0].textContent;
//         });
//         modalRout.textContent = rout.textContent;
//         modalTv.textContent = tv.textContent;
//         modalBox.textContent = box.textContent;
//         modalMovie.textContent = movie.textContent;
//         modalPrice.textContent = priceDisplay.textContent;
//         modal.style = "opacity: 1";


//         modal.addEventListener('click', (e) => {
//           const modal = e.currentTarget;
//           const clickBackDrop = e.target === modal;

//           if (clickBackDrop) {
//             closeModal()
//           }


//           modal.style = "opacity: 1";

//           modal.addEventListener("submit", (event) => {

//             event.preventDefault();

//             closeModal();
//             document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', `<div class="sent__form">
//         <p>Форма успешно отправлена</p>

//     </div>`)

//             setTimeout(() => {
//               document.getElementsByClassName('sent__form')[0].style = "opacity: 1"
//             }, 100)
//             setTimeout(() => {
//               document.getElementsByClassName('sent__form')[0].style = "opacity: 0"
//               document.getElementsByClassName('sent__form')[0].remove()
//             }, 4000)

//           })

//         });

//       } else if (e.target.id === "support__button") {


//         body.insertAdjacentHTML('beforeend', `<dialog id="modal-wrap">
//         <section class="form-wrap modal__support  form-wrap--950 radius">
//             <div class="modal__support-title ">
//                 <h2>ОСТАЛИСЬ ВОПРОСЫ? ЗАКАЖИТЕ ОБРАТНЫЙ ЗВОНОК</h2>

//                 <div class="modal__close-wrap" onclick="closeModal()">
//                     <div class="modal__close"><span></span><span></span></div>
//                 </div>
//             </div>
//             <form action="#" class="form form--top">
//                 <div class="form__item-wrap">

//                     <!-- Имя -->
//                     <fieldset class="form__item-wrapper">
//                         <p>Имя</p>
//                         <input class="form__item form__item-input--long" type="text" id="name" name="name" required
//                             minlength="2" maxlength="50" pattern="^[А-Яа-яЁё\s]+$" placeholder="Введите ваше имя">
//                     </fieldset>

//                     <!-- Телефон -->
//                     <fieldset class="form__item-wrapper">
//                         <p>Телефон</p>
//                         <input class="form__item form__item-input--long" type="tel" id="phoneModal" name="phone" required
//                             value="+375(__)___-__-__" onfocus="setCursorPosition(this)"
//                             pattern="\+375\(\d{2}\)\d{3}-\d{2}-\d{2}">
//                     </fieldset>

//                     <button class="button button--border" type="submit">Отправить</button>
//                 </div>
//                 <div class="check">
//                     <input type="checkbox" name="check-policy" id="check-policy">
//                     <label for="check-policy">Я ознакомлен(а) с <a href="#">Политикой</a> и согласен(а) на обработку
//                         персональных данных.</label>

//                 </div>
//             </form>
//         </section>
//         </dialog>`);



//         const modal = document.getElementById('modal-wrap');
//         modal.showModal();
//         IMask(document.getElementById('phoneModal'), maskOptions);
//         selectCity();
//         document.body.classList.add('lock')

//         modal.addEventListener('click', (e) => {
//           const modal = e.currentTarget;
//           const clickBackDrop = e.target === modal;

//           if (clickBackDrop) {
//             closeModal()
//           }
//         });


//         modal.style = "opacity: 1";

//         modal.addEventListener("submit", (event) => {

//           event.preventDefault();

//           closeModal();
//           document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', `<div class="sent__form">
//           <p>Форма успешно отправлена</p>

//           </div>`)

//           setTimeout(() => {
//             document.getElementsByClassName('sent__form')[0].style = "opacity: 1"
//           }, 100)
//           setTimeout(() => {
//             document.getElementsByClassName('sent__form')[0].style = "opacity: 0"
//             document.getElementsByClassName('sent__form')[0].remove()
//           }, 4000)

//         })
//       } else if (e.target.id === "button-social") {

//       }


//       document.addEventListener('keydown', (e) => {

//         if (e.code == 'Escape') closeModal();

//       })


//     })
//   });
// }

// modal();

// function closeModal() {
//   const modal = document.getElementById('modal-wrap');

//   modal.close();
//   document.body.classList.remove('lock')
//   modal.style = "opacity: 0"

//   modal.remove()
// }

// //internet 

// if (document.getElementById('internet-button__change')) {

//   const buttonChange = document.querySelectorAll('.button__change-item');


//   buttonChange.forEach(element => {

//     element.addEventListener('click', (e) => {

//       const tariffsForm = document.querySelector('.tariffs__calc-wrap');
//       console.log(e.target.id);


//       const button = e.target.id

//       if (button === "social-int") {
//         document.querySelector('.tariffs__calc').style = `left: -${window.innerWidth}px`;
//         document.querySelector('.tariffs__connect').style = `left: ${window.innerWidth}px`;
//         setTimeout(() => {
//           tariffsForm.innerHTML = `

//                                 <!-- Итоговая информация -->
//                                 <div class="tariffs__connect radius boxshadow" style="left: ${window.innerWidth}px;">
//                                     <p class="tariffs__connect--bigText value-tariffs">Тариф 50 Мбит/с</p>
//                                     <p class="tariffs__connect--mobile">Рекомендуется для нескольких пользователей,
//                                         просмотра
//                                         видео
//                                         и онлайн игр.</p>
//                                     <ul class="tariffs__connect-list">
//                                         <li>
//                                             <img src="img/icons/wifi-int.png" alt="">
//                                             <p class="value-tariffs">Интернет 50 Мбит/с</p>
//                                             <p id="rout"></p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/smart-tv_tar.png" alt="">
//                                             <p id="tv">Без ТВ</p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/wifi_tar.png" alt="">
//                                             <p id="box">Без приставки</p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/video_10402668.png" alt="">
//                                             <p id="movie">Онлайн кинотеатр</p>
//                                         </li>
//                                     </ul>
//                                     <p id="final-price" class="tariffs__connect--bigText">21,70р./ месяц</p>
//                                     <button id="button-connect" class="tariffs__connect-button"
//                                         data-modal>Подключить</button>
//                                     <p class="support__button" id="support__button" data-modal>Или заказать консультацию
//                                         специалиста</p>
//                                 </div>

// `;
//           // document.querySelector('.tariffs__connect').style = `left: ${window.innerWidth}px`;


//         }, 300);
//         setTimeout(() => {
//           document.querySelector('.tariffs__connect').style = `left: 0px`;
//           modal()
//         }, 400)

//       } else if (button === "base-int") {

//         document.querySelector('.tariffs__connect').style = `left: -${window.innerWidth}px`;

//         setTimeout(() => {
//           tariffsForm.innerHTML = `
//                                 <section class="tariffs__calc" style="left: -${window.innerWidth}px;">
//                                     <h2>Соберите удобный тариф</h2>

//                                     <!-- слайдер интернета -->
//                                     <div class="tariffs__calc-slider">
//                                         <p>Скорость интернет (Мбит/с)</p>
//                                         <div class="slider-wrap">
//                                             <div class="slider-fill" id="internet-fill"></div>
//                                             <input type="range" id="slider-internet" value="33.33" max="100"
//                                                 step="33.33">
//                                             <div id="select-internet" style="left: 33.33%"></div>

//                                         </div>
//                                         <div class="slider__value slider__value-inet">
//                                             <span>Без интернета</span>
//                                             <span>50</span>
//                                             <span>100</span>
//                                             <span>250</span>
//                                         </div>
//                                     </div>

//                                     <!-- слайдер роутера -->
//                                     <div class="tariffs__calc-slider">
//                                         <p>Роутер</p>
//                                         <div class="slider-wrap">
//                                             <div class="slider-fill" id="rout-fill"></div>
//                                             <input type="range" id="slider-rout" value="0" max="100" step="50">
//                                             <div id="select-rout"></div>
//                                         </div>
//                                         <div class="slider__value slider__value-rout">
//                                             <span>Без роутера</span>
//                                             <span>Роутер 2.4 ГГц</span>
//                                             <span>Роутер 5 ГГц</span>
//                                         </div>
//                                     </div>
//                                     <div class="tariffs__calc-slider">
//                                         <p>Кабельное ТВ</p>
//                                         <div class="slider-wrap">
//                                             <div class="slider-fill" id="tv-fill"></div>
//                                             <input type="range" id="slider-tv" value="0" max="100" step="50">
//                                             <div id="select-tv"></div>
//                                         </div>
//                                         <div class="slider__value slider__value-tv">
//                                             <span>Без ТВ</span>
//                                             <span>12 Каналов</span>
//                                             <span>105 каналов</span>
//                                         </div>
//                                     </div>


//                                     <!-- Выбор ТВ -->
//                                     <div class="tariffs__calc-toggle">
//                                         <label class="toggle">
//                                             <input type="checkbox" id="tvInteractive">
//                                             <span class="toggle-label"></span> Интерактивное ТВ
//                                         </label>

//                                         <!-- Выбор приставки -->
//                                         <label class="toggle">
//                                             <input type="checkbox" id="tvFullHD" name="tvBox">
//                                             <span class="toggle-label"></span> ТВ-приставка FULL HD
//                                         </label>
//                                         <label class="toggle">
//                                             <input type="checkbox" id="tv4k" name="tvBox">
//                                             <span class="toggle-label"></span> ТВ-приставка 4K
//                                         </label>
//                                     </div>
//                                 </section>

//                                 <!-- Итоговая информация -->
//                                 <div class="tariffs__connect radius boxshadow" style="left: ${window.innerWidth}px;">
//                                     <p class="tariffs__connect--bigText value-tariffs">Тариф 50 Мбит/с</p>
//                                     <p class="tariffs__connect--mobile">Рекомендуется для нескольких пользователей,
//                                         просмотра
//                                         видео
//                                         и онлайн игр.</p>
//                                     <ul class="tariffs__connect-list">
//                                         <li>
//                                             <img src="img/icons/wifi-int.png" alt="">
//                                             <p class="value-tariffs">Интернет 50 Мбит/с</p>
//                                             <p id="rout"></p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/smart-tv_tar.png" alt="">
//                                             <p id="tv">Без ТВ</p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/wifi_tar.png" alt="">
//                                             <p id="box">Без приставки</p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/video_10402668.png" alt="">
//                                             <p id="movie">Онлайн кинотеатр</p>
//                                         </li>
//                                     </ul>
//                                     <p id="final-price" class="tariffs__connect--bigText">21,70р./ месяц</p>
//                                     <button id="button-connect" class="tariffs__connect-button"
//                                         data-modal>Подключить</button>
//                                     <p class="support__button" id="support__button" data-modal>Или заказать консультацию
//                                         специалиста</p>
//                                 </div>

// `
//         }, 300)


//         setTimeout(() => {
//           document.querySelector('.tariffs__calc').style = `left: 0px`
//           document.querySelector('.tariffs__connect').style = `left: 0px`;
//           modal()
//         }, 400)

//       }





//       buttonChange.forEach(element => {
//         element.removeAttribute('disabled')
//       });


//       e.target.setAttribute('disabled', '');
//     })

//   });

// }

// // news 
// if (document.querySelector('.button__news')) {
//   const buttonNews = document.querySelector('.button__news');

//   buttonNews.addEventListener('mouseenter', () => {

//     const img = document.getElementsByClassName('news__operator-img');
//     console.log(img[0]);

//     img[0].classList.add("news__operator-img--active");
//   })
//   buttonNews.addEventListener('mouseleave', () => {

//     const img = document.getElementsByClassName('news__operator-img');

//     img[0].classList.remove("news__operator-img--active")
//   })
// }





