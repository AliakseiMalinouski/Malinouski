"use strict"
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ctx.fillStyle = 'magenta'; // цвет
// fiilRect - метод, рисующий квадрат, имеет четыре аргумента: x,y, width, heigth
// ctx.fillRect(100, 100, 300, 300);
// let x = 100;
// setInterval(function () {
//     ctx.fillStyle = 'white';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = 'magenta'
//     ctx.fillRect(x++, 50, 300, 300);
//     if (x === 1000) {
//         x = 0;
//         console.log("ggg")
//     }
// }, 0)
// ctx.strokeRect(200, 500, 300, 300)
// ctx.strokeStyle = 'black';
// ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, Math.PI*2,)  // x,y - центра круга, radius, начало угла(справа), конец угла(как далеко пойдёт), будел тли круг рисоваться по часовой или против
// ctx.fill();
// ctx.beginPath()
// ctx.lineWidth = 6;
// ctx.scale(2, 2)
// ctx.rotate(10 * Math.PI/180)
// ctx.moveTo(50, 50)
// ctx.lineTo(25, 100)
// ctx.lineTo(75, 100)
// ctx.lineTo(50, 50)
// ctx.closePath()
// ctx.stroke()
// ctx.font = '20px Arial bold';
// ctx.fillText('fghfghfgh', 10, 10);
// let grad = ctx.createLinearGradient(0, 0, 10, 0);
// grad.addColorStop('.0', 'orange')
// grad.addColorStop('.50', 'blue');
// grad.addColorStop('1', 'red')

let isMouseDown = false;
canvas.addEventListener('mousedown', function (EO) {
    isMouseDown = true
})
canvas.addEventListener('mouseup', function (EO) {
    isMouseDown = false;
    ctx.beginPath()
})
ctx.lineWidth = 10 * 2;
canvas.addEventListener('mousemove', function (EO) {
    if (isMouseDown) {
        ctx.lineTo(EO.clientX, EO.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(EO.clientX, EO.clientY, 10, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(EO.clientX, EO.clientY)
    }
})
document.addEventListener('keydown', function (EO) {
    if (EO.key == 83) {
        
    }
    if (EO.key == 82) {
        
    }
    if (EO.key == 67) {
        clear()
    }
})
