// получаем все элемент со страницы
let gameArea = document.querySelector('area-game');
let human = document.getElementById('human');
let badDino = document.getElementById('bad-dino');
document.addEventListener('keydown', function (EO) {
    EO = EO || window.event;
    if (EO.code === 'Space') {
        upHuman();
    }
});
function upHuman() {
    if (human.classList != 'up') {
        human.classList.add('up');
    }
    setTimeout(function () {
        human.classList.remove('up');
    }, 1000);
}