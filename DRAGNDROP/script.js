"use strict";
window.addEventListener('load', changePos);
function changePos(EO) {
    EO = EO || window.event;
    let imgCollection = document.querySelectorAll('img');
    for (var i = 0; i < imgCollection.length; i++) {
        let img = imgCollection[i];
        let offsetX;
        let offsetY;
        img.onmouseup = function () {
            img.style.zIndex = '2';
        }
        img.addEventListener('dragstart', EO => {
            offsetX = EO.offsetX;
            offsetY = EO.offsetY;
        });
        img.addEventListener('dragend', function (EO) {
            EO = EO || window.event;
            img.style.position = 'absolute';
            img.style.top = (EO.pageY - offsetY) + 'px';
            img.style.left = (EO.pageX - offsetX) + 'px';
            console.log(EO.pageX, EO.pageY);
        });
    }
}

