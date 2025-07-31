
// const buttonChange = document.querySelectorAll('.button__change-item');


// buttonChange.forEach(element => {

//     element.addEventListener('click', (e) => {

//         const tariffsForm = document.querySelector('.tariffs__calc-wrap');
//         console.log(e.target.id);


//         const button = e.target.id

//         if (button === "social-int") {
//             document.querySelector('.tariffs__calc').style = `left: -${window.innerWidth}px`;
//             document.querySelector('.tariffs__connect').style = `left: ${window.innerWidth}px`;
//             setTimeout(() => {
//                 tariffsForm.innerHTML = `

//                                 <!-- Итоговая информация -->
//                                 <div class="tariffs__connect radius boxshadow" style="left: ${window.innerWidth}px;">
//                                     <p class="tariffs__connect--bigText value-tariffs">Тариф 50 Мбит/с</p>
//                                     <p class="tariffs__connect--mobile">Рекомендуется для нескольких пользователей,
//                                         просмотра
//                                         видео
//                                         и онлайн игр.</p>
//                                     <ul class="tariffs__connect-list">
//                                         <li>
//                                             <img src="img/icons/wifi-int.png" alt="">
//                                             <p class="value-tariffs">Интернет 50 Мбит/с</p>
//                                             <p id="rout"></p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/smart-tv_tar.png" alt="">
//                                             <p id="tv">Без ТВ</p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/wifi_tar.png" alt="">
//                                             <p id="box">Без приставки</p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/video_10402668.png" alt="">
//                                             <p id="movie">Онлайн кинотеатр</p>
//                                         </li>
//                                     </ul>
//                                     <p id="final-price" class="tariffs__connect--bigText">21,70р./ месяц</p>
//                                     <button id="button-connect" class="tariffs__connect-button"
//                                         data-modal>Подключить</button>
//                                     <p class="support__button" id="support__button" data-modal>Или заказать консультацию
//                                         специалиста</p>
//                                 </div>

// `;
//                 // document.querySelector('.tariffs__connect').style = `left: ${window.innerWidth}px`;


//             }, 300);
//             setTimeout(() => {
//                 document.querySelector('.tariffs__connect').style = `left: 0px`;
//             }, 400)

//         } else if (button === "base-int") {

//             document.querySelector('.tariffs__connect').style = `left: -${window.innerWidth}px`;

//             setTimeout(() => {
//                 tariffsForm.innerHTML = `
//                                 <section class="tariffs__calc" style="left: -${window.innerWidth}px;">
//                                     <h2>Соберите удобный тариф</h2>

//                                     <!-- слайдер интернета -->
//                                     <div class="tariffs__calc-slider">
//                                         <p>Скорость интернет (Мбит/с)</p>
//                                         <div class="slider-wrap">
//                                             <div class="slider-fill" id="internet-fill"></div>
//                                             <input type="range" id="slider-internet" value="33.33" max="100"
//                                                 step="33.33">
//                                             <div id="select-internet" style="left: 33.33%"></div>

//                                         </div>
//                                         <div class="slider__value slider__value-inet">
//                                             <span>Без интернета</span>
//                                             <span>50</span>
//                                             <span>100</span>
//                                             <span>250</span>
//                                         </div>
//                                     </div>

//                                     <!-- слайдер роутера -->
//                                     <div class="tariffs__calc-slider">
//                                         <p>Роутер</p>
//                                         <div class="slider-wrap">
//                                             <div class="slider-fill" id="rout-fill"></div>
//                                             <input type="range" id="slider-rout" value="0" max="100" step="50">
//                                             <div id="select-rout"></div>
//                                         </div>
//                                         <div class="slider__value slider__value-rout">
//                                             <span>Без роутера</span>
//                                             <span>Роутер 2.4 ГГц</span>
//                                             <span>Роутер 5 ГГц</span>
//                                         </div>
//                                     </div>
//                                     <div class="tariffs__calc-slider">
//                                         <p>Кабельное ТВ</p>
//                                         <div class="slider-wrap">
//                                             <div class="slider-fill" id="tv-fill"></div>
//                                             <input type="range" id="slider-tv" value="0" max="100" step="50">
//                                             <div id="select-tv"></div>
//                                         </div>
//                                         <div class="slider__value slider__value-tv">
//                                             <span>Без ТВ</span>
//                                             <span>12 Каналов</span>
//                                             <span>105 каналов</span>
//                                         </div>
//                                     </div>


//                                     <!-- Выбор ТВ -->
//                                     <div class="tariffs__calc-toggle">
//                                         <label class="toggle">
//                                             <input type="checkbox" id="tvInteractive">
//                                             <span class="toggle-label"></span> Интерактивное ТВ
//                                         </label>

//                                         <!-- Выбор приставки -->
//                                         <label class="toggle">
//                                             <input type="checkbox" id="tvFullHD" name="tvBox">
//                                             <span class="toggle-label"></span> ТВ-приставка FULL HD
//                                         </label>
//                                         <label class="toggle">
//                                             <input type="checkbox" id="tv4k" name="tvBox">
//                                             <span class="toggle-label"></span> ТВ-приставка 4K
//                                         </label>
//                                     </div>
//                                 </section>

//                                 <!-- Итоговая информация -->
//                                 <div class="tariffs__connect radius boxshadow" style="left: ${window.innerWidth}px;">
//                                     <p class="tariffs__connect--bigText value-tariffs">Тариф 50 Мбит/с</p>
//                                     <p class="tariffs__connect--mobile">Рекомендуется для нескольких пользователей,
//                                         просмотра
//                                         видео
//                                         и онлайн игр.</p>
//                                     <ul class="tariffs__connect-list">
//                                         <li>
//                                             <img src="img/icons/wifi-int.png" alt="">
//                                             <p class="value-tariffs">Интернет 50 Мбит/с</p>
//                                             <p id="rout"></p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/smart-tv_tar.png" alt="">
//                                             <p id="tv">Без ТВ</p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/wifi_tar.png" alt="">
//                                             <p id="box">Без приставки</p>
//                                         </li>
//                                         <li>
//                                             <img src="img/icons/video_10402668.png" alt="">
//                                             <p id="movie">Онлайн кинотеатр</p>
//                                         </li>
//                                     </ul>
//                                     <p id="final-price" class="tariffs__connect--bigText">21,70р./ месяц</p>
//                                     <button id="button-connect" class="tariffs__connect-button"
//                                         data-modal>Подключить</button>
//                                     <p class="support__button" id="support__button" data-modal>Или заказать консультацию
//                                         специалиста</p>
//                                 </div>

// `
//             }, 300)


//             setTimeout(() => {
//                 document.querySelector('.tariffs__calc').style = `left: 0px`
//                 document.querySelector('.tariffs__connect').style = `left: 0px`;
//             }, 400)

//         }





//         buttonChange.forEach(element => {
//             element.removeAttribute('disabled')
//         });

        
//         e.target.setAttribute('disabled', '');
//     })

// });