'use strict'
let str = prompt('Введите строку:');

// function deleteWhiteSpace(str){
//     let ser = str.split(' ');
//     return ser.filter(i => i).join(' ');
// }
// alert(`Строка без пробелов: ${deleteWhiteSpace(str)}`);


// function deleteWhiteSpace(str) {
//     if (str.charAt(0) == ' ' || str.charAt(str.lenght - 1) == ' ') {
//         str = str.slice(1);
//         str = deleteWhiteSpace(str);
//     }
//     return str;
// }

// alert(`Строка без пробелов: ${deleteWhiteSpace(str)}`);

let deleteWhiteSpace = function (str) {
    let firstChar = undefined;
    let lastChar;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            firstChar = i;
            // console.log(str[i]); проверка
            break;
        }
    }
    if (firstChar === undefined) {
        return "";
    }
    for (let i = str.length - 1; ; --i) {
        if (str[i] !== ' ') {
            lastChar = i;
            // console.log(str[i]); проверка
            break;
        }
    }
    return str.substring(firstChar, lastChar + 1);
}

alert(`Строка без пробелов: ${deleteWhiteSpace(str)}`);