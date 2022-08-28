"use strict";
window.addEventListener('load', changePos);
let tt;
function changePos(EO) {
    EO = EO || window.event;
    let imgs = document.querySelectorAll('img');
    let startX;
    let startY;
    let zIndex = 0;
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
            tt = dragElement;
            offsetX = EO.offsetX;
            offsetY = EO.offsetY;
            zIndex++;
            dragElement.style.zIndex = zIndex;
            dragElement.style.cursor = 'move';
            window.onmousemove = mouseMove;
        });
        dragElement.ondragstart = function () {
            return false;
        }
        function mouseMove(EO) {
            EO = EO || window.event;
            let x = EO.pageX;
            let y = EO.pageY;
            dragElement.style.left = (x - offsetX) + 'px';
            dragElement.style.top = (y - offsetY) + 'px';
        }
        dragElement.addEventListener('mouseup', function (EO) {
            EO = EO || window.event;
            window.onmousemove = null;
        });
    };
}