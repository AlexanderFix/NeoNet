
let publiclyList = document.getElementById('publicly-available');

const buttonChange = document.querySelectorAll('.button__change-item');
const tarrifs = document.querySelector('.tarif__plans-wrap');
const tarrifsItem = document.getElementsByClassName('tarif__plans');
const tarrifsPrice = document.querySelectorAll('.price__package-wrap');

// Добавление каналов

let baseChannel = {};
let baseFilms = {};

let channel = {};
let films = {};


let films2 = {};

let channel2 = {};

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
        image: 'img/icons/app-svgrepo-com.svg',
        name: `bel ${index}`,
    }
    films2[index] = {
        image: 'img/icons/app-svgrepo-com.svg',
        name: `bel ${index}`,
    }
}
for (let index = 0; index < 12; index++) {
    baseChannel[index] = {
        image: 'img/icons/watch-tv_4341516.png',
        name: `bel ${index}`,
    }
    baseFilms[index] = {
        image: 'img/icons/watch-tv_4341516.png',
        name: `bel ${index}`,
    }
}

function ModalList(id) {
    document.getElementById('publicly-available').innerHTML = ''
    document.getElementById('films-series').innerHTML = ''
    if (id === "nTV") {
        for (let i = 0; i < Object.keys(channel2).length; i++) {

            document.getElementById('publicly-available').insertAdjacentHTML("beforeend", `<div class="modal__channel">
                            <img src="${channel2[i].image}" alt="">
                            <p>${channel2[i].name}</p>
                        </div> `);
        }
        for (let i = 0; i < Object.keys(films2).length; i++) {


            document.getElementById('films-series').insertAdjacentHTML("beforeend", `<div class="modal__channel">
                            <img src="${films2[i].image}" alt="">
                            <p>${films2[i].name}</p>
                        </div> `)
        }
    } else if (id === "aTV") {
        for (let i = 0; i < Object.keys(channel).length; i++) {

            document.getElementById('publicly-available').insertAdjacentHTML("beforeend", `<div class="modal__channel">
                            <img src="${channel[i].image}" alt="">
                            <p>${channel[i].name}</p>
                        </div> `);
        }
        for (let i = 0; i < Object.keys(films).length; i++) {


            document.getElementById('films-series').insertAdjacentHTML("beforeend", `<div class="modal__channel">
                            <img src="${films[i].image}" alt="">
                            <p>${films[i].name}</p>
                        </div> `)
        }
    } else {
        console.log(1);

        for (let i = 0; i < Object.keys(baseChannel).length; i++) {

            document.getElementById('publicly-available').insertAdjacentHTML("beforeend", `<div class="modal__channel">
                            <img src="${baseChannel[i].image}" alt="">
                            <p>${baseChannel[i].name}</p>
                        </div> `);
        }
        for (let i = 0; i < Object.keys(baseFilms).length; i++) {


            document.getElementById('films-series').insertAdjacentHTML("beforeend", `<div class="modal__channel">
                            <img src="${baseFilms[i].image}" alt="">
                            <p>${baseFilms[i].name}</p>
                        </div> `)
        }
    }

}




//Кнопки выбора тарифа

tarrifsItem[0].style.opacity = '1';

