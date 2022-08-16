"use strict"
let mainForm = document.getElementById('form');
let spanError = document.getElementById('error');
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
        for (let opt = 0; opt < catalog.length; opt++) {
            if (catalog[opt].value === '1' || catalog[opt].value === '2' || catalog[opt].value === '3') {
                error9.classList.add('disable');
            }
        }
        if (arrayElementsForm[i].value == '') {
            alert('Произошла ошибка при вводе данных, пожалуйста, повторите попытку');
            arraySpanError.forEach((elem) => {
                elem.className += 'red';
            });
            event.preventDefault();
            break;
        }
    }
});