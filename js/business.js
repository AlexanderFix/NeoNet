const sliderBusiness = document.getElementById('slider-business');
const selectBusiness = document.getElementById('select-business');


function change(slide, select) {
    // let speed = slide.value === "0" ? "Без интернета" : slide.value === "33.33" ? "50" : slide.value === "66.66" ? "100" : "250";

    select.style.left = slide.value + '%';
    slide.style.background = `linear-gradient(to right, #00abfe ${Number(slide.value)}%, #bbbbbb ${Number(slide.value)}%)`;

    if (slide.value == '100') {
        select.style.left = slide.value - 3 + '%';
    }
}


sliderBusiness.addEventListener('input', () => { change(sliderBusiness, selectBusiness) })

document.getElementById('modal').showModal()
// Модалка юр. тарифы
console.log(document.getElementsByTagName('body')[0]);


document.getElementById('legal').addEventListener('click', () => {
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', `<dialog id="modal">

    </dialog>`)
const modal = document.getElementById('modal')
    
modal.showModal()
document.body.classList.add('lock');
            modal.style = "opacity: 1 ";


 document.addEventListener('keydown', (e) => {

        if (e.code == 'Escape') closeModal();

    })


    modal.addEventListener('click', (e) => {
        const modal = e.currentTarget;
        const clickBackDrop = e.target === modal;
        

        if (clickBackDrop) closeModal();
    })
})



// Закрытие модалки


function closeModal(params) {
    modal.close();
    modal.remove()
    document.body.classList.remove('lock')
    modal.style = "opacity: 0 "
}



const inputField = document.getElementById('phone');


const maskOptions = {
  mask: '+{375} (00) 000-00-00',
//   lazy: false, 
};
const mask = IMask(inputField, maskOptions);