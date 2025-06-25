const price = document.getElementById('price__title');
const list = document.getElementById('price__list');
const rotate = document.getElementById('arrow__price');

console.log(rotate);

price.addEventListener('click', () => {
list.classList.toggle('active__list')
rotate.classList.toggle('rotate__arrow')
})