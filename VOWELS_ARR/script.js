'use strict'
let message = prompt('Введите строку:')
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
console.log('Количество гласных в строке:');
console.log(vowelsForEach());