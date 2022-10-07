"use strict";
let btn = document.getElementById('view__cards');
let canvas = document.getElementById('canvas');
let contextOfCanvas = canvas.getContext('2d');
let container = document.getElementById('container__more__about__games');
let btnClose = document.createElement('div');
btn.onclick = function () {
    canvas.style.display = 'block';
    canvas.classList.add('canvasAnimation');
    btnClose.style.position = 'absolute';
    btnClose.style.right = '300px';
    btnClose.style.top = '200px';
    btnClose.textContent = hHuman.close;
    btnClose.style.color = 'red';
    btnClose.style.display = 'block';
    btnClose.classList.add('anim__close');
    btnClose.style.cursor = 'pointer';
    container.appendChild(btnClose);
    btn.disabled = true;
}
btnClose.addEventListener('click', (EO) => {
    EO = EO || window.event;
    canvas.style.display = 'none'
    btnClose.style.display = 'none';
    btn.disabled = false;
});
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
    close: 'Закрыть',
};
contextOfCanvas.fillStyle = 'white';
contextOfCanvas.font = '24px bold serif';
contextOfCanvas.fillText('Name: ' + hHuman.name, 10, 30);
contextOfCanvas.fillText('Lastname: ' + hHuman.lastname, 10, 60);
contextOfCanvas.fillText('Profession: ' + hHuman.profession, 10, 90);
contextOfCanvas.fillText('Universe: ' + hHuman.universe, 10, 120);
function drawCanvasElementsOfJorun() {
    contextOfCanvas.drawImage(human, hHuman.x, hHuman.y, hHuman.width, hHuman.height,);
    hHuman.x = hHuman.x + 1;
    if (hHuman.x > hCanvas.width) {
        hHuman.x = -50;
    }
    requestAnimationFrame(drawCanvasElementsOfJorun);
}
drawCanvasElementsOfJorun();
