'use strict'
let lastname;
do {
    lastname = prompt('Ваша фамилия:');
} while (!lastname);
let firstname;
do {
    firstname = prompt('Ваше имя:');
} while (!firstname);
let patronymic;
do {
    patronymic = prompt('Ваше отчество:');
} while (!patronymic);
let age;
let ageStr;
do {
    ageStr = prompt('Ваш возраст:');
    age = parseInt(ageStr);
} while (isNaN(age) || ageStr === '');
let ageinday = age * 365;
let through = age + 5;
let genderChoice = confirm('Вы мужчина?');
// if (genderChoice === true) {
//     gender = 'Мужской';
// }
// if (genderChoice === false) {
//     gender = 'Женский';
// }
// // let pension = gender ?
// //     ((age > 65) ? 'Да' : 'Нет') : ((age > 60) ? 'Да' : 'Нет');
// let retirement = gender ? 65 : 60;
// let pension = (age > retirement) ? 'Да' : 'Нет';
let gender = genderChoice ? 'м' : 'ж'; 
let pension = genderChoice ? ((age > 65) ? 'Да' : 'Нет') : ((age > 60) ? 'Да' : 'Нет');
alert(
    `Ваше ФИО: ${lastname} ${firstname} ${patronymic} \n\n
     Ваш возраст в годах: ${age} \n\n
     Ваш возраст в днях: ${ageinday} \n\n
     Через пять лет Вам будет: ${through} \n\n
     Ваш пол: ${gender} \n\n
     Вы на пенсии: ${pension} \n\n`
);