"use strict"
let str = prompt('Введите слово:');
function findPol(str) {
    str = str.toLowerCase().replace(/ё/g, "е").replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()ъь]/g, "").replace(/\s/g, "");
    let lastChar = str.length - 1;
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[lastChar - i]) {
            return false;
        }
    }
    return true;
}
alert(findPol(str) ? "это палиндром" : "это не палиндром" );
console.log(findPol(str));