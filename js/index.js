document.addEventListener("DOMContentLoaded", function () {
  // Кэширование DOM-элементов
  const sliderInternet = document.getElementById("slider-internet");
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

    if (slide.value > 95) {
      fill.style.width = `${slide.value}%`
      select.style.left = (slide.value - 3) + '%';
    } else {
      select.style.left = (slide.value - 3) + '%';
      fill.style.width = `${Number(slide.value) + 2}%`

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

    totalPrice += prices.internet[getInternetKey(sliderInternet.value)] || 0;
    totalPrice += prices.router[getRouterKey(sliderRout.value)] || 0;

    let tvKey = getTvKey(sliderTv.value);
    let tvPrice = prices.tv[tvKey] || 0;
    if (tvKey === "extendedTV" && sliderInternet.value !== "0") {
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
    select.style.left = slide.value + "%";
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
        console.log(slide.value);

        fullLength(slide, select, fill);
        if (sliderRout.value === "50") {
          // Переключаем роутер в режим 5 ГГц
          selectRout.style.left = (slide.value - 3) + '%';
          sliderRout.value = "100";
          fillRout.style.width = (slide.value) + '%';

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
  sliderInternet.addEventListener("input", () => change(sliderInternet, selectInternet, fillInternet));
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

});




// Burger start

let burgerButton = document.querySelector('.burger__button')
let burgerMenu = document.querySelector('.burger__menu')


burgerButton.addEventListener('click', () => {


  burgerMenu.classList.toggle('open')
  document.body.classList.toggle('lock')
})
//Burger end

// Menu select start
const selectSingle = document.querySelector('.form__select');
const selectSingle_title = selectSingle.querySelector('.form__select__title-span');
const selectSingle_labels = selectSingle.querySelectorAll('.form__select__label');
const selectSingle_input = document.getElementsByClassName('form__select__input');
const selectSingle_content = document.querySelector('.form__select__content')

// Toggle menu
selectSingle.addEventListener('click', () => {
  if (selectSingle_content.style.display == 'flex') {
    selectSingle_content.style.display = 'none'
  } else {
    selectSingle_content.style.display = 'flex'
  }

  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');

  } else {
    selectSingle.setAttribute('data-state', 'active');
  }




});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {

  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '',);

    selectSingle_content.style.display = 'none';

  });



}


// Menu select end


