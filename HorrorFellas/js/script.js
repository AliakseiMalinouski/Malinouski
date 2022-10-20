"use strict"
let nextButtonSlider = document.querySelector('.Next');
let previousButtonSlider = document.querySelector('.Previous');
let WrapperSlides = document.querySelector('.WrapperSlides');
let distance = 0;
nextButtonSlider.addEventListener('click', function (EO) {
    EO = EO || window.event;
    distance = distance + 1140;
    if (distance >= 2280) {
        distance = 0;
    }
    WrapperSlides.style.left = -distance + 'px';
    nextButtonSlider.classList.add('focus');
    blood.createBlood();
    setTimeout(function () {
        nextButtonSlider.classList.remove('focus');
    }, 500);
});
previousButtonSlider.addEventListener('click', function (EO) {
    EO = EO || window.event;
    distance = distance - 1140;
    if (distance < 0) {
        distance = 1140;
    }
    WrapperSlides.style.left = -distance + 'px';
    previousButtonSlider.classList.add('focus');
    setTimeout(function () {
        previousButtonSlider.classList.remove('focus');
    }, 500);
    if (nextButtonSlider.classList !== 'focus') {
        blood.destroyBlood();
    }
});
class Blood  {
    constructor() {
        this.blood = document.createElement('img');
        this.wrapperButtons = document.querySelector('.WrapperButtons');
    }
    createBlood() {
        this.blood.setAttribute('src', './img/blood.png');
        this.blood.classList.add('blood');
        this.blood.classList.remove('disable');
        this.wrapperButtons.appendChild(this.blood);
    }
    destroyBlood() {
        this.blood.classList.add('disable');
    }
}
let blood = new Blood();
