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
        search.setAttribute('maxlength', '5');
    }
    else if (value == '' || search.value !== 'races') {
        card.destroyRacesCard();
    }
    if (value == 'molesmash') {
        card.createMoleSmashCard();
        card.destroyAlertNotDefinedCard();
        search.setAttribute('maxlength', '9');
    }
    else if (value == '' || search.value !== 'molesmash') {
        card.destroyMoleSmashCard();
    }
    if (value == 'jorun') {
        card.createJoRunCard();
        card.destroyAlertNotDefinedCard();
        search.setAttribute('maxlength', '5');
    }
    else if (value == '' || search.value !== 'jorun') {
        card.destroyJoRunCard();
    }
    if (value == 'tictactoe') {
        card.createTicTacToeCard();
        card.destroyAlertNotDefinedCard();
        search.setAttribute('maxlength', '9');
    }
    else if (value == '' || search.value !== 'tictactoe') {
        card.destroyTicTacToeCard();
    }
    if (value == 'tennis') {
        card.createTennisCard();
        card.destroyAlertNotDefinedCard();
        search.setAttribute('maxlength', '6');
    }
    else if (value == '' || search.value !== 'tennis') {
        card.destroyTennisCard();
    }
    if ((search.value !== 'races' && search.value !== 'molesmash' && search.value !== 'jorun' && search.value !== 'tictactoe' && search.value !== 'tennis') && (search.value.length >= 9)) {
        card.isNotDefinedCard();
    }
    else if ((search.value !== 'races' && search.value !== 'molesmash' && search.value !== 'jorun' && search.value !== 'tictactoe' && search.value !== 'tennis') && (search.value == '')) {
        card.destroyAlertNotDefinedCard();
        search.removeAttribute('maxlength');
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
        this.sentencesAboutGames.classList.add('add__new__margin__top3');
        this.racesCard.appendChild(this.racesCardImg);
        this.racesCard.appendChild(this.racesCardTextContent);
        this.searchBlock.appendChild(this.racesCard);
    }
    destroyRacesCard() {
        this.racesCard.classList.remove('cards__active__block');
        this.racesCardImg.classList.add('disable');
        this.racesCardTextContent.classList.add('disable');
        this.sentencesAboutGames.classList.remove('add__new__margin__top3');
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
        this.sentencesAboutGames.classList.add('add__new__margin__top2');
        this.meloSmash.appendChild(this.meloSmashImg);
        this.meloSmash.appendChild(this.meloSmashTextContent);
        this.searchBlock.appendChild(this.meloSmash);

    }
    destroyMoleSmashCard() {
        this.meloSmash.classList.remove('cards__active__block');
        this.meloSmashImg.classList.add('disable');
        this.meloSmashTextContent.classList.add('disable');
        this.sentencesAboutGames.classList.remove('add__new__margin__top2');
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
        this.sentencesAboutGames.classList.add('add__new__margin__top1');
        this.JoRun.appendChild(this.JoRunImg);
        this.JoRun.appendChild(this.JoRunTextContent);
        this.searchBlock.appendChild(this.JoRun);
    }
    destroyJoRunCard() {
        this.JoRun.classList.remove('cards__active__block');
        this.JoRunImg.classList.add('disable');
        this.JoRunTextContent.classList.add('disable');
        this.sentencesAboutGames.classList.remove('add__new__margin__top1');
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
        this.sentencesAboutGames.classList.add('add__new__margin__top1');
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
        spanH.firstColorSpan.style.transition = '1s';
        setTimeout(() => spanH.firstColorSpan.style.color = colorsH.white, 800);
    }
    if (counterForCollectionSpansOfSentencesAboutGames == 4) {
        spanH.secondColorSpan.style.color = colorsH.yellow;
        spanH.secondColorSpan.style.transition = '1s';
        setTimeout(() => spanH.secondColorSpan.style.color = colorsH.white, 800);
    }
    if (counterForCollectionSpansOfSentencesAboutGames == 6) {
        spanH.thirdColorSpan.style.color = colorsH.lime;
        spanH.thirdColorSpan.style.color = '1s';
        setTimeout(() => spanH.thirdColorSpan.style.color = colorsH.white, 800);
    }
    if (counterForCollectionSpansOfSentencesAboutGames == 8) {
        spanH.fourthColorSpan.style.color = colorsH.pink;
        spanH.fourthColorSpan.style.transition = '1s';
        setTimeout(() => spanH.fourthColorSpan.style.color = colorsH.white);
    }
    if (counterForCollectionSpansOfSentencesAboutGames > 8) {
        counterForCollectionSpansOfSentencesAboutGames = 0;
    }
    setTimeout(changeColorSpan, 0);
}
changeColorSpan();
// делаем слайдер
const slider = document.getElementById('slider');
const sliderWay = document.getElementById('slider__way');
// создаём переменную, куда будем складывать прокрученые пиксели
let xPosSliderWay = 0;
let previousButtonSlider = document.getElementById('previous__button__slider');
let nextButtonSlider = document.getElementById('next__button__slider');
nextButtonSlider.addEventListener('click', function (EO) {
    EO = EO || window.event;
    xPosSliderWay += 320;
    if (xPosSliderWay >= 960) {
        xPosSliderWay = 0;
    }
    sliderWay.style.left = -xPosSliderWay + 'px';
});
previousButtonSlider.addEventListener('click', function (EO) {
    EO = EO || window.event;
    xPosSliderWay -= 320;
    if (xPosSliderWay < 0) {
        xPosSliderWay = 640;
    }
    sliderWay.style.left = -xPosSliderWay + 'px';
});
// тоже самое для тач 
nextButtonSlider.addEventListener('touchstart', function (EO) {
    EO = EO || window.event;
    xPosSliderWay += 320;
    if (xPosSliderWay >= 960) {
        xPosSliderWay = 0;
    }
    sliderWay.style.left = -xPosSliderWay + 'px';
});
previousButtonSlider.addEventListener('touchstart', function (EO) {
    EO = EO || window.event;
    xPosSliderWay -= 320;
    if (xPosSliderWay < 0) {
        xPosSliderWay = 640;
    }
    sliderWay.style.left = -xPosSliderWay + 'px';
});
// AJAX: загрузка формы, регистрация, загрузка руководство
let buildFormButton = document.getElementById('build__form');
let titleFormBuild = document.getElementById('title__build__form');
let wrapperForm = document.getElementById('wrapper__form');
let divStorage = undefined;
function checkedLocalStorage() {
    let HTMLcodeForm = localStorage.getItem('HTMLform');
    if (HTMLcodeForm) {
        wrapperForm.classList.add('checked');
        buildFormButton.style.display = 'none';
        titleFormBuild.style.display = 'none';
    }
    document.getElementById('wrapper__form').innerHTML = HTMLcodeForm;
}
checkedLocalStorage();
buildFormButton.addEventListener('click', buildForm);
buildFormButton.addEventListener('touchstart', buildForm);
const urlForm = "https://gist.githubusercontent.com/AliakseiMalinouski/23f7443609ddb9478ffc9782269b7ddd/raw/7a0ef6a5501717129075d1bdba5c55210ca5135d/loadForm";
function buildForm() {
        $.ajax(urlForm,
            { type:'GET', dataType:'html',
                  success:dataLoaded, error:errorHandler }
        );
    }
    function dataLoaded(data) {
        if (data) {
            divStorage = data;
            localStorage.setItem('HTMLform', data);
            console.log(data)
            checkedLocalStorage();
            wrapperValFunc();
        }
    }
    function errorHandler(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
}
// валидация формы
function wrapperValFunc() {
    buildFormButton.style.display = 'none';
    titleFormBuild.style.display = 'none';
    let wrapForm = document.getElementById('form_1');
    let mainForm = document.getElementById('form__regestration');
    let inputFirtsName = document.getElementById('firstname');
    let inputSurName = document.getElementById('surname');
    let buttonSubmitOfMainForm = document.getElementById('submit__button');
    let containerForm = document.getElementById('container__form');
    mainForm.addEventListener('submit', function (EO) {
    EO = EO || window.event;
    if (inputFirtsName.value == '') {
        let alertError = document.createElement('span');
        alertError.textContent = 'Ошибка';
        alertError.style.color = 'red';
        alertError.style.position = 'absolute';
        alertError.style.right = '450px';
        alertError.style.top = '170px';
        alertError.style.transition = '1s';
        containerForm.appendChild(alertError);
        EO.preventDefault();
    }
    if (inputSurName.value == '') {
        let alertError = document.createElement('span');
        alertError.textContent = 'Ошибка';
        alertError.style.color = 'red';
        alertError.style.position = 'absolute';
        alertError.style.right = '450px';
        alertError.style.top = '250px';
        alertError.style.transition = '1s';
        containerForm.appendChild(alertError);
        EO.preventDefault();
    }
});
inputFirtsName.addEventListener('keydown', function (EO) {
    if (['{', '}', '*', '&', '+','[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_'].includes(EO.key)) {
        EO = EO || window.event;
        EO.preventDefault();
    }
});
inputSurName.addEventListener('keydown', function (EO) {
    if (['{', '}', '*', '&', '+','[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_'].includes(EO.key)) {
        EO = EO || window.event;
        EO.preventDefault();
    }
});
inputFirtsName.addEventListener('paste', function (EO) {
    if (['{', '}', '*', '&', '+','[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_'].includes(EO.key)) {
        EO = EO || window.event;
        EO.preventDefault();
    }
});
inputSurName.addEventListener('paste', function (EO) {
    if (['{', '}', '*', '&', '+','[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_'].includes(EO.key)) {
        EO = EO || window.event;
        EO.preventDefault();
    }
});
inputFirtsName.addEventListener('blur', function (EO) {
    EO = EO || window.event;
    if (inputFirtsName.value.length > 30) {
        inputFirtsName.value = null;
        inputFirtsName.style.border = '1px solid red';
    }
    else {
        inputFirtsName.style.border = 'none';
    }
});
inputSurName.addEventListener('blur', function (EO) {
    EO = EO || window.event;
    if (inputSurName.value.length > 30) {
        inputSurName.value = null;
        inputSurName.style.border = '1px solid red';
    }
    else {
        inputSurName.style.border = 'none';
    }
});
}
// запомнить имя и фамилию пользователя
const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
let updatePassword;
const stringName='MALINOWSKI_INFO_ABOUT_USER_PIXELPACK';

