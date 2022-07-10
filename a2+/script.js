'use strict'
let str = prompt('Введите строку:');

function deleteWhiteSpace(str){
    let ser = str.split(' ');
    return ser.filter(i => i).join(' ');
}
alert(`Строка без пробелов: ${deleteWhiteSpace(str)}`);