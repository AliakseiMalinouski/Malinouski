"use strict";
window.addEventListener('load', changePos);
function changePos(EO) {
    EO = EO || window.event;
    let offsetX;
    let offsetY;
    let imgCollection = document.querySelectorAll('img');
    for (let i = 0; i < imgCollection.length; i++) {
        imgCollection[i].onmousedown = function (EO) {
            EO = EO || window.event;
            imgCollection[i].style.position = 'absolute';
            imgCollection[i].style.zIndex = '1';
            imgCollection[i].style.cursor = 'move';
            offsetX = EO.offsetX;
            offsetY = EO.offsetY;
        }
        imgCollection[i].onmousemove = function (EO) {
            EO = EO || window.event;
            let x = EO.pageX;
            let y = EO.pageY;
            imgCollection[i].style.top = (y - offsetY) + 'px';
            imgCollection[i].style.left = (x - offsetX) + 'px';
            if (EO.clientX <= 0 || EO.clientY <= 0) {
                imgCollection[i].style.position = 'static';
            }
        }
        imgCollection[i].onmouseleave = function (EO) {
            EO = EO || window.event;
            imgCollection[i].style.zIndex = '0';
        }
    }
}