function storeInfo() {
    updatePassword=Math.random();
    $.ajax( {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
            success : lockGetReady, error : errorHandler
        }
    );
}
function lockGetReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else {
        const info={
            firstname : document.getElementById('firstname').value,
            surname : document.getElementById('surname').value
        };
        $.ajax( {
                url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                data : { f : 'UPDATE', n : stringName,
                    v : JSON.stringify(info), p : updatePassword },
                success : updateReady, error : errorHandler
            }
        );
    }
}
function updateReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
}
function restoreInfo() {
    $.ajax(
        {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : stringName },
            success : readReady, error : errorHandler
        }
    );
}
function readReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else if ( callresult.result!="" ) {
        const info=JSON.parse(callresult.result);
        document.getElementById('firstname').value=info.firstname;
        document.getElementById('surname').value=info.surname;
    }
}
function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}
restoreInfo();
// загружаем руководство по библиоетке с помощью AJAX и сразу получаем наш прогресс загрузки
const urlGuide = 'https://gist.githubusercontent.com/AliakseiMalinouski/ef96e192fa90204a9b2f96fd54b383ad/raw/884b87173087f8bb28cfc096aea04de6abfd05aa/GuidePixelPACK';
let buttonCreateGuide = document.getElementById('create__guide');
let wrapperGuide = document.getElementById('wrapper__guide');
let svgProgressCircleGuide = document.getElementById('svg__progress__circle__guide');
buttonCreateGuide.addEventListener('click', delayCreateGuide);
buttonCreateGuide.addEventListener('touchstart', delayCreateGuide);
function delayCreateGuide() {
    setTimeout(createGuide, 8000);
    svgProgressCircleGuide.style.display = 'block';
    buttonCreateGuide.innerHTML = 'Идёт загрузка';
    buttonCreateGuide.style.color = 'orange';
    buttonCreateGuide.removeEventListener('click', delayCreateGuide);
    buttonCreateGuide.removeEventListener('touchstart', delayCreateGuide);
}
function createGuide() {
        $.ajax(urlGuide,
            { type:'GET', dataType:'html',
                  success:dataLoadedGuide, error:errorHandlerGuide }
    );
    svgProgressCircleGuide.style.display = 'none';
    }
    function dataLoadedGuide(data) {
        wrapperGuide.innerHTML = data;
        buttonCreateGuide.innerHTML = 'Руководство загружено';
        buttonCreateGuide.style.color = 'lime';
        buttonCreateGuide.disabled = true;
    }
    function errorHandlerGuide(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
}
// добавляем скролл после нажатия на конкретные элементы
// получаем всe наши якоря
let collectionOfAnchors = document.querySelectorAll('.scrollElement');
collectionOfAnchors.forEach(function (element) {
    element.addEventListener('click', wrapperScrollFunc);
});
// оборачиваем всё в одноу функцию, чтобы не засорять глобальную область видимости и отслеживаем нажатый якорь
function wrapperScrollFunc() {
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
    anchor.addEventListener('click', function (EO) {
    EO = EO || window.event;
    EO.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
}
wrapperScrollFunc();
// прогресс загрузки руководства
let progressCircle = document.querySelector('circle');
let radiusOfCircle = progressCircle.r.baseVal.value;
let cf = radiusOfCircle * 2 * Math.PI;
progressCircle.style.strokeDasharray = `${cf} ${cf}`;
progressCircle.style.strokeDashoffset = `${cf}`;
function setProgress(percent) {
    const distance = cf - percent / 100 * cf;
    progressCircle.style.strokeDashoffset = distance;
}
let valueProgressCircle = 0
requestAnimationFrame(function animate() {
    valueProgressCircle += 0.2;
    if (valueProgressCircle < 101 && valueProgressCircle > -1) {
        setProgress(valueProgressCircle);
    }
    if (valueProgressCircle < 101) {
        requestAnimationFrame(animate)
    }
});
// добавляем в header button-humburger
