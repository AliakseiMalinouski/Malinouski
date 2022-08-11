"use strict" 
let str = prompt('Введите строку:')
function findPol(str) {
    str = str.toLowerCase().replace(/ё/g, "е").replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()ъь]/g, "").replace(/\s/g, "");
    if (str.length < 2) {
        return true;
    }
    if (str[0] != str[str.length - 1]) {
        return false;
    }
    return findPol(str.substr(1, str.length - 2));
}
alert(findPol(str) ? "это палиндром" : "это не палиндром" );
console.log(findPol(str));