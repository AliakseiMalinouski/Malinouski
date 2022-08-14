"use strict" 
let str = prompt('Введите строку:');
function wrap(str) {
    str = str.toLowerCase().replace(/ё/g, "е").replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()ъь]/g, "").replace(/\s/g, "");
    function findPol(str) {
        if (str.length < 2) {
            return true;
        }
        if (str[0] != str[str.length - 1]) {
            return false;
        }
        return findPol(str.substr(1, str.length - 2));
    }
    return findPol(str);
}
alert(wrap(str) ? 'это палиндром' : 'это не палиндром');
