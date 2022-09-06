"use strict";
// получаем элементы со страницы
let wrapTicTacZone = document.getElementById('wrap');
let cube = document.querySelectorAll('cude');
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
    player = player == 'x' ? 'o' : 'x';
    let arrayPlayerPosition = [];
    for (let i in cube) {
        if (cube[i].innerHTML == player) {
            arrayPlayerPosition.push(parseInt(cube[i].getAttribute('data-number')))
        }
    }
    console.log(player)
    console.log(arrayPlayerPosition)
}
