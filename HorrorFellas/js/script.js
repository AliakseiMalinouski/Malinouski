"use strict"
let nextButtonSlider = document.querySelector('.Next');
let previousButtonSlider = document.querySelector('.Previous');
let WrapperSlides = document.querySelector('.WrapperSlides');
let WrapperButtons = document.querySelector('.WrapperButtons');
let distance = 0;
const mediaQuery1 = window.matchMedia('(min-width: 960px)');
if (mediaQuery1.matches) {
    nextButtonSlider.addEventListener('click', function (EO) {
    EO = EO || window.event;
    distance = distance + 1140;
    if (distance >= 2280) {
        distance = 0;
    }
    WrapperSlides.style.left = -distance + 'px';
    nextButtonSlider.classList.add('focus');
    blood.createBlood();
    setTimeout(function () {
        nextButtonSlider.classList.remove('focus');
    }, 500);
    nextButtonSlider.style.backgroundColor = '#CE0101';
    if (previousButtonSlider.classList !== 'focus') {
        blood.destroyBlood1();
        previousButtonSlider.style.backgroundColor = '#FD5252';
    }
});
previousButtonSlider.addEventListener('click', function (EO) {
    EO = EO || window.event;
    distance = distance - 1140;
    if (distance < 0) {
        distance = 1140;
    }
    WrapperSlides.style.left = -distance + 'px';
    previousButtonSlider.classList.add('focus');
    blood.createBlood1();
    setTimeout(function () {
        previousButtonSlider.classList.remove('focus');
    }, 500);
    previousButtonSlider.style.backgroundColor = '#CE0101';
    if (nextButtonSlider.classList !== 'focus') {
        blood.destroyBlood();
        nextButtonSlider.style.backgroundColor = '#FD5252';
    }
});
}
const mediaQuery = window.matchMedia('(max-width: 900px)');
const mediaQuery4 = window.matchMedia('(min-width: 560px)');
if (mediaQuery.matches && mediaQuery4.matches) {
    nextButtonSlider.addEventListener('click', function (EO) {
    EO = EO || window.event;
    distance = distance + 470;
    if (distance > 1790) {
        distance = 0;
    }
    WrapperSlides.style.left = -distance + 'px';
    nextButtonSlider.classList.add('focus');
    blood.createBlood();
    setTimeout(function () {
        nextButtonSlider.classList.remove('focus');
    }, 500);
    nextButtonSlider.style.backgroundColor = '#CE0101';
    if (previousButtonSlider.classList !== 'focus') {
        blood.destroyBlood1();
        previousButtonSlider.style.backgroundColor = '#FD5252';
    }
});
previousButtonSlider.addEventListener('click', function (EO) {
    EO = EO || window.event;
    distance = distance - 350;
    if (distance < 0) {
        distance = 1510;
    }
    WrapperSlides.style.left = -distance + 'px';
    previousButtonSlider.classList.add('focus');
    blood.createBlood1();
    setTimeout(function () {
        previousButtonSlider.classList.remove('focus');
    }, 500);
    previousButtonSlider.style.backgroundColor = '#CE0101';
    if (nextButtonSlider.classList !== 'focus') {
        blood.destroyBlood();
        nextButtonSlider.style.backgroundColor = '#FD5252';
    }
});
}
const mediaQuery3 = window.matchMedia('(max-width: 560px)') 
if (mediaQuery3.matches) {
    nextButtonSlider.addEventListener('touchstart', function (EO) {
    EO = EO || window.event;
    distance = distance + 350;
    if (distance > 1790) {
        distance = 0;
    }
    WrapperSlides.style.left = -distance + 'px';
    nextButtonSlider.classList.add('focus');
    blood.createBlood();
    setTimeout(function () {
        nextButtonSlider.classList.remove('focus');
    }, 500);
    nextButtonSlider.style.backgroundColor = '#CE0101';
    if (previousButtonSlider.classList !== 'focus') {
        blood.destroyBlood1();
        previousButtonSlider.style.backgroundColor = '#FD5252';
    }
});
previousButtonSlider.addEventListener('touchstart', function (EO) {
    EO = EO || window.event;
    distance = distance - 350;
    if (distance < 0) {
        distance = 1750;
    }
    WrapperSlides.style.left = -distance + 'px';
    previousButtonSlider.classList.add('focus');
    blood.createBlood1();
    setTimeout(function () {
        previousButtonSlider.classList.remove('focus');
    }, 500);
    previousButtonSlider.style.backgroundColor = '#CE0101';
    if (nextButtonSlider.classList !== 'focus') {
        blood.destroyBlood();
        nextButtonSlider.style.backgroundColor = '#FD5252';
    }
});
}
class Blood  {
    constructor() {
        this.blood = document.createElement('img');
        this.blood1 = document.createElement('img');
        this.wrapperButtons = document.querySelector('.WrapperButtons');
    }
    createBlood() {
        this.blood.setAttribute('src', './img/blood.png');
        this.blood.classList.add('blood');
        this.blood.classList.remove('disable');
        this.wrapperButtons.appendChild(this.blood);
    }
    createBlood1() {
        this.blood1.setAttribute('src', './img/blood1.png');
        this.blood1.classList.add('blood1');
        this.blood1.classList.remove('disable');
        this.wrapperButtons.appendChild(this.blood1);
    }
    destroyBlood() {
        this.blood.classList.add('disable');
    }
    destroyBlood1() {
        this.blood1.classList.add('disable');
    }
}
let blood = new Blood();
let firstParagraphOfQuestionsBlock = document.querySelector('.FirstParagraph');
let firstPlus = document.querySelector('.FirstPlus');
firstPlus.addEventListener('click', function (EO) {
    EO = EO || window.event;
    firstParagraphOfQuestionsBlock.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci provident, possimus sunt dolorum rerum mollitia iste velit culpa quae nostrum aspernatur qui harum placeat odio vero aliquid illo quidem!';
    firstParagraphOfQuestionsBlock.classList.add('FP');
    firstPlus.classList.add('disable');
});
let secondPlus = document.querySelector('.SecondPlus');
let secondParagraphOfQuestionBlock = document.querySelector('.SecondQuestion');
secondPlus.addEventListener('click', function (EO) {
    EO = EO || window.event;
    secondParagraphOfQuestionBlock.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci provident, possimus sunt dolorum rerum mollitia iste velit culpa quae nostrum aspernatur qui harum placeat odio vero aliquid illo quidem!';
    secondParagraphOfQuestionBlock.classList.add('FP');
    secondPlus.classList.add('disable');
});
let thirdPlus = document.querySelector('.ThirdPlus');
let thirdParagraphOfQuestionBlock = document.querySelector('.ThirdQuestion');
thirdPlus.addEventListener('click', function (EO) {
    EO = EO || window.event;
    thirdParagraphOfQuestionBlock.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci provident, possimus sunt dolorum rerum mollitia iste velit culpa quae nostrum aspernatur qui harum placeat odio vero aliquid illo quidem!';
    thirdParagraphOfQuestionBlock.classList.add('FP');
    thirdPlus.classList.add('disable');
});
let fourthPlus = document.querySelector('.FourthPlus');
let fourthParagraphOfQuestionBlock = document.querySelector('.FourthQuestion');
fourthPlus.addEventListener('click', function (EO) {
    EO = EO || window.event;
    fourthParagraphOfQuestionBlock.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci provident, possimus sunt dolorum rerum mollitia iste velit culpa quae nostrum aspernatur qui harum placeat odio vero aliquid illo quidem!';
    fourthParagraphOfQuestionBlock.classList.add('FP');
    fourthPlus.classList.add('disable');
});
let fifthPlus = document.querySelector('.FifthPlus');
let fifthParagraphOfQuestionBlock = document.querySelector('.FifthQuestion');
fifthPlus.addEventListener('click', function (EO) {
    EO = EO || window.event;
    fifthParagraphOfQuestionBlock.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci provident, possimus sunt dolorum rerum mollitia iste velit culpa quae nostrum aspernatur qui harum placeat odio vero aliquid illo quidem!';
    fifthParagraphOfQuestionBlock.classList.add('FP');
    fifthPlus.classList.add('disable');
});
let sixthPlus = document.querySelector('.SixthPlus');
let sixthParagraphOfQuestionBlock = document.querySelector('.SixthQuestion');
sixthPlus.addEventListener('click', function (EO) {
    EO = EO || window.event;
    sixthParagraphOfQuestionBlock.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci provident, possimus sunt dolorum rerum mollitia iste velit culpa quae nostrum aspernatur qui harum placeat odio vero aliquid illo quidem!';
    sixthParagraphOfQuestionBlock.classList.add('FP');
    sixthPlus.classList.add('disable');
});
let imageTwitch = document.querySelector('.ImageTwitch');
let scCon = document.getElementById('container__screen');
let hint = document.createElement('span');
imageTwitch.addEventListener('mouseenter', function (EO) {
    EO = EO || window.event;
    hint.textContent = 'Click to get closer';
    hint.classList.add('hintImageTwtich');
    scCon.append(hint);
    if (imageTwitch.classList == 'scale') {
        hint.classList.add('disable');
    }
    hint.addEventListener('mouseenter', function (EO) {
        EO = EO || window.event;
        hint.style.display = 'none';
    });
});
imageTwitch.addEventListener('mouseleave', function (EO) {
    EO = EO || window.event;
    hint.classList.add('disable');
});
imageTwitch.addEventListener('click', function (EO) {
    EO = EO || window.event;
    imageTwitch.classList.add('scale');
    hint.classList.add('disable');
    let containerImage = document.getElementById('scrollToMap');
    containerImage.style.transition = '1s';
    containerImage.style.paddingTop = '650px';
});
let collectionOfAnchors = document.querySelectorAll('.scrollElement');
collectionOfAnchors.forEach(function (element) {
    element.addEventListener('click', wrapperScrollFunc);
});
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
const urlText = 'https://gist.githubusercontent.com/AliakseiMalinouski/632811e13c8da08bc41a77eb5050f76e/raw/605a375f29929813ccb21ca6fbe91100eb30d4cb/HorrorFellasGist';
let textWrapper = document.querySelector('.Text');
let buttonUpload = document.querySelector('.ButtonUpload');
buttonUpload.addEventListener('click', createText);
function createText() {
    $.ajax(urlText,
        {
            type: 'GET', dataType: 'text',
            success: dataLoadedGuide, error: errorHandlerGuide
        }
    );
    function dataLoadedGuide(data) {
        textWrapper.textContent = data;
        buttonUpload.innerHTML = 'Success';
        buttonUpload.disabled = true;
        buttonUpload.style.color = 'lime';
    }
    function errorHandlerGuide(jqXHR, statusStr, errorStr) {
        alert(statusStr + ' ' + errorStr);
    }
}
let buttonHeaderMenuOpen = document.createElement('img');
let closeMenu = document.createElement('button');
closeMenu.textContent = 'Close';
closeMenu.classList.add('close');
if (mediaQuery3.matches) {
    buttonHeaderMenuOpen.setAttribute('src', './img/ci_menu-alt-01.png');
    buttonHeaderMenuOpen.setAttribute('alt', 'Button');
    buttonHeaderMenuOpen.style.position = 'absolute';
    buttonHeaderMenuOpen.classList.add('open__hamburger__menu');
    document.getElementById('container__header').appendChild(buttonHeaderMenuOpen);
}
buttonHeaderMenuOpen.addEventListener('touchstart', function (EO) {
    EO = EO || window.event;
    headerMenu.createModal();
});
closeMenu.addEventListener('touchstart', (EO) => headerMenu.destroyModal());
let liText = ['Home', 'Fusion Preview', 'Roadmap', 'Rarity Ranking', 'Attributes', 'Mint Stats', 'FAQ'];
class Menu {
    constructor() {
        this.modal = document.createElement('div');
        this.ul = document.createElement('ul');
        this.li1 = document.createElement('li');
        this.li2 = document.createElement('li');
        this.li3 = document.createElement('li');
        this.li4 = document.createElement('li');
        this.li5 = document.createElement('li');
        this.li6 = document.createElement('li');
        this.li7 = document.createElement('li');
        this.container = document.getElementById('container__header');
        this.seeMap = document.querySelector('.see__roadmap');
        this.body = document.body;
        this.mapbutton = document.querySelector('.ButtonMap');;
    }
    createModal() {
        this.modal.classList.remove('disable');
        this.li1.textContent = liText[0];
        this.li2.textContent = liText[1];
        this.li3.textContent = liText[2];
        this.li4.textContent = liText[3];
        this.li5.textContent = liText[4];
        this.li6.textContent = liText[5];
        this.li7.textContent = liText[6];
        this.ul.appendChild(this.li1);
        this.ul.appendChild(this.li2);
        this.ul.appendChild(this.li3);
        this.ul.appendChild(this.li4);
        this.ul.appendChild(this.li5);
        this.ul.appendChild(this.li6);
        this.ul.appendChild(this.li7);
        this.modal.appendChild(this.ul);
        this.modal.classList.add('menu');
        this.modal.appendChild(closeMenu);
        this.seeMap.style.transition = '1.3s';
        this.seeMap.style.paddingTop = '455px';
        this.container.appendChild(this.modal);
        this.body.style.overflow = 'hidden';
        this.mapbutton.style.pointerEvents = 'none';
    }
    destroyModal() {
        this.modal.classList.add('disable');
        this.seeMap.style.transition = '1.3s';
        this.seeMap.style.paddingTop = '48px';
        this.body.style.overflow = '';
        this.mapbutton.style.pointerEvents = '';
    }
}
let headerMenu = new Menu();