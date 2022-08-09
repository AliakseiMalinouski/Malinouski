"use strict"
let str = prompt('Введите слово:').trim().toLowerCase().replace(/ё/g, "е").replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()ъь]/g, "");
function findPol(str) {
    let ser = '';
    for (let i = str.length - 1; i >= 0; --i) {
        ser += str[i];
    }
    if (str == ser) {
        alert(`Слово: ${str} - палиндром`);
    }
    if(str !== ser) {
        alert(`Слово: ${str} не является палиндромом`);
    }
    return str == ser;
}
// проверка
console.log(findPol(str)); 