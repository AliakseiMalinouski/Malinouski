"use strict"
let gameZone = document.getElementById('wrapper-game');
const gameZoneWidth = 500;
const gameZoneHeigth = 250;
let start = document.getElementById('start');
let rocketRight = document.getElementById('rocket-right');
let rocketLeft = document.getElementById('rocket-left');
document.addEventListener('keydown', moveRocketLeft);
let counterRocketLeftTop = 25;
let counterRocketLeftMinusTop = 0;
let scorePlayerOne = document.getElementById('player1');
let scorePlayerTwo = document.getElementById('player2');
scorePlayerOne.innerHTML = 0;
scorePlayerTwo.innerHTML = 0;
function moveRocketLeft(EO) {
    EO = EO || window.event;
    let rocketLeftMaxTop = parseInt(getComputedStyle(rocketLeft).getPropertyValue('top'));
    if (EO.code == 'ControlLeft') {
        counterRocketLeftTop = rocketLeftMaxTop;
        counterRocketLeftTop += 5;
        rocketLeft.style.top = counterRocketLeftTop + 'px';
    }
    if (rocketLeftMaxTop > 170) {
        rocketLeft.style.top = '170px';
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
let ballH={
        posX : 230,
        posY : 110,
        speedX : 2,
        speedY : 1,
        width : 30,
        height: 30,

        update : function() {
            const ballElem=document.getElementById('ball');
            ballElem.style.left=this.posX+"px";
            ballElem.style.top=this.posY+"px";
        }
    }

    let areaH={
        width : 500,
        height : 250,
    }
    start.addEventListener('click', startMoveBall);
    function startMoveBall() {
        // плавное движение - от 25 кадр/сек
        setInterval(tick,40);
    }

    function tick() {

        ballH.posX+=ballH.speedX;
        // вылетел ли мяч правее стены?
        if ( ballH.posX+ballH.width>areaH.width ) {
            ballH.speedX=-ballH.speedX;
            ballH.posX = areaH.width - ballH.width;
        }
        // вылетел ли мяч левее стены?
        if ( ballH.posX<0 ) {
            ballH.speedX=-ballH.speedX;
            ballH.posX = 0;
        }

        ballH.posY+=ballH.speedY;
        // вылетел ли мяч ниже пола?
        if ( ballH.posY+ballH.height>areaH.height ) {
            ballH.speedY=-ballH.speedY;
            ballH.posY=areaH.height-ballH.height;
        }
        // вылетел ли мяч выше потолка?
        if ( ballH.posY<0 ) {
            ballH.speedY=-ballH.speedY;
            ballH.posY=0;
        }
        ballH.update();
    }
    ballH.update();