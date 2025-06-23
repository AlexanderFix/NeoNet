const price = document.getElementById('internet__title');
const list = document.getElementById('price__list');
const rotate = document.getElementById('arrow-internet');

console.log(rotate);

price.addEventListener('click', () => {
list.classList.toggle('active__list')
rotate.classList.toggle('rotate__arrow')
})