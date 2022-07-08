"use strict"
let firstname;
let lastname;
let patronymic;
let age;
let ageinday;
let through;
let genderChoice;
let gender;
let male = 'Мужской';
let female = 'Женский';
let retired = 'Да';
let notRetired = 'Нет';
let pension;
if (confirm('Предлагаем Вам заполнить анкету. Если Вы согласны, нажмите "Да"(Каждое поле обязательное), в случае отказа нажмите "Нет"')) {
    do {
        lastname = prompt('Ваша фамилия:');
    } while (!lastname);
    do {
        firstname = prompt('Ваше имя:');
    } while (!firstname);
    do {
        patronymic = prompt('Ваше отчество:');
    } while (!patronymic);
    do {
        do {
            age = prompt('Ваш возраст в годах:');
            age == Number(age);
        } while (!age)
        if (age.replace(/\d/g, '').length) {
            do {
            age = prompt('Вы ввели не числовое значение. Повторите попытку. Ваш возраст в годах:');
        } while (!age)
        if (age.replace(/\d/g, '').length) {
            do {
                age = prompt('Вы ввели не числовое значение. Повторите попытку. Ваш возраст в годах:');
            } while (!age)
        }
    }
    } while (!age)
        ageinday = age * 365;
        through = parseInt(age) + 5;
        genderChoice = confirm('Вы мужчина?');
        if(genderChoice == true) {
            gender = male;
        }
        else {
            gender = female;
        }
        if (gender == male) {
            if (age > 65) {
                pension = retired;
            }
        }
        if (gender == male) {
            if (age < 65) {
                pension = notRetired;
            }
        }
        if (gender == female) {
            if (age > 55) {
                pension = retired;
            }
        }
        if (gender == female) {
            if (age < 55) {
                pension = notRetired;
            }
        }
}
else {
    alert('К сожалению, Вы отказались.')
}
let code = 'Код появится после закрытия окна';
alert(`Ваше ФИО: ${lastname} ${firstname} ${patronymic}; \n\n Ваш возраст в годах: ${age}; \n\n Ваш возраст в днях: ${ageinday}; \n\n Через пять лет вам будет: ${through}; \n\n Ваш пол: ${gender}; \n\n Вы на пенсии: ${pension}; \n\n ${code};`);
