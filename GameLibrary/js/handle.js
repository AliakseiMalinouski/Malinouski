// создаём необходимые  элементы для игры: игровую площаь, животных, score, таймер
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
let timerSpan = document.createElement('span');
timerSpan.classList.add('timer__span');
areaGame.appendChild(timerSpan);
// добавляем score
let flag = false; // для отслеживания и неповторения клик по животному
let scoreSpan = document.createElement('div');
scoreSpan.classList.add('score');
let score = 0;
scoreSpan.innerHTML = `Score: ${score}`;
areaGame.appendChild(scoreSpan);
let shadowScoreSpan = document.createElement('span');
shadowScoreSpan.classList.add('shadow__score__span');
shadowScoreSpan.innerHTML = `Score: ${score}`;
areaGame.appendChild(shadowScoreSpan);
// делаем таймер
let startTime = 11;
let stringTime = 'Time left: ';
let endTime = 0;
startTimeGame();
function startTimeGame(EO) {
    EO = EO || window.event;
    startTime = startTime - 1; 
    timerSpan.innerHTML = stringTime + ' ' + startTime;
    console.log(startTime)
    if (startTime == 0) {
        let alertGameOver = document.createElement('span');
        alertGameOver.classList.add('alert__game__over');
        alertGameOver.innerHTML = 'GAME OVER! ' + 'Your record: ' + score;
        areaGame.appendChild(alertGameOver);
        animateFirstEnemyAnimal = null;
        animateSecondEnemyAnimal = null;
        animateThirdEnemyAnimal = null;
        animateFourthEnenmyAnimal = null;
        animateFifthEnemyAnimal = null;
        animateSixthEnemyAnimal = null;
        clearInterval(intveralOfTimeGame);
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}
let intveralOfTimeGame = setInterval(startTimeGame, 1000);
// заменяем дефолтное солнце на своё
const blueBackground = document.createElement('img');
blueBackground.setAttribute('src', './imgs/blueBackground.png');
blueBackground.classList.add('blue__background');
areaGame.appendChild(blueBackground);
const yellowCircle = document.createElement('div');
yellowCircle.classList.add('yellow__circle');
areaGame.appendChild(yellowCircle);
// добавляем звуки
let mouseDownOnAnimal = new Audio('./audio/handleClick.mp3');
// объект с начальными позициями по оси y
const startPositionYforEnemyAnimals = {
    startTopPositionFirstEnemyAnimal: 380,
    startTopPositionSecondEnemyAnimal: 370,
    startTopPositionThirdEnemyAnimal: 440,
    startBottomPositionFourthEnemyAnimal: 10,
    startBottomPositionFifthEnemyAnimal: -40,
    startBottomPositionSixthEnemyAnimal: 0,
};
// анимируем всех вражеских животных
function animateFirstEnemyAnimal() {
    startPositionYforEnemyAnimals.startTopPositionFirstEnemyAnimal = startPositionYforEnemyAnimals.startTopPositionFirstEnemyAnimal - 0.2;
    firstEnemyAnimal.style.top = startPositionYforEnemyAnimals.startTopPositionFirstEnemyAnimal + 'px';
    if (startPositionYforEnemyAnimals.startTopPositionFirstEnemyAnimal < 285) {
        firstEnemyAnimal.style.display = 'block';
    }
    if (startPositionYforEnemyAnimals.startTopPositionFirstEnemyAnimal<= 280) {
        firstEnemyAnimal.style.top = '280px';
        setTimeout(function () {
        startPositionYforEnemyAnimals.startTopPositionFirstEnemyAnimal = 380;
        firstEnemyAnimal.style.display = 'none';
        }, 1000);
    }
    setTimeout(animateFirstEnemyAnimal, 0);
}
animateFirstEnemyAnimal();
// анимируем медведя
function animateSecondEnemyAnimal() {
    startPositionYforEnemyAnimals.startTopPositionSecondEnemyAnimal = startPositionYforEnemyAnimals.startTopPositionSecondEnemyAnimal - 0.5;
    secondEnemyAnimal.style.top = startPositionYforEnemyAnimals.startTopPositionSecondEnemyAnimal  + 'px';
    if (startPositionYforEnemyAnimals.startTopPositionSecondEnemyAnimal < 265) {
        secondEnemyAnimal.style.display = 'block';
    }
    if (startPositionYforEnemyAnimals.startTopPositionSecondEnemyAnimal <= 250) {
        secondEnemyAnimal.style.top = '250px';
        setTimeout(function () {
            startPositionYforEnemyAnimals.startTopPositionSecondEnemyAnimal  = 370;
            secondEnemyAnimal.style.display = 'none';
        }, 1000);
    }
    setTimeout(animateSecondEnemyAnimal, 0);
}
animateSecondEnemyAnimal();
function animateThirdEnemyAnimal() {
    startPositionYforEnemyAnimals.startTopPositionThirdEnemyAnimal = startPositionYforEnemyAnimals.startTopPositionThirdEnemyAnimal - 0.3;
    thirdEnemyAnimal.style.top = startPositionYforEnemyAnimals.startTopPositionThirdEnemyAnimal  + 'px';
    if (startPositionYforEnemyAnimals.startTopPositionThirdEnemyAnimal  < 320) {
        thirdEnemyAnimal.style.display = 'block';
    }
    if (startPositionYforEnemyAnimals.startTopPositionThirdEnemyAnimal  <= 300) {
        thirdEnemyAnimal.style.top = '300px';
        setTimeout(function () {
            startPositionYforEnemyAnimals.startTopPositionThirdEnemyAnimal = 440;
            thirdEnemyAnimal.style.display = 'none'; 
        }, 1000);
    }
    setTimeout(animateThirdEnemyAnimal, 0);
}
animateThirdEnemyAnimal();
function animateFourthEnenmyAnimal() {
    startPositionYforEnemyAnimals.startBottomPositionFourthEnemyAnimal = startPositionYforEnemyAnimals.startBottomPositionFourthEnemyAnimal + 0.4;
    fourthEnemyAnimal.style.bottom = startPositionYforEnemyAnimals.startBottomPositionFourthEnemyAnimal + 'px';
    if (startPositionYforEnemyAnimals.startBottomPositionFourthEnemyAnimal > 100) {
        fourthEnemyAnimal.style.display = 'block';
    }
    if (startPositionYforEnemyAnimals.startBottomPositionFourthEnemyAnimal >= 140) {
        fourthEnemyAnimal.style.bottom = '140px';
        setTimeout(function () {
            startPositionYforEnemyAnimals.startBottomPositionFourthEnemyAnimal = 10;
            fourthEnemyAnimal.style.display = 'none';
        }, 1000);
    }
    setTimeout(animateFourthEnenmyAnimal, 0);
}
animateFourthEnenmyAnimal();
function animateFifthEnemyAnimal() {
    startPositionYforEnemyAnimals.startBottomPositionFifthEnemyAnimal = startPositionYforEnemyAnimals.startBottomPositionFifthEnemyAnimal + 0.3;
    fifthEnemyAnimal.style.bottom = startPositionYforEnemyAnimals.startBottomPositionFifthEnemyAnimal + 'px';
    if (startPositionYforEnemyAnimals.startBottomPositionFifthEnemyAnimal > 80) {
        fifthEnemyAnimal.style.display = 'block';
    }
    if (startPositionYforEnemyAnimals.startBottomPositionFifthEnemyAnimal >= 100) {
        fifthEnemyAnimal.style.bottom = '100px';
        setTimeout(function () {
            startPositionYforEnemyAnimals.startBottomPositionFifthEnemyAnimal = -40;
            fifthEnemyAnimal.style.display = 'none'; 
        }, 1000);
    }
    setTimeout(animateFifthEnemyAnimal, 0);
}
animateFifthEnemyAnimal();
function animateSixthEnemyAnimal() {
    startPositionYforEnemyAnimals.startBottomPositionSixthEnemyAnimal = startPositionYforEnemyAnimals.startBottomPositionSixthEnemyAnimal + 0.4;
    sixthEnemyAnimal.style.bottom = startPositionYforEnemyAnimals.startBottomPositionSixthEnemyAnimal + 'px';
    if (startPositionYforEnemyAnimals.startBottomPositionSixthEnemyAnimal > 120) {
        sixthEnemyAnimal.style.display = 'block';
    }
    if (startPositionYforEnemyAnimals.startBottomPositionSixthEnemyAnimal >= 140) {
        sixthEnemyAnimal.style.bottom = '140px';
        setTimeout(function () {
            startPositionYforEnemyAnimals.startBottomPositionSixthEnemyAnimal = 0;
            sixthEnemyAnimal.style.display = 'none';
        }, 1000);
    }
    setTimeout(animateSixthEnemyAnimal, 0);
}
animateSixthEnemyAnimal();
// подписываемся и обрабатываем клик по животным используя делегирование
let arrayAllImgsOfDocument = document.querySelectorAll('img');
arrayAllImgsOfDocument.forEach(element => {
    element.ondragstart = function () { return false } // отменяем перетаскивание картинок
    element.onselectionchange = function () { return false } // отменяем выделение картинок
    element.addEventListener('click', function clickOnAnimal (EO) {
    EO = EO || window.event;
    mouseDownOnAnimal.play();
    score++;
    shadowScoreSpan.innerHTML = `Score: ${score}`;
    scoreSpan.innerHTML = `Score: ${score}`;
    flag = true;
    if(flag) {
        element.removeEventListener('click', clickOnAnimal);
        setTimeout(function () {
            flag = false;
            element.addEventListener('click', clickOnAnimal);
            console.log('WORK!!!')
        }, 900);
    }
    });
});

