"use strict";
// получаем элементы со страницы
let wrapTicTacZone = document.getElementById('wrap');
let cube = document.getElementsByClassName('cube');
// создаём первого игрока
let player = 'x';
// создаём массив с позициями победы
let arrayWin = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [1, 5, 9],
];
// c помощью цикла создаём игровые клеточки
for (let i = 1; i <= 9; i++) {
    let divCube = document.createElement('div');
    divCube.setAttribute('data-number', i);
    divCube.setAttribute('class', 'cube');
    wrapTicTacZone.appendChild(divCube);
}
// используя делегирование вешаем обработчик клик на wrapTicTacZone, т.е родительский контейнер, а далее отслеживаем, куда был сделан щелчок
wrapTicTacZone.addEventListener('click', addPlayer);
function addPlayer(EO) {
    EO = EO || window.event;
    if (!EO.target.innerHTML) {
        EO.target.innerHTML = player;
    }
    else {
        alert('Клетка занята другим игроком');
        return;
    }
// создаём массив, куда будем складировать позиции каждого игрока
    let arrayPlayerPosition = [];
    for (let j in cube) {
        if (cube[j].innerHTML == player) {
            arrayPlayerPosition.push(parseInt(cube[j].getAttribute('data-number')));
        }
    }
// функция победы вызывается(расписана ниже), также после победы очищаем клетки
    if (getWinner(arrayPlayerPosition)) {
        alert(`Победил ${player}`);
        for (let i = 0; i < cube.length; i++) {
            cube[i].innerHTML = '';
        }
    }
// ничья, также очищаем клетки
    else {
        let drawn = true;
        for (let n in cube) {
            if (cube[n].innerHTML == '') {
                drawn = false;
            }
        }
        if (drawn) {
            alert('Победила дружба!');
            for (let i = 0; i < cube.length; i++) {
            cube[i].innerHTML = '';
            }   
        }
    }
    player = player == 'x' ? 'o' : 'x';
}
function getWinner(arrayPlayerPosition) {
    for (let i in arrayWin) {
        let winner = true;
        for (let j in arrayWin[i]) {
            let id = arrayWin[i][j];
            let index = arrayPlayerPosition.indexOf(id)
            if (index == -1) {
                winner = false
            }
        }
        if(winner) return true
    }
    return false;
}
// создаём переключатель, котоырй будет отображать актуального игрока
let namePlayer = document.querySelector('name-player');
// получаем контейнер
let containerOfContent = document.getElementById('container');
containerOfContent.addEventListener('mouseenter', changeCursor);
function changeCursor(EO) {
    EO = EO || window.event;
    containerOfContent.classList.add('cursor-change');
}