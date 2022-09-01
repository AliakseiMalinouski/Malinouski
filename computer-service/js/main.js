// modalWindow
const modal = $.modal;
// input type text
let search = document.getElementById('search');
let magnifier = document.getElementById('magnifier');
search.addEventListener('focus', function () {
    search.style.backgroundColor = '#FFFACD';
    search.style.transform = 'scale(1.05)';
    search.style.transition = '1s';
    search.style.left = '669px';
});
search.addEventListener('blur', function () {
    search.style.backgroundColor = 'white';
    search.style.transform = '';
    magnifier.style.left = '640px';
});
// slider
let distance = 0;
const SliderLine = document.querySelector('.slider-line');
document.querySelector('.next').addEventListener('click', function () {
    distance = distance + 922;
    if (distance > 2466) {
        distance = 0;
    }
    SliderLine.style.left = -distance + 'px';
});
document.querySelector('.prev').addEventListener('click', function () {
    distance = distance - 922;
    if (distance < 0 ) {
        distance = 1846;
    }
    SliderLine.style.left = -distance + 'px';
});
// catalog open menu
let openCatalog = document.querySelector('.open-menu-catalog');
let menuCatalog = document.getElementById('catalog_menu');
let closeCatalog = document.getElementById('close-menu-catalog');
openCatalog.addEventListener('click', function ($) {
    menuCatalog.classList.add('active_modal');
    openCatalog.classList.add('disabled');
    closeCatalog.classList.add('active_modal');
});
closeCatalog.addEventListener('click', function ($) {
    closeCatalog.classList.remove('active_modal');
    openCatalog.classList.remove('disabled');
    menuCatalog.classList.remove('active_modal');
});
document.querySelector('.call').addEventListener('click', function ($) {
    document.querySelector('.modal_call').classList.add('active_modal');
    document.getElementById('body').style.overflowY = 'hidden';
    document.querySelector('.header').classList.add('active');
    document.querySelector('.categories').classList.add('active');
    document.querySelector('.catalog_slider').classList.add('active');
    document.querySelector('.dignities').classList.add('active');
    document.querySelector('.banners').classList.add('active');
    document.querySelector('.partners').classList.add('active');
    document.querySelector('.accessories').classList.add('active');
});
document.querySelector('.cross-close').addEventListener('click', function ($) {
    document.querySelector('.modal_call').classList.remove('active_modal');
    document.getElementById('body').style.overflowY = '';
    document.querySelector('.header').classList.remove('active');
    document.querySelector('.header').classList.remove('active');
    document.querySelector('.categories').classList.remove('active');;
    document.querySelector('.catalog_slider').classList.remove('active');
    document.querySelector('.dignities').classList.remove('active');
    document.querySelector('.banners').classList.remove('active');
    document.querySelector('.partners').classList.remove('active');
    document.querySelector('.accessories').classList.remove('active');
});
document.querySelector('.consumables_click').addEventListener('click', function ($) {
    document.getElementById('consumables').classList.add('active_modal');
    document.getElementById('description').classList.add('disabled');
});
document.querySelector('.close-consumables-block').addEventListener('click', function ($) {
    document.getElementById('consumables').classList.remove('active_modal');
    document.getElementById('description').classList.remove('disabled');
});
// search
document.querySelector('#search').oninput = function () {
    let self = this.value.trim();
    let variants = document.querySelectorAll('.variants li');
    if (self != '') {
        variants.forEach(elem => {
            if (elem.innerText.search(self) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
                let strS = elem.textContent;
                elem.innerHTML = addColor(strS, elem.innerText.search(self), self.length);
            }
        });
    }
    else {
        variants.forEach(elem => {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        });
    }
}

