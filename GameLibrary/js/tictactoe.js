"use strict";
// получаем элементы со страницы
let wrapTicTacZone = document.getElementById('wrap');
let cube = document.getElementsByClassName('cube');
// создаём первого игрока
let player = 'x';
// вывод кол-ва побед
let resultsPlayerOne = document.getElementById('results-player1');
let resultsPlayerTwo = document.getElementById('results-player2');
let count = 0;
// объект для хранения результатов
let objResults =  {
    'x': 0,
    'o': 0,
}
// добавляем звук карандаша
let audio = new Audio('./audio/podpis-karandashom.mp3');
// добавляем звук победы
let audioWin = new Audio('./audio/victory.mp3');
// добавляем звук ничьи
let drawnAudio = new Audio('./audio/drawn.mp3');
// нулевой счётчик
resultsPlayerOne.innerHTML = count;
resultsPlayerTwo.innerHTML = count;
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
    audio.play()
    if (!EO.target.innerHTML) {
        EO.target.innerHTML = player;
        let namePlayer = document.getElementById('name-player');
        if (EO.target.innerHTML == 'x') {
            namePlayer.innerHTML = `Сейчас ходит: Игрок-2`;
        }
        else {
            namePlayer.innerHTML = `Сейчас ходит: Игрок-1`;
        }
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
        objResults[player] += 1;
        audioWin.play();
        alert(`Победил ${player}`);
        for (let i = 0; i < cube.length; i++) {
            cube[i].innerHTML = '';
            updateResults()
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
            drawnAudio.play();
            alert('Победила дружба!');
            for (let i = 0; i < cube.length; i++) {
                cube[i].innerHTML = '';
                updateResults()
            }   
        }
    }
// переключение игрока
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
// обновляем результаты
function updateResults() {
    resultsPlayerOne.innerHTML = objResults.x;
    resultsPlayerTwo.innerHTML = objResults.o;
}
// получаем таблицу счёта
let tableWinner = document.getElementById('table-winner');
// создадим счётчик для нашей таблицы
let countForTableWinnerAnimation = 0;
// создадим функцию, бладаря которой будет осуществляться перемещение нашей таблицы
window.addEventListener('load', changePositionTableWinner);
function changePositionTableWinner(EO) {
    EO = EO || window.event;
    let staticRightTableWinner = 50; // статичная позиция справа
    let staticTopTableWinner = 53; // статичная позиция сверху
    countForTableWinnerAnimation += 1;
    tableWinner.style.top = countForTableWinnerAnimation + 'px';
    if (countForTableWinnerAnimation > 590) {
        changePositionTableWinner = false
        tableWinner.style.top = '590px';
        countForTableWinnerAnimation = staticRightTableWinner;
        return function test() {
            countForTableWinnerAnimation++;
            tableWinner.style.right = countForTableWinnerAnimation + 'px';
            setTimeout(test, 10)
        }
    }
    setTimeout(changePositionTableWinner, 10);
}