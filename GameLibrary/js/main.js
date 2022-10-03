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
}
function addColorToSeacrhVariant(string, position, lengtH) {
    return string.slice(0, position) + '<mark>' + string.slice(position, position + lengtH) + '</mark>' + string.slice(position + lengtH);
}
// на всякий случай полностью запрещаем ввод и вставку спец. символов
search.addEventListener('paste', controlKeyDownAndPasteValuesToInput);
search.addEventListener('keydown', controlKeyDownAndPasteValuesToInput);
function controlKeyDownAndPasteValuesToInput(EO) {
    if (['-', '{', '}', '*', '&', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', '"', "'", '_', '+'].includes(EO.key)) {
        EO.preventDefault();
    }
}
// добавить сообщение о отсуствии вариантов
search.addEventListener('blur', function (EO) {
   console.log(searchVariants.length) 
});
// при получении полного значения в input, формируем "карточку игры"
class Card {
    constructor() {
        this.racesCard = document.createElement('div');
        this.racesCardImg = document.createElement('img');
        this.racesCardTextContent = document.createElement('p');
        this.searchBlock = document.querySelector('.container__search__block');
    }
    createRacesCard() {
        this.racesCard.classList.add('races__active__block');
        this.racesCard.classList.add('animation__games__search__blocks');
        this.racesCardImg.setAttribute('src', './imgs/racesBlockImgMainPage.png');
        this.racesCardImg.classList.remove('disable');
        this.racesCardImg.classList.add('img__of__races__block');
        this.racesCardTextContent.textContent = 'Races - игра в стиле 2D гонок. Вам предстоит как можно дольше продержаться на дороге, либо же, потерпеть неудачу, столкнувшись со встречной машиной. С правилами можно ознакомиться в самой игре. Удачи!';
        this.racesCardTextContent.classList.add('text__content_of__races__card');
        this.racesCard.appendChild(this.racesCardImg);
        this.racesCard.appendChild(this.racesCardTextContent);
        this.searchBlock.appendChild(this.racesCard);
    }
    destroyRacesCard() {
        this.racesCard.classList.remove('races__active__block');
        this.racesCardImg.classList.add('disable');
    }
}
let card = new Card();