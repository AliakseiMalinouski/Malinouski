// получаем элементы со страницы
let human = document.getElementById('human');
let stone = document.getElementById('stone');
let tree = document.getElementById('tree');
let badDino = document.getElementById('bad-dino'); 
let croco = document.getElementById('croco');
let sky = document.getElementById('sky');
let sky1 = document.getElementById('sky1');
// добавляем звуки-реакции на действия в игре
let mainMusic = new Audio('./audio/foneMusicRun.mp3');
let humanJumpAudio = new Audio('./audio/8bit-synth-bounce-short.mp3');
let crocoEatHuman = new Audio('./audio/crocoEat.mp3');
// получаем координаты человечка(сверху)
let humanTop = human.offsetTop;
// запуск функции прыжка злого динозавра и человечка
document.addEventListener('keydown', function (EO) {
    EO = EO || window.event;
    if (EO.code == 'Space') {
        humanJumpAudio.play();
        upHuman();
        dinoUp();
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
function dinoUp() {
    if (badDino.classList != 'up') {
        badDino.classList.add('up');
    }
    setTimeout(function () {
        badDino.classList.remove('up');
    }, 1000);
}
// анимируем камень
function animatedStone() {
    let leftStone = stone.offsetLeft;
    leftStone--;
    stone.style.left = leftStone + 'px';
    setTimeout(animatedStone, 0);
    if (leftStone == '0') {
        stone.style.left = '780px';
    }
    if (leftStone == '99' && human.classList != 'up') {
        alert('GAME OVER!');
        location.reload();
    }
}
animatedStone();
// анимируем дерево
function animatedTree() {
    let leftTree = tree.offsetLeft;
    leftTree--;
    tree.style.left = leftTree + 'px';
    setTimeout(animatedTree, 0);
    if (leftTree == '0') {
        tree.style.left = '1080px';
    }
    if (parseInt(window.getComputedStyle(tree).getPropertyValue('left')) > 800) {
        tree.style.opacity = '0';
    }
    if (parseInt(window.getComputedStyle(tree).getPropertyValue('left')) < 800) {
        tree.style.opacity = '1';
    }
    if (leftTree == '99' && human.classList != 'up') {
        alert('GAME OVER!');
        location.reload();
    }
}
animatedTree();
// анимируем крокодильчика
function animatedCroco() {
    let leftCroco = croco.offsetLeft;
    leftCroco--;
    croco.style.left = leftCroco + 'px';
    setTimeout(animatedCroco, 0);
    if (leftCroco == '0') {
        croco.style.left = '1200px';
    }
    if (parseInt(window.getComputedStyle(croco).getPropertyValue('left')) > 800) {
        croco.style.opacity = '0';
    }
    if (parseInt(window.getComputedStyle(croco).getPropertyValue('left')) < 800) {
        croco.style.opacity = '1';
    }
    if (leftCroco == '99' && human.classList != 'up') {
        crocoEatHuman.play();
        alert('GAME OVER!');
        location.reload();
    }
}
animatedCroco();
// анимируем облака
function animatedSky () {
    let leftSky = sky.offsetLeft;
    leftSky--;
    sky.style.left = leftSky + 'px';
    setTimeout(animatedSky, 0);
    if (leftSky == '0') {
        sky.style.left = '1090px';
    }
    if (parseInt(window.getComputedStyle(sky).getPropertyValue('left')) > 800) {
        sky.style.opacity = '0';
    }
    if (parseInt(window.getComputedStyle(sky).getPropertyValue('left')) < 800) {
        sky.style.opacity = '1';
    }
}
animatedSky();
function animatedSky1 () {
    let leftSky1 = sky1.offsetLeft;
    leftSky1--;
    sky1.style.left = leftSky1 + 'px';
    setTimeout(animatedSky1, 0);
    if (leftSky1 == '0') {
        sky1.style.left = '900px';
    }
    if (parseInt(window.getComputedStyle(sky1).getPropertyValue('left')) > 800) {
        sky1.style.opacity = '0';
    }
    if (parseInt(window.getComputedStyle(sky1).getPropertyValue('left')) < 800) {
        sky1.style.opacity = '1';
    }
}
animatedSky1();