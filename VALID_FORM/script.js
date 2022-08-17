"use strict"
let mainForm = document.getElementById('form');
let spanError = document.getElementById('error');
let btn = document.getElementById("btn");
const developers = document.getElementById('developers');
const siteName = document.getElementById('sitename');
const siteAdress = document.getElementById('siteadress');
const start = document.getElementById('startwork');
const visit = document.getElementById('visit');
const email = document.getElementById('emailadress');
const catalog = document.getElementById('catalog');
const radioButton1 = document.getElementById('rad1');
const radioButton2 = document.getElementById('rad2');
const radioButton3 = document.getElementById('rad3');
const checkbox = document.getElementById('check');
const textArea = document.getElementById('about');
const submitButton = document.getElementById('about');
const error0 = document.getElementById('error0');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');
const error5 = document.getElementById('error5');
const error6 = document.getElementById('error6');
const error7 = document.getElementById('error7');
const error8 = document.getElementById('error8');
const error9 = document.getElementById("error9");
let arrayRadioButtons = [];
arrayRadioButtons.push(radioButton1);
arrayRadioButtons.push(radioButton2);
arrayRadioButtons.push(radioButton3);
let arraySpanError = [];
arraySpanError.push(error0);
arraySpanError.push(error1);
arraySpanError.push(error2);
arraySpanError.push(error3);
arraySpanError.push(error4);
arraySpanError.push(error5);
arraySpanError.push(error6);
arraySpanError.push(error7);
arraySpanError.push(error8);
arraySpanError.push(error9);
let arrayElementsForm = [];
arrayElementsForm.push(developers);
arrayElementsForm.push(siteName);
arrayElementsForm.push(siteAdress);
arrayElementsForm.push(start);
arrayElementsForm.push(visit);
arrayElementsForm.push(email);
arrayElementsForm.push(catalog);
arrayElementsForm.push(radioButton1);
arrayElementsForm.push(radioButton2);
arrayElementsForm.push(radioButton3);
arrayElementsForm.push(checkbox);
arrayElementsForm.push(textArea);
mainForm.addEventListener('submit', function (event) {
    for (let i = 0; i < arrayElementsForm.length; i++) {
        if (arrayElementsForm[0].value) {
            error0.classList.add('disable');
        }
        if (arrayElementsForm[1].value) {
            error1.classList.add('disable');
        }
        if (arrayElementsForm[2].value) {
            error2.classList.add('disable');
        }
        if (arrayElementsForm[3].value) {
            error3.classList.add('disable');
        }
        if (arrayElementsForm[4].value) {
            error4.classList.add('disable');
        }
        if (arrayElementsForm[5].value) {
            error5.classList.add('disable');
        }
        if (arrayElementsForm[6].value == '1' || arrayElementsForm[6].value == '2' || arrayElementsForm[6].value == '3') {
            error9.classList.add('disable');
        }
        for (let rad of arrayRadioButtons) {
            if (rad.checked) {
                error6.classList.add('disable');
            }
        }
        if (arrayElementsForm[10].checked) {
            error7.classList.add('disable');
        }
        if (arrayElementsForm[11].value) {
            error8.classList.add('disable');
        }
        if (arrayElementsForm[i].value == '') {
            alert('Произошла ошибка при вводе данных, пожалуйста, повторите попытку');

            arraySpanError.forEach((elem) => {
                btn.classList.remove('btn')
                btn.classList.add('block');
                btn.style.marginTop = '15px';
                elem.className += 'red';
            });
            event.preventDefault();
            break;
        }
    }
    btn.addEventListener('click', function (e) {
        error0.classList.remove('red')
        error0.style.display = 'none';
        error1.classList.remove('red')
        error1.style.display = 'none';
        error2.classList.remove('red')
        error2.style.display = 'none';
        error3.classList.remove('red')
        error3.style.display = 'none';
        error4.classList.remove('red')
        error4.style.display = 'none';
        error5.classList.remove('red')
        error5.style.display = 'none';
        error6.classList.remove('red')
        error6.style.display = 'none';
        error7.classList.remove('red')
        error7.style.display = 'none';
        error8.classList.remove('red')
        error8.style.display = 'none';
        error9.classList.remove('red')
        error9.style.display = 'none';
});
});
// textarea
const maxLength = textArea.getAttribute('maxlength');
const cnt = document.getElementById('cnt');
cnt.innerHTML = 'Осталось символов: ' +  maxLength;
textArea.addEventListener('keyup', counter);
textArea.addEventListener('keyup', function (EO) {
    if (EO.repeat) {
        counter();
    }
});
function counter() {
    const results = maxLength - textArea.value.length;
    cnt.innerHTML = 'Осталось символов: ' + results;
}
// developers
let arrayDeleteSymbolsDevelopers = ['{', '}', '/', '*', '&', '-', '+', '.', ];
developers.addEventListener('blur', function (EO) {
    EO = EO || window.event;
    if (developers.value == '') {
        error0.style.display = 'inline';
        error0.style.color = 'red';
        error0.style.fontStyle = 'italic';
        error0.style.fontSize = '24px';
        error0.style.marginLeft = '15px';
    }
    for (let i = 0; i < arrayDeleteSymbolsDevelopers.length; i++) {
        if (developers.value.includes(arrayDeleteSymbolsDevelopers[i])) {
            error0.style.display = 'inline';
            error0.style.color = 'red';
            error0.style.fontStyle = 'italic';
            error0.style.fontSize = '24px';
            error0.style.marginLeft = '15px';
            error0.innerHTML = 'Ошибка, недопустимые символы';
            developers.value = null;
        }
    }
    if (developers.value) {
        developers.classList.add('gd');
        developers.disabled = true;
        error0.style.display = 'none';
    }
});
