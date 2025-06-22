const price = document.getElementById('internet__title');
const list = document.getElementById('price__list');
const rotate = document.getElementById('arrow');


price.addEventListener('click', () => {
list.classList.toggle('active__list')
rotate.classList.toggle('rotate__arrow')

})