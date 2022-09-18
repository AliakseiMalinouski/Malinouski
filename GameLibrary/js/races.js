"use strict";
// создаём элементы
let wrapperGame = document.createElement('div');
wrapperGame.classList.add('wrapper');
document.body.appendChild(wrapperGame);
let backgroundGame = document.createElement('img');
backgroundGame.setAttribute('src', './imgs/foneR.png');
backgroundGame.setAttribute('alt', 'Road');
backgroundGame.classList.add('background__size');
console.log(backgroundGame)
let gameZone = document.createElement('div');
gameZone.classList.add('game__zone');
wrapperGame.appendChild(gameZone);
gameZone.appendChild(backgroundGame)
let auto = document.createElement('div');
auto.classList.add('auto');
gameZone.appendChild(auto);
// подписываемся на keydown
document.addEventListener('keydown', moveAutoToLeft);
let distance = 200;
function moveAutoToLeft(EO) {
    EO = EO || window.event;
    if (EO.code == 'ArrowLeft') {
        let autoOffsetLeft = auto.offsetLeft;
        distance = distance - 5;
        auto.style.left = distance + 'px';
        auto.style.transform = 'rotate(-15deg)';
        console.log(autoOffsetLeft)
        if (autoOffsetLeft == '55') {
            alert('GAME OVER');
            location.reload();
        }
    }
}
document.addEventListener('keydown', moveAutoToRight);
function moveAutoToRight(EO) {
    EO = EO || window.event;
    if (EO.code == 'ArrowRight') {
        let autoOffsetLeft = auto.offsetLeft;
        distance = distance + 5;
        auto.style.left = distance + 'px';
        auto.style.transform = 'rotate(15deg)';
        console.log(autoOffsetLeft)
        if (autoOffsetLeft == '355') {
            alert('GAME OVER');
            location.reload();
        }
    }
}
document.addEventListener('keyup', returnNormalTransformAuto);
function returnNormalTransformAuto(EO) {
    EO = EO || window.event;
    auto.style.transform = '';
}
function drawRoad() {
    let offsetTopBackgroundImage = backgroundGame.offsetTop;
    offsetTopBackgroundImage = offsetTopBackgroundImage + 2;
    backgroundGame.style.top = offsetTopBackgroundImage + 'px';
    setTimeout(drawRoad, 0);
    if (offsetTopBackgroundImage > 0) {
        backgroundGame.style.top = '-600px';
    }
}
drawRoad();


