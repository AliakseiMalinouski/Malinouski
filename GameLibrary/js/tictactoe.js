"use strict";
// добавляем веселую музыку на фон
let dynamic = document.getElementById('wrap-dynamic');
let offMusic = document.getElementById('red-line');
let onMusic = document.getElementById('off-music');
let foneAudio = new Audio('./audio/cf0fc01247f4fc1.mp3');
dynamic.addEventListener('click', onMusicFone);
function onMusicFone(EO) {
    EO = EO || window.event;
    foneAudio.loop = true;
    foneAudio.play();
    dynamic.style.zIndex = '0';
    offMusic.style.display = 'none';
    onMusic.style.display = 'block';
}
onMusic.addEventListener('click', off);
function off(EO) {
    EO = EO || window.event;
    foneAudio.pause();
    dynamic.style.zIndex = '2';
    offMusic.style.display = 'block';
    onMusic.style.display = 'none';
}
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
// начальные позиции таблицы
let staticRightTableWinner = 50; // статичная позиция справа
let staticTopTableWinner = 53; // статичная позиция сверху
function changePositionTableWinner(EO) {
    EO = EO || window.event;
    countForTableWinnerAnimation += 1;
    tableWinner.style.top = countForTableWinnerAnimation + 'px';
    if (countForTableWinnerAnimation > 590) {
        changePositionTableWinner = false;
        tableWinner.style.top = '590px';
        if (tableWinner.offsetTop == '590' && tableWinner.offsetLeft == '900') {
            let newCount = 50;
            function changePostionToRight() {
                newCount += 1;
                tableWinner.style.right = newCount + 'px';
                setTimeout(changePostionToRight, 80);
                if (newCount > 790) {
                    changePostionToRight = false;
                    tableWinner.style.right = '790';
                    if (tableWinner.offsetLeft == '158' && tableWinner.offsetTop == '590') {
                        let continueCount = 590;
                        function changeTopPosition() {
                            continueCount--;
                            tableWinner.style.top = continueCount + 'px';
                            setTimeout(changeTopPosition, 80);
                            if (continueCount < 90) {
                                changeTopPosition = false;
                                console.log(tableWinner.offsetLeft, tableWinner.offsetTop)
                                tableWinner.style.top = '88px';
                                if (tableWinner.offsetLeft == '158' && tableWinner.offsetTop == '88') {
                                    let lastCount = 790;
                                    function tt() {
                                        lastCount --;
                                        tableWinner.style.right = lastCount + 'px';
                                        setTimeout(tt, 80);
                                        if (lastCount == '50') {
                                            tt = false;
                                        }
                                    }
                                    tt();
                                }
                            }
                        }
                        changeTopPosition()
                    }
                }
            }
            changePostionToRight()
        }
    } 
    setTimeout(changePositionTableWinner, 80);
}
// получаем ширину окна 
let widthWindow = window.innerWidth;
let heigthWindow = window.innerHeight;
if (widthWindow < 1202) {
    changePositionTableWinner = null;
}
// предупреждние о потери данных при выходе
window.onbeforeunload = function() {
    return "При выходе со страницы, несохранённые данные могут быть потеряны. Выйти?";
};