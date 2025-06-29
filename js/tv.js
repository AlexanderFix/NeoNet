
const listChannel = document.querySelectorAll('.list-channel');
const publiclyList = document.getElementById('publicly-available');
const filmslList = document.getElementById('films-series');
const modalClose = document.querySelector('.modal__close');

// Открытие модалки
listChannel.forEach(element => {
    element.addEventListener('click', (e) => {
        modal.showModal();
        document.body.classList.add('lock')

    });
});


// Закрытие модалки
modalClose.addEventListener('click', () => {
    modal.close();
    document.body.classList.remove('lock')
})


document.addEventListener('keydown', (e) => {

    if (e.code == 'Escape') document.body.classList.remove('lock');

})



modal.addEventListener('click', (e) => {
    const modal = e.currentTarget;
    const clickBackDrop = e.target === modal;
    document.body.classList.remove('lock')

    if (clickBackDrop) modal.close();
})


// Добавление каналов

let channel = {};
let films = {}


let films2 = {}

let channel2 = {}

for (let index = 0; index < 20; index++) {
    channel[index] = {
        image: 'img/icons/belarus1.png',
        name: `bel ${index}`,
    }
    films[index] = {
        image: 'img/icons/belarus1.png',
        name: `bel ${index}`,
    }
}
for (let index = 0; index < 10; index++) {
    channel2[index] = {
        image: 'img/icons/belarus1.png',
        name: `bel ${index}`,
    }
    films2[index] = {
        image: 'img/icons/belarus1.png',
        name: `bel ${index}`,
    }
}



for (let i = 0; i < Object.keys(channel).length; i++) {


    publiclyList.insertAdjacentHTML("beforeend", `<div class="modal__channel">
                            <img src="${channel[i].image}" alt="">
                            <p>${channel[i].name}</p>
                        </div> `)
}
for (let i = 0; i < Object.keys(films).length; i++) {


    filmslList.insertAdjacentHTML("beforeend", `<div class="modal__channel">
                            <img src="${films[i].image}" alt="">
                            <p>${films[i].name}</p>
                        </div> `)
}



const modalChange = document.querySelectorAll('.modal__change-item');


modalChange.forEach(element => {

    element.addEventListener('click', (e) => {
        modalChange.forEach(element => {
            element.classList.forEach(e => {

                if (e == 'modal_active') {
                    element.classList.remove('modal_active')
                }
                
            });


        });
        // console.log(modalChange[0].classList);

     e.currentTarget.classList.add('modal_active')

    })

});