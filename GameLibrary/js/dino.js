// получаем элементы со страницы
let human = document.getElementById('human');
let stone = document.getElementById('stone');
let tree = document.getElementById('tree');
let badDino = document.getElementById('bad-dino');
// получаем координаты человечка(сверху)
let humanTop = human.offsetTop;
document.addEventListener('keydown', function (EO) {
    EO = EO || window.event;
    if (EO.code == 'Space') {
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