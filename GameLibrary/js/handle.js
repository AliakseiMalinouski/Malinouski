// создаём необходимые для игры
let containerGame = document.createElement('div');
containerGame.classList.add('container');
document.body.appendChild(containerGame);
const areaGame = document.createElement('div');
areaGame.classList.add('area__game');
containerGame.appendChild(areaGame);
let firstEnemyAnimal = document.createElement('img');
firstEnemyAnimal.setAttribute('src', './imgs/animal1.png');
firstEnemyAnimal.classList.add('first__enemy__animal');
areaGame.appendChild(firstEnemyAnimal);
let secondEnemyAnimal = document.createElement('img');
secondEnemyAnimal.setAttribute('src', './imgs/animal2.png');
secondEnemyAnimal.classList.add('second__enemy__animal');
areaGame.appendChild(secondEnemyAnimal);
let thirdEnemyAnimal = document.createElement('img');
thirdEnemyAnimal.setAttribute('src', './imgs/animal3.png');
thirdEnemyAnimal.classList.add('third__enemy__animal');
areaGame.appendChild(thirdEnemyAnimal);
let fourthEnemyAnimal = document.createElement('img');
fourthEnemyAnimal.setAttribute('src', './imgs/animal4.png');
fourthEnemyAnimal.classList.add('fourth__enemy__animal');
areaGame.appendChild(fourthEnemyAnimal);
let fifthEnemyAnimal = document.createElement('img');
fifthEnemyAnimal.setAttribute('src', './imgs/animal5.png');
fifthEnemyAnimal.classList.add('fifth__enemy__animal');
areaGame.appendChild(fifthEnemyAnimal);
let sixthEnemyAnimal = document.createElement('img');
sixthEnemyAnimal.setAttribute('src', './imgs/animal6.png');
sixthEnemyAnimal.classList.add('sixth__enemy__animal');
areaGame.appendChild(sixthEnemyAnimal);
// добавляем score
let flag = false;
let scoreSpan = document.createElement('div');
let score = 0;
scoreSpan.innerHTML = score;
areaGame.appendChild(scoreSpan);
// добавляем звуки
let mouseDownOnAnimal = new Audio('./audio/handleClick.mp3');
// анимируем всех вражеских животных
// начальные позиции по оси y
let startTopPositionFirstEnemyAnimal1 = 380;
let startTopPositionFirstEnemyAnimal2 = 370;
let startTopPositionFirstEnemyAnimal3 = 440;
let startBottomPositionFourthEnemyAnimal = 10;
let startBottomPositionFifthEnemyAnimal = -40;
let startBottomPositionSixthEnemyAnimal = 0;
function animateFirstEnemyAnimal() {
    startTopPositionFirstEnemyAnimal1 = startTopPositionFirstEnemyAnimal1 - 0.2;
    firstEnemyAnimal.style.top = startTopPositionFirstEnemyAnimal1 + 'px';
    if (startTopPositionFirstEnemyAnimal1 < 285) {
        firstEnemyAnimal.style.display = 'block';
    }
    if (startTopPositionFirstEnemyAnimal1 <= 280) {
        firstEnemyAnimal.style.top = '280px';
        setTimeout(function () {
        startTopPositionFirstEnemyAnimal1 = 380;
        firstEnemyAnimal.style.display = 'none';
        }, 1000);
    }
    setTimeout(animateFirstEnemyAnimal, 0);
}
animateFirstEnemyAnimal();
// анимируем медведя
function animateSecondEnemyAnimal() {
    startTopPositionFirstEnemyAnimal2 = startTopPositionFirstEnemyAnimal2 - 0.5;
    secondEnemyAnimal.style.top = startTopPositionFirstEnemyAnimal2 + 'px';
    if (startTopPositionFirstEnemyAnimal2 < 265) {
        secondEnemyAnimal.style.display = 'block';
    }
    if (startTopPositionFirstEnemyAnimal2 <= 250) {
        secondEnemyAnimal.style.top = '250px';
        setTimeout(function () {
            startTopPositionFirstEnemyAnimal2 = 370;
            secondEnemyAnimal.style.display = 'none';
        }, 1000);
    }
    setTimeout(animateSecondEnemyAnimal, 0);
}
animateSecondEnemyAnimal();
function animateThirdEnemyAnimal() {
    startTopPositionFirstEnemyAnimal3 = startTopPositionFirstEnemyAnimal3 - 0.3;
    thirdEnemyAnimal.style.top = startTopPositionFirstEnemyAnimal3 + 'px';
    if (startTopPositionFirstEnemyAnimal3 < 320) {
        thirdEnemyAnimal.style.display = 'block';
    }
    if (startTopPositionFirstEnemyAnimal3 <= 300) {
        thirdEnemyAnimal.style.top = '300px';
        setTimeout(function () {
            startTopPositionFirstEnemyAnimal3 = 440;
            thirdEnemyAnimal.style.display = 'none'; 
        }, 1000);
    }
    setTimeout(animateThirdEnemyAnimal, 0);
}
animateThirdEnemyAnimal();
function animateFourthEnenmyAnimal() {
    startBottomPositionFourthEnemyAnimal = startBottomPositionFourthEnemyAnimal + 0.4;
    fourthEnemyAnimal.style.bottom = startBottomPositionFourthEnemyAnimal + 'px';
    if (startBottomPositionFourthEnemyAnimal > 100) {
        fourthEnemyAnimal.style.display = 'block';
    }
    if (startBottomPositionFourthEnemyAnimal >= 140) {
        fourthEnemyAnimal.style.bottom = '140px';
        setTimeout(function () {
            startBottomPositionFourthEnemyAnimal = 10;
            fourthEnemyAnimal.style.display = 'none';
        }, 1000);
    }
    setTimeout(animateFourthEnenmyAnimal, 0);
}
animateFourthEnenmyAnimal();
function animateFifthEnemyAnimal() {
    startBottomPositionFifthEnemyAnimal = startBottomPositionFifthEnemyAnimal + 0.3;
    fifthEnemyAnimal.style.bottom = startBottomPositionFifthEnemyAnimal + 'px';
    if (startBottomPositionFifthEnemyAnimal > 80) {
        fifthEnemyAnimal.style.display = 'block';
    }
    if (startBottomPositionFifthEnemyAnimal >= 100) {
        fifthEnemyAnimal.style.bottom = '100px';
        setTimeout(function () {
            startBottomPositionFifthEnemyAnimal = -40;
            fifthEnemyAnimal.style.display = 'none'; 
        }, 1000);
    }
    setTimeout(animateFifthEnemyAnimal, 0);
}
animateFifthEnemyAnimal();
function animateSixthEnemyAnimal() {
    startBottomPositionSixthEnemyAnimal = startBottomPositionSixthEnemyAnimal + 0.4;
    sixthEnemyAnimal.style.bottom = startBottomPositionSixthEnemyAnimal + 'px';
    if (startBottomPositionSixthEnemyAnimal > 120) {
        sixthEnemyAnimal.style.display = 'block';
    }
    if (startBottomPositionSixthEnemyAnimal >= 140) {
        sixthEnemyAnimal.style.bottom = '140px';
        setTimeout(function () {
            startBottomPositionSixthEnemyAnimal = 0;
            sixthEnemyAnimal.style.display = 'none';
        }, 1000);
    }
    setTimeout(animateSixthEnemyAnimal, 0);
}
animateSixthEnemyAnimal();
// firstEnemyAnimal.addEventListener('click', function t (EO) {
//     EO = EO || window.event;
//     mouseDownOnAnimal.play();
//     score++;
//     scoreSpan.innerHTML = score;
//     flag = true;
// });

