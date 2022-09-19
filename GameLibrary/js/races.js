"use strict";
// создаём элементы
let wrapperGame = document.createElement('div');
wrapperGame.classList.add('wrapper');
document.body.appendChild(wrapperGame);
let backgroundGame = document.createElement('img');
backgroundGame.setAttribute('src', './imgs/newRoad.jpg');
backgroundGame.setAttribute('alt', 'Road');
backgroundGame.classList.add('background__size');
let gameZone = document.createElement('div');
gameZone.classList.add('game__zone');
wrapperGame.appendChild(gameZone);
gameZone.appendChild(backgroundGame)
let auto = document.createElement('div');
auto.classList.add('auto');
gameZone.appendChild(auto);
// подписываемся на keydown для управления машинкой
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
        if (autoOffsetLeft == '355') {
            alert('GAME OVER');
            location.reload();
        }
    }
}
// подписываем на keuup
document.addEventListener('keyup', returnNormalTransformAuto);
function returnNormalTransformAuto(EO) {
    EO = EO || window.event;
    auto.style.transform = '';
}
// рисуем дорогу
function drawRoad() {
    let offsetTopBackgroundImage = backgroundGame.offsetTop;
    offsetTopBackgroundImage = offsetTopBackgroundImage + 0.5;
    backgroundGame.style.top = offsetTopBackgroundImage + 'px';
    setTimeout(drawRoad, 0);
    if (offsetTopBackgroundImage >= 0) {
        backgroundGame.style.top = '-1000px';
    }
}
drawRoad();
// создём случайную встречную машинку
let randomCar0 = document.createElement('div');
randomCar0.classList.add('random__car_1');
gameZone.appendChild(randomCar0);
// 80-320
let result;
// получаем случайно число от 80 до 320 (предел появления машинка по left)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}
// ставим машинку в случайные места
function changeTopRandomCar() {
    let randomCarTop = randomCar0.offsetTop;
    randomCarTop = randomCarTop + 1;
    randomCar0.style.top = randomCarTop + 'px';
    setTimeout(changeTopRandomCar, 0);
    if (randomCarTop >= 580) {
        randomCar0.style.top = '-90px';
        function changePositionRandomCars(carNumber) {
        getRandomInt(90, 320);
        carNumber.style.left = result + 'px';
    }
    changePositionRandomCars(randomCar0);
    }
}
changeTopRandomCar();
// проверка столкновений
window.addEventListener('load', function (EO) {
    EO = EO || window.event;
    let box1 = auto;
    let box2 = randomCar0;
    function rect2Rect(obj1, obj2) {
       return ( obj1.offsetLeft - 40 <= obj2.offsetLeft - 50 + obj2.offsetWidth - 50 && obj1.offsetLeft - 50 + obj1.offsetWidth - 50  >=  obj2.offsetLeft - 40 && obj1.offsetTop + obj1.offsetHeight - 50 >=  obj2.offsetTop && obj1.offsetTop <= obj2.offsetTop +  obj2.offsetHeight - 30 );
    }
     function move() {
       if(!rect2Rect(box1, box2)) {
         setTimeout(function() {
           move();
         }, 50);
       }
       else{
           alert("Столкновение");
           location.reload()
       }
    }
    move();
})
