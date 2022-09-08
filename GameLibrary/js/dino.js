let human = document.getElementById('human');
let stone = document.getElementById('stone');
let humanTop = human.offsetTop;
document.addEventListener('keydown', function (EO) {
    EO = EO || window.event;
    if (EO.code == 'Space') {
        upHuman()
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
console.log(typeof humanTop)
function t() {
    let leftStone = stone.offsetLeft;
    leftStone--;
    stone.style.left = leftStone + 'px';
    setTimeout(t, 0);
    if (leftStone == '0') {
        stone.style.left = '780px';
    }
    if (leftStone == '99' && human.classList != 'up') {
        alert('gg')
    }
}
t();
