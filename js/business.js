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


// Модалка юр. тарифы

document.getElementById('legal').addEventListener('click', () => {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', `<dialog class="modal__wrap" id="modal" data-modal>
            <div class="modal__bussines">
                <section class="modal__title modal__title--color">
                    <h2>Заявка для юридических лиц</h2>
                    <div class="modal__close-wrap" onclick="closeModal()">
                        <div class="modal__close"><span></span><span></span></div>
                    </div>
                </section>
                <div class="formBussines__wrapper ">
                    <div class="title__price modal__title--colorBlue">
                        <p class="tariffs__business--bigText">Тариф 50 мб/с</p>
                        <p class="tariffs__business--bigText">20,70р. / месяц</p>
                        <div class="title__price-item">
                            <p class="tariffs__connect-time">00:00-18:00</p>
                            <p class="value-tariffs" id="night">
                                Скорость входящая: 50 Мбит/с / 100 Мбит/с исходящая
                            </p>
                        </div>
                        <div class="title__price-item">
                            <p class="tariffs__connect-time">18:00-00:00</p>
                            <p class="value-tariffs" id="night">
                                Скорость входящая: 10 Мбит/с / 100 Мбит/с исходящая
                            </p>
                        </div>
                    </div>
                    <form action="" class="business__form">

                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="text" id="organization"
                                name="organization" required minlength="2" maxlength="100"
                                placeholder="Полное наименование организации (ИП)">
                        </fieldset>
                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="text" id="legalAddress"
                                name="legalAddress" required minlength="2" maxlength="100"
                               placeholder="Юридический адрес">
                        </fieldset>
                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="text" id="serviceAddress"
                                name="serviceAddress" required minlength="2" maxlength="100"
                                 placeholder="Адрес оказания услуги">
                        </fieldset>
                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="text" id="postOrganization"
                                name="postOrganization" required minlength="2" maxlength="100"
                                 placeholder="Почтовый адрес">
                        </fieldset>
                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="number" id="unn" name="unn" required
                                minlength="2" maxlength="9" placeholder="УНН">
                        </fieldset>
                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="text" id="currentAccount"
                                name="currentAccount" required minlength="2" maxlength="100"
                                placeholder="Расчётный счёт">
                        </fieldset>
                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="text" id="bank" name="bank" required
                                minlength="2" maxlength="100" placeholder="Банк">
                        </fieldset>
                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="text" id="bik" name="bik" required
                                minlength="2" maxlength="100" placeholder="БИК">
                        </fieldset>
                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="tel" id="phone" name="phone" required
                                minlength="2" maxlength="100" placeholder="Контактный телефон (правильно укажите код)">
                        </fieldset>
                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="text" id="nameDirector"
                                name="nameDirector" required minlength="2" maxlength="50" 
                                placeholder="ФИО и должность руководителя">
                        </fieldset>
                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="text" id="act" name="act" required
                                minlength="2" maxlength="50" 
                                placeholder="Действует на основании">
                        </fieldset>
                        <fieldset class="form__item-wrapper modal--widht">
                            <input class="form__item business__form-inner" type="email" id="email" name="email" required
                                minlength="2" maxlength="50" placeholder="E-mail:">
                        </fieldset>
                        <div class="footer__form">
                            <div class="modal__area-wrap">
                                <p>Примечание</p>
                                <textarea
                                    placeholder="(опишите здесь любые нюансы, которые вы хотели бы учесть при подключении)"
                                    class="modal__area" name="x" id="x" rows="5"></textarea>
                            </div>

                            <button class="button" id="button-organization" type="submit">Отправить</button>
                        </div>

                    </form>
                </div>



            </div>

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

    document.getElementById('modal').addEventListener("submit", (event) => {

        event.preventDefault();

        closeModal();
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', `<div class="sent__form">
        <p>Форма успешно отправлена</p>

    </div>`)

        setTimeout(() => {
            document.getElementsByClassName('sent__form')[0].style = "opacity: 1"
        }, 100)
        setTimeout(() => {
            document.getElementsByClassName('sent__form')[0].style = "opacity: 0"
            document.getElementsByClassName('sent__form')[0].remove()
        }, 4000)

    })

})



// Закрытие модалки


function closeModal(params) {
    const modal = document.getElementById('modal')

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