


// slider tarrifs

const sliderInternet = document.getElementById('slider-internet')
const selectInternet = document.getElementById('select-internet')
const selectRout = document.getElementById('select-rout')
const sliderRout = document.getElementById('slider-rout')

function change(slide, select) {
    if (slide.value <= 0) {
        select.style.left = slide.value + '%';
        slide.style.background = `linear-gradient(to right, #00abfe ${slide.value}%, #bbbbbb ${slide.value}%)`;
    } else if (slide.value >= 99) {
        select.style.left = slide.value - 2 + '%';
        slide.style.background = `linear-gradient(to right, #00abfe ${slide.value - 2}%, #bbbbbb ${slide.value - 2}%)`;
    }
    else {
        if (slide == sliderRout) {
            select.style.left = slide.value + '%';
            slide.style.background = `linear-gradient(to right, #00abfe ${slide.value}%, #bbbbbb ${slide.value}%)`;

        } else {
            if (slide.value > 30 && slide.value < 35) {
                select.style.left = slide.value - 2.5 + '%';
                slide.style.background = `linear-gradient(to right, #00abfe ${slide.value - 2.5}%, #bbbbbb ${slide.value - 2.5}%)`;
            } else {
                select.style.left = slide.value - 3 + '%';
                slide.style.background = `linear-gradient(to right, #00abfe ${slide.value - 3}%, #bbbbbb ${slide.value - 3}%)`;
            }
        }

    }
}

sliderInternet.oninput = () => { change(sliderInternet, selectInternet) };
sliderRout.oninput = () => { change(sliderRout, selectRout) }

// slider tarrifs end

// radio tarrifs

const cabTv = document.getElementById('cab-tv--wrap')

cabTv.oninput = () => {
   cabTv.value = '100';
    console.log(cabTv.value);
    
}
cabTv.addEventListener('click', ()=>{
console.log(1);

})


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


