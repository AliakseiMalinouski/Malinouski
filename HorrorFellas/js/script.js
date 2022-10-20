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
});
previousButtonSlider.addEventListener('click', function (EO) {
    EO = EO || window.event;
    distance = distance - 1140;
    if (distance < 0) {
        distance = 1140;
    }
    WrapperSlides.style.left = -distance + 'px';
});