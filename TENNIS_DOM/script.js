"use strict"
"use strict"
let gameZone = document.getElementById('wrapper-game');
let start = document.getElementById('start');
let rocketRight = document.getElementById('rocket-right');
let rocketLeft = document.getElementById('rocket-left');
let ball = document.getElementById('ball');
document.addEventListener('keydown', moveRocketLeft);
let counterRocketLeftTop = 25;
let counterRocketLeftMinusTop = 0;
function moveRocketLeft(EO) {
    EO = EO || window.event;
    let rocketLeftMaxTop = parseInt(getComputedStyle(rocketLeft).getPropertyValue('top'));
    if (EO.code == 'ControlLeft') {
        counterRocketLeftTop = rocketLeftMaxTop;
        counterRocketLeftTop += 5;
        rocketLeft.style.top = counterRocketLeftTop + 'px';
    }
    if (rocketLeftMaxTop > 170) {
        rocketLeft.style.top = '165px';
        counterRocketLeftTop = 25;
    }
    if (EO.code == 'ShiftLeft') {
        counterRocketLeftMinusTop = rocketLeftMaxTop;
        counterRocketLeftMinusTop -= 5;
        rocketLeft.style.top = counterRocketLeftMinusTop + 'px';
    }
    if (rocketLeftMaxTop == 0) {
        rocketLeft.style.top = '5px';
        counterRocketLeftTop = 25;
    }
}
