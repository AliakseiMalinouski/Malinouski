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
// firstEnemyAnimal.addEventListener('click', function t (EO) {
//     EO = EO || window.event;
//     mouseDownOnAnimal.play();
//     score++;
//     scoreSpan.innerHTML = score;
//     flag = true;
// });

