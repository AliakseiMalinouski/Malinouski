'use strict'

function findLetter() {
    let count = 0;
    let arr = ['а', 'е', 'и', 'у', 'ы', 'ё', 'я', 'ю', 'о', 'A', 'И', 'Е', 'У', 'Ы', 'Ё', 'О', 'Ю', 'Я'];
    let message = prompt('Введите строку:');
    for (let i = 0; i < message.length; i++) {
        for (let n = 0; n < arr.length; n++) {
            if (message[i] === arr[n]) {
                count++;
            }
        }
    }
    return count ? count : 'Не найдено';
}
console.log(findLetter());



