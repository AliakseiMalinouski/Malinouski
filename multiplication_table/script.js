"use strict"
let table = document.querySelector('.table');
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        table.innerHTML += `${i}*${j} = ${j * i} <br>`;
    }
    table.innerHTML += `<hr>`;
}

