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


