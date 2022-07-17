'use strict'
let message = prompt('Введите первую строку:')
function vowelsForEach() {
    let count = 0;
    let arr = ['а', 'е', 'и', 'у', 'ы', 'ё', 'я', 'ю', 'о', 'A', 'И', 'Е', 'У', 'Ы', 'Ё', 'О', 'Ю', 'Я'];
    arr.forEach(function (elem) {
        let message1 = message.toLowerCase();
        if (message1.includes(elem)) {
            count++;
       } 
    });
    return count;
}
console.log('Количество гласных в первой строке:');
console.log(vowelsForEach());

console.log('----------------------------------');

let message2 = prompt('Введите вторую строку:');
function vowelsFilter() {
    let cnt = 0;
    let array = ['а', 'е', 'и', 'у', 'ы', 'ё', 'я', 'ю', 'о', 'A', 'И', 'Е', 'У', 'Ы', 'Ё', 'О', 'Ю', 'Я'];
    array.filter(function (element) {
        let message3 = message2.toLocaleLowerCase();
        if (message3.includes(element)) {
            cnt++;
        }
    });
    return cnt;
}
console.log('Количество гласных во второй строке:');
console.log(vowelsFilter());

console.log('----------------------------------');

let message4 = prompt('Введите третью строку:');
let message4L = message4.toLowerCase();
let ar = ['а', 'е', 'и', 'у', 'ы', 'ё', 'я', 'ю', 'о', 'A', 'И', 'Е', 'У', 'Ы', 'Ё', 'О', 'Ю', 'Я'];
let sumVowels = ar.reduce(function (prev, item, index, array) {
    for (let i = 0; i < message4L.length; i++) {
        if (ar[item] === message4L[i]) {
            prev++;
        }
    }
    return prev;
}, 0);
console.log('Количество гласных в третьей строке:');
console.log(sumVowels);
