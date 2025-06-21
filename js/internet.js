const price = document.getElementById('internet__title');
const list = document.getElementById('price__list');

price.addEventListener('click', () => {
list.classList.toggle('active__list')
})