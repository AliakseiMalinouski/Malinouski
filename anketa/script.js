"use strict"
let firstname;
let lastname;
let patronymic;
let age;
let ageinday;
let through;
let gender;
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
    age = prompt('Ваш возраст в годах:');
    if (age.replace(/\d/g, '').length) {
        age = prompt('Вы ввели не числовое значение. Повторите попытку. Ваш возраст в годах:')
    }
        ageinday = age * 365;
        through = parseInt(age) + 5;
        gender = confirm('Вы мужчина?');
        if (gender) {
            gender = 'Мужской';
        }
        else {
            gender = 'Женский';
    }
        if ((age > 65) && (gender = 'Мужской')) {
            pension = 'Да';
        }
        else {
            pension = 'Нет';
        }
        if ((age > 60) && (age < 65) && (gender = 'Женский')) {
            pension = 'Да';
        }
        else {
            pension = 'Нет';
        }
}
else {
    alert('К сожалению, Вы отказались.')
}
alert(`Ваше ФИО: ${lastname} ${firstname} ${patronymic}; \n\n Ваш возраст в годах: ${age} \n\n Ваш возраст в днях: ${ageinday} \n\n Через пять лет вам будет: ${through} \n\n Ваш пол: ${gender} \n\n Вы на пенсии: ${pension}`);