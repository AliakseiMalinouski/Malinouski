"use strict"
let str = prompt('Введите слово:');
function findPol(str) {
    str = str.toLowerCase().replace(/ё/g, "е").replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()ъь]/g, "").replace(/\s/g, "");
    let lastChar = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastChar - i]) {
            return `Слово ${str} не палиндром`;
        }
    }
    return `Слово ${str} - это палиндром`;
}
alert(findPol(str));
console.log(findPol(str));