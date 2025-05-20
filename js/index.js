
// slider tarrifs

const sliderInternet = document.getElementById('slider-internet')
const selectInternet = document.getElementById('select-internet')
const selectRout = document.getElementById('select-rout')
const sliderRout = document.getElementById('slider-rout')
const inet = document.getElementById('inet')
const rout = document.getElementById('rout')
const textInet = document.getElementsByClassName('value-tariffs')


function addTextInet(params) {
    textInet[0].textContent = `Тариф ${params} мб/с`
    textInet[1].textContent = `Интернет ${params} мб/с`
}

function change(slide, select) {

    select.style.left = slide.value + '%';
    slide.style.background = `linear-gradient(to right, #00abfe ${Number(slide.value) + 2.00}%, #bbbbbb ${Number(slide.value) + 2.00}%)`;
    switch (slide.value) {

        case '0':
            addTextInet('50');
            break;
        case '50':
            addTextInet('100');
            break;
        case '100':
            select.style.left = slide.value - 3 + '%';
            slide.style.background = `linear-gradient(to right, #00abfe ${slide.value - 2}%, #bbbbbb ${slide.value - 2}%)`;
            addTextInet('250');
            break;

        default:
            break;
    }
 
    if (slide.id == 'slider-rout') {
        switch (slide.value) {
            case '0':
                rout.textContent = '';
                break;
            case '50':
                rout.textContent = '+ Роутер 2.4 ГГц';
                break; case '100':
                rout.textContent = '+ Роутер 5 ГГц';
                select.style.left = slide.value - 3 + '%';
                slide.style.background = `linear-gradient(to right, #00abfe ${slide.value - 2}%, #bbbbbb ${slide.value - 2}%)`;

                break;
            default:
                break;
        }
    }

}

sliderInternet.oninput = () => { change(sliderInternet, selectInternet) };
sliderRout.oninput = () => { change(sliderRout, selectRout) }

// slider tarrifs end

// toggle tarrifs

const form = document.getElementById('tariffs__calc-wrap');
const toggle = document.getElementsByClassName('toggle')
const tarrifs = document.getElementsByClassName('tariffs__connect-list')
const tv = document.getElementById('tv')
const box = document.getElementById('box')

for (let index = 0; index < toggle.length; index++) {

    toggle[index].addEventListener('click', (e) => {


        switch (toggle[index].children[0].id) {
            case 'tvCable':
                tv.textContent = 'Кабельное ТВ (500 каналов)'
                break;
            case 'tvCable':
                tv.textContent = 'Кабельное ТВ (500 каналов)'
                break;
            case 'tvInteractive':
                tv.textContent = 'Интерактивное ТВ (500 каналов)'
                break;
            case 'tvNoBox':
                box.textContent = 'Без приставки'
                break;
            case 'tvFullHD':
                box.textContent = 'ТВ-приставка FULL HD'
                break;
            case 'tv4k':
                box.textContent = 'ТВ-приставка 4K'
                break;
            default:
                break;
        }

    });

}
// toggle tarrifs end


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


