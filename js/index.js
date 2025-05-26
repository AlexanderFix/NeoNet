document.addEventListener("DOMContentLoaded", function () {
    const sliderInternet = document.getElementById("slider-internet");
    const selectInternet = document.getElementById("select-internet");
    const sliderRout = document.getElementById("slider-rout");
    const selectRout = document.getElementById("select-rout");
    const sliderTv = document.getElementById("slider-tv");
    const selectTv = document.getElementById("select-tv");
    const rout = document.getElementById("rout");
    const textInet = document.getElementsByClassName("value-tariffs");
    const priceDisplay = document.getElementById("final-price");
    const tv = document.getElementById("tv");
    const box = document.getElementById("box");
    const toggle = document.querySelectorAll("input[type=checkbox], input[type=radio]");
    const tvBox = document.getElementsByName('tvBox')

    let basePrice = 0;

    const prices = {
        "0": 0, "33.33": 18.9, "66.66": 28.8, "99.99": 37.7,
        "routNone": 0, "rout2.4": 0.9, "rout5": 1.9,
        "tvCable": 5.4, "tvInteractive": 12,
        "tvNoBox": 0, "tvFullHD": 3, "tv4k": 6
    };

    function fullLenght(slide, select) {
        select.style.left = slide.value - 3 + '%';
        slide.style.background = `linear-gradient(to right, #00abfe ${slide.value - 2}%, #bbbbbb ${slide.value - 2}%)`;
    }

    function updatePrice() {
        let totalPrice = basePrice + prices[sliderInternet.value];

        totalPrice += sliderRout.value === "0" ? prices["routNone"]
            : sliderRout.value === "50" ? prices["rout2.4"]
                : prices["rout5"];

        toggle.forEach(input => {
            if (input.checked) {
                totalPrice += prices[input.id] || 0;
            }
        });

        priceDisplay.textContent = `${totalPrice.toFixed(2)} р./ месяц`;
    }

    function change(slide, select) {
        select.style.left = slide.value + "%";
        slide.style.background = `linear-gradient(to right, #00abfe ${slide.value}%, #bbbbbb ${slide.value}%)`;

        if (slide.id === "slider-internet") {
            let speed = slide.value === "0" ? "Без интернета" : slide.value === "33.33" ? "50" : slide.value === "66.66" ? "100" : "250";
            slide.style.background = `linear-gradient(to right, #bbb ${0}%, #00abfe ${slide.value}%, #bbb ${slide.value}%)`;

            if (speed === "250") {
                fullLenght(slide, select);
                slide.style.background = `linear-gradient(to right, #bbb ${0}%, #00abfe ${slide.value}%, #bbb ${slide.value}%)`;

                if (sliderRout.value == "50") {
                    selectRout.style.left = slide.value - 3 + '%';
                    sliderRout.value = "100";
                    sliderRout.style.background = `linear-gradient(to right, #00abfe ${slide.value - 2}%, #bbbbbb ${slide.value - 2}%)`;
                    rout.textContent = "+ Роутер 5 ГГц";
                }
            }

            textInet[0].textContent = speed === "Без интернета" ? `${speed}` : `Тариф ${speed} мб/с`;
            textInet[1].textContent = speed === "Без интернета" ? `${speed}` : `Интернет ${speed} мб/с`;

        } else if (slide.id === "slider-rout") {
            sliderRout.step = sliderInternet.value === "99.99" ? "100" : "50";
            slide.value === "100" ? fullLenght(slide, select) : '';

            rout.textContent = slide.value === "50" ? "+ Роутер 2.4 ГГц" : slide.value === "100" ? "+ Роутер 5 ГГц" : "";
        }

        updatePrice();
    }

    sliderInternet.addEventListener("input", () => { change(sliderInternet, selectInternet); });
    sliderRout.addEventListener("input", () => { change(sliderRout, selectRout); });
    sliderTv.addEventListener("input", () => { change(sliderTv, selectTv); });

    toggle.forEach(input => {
        input.addEventListener("change", () => {
            let selectedTV = [];
            let idTV = '';

            if (input.name === "tvBox") {
                if (input.checked) {
                    tvBox.forEach(cb => {
                        if (cb !== input) {
                            cb.checked = false;
                        }
                    });
                    idTV = input.id;
                }
            }

            if (document.getElementById("tvInteractive").checked) {
                selectedTV.push("Интерактивное ТВ (170 каналов)");
            }

            tv.textContent = selectedTV.length > 0 ? selectedTV.join(" + ") : "Без ТВ";

            switch (idTV) {
                case "":
                    box.textContent = "Без приставки";
                    break;
                case "tvFullHD":
                    box.textContent = "ТВ-приставка FULL HD";
                    break;
                case "tv4k":
                    box.textContent = "ТВ-приставка 4K";
                    break;
            }

            updatePrice();
        });
    });

    updatePrice();
});


// Burger start

let burgerList = document.querySelectorAll('.burger_list')

function menuBurger() {
    burger_wrapper.classList.toggle('active_burger')
    burger_nav.classList.toggle('active_burger')
    document.body.classList.toggle('lock')
    burger_menu.classList.toggle('burger_active')
    header.classList.toggle('header_active')
}

burgerList.forEach(item => {
    item.addEventListener('click', () => {
        burger_wrapper.classList.remove('active_burger')
        burger_nav.classList.remove('active_burger')
        document.body.classList.remove('lock')
        burger_menu.classList.remove('burger_active')
        header.classList.remove('header_active')
    })
});

burger_button.addEventListener('click', menuBurger)

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