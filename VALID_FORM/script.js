"use strict"
let mainForm = document.getElementById('form');
let spanError = document.getElementById('error');
let btn = document.getElementById("btn");
let btn1 = document.getElementById('btn1');
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
            arrayElementsForm[i].focus();
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
textArea.addEventListener('keydown', function (EO) {
    if (EO.repeat) {
        counter();
    }
});
function counter() {
    const results = maxLength - textArea.value.length;
    if (results < 39 && results > 30) {
        cnt.classList.add('colorGreen');
        cnt.innerHTML = 'Осталось символов: ' + results;
    }
    if (results < 30 && results > 20) {
        cnt.classList.add('colorYellowGreen');
    }
    if (results < 20 && results > 10) {
        cnt.classList.add('colorOrange');
    }
    if (results < 10 && results > 5) {
        cnt.classList.add('colorOrangeRed');
    }
    if (results < 5 && results > 0) {
        cnt.classList.add('colorRed');
    }
    if (results == 40) {
        cnt.classList.add('colorBlack');
    }
    cnt.innerHTML = 'Осталось символов: ' + results;
}
// developers
let arrayDeleteSymbolsDevelopers = ['{', '}', '/', '*', '&', '-', '+', '.', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', ':'];
developers.classList.add('lower');
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
        error0.innerHTML = '';
        error0.style.display = 'none';
        if (developers.value.length < 3) {
            error0.classList.add('e');
            developers.classList.remove('gd');
            developers.disabled = false;
            error0.innerHTML = 'Возможно, вы что-то забыли указать, длина строки слишком мала';
        }
        if (developers.value.length > 20) {
            error0.classList.add('e');
            developers.classList.remove('gd');
            developers.disabled = false;
            developers.value = null;
            error0.innerHTML = 'Был превышен лимит символов в строке(20)';
        }
        if (developers.value && developers.value.length >= 3) {
            btn1.classList.remove('btn');
        }
    }
});
developers.addEventListener('keydown', function (EO) {
   if (['{', '}', '/', '*', '&', '-', '+', '.', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', ':'].includes(EO.key)) {
        EO.preventDefault();
    }  
});
let arrayDeleteSymbolsSiteName = [...arrayDeleteSymbolsDevelopers];
siteName.classList.add('lower');
siteName.addEventListener('blur', function (EO) {
    EO = EO || window.event;
    if (siteName.value == '') {
        error1.style.display = 'inline';
        error1.style.color = 'red';
        error1.style.fontStyle = 'italic';
        error1.style.fontSize = '24px';
        error1.style.marginLeft = '15px';
    }
    for (let i = 0; i < arrayDeleteSymbolsSiteName.length; i++) {
        if (siteName.value.includes(arrayDeleteSymbolsSiteName[i])) {
            error1.style.display = 'inline';
            error1.style.color = 'red';
            error1.style.fontStyle = 'italic';
            error1.style.fontSize = '24px';
            error1.style.marginLeft = '15px';
            error1.innerHTML = 'Ошибка, недопустимые символы';
            siteName.value = null;
        }
    }
    if (siteName.value) {
        siteName.classList.add('gd');
        siteName.disabled = true;
        error1.innerHTML = '';
        error1.style.display = 'none';
        if (siteName.value.length < 3) {
            error1.classList.add('e');
            siteName.classList.remove('gd');
            siteName.disabled = false;
            error1.innerHTML = 'Возможно, вы что-то забыли указать, длина строки слишком мала';
        }
        if (siteName.value.length > 20) {
            error1.classList.add('e');
            siteName.classList.remove('gd');
            siteName.disabled = false;
            siteName.value = null;
            error1.innerHTML = 'Был превышен лимит символов в строке(20)';
        }
    }
});
siteName.addEventListener('keydown', function (EO) {
   if (['{', '}', '/', '*', '&', '-', '+', '.', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', ':'].includes(EO.key)) {
        EO.preventDefault();
    }  
});
let arrayDeleteSymbolsUrl = ['{', '}', '*', '&', '+', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~'];
siteAdress.classList.add('lower');
siteAdress.addEventListener('blur', function (EO) {
    EO = EO || window.event;
    if (siteAdress.value == '') {
        error2.style.display = 'inline';
        error2.style.color = 'red';
        error2.style.fontStyle = 'italic';
        error2.style.fontSize = '24px';
        error2.style.marginLeft = '15px';
    }
    arrayDeleteSymbolsUrl.forEach((elem) => {
        if (siteAdress.value.includes(elem)) {
            error2.style.display = 'inline';
            error2.style.color = 'red';
            error2.style.fontStyle = 'italic';
            error2.style.fontSize = '24px';
            error2.style.marginLeft = '15px';
            error2.innerHTML = 'Ошибка, недопустимые символы';
            siteAdress.value = null;
        }
    });
    if (siteAdress.value) {
        siteAdress.classList.add('gd');
        siteAdress.disabled = true;
        error2.innerHTML = '';
        error2.style.display = 'none';
        if (siteAdress.value.length < 3) {
            error2.classList.add('e');
            siteAdress.classList.remove('gd');
            siteAdress.disabled = false;
            error2.innerHTML = 'Возможно, вы что-то забыли указать, длина строки слишком мала';
        }
        if (siteAdress.value.length > 125) {
            error2.classList.add('e');
            siteAdress.classList.remove('gd');
            siteAdress.disabled = false;
            siteAdress.value = null;
            error2.innerHTML = 'Был превышен лимит символов в строке(75)';
        }
    }
});
siteAdress.addEventListener('keydown', function (EO) {
   if (['{', '}', '*', '&', '+','[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~'].includes(EO.key)) {
        EO.preventDefault();
    }  
});
start.addEventListener('focus', function (EO) {
    EO = EO || window.event;
    error3.classList.add('dataAlert');
    error3.innerHTML = 'Данное поле должно быть полностью заполнено. Пример: 01.01.2001';
});
start.addEventListener('blur', function (EO) {
    EO = EO || window.event;
    if (start.value == '') {
        error3.style.color = 'red';
        error3.innerHTML = 'Ошибка';
        push.disabled = true;
    }
    if (start.value) {
        push.disabled = false;
        error3.style.display = 'none';
        error3.innerHTML = '';
        start.disabled = 'true';
        start.classList.add('gd');
    }
});
visit.addEventListener('keydown', function (EO) {
    EO = EO || window.event;
    if (['+', '-', 'e', 'E'].includes(EO.key)) {
        EO.preventDefault();
    } 
});
visit.addEventListener('blur', function (EO) {
    EO = EO || window.event;
    if (visit.value == '') {
        error4.classList.add('dataAlert');
    }
    if (visit.value.length > 4) {
        error4.classList.add('dataAlert');
        error4.innerHTML = 'Введенное некорректное значение';
        visit.value = null;
    }
    if (visit.value) {
        error4.style.display = 'none';
        error4.innerHTML = '';
        visit.disabled = 'true';
        visit.classList.add('gd');
    }
});
email.addEventListener('blur', function (EO) {
    EO = EO || window.event;
    if (email.value == '') {
        error5.classList.add('dataAlert');
    }
});
const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function onInput() {
  if (isEmailValid(email.value)) {
      email.style.borderColor = 'green';
      error5.classList.remove('dataAlert');
      error5.style.display = 'none';
      error5.innerHTML = '';
      email.disabled = 'true';
  } else {
    email.style.borderColor = 'red';
  }
}
email.addEventListener('input', onInput);
function isEmailValid(value) {
    return emailReg.test(value);
}
btn1.addEventListener('click', function (EO) {
    EO = EO || window.event;
    for (let h = 0; h < arrayElementsForm.length; h++) {
        if (arrayElementsForm[h].disabled = true && arrayElementsForm[h].classList.contains('gd')) {
            arrayElementsForm[h].disabled = false;
            arrayElementsForm[h].classList.remove('gd');
        }
    }
});