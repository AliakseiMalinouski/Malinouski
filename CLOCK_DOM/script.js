"use strict";
let size = document.getElementById('size');
let buildClock = document.getElementById("buildClock");
let clock = document.getElementById('clock');
let timer = document.createElement('span');
timer.setAttribute('class', 'timer');
clock.appendChild(timer);
buildClock.addEventListener('click', function (EO) {
    EO = EO || window.event;
    let sizeValue = size.value;
    let cx = sizeValue / 2;
    let r = sizeValue / 2 - 20;
    EO = EO || window.event;
    clock.style.display = 'block';
    clock.style.width = sizeValue + 'px';
    clock.style.height = sizeValue + 'px';
    for (let i = 0; i < 12; i++) {
        let angle = i * 360 / 12 / 180 * Math.PI;
        let x = cx + r * Math.sin(angle);
        let y = cx - r * Math.cos(angle);
        let nextHourDiv = document.createElement('div');
        nextHourDiv.setAttribute('class', 'next-our-div');
        let dr = 20;
        nextHourDiv.style.left = (x - dr) + 'px';
        nextHourDiv.style.top = (y - dr) + 'px';
        clock.appendChild(nextHourDiv);
        let number = document.createElement('span');
        number.setAttribute('class', 'number');
        let numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        number.textContent = numbers[i];
        nextHourDiv.appendChild(number);
    }
    function buildHand(clock, kx, ky) {
        
    }
});
