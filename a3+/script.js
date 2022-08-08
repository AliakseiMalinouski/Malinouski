"use strict"
let str = prompt('Введите слово:');
function findPol(str) {
    let ser = '';
    let wSpace = ' ';
    let del = 'ьъё';
    let serS = ser.trim().toLowerCase().replace(/\s/g, '');
    for (let i = str.length - 1; i >= 0; --i) {
        serS += str[i];
        for (let n = 0; n < del.length; n++) {
            for (let j = 0; j < wSpace.length; j++) {
                if (str[i] === del[n]) {
                return alert('Ошибка');
                }
                else if (str[i] === wSpace[j]) {
                    return alert('Ошибка');
                }
            }
        }
    }
    if (str == serS) {
        alert(`Слово: ${str} - палиндром`);
    }
    if(str !== serS) {
        alert(`Слово: ${str} не является палиндромом`);
    }
    return str == serS;
}
// проверка
console.log(findPol(str)); 