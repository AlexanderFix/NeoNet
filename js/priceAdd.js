const price = document.querySelectorAll('[data-open]');
const list = document.querySelectorAll('[data-list]');
const arrow = document.querySelectorAll('[data-arrow]');




for (let index = 0; index < price.length; index++) {
    price[index].addEventListener('click', () => {
        list.forEach(element => {
            element.classList.toggle('active__list');
        });
        arrow.forEach(element => {
            element.classList.toggle('rotate__arrow');
        });

    })

}



