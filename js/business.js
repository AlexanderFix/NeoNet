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