function addColor(str,position,sim) {
    return str.slice(0, position) + '<mark>' + str.slice(position, position + sim) + '</mark>' + str.slice(position + sim);
}
// scroll to items
let computerTech = document.getElementById('computer_tech');
let accessoriesComputer = document.getElementById('acc_block3_nth3');
computerTech.addEventListener('click', scrollToComputersItems); 
function scrollToComputersItems(EO) {
    EO = EO || window.event;
    window.scrollTo(0, 2900);
    accessoriesComputer.classList.add('animation-after-scroll');
}
let laptops = document.getElementById('laptops');
let accessoriesLaptops = document.getElementById('acc_block_laptops');
laptops.addEventListener('click', scrollToLaptopsItems);
function scrollToLaptopsItems(EO) {
    EO = EO || window.event;
    window.scrollTo(0, 2700);
    accessoriesLaptops.classList.add('animation-after-scroll');
}
let printers = document.getElementById('printers');
let accessoriesPrinters = document.getElementById('acc_block_printers');
printers.addEventListener('click', scrollToPrintersItems);
function scrollToPrintersItems(EO) {
    EO = EO || window.event;
    window.scrollTo(0, 2700);
    accessoriesPrinters.classList.add('animation-after-scroll');
}
// form + validation
let formContainer = document.querySelector('#container-form');
let formArray = [
    { label: "Введите ваше имя", kind: "longtext", name: "name" },
    { label: "Введите ваш номер телефона", kind: "shorttext", name: "phonenumber" },
    { label: "Введите вашу электронную почту:", kind: "contact", name: "e-mail" },
];
let spanError = document.getElementById('span-error1');
let spanErrorNumber = document.getElementById('span-error2');
let spanErrorEmail = document.getElementById('span-error3');
function createForm(array, form) {
    const formTag = document.forms.info;
    let tag;
    let delArr = ['{', '}', '*', '&', '+', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '@', '!', '`', '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
    array.forEach((elem) => {
        if (elem.kind == 'longtext') {
            let label = document.createElement('label');
            label.innerHTML = elem.label;
            label.classList.add('label');
            form.appendChild(label);
            tag = document.createElement('input');
            tag.setAttribute('type', 'text');
            tag.name = elem.name;
            tag.setAttribute('placeholder', 'Имя*');
            tag.setAttribute('maxlength', '20');
            tag.setAttribute('id', 'tag');
            tag.classList.add('input_style');
            tag.classList.add('lower');
            form.appendChild(tag);
            tag.addEventListener('keydown', (EO) => {
                if (['{', '}', '*', '&', '+','[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(EO.key)) {
                EO = EO || window.event;
                EO.preventDefault();
            } 
            });
            document.getElementById('tag').addEventListener('blur', function (EO) {
                if (this.value == '') {
                    modal().open();
                    spanError.classList.add('active_form_class');
                    EO.preventDefault();
                }
                delArr.forEach((element) => {
                    if (this.value.includes(element)) {
                        alert('В строке с именем находятся недопустимые символы, пожалуйста, повторите попытку');
                        spanError.classList.add('active_form_class');
                        this.value = null;
                        EO.preventDefault();
                    }
                });
                if (this.value) {
                    spanError.classList.remove('active_form_class');
                }
            });
        }
        if (elem.kind == 'shorttext') {
            let label = document.createElement('label');
            label.innerHTML = elem.label;
            label.classList.add('label');
            form.appendChild(label);
            tag = document.createElement('input');
            tag.setAttribute('type', 'text');
            tag.setAttribute('placeholder', '+7 --- --- -- --*');
            tag.setAttribute('maxlength', '12');
            tag.name = elem.name;
            tag.classList.add('input_style');
            form.appendChild(tag);
            tag.addEventListener('keydown', function (EO) {
                EO = EO || window.event;
                if (['-', 'e', 'E', '{', '}', '*', '&', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ].includes(EO.key)) {
                    EO.preventDefault();
                }
            });
            tag.addEventListener('paste', function (EO) {
                EO = EO || window.event;
                if (['-', 'e', 'E', '{', '}', '*', '&','[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] .includes(EO.key)) {
                    EO.preventDefault();
                }
            })
        }
        if (elem.kind == 'contact') {
            let label = document.createElement('label');
            label.innerHTML = elem.label;
            label.classList.add('label');
            form.appendChild(label);
            tag = document.createElement('input');
            tag.setAttribute('type', 'email');
            tag.setAttribute('placeholder', '*e-mail');
            tag.name = elem.name;
            tag.classList.add('input_style');
            form.appendChild(tag);
            tag.addEventListener('blur', function (EO) {
                if (this.value == '') {
                    modal().open();
                    spanErrorEmail.classList.add('active_form_class');
                    EO.preventDefault();
                }
                if (this.value.length > 50) {
                    modal().open();
                    this.value = null;
                }
            });
            const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
            function onInput() {
                if (isEmailValid(tag.value)) {
                spanErrorEmail.classList.remove('active_form_class');
            } else {
                spanErrorEmail.classList.add('active_form_class');
            }
            }
            tag.addEventListener('input', onInput);
            function isEmailValid(value) {
                return emailReg.test(value);
            }
        }
    });
}
createForm(formArray, document.forms.form1);
let mainForm = document.getElementById('form1');
for (let i = 0; i < mainForm.length; i++) {
    mainForm.addEventListener('submit', function (EO) {
        EO = EO || window.event;
        if(mainForm[i].value == '') modal().open();
        if (mainForm[1].value === '') {
            spanError.classList.add('active_form_class');
            EO.preventDefault();
        }
        if (mainForm[2].value == '') {
            spanErrorNumber.classList.add('active_form_class');
            EO.preventDefault();
        }
        if (mainForm[3].value == '') {
            spanErrorEmail.classList.add('active_form_class');
            EO.preventDefault();
        }
        if (mainForm[1].value && mainForm[2].value && mainForm[3].value) {
            console.log("ggg")
        }
    });
}

// feedback form
const feedbackForm = document.getElementById('called_form');
const modalFeedbackForm = document.querySelector('modal-call');
const inputNameFeedbackForm = document.getElementById('inputNameFeedbackForm');
const inputNumberFeedbackForm = document.getElementById('inputNumberFeedbackForm');
let arrayFeedbackFormElements = [];
arrayFeedbackFormElements.push(inputNameFeedbackForm);
arrayFeedbackFormElements.push(inputNumberFeedbackForm);
const spanErrorF = document.getElementById('error_1');
const spanErrorF2 = document.getElementById('error_2');
feedbackForm.addEventListener('submit', showSubmitAlert);
function showSubmitAlert(EO) {
    EO = EO || window.event;
    for (let i = 0; i < arrayFeedbackFormElements.length; i++) {
        if (arrayFeedbackFormElements[i].value == '') {
            modal().open();
            spanErrorF.textContent = 'Ошибка';
            spanErrorF2.textContent = 'Ошибка';
            EO.preventDefault();
        }
    }
}
inputNameFeedbackForm.addEventListener('keydown', checkSymbolsInputNameAtKeydown);
function checkSymbolsInputNameAtKeydown(EO) {
    EO = EO || window.event;
    if (['-', 'e', 'E', '{', '}', '*', '&', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ].includes(EO.key)) {
        EO.preventDefault();
    }
}
inputNameFeedbackForm.addEventListener('paste', checkSymbolsInputNameAtPaste);
function checkSymbolsInputNameAtPaste(EO) {
    EO = EO || window.event;
    if (['-', 'e', 'E', '{', '}', '*', '&', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ].includes(EO.key)) {
        EO.preventDefault();
    }
}
inputNumberFeedbackForm.addEventListener('keydown', clearBannedSymbols);
function clearBannedSymbols(EO) {
    EO = EO || window.event;
    if (['-', 'e', 'E', '{', '}', '*', '&', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я', 'ы' ].includes(EO.key)) {
        EO.preventDefault();
    }
}
inputNumberFeedbackForm.addEventListener('paste', checkSymbolsInputNumberAtPaste);
function checkSymbolsInputNumberAtPaste(EO) {
    EO = EO || window.event;
    if (['-', 'e', 'E', '{', '}', '*', '&', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '@', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я', 'ы' ].includes(EO.key)) {
        EO.preventDefault();
    }
}
inputNameFeedbackForm.addEventListener('blur', checkSymbolsAfterBlurInputName);
function checkSymbolsAfterBlurInputName(EO) {
    EO = EO || window.event;
    let numbersAndSymbols = '1234567890?!{}[]~!@#$%^&*()-=+/|`';
    let arrayNumbersAndSymbols = [...numbersAndSymbols].forEach(function (elem) {
        if (inputNameFeedbackForm.value.includes(elem)) {
            modal().open();
            inputNameFeedbackForm.value = null;
            spanErrorF.textContent = 'Ошибка';
            EO.preventDefault();
        }
        if (inputNameFeedbackForm.value == '') {
            modal().open();
            spanErrorF.textContent = 'Поле не может быть пустым';
            EO.preventDefault();
        }
        if (inputNameFeedbackForm.value) {
            spanErrorF.textContent = '';
        }
    });
}
inputNumberFeedbackForm.addEventListener('blur', checkSymbolsAfterBlurNumber);
function checkSymbolsAfterBlurNumber(EO) {
    EO = EO || window.event;
    let letters = 'qwertyuiopasdfghjklzxcvbnmёйцукенгшщзфывапролдячсмитьъхжэ';
    let arrayLetters = [...letters].forEach(function (elem) {
        if (inputNameFeedbackForm.value.includes(elem)) {
            modal().open();
            inputNumberFeedbackForm.value = null;
            spanErrorF2.textContent = 'Ошибка';
            EO.preventDefault();
        }
        if (inputNumberFeedbackForm.value == '') {
            modal().open();
            spanErrorF2.textContent = 'Ошибка';
            EO.preventDefault();
        }
        if (inputNumberFeedbackForm.value) {
            spanErrorF2.textContent = '';
        }
    });
}
// sticky block
let amountLiked = 0;
let amountLikedSpan = document.getElementById('amount-liked');
let likeButtonConsumables = document.getElementById('like_button_consumables');
let consumables = document.getElementById('consumables');
likeButtonConsumables.addEventListener('click', addAmountForLiked);
function addAmountForLiked(EO) {
    EO = EO || window.event;
    amountLiked++;
    amountLikedSpan.innerHTML = amountLiked;
    setTimeout(() => {
        likeButtonConsumables.classList.add('pointer');
    }, 0);
    let like = document.createElement('img');
    like.setAttribute('src', './img/heart2.jpg');
    like.style.width = '32px';
    like.style.height = '29px';
    like.style.position = 'absolute';
    like.style.top = '23px';
    like.style.left = '398px';
    consumables.appendChild(like);
}


