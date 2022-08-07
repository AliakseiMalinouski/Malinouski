'use strict'
let str = prompt('Введите строку:');

// function deleteWhiteSpace(str){
//     let ser = str.split(' ');
//     return ser.filter(i => i).join(' ');
// }
// alert(`Строка без пробелов: ${deleteWhiteSpace(str)}`);


function deleteWhiteSpace(str) {
    if (str.charAt(0) == ' ' || str.charAt(str.lenght - 1) == ' ') {
        str = str.slice(1);
        str = deleteWhiteSpace(str);
    }
    return str;
} 

alert(`Строка без пробелов: ${deleteWhiteSpace(str)}`);