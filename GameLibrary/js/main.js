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
        card.destroyAlertNotDefinedCard();
    }
    else if (value == '' && search.value !== 'races') {
        card.destroyRacesCard();
    }
    if (value == 'molesmash') {
        card.createMoleSmashCard();
        card.destroyAlertNotDefinedCard();
    }
    else if (value == '' && search.value !== 'molesmash') {
        card.destroyMoleSmashCard();
    }
    if (value == 'jorun') {
        card.createJoRunCard();
        card.destroyAlertNotDefinedCard();
    }
    else if (value == '' && search.value !== 'jorun') {
        card.destroyJoRunCard();
    }
    if (value == 'tictactoe') {
        card.createTicTacToeCard();
        card.destroyAlertNotDefinedCard();
    }
    else if (value == '' && search.value !== 'tictactoe') {
        card.destroyTicTacToeCard();
    }
    if (value == 'tennis') {
        card.createTennisCard();
        card.destroyAlertNotDefinedCard();
    }
    else if (value == '' && search.value !== 'tennis') {
        card.destroyTennisCard();
    }
    if ((search.value !== 'races' && search.value !== 'molesmash' && search.value !== 'jorun' && search.value !== 'tictactoe' && search.value !== 'tennis') && (search.value.length >= 9)) {
        card.isNotDefinedCard();
    }
    else if ((search.value !== 'races' && search.value !== 'molesmash' && search.value !== 'jorun' && search.value !== 'tictactoe' && search.value !== 'tennis') && (search.value == '')) {
        card.destroyAlertNotDefinedCard();
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
// убираем дефолтный border при фокусе
search.addEventListener('focus', function (EO) {
    EO = EO || window.event;
    search.style.outline = 'none';
    search.style.outlineOffset = 'none';
});
// при получении полного значения в input, формируем "карточку игры"
class Card {
    constructor() {
        // races
        this.racesCard = document.createElement('div');
        this.racesCardImg = document.createElement('img');
        this.racesCardTextContent = document.createElement('p');
        this.searchBlock = document.querySelector('.container__search__block');
        this.meloSmash = document.createElement('div');
        this.meloSmashImg = document.createElement('img');
        this.meloSmashTextContent = document.createElement('p');
        this.moleSmashSpan = document.getElementById('moleSmashSpan');
        this.JoRun = document.createElement('div');
        this.JoRunImg = document.createElement('img');
        this.JoRunTextContent = document.createElement('p');
        this.TicTacToe = document.createElement('div');
        this.TicTacToeImg = document.createElement('img');
        this.TicTacToeTextContent = document.createElement('p');
        this.tennis = document.createElement('div');
        this.tennisImg = document.createElement('img');
        this.tennisTextContent = document.createElement('p');
        this.alertNotDefinedCard = document.createElement('span');
        this.sentencesAboutGames = document.querySelector('.sentences__about__games');
    }
    createRacesCard() {
        this.racesCard.classList.add('cards__active__block');
        this.racesCard.classList.add('animation__games__search__blocks');
        this.racesCardImg.setAttribute('src', './imgs/racesBlockImgMainPage.png');
        this.racesCardImg.classList.remove('disable');
        this.racesCardImg.classList.add('img__of__races__and__molesmash__jorun__block');
        this.racesCardTextContent.textContent = 'Races - игра в стиле 2D гонок. Вам предстоит как можно дольше продержаться на дороге, либо же, потерпеть неудачу, столкнувшись со встречной машиной. С правилами можно ознакомиться в самой игре. Удачи!';
        this.racesCardTextContent.classList.add('text__content__of__card');
        this.racesCardTextContent.classList.remove('disable');
        this.sentencesAboutGames.classList.add('add__new__margin__top');
        this.racesCard.appendChild(this.racesCardImg);
        this.racesCard.appendChild(this.racesCardTextContent);
        this.searchBlock.appendChild(this.racesCard);
    }
    destroyRacesCard() {
        this.racesCard.classList.remove('cards__active__block');
        this.racesCardImg.classList.add('disable');
        this.racesCardTextContent.classList.add('disable');
        this.sentencesAboutGames.classList.remove('add__new__margin__top');
    }
    createMoleSmashCard() {
        this.meloSmash.classList.add('cards__active__block');
        this.meloSmash.classList.add('animation__games__search__blocks');
        this.meloSmashImg.setAttribute('src', './imgs/meloSmashImg.png');
        this.meloSmashImg.classList.remove('disable');
        this.meloSmashImg.classList.add('img__of__races__and__molesmash__jorun__block');
        this.meloSmashTextContent.innerHTML = 'MoleSmash - популярная 2D игра, где главная задача игрока - это прибить недружелюбых животных. Главное в игре - скорость и внимательность! Удачи!';
        this.meloSmashTextContent.classList.remove('disable');
        this.meloSmashTextContent.classList.add('text__content__of__card');
        this.sentencesAboutGames.classList.add('add__new__margin__top');
        this.meloSmash.appendChild(this.meloSmashImg);
        this.meloSmash.appendChild(this.meloSmashTextContent);
        this.searchBlock.appendChild(this.meloSmash);

    }
    destroyMoleSmashCard() {
        this.meloSmash.classList.remove('cards__active__block');
        this.meloSmashImg.classList.add('disable');
        this.meloSmashTextContent.classList.add('disable');
        this.sentencesAboutGames.classList.remove('add__new__margin__top');
    }
    createJoRunCard() {
        this.JoRun.classList.add('cards__active__block');
        this.JoRun.classList.add('animation__games__search__blocks');
        this.JoRunImg.setAttribute('src', './imgs/JoRunImg.png');
        this.JoRunImg.classList.remove('disable');
        this.JoRunImg.classList.add('img__of__races__and__molesmash__jorun__block');
        this.JoRunTextContent.classList.add('text__content__of__jorun');
        this.JoRunTextContent.innerHTML = 'Вам предстоит сыграть за археолога по имени Джо, который наткнулся на логово динозавра и теперь вынужден спасаться бегдством. Помогите Джо сбежать, а иначе...Удачи!';
        this.JoRunTextContent.classList.remove('disable');
        this.sentencesAboutGames.classList.add('add__new__margin__top');
        this.JoRun.appendChild(this.JoRunImg);
        this.JoRun.appendChild(this.JoRunTextContent);
        this.searchBlock.appendChild(this.JoRun);
    }
    destroyJoRunCard() {
        this.JoRun.classList.remove('cards__active__block');
        this.JoRunImg.classList.add('disable');
        this.JoRunTextContent.classList.add('disable');
        this.sentencesAboutGames.classList.remove('add__new__margin__top');
    }
    createTicTacToeCard() {
        this.TicTacToe.classList.add('cards__active__block');
        this.TicTacToe.classList.add('animation__games__search__blocks');
        this.TicTacToeImg.setAttribute('src', './imgs/TicTacToeImg.png');
        this.TicTacToeImg.classList.remove('disable');
        this.TicTacToeImg.classList.add('img__of__races__and__molesmash__jorun__block');
        this.TicTacToeTextContent.classList.add('text__content__of__card');
        this.TicTacToeTextContent.innerHTML = 'TicTacToe - это известная всеми игра, в которую играл абсолютно каждый. Но сегодня это стало проще и удобнее!';
        this.TicTacToeTextContent.classList.remove('disable');
        this.sentencesAboutGames.classList.add('add__new__margin__top');
        this.TicTacToe.appendChild(this.TicTacToeImg);
        this.TicTacToe.appendChild(this.TicTacToeTextContent);
        this.searchBlock.appendChild(this.TicTacToe);
    }
    destroyTicTacToeCard() {
        this.TicTacToe.classList.remove('cards__active__block');
        this.TicTacToeImg.classList.add('disable');
        this.TicTacToeTextContent.classList.add('disable');
        this.sentencesAboutGames.classList.remove('add__new__margin__top');
    }
    createTennisCard() {
        this.tennis.classList.add('cards__active__block');
        this.tennis.classList.add('animation__games__search__blocks');
        this.tennisImg.setAttribute('src', './imgs/tennisImg.png');
        this.tennisImg.classList.remove('disable');
        this.tennisImg.classList.add('img__of__races__and__molesmash__jorun__block');
        this.tennisTextContent.classList.add('text__content__of__card');
        this.tennisTextContent.innerHTML = 'Tennis - игра-теннис для двух игроков. Главная задача - забить как можно больше мячей сопернику.';
        this.tennisTextContent.classList.remove('disable');
        this.sentencesAboutGames.classList.add('add__new__margin__top');
        this.tennis.appendChild(this.tennisImg);
        this.tennis.appendChild(this.tennisTextContent);
        this.searchBlock.appendChild(this.tennis);
    }
    destroyTennisCard() {
        this.tennis.classList.remove('cards__active__block');
        this.tennisImg.classList.add('disable');
        this.tennisTextContent.classList.add('disable');
        this.sentencesAboutGames.classList.remove('add__new__margin__top');
    }
    isNotDefinedCard() {
        this.alertNotDefinedCard.innerHTML = 'Совпадении не найдено';
        this.alertNotDefinedCard.classList.add('alert__not__defined__card');
        this.alertNotDefinedCard.classList.remove('disable');
        this.searchBlock.appendChild(this.alertNotDefinedCard);
    }
    destroyAlertNotDefinedCard() {
        this.alertNotDefinedCard.classList.add('disable');
    }
}
let card = new Card();
// получаем и анимируем фразу про игры после поиска
let spanH = {
    firstColorSpan: document.getElementById('first__color__span'),
    secondColorSpan: document.getElementById('second__color__span'),
    thirdColorSpan: document.getElementById('third__color__span'),
    fourthColorSpan: document.getElementById('fourth__color__span'),
}
let colorsH = {
    red: 'red',
    yellow: 'yellow',
    white: 'white',
    lime: 'lime',
    pink: '#FF00FF',
}
let counterForCollectionSpansOfSentencesAboutGames = 0;
let intervalForCollectionSpansOfSentencesAboutGames = setInterval(function () {
    counterForCollectionSpansOfSentencesAboutGames = counterForCollectionSpansOfSentencesAboutGames + 1;
}, 800);
function changeColorSpan() {
    if (counterForCollectionSpansOfSentencesAboutGames == 2) {
        spanH.firstColorSpan.style.color = colorsH.red;
        setTimeout(() => spanH.firstColorSpan.style.color = colorsH.white, 800);
    }
    if (counterForCollectionSpansOfSentencesAboutGames == 4) {
        spanH.secondColorSpan.style.color = colorsH.yellow;
        setTimeout(() => spanH.secondColorSpan.style.color = colorsH.white, 800);
    }
    if (counterForCollectionSpansOfSentencesAboutGames == 6) {
        spanH.thirdColorSpan.style.color = colorsH.lime;
        setTimeout(() => spanH.thirdColorSpan.style.color = colorsH.white, 800);
    }
    if (counterForCollectionSpansOfSentencesAboutGames == 8) {
        spanH.fourthColorSpan.style.color = colorsH.pink;
        setTimeout(() => spanH.fourthColorSpan.style.color = colorsH.white);
    }
    if (counterForCollectionSpansOfSentencesAboutGames > 8) {
        counterForCollectionSpansOfSentencesAboutGames = 0;
    }
    setTimeout(changeColorSpan, 0);
}
changeColorSpan();
