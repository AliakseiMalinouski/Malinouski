"use strict";
window.addEventListener('load', changePos);
function changePos(EO) {
    EO = EO || window.event;
    let imgs = document.querySelectorAll('img');
    let startX;
    let startY;
    for (let j = 0; j < imgs.length; j++) {
        startX = imgs[j].offsetLeft;
        startY = imgs[j].offsetTop;
        imgs[j].style.left = startX + 'px';
        imgs[j].style.top = startY + 'px';
    }
    for (let n = 0; n < imgs.length; n++) {
        imgs[n].style.position = 'absolute';
    }
    let offsetX;
    let offsetY;
    for (let i = 0; i < imgs.length; i++) {
        let dragElement = imgs[i];
        dragElement.addEventListener('mousedown', function (EO) {
            EO = EO || window.event;
            offsetX = EO.offsetX;
            offsetY = EO.offsetY;
            // dragElement.style.position = 'absolute';
            dragElement.style.zIndex = '1';
            dragElement.style.cursor = 'move';
        });
        dragElement.ondragstart = function () {
            return false;
        }
        dragElement.addEventListener('mousemove', function (EO) {
            EO = EO || window.event;
            let x = EO.pageX;
            let y = EO.pageY;
            dragElement.style.left = (x - offsetX) + 'px';
            dragElement.style.top = (y - offsetY) + 'px';
        });
        dragElement.addEventListener('mouseup', function (EO) {
            EO = EO || window.event;
            dragElement = null;
        });
    }
}