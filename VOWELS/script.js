'use strict'

function findLetter() {
    let count = 0;
    let arr = ['a', 'е', 'и', 'у', 'ы', 'ё', 'я', 'ю', 'о', 'A', 'И', 'Е', 'У', 'Ы', 'Ё'];
    let message = prompt('Введите строку:');
    for (let i = 0; i < message.length; i++) {
        for (let n = 0; n < arr.length; n++) {
            if (message[i] === arr[n]) {
                ++count;
                break;
            }
        }
    }
    return count ? count : 'Не найдено';
}
console.log(findLetter());