buttonChange.forEach(element => {
    element.addEventListener('click', (e) => {


        buttonChange.forEach(element => {
            element.removeAttribute('disabled')
        });

        tarrifsItem[0].style.opacity = '0';

        if (e.target.id === 'codeTv') {
            setTimeout(() => {
                tarrifs.innerHTML = `<section class="tarif__plans">
                    <h2>Кодированные планы</h2>
                    <div class="price__tv-wrap">
                        <div class="price__tv">
                            <div class="price__package-wrap">
                                <div class="price__package">
                                    <section class="price__package-title">
                                        <h4>Семейный пакет</h4>
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">

                                            <defs>
                                                <image width="806" height="806" id="img1"
                                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCA1Ny42MCA1Ny42MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii00LjgiIHk9Ii00LjgiIHdpZHRoPSI1Ny42MCIgaGVpZ2h0PSI1Ny42MCIgcng9IjI4LjgiIGZpbGw9IiMwMGFiZmUiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGcgaWQ9InR2Ij4gPGcgaWQ9InR2XzIiPiA8cGF0aCBpZD0iQ29tYmluZWQgU2hhcGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMDAwOCAzNC4wMDA2SDI5Ljk2NDhDMjkuNDEyNSAzNC4wMDA2IDI4Ljk2NDggMzMuNTUyOSAyOC45NjQ4IDMzLjAwMDZDMjguOTY0OCAzMi40NDgzIDI5LjQxMjUgMzIuMDAwNiAyOS45NjQ4IDMyLjAwMDZINDEuMDAwOEM0MS41NTI1IDMyLjAwMDYgNDIuMDAwOCAzMS41NTIzIDQyLjAwMDggMzEuMDAwNlYxMS4wMDA2QzQyLjAwMDggMTAuNDQ3NyA0MS41NTM0IDEwLjAwMDYgNDEuMDAwOCAxMC4wMDA2SDcuMDAwNzlDNi40NDcwOCAxMC4wMDA2IDYuMDAwNzkgMTAuNDQ2OSA2LjAwMDc5IDExLjAwMDZWMzEuMDAwNkM2LjAwMDc5IDMxLjU1MzIgNi40NDc5MiAzMi4wMDA2IDcuMDAwNzkgMzIuMDAwNkgyMS44NjI3QzIxLjkwMzggMzEuOTk1NSAyMS45NDU3IDMxLjk5MjggMjEuOTg4MiAzMS45OTI4QzIyLjAzMDcgMzEuOTkyOCAyMi4wNzI2IDMxLjk5NTUgMjIuMTEzNyAzMi4wMDA2SDI1LjkzODhDMjUuOTgzIDMyLjAwMDYgMjYuMDI2NiAzMi4wMDM1IDI2LjA2OTMgMzIuMDA5MUMyNi41ODM3IDMyLjA1MDQgMjYuOTg4MiAzMi40ODA4IDI2Ljk4ODIgMzMuMDA1OFYzNy45OTg2SDMzQzMzLjU1MjMgMzcuOTk4NiAzNCAzOC40NDYzIDM0IDM4Ljk5ODZDMzQgMzkuNTUwOSAzMy41NTIzIDM5Ljk5ODYgMzMgMzkuOTk4NkgxNUMxNC40NDc3IDM5Ljk5ODYgMTQgMzkuNTUwOSAxNCAzOC45OTg2QzE0IDM4LjQ0NjMgMTQuNDQ3NyAzNy45OTg2IDE1IDM3Ljk5ODZIMjAuOTg4MlYzNC4wMDA2SDcuMDAwNzlDNS4zNDMwNCAzNC4wMDA2IDQuMDAwNzkgMzIuNjU3NCA0LjAwMDc5IDMxLjAwMDZWMTEuMDAwNkM0LjAwMDc5IDkuMzQyMzMgNS4zNDI1MSA4LjAwMDYxIDcuMDAwNzkgOC4wMDA2MUg0MS4wMDA4QzQyLjY1NzYgOC4wMDA2MSA0NC4wMDA4IDkuMzQyODYgNDQuMDAwOCAxMS4wMDA2VjMxLjAwMDZDNDQuMDAwOCAzMi42NTY5IDQyLjY1NzEgMzQuMDAwNiA0MS4wMDA4IDM0LjAwMDZaTTI0Ljk4ODIgMzcuOTk4NlYzNC4wMDA2SDIyLjk4ODJWMzcuOTk4NkgyNC45ODgyWiIgZmlsbD0iI2Y1ZjVmNSIvPiA8L2c+IDwvZz4gPC9nPgoNPC9zdmc+" />
                                                <image width="800" height="800" id="img2"
                                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjZmZmZmZmIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDQ4NC44MjkgNDg0LjgyOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3Ryb2tlPSIjZmZmZmZmIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGc+IDxnPiA8cGF0aCBkPSJNMjk2LjA3MiwxNDUuNTk3YzguOTc5LDAsMTcuNzQ0LTMuNDQ0LDI0LjMxOC05LjU1N2M2LjUyMy02LjA2NSwxMC42MDktMTQuNDksMTEuMjk3LTIzLjM3NCBjMC42OTctOS4wMTEtMi4wODItMTguMDg0LTcuNzQtMjUuMTM1Yy01LjU0My02LjkwNS0xMy41OTgtMTEuNTk2LTIyLjM1Mi0xMi45NTVjLTguOTY3LTEuMzkyLTE4LjI5MSwwLjcxLTI1Ljc2Niw1Ljg2MSBjLTcuMjYsNS4wMDItMTIuNTIxLDEyLjY1OS0xNC41MzUsMjEuMjQ3Yy0yLjA3OCw4Ljg1Ny0wLjY2NiwxOC4zNjgsMy45MzQsMjYuMjJjNC40NDMsNy41ODYsMTEuNjc3LDEzLjM4NSwyMC4wNjIsMTYuMDM3IEMyODguNzczLDE0NS4wNDIsMjkyLjQyLDE0NS41OTcsMjk2LjA3MiwxNDUuNTk3eiIvPiA8cGF0aCBkPSJNMzk1LjU2OCwyMzguNTg5YzkuMDQ1LDAsMTcuNDQ3LTUuNDg0LDIxLjA5Mi0xMy43NjRjMy42OTEtOC4zODYsMS45MzktMTguNDM2LTQuMzQ4LTI1LjA4OSBjLTYuMjg1LTYuNjUxLTE2LjE5Ny04Ljk3MS0yNC43ODEtNS43NzVjLTguNDQzLDMuMTQ1LTE0LjQxNiwxMS4xOTMtMTQuOTU1LDIwLjE5IEMzNzEuNzkxLDIyNy4yMTgsMzgyLjQ3MSwyMzguNTg5LDM5NS41NjgsMjM4LjU4OXoiLz4gPHBhdGggZD0iTTgyLjI0NywyMzcuNDIzYzkuMDQ1LDAsMTcuNDQ2LTUuNDg0LDIxLjA5MS0xMy43NjRjMy42OTItOC4zODYsMS45NC0xOC40MzYtNC4zNDktMjUuMDg5IGMtNi4yODUtNi42NTEtMTYuMTk3LTguOTcxLTI0Ljc4LTUuNzc1Yy04LjQ0NiwzLjE0NS0xNC40MTUsMTEuMTkzLTE0Ljk1NSwyMC4xOUM1OC40NjgsMjI2LjA1Myw2OS4xNDcsMjM3LjQyMyw4Mi4yNDcsMjM3LjQyM3oiLz4gPHBhdGggZD0iTTEyMy44ODMsMjg5LjUzM2MtMC4xOTUtMS4xMzktMC4zNTUtMi4yOTktMC41OTItMy40NzFjLTAuNTk0LTIuMzg5LTEuMTk2LTQuNzc1LTEuODAxLTcuMTYzIGMtMC43MjQtMi4wNzktMS4zOTktNC4xODUtMi4xODYtNi4yNDFjLTAuODEzLTIuMTI2LTEuODgtNC4xNzctMi44NDItNi4yMzhjLTAuOTYyLTEuNjU3LTEuOTMxLTMuMzEyLTIuOTAyLTQuOTYyIGMtMS4wODMtMS41MDctMi4xMjEtMy4wNjYtMy4yODEtNC41MTZjLTIuOTMtMy4zNDYtNS45NzYtNi4zMDctOS41LTkuMDI0Yy0xLjcwMi0xLjEzMi0zLjQxMy0yLjE5OS01LjIxMS0zLjE3NCBjLTMuMDE2LTEuNDM0LTYuMDY1LTIuODY0LTkuMzYzLTMuNTEzYy0zLjkzOS0wLjc3NS03LjkzNC0wLjI3MS0xMS42NDQsMS4yMjljLTUuMjE2LDIuMTA4LTkuMzY0LDUuOTAzLTEzLjg2OSw5LjE1NCBjLTQuODU5LDMuNTA4LTEwLjAwOSw2LjkzNi0xNS41ODUsOS4xOTVjLTAuMTExLDAuMDQ0LTAuMjIzLDAuMDg4LTAuMzM0LDAuMTMyYy0xLjAxMiwwLjQzOC0yLjA2NywwLjcyOC0zLjEwOSwxLjA3NCBjLTMuMTY0LDAuOTI1LTQuNTc4LDAuMjkzLTQuNTc4LDAuMjkzbC00LjUyNS0xLjg1M2MtMS4yNS0wLjUwMy0yLjY1OC0wLjU4LTMuOTg2LTAuMTcyYzEuNjE5LTEyLjM4NCwzLjczMi0yNC44OTEsMi41OS0zNy40MTUgYy0xLjE1LTEyLjYxNy02LjcyOS0yNC4zMDEtOC41OC0zNi44MDdjLTAuNzA5LTQuNzkyLTAuODY5LTkuNjY4LTAuMTctMTQuNDcxaDEuODM0YzEuMjQzLDAsMi4wNjQtMS4zNzMsMS40NzUtMi40NjggbC0xLjIzOC0yLjMwOWM4LjQ4OC03LjI0NSwxNy4xNDYtMTcuNTAyLDE2Ljg0OC0yOS4zMjhjLTAuMjctMTAuNjk3LTcuMzYyLTIyLjE3NS0xOC43NzEtMjMuMzYxIGMtMTAuNTUyLTEuMDk4LTE5LjAyMiw3LjIyNS0yMS42MzMsMTYuODU2Yy0xLjI0MSw0LjU4MS0xLjI2Niw5LjQ1OCwwLjA4MSwxNC4wMTZjMS42NDksNS41OCw0Ljk5NCwxMC41MzQsOC43OTEsMTQuODc3IGMyLjE2OCwyLjQ4Miw0LjUzNyw0Ljc4Nyw3LjA0MSw2LjkyOGwtMS4xNzQsMi4xNTVjLTAuNzYxLDEuMDg4LDAuMDQ5LDIuNjMzLDEuMzc1LDIuNjMzaDEuNDc3IGMtMS42NjUsMTIuNTk3LDIuMTk3LDI0Ljg0OSw1LjY3MiwzNi43OThjMS43NTIsNi4wMjUsMy4wODYsMTEuOTUxLDMuMzU4LDE4LjI0NGMwLjI3MSw2LjI2LTAuMjEsMTIuNTI4LTAuOTIyLDE4Ljc0NCBjLTAuNDc0LDQuMTI2LTEuMDUzLDguMjQtMS42MDMsMTIuMzU1Yy0wLjUzMywzLjk4Mi0xLjE1NCw3Ljk4Ni0xLjEyNywxMi4wMTRjMC4wNDksNy4wOTksMi41NywxMy40MzksNi4zNDIsMTkuMzY2bDMuMjUyLTIuMDY4IGMtMy4zMjgtNS4yMy01LjA0Ny05LjQ1OC01LjU2NC0xNC4yNmMwLjc3NSwwLjc4NSwxLjc4NSwxLjU5NSwyLjk4NiwyLjMxNmMwLjc0OCwwLjM5NCwxLjYsMC45MDMsMi40NDcsMS4xNjcgYzEuMzI0LDAuNDgzLDIuNjg0LDAuODQ0LDQuMDgyLDEuMDRjMS4zODQsMC4xMzMsMi43MzUsMC4xOSw0LjEyNSwwLjE5OWMwLjkwOC0wLjAyOSwxLjc5MS0wLjExMiwyLjcwMy0wLjE5OSBjNC45OTQtMC43NSw5Ljc1Mi0yLjEyNSwxNC40NDEtNGwtMi4yMjcsNDEuMTI4Yy0wLjI0OCw0LjgyLDAuODQzLDkuNjY0LDMuMTg2LDEzLjg4OGwzLjY2OCw3NS43OTggYzAuMjE0LDQuMTMyLDMuNjk0LDcuNTIxLDcuODM3LDcuNTkzYzQuMjQxLDAuMDczLDcuODgzLTMuMzMxLDguMTAxLTcuNTY2bDMuMTIzLTYwLjI5OGwyLjkxNiw2MC4yNzEgYzAuMjE1LDQuMTMzLDMuNjk1LDcuNTIxLDcuODM5LDcuNTkzYzQuMjQxLDAuMDczLDcuODgxLTMuMzMyLDguMTAxLTcuNTY2bDMuOTY3LTc1Ljk1YzIuMDA0LTMuOTIsMy4wMzUtOS4wNSwyLjc4MS0xMy43NjIgbC0xLjUwMi0yNy43NWMwLjM4OSwxLjExMiwwLjc4NiwyLjIyMSwxLjE4LDMuMzMyYzAuNjkxLDIuMzAzLDEuMjI4LDQuNjY1LDEuODMsNi45OTRjMC41NzksMy4yMzEsMS4yNzEsNi40NzYsMS41ODQsOS43NDcgYzAuMjMzLDIuNDQ4LDAuNDg3LDQuODk1LDAuNzM2LDcuMzQxbDAuMDUzLDAuNTIxYzAuMzcyLDMuNTU0LDMuNTQ4LDYuMjY0LDcuMTEsNi4xMDRjMy43MTQtMC4xNjYsNi4xODQtMy4zNDUsNi41MTctNi44NjcgQzEyNS42OTQsMzA1Ljc2NywxMjUuMTYxLDI5Ny41MzIsMTIzLjg4MywyODkuNTMzQzEyMy42ODgsMjg4LjM5NSwxMjQuMDY1LDI5MC42NywxMjMuODgzLDI4OS41MzN6Ii8+IDxwYXRoIGQ9Ik0xODMuNzUsMTM4LjkzNWM5LjAwNCwwLDE3Ljc5LTMuNTA2LDI0LjMxOS05LjcwN2M2LjQ5MS02LjE2NiwxMC40NTgtMTQuNzEsMTAuOTQ5LTIzLjY1MiBjMC40OTUtOS4wMzYtMi41MzctMTguMDQ4LTguNDI0LTI0LjkyNmMtNS43OTQtNi43NjktMTQuMDgtMTEuMTc4LTIyLjk0MS0xMi4xNTJjLTkuMDI5LTAuOTkzLTE4LjIzOSwxLjU2My0yNS40MzgsNy4xMDcgYy03LjAzMyw1LjQxNi0xMS44NjUsMTMuNDMxLTEzLjMxNSwyMi4xOTNjLTEuNDg3LDguOTg1LDAuNTg1LDE4LjM2NCw1Ljc2MSwyNS44NmM1LjAyOSw3LjI4MywxMi43NiwxMi41MjEsMjEuNDA1LDE0LjQzOCBDMTc4LjU4NiwxMzguNjU2LDE4MS4xNjgsMTM4LjkzNSwxODMuNzUsMTM4LjkzNXoiLz4gPHBhdGggZD0iTTQ3OS44NzMsMTQyLjIyNmMtNC40MTgtNi4wMy0xMS42OTUtOS41NjItMTkuMTg0LTguMDU0YzcuOTAyLDUuMTM2LDExLjg0NiwxNS40MTcsMTAuNDE4LDI0LjYwNSBjLTEuNDczLDkuNDc1LTguMTA3LDE3LjU2My0xNS4wMjcsMjMuNzkzYzEuMzc5LDEuMzksMi44MTIsMi43MjUsNC4yOTksMy45OTVsLTEuMTc0LDIuMTU1Yy0wLjc2MiwxLjA4OSwwLjA0OSwyLjYzMywxLjM3NSwyLjYzMyBoMS43NjhjLTAuNjk1LDEwLjEtMy44ODcsMTkuODgzLTcuNzM2LDI5LjE4MmMtMS44NCw0LjQ0Mi0zLjg1Nyw4LjgwNy01LjkyLDEzLjE1Yy0yLjIyMyw0LjY4NC00LjIzMiw5LjMwOS01LjQzOSwxNC4zNzQgYy0wLjM3MS01LjU0MS0wLjMzMi0xMS4xNDUsMC42NDUtMTYuNjI1YzAuODk2LTUuMDI4LDIuNTc4LTkuODk3LDMuNTktMTQuOTA5YzEuOTEtOS40NzEsMS44OTUtMTguOTcyLDAuNzQ4LTI4LjU0MmgxLjk3MyBjMS4yNDIsMCwyLjA2Ni0xLjM3MiwxLjQ3Ny0yLjQ2OGwtMS4yMzgtMi4zMDljOC40ODYtNy4yNDcsMTcuMTQ1LTE3LjUwMiwxNi44NDgtMjkuMzI3Yy0wLjI3MS0xMC42OTYtNy4zNjEtMjIuMTc1LTE4Ljc3LTIzLjM2MiBjLTEwLjU1My0xLjA5Ny0xOS4wMjMsNy4yMjUtMjEuNjM3LDE2Ljg1NmMtMS4yNCw0LjU4LTEuMjY2LDkuNDU4LDAuMDg0LDE0LjAxN2MxLjY0OCw1LjU3OSw0Ljk5MiwxMC41MzMsOC43ODksMTQuODc3IGMyLjE3LDIuNDgxLDQuNTM3LDQuNzg2LDcuMDQxLDYuOTI4bC0xLjE3MiwyLjE1NWMtMC43NywxLjA4NywwLjA1MywyLjYzMywxLjM3NSwyLjYzM2gxLjkgYzAuNjc4LDUuNTY0LDEuMDY0LDExLjE3OSwwLjc3MywxNi43ODRjLTAuMjY0LDUuMDE2LTEuMDk4LDkuOTctMi4yNTQsMTQuODUyYy0wLjY2NCwyLjgwNC0xLjUwNCw1LjU2My0yLjE3Niw4LjM2NSBjLTAuNzMyLDMuMDY3LTEuMTcsNi4yMDItMS4zNzEsOS4zNDhjLTAuNDA4LDYuMzA5LDAuMDk2LDEyLjYzNiwwLjg0NCwxOC44OTljMC4yNTQsMi4xNDQsMC42MjMsNC4yODYsMC43NjQsNi40NCBjLTEuNTUzLDAuMTgzLTMuMDY2LTAuMTMxLTQuNTY2LTAuNDk1Yy0xLjAwNC0wLjM1NC0yLjAyMS0wLjY0OC0yLjk5Mi0xLjA5MWMtNS41OS0yLjI4MS0xMC44NTctNS44ODUtMTUuNjA5LTkuNTcgYy00LjM2MS0zLjM4MS04LjQ0Ny03LjA4OS0xMy40NzMtOS40OTNjLTMuNDM5LTEuNjQ1LTcuMjAzLTIuNTI4LTExLjAxNC0yLjAzNGMtMy44OTgsMC41MDYtNy42NTIsMi4wMDktMTEuMDg0LDMuODg0IGMtMi43NzMsMS41MTYtNS4zODEsMy4zMjgtNy44MjQsNS4zM2MtMi44NDYsMi4zMy01LjE5Myw1LjAzMy03LjU0Myw3Ljg0N2MtMS4wNjIsMS41MTUtMi4xNDMsMy4wMjEtMy4xNDgsNC41NzQgYy0wLjM0NiwwLjYxMi0wLjcwMSwxLjI0NS0xLjA1MywxLjg2OWMwLjA5Mi03LjQzNS0wLjA4OC0xNC44MTQtMC41MzktMjIuMjM1Yy0wLjIzLTIuMzc4LTAuNDU5LTQuNzU3LTAuNjk1LTcuMTM1IGMtMC44NDItNi4yNjItMS45MjQtMTIuNDIyLTMuMjgzLTE4LjU5M2MtMC40ODgtMS44NTItMC45ODItMy43MTktMS40NzktNS41OTRjLTIuMDgtNi42NjktNC40OTYtMTMuMDc3LTcuNDg4LTE5LjM5MyBjLTEuMzgxLTIuNjI1LTIuODMtNS4xODYtNC4zMjYtNy43NDZjLTYuNTc4LTEwLjI5LTE0Ljg5NS0xOS40MjEtMjUuNDY5LTI1LjcwMmMtOS42ODYtNS43NTUtMjEuMTIzLTguNzA5LTMyLjI5OS02LjI0NiBjLTkuNzg5LDIuMTU2LTE4LjY2Niw3LjU0Ni0yNi4xLDE0LjEzM2MtOC4wNTIsNy4xMzQtMTQuNTE2LDE1LjkzNS0xOS40NTIsMjUuNDY1Yy04LjQ3Mi0yMS4yMjktMjUuNzIxLTQwLjQxNi00OC45NTUtNDQuODY5IGMtMTEuMzEyLTIuMTY4LTIzLjEwNC0wLjMzMS0zMy4zNSw0Ljg4NmMtMTAuMjQ4LDUuMjE5LTE4LjkwNCwxMy4yNDEtMjUuNDM2LDIyLjY2MmMtMTQuMTk3LDIwLjQ4LTE4LjAzMyw0Ni4zMzYtMTcuNDYsNzAuNzUxIGMwLjE3OCw3LjU3OSwwLjc2MywxNS4xNjMsMS43MTgsMjIuNjgzbDAuMDE2LDAuMTIxYzAuNzMzLDUuNTM2LDUuODgyLDkuNjAxLDExLjQzNCw5LjA2YzUuNDgyLTAuNTM1LDkuNzA1LTUuNDE5LDkuNDU5LTEwLjkxOCBjLTAuNDMyLTEwLjEzNi0wLjE4My0yMC4zNDYsMS4wNDMtMzAuNDE5YzEuNTA0LTEyLjM1NSw0LjUyMi0yNC44MDksMTAuNjI5LTM1Ljc0N2wtNy43MzIsNjMuODM2IGMtMS4xMjEsOS43MTQsMS4yMTUsMTkuNjA5LDYuNzIzLDI3LjcwNWw1LjQzOSwxMTQuNjg4YzAuMzI0LDYuNDI0LDUuNzk0LDExLjY1NywxMi4yMzIsMTEuNjU2IGM2LjQ1NS0wLjAwMiwxMS45MjItNS4yNDIsMTIuMjExLTExLjY4OGwzLjg4NS04Ni42NDFsNC4wMzcsODYuNjYyYzAuMzIsNi40MjYsNS43ODUsMTEuNjYyLDEyLjIyNSwxMS42NjYgYzYuNDU0LDAuMDAzLDExLjkyNC01LjIzMywxMi4yMTktMTEuNjc3bDUuMjU4LTExNS4wODZjNS4xMzctNy43NjQsNy42NTQtMTcuMzE4LDYuNDQ3LTI3LjI4NmwtNy42MzktNjMuMDY4IGM4LjUxNywxNS43NTYsMTAuOTY5LDM0LjI4LDExLjM3Myw1MS45NTRjLTAuMTI1LDQuMTI2LTAuMTM2LDguMjQyLTAuMDksMTIuMzY5Yy0wLjAyMywwLjY4OC0wLjA0MSwxLjA3My0wLjA0MSwxLjA3MyBjLTAuMjI5LDUuNTAzLDQuMDIsMTAuNDE4LDkuNTE2LDEwLjkyNGM1LjgzNywwLjUzNSwxMS4yMzQtMy44NzIsMTEuNzE5LTkuNzM0bDAuMDMxLTAuNGMwLjE5Ny0yLjM3MiwwLjM5NS00Ljc0MiwwLjU4Ni03LjExNCBjMC41MzEtNC41NDEsMS4xNDMtOS4wNTMsMS44NDItMTMuNTdjMS43NDQtOC45MzcsMy44OTQtMTcuNjg3LDcuMjM4LTI2LjE3NmMwLjYyOS0xLjQzNCwxLjE5OS0yLjkwMiwxLjg1OS00LjMxMnY4LjI2NWwwLjI0MiwxMSBsLTE3LjkzMyw4MC42NDZjLTAuODA0LDQuMTAxLDIuNDM1LDguMDI4LDYuNjA2LDguMDI4aDEzLjE1MmwzLjk1NSw4MS43NGMwLjMzNCw2LjQ1Nyw1LjgwNSwxMS43MjksMTIuMjc2LDExLjc3NSBjNi41MywwLjA0OSwxMi4xMDMtNS4yMTUsMTIuNDM4LTExLjczM2w0LjIzNi04MS43ODJoMS4xNzJsMy45NTMsODEuNzRjMC4zMzYsNi40NTcsNS44MDcsMTEuNzI5LDEyLjI3OSwxMS43NzUgYzYuNTMxLDAuMDQ5LDEyLjEwNC01LjIxNCwxMi40NDEtMTEuNzMzbDQuMjMyLTgxLjc4MmgxMy4yMTdjNC4xOTMsMCw3LjM5NS0zLjk0LDYuNi04LjA0N2wtMTcuODQ0LTgxLjYwNWwwLjE1Mi04LjcwNnYtOC4wNSBjMC4zMDcsMC43MjgsMC42MTMsMS40NTcsMC45MTgsMi4xODNjMC41NDMsMS40NzUsMS4wODQsMi45NDQsMS42MTksNC40MDJjMS42MjUsNS4wNzcsMywxMC4xNjksNC4yMDMsMTUuMzYyIGMwLjM5NSwyLjA0OSwwLjc4OSw0LjA5OCwxLjE4Miw2LjE0NmMwLjY4Niw0LjQ2NiwxLjI3MSw4LjkzLDEuNzkzLDEzLjQxN2MwLjE5MSwyLjM0NCwwLjM4Nyw0LjY4OCwwLjU4LDcuMDMxbDAuMDM1LDAuNDM4IGMwLjY5NSw4LjA4NywxMC4yNzcsMTIuNDQsMTYuODM2LDcuNjIzYy0wLjgyLDIuMTUtMS40OTIsNC4zNjctMi4yMjEsNi41NTFjLTAuNTgyLDIuMzg2LTEuMTYsNC43NzItMS43MzQsNy4xNjEgYy0wLjUzNSwyLjc5My0wLjg5Niw1LjYyNS0xLjMzOCw4LjQzNWMtMC4yOTUsMy42NjQtMC43MjMsNy4zNDgtMC43NCwxMS4wMjRjLTAuMDE2LDIuNzc2LTAuMDM3LDUuNTU0LTAuMDUxLDguMzMgYy0wLjAwOCwzLjU3NSwyLjg1OSw2LjY0Niw2LjQzMiw2Ljg1N2MzLjYwOSwwLjIxNSw2LjgzOC0yLjU0Miw3LjE5Ny02LjEzOWwwLjA0OS0wLjQ3OWMwLjIzNC0yLjMzOSwwLjQ3NS00LjY3OCwwLjY5OS03LjAxOSBjMC4zMjYtMy40MDEsMS4wMDgtNi43NjUsMS41OTQtMTAuMTI5YzAuNTk0LTIuMzQ0LDEuMTI3LTQuNzE0LDEuNzk1LTcuMDM3YzAuNjU4LTEuOSwxLjMxMS0zLjgwNSwxLjk1OS01LjcwOCBjMC4xOTUtMC40NCwwLjM5NS0wLjg4MiwwLjU5Mi0xLjMyNHY1LjEwOWwwLjA4OCw1LjEyNWwtMTIuNDU5LDU2LjAzN2MtMC41MjksMi43MSwxLjYwOSw1LjMwOSw0LjM2OSw1LjMwOWg5LjM2OUwzNzcsNDA0LjM1OSBjMC4yMjcsNC4xMzIsMy43MTksNy41MDksNy44NTksNy41NjVjNC4yNDIsMC4wNiw3Ljg3My0zLjM1OCw4LjA3OC03LjU5NGwyLjQwMi00OS42NTdoMS4wNjJsMi41NzIsNDkuNjg2IGMwLjIyOSw0LjEzMSwzLjcyMSw3LjUwOSw3Ljg2Myw3LjU2NWM0LjI0LDAuMDYsNy44NzEtMy4zNTgsOC4wNzYtNy41OTRsMi40MDItNDkuNjU3aDkuNDY5YzIuNzczLDAsNC44OTMtMi42MDQsNC4zNjMtNS4zMjEgbC0xMi4zMTQtNTYuMzM0bDAuMTIzLTUuNjY4di0xNC40OTdjNC45MDIsMi4xMjQsOS44OTUsMy43MjYsMTUuMTcyLDQuNTgyYzguNjA5LDAuNzA0LDEyLjA3Ni0xLjUxNiwxMi4wNzYtMS41MTYgYzEuNzczLTAuODUzLDMuNDU5LTIuMDQ4LDQuNzI3LTMuNTY2YzAuODc1LTAuOTIxLDEuMjg3LTEuNzE3LDEuNjM3LTIuMjQ5YzAuMzItMC41MzgsMC40OTItMC44MjUsMC40OTItMC44MjUgYzIuOTEtNC45NzMtMi4zNTctMTAuOTQzLTcuNjI3LTguNjMzbC0wLjg3NSwwLjQ3MWwwLjA0My0wLjQ0N2MwLjg4Ny02LjI3MSwyLjA1MS0xMi42NDIsNC4wNTUtMTguNjU2IGMxLjUzNy00LjYxMiwzLjk5OC04LjkzNCw2LjAwNi0xMy4zNTNjMi40NjEtNS40MTEsNC43NjItMTAuOTAyLDYuNjQ2LTE2LjU0MWMyLjI0NC02LjcxNywzLjkyMi0xMy42ODMsNC4zNTItMjAuNzcxaDIuMTI1IGMxLjI0NCwwLDIuMDY0LTEuMzczLDEuNDc1LTIuNDY4bC0xLjIzOC0yLjMwOWM2LjM3MS01LjQ0LDEyLjM3My0xMi4xMzYsMTUuMjY4LTIwLjEyNiBDNDg2LjE5OSwxNTguNDI0LDQ4NC45NDMsMTQ5LjEzNiw0NzkuODczLDE0Mi4yMjZDNDc3LjA3MiwxMzguNDAzLDQ4Mi45ODIsMTQ2LjQ2NCw0NzkuODczLDE0Mi4yMjZ6Ii8+IDwvZz4gPC9nPiA8L2c+Cg08L3N2Zz4=" />
                                            </defs>
                                            <style>
                                            </style>
                                            <use id="tv-svgrepo-com (6)" href="#img1"
                                                transform="matrix(.31,0,0,.31,0,0)" />
                                            <use id="family-with-balloons-svgrepo-com" href="#img2"
                                                transform="matrix(.065,0,0,.065,99,87)" />
                                        </svg>
                                        <div class="price__package-item">
                                            <ul>
                                                <li>
                                                    <svg fill="#000000" viewBox="0 0 32 32" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg">

                                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                            stroke-linejoin="round" />

                                                        <g id="SVGRepo_iconCarrier">
                                                            <title>tv</title>
                                                            <path
                                                                d="M26 26.75h-20c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h20c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM28 2.75h-24c-1.794 0.002-3.248 1.456-3.25 3.25v16c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-16c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM28.75 22c-0 0.414-0.336 0.75-0.75 0.75h-24c-0.414-0-0.75-0.336-0.75-0.75v-16c0.001-0.414 0.336-0.749 0.75-0.75h24c0.414 0 0.75 0.336 0.75 0.75v0z" />
                                                        </g>

                                                    </svg>
                                                    <p><strong>Для всеx видов ТВ</strong><br>35 каналов<br></p>
                                                </li>
                                            </ul>

                                        </div>
                                    </section>
                                    
                                    <div class="price__package-connect">
                                        <p class="list-channel" id="family-list-channel">Список каналов</p>
                                        <p class="price__package-text" data-payModal>214,70р. / месяц</p>
                                        <button class="button" id="familyModalTV">Подключить</button>
                                    </div>
                                </div>
                                <div class="price__package">
                                    <section class="price__package-title">
                                        <h4>18+ пакет</h4>
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
                                            <title>Новый проект</title>
                                            <defs>
                                                <image width="806" height="806" id="img12"
                                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCA1Ny42MCA1Ny42MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii00LjgiIHk9Ii00LjgiIHdpZHRoPSI1Ny42MCIgaGVpZ2h0PSI1Ny42MCIgcng9IjI4LjgiIGZpbGw9IiMwMGFiZmUiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGcgaWQ9InR2Ij4gPGcgaWQ9InR2XzIiPiA8cGF0aCBpZD0iQ29tYmluZWQgU2hhcGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMDAwOCAzNC4wMDA2SDI5Ljk2NDhDMjkuNDEyNSAzNC4wMDA2IDI4Ljk2NDggMzMuNTUyOSAyOC45NjQ4IDMzLjAwMDZDMjguOTY0OCAzMi40NDgzIDI5LjQxMjUgMzIuMDAwNiAyOS45NjQ4IDMyLjAwMDZINDEuMDAwOEM0MS41NTI1IDMyLjAwMDYgNDIuMDAwOCAzMS41NTIzIDQyLjAwMDggMzEuMDAwNlYxMS4wMDA2QzQyLjAwMDggMTAuNDQ3NyA0MS41NTM0IDEwLjAwMDYgNDEuMDAwOCAxMC4wMDA2SDcuMDAwNzlDNi40NDcwOCAxMC4wMDA2IDYuMDAwNzkgMTAuNDQ2OSA2LjAwMDc5IDExLjAwMDZWMzEuMDAwNkM2LjAwMDc5IDMxLjU1MzIgNi40NDc5MiAzMi4wMDA2IDcuMDAwNzkgMzIuMDAwNkgyMS44NjI3QzIxLjkwMzggMzEuOTk1NSAyMS45NDU3IDMxLjk5MjggMjEuOTg4MiAzMS45OTI4QzIyLjAzMDcgMzEuOTkyOCAyMi4wNzI2IDMxLjk5NTUgMjIuMTEzNyAzMi4wMDA2SDI1LjkzODhDMjUuOTgzIDMyLjAwMDYgMjYuMDI2NiAzMi4wMDM1IDI2LjA2OTMgMzIuMDA5MUMyNi41ODM3IDMyLjA1MDQgMjYuOTg4MiAzMi40ODA4IDI2Ljk4ODIgMzMuMDA1OFYzNy45OTg2SDMzQzMzLjU1MjMgMzcuOTk4NiAzNCAzOC40NDYzIDM0IDM4Ljk5ODZDMzQgMzkuNTUwOSAzMy41NTIzIDM5Ljk5ODYgMzMgMzkuOTk4NkgxNUMxNC40NDc3IDM5Ljk5ODYgMTQgMzkuNTUwOSAxNCAzOC45OTg2QzE0IDM4LjQ0NjMgMTQuNDQ3NyAzNy45OTg2IDE1IDM3Ljk5ODZIMjAuOTg4MlYzNC4wMDA2SDcuMDAwNzlDNS4zNDMwNCAzNC4wMDA2IDQuMDAwNzkgMzIuNjU3NCA0LjAwMDc5IDMxLjAwMDZWMTEuMDAwNkM0LjAwMDc5IDkuMzQyMzMgNS4zNDI1MSA4LjAwMDYxIDcuMDAwNzkgOC4wMDA2MUg0MS4wMDA4QzQyLjY1NzYgOC4wMDA2MSA0NC4wMDA4IDkuMzQyODYgNDQuMDAwOCAxMS4wMDA2VjMxLjAwMDZDNDQuMDAwOCAzMi42NTY5IDQyLjY1NzEgMzQuMDAwNiA0MS4wMDA4IDM0LjAwMDZaTTI0Ljk4ODIgMzcuOTk4NlYzNC4wMDA2SDIyLjk4ODJWMzcuOTk4NkgyNC45ODgyWiIgZmlsbD0iI2Y1ZjVmNSIvPiA8L2c+IDwvZz4gPC9nPgoNPC9zdmc+" />
                                                <image width="800" height="800" id="img22"
                                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjZmZmZmZmIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHN0cm9rZT0iI2ZmZmZmZiI+Cg08ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCIvPgoNPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cg08ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+Cg08cGF0aCBkPSJNMTgsNWgxVjZhMSwxLDAsMCwwLDIsMFY1aDFhMSwxLDAsMCwwLDAtMkgyMVYyYTEsMSwwLDAsMC0yLDBWM0gxOGExLDEsMCwwLDAsMCwyWk03LDdWMTdhMSwxLDAsMCwwLDIsMFY3QTEsMSwwLDAsMCw3LDdaTTIxLjYsOWExLDEsMCwwLDAtLjc4LDEuMTgsOSw5LDAsMSwxLTctNywxLDEsMCwxLDAsLjQtMkExMC44LDEwLjgsMCwwLDAsMTIsMSwxMSwxMSwwLDEsMCwyMywxMmExMC44LDEwLjgsMCwwLDAtLjIyLTIuMkExLDEsMCwwLDAsMjEuNiw5Wk0xMSw5djFhMywzLDAsMCwwLC43OCwyQTMsMywwLDAsMCwxMSwxNHYxYTMsMywwLDAsMCwzLDNoMWEzLDMsMCwwLDAsMy0zVjE0YTMsMywwLDAsMC0uNzgtMkEzLDMsMCwwLDAsMTgsMTBWOWEzLDMsMCwwLDAtMy0zSDE0QTMsMywwLDAsMCwxMSw5Wm01LDZhMSwxLDAsMCwxLTEsMUgxNGExLDEsMCwwLDEtMS0xVjE0YTEsMSwwLDAsMSwxLTFoMWExLDEsMCwwLDEsMSwxWm0wLTZ2MWExLDEsMCwwLDEtMSwxSDE0YTEsMSwwLDAsMS0xLTFWOWExLDEsMCwwLDEsMS0xaDFBMSwxLDAsMCwxLDE2LDlaIi8+Cg08L2c+Cg08L3N2Zz4=" />
                                            </defs>
                                            <style>
                                            </style>
                                            <use id="tv-svgrepo-com (6)" href="#img12"
                                                transform="matrix(.31,0,0,.31,0,0)" />
                                            <use id="18-plus-svgrepo-com (1)" href="#img22"
                                                transform="matrix(.068,0,0,.068,98,86)" />
                                        </svg>

                                        <div class="price__package-item">
                                            <ul>
                                                <li>
                                                    <svg fill="#000000" viewBox="0 0 32 32" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg">

                                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                            stroke-linejoin="round" />

                                                        <g id="SVGRepo_iconCarrier">
                                                            <title>tv</title>
                                                            <path
                                                                d="M26 26.75h-20c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h20c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM28 2.75h-24c-1.794 0.002-3.248 1.456-3.25 3.25v16c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-16c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM28.75 22c-0 0.414-0.336 0.75-0.75 0.75h-24c-0.414-0-0.75-0.336-0.75-0.75v-16c0.001-0.414 0.336-0.749 0.75-0.75h24c0.414 0 0.75 0.336 0.75 0.75v0z" />
                                                        </g>

                                                    </svg>
                                                    <p><strong>Для всеx видов ТВ</strong><br>3 канала<br></p>
                                                </li>
                                            </ul>

                                        </div>
                                    </section>
                      
                                    <div class="price__package-connect">
                                        <p class="list-channel" id="priv-list-channel">Список каналов</p>

                                        <p class="price__package-text" data-payModal>2,70р. / месяц</p>
                                        <button class="button" id="privModalTV">Подключить</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </section>`;
            }, 300);
            setTimeout(() => {
                tarrifsItem[0].style.opacity = '1';
                modalOpen(document.querySelectorAll('.list-channel'), document.querySelectorAll('.price__package-wrap')[0].querySelectorAll('.button'))
            }, 400);

        } else {
            setTimeout(() => {
                tarrifs.innerHTML = `<section class="tarif__plans">
                    <h2>Тарифные планы</h2>
                    <div action="" class="price__tv-wrap">
                        <div class="price__tv">
                            <div class="price__package-wrap">
                                <div class="price__package">

                                    <section class="price__package-title">
                                        <h4>Базовый пакет</h4>
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">

                                            <defs>
                                                <image width="806" height="806" id="img1"
                                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCA1Ny42MCA1Ny42MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii00LjgiIHk9Ii00LjgiIHdpZHRoPSI1Ny42MCIgaGVpZ2h0PSI1Ny42MCIgcng9IjI4LjgiIGZpbGw9IiMwMGFiZmUiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGcgaWQ9InR2Ij4gPGcgaWQ9InR2XzIiPiA8cGF0aCBpZD0iQ29tYmluZWQgU2hhcGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMDAwOCAzNC4wMDA2SDI5Ljk2NDhDMjkuNDEyNSAzNC4wMDA2IDI4Ljk2NDggMzMuNTUyOSAyOC45NjQ4IDMzLjAwMDZDMjguOTY0OCAzMi40NDgzIDI5LjQxMjUgMzIuMDAwNiAyOS45NjQ4IDMyLjAwMDZINDEuMDAwOEM0MS41NTI1IDMyLjAwMDYgNDIuMDAwOCAzMS41NTIzIDQyLjAwMDggMzEuMDAwNlYxMS4wMDA2QzQyLjAwMDggMTAuNDQ3NyA0MS41NTM0IDEwLjAwMDYgNDEuMDAwOCAxMC4wMDA2SDcuMDAwNzlDNi40NDcwOCAxMC4wMDA2IDYuMDAwNzkgMTAuNDQ2OSA2LjAwMDc5IDExLjAwMDZWMzEuMDAwNkM2LjAwMDc5IDMxLjU1MzIgNi40NDc5MiAzMi4wMDA2IDcuMDAwNzkgMzIuMDAwNkgyMS44NjI3QzIxLjkwMzggMzEuOTk1NSAyMS45NDU3IDMxLjk5MjggMjEuOTg4MiAzMS45OTI4QzIyLjAzMDcgMzEuOTkyOCAyMi4wNzI2IDMxLjk5NTUgMjIuMTEzNyAzMi4wMDA2SDI1LjkzODhDMjUuOTgzIDMyLjAwMDYgMjYuMDI2NiAzMi4wMDM1IDI2LjA2OTMgMzIuMDA5MUMyNi41ODM3IDMyLjA1MDQgMjYuOTg4MiAzMi40ODA4IDI2Ljk4ODIgMzMuMDA1OFYzNy45OTg2SDMzQzMzLjU1MjMgMzcuOTk4NiAzNCAzOC40NDYzIDM0IDM4Ljk5ODZDMzQgMzkuNTUwOSAzMy41NTIzIDM5Ljk5ODYgMzMgMzkuOTk4NkgxNUMxNC40NDc3IDM5Ljk5ODYgMTQgMzkuNTUwOSAxNCAzOC45OTg2QzE0IDM4LjQ0NjMgMTQuNDQ3NyAzNy45OTg2IDE1IDM3Ljk5ODZIMjAuOTg4MlYzNC4wMDA2SDcuMDAwNzlDNS4zNDMwNCAzNC4wMDA2IDQuMDAwNzkgMzIuNjU3NCA0LjAwMDc5IDMxLjAwMDZWMTEuMDAwNkM0LjAwMDc5IDkuMzQyMzMgNS4zNDI1MSA4LjAwMDYxIDcuMDAwNzkgOC4wMDA2MUg0MS4wMDA4QzQyLjY1NzYgOC4wMDA2MSA0NC4wMDA4IDkuMzQyODYgNDQuMDAwOCAxMS4wMDA2VjMxLjAwMDZDNDQuMDAwOCAzMi42NTY5IDQyLjY1NzEgMzQuMDAwNiA0MS4wMDA4IDM0LjAwMDZaTTI0Ljk4ODIgMzcuOTk4NlYzNC4wMDA2SDIyLjk4ODJWMzcuOTk4NkgyNC45ODgyWiIgZmlsbD0iI2Y1ZjVmNSIvPiA8L2c+IDwvZz4gPC9nPgoNPC9zdmc+" />
                                            </defs>
                                            <style>
                                                .s0 {
                                                    fill-opacity: .99;
                                                    fill: #ffffff
                                                }
                                            </style>
                                            <use id="tv-svgrepo-com (6)" href="#img1"
                                                transform="matrix(.31,0,0,.31,0,0)" />
                                            <path id="12 каналов" class="s0" aria-label="12
каналов" d="m121 109v-1.6h2v-5.9l-2.1 0.4v-1.6l2.1-0.4h2.1v7.5h2.1v1.6zm12.3-3.4l-1.8 1.7h3.8v1.7h-6.4v-1.7l3.3-3q0.4-0.4 0.6-0.8 0.2-0.3 0.2-0.8 0-0.6-0.4-1-0.4-0.4-1.1-0.4-0.6 0-1.2 0.3-0.6 0.2-1.4 0.7v-2q0.8-0.3 1.6-0.4 0.7-0.2 1.4-0.2 1.6 0 2.5 0.7 0.9 0.8 0.9 2.1 0 0.7-0.4 1.3-0.4 0.7-1.6 1.8zm-33.2 18.4v-6.8h2.1v2.3l2.3-2.3h2.4l-2.9 2.7 3.1 4.1h-2.2l-2.1-2.8-0.6 0.6v2.2zm12.3-3.1h-1.1q-0.7 0-1 0.3-0.4 0.2-0.4 0.6 0 0.5 0.3 0.7 0.3 0.2 0.8 0.2 0.6 0 1-0.4 0.4-0.5 0.4-1.1zm2.1-0.8v3.9h-2.1v-1.1q-0.4 0.7-1 0.9-0.5 0.3-1.3 0.3-1 0-1.6-0.6-0.7-0.6-0.7-1.6 0-1.2 0.8-1.8 0.8-0.5 2.5-0.5h1.3v-0.2q0-0.5-0.4-0.8-0.4-0.2-1.3-0.2-0.6 0-1.2 0.1-0.6 0.2-1.1 0.5v-1.7q0.7-0.2 1.4-0.3 0.6-0.1 1.3-0.1 1.8 0 2.6 0.8 0.8 0.7 0.8 2.4zm2 3.9v-6.9h2.1v2.6h2.1v-2.6h2.1v6.9h-2.1v-2.9h-2.1v2.9zm12.5-3.1h-1.1q-0.7 0-1 0.2-0.4 0.2-0.4 0.7 0 0.4 0.3 0.6 0.3 0.3 0.7 0.3 0.6 0 1-0.5 0.5-0.4 0.5-1.1zm2.1-0.8v3.9h-2.1v-1q-0.5 0.6-1 0.9-0.5 0.3-1.3 0.3-1 0-1.7-0.6-0.6-0.7-0.6-1.7 0-1.2 0.8-1.7 0.8-0.6 2.5-0.6h1.3v-0.1q0-0.6-0.4-0.8-0.4-0.2-1.3-0.2-0.7 0-1.2 0.1-0.6 0.1-1.1 0.4v-1.7q0.6-0.1 1.3-0.2 0.7-0.1 1.4-0.1 1.8 0 2.6 0.7 0.8 0.8 0.8 2.4zm1.6 3.9v-1.6q1.1-0.2 1.3-0.9 0.2-0.5 0.2-3.2v-1.1h5.7v6.8h-2.1v-5.3h-1.5v0.3q0 2.6-0.4 3.4-0.8 1.6-3.2 1.6zm12.4-5.4q-0.7 0-1.1 0.5-0.3 0.5-0.3 1.5 0 1 0.3 1.5 0.4 0.5 1.1 0.5 0.7 0 1.1-0.5 0.3-0.5 0.3-1.5 0-1-0.3-1.5-0.4-0.5-1.1-0.5zm0-1.6q1.7 0 2.7 1 0.9 0.9 0.9 2.6 0 1.7-0.9 2.6-1 1-2.7 1-1.7 0-2.7-1-1-0.9-1-2.6 0-1.7 1-2.6 1-1 2.7-1zm7.3 2.7h1q0.4 0 0.5-0.1 0.2-0.2 0.2-0.5 0-0.3-0.2-0.4-0.1-0.2-0.5-0.2h-1zm0 2.9h1.1q0.4 0 0.7-0.2 0.2-0.2 0.2-0.6 0-0.3-0.2-0.5-0.3-0.2-0.7-0.2h-1.1zm-2.1 1.3v-6.8h3q1.5 0 2.1 0.4 0.7 0.5 0.7 1.4 0 0.5-0.2 0.9-0.3 0.3-0.7 0.5 0.5 0.2 0.9 0.6 0.3 0.4 0.3 1.1 0 1-0.7 1.5-0.7 0.4-2.1 0.4z" />
                                        </svg>
                                        <div class="price__package-item">
                                            <ul>
                                                <li>
                                                    <svg fill="#000000" viewBox="0 0 32 32" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg">

                                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                            stroke-linejoin="round" />

                                                        <g id="SVGRepo_iconCarrier">
                                                            <title>tv</title>
                                                            <path
                                                                d="M26 26.75h-20c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h20c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM28 2.75h-24c-1.794 0.002-3.248 1.456-3.25 3.25v16c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-16c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM28.75 22c-0 0.414-0.336 0.75-0.75 0.75h-24c-0.414-0-0.75-0.336-0.75-0.75v-16c0.001-0.414 0.336-0.749 0.75-0.75h24c0.414 0 0.75 0.336 0.75 0.75v0z" />
                                                        </g>

                                                    </svg>
                                                    <p><strong>Для всеx видов ТВ</strong><br>12 телеканалов<br></p>
                                                </li>
                                            </ul>

                                        </div>
                                    </section>

                                    <div class="price__package-connect">
                                        <p class="list-channel" id="base-list-channel">Список каналов</p>
                                        <p class="price__package-text" data-payModal>21,70р. / месяц</p>
                                        <button class="button" id="baseModalTV">Подключить</button>
                                    </div>
                                </div>
                                <div class="price__package">

                                    <section class="price__package-title">
                                        <h4>Расширенный пакет</h4>
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">

                                            <defs>
                                                <image width="806" height="806" id="img1"
                                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCA1Ny42MCA1Ny42MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii00LjgiIHk9Ii00LjgiIHdpZHRoPSI1Ny42MCIgaGVpZ2h0PSI1Ny42MCIgcng9IjI4LjgiIGZpbGw9IiMwMGFiZmUiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGcgaWQ9InR2Ij4gPGcgaWQ9InR2XzIiPiA8cGF0aCBpZD0iQ29tYmluZWQgU2hhcGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMDAwOCAzNC4wMDA2SDI5Ljk2NDhDMjkuNDEyNSAzNC4wMDA2IDI4Ljk2NDggMzMuNTUyOSAyOC45NjQ4IDMzLjAwMDZDMjguOTY0OCAzMi40NDgzIDI5LjQxMjUgMzIuMDAwNiAyOS45NjQ4IDMyLjAwMDZINDEuMDAwOEM0MS41NTI1IDMyLjAwMDYgNDIuMDAwOCAzMS41NTIzIDQyLjAwMDggMzEuMDAwNlYxMS4wMDA2QzQyLjAwMDggMTAuNDQ3NyA0MS41NTM0IDEwLjAwMDYgNDEuMDAwOCAxMC4wMDA2SDcuMDAwNzlDNi40NDcwOCAxMC4wMDA2IDYuMDAwNzkgMTAuNDQ2OSA2LjAwMDc5IDExLjAwMDZWMzEuMDAwNkM2LjAwMDc5IDMxLjU1MzIgNi40NDc5MiAzMi4wMDA2IDcuMDAwNzkgMzIuMDAwNkgyMS44NjI3QzIxLjkwMzggMzEuOTk1NSAyMS45NDU3IDMxLjk5MjggMjEuOTg4MiAzMS45OTI4QzIyLjAzMDcgMzEuOTkyOCAyMi4wNzI2IDMxLjk5NTUgMjIuMTEzNyAzMi4wMDA2SDI1LjkzODhDMjUuOTgzIDMyLjAwMDYgMjYuMDI2NiAzMi4wMDM1IDI2LjA2OTMgMzIuMDA5MUMyNi41ODM3IDMyLjA1MDQgMjYuOTg4MiAzMi40ODA4IDI2Ljk4ODIgMzMuMDA1OFYzNy45OTg2SDMzQzMzLjU1MjMgMzcuOTk4NiAzNCAzOC40NDYzIDM0IDM4Ljk5ODZDMzQgMzkuNTUwOSAzMy41NTIzIDM5Ljk5ODYgMzMgMzkuOTk4NkgxNUMxNC40NDc3IDM5Ljk5ODYgMTQgMzkuNTUwOSAxNCAzOC45OTg2QzE0IDM4LjQ0NjMgMTQuNDQ3NyAzNy45OTg2IDE1IDM3Ljk5ODZIMjAuOTg4MlYzNC4wMDA2SDcuMDAwNzlDNS4zNDMwNCAzNC4wMDA2IDQuMDAwNzkgMzIuNjU3NCA0LjAwMDc5IDMxLjAwMDZWMTEuMDAwNkM0LjAwMDc5IDkuMzQyMzMgNS4zNDI1MSA4LjAwMDYxIDcuMDAwNzkgOC4wMDA2MUg0MS4wMDA4QzQyLjY1NzYgOC4wMDA2MSA0NC4wMDA4IDkuMzQyODYgNDQuMDAwOCAxMS4wMDA2VjMxLjAwMDZDNDQuMDAwOCAzMi42NTY5IDQyLjY1NzEgMzQuMDAwNiA0MS4wMDA4IDM0LjAwMDZaTTI0Ljk4ODIgMzcuOTk4NlYzNC4wMDA2SDIyLjk4ODJWMzcuOTk4NkgyNC45ODgyWiIgZmlsbD0iI2Y1ZjVmNSIvPiA8L2c+IDwvZz4gPC9nPgoNPC9zdmc+" />
                                            </defs>
                                            <style>
                                                .s0 {
                                                    fill: #ffffff
                                                }
                                            </style>
                                            <use id="tv-svgrepo-com (6)" href="#img1"
                                                transform="matrix(.31,0,0,.31,0,0)" />
                                            <path id="100+ каналов" class="s0" aria-label="100+
каналов" d="m108.4 109v-1.6h2v-5.9l-2.1 0.4v-1.6l2.1-0.4h2.2v7.5h2.1v1.6zm12.8-4.6q0-1.7-0.3-2.4-0.3-0.7-1.1-0.7-0.7 0-1 0.7-0.4 0.7-0.4 2.4 0 1.8 0.4 2.5 0.3 0.7 1 0.7 0.8 0 1.1-0.7 0.3-0.7 0.3-2.5zm2.3 0.1q0 2.2-0.9 3.5-1 1.2-2.8 1.2-1.8 0-2.7-1.2-1-1.3-1-3.5 0-2.3 1-3.5 0.9-1.3 2.7-1.3 1.8 0 2.8 1.3 0.9 1.2 0.9 3.5zm6.3-0.1q0-1.7-0.3-2.4-0.3-0.7-1.1-0.7-0.7 0-1 0.7-0.4 0.7-0.4 2.4 0 1.8 0.4 2.5 0.3 0.7 1 0.7 0.8 0 1.1-0.7 0.3-0.7 0.3-2.5zm2.3 0.1q0 2.2-0.9 3.5-1 1.2-2.8 1.2-1.8 0-2.7-1.2-1-1.3-1-3.5 0-2.3 1-3.5 0.9-1.3 2.7-1.3 1.8 0 2.8 1.3 0.9 1.2 0.9 3.5zm5.1-3.3h1.4v3.2h3.2v1.4h-3.2v3.2h-1.4v-3.2h-3.2v-1.4h3.2zm-38.2 22.8v-6.8h2.2v2.3l2.4-2.3h2.3l-2.8 2.7 3.1 4.1h-2.3l-2.1-2.8-0.6 0.6v2.2zm12.5-3.1h-1.1q-0.7 0-1 0.3-0.4 0.2-0.4 0.6 0 0.5 0.3 0.7 0.3 0.2 0.8 0.2 0.6 0 1-0.4 0.4-0.5 0.4-1.1zm2.2-0.9v3.9h-2.2v-1q-0.4 0.7-1 0.9-0.5 0.3-1.3 0.3-1 0-1.7-0.6-0.7-0.6-0.7-1.6 0-1.2 0.9-1.8 0.8-0.5 2.5-0.5h1.3v-0.2q0-0.5-0.4-0.8-0.4-0.2-1.3-0.2-0.7 0-1.3 0.1-0.5 0.2-1.1 0.5v-1.7q0.7-0.2 1.4-0.3 0.7-0.1 1.4-0.1 1.9 0 2.7 0.8 0.8 0.7 0.8 2.3zm2 3.9v-6.8h2.2v2.6h2.1v-2.6h2.2v6.8h-2.2v-2.8h-2.1v2.8zm12.6-3h-1.1q-0.7 0-1 0.2-0.3 0.2-0.3 0.7 0 0.4 0.2 0.6 0.3 0.3 0.8 0.3 0.6 0 1-0.5 0.4-0.4 0.4-1.1zm2.2-0.8v3.9h-2.2v-1q-0.4 0.6-0.9 0.9-0.6 0.3-1.4 0.3-1 0-1.7-0.6-0.6-0.7-0.6-1.7 0-1.2 0.8-1.7 0.8-0.6 2.6-0.6h1.2v-0.1q0-0.6-0.4-0.8-0.4-0.2-1.2-0.2-0.7 0-1.3 0.1-0.6 0.1-1.1 0.4v-1.7q0.7-0.1 1.4-0.2 0.7-0.1 1.4-0.1 1.8 0 2.6 0.7 0.8 0.8 0.8 2.4zm1.7 3.9v-1.6q1-0.2 1.3-0.9 0.2-0.5 0.2-3.2v-1.1h5.8v6.8h-2.2v-5.3h-1.5v0.3q0 2.6-0.4 3.4-0.8 1.6-3.2 1.6zm12.6-5.4q-0.7 0-1.1 0.5-0.4 0.5-0.4 1.5 0 1 0.4 1.5 0.4 0.5 1.1 0.5 0.7 0 1.1-0.5 0.3-0.5 0.3-1.5 0-1-0.3-1.5-0.4-0.5-1.1-0.5zm0-1.6q1.7 0 2.7 1 1 0.9 1 2.6 0 1.7-1 2.6-1 1-2.7 1-1.8 0-2.7-1-1-0.9-1-2.6 0-1.7 1-2.6 0.9-1 2.7-1zm7.4 2.7h1q0.4 0 0.6-0.1 0.2-0.2 0.2-0.5 0-0.3-0.2-0.4-0.2-0.2-0.6-0.2h-1zm0 2.9h1.1q0.5 0 0.7-0.2 0.3-0.2 0.3-0.6 0-0.3-0.3-0.5-0.2-0.2-0.7-0.2h-1.1zm-2.1 1.3v-6.8h3.1q1.5 0 2.1 0.4 0.7 0.5 0.7 1.4 0 0.5-0.2 0.9-0.3 0.3-0.8 0.5 0.6 0.2 1 0.6 0.3 0.4 0.3 1.1 0 1-0.7 1.5-0.7 0.4-2.1 0.4z" />
                                        </svg>
                                        <div class="price__package-item ">
                                            <ul>
                                                <li>
                                                    <svg viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">

                                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                            stroke-linejoin="round" />

                                                        <g id="SVGRepo_iconCarrier">
                                                            <path
                                                                d="M17 3L12 7L7 3M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
                                                                stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </g>

                                                    </svg>
                                                    <p><strong>Для цифровых ТВ</strong> <br>Более 100 каналов</p>
                                                </li>
                                                <li>
                                                    <svg viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">

                                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                            stroke-linejoin="round" />

                                                        <g id="SVGRepo_iconCarrier">
                                                            <path
                                                                d="M17 3L12 7L7 3M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
                                                                stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </g>

                                                    </svg>
                                                    <p><strong>Для аналоговых ТВ</strong><br> более 35 каналов</p>
                                                </li>
                                            </ul>



                                        </div>

                                    </section>
                                    <div class="price__package-connect">
                                        <p class="list-channel" id="extended-list-channel">Список каналов</p>
                                        <p class="price__package-text" data-payModal>21,70р. / месяц</p>
                                        <button class="button" id="extendedModalTV">Подключить</button>
                                    </div>
                                </div>
                    </div>

                </section>`;
            }, 300)
            setTimeout(() => {
                tarrifsItem[0].style.opacity = '1';
                modalOpen(document.querySelectorAll('.list-channel'), document.querySelectorAll('.price__package-wrap')[0].querySelectorAll('.button'))
            }, 400);
        }
        e.target.setAttribute('disabled', '');
    })

});



