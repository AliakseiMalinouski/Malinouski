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
// анимируем бобров
let startTopPositionFirstEnemyAnimal = 380;
function animateFirstEnemyAnimal() {
    startTopPositionFirstEnemyAnimal = startTopPositionFirstEnemyAnimal - 0.2;
    firstEnemyAnimal.style.top = startTopPositionFirstEnemyAnimal + 'px';
    if (startTopPositionFirstEnemyAnimal < 295) {
        firstEnemyAnimal.style.display = 'block';
    }
    if (startTopPositionFirstEnemyAnimal <= 280) {
        firstEnemyAnimal.style.top = '280px';
        firstEnemyAnimal.classList.add('test');
        setTimeout(function () {
        startTopPositionFirstEnemyAnimal = 380;
        firstEnemyAnimal.style.display = 'none';
        }, 1100);
    }
    setTimeout(animateFirstEnemyAnimal, 0);
}
animateFirstEnemyAnimal();

firstEnemyAnimal.addEventListener('click', function () {
    console.log('work')
});

