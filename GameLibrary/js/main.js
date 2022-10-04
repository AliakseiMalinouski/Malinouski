"use strict";
// делаем поиск игр
let search = document.getElementById('search');
let containerSearchBlock = document.querySelector('container__search__block');
let searchVariants = document.querySelectorAll('.search__variants li');
search.oninput = function (EO) {
    EO = EO || window.event;
    search.value = search.value.toLowerCase(); // обрезаем пробелы и сводим всё к нижнему регистру, меняем спец.символы на html мнемоники
    search.value = search.value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    let value = this.value.trim();
    if (value != '') {
        searchVariants.forEach(function (element) {
            if (element.textContent.search(value) == -1) {
                element.classList.add('disable');
                element.innerHTML = element.textContent;
            } 
            else {
                element.classList.remove('disable');
                let string = element.textContent;
                let nextSymbolsOfString = element.textContent.search(value);
                element.innerHTML = addColorToSeacrhVariant(string, nextSymbolsOfString, value.length);
            }
        });
    }
    else {
        searchVariants.forEach(function (element) {
            element.classList.remove('disable');
            element.innerHTML = element.textContent;
        });
    }
    if (value == 'races') {
        card.createRacesCard();
    }
    if (value == '' && search.value !== 'races') {
        card.destroyRacesCard();
    }
    if (value == 'molesmash') {
        card.createMoleSmashCard();
    }
    if (value == '' && search.value !== 'molesmash') {
        card.destroyMoleSmashCard();
    }
    if (value == 'jorun') {
        card.createJoRunCard();
    }
    if (value == '' && search.value !== 'jorun') {
        card.destroyJoRunCard();
    }
    if (value == 'tictactoe') {
        card.createTicTacToeCard();
    }
    if (value == '' && search.value !== 'tictactoe') {
        card.destroyTicTacToeCard();
    }
    if (value == 'tennis') {
        card.createTennisCard();
    }
    if (value == '' && search.value !== 'tennis') {
        card.destroyTennisCard();
    }
}
function addColorToSeacrhVariant(string, position, lengtH) {
    return string.slice(0, position) + '<mark>' + string.slice(position, position + lengtH) + '</mark>' + string.slice(position + lengtH);
}
// на всякий случай полностью запрещаем ввод и вставку спец. символов
search.addEventListener('paste', controlKeyDownAndPasteValuesToInput);
search.addEventListener('keydown', controlKeyDownAndPasteValuesToInput);
function controlKeyDownAndPasteValuesToInput(EO) {
    if (['-', '{', '}', '*', '&', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', '"', "'", '_', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(EO.key)) {
        EO.preventDefault();
    }
}
// добавить сообщение о отсуствии вариантов
search.addEventListener('blur', function (EO) {
    EO = EO || window.event;
});
// при получении полного значения в input, формируем "карточку игры"
class Card {
    constructor() {
        // races
        this.racesCard = document.createElement('div');
        this.racesCardImg = document.createElement('img');
        this.racesCardTextContent = document.createElement('p');
        this.searchBlock = document.querySelector('.container__search__block');
        // melosmash
        this.meloSmash = document.createElement('div');
        this.meloSmashImg = document.createElement('img');
        this.meloSmashTextContent = document.createElement('p');
        this.moleSmashSpan = document.getElementById('moleSmashSpan');
        // joRUN
        this.JoRun = document.createElement('div');
        this.JoRunImg = document.createElement('img');
        this.JoRunTextContent = document.createElement('p');
        // tictactoe
        this.TicTacToe = document.createElement('div');
        this.TicTacToeImg = document.createElement('img');
        this.TicTacToeTextContent = document.createElement('p');
        // tennis
        this.tennis = document.createElement('div');
        this.tennisImg = document.createElement('img');
        this.tennisTextContent = document.createElement('p');
    }
    createRacesCard() {
        this.racesCard.classList.add('cards__active__block');
        this.racesCard.classList.add('animation__games__search__blocks');
        this.racesCardImg.setAttribute('src', './imgs/racesBlockImgMainPage.png');
        this.racesCardImg.classList.remove('disable');
        this.racesCardImg.classList.add('img__of__races__and__molesmash__jorun__block');
        this.racesCardTextContent.textContent = 'Races - игра в стиле 2D гонок. Вам предстоит как можно дольше продержаться на дороге, либо же, потерпеть неудачу, столкнувшись со встречной машиной. С правилами можно ознакомиться в самой игре. Удачи!';
        this.racesCardTextContent.classList.add('text__content__of__card');
        this.racesCard.appendChild(this.racesCardImg);
        this.racesCard.appendChild(this.racesCardTextContent);
        this.searchBlock.appendChild(this.racesCard);
    }
    destroyRacesCard() {
        this.racesCard.classList.remove('cards__active__block');
        this.racesCardImg.classList.add('disable');
    }
    createMoleSmashCard() {
        this.meloSmash.classList.add('cards__active__block');
        this.meloSmash.classList.add('animation__games__search__blocks');
        this.meloSmashImg.setAttribute('src', './imgs/meloSmashImg.png');
        this.meloSmashImg.classList.remove('disable');
        this.meloSmashImg.classList.add('img__of__races__and__molesmash__jorun__block');
        this.meloSmashTextContent.innerHTML = 'MoleSmash - популярная 2D игра, где главная задача игрока - это прибить недружелюбых животных. Главное в игре - скорость и внимательность! Удачи!';
        this.meloSmashTextContent.classList.add('text__content__of__card');
        this.meloSmash.appendChild(this.meloSmashImg);
        this.meloSmash.appendChild(this.meloSmashTextContent);
        this.searchBlock.appendChild(this.meloSmash);

    }
    destroyMoleSmashCard() {
        this.meloSmash.classList.remove('cards__active__block');
        this.meloSmashImg.classList.add('disable');
    }
    createJoRunCard() {
        this.JoRun.classList.add('cards__active__block');
        this.JoRun.classList.add('animation__games__search__blocks');
        this.JoRunImg.setAttribute('src', './imgs/JoRunImg.png');
        this.JoRunImg.classList.remove('disable');
        this.JoRunImg.classList.add('img__of__races__and__molesmash__jorun__block');
        this.JoRunTextContent.classList.add('text__content__of__jorun');
        this.JoRunTextContent.innerHTML = 'Вам предстоит сыграть за археолога по имени Джо, который наткнулся на логово динозавра и теперь вынужден спасаться бегдством. Помогите Джо сбежать, а иначе...Удачи!';
        this.JoRun.appendChild(this.JoRunImg);
        this.JoRun.appendChild(this.JoRunTextContent);
        this.searchBlock.appendChild(this.JoRun);
    }
    destroyJoRunCard() {
        this.JoRun.classList.remove('cards__active__block');
        this.JoRunImg.classList.add('disable');
    }
    createTicTacToeCard() {
        this.TicTacToe.classList.add('cards__active__block');
        this.TicTacToe.classList.add('animation__games__search__blocks');
        this.TicTacToeImg.setAttribute('src', './imgs/TicTacToeImg.png');
        this.TicTacToeImg.classList.remove('disable');
        this.TicTacToeImg.classList.add('img__of__races__and__molesmash__jorun__block');
        this.TicTacToeTextContent.classList.add('text__content__of__card');
        this.TicTacToeTextContent.innerHTML = 'TicTacToe - это известная всеми игра, в которую играл абсолютно каждый. Но сегодня это стало проще и удобнее!';
        this.TicTacToe.appendChild(this.TicTacToeImg);
        this.TicTacToe.appendChild(this.JoRunTextContent);
        this.searchBlock.appendChild(this.TicTacToe);
    }
    destroyTicTacToeCard() {
        this.TicTacToe.classList.remove('cards__active__block');
        this.TicTacToeImg.classList.add('disable');
    }
    createTennisCard() {
        this.tennis.classList.add('cards__active__block');
        this.tennis.classList.add('animation__games__search__blocks');
        this.tennisImg.setAttribute('src', './imgs/tennisImg.png');
        this.tennisImg.classList.remove('disable');
        this.tennisImg.classList.add('img__of__races__and__molesmash__jorun__block');
        this.tennisTextContent.classList.add('text__content__of__card');
        this.tennisTextContent.innerHTML = 'Tennis - игра-теннис для двух игроков. Главная задача - забить как можно больше мячей сопернику.';
        this.tennis.appendChild(this.tennisImg);
        this.tennis.appendChild(this.tennisTextContent);
        this.searchBlock.appendChild(this.tennis);
    }
    destroyTennisCard() {
        this.tennis.classList.remove('cards__active__block');
        this.tennisImg.classList.add('disable');
    }
}
let card = new Card();