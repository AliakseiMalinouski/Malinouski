"use strict"
let nextButtonSlider = document.querySelector('.Next');
let previousButtonSlider = document.querySelector('.Previous');
let WrapperSlides = document.querySelector('.WrapperSlides');
let WrapperButtons = document.querySelector('.WrapperButtons');
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
    nextButtonSlider.style.backgroundColor = '#CE0101';
    if (previousButtonSlider.classList !== 'focus') {
        blood.destroyBlood1();
        previousButtonSlider.style.backgroundColor = '#FD5252';
    }
});
previousButtonSlider.addEventListener('click', function (EO) {
    EO = EO || window.event;
    distance = distance - 1140;
    if (distance < 0) {
        distance = 1140;
    }
    WrapperSlides.style.left = -distance + 'px';
    previousButtonSlider.classList.add('focus');
    blood.createBlood1();
    setTimeout(function () {
        previousButtonSlider.classList.remove('focus');
    }, 500);
    previousButtonSlider.style.backgroundColor = '#CE0101';
    if (nextButtonSlider.classList !== 'focus') {
        blood.destroyBlood();
        nextButtonSlider.style.backgroundColor = '#FD5252';
    }
});
class Blood  {
    constructor() {
        this.blood = document.createElement('img');
        this.blood1 = document.createElement('img');
        this.wrapperButtons = document.querySelector('.WrapperButtons');
    }
    createBlood() {
        this.blood.setAttribute('src', './img/blood.png');
        this.blood.classList.add('blood');
        this.blood.classList.remove('disable');
        this.wrapperButtons.appendChild(this.blood);
    }
    createBlood1() {
        this.blood1.setAttribute('src', './img/blood1.png');
        this.blood1.classList.add('blood1');
        this.blood1.classList.remove('disable');
        this.wrapperButtons.appendChild(this.blood1);
    }
    destroyBlood() {
        this.blood.classList.add('disable');
    }
    destroyBlood1() {
        this.blood1.classList.add('disable');
    }
}
let blood = new Blood();
let firstParagraphOfQuestionsBlock = document.querySelector('.FirstParagraph');
let firstPlus = document.querySelector('.FirstPlus');
firstPlus.addEventListener('click', function (EO) {
    EO = EO || window.event;
    firstParagraphOfQuestionsBlock.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci provident, possimus sunt dolorum rerum mollitia iste velit culpa quae nostrum aspernatur qui harum placeat odio vero aliquid illo quidem!';
    firstParagraphOfQuestionsBlock.classList.add('FP');
    firstPlus.classList.add('disable');
});