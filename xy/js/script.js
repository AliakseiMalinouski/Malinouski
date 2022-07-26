"use strict"
function ttt() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let results = findRoots(a, b, c);
    document.getElementById('results').textContent = results;
    document.getElementById('block_results').style.display = 'block';
}

function findRoots(a, b, c) {
    let d = b * b - 4 * a * c;
    let x1, x2;
    let oneRoot = "Один корень:";
    let twoRoots = "Два корня:";
    let nothing = "Нет корней! Дискриминант отрицательный:";
    if (a == '' || b == '' || c== '') {
        alert('Вы не ввели числовые занчения, попробуйте еще раз!');
    }
    if (a === 0) {
        x1 = (-c / b);
        return `${oneRoot} ${x1} `;
    }
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return `${twoRoots} ${x1} и ${x2}, \nДискриминант: ${d}`;
    }
    else if (d == 0) {
        x1 = -b / (2 * a);
        return `${oneRoot} ${x1}`;
    }
    else if (d < 0) {
        return `${nothing} ${d}`;
    }
} 