"use strict";
window.addEventListener('load', changePos);
function changePos(EO) {
    EO = EO || window.event;
    let dragElement = document.getElementById('t');
    let offsetX;
    let offsetY;
    dragElement.onmousedown = function (EO) {
        EO = EO || window.event;
        offsetX = EO.offsetX;
        offsetY = EO.offsetY;
        dragElement.style.position = 'absolute';
        dragElement.style.zIndex = '1';
    }
    dragElement.onmousemove = function (EO) {
        EO = EO || window.event;
        let x = EO.pageX;
        let y = EO.pageY;
        dragElement.style.left = (x - offsetX) + 'px';
        dragElement.style.top = (y - offsetY) + 'px';
    }
    dragElement.onmouseup = function (EO) {
        EO = EO || window.event;
        dragElement = null;
    }
}