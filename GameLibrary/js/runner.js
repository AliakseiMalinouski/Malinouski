// получаем элементы со страницы
let areaGame = document.getElementById('area-game');
let human = document.getElementById('human');
let stone = document.getElementById('stone');
let tree = document.getElementById('tree');
let badDino = document.getElementById('bad-dino'); 
let croco = document.getElementById('croco');
let sky = document.getElementById('sky');
let sky1 = document.getElementById('sky1');
let playButton = document.getElementById('play');
let menu = document.getElementById('menu');
let logo = document.getElementById('logo');
let reg = document.getElementById('reg');
let regBlock = document.getElementById('reg_block');
let closeButtonRegBlock = document.getElementById('close');
// получаем фотографии Джо
let jo1 = document.getElementById('jo_1');
let jo2 = document.getElementById('jo_2');
let jo3 = document.getElementById('jo_3');
// добавляем звуки-реакции на действия в игре
let mainMusic = new Audio('./audio/foneMusicRun.mp3');
let stoneAudio = new Audio('./audio/stoneAudio.mp3');
let humanJumpAudio = new Audio('./audio/8bit-synth-bounce-short.mp3');
let crocoEatHuman = new Audio('./audio/crocoEat.mp3');
playButton.addEventListener('click', function (EO) {
    EO = EO || window.event;
    menu.style.display = 'none';
    document.body.style.backgroundImage = 'none';
    logo.style.display = 'none';
    jo1.style.display = 'none';
    jo2.style.display = 'none';
    jo3.style.display = 'none';
    areaGame.style.display = 'block';
    mainMusic.play();
    document.addEventListener('keydown', function (EO) {
        EO = EO || window.event;
        if (EO.code == 'Digit1') {
            mainMusic.pause();
        }
        if (EO.code == 'Digit2') {
            mainMusic.play();
        }
    });
window.onbeforeunload = function() {
    return "Есть несохранённые изменения. Всё равно уходим?";
};
// меняем масштаб документа
if (window.innerWidth > 770) {
    document.body.style.zoom = 2.5;
    document.body.classList.remove('no-pseudo')
}
if (window.innerWidth < 770) {
    document.body.style.zoom = 0;
    document.body.classList.add('no-pseudo');
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';
}
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
document.addEventListener('touchstart', function (EO) {
    EO = EO || window.event;
    humanJumpAudio.play();
    upHuman();
    dinoUp();
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
    if (leftStone == '139' && human.classList != 'up') {
        stoneAudio.play();
        let alertGameOver = document.createElement('span');
        alertGameOver.classList.add('alert__game__over');
        alertGameOver.innerHTML = 'GAME OVER.' + '<br>' + '<br>' + 'Your record: ' + '<span style="color: blue; font-size: 25px; text-decoration: underline;">' + startScore + '</span>';
        areaGame.appendChild(alertGameOver);
        clearInterval(scoreInterval);
        window.onbeforeunload = false;
        animatedCroco = null;
        animatedSky = null;
        animatedSky1 = null;
        animatedTree = null;
        animatedStone = null;
        sky.classList.add('disable');
        sky1.classList.add('disable');
        setTimeout(function () {
            location.reload(); 
        }, 3000);
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
    if (leftTree == '139' && human.classList != 'up') {
        stoneAudio.play();
        let alertGameOver = document.createElement('span');
        alertGameOver.classList.add('alert__game__over');
        alertGameOver.innerHTML = 'GAME OVER.' + '<br>' + '<br>' + 'Your record: ' + '<span style="color: blue; font-size: 25px; text-decoration: underline;">' + startScore + '</span>';
        areaGame.appendChild(alertGameOver);
        clearInterval(scoreInterval);
        window.onbeforeunload = false;
        animatedCroco = null;
        animatedSky = null;
        animatedSky1 = null;
        animatedTree = null;
        animatedStone = null;
        sky.classList.add('disable');
        sky1.classList.add('disable');
        setTimeout(function () {
            location.reload(); 
        }, 3000);
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
    if (leftCroco == '139' && human.classList != 'up') {
        crocoEatHuman.play();
        let alertGameOver = document.createElement('span');
        alertGameOver.classList.add('alert__game__over');
        alertGameOver.innerHTML = 'GAME OVER.' + '<br>' + '<br>' + 'Your record: ' + '<span style="color: blue; font-size: 25px; text-decoration: underline;">' + startScore + '</span>';
        areaGame.appendChild(alertGameOver);
        clearInterval(scoreInterval);
        window.onbeforeunload = false;
        animatedCroco = null;
        animatedSky = null;
        animatedSky1 = null;
        animatedTree = null;
        animatedStone = null;
        sky.classList.add('disable');
        sky1.classList.add('disable');
        setTimeout(function () {
            location.reload();
        }, 3000);
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
// создаём игровой счёт
let sumScore = document.getElementById('sum-score');
let startScore = 0;
let arrayFone = [
    '"./imgs/secondFone.png"',
    '"./imgs/thirdFone.jpg"',
    '"./imgs/fFone.jpg"',
];
let scoreInterval = setInterval(function () {
    startScore++;
    sumScore.innerHTML = startScore;
    if (startScore > 30) {
        areaGame.style.backgroundImage = `url(${arrayFone[0]})`
        areaGame.style.backgroundSize = '123% 123%';
    }
    if (startScore > 60) {
        areaGame.style.backgroundImage = `url(${arrayFone[1]})`;
        areaGame.style.backgroundSize = '123% 123%';
    }
    if (startScore > 90) {
        areaGame.style.backgroundImage = `url(${arrayFone[2]})`
        areaGame.style.backgroundSize = '123% 123%';
    }
}, 200);
let backgroundAreaGame = getComputedStyle(areaGame).getPropertyValue('background-image');
});
// открытие и закрытие блока "правила"
reg.addEventListener('click', function (EO) {
    EO = EO || window.event;
    regBlock.style.display = 'block';
});
closeButtonRegBlock.addEventListener('click', function (EO) {
    EO = EO || window.event;
    regBlock.style.display = 'none';
});
// предотврощаем повторение keydown
function offRepeatKeyDown(func, minDuration) {
    let lastPress = 0;
    return function () {
        let now = Date.now();
        if (now - lastPress < minDuration) return;
        lastPress = now;
        return func.apply(this, arguments);
    };
}
setFunction = function () {console.log('success');};
wp = offRepeatKeyDown(setFunction, 200); 
wp(); 
wp();
// анимируем название игры
const arrayNameGame = [
    'JoRun',
];
function wrapperFunction() {
    let line = 0;
    let counter = 0;
    let results = '';
    function typeWriter() {
        let timeout = setTimeout(function () {
            results += arrayNameGame[line][counter];
            logo.innerHTML = results;
            counter++;
            if (counter >= arrayNameGame[line].length) {
                counter = 0;
                line++;
                if (line == arrayNameGame.length) {
                    clearTimeout(timeout);
                    return true;
                }
            }
            typeWriter();
        }, 200);
    }
    typeWriter();
}
function timerToTypeWriter() {
    setTimeout(timerToTypeWriter, 1500);
    setTimeout(wrapperFunction, 0);
}
timerToTypeWriter();
// анимируем галерею
setInterval(function () {
    jo1.classList.add('animation__for__jo1');
    jo2.classList.add('animation__for__jo2')
    jo3.classList.add('animation__for__jo3');
}, 1000);
setInterval(function checkClassName() {
    if (jo1.classList == 'animation__for__jo1') {
        jo1.classList.remove('animation__for__jo1');
    }
    if (jo2.classList == 'animation__for__jo2') {
        jo2.classList.remove('animation__for__jo2');
    }
    if (jo3.classList == 'animation__for__jo3') {
        jo3.classList.remove('animation__for__jo3');
    }
}, 4000);
