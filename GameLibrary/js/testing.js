"use strict";
let btn = document.getElementById('btn');
let canvas = document.getElementById('canvas');
let contextOfCanvas = canvas.getContext('2d');
btn.onclick = function () {
    canvas.style.display = 'block';
}
// создаём хэш с данными о canvas
let hCanvas = {
    width: canvas.width,
    height: canvas.height,
    backgroundColor: '#1f1f1f',
};
contextOfCanvas.fillStyle = hCanvas.backgroundColor;
contextOfCanvas.fillRect(0, 0, hCanvas.width, hCanvas.height);
// создаём человечка, сохраняем все данные о нём
let human = new Image();
human.setAttribute('src', './imgs/humanForCanvas.png');
let hHuman = {
    width: 100,
    height: 100,
    x: -50,
    y: 200,
    name: 'Joe',
    lastname: 'Run',
    profession: 'archaeologist',
    transform: 90,
    universe: 'JoeRun Game',
};
contextOfCanvas.fillStyle = 'white';
contextOfCanvas.font = '24px bold Sans-serif';
let textNameJoe = contextOfCanvas.fillText('Name: ' + hHuman.name, 10, 30);
let textLastNameJoe = contextOfCanvas.fillText('Lastname: ' + hHuman.lastname, 10, 60);
let textProfessionJoe = contextOfCanvas.fillText('Profession: ' + hHuman.profession, 10, 90);
let textUniverseJoe = contextOfCanvas.fillText('Universe: ' + hHuman.universe, 10, 120);
function drawCanvasElements() {
    contextOfCanvas.drawImage(human, hHuman.x, hHuman.y, hHuman.width, hHuman.height,);
    hHuman.x = hHuman.x + 1;
    if (hHuman.x > hCanvas.width) {
        hHuman.x = -50;
    }
    requestAnimationFrame(drawCanvasElements);
}
drawCanvasElements();