// function slideTv(params) {
//     // tarrifsPrice.forEach(element => {
//     //     console.log(element);

//     //     element.style.left = "300px";
//     // });
//     console.log(tarrifsPrice[0]);

//     tarrifsPrice[0].style = "left: 100px"
// }



// modal.showModal()
// console.log(document.querySelectorAll("[data-payModal]")[0]);

// Открытие модалки
function modalOpen(channel, button) {
    const modal = document.getElementById('modal');
    const modalClose = document.querySelector('.modal__close');
    const filmslList = document.getElementById('films-series');
    const maskOptions = {
        mask: '+{375} (00) 000-00-00',
        lazy: false,
    };

    channel.forEach(element => {

        element.addEventListener('click', (e) => {
            if (e.target.id === 'extended-list-channel') {
                modal.innerHTML = `                    
                <div class="modal">
            <section class="modal__title">
                <h2>СПИСОК ТВ КАНАЛОВ</h2>
                <div class="modal__close-wrap" onclick="closeModalTV()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </section>
            <div class="modal__change">
                <div class="modal__change-item modal_active" id="nTV" onclick="modalButtons(this)">
                    <p>Расширенный пакет: <br>
                        цифровые каналы</p>
                    <hr>
                </div>

                <div class="modal__change-item " id="aTV" onclick="modalButtons(this)">
                    <p>Расширенный пакет: <br>
                        аналоговые каналы</p>
                    <hr>
                </div>

            </div>
            <div class="modal__list-wrap">

                <div class="modal__list-item">
                    <strong>Общедоступные</strong>
                    <div class="modal__channel-wrap" id="publicly-available"></div>
                </div>
                <div class="modal__list-item">
                    <strong>Фильмы / Сериалы</strong>
                    <div class="modal__channel-wrap" id="films-series">

                    </div>
                </div>
                <div class="modal__list-item">
                    <strong>Развлекательные</strong>
                    <div class="modal__channel-wrap">

                    </div>
                </div>


            </div>
        </div>`
                ModalList(document.querySelectorAll('.modal__change-item')[0].id)
                modalButtons();
            } else if (e.target.id === 'base-list-channel') {
                modal.innerHTML = `<div class="modal">
            <section class="modal__title">
                <h2>СПИСОК ТВ КАНАЛОВ</h2>
                <div class="modal__close-wrap" onclick="closeModalTV()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </section>
            <div class="modal__change">

                <div class="modal__change-item modal_active">
                    <p>Базовый пакет</p>
                    <hr>
                </div>

            </div>
            <div class="modal__list-wrap">

                <div class="modal__list-item">
                    <strong>Общедоступные</strong>
                    <div class="modal__channel-wrap" id="publicly-available"></div>
                </div>
                <div class="modal__list-item">
                    <strong>Фильмы / Сериалы</strong>
                    <div class="modal__channel-wrap" id="films-series">

                    </div>
                </div>
                <div class="modal__list-item">
                    <strong>Развлекательные</strong>
                    <div class="modal__channel-wrap">

                    </div>
                </div>


            </div>
        </div>`;
                ModalList()
            } else if (e.target.id === 'priv-list-channel') {
                modal.innerHTML = `<div class="modal">
            <section class="modal__title">
                <h2>СПИСОК ТВ КАНАЛОВ</h2>
                <div class="modal__close-wrap" onclick="closeModalTV()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </section>
            <div class="modal__change">

                <div class="modal__change-item modal_active">
                    <p>Кодированные каналы: <br>
                            пакет 18+</p>
                    <hr>
                </div>

            </div>
            <div class="modal__list-wrap">

                <div class="modal__list-item">
                    <strong>Общедоступные</strong>
                    <div class="modal__channel-wrap" id="publicly-available"></div>
                </div>
                <div class="modal__list-item">
                    <strong>Фильмы / Сериалы</strong>
                    <div class="modal__channel-wrap" id="films-series">

                    </div>
                </div>
                <div class="modal__list-item">
                    <strong>Развлекательные</strong>
                    <div class="modal__channel-wrap">

                    </div>
                </div>


            </div>
        </div>`;
                ModalList()
            } else if (e.target.id === 'family-list-channel') {

                modal.innerHTML = `<div class="modal">
            <section class="modal__title">
                <h2>СПИСОК ТВ КАНАЛОВ</h2>
                <div class="modal__close-wrap" onclick="closeModalTV()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </section>
            <div class="modal__change">

                <div class="modal__change-item modal_active">
                    <p>Кодированные каналы: <br>
                            пакет семейный</p>
                    <hr>
                </div>

            </div>
            <div class="modal__list-wrap">

                <div class="modal__list-item">
                    <strong>Общедоступные</strong>
                    <div class="modal__channel-wrap" id="publicly-available"></div>
                </div>
                <div class="modal__list-item">
                    <strong>Фильмы / Сериалы</strong>
                    <div class="modal__channel-wrap" id="films-series">

                    </div>
                </div>
                <div class="modal__list-item">
                    <strong>Развлекательные</strong>
                    <div class="modal__channel-wrap">

                    </div>
                </div>


            </div>
        </div>`;
                ModalList()
            }
            modal.showModal();
            document.body.classList.add('lock');


            modal.style = "opacity: 1";

        });
    });


    button.forEach(element => {

        element.addEventListener('click', (e) => {

            switch (e.target.id) {

                case "baseModalTV":
                    modal.innerHTML = `<div class="modal__connectTV">
            <section class="modal__title modal__title--color">
                <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>
                <div class="modal__close-wrap" onclick="closeModalTV()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </section>

            <form action="#" class="modal__form modal__form--line modal__form--TV">
                <div class="tariffs__connect tariffs__connect--widht">
                    <div class="modal__TV-title">
                        <p class="tariffs__connect--bigText modal__value-tariffs">Базовый пакет</p>
                        <svg viewBox="0 0 250 250">

                            <defs>
                                <image width="806" height="806" id="img1"
                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCA1Ny42MCA1Ny42MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii00LjgiIHk9Ii00LjgiIHdpZHRoPSI1Ny42MCIgaGVpZ2h0PSI1Ny42MCIgcng9IjI4LjgiIGZpbGw9IiMwMGFiZmUiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGcgaWQ9InR2Ij4gPGcgaWQ9InR2XzIiPiA8cGF0aCBpZD0iQ29tYmluZWQgU2hhcGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMDAwOCAzNC4wMDA2SDI5Ljk2NDhDMjkuNDEyNSAzNC4wMDA2IDI4Ljk2NDggMzMuNTUyOSAyOC45NjQ4IDMzLjAwMDZDMjguOTY0OCAzMi40NDgzIDI5LjQxMjUgMzIuMDAwNiAyOS45NjQ4IDMyLjAwMDZINDEuMDAwOEM0MS41NTI1IDMyLjAwMDYgNDIuMDAwOCAzMS41NTIzIDQyLjAwMDggMzEuMDAwNlYxMS4wMDA2QzQyLjAwMDggMTAuNDQ3NyA0MS41NTM0IDEwLjAwMDYgNDEuMDAwOCAxMC4wMDA2SDcuMDAwNzlDNi40NDcwOCAxMC4wMDA2IDYuMDAwNzkgMTAuNDQ2OSA2LjAwMDc5IDExLjAwMDZWMzEuMDAwNkM2LjAwMDc5IDMxLjU1MzIgNi40NDc5MiAzMi4wMDA2IDcuMDAwNzkgMzIuMDAwNkgyMS44NjI3QzIxLjkwMzggMzEuOTk1NSAyMS45NDU3IDMxLjk5MjggMjEuOTg4MiAzMS45OTI4QzIyLjAzMDcgMzEuOTkyOCAyMi4wNzI2IDMxLjk5NTUgMjIuMTEzNyAzMi4wMDA2SDI1LjkzODhDMjUuOTgzIDMyLjAwMDYgMjYuMDI2NiAzMi4wMDM1IDI2LjA2OTMgMzIuMDA5MUMyNi41ODM3IDMyLjA1MDQgMjYuOTg4MiAzMi40ODA4IDI2Ljk4ODIgMzMuMDA1OFYzNy45OTg2SDMzQzMzLjU1MjMgMzcuOTk4NiAzNCAzOC40NDYzIDM0IDM4Ljk5ODZDMzQgMzkuNTUwOSAzMy41NTIzIDM5Ljk5ODYgMzMgMzkuOTk4NkgxNUMxNC40NDc3IDM5Ljk5ODYgMTQgMzkuNTUwOSAxNCAzOC45OTg2QzE0IDM4LjQ0NjMgMTQuNDQ3NyAzNy45OTg2IDE1IDM3Ljk5ODZIMjAuOTg4MlYzNC4wMDA2SDcuMDAwNzlDNS4zNDMwNCAzNC4wMDA2IDQuMDAwNzkgMzIuNjU3NCA0LjAwMDc5IDMxLjAwMDZWMTEuMDAwNkM0LjAwMDc5IDkuMzQyMzMgNS4zNDI1MSA4LjAwMDYxIDcuMDAwNzkgOC4wMDA2MUg0MS4wMDA4QzQyLjY1NzYgOC4wMDA2MSA0NC4wMDA4IDkuMzQyODYgNDQuMDAwOCAxMS4wMDA2VjMxLjAwMDZDNDQuMDAwOCAzMi42NTY5IDQyLjY1NzEgMzQuMDAwNiA0MS4wMDA4IDM0LjAwMDZaTTI0Ljk4ODIgMzcuOTk4NlYzNC4wMDA2SDIyLjk4ODJWMzcuOTk4NkgyNC45ODgyWiIgZmlsbD0iI2Y1ZjVmNSIvPiA8L2c+IDwvZz4gPC9nPgoNPC9zdmc+" />
                            </defs>
                            <style>
                                .s0 {
                                    fill-opacity: .99;
                                    fill: #ffffff
                                }
                            </style>
                            <use id="tv-svgrepo-com" href="#img1" transform="matrix(.31,0,0,.31,0,0)" />
                            <path class="s0" aria-label="12каналов"
                                d="m121 109v-1.6h2v-5.9l-2.1 0.4v-1.6l2.1-0.4h2.1v7.5h2.1v1.6zm12.3-3.4l-1.8 1.7h3.8v1.7h-6.4v-1.7l3.3-3q0.4-0.4 0.6-0.8 0.2-0.3 0.2-0.8 0-0.6-0.4-1-0.4-0.4-1.1-0.4-0.6 0-1.2 0.3-0.6 0.2-1.4 0.7v-2q0.8-0.3 1.6-0.4 0.7-0.2 1.4-0.2 1.6 0 2.5 0.7 0.9 0.8 0.9 2.1 0 0.7-0.4 1.3-0.4 0.7-1.6 1.8zm-33.2 18.4v-6.8h2.1v2.3l2.3-2.3h2.4l-2.9 2.7 3.1 4.1h-2.2l-2.1-2.8-0.6 0.6v2.2zm12.3-3.1h-1.1q-0.7 0-1 0.3-0.4 0.2-0.4 0.6 0 0.5 0.3 0.7 0.3 0.2 0.8 0.2 0.6 0 1-0.4 0.4-0.5 0.4-1.1zm2.1-0.8v3.9h-2.1v-1.1q-0.4 0.7-1 0.9-0.5 0.3-1.3 0.3-1 0-1.6-0.6-0.7-0.6-0.7-1.6 0-1.2 0.8-1.8 0.8-0.5 2.5-0.5h1.3v-0.2q0-0.5-0.4-0.8-0.4-0.2-1.3-0.2-0.6 0-1.2 0.1-0.6 0.2-1.1 0.5v-1.7q0.7-0.2 1.4-0.3 0.6-0.1 1.3-0.1 1.8 0 2.6 0.8 0.8 0.7 0.8 2.4zm2 3.9v-6.9h2.1v2.6h2.1v-2.6h2.1v6.9h-2.1v-2.9h-2.1v2.9zm12.5-3.1h-1.1q-0.7 0-1 0.2-0.4 0.2-0.4 0.7 0 0.4 0.3 0.6 0.3 0.3 0.7 0.3 0.6 0 1-0.5 0.5-0.4 0.5-1.1zm2.1-0.8v3.9h-2.1v-1q-0.5 0.6-1 0.9-0.5 0.3-1.3 0.3-1 0-1.7-0.6-0.6-0.7-0.6-1.7 0-1.2 0.8-1.7 0.8-0.6 2.5-0.6h1.3v-0.1q0-0.6-0.4-0.8-0.4-0.2-1.3-0.2-0.7 0-1.2 0.1-0.6 0.1-1.1 0.4v-1.7q0.6-0.1 1.3-0.2 0.7-0.1 1.4-0.1 1.8 0 2.6 0.7 0.8 0.8 0.8 2.4zm1.6 3.9v-1.6q1.1-0.2 1.3-0.9 0.2-0.5 0.2-3.2v-1.1h5.7v6.8h-2.1v-5.3h-1.5v0.3q0 2.6-0.4 3.4-0.8 1.6-3.2 1.6zm12.4-5.4q-0.7 0-1.1 0.5-0.3 0.5-0.3 1.5 0 1 0.3 1.5 0.4 0.5 1.1 0.5 0.7 0 1.1-0.5 0.3-0.5 0.3-1.5 0-1-0.3-1.5-0.4-0.5-1.1-0.5zm0-1.6q1.7 0 2.7 1 0.9 0.9 0.9 2.6 0 1.7-0.9 2.6-1 1-2.7 1-1.7 0-2.7-1-1-0.9-1-2.6 0-1.7 1-2.6 1-1 2.7-1zm7.3 2.7h1q0.4 0 0.5-0.1 0.2-0.2 0.2-0.5 0-0.3-0.2-0.4-0.1-0.2-0.5-0.2h-1zm0 2.9h1.1q0.4 0 0.7-0.2 0.2-0.2 0.2-0.6 0-0.3-0.2-0.5-0.3-0.2-0.7-0.2h-1.1zm-2.1 1.3v-6.8h3q1.5 0 2.1 0.4 0.7 0.5 0.7 1.4 0 0.5-0.2 0.9-0.3 0.3-0.7 0.5 0.5 0.2 0.9 0.6 0.3 0.4 0.3 1.1 0 1-0.7 1.5-0.7 0.4-2.1 0.4z" />
                        </svg>
                        <div class="price__package-item">
                            <ul>
                                <li>
                                    <svg fill="#fff" viewBox="0 0 32 32" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg">

                                        <g id="SVGRepo_bgCarrier33" stroke-width="0" />

                                        <g id="SVGRepo_tracerCarrier33" stroke-linecap="round"
                                            stroke-linejoin="round" />

                                        <g id="SVGRepo_iconCarrier33">
                                            <title>tv</title>

                                            <path
                                                d="M26 26.75h-20c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h20c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM28 2.75h-24c-1.794 0.002-3.248 1.456-3.25 3.25v16c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-16c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM28.75 22c-0 0.414-0.336 0.75-0.75 0.75h-24c-0.414-0-0.75-0.336-0.75-0.75v-16c0.001-0.414 0.336-0.749 0.75-0.75h24c0.414 0 0.75 0.336 0.75 0.75v0z" />
                                        </g>

                                    </svg>
                                    <p><strong>Для всеx видов ТВ</strong><br>12 телеканалов<br></p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="modal__pay">
                        <hr>
                        <div class="price__pay price__pay--TV">
                            <p>Ежемесячный платеж</p>
                            <p class="tariffs__connect--bigText">${document.querySelectorAll("[data-payModal]")[0].textContent}</p>
                        </div>
                    </div>

                    <!-- <button id="modal__button-connect" class="tariffs__connect-button">Подключить</button> -->
                    <!-- <a href="">Или заказать консультацию специалиста</a> -->
                </div>
                <div class="modal__form-inner ">
                    <!-- Имя -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="text" id="nameModal" name="name" required
                            minlength="2" maxlength="50" pattern="^[А-Яа-яЁё\s]+$" placeholder="Введите ваше имя">
                    </fieldset>

                    <!-- Телефон -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="tel" id="phoneModal" name="phone">
                    </fieldset>
                    <fieldset class="form__item-wrapper modal--widht">
                        <fieldset class="form__select modal--widht form__item">


                            <!--  -->
                            <!-- <select class="street" name="" id="">
                                <option value="1">Махновича</option>
                                <option value="2">Рябцева</option>
                                <option value="3">Суворова</option>
                            </select> -->

                            <div class="form__select__title" data-default="Option 0">
                                <span class="form__select__title-span modal--widht">Героев обороны</span>
                                <span class="form__select__title-arrow"></span>
                            </div>
                            <div class="form__select__content">
                                <input id="singleSelect01" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect01" class="form__select__label">Махновича</label>
                                <input id="singleSelect11" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect11" class="form__select__label">Рябцева</label>
                                <input id="singleSelect21" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect21" class="form__select__label">Суворова</label>
                                <input id="singleSelect31" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect31" class="form__select__label">Героев обороны</label>
                            </div>

                        </fieldset>
                    </fieldset>
                    <div class="modal__form-item">
                        <!-- Номер дома -->

                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Дом" name="home" class="form__item modal--widht" type="text">
                        </fieldset>

                        <!-- Квартира -->
                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Квартира" name="appart" class="form__item modal--widht" type="text">

                        </fieldset>
                    </div>
                    <!-- Выбор улицы -->
                    <div class="modal__area-wrap">
                        <p>Примечание</p>
                        <textarea
                            placeholder="(опишите здесь любые нюансы, которые вы хотели бы учесть при подключении)"
                            class="modal__area" name="x" id="x" rows="5"></textarea>
                    </div>

                    <div class="check modal__check">
                        <input type="checkbox" name="check-policy" id="check-policy-modal">
                        <label for="check-policy">Я ознакомлен(а) с <a href="#">Политикой</a> и согласен(а) на обработку
                            персональных данных.</label>

                    </div>

                    <button class="button button--border" type="submit">Подключить</button>
                </div>
            </form>
        </div>`;

                    SelectTown()
                    IMask(document.getElementById('phoneModal'), maskOptions);
                    break;
                case "baseModalIntTV":
                    modal.innerHTML = `<div class="modal__connectTV">
            <section class="modal__title modal__title--color">
                <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>
                <div class="modal__close-wrap" onclick="closeModalTV()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </section>

            <form action="#" class="modal__form modal__form--line modal__form--TV">
                <div class="tariffs__connect tariffs__connect--green tariffs__connect--widht">
                    <div class="modal__TV-title">
                        <p class="tariffs__connect--bigText modal__value-tariffs">Базовый пакет</p>
                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">

                                <defs>
                                    <image width="806" height="806" id="img12"
                                        href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCA1Ny42MCA1Ny42MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii00LjgiIHk9Ii00LjgiIHdpZHRoPSI1Ny42MCIgaGVpZ2h0PSI1Ny42MCIgcng9IjI4LjgiIGZpbGw9IiNjY2ZmNjYiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGcgaWQ9InR2Ij4gPGcgaWQ9InR2XzIiPiA8cGF0aCBpZD0iQ29tYmluZWQgU2hhcGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMDAwOCAzNC4wMDA2SDI5Ljk2NDhDMjkuNDEyNSAzNC4wMDA2IDI4Ljk2NDggMzMuNTUyOSAyOC45NjQ4IDMzLjAwMDZDMjguOTY0OCAzMi40NDgzIDI5LjQxMjUgMzIuMDAwNiAyOS45NjQ4IDMyLjAwMDZINDEuMDAwOEM0MS41NTI1IDMyLjAwMDYgNDIuMDAwOCAzMS41NTIzIDQyLjAwMDggMzEuMDAwNlYxMS4wMDA2QzQyLjAwMDggMTAuNDQ3NyA0MS41NTM0IDEwLjAwMDYgNDEuMDAwOCAxMC4wMDA2SDcuMDAwNzlDNi40NDcwOCAxMC4wMDA2IDYuMDAwNzkgMTAuNDQ2OSA2LjAwMDc5IDExLjAwMDZWMzEuMDAwNkM2LjAwMDc5IDMxLjU1MzIgNi40NDc5MiAzMi4wMDA2IDcuMDAwNzkgMzIuMDAwNkgyMS44NjI3QzIxLjkwMzggMzEuOTk1NSAyMS45NDU3IDMxLjk5MjggMjEuOTg4MiAzMS45OTI4QzIyLjAzMDcgMzEuOTkyOCAyMi4wNzI2IDMxLjk5NTUgMjIuMTEzNyAzMi4wMDA2SDI1LjkzODhDMjUuOTgzIDMyLjAwMDYgMjYuMDI2NiAzMi4wMDM1IDI2LjA2OTMgMzIuMDA5MUMyNi41ODM3IDMyLjA1MDQgMjYuOTg4MiAzMi40ODA4IDI2Ljk4ODIgMzMuMDA1OFYzNy45OTg2SDMzQzMzLjU1MjMgMzcuOTk4NiAzNCAzOC40NDYzIDM0IDM4Ljk5ODZDMzQgMzkuNTUwOSAzMy41NTIzIDM5Ljk5ODYgMzMgMzkuOTk4NkgxNUMxNC40NDc3IDM5Ljk5ODYgMTQgMzkuNTUwOSAxNCAzOC45OTg2QzE0IDM4LjQ0NjMgMTQuNDQ3NyAzNy45OTg2IDE1IDM3Ljk5ODZIMjAuOTg4MlYzNC4wMDA2SDcuMDAwNzlDNS4zNDMwNCAzNC4wMDA2IDQuMDAwNzkgMzIuNjU3NCA0LjAwMDc5IDMxLjAwMDZWMTEuMDAwNkM0LjAwMDc5IDkuMzQyMzMgNS4zNDI1MSA4LjAwMDYxIDcuMDAwNzkgOC4wMDA2MUg0MS4wMDA4QzQyLjY1NzYgOC4wMDA2MSA0NC4wMDA4IDkuMzQyODYgNDQuMDAwOCAxMS4wMDA2VjMxLjAwMDZDNDQuMDAwOCAzMi42NTY5IDQyLjY1NzEgMzQuMDAwNiA0MS4wMDA4IDM0LjAwMDZaTTI0Ljk4ODIgMzcuOTk4NlYzNC4wMDA2SDIyLjk4ODJWMzcuOTk4NkgyNC45ODgyWiIgZmlsbD0iIzAwMDAwMCIvPiA8L2c+IDwvZz4gPC9nPgoNPC9zdmc+" />
                                    <image width="811" height="811" id="img22"
                                        href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii03LjY4IC03LjY4IDQ3LjM2IDQ3LjM2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNiI+Cg08ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCIvPgoNPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cg08ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+IDxnPiA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTYsMEM3LjE3OCwwLDAsNy4xNzgsMCwxNnM3LjE3OCwxNiwxNiwxNnMxNi03LjE3OCwxNi0xNlMyNC44MjIsMCwxNiwweiBNMTYsMzFDNy43MjksMzEsMSwyNC4yNzEsMSwxNiBTNy43MjksMSwxNiwxczE1LDYuNzI5LDE1LDE1UzI0LjI3MSwzMSwxNiwzMXoiLz4gPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE5LjYwOSwxNC44MDJMMTQuMzE2LDEwLjhjLTAuMjYzLTAuMTk3LTAuNTY3LTAuMzAyLTAuODgtMC4zMDJDMTIuNjMxLDEwLjQ5OCwxMiwxMS4xNTgsMTIsMTJ2OCBjMCwwLjg0MiwwLjYzNSwxLjUwMiwxLjQ0NSwxLjUwMmMwLjMxMywwLDAuNjE5LTAuMTA0LDAuODg1LTAuMzA0bDUuMjU4LTMuOTk4YzAuMzgyLTAuMjg3LDAuNjExLTAuNzQyLDAuNjExLTEuMjE4IEMyMC4xOTgsMTUuNTEyLDE5Ljk4MywxNS4wODEsMTkuNjA5LDE0LjgwMnogTTE4Ljk4NSwxNi40MDFsLTUuMjU4LDMuOTk4QzEzLjQzNCwyMC42MjIsMTMsMjAuNDUzLDEzLDIwdi04IGMwLTAuMzI2LDAuMjI1LTAuNTAyLDAuNDM3LTAuNTAyYzAuMDk2LDAsMC4xOSwwLjAzNCwwLjI3OSwwLjEwMWw1LjI5Myw0LjAwMmMwLjE2NSwwLjEyMywwLjE5LDAuMjkyLDAuMTksMC4zODIgQzE5LjE5OCwxNi4xNDcsMTkuMTIyLDE2LjMsMTguOTg1LDE2LjQwMXoiLz4gPC9nPiA8L2c+Cg08L3N2Zz4=" />
                                </defs>
                                <style>
                                </style>
                                <use id="tv-svgrepo-com" href="#img12" transform="matrix(.31,0,0,.31,0,0)" />
                                <use id="play-button-svgrepo-com" href="#img22"
                                    transform="matrix(.09,0,0,.089,89,77)" />
                            </svg>
                        <div class="price__package-item">
                            <ul>
                                <li>
                                    <svg fill="#000" viewBox="0 0 32 32" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg">

                                        <g id="SVGRepo_bgCarrier33" stroke-width="0" />

                                        <g id="SVGRepo_tracerCarrier33" stroke-linecap="round"
                                            stroke-linejoin="round" />

                                        <g id="SVGRepo_iconCarrier33">
                                            <title>tv</title>

                                            <path
                                                d="M26 26.75h-20c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h20c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM28 2.75h-24c-1.794 0.002-3.248 1.456-3.25 3.25v16c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-16c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM28.75 22c-0 0.414-0.336 0.75-0.75 0.75h-24c-0.414-0-0.75-0.336-0.75-0.75v-16c0.001-0.414 0.336-0.749 0.75-0.75h24c0.414 0 0.75 0.336 0.75 0.75v0z" />
                                        </g>

                                    </svg>
                                    <p><strong>Для всеx видов ТВ</strong><br>12 телеканалов<br></p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="modal__pay">
                        <hr>
                        <div class="price__pay price__pay--TV">
                            <p>Ежемесячный платеж</p>
                            <p class="tariffs__connect--bigText">${document.querySelectorAll("[data-payModal]")[0].textContent}</p>
                        </div>
                    </div>

                    <!-- <button id="modal__button-connect" class="tariffs__connect-button">Подключить</button> -->
                    <!-- <a href="">Или заказать консультацию специалиста</a> -->
                </div>
                <div class="modal__form-inner ">
                    <!-- Имя -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="text" id="nameModal" name="name" required
                            minlength="2" maxlength="50" pattern="^[А-Яа-яЁё\s]+$" placeholder="Введите ваше имя">
                    </fieldset>

                    <!-- Телефон -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="tel" id="phoneModal" name="phone">
                    </fieldset>
                    <fieldset class="form__item-wrapper modal--widht">
                        <fieldset class="form__select modal--widht form__item">


                            <!--  -->
                            <!-- <select class="street" name="" id="">
                                <option value="1">Махновича</option>
                                <option value="2">Рябцева</option>
                                <option value="3">Суворова</option>
                            </select> -->

                            <div class="form__select__title" data-default="Option 0">
                                <span class="form__select__title-span modal--widht">Героев обороны</span>
                                <span class="form__select__title-arrow"></span>
                            </div>
                            <div class="form__select__content">
                                <input id="singleSelect01" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect01" class="form__select__label">Махновича</label>
                                <input id="singleSelect11" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect11" class="form__select__label">Рябцева</label>
                                <input id="singleSelect21" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect21" class="form__select__label">Суворова</label>
                                <input id="singleSelect31" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect31" class="form__select__label">Героев обороны</label>
                            </div>

                        </fieldset>
                    </fieldset>
                    <div class="modal__form-item">
                        <!-- Номер дома -->

                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Дом" name="home" class="form__item modal--widht" type="text">
                        </fieldset>

                        <!-- Квартира -->
                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Квартира" name="appart" class="form__item modal--widht" type="text">

                        </fieldset>
                    </div>
                    <!-- Выбор улицы -->
                    <div class="modal__area-wrap">
                        <p>Примечание</p>
                        <textarea
                            placeholder="(опишите здесь любые нюансы, которые вы хотели бы учесть при подключении)"
                            class="modal__area" name="x" id="x" rows="5"></textarea>
                    </div>

                    <div class="check modal__check">
                        <input type="checkbox" name="check-policy" id="check-policy-modal">
                        <label for="check-policy">Я ознакомлен(а) с <a href="#">Политикой</a> и согласен(а) на обработку
                            персональных данных.</label>

                    </div>

                    <button class="button button--border" type="submit">Подключить</button>
                </div>
            </form>
        </div>`;

                    SelectTown()
                    IMask(document.getElementById('phoneModal'), maskOptions);
                    break;
                case "extendedModalTV":
                    modal.innerHTML = `<div class="modal__connectTV">
            <section class="modal__title modal__title--color">
                <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>
                <div class="modal__close-wrap" onclick="closeModalTV()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </section>

            <form action="#" class="modal__form modal__form--TV">
                <div class="tariffs__connect tariffs__connect--widht">
                    <div class="modal__TV-title">
                        <p class="tariffs__connect--bigText modal__value-tariffs">Расширенный пакет</p>
                         <svg viewBox="0 0 250 250">

                                            <defs>
                                                <image width="806" height="806" id="img12"
                                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCA1Ny42MCA1Ny42MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii00LjgiIHk9Ii00LjgiIHdpZHRoPSI1Ny42MCIgaGVpZ2h0PSI1Ny42MCIgcng9IjI4LjgiIGZpbGw9IiMwMGFiZmUiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGcgaWQ9InR2Ij4gPGcgaWQ9InR2XzIiPiA8cGF0aCBpZD0iQ29tYmluZWQgU2hhcGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMDAwOCAzNC4wMDA2SDI5Ljk2NDhDMjkuNDEyNSAzNC4wMDA2IDI4Ljk2NDggMzMuNTUyOSAyOC45NjQ4IDMzLjAwMDZDMjguOTY0OCAzMi40NDgzIDI5LjQxMjUgMzIuMDAwNiAyOS45NjQ4IDMyLjAwMDZINDEuMDAwOEM0MS41NTI1IDMyLjAwMDYgNDIuMDAwOCAzMS41NTIzIDQyLjAwMDggMzEuMDAwNlYxMS4wMDA2QzQyLjAwMDggMTAuNDQ3NyA0MS41NTM0IDEwLjAwMDYgNDEuMDAwOCAxMC4wMDA2SDcuMDAwNzlDNi40NDcwOCAxMC4wMDA2IDYuMDAwNzkgMTAuNDQ2OSA2LjAwMDc5IDExLjAwMDZWMzEuMDAwNkM2LjAwMDc5IDMxLjU1MzIgNi40NDc5MiAzMi4wMDA2IDcuMDAwNzkgMzIuMDAwNkgyMS44NjI3QzIxLjkwMzggMzEuOTk1NSAyMS45NDU3IDMxLjk5MjggMjEuOTg4MiAzMS45OTI4QzIyLjAzMDcgMzEuOTkyOCAyMi4wNzI2IDMxLjk5NTUgMjIuMTEzNyAzMi4wMDA2SDI1LjkzODhDMjUuOTgzIDMyLjAwMDYgMjYuMDI2NiAzMi4wMDM1IDI2LjA2OTMgMzIuMDA5MUMyNi41ODM3IDMyLjA1MDQgMjYuOTg4MiAzMi40ODA4IDI2Ljk4ODIgMzMuMDA1OFYzNy45OTg2SDMzQzMzLjU1MjMgMzcuOTk4NiAzNCAzOC40NDYzIDM0IDM4Ljk5ODZDMzQgMzkuNTUwOSAzMy41NTIzIDM5Ljk5ODYgMzMgMzkuOTk4NkgxNUMxNC40NDc3IDM5Ljk5ODYgMTQgMzkuNTUwOSAxNCAzOC45OTg2QzE0IDM4LjQ0NjMgMTQuNDQ3NyAzNy45OTg2IDE1IDM3Ljk5ODZIMjAuOTg4MlYzNC4wMDA2SDcuMDAwNzlDNS4zNDMwNCAzNC4wMDA2IDQuMDAwNzkgMzIuNjU3NCA0LjAwMDc5IDMxLjAwMDZWMTEuMDAwNkM0LjAwMDc5IDkuMzQyMzMgNS4zNDI1MSA4LjAwMDYxIDcuMDAwNzkgOC4wMDA2MUg0MS4wMDA4QzQyLjY1NzYgOC4wMDA2MSA0NC4wMDA4IDkuMzQyODYgNDQuMDAwOCAxMS4wMDA2VjMxLjAwMDZDNDQuMDAwOCAzMi42NTY5IDQyLjY1NzEgMzQuMDAwNiA0MS4wMDA4IDM0LjAwMDZaTTI0Ljk4ODIgMzcuOTk4NlYzNC4wMDA2SDIyLjk4ODJWMzcuOTk4NkgyNC45ODgyWiIgZmlsbD0iI2Y1ZjVmNSIvPiA8L2c+IDwvZz4gPC9nPgoNPC9zdmc+" />
                                            </defs>
                                            <style>
                                                .s0 {
                                                    fill: #ffffff
                                                }
                                            </style>
                                            <use href="#img12" transform="matrix(.31,0,0,.31,0,0)" />
                                            <path class="s0" aria-label="100+каналов"
                                                d="m108.4 109v-1.6h2v-5.9l-2.1 0.4v-1.6l2.1-0.4h2.2v7.5h2.1v1.6zm12.8-4.6q0-1.7-0.3-2.4-0.3-0.7-1.1-0.7-0.7 0-1 0.7-0.4 0.7-0.4 2.4 0 1.8 0.4 2.5 0.3 0.7 1 0.7 0.8 0 1.1-0.7 0.3-0.7 0.3-2.5zm2.3 0.1q0 2.2-0.9 3.5-1 1.2-2.8 1.2-1.8 0-2.7-1.2-1-1.3-1-3.5 0-2.3 1-3.5 0.9-1.3 2.7-1.3 1.8 0 2.8 1.3 0.9 1.2 0.9 3.5zm6.3-0.1q0-1.7-0.3-2.4-0.3-0.7-1.1-0.7-0.7 0-1 0.7-0.4 0.7-0.4 2.4 0 1.8 0.4 2.5 0.3 0.7 1 0.7 0.8 0 1.1-0.7 0.3-0.7 0.3-2.5zm2.3 0.1q0 2.2-0.9 3.5-1 1.2-2.8 1.2-1.8 0-2.7-1.2-1-1.3-1-3.5 0-2.3 1-3.5 0.9-1.3 2.7-1.3 1.8 0 2.8 1.3 0.9 1.2 0.9 3.5zm5.1-3.3h1.4v3.2h3.2v1.4h-3.2v3.2h-1.4v-3.2h-3.2v-1.4h3.2zm-38.2 22.8v-6.8h2.2v2.3l2.4-2.3h2.3l-2.8 2.7 3.1 4.1h-2.3l-2.1-2.8-0.6 0.6v2.2zm12.5-3.1h-1.1q-0.7 0-1 0.3-0.4 0.2-0.4 0.6 0 0.5 0.3 0.7 0.3 0.2 0.8 0.2 0.6 0 1-0.4 0.4-0.5 0.4-1.1zm2.2-0.9v3.9h-2.2v-1q-0.4 0.7-1 0.9-0.5 0.3-1.3 0.3-1 0-1.7-0.6-0.7-0.6-0.7-1.6 0-1.2 0.9-1.8 0.8-0.5 2.5-0.5h1.3v-0.2q0-0.5-0.4-0.8-0.4-0.2-1.3-0.2-0.7 0-1.3 0.1-0.5 0.2-1.1 0.5v-1.7q0.7-0.2 1.4-0.3 0.7-0.1 1.4-0.1 1.9 0 2.7 0.8 0.8 0.7 0.8 2.3zm2 3.9v-6.8h2.2v2.6h2.1v-2.6h2.2v6.8h-2.2v-2.8h-2.1v2.8zm12.6-3h-1.1q-0.7 0-1 0.2-0.3 0.2-0.3 0.7 0 0.4 0.2 0.6 0.3 0.3 0.8 0.3 0.6 0 1-0.5 0.4-0.4 0.4-1.1zm2.2-0.8v3.9h-2.2v-1q-0.4 0.6-0.9 0.9-0.6 0.3-1.4 0.3-1 0-1.7-0.6-0.6-0.7-0.6-1.7 0-1.2 0.8-1.7 0.8-0.6 2.6-0.6h1.2v-0.1q0-0.6-0.4-0.8-0.4-0.2-1.2-0.2-0.7 0-1.3 0.1-0.6 0.1-1.1 0.4v-1.7q0.7-0.1 1.4-0.2 0.7-0.1 1.4-0.1 1.8 0 2.6 0.7 0.8 0.8 0.8 2.4zm1.7 3.9v-1.6q1-0.2 1.3-0.9 0.2-0.5 0.2-3.2v-1.1h5.8v6.8h-2.2v-5.3h-1.5v0.3q0 2.6-0.4 3.4-0.8 1.6-3.2 1.6zm12.6-5.4q-0.7 0-1.1 0.5-0.4 0.5-0.4 1.5 0 1 0.4 1.5 0.4 0.5 1.1 0.5 0.7 0 1.1-0.5 0.3-0.5 0.3-1.5 0-1-0.3-1.5-0.4-0.5-1.1-0.5zm0-1.6q1.7 0 2.7 1 1 0.9 1 2.6 0 1.7-1 2.6-1 1-2.7 1-1.8 0-2.7-1-1-0.9-1-2.6 0-1.7 1-2.6 0.9-1 2.7-1zm7.4 2.7h1q0.4 0 0.6-0.1 0.2-0.2 0.2-0.5 0-0.3-0.2-0.4-0.2-0.2-0.6-0.2h-1zm0 2.9h1.1q0.5 0 0.7-0.2 0.3-0.2 0.3-0.6 0-0.3-0.3-0.5-0.2-0.2-0.7-0.2h-1.1zm-2.1 1.3v-6.8h3.1q1.5 0 2.1 0.4 0.7 0.5 0.7 1.4 0 0.5-0.2 0.9-0.3 0.3-0.8 0.5 0.6 0.2 1 0.6 0.3 0.4 0.3 1.1 0 1-0.7 1.5-0.7 0.4-2.1 0.4z" />
                                        </svg>
                        <div class="price__package-item">
                            <ul>
                                                <li>
                                                    <svg viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">

                                                        <g id="SVGRepo_bgCarrier44" stroke-width="0" />

                                                        <g id="SVGRepo_tracerCarrier44" stroke-linecap="round"
                                                            stroke-linejoin="round" />

                                                        <g id="SVGRepo_iconCarrier44">
                                                            <path
                                                                d="M17 3L12 7L7 3M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
                                                                stroke="#fff" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </g>

                                                    </svg>
                                                    <p><strong>Для цифровых ТВ</strong> <br>Более 100 каналов</p>
                                                </li>
                                                <li>
                                                    <svg viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">

                                                        <g id="SVGRepo_bgCarrier55" stroke-width="0" />

                                                        <g id="SVGRepo_tracerCarrier55" stroke-linecap="round"
                                                            stroke-linejoin="round" />

                                                        <g id="SVGRepo_iconCarrier55">
                                                            <path
                                                                d="M17 3L12 7L7 3M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
                                                                stroke="#fff" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </g>

                                                    </svg>
                                                    <p><strong>Для аналоговых ТВ</strong><br> более 35 каналов</p>
                                                </li>
                                            </ul>



                        </div>
                    </div>
                    <div class="modal__pay">
                        <hr>
                        <div class="price__pay price__pay--TV">
                            <p>Ежемесячный платеж</p>
                            <p class="tariffs__connect--bigText">${document.querySelectorAll("[data-payModal]")[1].textContent}</p>
                        </div>
                    </div>

                    <!-- <button id="modal__button-connect" class="tariffs__connect-button">Подключить</button> -->
                    <!-- <a href="">Или заказать консультацию специалиста</a> -->
                </div>
                <div class="modal__form-inner ">
                    <!-- Имя -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="text" id="nameModal" name="name" required
                            minlength="2" maxlength="50" pattern="^[А-Яа-яЁё\s]+$" placeholder="Введите ваше имя">
                    </fieldset>

                    <!-- Телефон -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="tel" id="phoneModal" name="phone">
                    </fieldset>
                    <fieldset class="form__item-wrapper modal--widht">
                        <fieldset class="form__select modal--widht form__item">


                            <!--  -->
                            <!-- <select class="street" name="" id="">
                                <option value="1">Махновича</option>
                                <option value="2">Рябцева</option>
                                <option value="3">Суворова</option>
                            </select> -->

                            <div class="form__select__title" data-default="Option 0">
                                <span class="form__select__title-span modal--widht">Героев обороны</span>
                                <span class="form__select__title-arrow"></span>
                            </div>
                            <div class="form__select__content">
                                <input id="singleSelect01" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect01" class="form__select__label">Махновича</label>
                                <input id="singleSelect11" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect11" class="form__select__label">Рябцева</label>
                                <input id="singleSelect21" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect21" class="form__select__label">Суворова</label>
                                <input id="singleSelect31" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect31" class="form__select__label">Героев обороны</label>
                            </div>

                        </fieldset>
                    </fieldset>
                    <div class="modal__form-item">
                        <!-- Номер дома -->

                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Дом" name="home" class="form__item modal--widht" type="text">
                        </fieldset>

                        <!-- Квартира -->
                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Квартира" name="appart" class="form__item modal--widht" type="text">

                        </fieldset>
                    </div>
                    <!-- Выбор улицы -->
                    <div class="modal__area-wrap">
                        <p>Примечание</p>
                        <textarea
                            placeholder="(опишите здесь любые нюансы, которые вы хотели бы учесть при подключении)"
                            class="modal__area" name="x" id="x" rows="5"></textarea>
                    </div>

                    <div class="check modal__check">
                        <input type="checkbox" name="check-policy" id="check-policy-modal">
                        <label for="check-policy">Я ознакомлен(а) с <a href="#">Политикой</a> и согласен(а) на обработку
                            персональных данных.</label>

                    </div>

                    <button class="button button--border" type="submit">Подключить</button>
                </div>
            </form>
        </div>`;
                    SelectTown()
                    IMask(document.getElementById('phoneModal'), maskOptions);

                    break;
                case "extendedModalIntTV":
                    modal.innerHTML = `<div class="modal__connectTV">
            <section class="modal__title modal__title--color">
                <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>
                <div class="modal__close-wrap" onclick="closeModalTV()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </section>

            <form action="#" class="modal__form modal__form--line modal__form--TV">
                <div class="tariffs__connect tariffs__connect--green tariffs__connect--widht">
                    <div class="modal__TV-title">
                        <p class="tariffs__connect--bigText modal__value-tariffs">Пакет 18+</p>
                          <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">

                                <defs>
                                    <image width="806" height="806" id="img12"
                                        href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCA1Ny42MCA1Ny42MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii00LjgiIHk9Ii00LjgiIHdpZHRoPSI1Ny42MCIgaGVpZ2h0PSI1Ny42MCIgcng9IjI4LjgiIGZpbGw9IiNjY2ZmNjYiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGcgaWQ9InR2Ij4gPGcgaWQ9InR2XzIiPiA8cGF0aCBpZD0iQ29tYmluZWQgU2hhcGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMDAwOCAzNC4wMDA2SDI5Ljk2NDhDMjkuNDEyNSAzNC4wMDA2IDI4Ljk2NDggMzMuNTUyOSAyOC45NjQ4IDMzLjAwMDZDMjguOTY0OCAzMi40NDgzIDI5LjQxMjUgMzIuMDAwNiAyOS45NjQ4IDMyLjAwMDZINDEuMDAwOEM0MS41NTI1IDMyLjAwMDYgNDIuMDAwOCAzMS41NTIzIDQyLjAwMDggMzEuMDAwNlYxMS4wMDA2QzQyLjAwMDggMTAuNDQ3NyA0MS41NTM0IDEwLjAwMDYgNDEuMDAwOCAxMC4wMDA2SDcuMDAwNzlDNi40NDcwOCAxMC4wMDA2IDYuMDAwNzkgMTAuNDQ2OSA2LjAwMDc5IDExLjAwMDZWMzEuMDAwNkM2LjAwMDc5IDMxLjU1MzIgNi40NDc5MiAzMi4wMDA2IDcuMDAwNzkgMzIuMDAwNkgyMS44NjI3QzIxLjkwMzggMzEuOTk1NSAyMS45NDU3IDMxLjk5MjggMjEuOTg4MiAzMS45OTI4QzIyLjAzMDcgMzEuOTkyOCAyMi4wNzI2IDMxLjk5NTUgMjIuMTEzNyAzMi4wMDA2SDI1LjkzODhDMjUuOTgzIDMyLjAwMDYgMjYuMDI2NiAzMi4wMDM1IDI2LjA2OTMgMzIuMDA5MUMyNi41ODM3IDMyLjA1MDQgMjYuOTg4MiAzMi40ODA4IDI2Ljk4ODIgMzMuMDA1OFYzNy45OTg2SDMzQzMzLjU1MjMgMzcuOTk4NiAzNCAzOC40NDYzIDM0IDM4Ljk5ODZDMzQgMzkuNTUwOSAzMy41NTIzIDM5Ljk5ODYgMzMgMzkuOTk4NkgxNUMxNC40NDc3IDM5Ljk5ODYgMTQgMzkuNTUwOSAxNCAzOC45OTg2QzE0IDM4LjQ0NjMgMTQuNDQ3NyAzNy45OTg2IDE1IDM3Ljk5ODZIMjAuOTg4MlYzNC4wMDA2SDcuMDAwNzlDNS4zNDMwNCAzNC4wMDA2IDQuMDAwNzkgMzIuNjU3NCA0LjAwMDc5IDMxLjAwMDZWMTEuMDAwNkM0LjAwMDc5IDkuMzQyMzMgNS4zNDI1MSA4LjAwMDYxIDcuMDAwNzkgOC4wMDA2MUg0MS4wMDA4QzQyLjY1NzYgOC4wMDA2MSA0NC4wMDA4IDkuMzQyODYgNDQuMDAwOCAxMS4wMDA2VjMxLjAwMDZDNDQuMDAwOCAzMi42NTY5IDQyLjY1NzEgMzQuMDAwNiA0MS4wMDA4IDM0LjAwMDZaTTI0Ljk4ODIgMzcuOTk4NlYzNC4wMDA2SDIyLjk4ODJWMzcuOTk4NkgyNC45ODgyWiIgZmlsbD0iIzAwMDAwMCIvPiA8L2c+IDwvZz4gPC9nPgoNPC9zdmc+" />
                                    <image width="811" height="811" id="img22"
                                        href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii03LjY4IC03LjY4IDQ3LjM2IDQ3LjM2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNiI+Cg08ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCIvPgoNPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cg08ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+IDxnPiA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTYsMEM3LjE3OCwwLDAsNy4xNzgsMCwxNnM3LjE3OCwxNiwxNiwxNnMxNi03LjE3OCwxNi0xNlMyNC44MjIsMCwxNiwweiBNMTYsMzFDNy43MjksMzEsMSwyNC4yNzEsMSwxNiBTNy43MjksMSwxNiwxczE1LDYuNzI5LDE1LDE1UzI0LjI3MSwzMSwxNiwzMXoiLz4gPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE5LjYwOSwxNC44MDJMMTQuMzE2LDEwLjhjLTAuMjYzLTAuMTk3LTAuNTY3LTAuMzAyLTAuODgtMC4zMDJDMTIuNjMxLDEwLjQ5OCwxMiwxMS4xNTgsMTIsMTJ2OCBjMCwwLjg0MiwwLjYzNSwxLjUwMiwxLjQ0NSwxLjUwMmMwLjMxMywwLDAuNjE5LTAuMTA0LDAuODg1LTAuMzA0bDUuMjU4LTMuOTk4YzAuMzgyLTAuMjg3LDAuNjExLTAuNzQyLDAuNjExLTEuMjE4IEMyMC4xOTgsMTUuNTEyLDE5Ljk4MywxNS4wODEsMTkuNjA5LDE0LjgwMnogTTE4Ljk4NSwxNi40MDFsLTUuMjU4LDMuOTk4QzEzLjQzNCwyMC42MjIsMTMsMjAuNDUzLDEzLDIwdi04IGMwLTAuMzI2LDAuMjI1LTAuNTAyLDAuNDM3LTAuNTAyYzAuMDk2LDAsMC4xOSwwLjAzNCwwLjI3OSwwLjEwMWw1LjI5Myw0LjAwMmMwLjE2NSwwLjEyMywwLjE5LDAuMjkyLDAuMTksMC4zODIgQzE5LjE5OCwxNi4xNDcsMTkuMTIyLDE2LjMsMTguOTg1LDE2LjQwMXoiLz4gPC9nPiA8L2c+Cg08L3N2Zz4=" />
                                </defs>
                                <style>
                                </style>
                                <use id="tv-svgrepo-com" href="#img12" transform="matrix(.31,0,0,.31,0,0)" />
                                <use id="play-button-svgrepo-com" href="#img22"
                                    transform="matrix(.09,0,0,.089,89,77)" />
                            </svg>
                        <div class="price__package-item">
                            <ul>
                                                <li>
                                                    <svg viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">

                                                        <g id="SVGRepo_bgCarrier44" stroke-width="0" />

                                                        <g id="SVGRepo_tracerCarrier44" stroke-linecap="round"
                                                            stroke-linejoin="round" />

                                                        <g id="SVGRepo_iconCarrier44">
                                                            <path
                                                                d="M17 3L12 7L7 3M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
                                                                stroke="#000" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </g>

                                                    </svg>
                                                    <p><strong>Для цифровых ТВ</strong> <br>Более 100 каналов</p>
                                                </li>
                                                <li>
                                                    <svg viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">

                                                        <g id="SVGRepo_bgCarrier55" stroke-width="0" />

                                                        <g id="SVGRepo_tracerCarrier55" stroke-linecap="round"
                                                            stroke-linejoin="round" />

                                                        <g id="SVGRepo_iconCarrier55">
                                                            <path
                                                                d="M17 3L12 7L7 3M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z"
                                                                stroke="#000" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </g>

                                                    </svg>
                                                    <p><strong>Для аналоговых ТВ</strong><br> более 35 каналов</p>
                                                </li>
                                            </ul>



                        </div>
                    </div>
                    <div class="modal__pay">
                        <hr>
                        <div class="price__pay price__pay--TV">
                            <p>Ежемесячный платеж</p>
                            <p class="tariffs__connect--bigText">${document.querySelectorAll("[data-payModal]")[1].textContent}</p>
                        </div>
                    </div>

                    <!-- <button id="modal__button-connect" class="tariffs__connect-button">Подключить</button> -->
                    <!-- <a href="">Или заказать консультацию специалиста</a> -->
                </div>
                <div class="modal__form-inner ">
                    <!-- Имя -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="text" id="nameModal" name="name" required
                            minlength="2" maxlength="50" pattern="^[А-Яа-яЁё\s]+$" placeholder="Введите ваше имя">
                    </fieldset>

                    <!-- Телефон -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="tel" id="phoneModal" name="phone">
                    </fieldset>
                    <fieldset class="form__item-wrapper modal--widht">
                        <fieldset class="form__select modal--widht form__item">


                            <!--  -->
                            <!-- <select class="street" name="" id="">
                                <option value="1">Махновича</option>
                                <option value="2">Рябцева</option>
                                <option value="3">Суворова</option>
                            </select> -->

                            <div class="form__select__title" data-default="Option 0">
                                <span class="form__select__title-span modal--widht">Героев обороны</span>
                                <span class="form__select__title-arrow"></span>
                            </div>
                            <div class="form__select__content">
                                <input id="singleSelect01" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect01" class="form__select__label">Махновича</label>
                                <input id="singleSelect11" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect11" class="form__select__label">Рябцева</label>
                                <input id="singleSelect21" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect21" class="form__select__label">Суворова</label>
                                <input id="singleSelect31" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect31" class="form__select__label">Героев обороны</label>
                            </div>

                        </fieldset>
                    </fieldset>
                    <div class="modal__form-item">
                        <!-- Номер дома -->

                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Дом" name="home" class="form__item modal--widht" type="text">
                        </fieldset>

                        <!-- Квартира -->
                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Квартира" name="appart" class="form__item modal--widht" type="text">

                        </fieldset>
                    </div>
                    <!-- Выбор улицы -->
                    <div class="modal__area-wrap">
                        <p>Примечание</p>
                        <textarea
                            placeholder="(опишите здесь любые нюансы, которые вы хотели бы учесть при подключении)"
                            class="modal__area" name="x" id="x" rows="5"></textarea>
                    </div>

                    <div class="check modal__check">
                        <input type="checkbox" name="check-policy" id="check-policy-modal">
                        <label for="check-policy">Я ознакомлен(а) с <a href="#">Политикой</a> и согласен(а) на обработку
                            персональных данных.</label>

                    </div>

                    <button class="button button--border button--green" type="submit">Подключить</button>
                </div>
            </form>
        </div>`;
                    SelectTown()
                    IMask(document.getElementById('phoneModal'), maskOptions);

                    break;
                case "familyModalTV":

                    modal.innerHTML = `<div class="modal__connectTV">
            <section class="modal__title modal__title--color">
                <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>
                <div class="modal__close-wrap" onclick="closeModalTV()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </section>

            <form action="#" class="modal__form modal__form--TV">
                <div class="tariffs__connect tariffs__connect--widht">
                    <div class="modal__TV-title">
                        <p class="tariffs__connect--bigText modal__value-tariffs">Семейный пакет</p>
                         <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">

                                            <defs>
                                                <image width="806" height="806" id="img1"
                                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCA1Ny42MCA1Ny42MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii00LjgiIHk9Ii00LjgiIHdpZHRoPSI1Ny42MCIgaGVpZ2h0PSI1Ny42MCIgcng9IjI4LjgiIGZpbGw9IiMwMGFiZmUiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGcgaWQ9InR2Ij4gPGcgaWQ9InR2XzIiPiA8cGF0aCBpZD0iQ29tYmluZWQgU2hhcGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMDAwOCAzNC4wMDA2SDI5Ljk2NDhDMjkuNDEyNSAzNC4wMDA2IDI4Ljk2NDggMzMuNTUyOSAyOC45NjQ4IDMzLjAwMDZDMjguOTY0OCAzMi40NDgzIDI5LjQxMjUgMzIuMDAwNiAyOS45NjQ4IDMyLjAwMDZINDEuMDAwOEM0MS41NTI1IDMyLjAwMDYgNDIuMDAwOCAzMS41NTIzIDQyLjAwMDggMzEuMDAwNlYxMS4wMDA2QzQyLjAwMDggMTAuNDQ3NyA0MS41NTM0IDEwLjAwMDYgNDEuMDAwOCAxMC4wMDA2SDcuMDAwNzlDNi40NDcwOCAxMC4wMDA2IDYuMDAwNzkgMTAuNDQ2OSA2LjAwMDc5IDExLjAwMDZWMzEuMDAwNkM2LjAwMDc5IDMxLjU1MzIgNi40NDc5MiAzMi4wMDA2IDcuMDAwNzkgMzIuMDAwNkgyMS44NjI3QzIxLjkwMzggMzEuOTk1NSAyMS45NDU3IDMxLjk5MjggMjEuOTg4MiAzMS45OTI4QzIyLjAzMDcgMzEuOTkyOCAyMi4wNzI2IDMxLjk5NTUgMjIuMTEzNyAzMi4wMDA2SDI1LjkzODhDMjUuOTgzIDMyLjAwMDYgMjYuMDI2NiAzMi4wMDM1IDI2LjA2OTMgMzIuMDA5MUMyNi41ODM3IDMyLjA1MDQgMjYuOTg4MiAzMi40ODA4IDI2Ljk4ODIgMzMuMDA1OFYzNy45OTg2SDMzQzMzLjU1MjMgMzcuOTk4NiAzNCAzOC40NDYzIDM0IDM4Ljk5ODZDMzQgMzkuNTUwOSAzMy41NTIzIDM5Ljk5ODYgMzMgMzkuOTk4NkgxNUMxNC40NDc3IDM5Ljk5ODYgMTQgMzkuNTUwOSAxNCAzOC45OTg2QzE0IDM4LjQ0NjMgMTQuNDQ3NyAzNy45OTg2IDE1IDM3Ljk5ODZIMjAuOTg4MlYzNC4wMDA2SDcuMDAwNzlDNS4zNDMwNCAzNC4wMDA2IDQuMDAwNzkgMzIuNjU3NCA0LjAwMDc5IDMxLjAwMDZWMTEuMDAwNkM0LjAwMDc5IDkuMzQyMzMgNS4zNDI1MSA4LjAwMDYxIDcuMDAwNzkgOC4wMDA2MUg0MS4wMDA4QzQyLjY1NzYgOC4wMDA2MSA0NC4wMDA4IDkuMzQyODYgNDQuMDAwOCAxMS4wMDA2VjMxLjAwMDZDNDQuMDAwOCAzMi42NTY5IDQyLjY1NzEgMzQuMDAwNiA0MS4wMDA4IDM0LjAwMDZaTTI0Ljk4ODIgMzcuOTk4NlYzNC4wMDA2SDIyLjk4ODJWMzcuOTk4NkgyNC45ODgyWiIgZmlsbD0iI2Y1ZjVmNSIvPiA8L2c+IDwvZz4gPC9nPgoNPC9zdmc+" />
                                                <image width="800" height="800" id="img2"
                                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjZmZmZmZmIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDQ4NC44MjkgNDg0LjgyOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3Ryb2tlPSIjZmZmZmZmIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGc+IDxnPiA8cGF0aCBkPSJNMjk2LjA3MiwxNDUuNTk3YzguOTc5LDAsMTcuNzQ0LTMuNDQ0LDI0LjMxOC05LjU1N2M2LjUyMy02LjA2NSwxMC42MDktMTQuNDksMTEuMjk3LTIzLjM3NCBjMC42OTctOS4wMTEtMi4wODItMTguMDg0LTcuNzQtMjUuMTM1Yy01LjU0My02LjkwNS0xMy41OTgtMTEuNTk2LTIyLjM1Mi0xMi45NTVjLTguOTY3LTEuMzkyLTE4LjI5MSwwLjcxLTI1Ljc2Niw1Ljg2MSBjLTcuMjYsNS4wMDItMTIuNTIxLDEyLjY1OS0xNC41MzUsMjEuMjQ3Yy0yLjA3OCw4Ljg1Ny0wLjY2NiwxOC4zNjgsMy45MzQsMjYuMjJjNC40NDMsNy41ODYsMTEuNjc3LDEzLjM4NSwyMC4wNjIsMTYuMDM3IEMyODguNzczLDE0NS4wNDIsMjkyLjQyLDE0NS41OTcsMjk2LjA3MiwxNDUuNTk3eiIvPiA8cGF0aCBkPSJNMzk1LjU2OCwyMzguNTg5YzkuMDQ1LDAsMTcuNDQ3LTUuNDg0LDIxLjA5Mi0xMy43NjRjMy42OTEtOC4zODYsMS45MzktMTguNDM2LTQuMzQ4LTI1LjA4OSBjLTYuMjg1LTYuNjUxLTE2LjE5Ny04Ljk3MS0yNC43ODEtNS43NzVjLTguNDQzLDMuMTQ1LTE0LjQxNiwxMS4xOTMtMTQuOTU1LDIwLjE5IEMzNzEuNzkxLDIyNy4yMTgsMzgyLjQ3MSwyMzguNTg5LDM5NS41NjgsMjM4LjU4OXoiLz4gPHBhdGggZD0iTTgyLjI0NywyMzcuNDIzYzkuMDQ1LDAsMTcuNDQ2LTUuNDg0LDIxLjA5MS0xMy43NjRjMy42OTItOC4zODYsMS45NC0xOC40MzYtNC4zNDktMjUuMDg5IGMtNi4yODUtNi42NTEtMTYuMTk3LTguOTcxLTI0Ljc4LTUuNzc1Yy04LjQ0NiwzLjE0NS0xNC40MTUsMTEuMTkzLTE0Ljk1NSwyMC4xOUM1OC40NjgsMjI2LjA1Myw2OS4xNDcsMjM3LjQyMyw4Mi4yNDcsMjM3LjQyM3oiLz4gPHBhdGggZD0iTTEyMy44ODMsMjg5LjUzM2MtMC4xOTUtMS4xMzktMC4zNTUtMi4yOTktMC41OTItMy40NzFjLTAuNTk0LTIuMzg5LTEuMTk2LTQuNzc1LTEuODAxLTcuMTYzIGMtMC43MjQtMi4wNzktMS4zOTktNC4xODUtMi4xODYtNi4yNDFjLTAuODEzLTIuMTI2LTEuODgtNC4xNzctMi44NDItNi4yMzhjLTAuOTYyLTEuNjU3LTEuOTMxLTMuMzEyLTIuOTAyLTQuOTYyIGMtMS4wODMtMS41MDctMi4xMjEtMy4wNjYtMy4yODEtNC41MTZjLTIuOTMtMy4zNDYtNS45NzYtNi4zMDctOS41LTkuMDI0Yy0xLjcwMi0xLjEzMi0zLjQxMy0yLjE5OS01LjIxMS0zLjE3NCBjLTMuMDE2LTEuNDM0LTYuMDY1LTIuODY0LTkuMzYzLTMuNTEzYy0zLjkzOS0wLjc3NS03LjkzNC0wLjI3MS0xMS42NDQsMS4yMjljLTUuMjE2LDIuMTA4LTkuMzY0LDUuOTAzLTEzLjg2OSw5LjE1NCBjLTQuODU5LDMuNTA4LTEwLjAwOSw2LjkzNi0xNS41ODUsOS4xOTVjLTAuMTExLDAuMDQ0LTAuMjIzLDAuMDg4LTAuMzM0LDAuMTMyYy0xLjAxMiwwLjQzOC0yLjA2NywwLjcyOC0zLjEwOSwxLjA3NCBjLTMuMTY0LDAuOTI1LTQuNTc4LDAuMjkzLTQuNTc4LDAuMjkzbC00LjUyNS0xLjg1M2MtMS4yNS0wLjUwMy0yLjY1OC0wLjU4LTMuOTg2LTAuMTcyYzEuNjE5LTEyLjM4NCwzLjczMi0yNC44OTEsMi41OS0zNy40MTUgYy0xLjE1LTEyLjYxNy02LjcyOS0yNC4zMDEtOC41OC0zNi44MDdjLTAuNzA5LTQuNzkyLTAuODY5LTkuNjY4LTAuMTctMTQuNDcxaDEuODM0YzEuMjQzLDAsMi4wNjQtMS4zNzMsMS40NzUtMi40NjggbC0xLjIzOC0yLjMwOWM4LjQ4OC03LjI0NSwxNy4xNDYtMTcuNTAyLDE2Ljg0OC0yOS4zMjhjLTAuMjctMTAuNjk3LTcuMzYyLTIyLjE3NS0xOC43NzEtMjMuMzYxIGMtMTAuNTUyLTEuMDk4LTE5LjAyMiw3LjIyNS0yMS42MzMsMTYuODU2Yy0xLjI0MSw0LjU4MS0xLjI2Niw5LjQ1OCwwLjA4MSwxNC4wMTZjMS42NDksNS41OCw0Ljk5NCwxMC41MzQsOC43OTEsMTQuODc3IGMyLjE2OCwyLjQ4Miw0LjUzNyw0Ljc4Nyw3LjA0MSw2LjkyOGwtMS4xNzQsMi4xNTVjLTAuNzYxLDEuMDg4LDAuMDQ5LDIuNjMzLDEuMzc1LDIuNjMzaDEuNDc3IGMtMS42NjUsMTIuNTk3LDIuMTk3LDI0Ljg0OSw1LjY3MiwzNi43OThjMS43NTIsNi4wMjUsMy4wODYsMTEuOTUxLDMuMzU4LDE4LjI0NGMwLjI3MSw2LjI2LTAuMjEsMTIuNTI4LTAuOTIyLDE4Ljc0NCBjLTAuNDc0LDQuMTI2LTEuMDUzLDguMjQtMS42MDMsMTIuMzU1Yy0wLjUzMywzLjk4Mi0xLjE1NCw3Ljk4Ni0xLjEyNywxMi4wMTRjMC4wNDksNy4wOTksMi41NywxMy40MzksNi4zNDIsMTkuMzY2bDMuMjUyLTIuMDY4IGMtMy4zMjgtNS4yMy01LjA0Ny05LjQ1OC01LjU2NC0xNC4yNmMwLjc3NSwwLjc4NSwxLjc4NSwxLjU5NSwyLjk4NiwyLjMxNmMwLjc0OCwwLjM5NCwxLjYsMC45MDMsMi40NDcsMS4xNjcgYzEuMzI0LDAuNDgzLDIuNjg0LDAuODQ0LDQuMDgyLDEuMDRjMS4zODQsMC4xMzMsMi43MzUsMC4xOSw0LjEyNSwwLjE5OWMwLjkwOC0wLjAyOSwxLjc5MS0wLjExMiwyLjcwMy0wLjE5OSBjNC45OTQtMC43NSw5Ljc1Mi0yLjEyNSwxNC40NDEtNGwtMi4yMjcsNDEuMTI4Yy0wLjI0OCw0LjgyLDAuODQzLDkuNjY0LDMuMTg2LDEzLjg4OGwzLjY2OCw3NS43OTggYzAuMjE0LDQuMTMyLDMuNjk0LDcuNTIxLDcuODM3LDcuNTkzYzQuMjQxLDAuMDczLDcuODgzLTMuMzMxLDguMTAxLTcuNTY2bDMuMTIzLTYwLjI5OGwyLjkxNiw2MC4yNzEgYzAuMjE1LDQuMTMzLDMuNjk1LDcuNTIxLDcuODM5LDcuNTkzYzQuMjQxLDAuMDczLDcuODgxLTMuMzMyLDguMTAxLTcuNTY2bDMuOTY3LTc1Ljk1YzIuMDA0LTMuOTIsMy4wMzUtOS4wNSwyLjc4MS0xMy43NjIgbC0xLjUwMi0yNy43NWMwLjM4OSwxLjExMiwwLjc4NiwyLjIyMSwxLjE4LDMuMzMyYzAuNjkxLDIuMzAzLDEuMjI4LDQuNjY1LDEuODMsNi45OTRjMC41NzksMy4yMzEsMS4yNzEsNi40NzYsMS41ODQsOS43NDcgYzAuMjMzLDIuNDQ4LDAuNDg3LDQuODk1LDAuNzM2LDcuMzQxbDAuMDUzLDAuNTIxYzAuMzcyLDMuNTU0LDMuNTQ4LDYuMjY0LDcuMTEsNi4xMDRjMy43MTQtMC4xNjYsNi4xODQtMy4zNDUsNi41MTctNi44NjcgQzEyNS42OTQsMzA1Ljc2NywxMjUuMTYxLDI5Ny41MzIsMTIzLjg4MywyODkuNTMzQzEyMy42ODgsMjg4LjM5NSwxMjQuMDY1LDI5MC42NywxMjMuODgzLDI4OS41MzN6Ii8+IDxwYXRoIGQ9Ik0xODMuNzUsMTM4LjkzNWM5LjAwNCwwLDE3Ljc5LTMuNTA2LDI0LjMxOS05LjcwN2M2LjQ5MS02LjE2NiwxMC40NTgtMTQuNzEsMTAuOTQ5LTIzLjY1MiBjMC40OTUtOS4wMzYtMi41MzctMTguMDQ4LTguNDI0LTI0LjkyNmMtNS43OTQtNi43NjktMTQuMDgtMTEuMTc4LTIyLjk0MS0xMi4xNTJjLTkuMDI5LTAuOTkzLTE4LjIzOSwxLjU2My0yNS40MzgsNy4xMDcgYy03LjAzMyw1LjQxNi0xMS44NjUsMTMuNDMxLTEzLjMxNSwyMi4xOTNjLTEuNDg3LDguOTg1LDAuNTg1LDE4LjM2NCw1Ljc2MSwyNS44NmM1LjAyOSw3LjI4MywxMi43NiwxMi41MjEsMjEuNDA1LDE0LjQzOCBDMTc4LjU4NiwxMzguNjU2LDE4MS4xNjgsMTM4LjkzNSwxODMuNzUsMTM4LjkzNXoiLz4gPHBhdGggZD0iTTQ3OS44NzMsMTQyLjIyNmMtNC40MTgtNi4wMy0xMS42OTUtOS41NjItMTkuMTg0LTguMDU0YzcuOTAyLDUuMTM2LDExLjg0NiwxNS40MTcsMTAuNDE4LDI0LjYwNSBjLTEuNDczLDkuNDc1LTguMTA3LDE3LjU2My0xNS4wMjcsMjMuNzkzYzEuMzc5LDEuMzksMi44MTIsMi43MjUsNC4yOTksMy45OTVsLTEuMTc0LDIuMTU1Yy0wLjc2MiwxLjA4OSwwLjA0OSwyLjYzMywxLjM3NSwyLjYzMyBoMS43NjhjLTAuNjk1LDEwLjEtMy44ODcsMTkuODgzLTcuNzM2LDI5LjE4MmMtMS44NCw0LjQ0Mi0zLjg1Nyw4LjgwNy01LjkyLDEzLjE1Yy0yLjIyMyw0LjY4NC00LjIzMiw5LjMwOS01LjQzOSwxNC4zNzQgYy0wLjM3MS01LjU0MS0wLjMzMi0xMS4xNDUsMC42NDUtMTYuNjI1YzAuODk2LTUuMDI4LDIuNTc4LTkuODk3LDMuNTktMTQuOTA5YzEuOTEtOS40NzEsMS44OTUtMTguOTcyLDAuNzQ4LTI4LjU0MmgxLjk3MyBjMS4yNDIsMCwyLjA2Ni0xLjM3MiwxLjQ3Ny0yLjQ2OGwtMS4yMzgtMi4zMDljOC40ODYtNy4yNDcsMTcuMTQ1LTE3LjUwMiwxNi44NDgtMjkuMzI3Yy0wLjI3MS0xMC42OTYtNy4zNjEtMjIuMTc1LTE4Ljc3LTIzLjM2MiBjLTEwLjU1My0xLjA5Ny0xOS4wMjMsNy4yMjUtMjEuNjM3LDE2Ljg1NmMtMS4yNCw0LjU4LTEuMjY2LDkuNDU4LDAuMDg0LDE0LjAxN2MxLjY0OCw1LjU3OSw0Ljk5MiwxMC41MzMsOC43ODksMTQuODc3IGMyLjE3LDIuNDgxLDQuNTM3LDQuNzg2LDcuMDQxLDYuOTI4bC0xLjE3MiwyLjE1NWMtMC43NywxLjA4NywwLjA1MywyLjYzMywxLjM3NSwyLjYzM2gxLjkgYzAuNjc4LDUuNTY0LDEuMDY0LDExLjE3OSwwLjc3MywxNi43ODRjLTAuMjY0LDUuMDE2LTEuMDk4LDkuOTctMi4yNTQsMTQuODUyYy0wLjY2NCwyLjgwNC0xLjUwNCw1LjU2My0yLjE3Niw4LjM2NSBjLTAuNzMyLDMuMDY3LTEuMTcsNi4yMDItMS4zNzEsOS4zNDhjLTAuNDA4LDYuMzA5LDAuMDk2LDEyLjYzNiwwLjg0NCwxOC44OTljMC4yNTQsMi4xNDQsMC42MjMsNC4yODYsMC43NjQsNi40NCBjLTEuNTUzLDAuMTgzLTMuMDY2LTAuMTMxLTQuNTY2LTAuNDk1Yy0xLjAwNC0wLjM1NC0yLjAyMS0wLjY0OC0yLjk5Mi0xLjA5MWMtNS41OS0yLjI4MS0xMC44NTctNS44ODUtMTUuNjA5LTkuNTcgYy00LjM2MS0zLjM4MS04LjQ0Ny03LjA4OS0xMy40NzMtOS40OTNjLTMuNDM5LTEuNjQ1LTcuMjAzLTIuNTI4LTExLjAxNC0yLjAzNGMtMy44OTgsMC41MDYtNy42NTIsMi4wMDktMTEuMDg0LDMuODg0IGMtMi43NzMsMS41MTYtNS4zODEsMy4zMjgtNy44MjQsNS4zM2MtMi44NDYsMi4zMy01LjE5Myw1LjAzMy03LjU0Myw3Ljg0N2MtMS4wNjIsMS41MTUtMi4xNDMsMy4wMjEtMy4xNDgsNC41NzQgYy0wLjM0NiwwLjYxMi0wLjcwMSwxLjI0NS0xLjA1MywxLjg2OWMwLjA5Mi03LjQzNS0wLjA4OC0xNC44MTQtMC41MzktMjIuMjM1Yy0wLjIzLTIuMzc4LTAuNDU5LTQuNzU3LTAuNjk1LTcuMTM1IGMtMC44NDItNi4yNjItMS45MjQtMTIuNDIyLTMuMjgzLTE4LjU5M2MtMC40ODgtMS44NTItMC45ODItMy43MTktMS40NzktNS41OTRjLTIuMDgtNi42NjktNC40OTYtMTMuMDc3LTcuNDg4LTE5LjM5MyBjLTEuMzgxLTIuNjI1LTIuODMtNS4xODYtNC4zMjYtNy43NDZjLTYuNTc4LTEwLjI5LTE0Ljg5NS0xOS40MjEtMjUuNDY5LTI1LjcwMmMtOS42ODYtNS43NTUtMjEuMTIzLTguNzA5LTMyLjI5OS02LjI0NiBjLTkuNzg5LDIuMTU2LTE4LjY2Niw3LjU0Ni0yNi4xLDE0LjEzM2MtOC4wNTIsNy4xMzQtMTQuNTE2LDE1LjkzNS0xOS40NTIsMjUuNDY1Yy04LjQ3Mi0yMS4yMjktMjUuNzIxLTQwLjQxNi00OC45NTUtNDQuODY5IGMtMTEuMzEyLTIuMTY4LTIzLjEwNC0wLjMzMS0zMy4zNSw0Ljg4NmMtMTAuMjQ4LDUuMjE5LTE4LjkwNCwxMy4yNDEtMjUuNDM2LDIyLjY2MmMtMTQuMTk3LDIwLjQ4LTE4LjAzMyw0Ni4zMzYtMTcuNDYsNzAuNzUxIGMwLjE3OCw3LjU3OSwwLjc2MywxNS4xNjMsMS43MTgsMjIuNjgzbDAuMDE2LDAuMTIxYzAuNzMzLDUuNTM2LDUuODgyLDkuNjAxLDExLjQzNCw5LjA2YzUuNDgyLTAuNTM1LDkuNzA1LTUuNDE5LDkuNDU5LTEwLjkxOCBjLTAuNDMyLTEwLjEzNi0wLjE4My0yMC4zNDYsMS4wNDMtMzAuNDE5YzEuNTA0LTEyLjM1NSw0LjUyMi0yNC44MDksMTAuNjI5LTM1Ljc0N2wtNy43MzIsNjMuODM2IGMtMS4xMjEsOS43MTQsMS4yMTUsMTkuNjA5LDYuNzIzLDI3LjcwNWw1LjQzOSwxMTQuNjg4YzAuMzI0LDYuNDI0LDUuNzk0LDExLjY1NywxMi4yMzIsMTEuNjU2IGM2LjQ1NS0wLjAwMiwxMS45MjItNS4yNDIsMTIuMjExLTExLjY4OGwzLjg4NS04Ni42NDFsNC4wMzcsODYuNjYyYzAuMzIsNi40MjYsNS43ODUsMTEuNjYyLDEyLjIyNSwxMS42NjYgYzYuNDU0LDAuMDAzLDExLjkyNC01LjIzMywxMi4yMTktMTEuNjc3bDUuMjU4LTExNS4wODZjNS4xMzctNy43NjQsNy42NTQtMTcuMzE4LDYuNDQ3LTI3LjI4NmwtNy42MzktNjMuMDY4IGM4LjUxNywxNS43NTYsMTAuOTY5LDM0LjI4LDExLjM3Myw1MS45NTRjLTAuMTI1LDQuMTI2LTAuMTM2LDguMjQyLTAuMDksMTIuMzY5Yy0wLjAyMywwLjY4OC0wLjA0MSwxLjA3My0wLjA0MSwxLjA3MyBjLTAuMjI5LDUuNTAzLDQuMDIsMTAuNDE4LDkuNTE2LDEwLjkyNGM1LjgzNywwLjUzNSwxMS4yMzQtMy44NzIsMTEuNzE5LTkuNzM0bDAuMDMxLTAuNGMwLjE5Ny0yLjM3MiwwLjM5NS00Ljc0MiwwLjU4Ni03LjExNCBjMC41MzEtNC41NDEsMS4xNDMtOS4wNTMsMS44NDItMTMuNTdjMS43NDQtOC45MzcsMy44OTQtMTcuNjg3LDcuMjM4LTI2LjE3NmMwLjYyOS0xLjQzNCwxLjE5OS0yLjkwMiwxLjg1OS00LjMxMnY4LjI2NWwwLjI0MiwxMSBsLTE3LjkzMyw4MC42NDZjLTAuODA0LDQuMTAxLDIuNDM1LDguMDI4LDYuNjA2LDguMDI4aDEzLjE1MmwzLjk1NSw4MS43NGMwLjMzNCw2LjQ1Nyw1LjgwNSwxMS43MjksMTIuMjc2LDExLjc3NSBjNi41MywwLjA0OSwxMi4xMDMtNS4yMTUsMTIuNDM4LTExLjczM2w0LjIzNi04MS43ODJoMS4xNzJsMy45NTMsODEuNzRjMC4zMzYsNi40NTcsNS44MDcsMTEuNzI5LDEyLjI3OSwxMS43NzUgYzYuNTMxLDAuMDQ5LDEyLjEwNC01LjIxNCwxMi40NDEtMTEuNzMzbDQuMjMyLTgxLjc4MmgxMy4yMTdjNC4xOTMsMCw3LjM5NS0zLjk0LDYuNi04LjA0N2wtMTcuODQ0LTgxLjYwNWwwLjE1Mi04LjcwNnYtOC4wNSBjMC4zMDcsMC43MjgsMC42MTMsMS40NTcsMC45MTgsMi4xODNjMC41NDMsMS40NzUsMS4wODQsMi45NDQsMS42MTksNC40MDJjMS42MjUsNS4wNzcsMywxMC4xNjksNC4yMDMsMTUuMzYyIGMwLjM5NSwyLjA0OSwwLjc4OSw0LjA5OCwxLjE4Miw2LjE0NmMwLjY4Niw0LjQ2NiwxLjI3MSw4LjkzLDEuNzkzLDEzLjQxN2MwLjE5MSwyLjM0NCwwLjM4Nyw0LjY4OCwwLjU4LDcuMDMxbDAuMDM1LDAuNDM4IGMwLjY5NSw4LjA4NywxMC4yNzcsMTIuNDQsMTYuODM2LDcuNjIzYy0wLjgyLDIuMTUtMS40OTIsNC4zNjctMi4yMjEsNi41NTFjLTAuNTgyLDIuMzg2LTEuMTYsNC43NzItMS43MzQsNy4xNjEgYy0wLjUzNSwyLjc5My0wLjg5Niw1LjYyNS0xLjMzOCw4LjQzNWMtMC4yOTUsMy42NjQtMC43MjMsNy4zNDgtMC43NCwxMS4wMjRjLTAuMDE2LDIuNzc2LTAuMDM3LDUuNTU0LTAuMDUxLDguMzMgYy0wLjAwOCwzLjU3NSwyLjg1OSw2LjY0Niw2LjQzMiw2Ljg1N2MzLjYwOSwwLjIxNSw2LjgzOC0yLjU0Miw3LjE5Ny02LjEzOWwwLjA0OS0wLjQ3OWMwLjIzNC0yLjMzOSwwLjQ3NS00LjY3OCwwLjY5OS03LjAxOSBjMC4zMjYtMy40MDEsMS4wMDgtNi43NjUsMS41OTQtMTAuMTI5YzAuNTk0LTIuMzQ0LDEuMTI3LTQuNzE0LDEuNzk1LTcuMDM3YzAuNjU4LTEuOSwxLjMxMS0zLjgwNSwxLjk1OS01LjcwOCBjMC4xOTUtMC40NCwwLjM5NS0wLjg4MiwwLjU5Mi0xLjMyNHY1LjEwOWwwLjA4OCw1LjEyNWwtMTIuNDU5LDU2LjAzN2MtMC41MjksMi43MSwxLjYwOSw1LjMwOSw0LjM2OSw1LjMwOWg5LjM2OUwzNzcsNDA0LjM1OSBjMC4yMjcsNC4xMzIsMy43MTksNy41MDksNy44NTksNy41NjVjNC4yNDIsMC4wNiw3Ljg3My0zLjM1OCw4LjA3OC03LjU5NGwyLjQwMi00OS42NTdoMS4wNjJsMi41NzIsNDkuNjg2IGMwLjIyOSw0LjEzMSwzLjcyMSw3LjUwOSw3Ljg2Myw3LjU2NWM0LjI0LDAuMDYsNy44NzEtMy4zNTgsOC4wNzYtNy41OTRsMi40MDItNDkuNjU3aDkuNDY5YzIuNzczLDAsNC44OTMtMi42MDQsNC4zNjMtNS4zMjEgbC0xMi4zMTQtNTYuMzM0bDAuMTIzLTUuNjY4di0xNC40OTdjNC45MDIsMi4xMjQsOS44OTUsMy43MjYsMTUuMTcyLDQuNTgyYzguNjA5LDAuNzA0LDEyLjA3Ni0xLjUxNiwxMi4wNzYtMS41MTYgYzEuNzczLTAuODUzLDMuNDU5LTIuMDQ4LDQuNzI3LTMuNTY2YzAuODc1LTAuOTIxLDEuMjg3LTEuNzE3LDEuNjM3LTIuMjQ5YzAuMzItMC41MzgsMC40OTItMC44MjUsMC40OTItMC44MjUgYzIuOTEtNC45NzMtMi4zNTctMTAuOTQzLTcuNjI3LTguNjMzbC0wLjg3NSwwLjQ3MWwwLjA0My0wLjQ0N2MwLjg4Ny02LjI3MSwyLjA1MS0xMi42NDIsNC4wNTUtMTguNjU2IGMxLjUzNy00LjYxMiwzLjk5OC04LjkzNCw2LjAwNi0xMy4zNTNjMi40NjEtNS40MTEsNC43NjItMTAuOTAyLDYuNjQ2LTE2LjU0MWMyLjI0NC02LjcxNywzLjkyMi0xMy42ODMsNC4zNTItMjAuNzcxaDIuMTI1IGMxLjI0NCwwLDIuMDY0LTEuMzczLDEuNDc1LTIuNDY4bC0xLjIzOC0yLjMwOWM2LjM3MS01LjQ0LDEyLjM3My0xMi4xMzYsMTUuMjY4LTIwLjEyNiBDNDg2LjE5OSwxNTguNDI0LDQ4NC45NDMsMTQ5LjEzNiw0NzkuODczLDE0Mi4yMjZDNDc3LjA3MiwxMzguNDAzLDQ4Mi45ODIsMTQ2LjQ2NCw0NzkuODczLDE0Mi4yMjZ6Ii8+IDwvZz4gPC9nPiA8L2c+Cg08L3N2Zz4=" />
                                            </defs>
                                            <style>
                                            </style>
                                            <use id="tv-svgrepo-com (6)" href="#img1"
                                                transform="matrix(.31,0,0,.31,0,0)" />
                                            <use id="family-with-balloons-svgrepo-com" href="#img2"
                                                transform="matrix(.065,0,0,.065,99,87)" />
                                        </svg>
                        <div class="price__package-item">
                            <ul>
                                                <li>
                                                    <svg fill="#fff" viewBox="0 0 32 32" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg">

                                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                            stroke-linejoin="round" />

                                                        <g id="SVGRepo_iconCarrier">
                                                            <title>tv</title>
                                                            <path
                                                                d="M26 26.75h-20c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h20c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM28 2.75h-24c-1.794 0.002-3.248 1.456-3.25 3.25v16c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-16c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM28.75 22c-0 0.414-0.336 0.75-0.75 0.75h-24c-0.414-0-0.75-0.336-0.75-0.75v-16c0.001-0.414 0.336-0.749 0.75-0.75h24c0.414 0 0.75 0.336 0.75 0.75v0z" />
                                                        </g>

                                                    </svg>
                                                    <p><strong>Для всеx видов ТВ</strong><br>35 каналов<br></p>
                                                </li>
                                            </ul>

                        </div>
                    </div>
                    <div class="modal__pay">
                        <hr>
                        <div class="price__pay price__pay--TV">
                            <p>Ежемесячный платеж</p>
                            <p class="tariffs__connect--bigText">${document.querySelectorAll("[data-payModal]")[0].textContent}</p>
                        </div>
                    </div>

                    <!-- <button id="modal__button-connect" class="tariffs__connect-button">Подключить</button> -->
                    <!-- <a href="">Или заказать консультацию специалиста</a> -->
                </div>
                <div class="modal__form-inner ">
                    <!-- Имя -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="text" id="nameModal" name="name" required
                            minlength="2" maxlength="50" pattern="^[А-Яа-яЁё\s]+$" placeholder="Введите ваше имя">
                    </fieldset>

                    <!-- Телефон -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="tel" id="phoneModal" name="phone">
                    </fieldset>
                    <fieldset class="form__item-wrapper modal--widht">
                        <fieldset class="form__select modal--widht form__item">


                            <!--  -->
                            <!-- <select class="street" name="" id="">
                                <option value="1">Махновича</option>
                                <option value="2">Рябцева</option>
                                <option value="3">Суворова</option>
                            </select> -->

                            <div class="form__select__title" data-default="Option 0">
                                <span class="form__select__title-span modal--widht">Героев обороны</span>
                                <span class="form__select__title-arrow"></span>
                            </div>
                            <div class="form__select__content">
                                <input id="singleSelect01" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect01" class="form__select__label">Махновича</label>
                                <input id="singleSelect11" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect11" class="form__select__label">Рябцева</label>
                                <input id="singleSelect21" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect21" class="form__select__label">Суворова</label>
                                <input id="singleSelect31" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect31" class="form__select__label">Героев обороны</label>
                            </div>

                        </fieldset>
                    </fieldset>
                    <div class="modal__form-item">
                        <!-- Номер дома -->

                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Дом" name="home" class="form__item modal--widht" type="text">
                        </fieldset>

                        <!-- Квартира -->
                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Квартира" name="appart" class="form__item modal--widht" type="text">

                        </fieldset>
                    </div>
                    <!-- Выбор улицы -->
                    <div class="modal__area-wrap">
                        <p>Примечание</p>
                        <textarea
                            placeholder="(опишите здесь любые нюансы, которые вы хотели бы учесть при подключении)"
                            class="modal__area" name="x" id="x" rows="5"></textarea>
                    </div>

                    <div class="check modal__check">
                        <input type="checkbox" name="check-policy" id="check-policy-modal">
                        <label for="check-policy">Я ознакомлен(а) с <a href="#">Политикой</a> и согласен(а) на обработку
                            персональных данных.</label>

                    </div>

                    <button class="button button--border" type="submit">Подключить</button>
                </div>
            </form>
        </div>`;
                    IMask(document.getElementById('phoneModal'), maskOptions);

                    break;
                case "privModalTV":

                    modal.innerHTML = `<div class="modal__connectTV">
            <section class="modal__title modal__title--color">
                <h2>ОТПРАВИТЬ ЗАЯВКУ</h2>
                <div class="modal__close-wrap" onclick="closeModalTV()">
                    <div class="modal__close"><span></span><span></span></div>
                </div>
            </section>

            <form action="#" class="modal__form modal__form--TV">
                <div class="tariffs__connect tariffs__connect--widht">
                    <div class="modal__TV-title">
                        <p class="tariffs__connect--bigText modal__value-tariffs">Пакет 18+</p>
                         <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
                                            <title>Новый проект</title>
                                            <defs>
                                                <image width="806" height="806" id="img12"
                                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCA1Ny42MCA1Ny42MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj4KDTxyZWN0IHg9Ii00LjgiIHk9Ii00LjgiIHdpZHRoPSI1Ny42MCIgaGVpZ2h0PSI1Ny42MCIgcng9IjI4LjgiIGZpbGw9IiMwMGFiZmUiIHN0cm9rZXdpZHRoPSIwIi8+Cg08L2c+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPGcgaWQ9InR2Ij4gPGcgaWQ9InR2XzIiPiA8cGF0aCBpZD0iQ29tYmluZWQgU2hhcGUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMDAwOCAzNC4wMDA2SDI5Ljk2NDhDMjkuNDEyNSAzNC4wMDA2IDI4Ljk2NDggMzMuNTUyOSAyOC45NjQ4IDMzLjAwMDZDMjguOTY0OCAzMi40NDgzIDI5LjQxMjUgMzIuMDAwNiAyOS45NjQ4IDMyLjAwMDZINDEuMDAwOEM0MS41NTI1IDMyLjAwMDYgNDIuMDAwOCAzMS41NTIzIDQyLjAwMDggMzEuMDAwNlYxMS4wMDA2QzQyLjAwMDggMTAuNDQ3NyA0MS41NTM0IDEwLjAwMDYgNDEuMDAwOCAxMC4wMDA2SDcuMDAwNzlDNi40NDcwOCAxMC4wMDA2IDYuMDAwNzkgMTAuNDQ2OSA2LjAwMDc5IDExLjAwMDZWMzEuMDAwNkM2LjAwMDc5IDMxLjU1MzIgNi40NDc5MiAzMi4wMDA2IDcuMDAwNzkgMzIuMDAwNkgyMS44NjI3QzIxLjkwMzggMzEuOTk1NSAyMS45NDU3IDMxLjk5MjggMjEuOTg4MiAzMS45OTI4QzIyLjAzMDcgMzEuOTkyOCAyMi4wNzI2IDMxLjk5NTUgMjIuMTEzNyAzMi4wMDA2SDI1LjkzODhDMjUuOTgzIDMyLjAwMDYgMjYuMDI2NiAzMi4wMDM1IDI2LjA2OTMgMzIuMDA5MUMyNi41ODM3IDMyLjA1MDQgMjYuOTg4MiAzMi40ODA4IDI2Ljk4ODIgMzMuMDA1OFYzNy45OTg2SDMzQzMzLjU1MjMgMzcuOTk4NiAzNCAzOC40NDYzIDM0IDM4Ljk5ODZDMzQgMzkuNTUwOSAzMy41NTIzIDM5Ljk5ODYgMzMgMzkuOTk4NkgxNUMxNC40NDc3IDM5Ljk5ODYgMTQgMzkuNTUwOSAxNCAzOC45OTg2QzE0IDM4LjQ0NjMgMTQuNDQ3NyAzNy45OTg2IDE1IDM3Ljk5ODZIMjAuOTg4MlYzNC4wMDA2SDcuMDAwNzlDNS4zNDMwNCAzNC4wMDA2IDQuMDAwNzkgMzIuNjU3NCA0LjAwMDc5IDMxLjAwMDZWMTEuMDAwNkM0LjAwMDc5IDkuMzQyMzMgNS4zNDI1MSA4LjAwMDYxIDcuMDAwNzkgOC4wMDA2MUg0MS4wMDA4QzQyLjY1NzYgOC4wMDA2MSA0NC4wMDA4IDkuMzQyODYgNDQuMDAwOCAxMS4wMDA2VjMxLjAwMDZDNDQuMDAwOCAzMi42NTY5IDQyLjY1NzEgMzQuMDAwNiA0MS4wMDA4IDM0LjAwMDZaTTI0Ljk4ODIgMzcuOTk4NlYzNC4wMDA2SDIyLjk4ODJWMzcuOTk4NkgyNC45ODgyWiIgZmlsbD0iI2Y1ZjVmNSIvPiA8L2c+IDwvZz4gPC9nPgoNPC9zdmc+" />
                                                <image width="800" height="800" id="img22"
                                                    href="data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBmaWxsPSIjZmZmZmZmIiB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHN0cm9rZT0iI2ZmZmZmZiI+Cg08ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCIvPgoNPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cg08ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+Cg08cGF0aCBkPSJNMTgsNWgxVjZhMSwxLDAsMCwwLDIsMFY1aDFhMSwxLDAsMCwwLDAtMkgyMVYyYTEsMSwwLDAsMC0yLDBWM0gxOGExLDEsMCwwLDAsMCwyWk03LDdWMTdhMSwxLDAsMCwwLDIsMFY3QTEsMSwwLDAsMCw3LDdaTTIxLjYsOWExLDEsMCwwLDAtLjc4LDEuMTgsOSw5LDAsMSwxLTctNywxLDEsMCwxLDAsLjQtMkExMC44LDEwLjgsMCwwLDAsMTIsMSwxMSwxMSwwLDEsMCwyMywxMmExMC44LDEwLjgsMCwwLDAtLjIyLTIuMkExLDEsMCwwLDAsMjEuNiw5Wk0xMSw5djFhMywzLDAsMCwwLC43OCwyQTMsMywwLDAsMCwxMSwxNHYxYTMsMywwLDAsMCwzLDNoMWEzLDMsMCwwLDAsMy0zVjE0YTMsMywwLDAsMC0uNzgtMkEzLDMsMCwwLDAsMTgsMTBWOWEzLDMsMCwwLDAtMy0zSDE0QTMsMywwLDAsMCwxMSw5Wm01LDZhMSwxLDAsMCwxLTEsMUgxNGExLDEsMCwwLDEtMS0xVjE0YTEsMSwwLDAsMSwxLTFoMWExLDEsMCwwLDEsMSwxWm0wLTZ2MWExLDEsMCwwLDEtMSwxSDE0YTEsMSwwLDAsMS0xLTFWOWExLDEsMCwwLDEsMS0xaDFBMSwxLDAsMCwxLDE2LDlaIi8+Cg08L2c+Cg08L3N2Zz4=" />
                                            </defs>
                                            <style>
                                            </style>
                                            <use id="tv-svgrepo-com (6)" href="#img12"
                                                transform="matrix(.31,0,0,.31,0,0)" />
                                            <use id="18-plus-svgrepo-com (1)" href="#img22"
                                                transform="matrix(.068,0,0,.068,98,86)" />
                                        </svg>
                        <div class="price__package-item">
                         <ul>
                                                <li>
                                                    <svg fill="#fff" viewBox="0 0 32 32" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg">

                                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                            stroke-linejoin="round" />

                                                        <g id="SVGRepo_iconCarrier">
                                                            <title>tv</title>
                                                            <path
                                                                d="M26 26.75h-20c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h20c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM28 2.75h-24c-1.794 0.002-3.248 1.456-3.25 3.25v16c0.002 1.794 1.456 3.248 3.25 3.25h24c1.794-0.001 3.249-1.456 3.25-3.25v-16c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM28.75 22c-0 0.414-0.336 0.75-0.75 0.75h-24c-0.414-0-0.75-0.336-0.75-0.75v-16c0.001-0.414 0.336-0.749 0.75-0.75h24c0.414 0 0.75 0.336 0.75 0.75v0z" />
                                                        </g>

                                                    </svg>
                                                    <p><strong>Для всеx видов ТВ</strong><br>3 канала<br></p>
                                                </li>
                                            </ul>

                        </div>
                    </div>
                    <div class="modal__pay">
                        <hr>
                        <div class="price__pay price__pay--TV">
                            <p>Ежемесячный платеж</p>
                            <p class="tariffs__connect--bigText">${document.querySelectorAll("[data-payModal]")[1].textContent}</p>
                        </div>
                    </div>

                    <!-- <button id="modal__button-connect" class="tariffs__connect-button">Подключить</button> -->
                    <!-- <a href="">Или заказать консультацию специалиста</a> -->
                </div>
                <div class="modal__form-inner ">
                    <!-- Имя -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="text" id="nameModal" name="name" required
                            minlength="2" maxlength="50" pattern="^[А-Яа-яЁё\s]+$" placeholder="Введите ваше имя">
                    </fieldset>

                    <!-- Телефон -->
                    <fieldset class="form__item-wrapper modal--widht">
                        <input class="form__item modal--widht" type="tel" id="phoneModal" name="phone">
                    </fieldset>
                    <fieldset class="form__item-wrapper modal--widht">
                        <fieldset class="form__select modal--widht form__item">


                            <!--  -->
                            <!-- <select class="street" name="" id="">
                                <option value="1">Махновича</option>
                                <option value="2">Рябцева</option>
                                <option value="3">Суворова</option>
                            </select> -->

                            <div class="form__select__title" data-default="Option 0">
                                <span class="form__select__title-span modal--widht">Героев обороны</span>
                                <span class="form__select__title-arrow"></span>
                            </div>
                            <div class="form__select__content">
                                <input id="singleSelect01" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect01" class="form__select__label">Махновича</label>
                                <input id="singleSelect11" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect11" class="form__select__label">Рябцева</label>
                                <input id="singleSelect21" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect21" class="form__select__label">Суворова</label>
                                <input id="singleSelect31" class="form__select__input" type="radio" name="singleSelect">
                                <label for="singleSelect31" class="form__select__label">Героев обороны</label>
                            </div>

                        </fieldset>
                    </fieldset>
                    <div class="modal__form-item">
                        <!-- Номер дома -->

                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Дом" name="home" class="form__item modal--widht" type="text">
                        </fieldset>

                        <!-- Квартира -->
                        <fieldset class="form__item-wrapper modal--widht">
                            <input placeholder="Квартира" name="appart" class="form__item modal--widht" type="text">

                        </fieldset>
                    </div>
                    <!-- Выбор улицы -->
                    <div class="modal__area-wrap">
                        <p>Примечание</p>
                        <textarea
                            placeholder="(опишите здесь любые нюансы, которые вы хотели бы учесть при подключении)"
                            class="modal__area" name="x" id="x" rows="5"></textarea>
                    </div>

                    <div class="check modal__check">
                        <input type="checkbox" name="check-policy" id="check-policy-modal">
                        <label for="check-policy">Я ознакомлен(а) с <a href="#">Политикой</a> и согласен(а) на обработку
                            персональных данных.</label>

                    </div>

                    <button class="button button--border" type="submit">Подключить</button>
                </div>
            </form>
        </div>`;
                    IMask(document.getElementById('phoneModal'), maskOptions);

                    break;

                default:
                    break;
            }

            modal.showModal();
            document.body.classList.add('lock');

            modal.style = "opacity: 1";

        })

    });

    document.addEventListener('keydown', (e) => {

        if (e.code == 'Escape') closeModalTV();

    })


    modal.addEventListener('click', (e) => {
        const modal = e.currentTarget;
        const clickBackDrop = e.target === modal;
        document.body.classList.remove('lock')

        if (clickBackDrop) closeModalTV();
    })
}



modalOpen(document.querySelectorAll('.list-channel'), document.querySelectorAll('.price__package-wrap')[0].querySelectorAll('.button'))


// Закрытие модалки


function closeModalTV(params) {
    modal.close();
    document.body.classList.remove('lock')
    modal.style = "opacity: 0 "
}










function modalButtons(params) {

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
            ModalList(e.currentTarget.id)
            console.log(e.currentTarget.id);

        })

    });

}


function SelectTown(params) {
    const selectSingle = document.querySelectorAll('.form__select');
    const selectSingle_title = document.querySelector('.form__select__title-span');
    const selectSingle_labels = document.querySelectorAll('.form__select__label');
    const selectSingle_input = document.getElementsByClassName('form__select__input');


    // Toggle menu
    selectSingle.forEach(element => {


        element.addEventListener('click', () => {


            const selectSingle_content = element.querySelector('.form__select__content')

            if (selectSingle_content.style.display == 'flex') {
                selectSingle_content.style.display = 'none'
            } else {
                selectSingle_content.style.display = 'flex'
            }

            if ('active' === element.getAttribute('data-state')) {
                element.setAttribute('data-state', '');

            } else {
                element.setAttribute('data-state', 'active');
            }
        });





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

}
