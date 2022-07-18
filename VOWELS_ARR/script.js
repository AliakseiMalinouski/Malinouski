'use strict'

let text = prompt('Введите строку:');
 function vowelsForEach(text) {
    let letters = "аоиеёэыуюяAОИЕЁЭЫУЮЯ";
    let count = 0;
    [...text].forEach(elem => letters.includes(elem) ? count++ : 'Ничего не найдено');
    return count;
}
console.log('Количество гласных в строке методом "forEach":');
console.log(vowelsForEach(text));
console.log('----------------------------------------------');

function vowelsFilter(text) {
    let letters = "аоиеёэыуюяAОИЕЁЭЫУЮЯ";
    let cnt = [...text].filter((element) => letters.includes(element)).length;
    return cnt;
}
console.log('Количество гласных в строке методом "Filter":');
console.log(vowelsFilter(text));
console.log('----------------------------------------------');

function vowelsReduce(text) {
    let letters = "аоиеёэыуюяAОИЕЁЭЫУЮЯ";
    let cn = [...text].reduce((prev, item) => letters.includes(item) ? prev + 1 : prev, 0);
    return cn;
}
console.log('Количество гласных в строке методом "Reduce":');
console.log(vowelsReduce(text));
