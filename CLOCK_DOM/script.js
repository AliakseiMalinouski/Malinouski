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
    let cx = sizeValue/2;
    let r = sizeValue/2 - 20;
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
    let numbers = [12,1,2,3,4,5,6,7,8,9,10,11];
    number.textContent = numbers[i];
    nextHourDiv.appendChild(number);
    }
    let divHands = document.createElement('div');
    let hoursHand = document.createElement('div');
    hoursHand.style.left = cx + 'px';
    hoursHand.style.top = cx/2 + 'px';
    hoursHand.setAttribute('class', 'hours');
    let minutesHand = document.createElement('div');
    minutesHand.setAttribute('class', 'minutes');
    minutesHand.style.left = cx + 20 + 'px';
    minutesHand.style.top = cx/2 - 50 + 'px';
    let secondsHand = document.createElement('div');
    secondsHand.setAttribute('class', 'seconds');
    secondsHand.style.left = cx + 'px';
    secondsHand.style.top = cx/2 - 60 + 'px';
    divHands.appendChild(hoursHand);
    divHands.appendChild(minutesHand);
    divHands.appendChild(secondsHand);
    clock.appendChild(divHands);
    function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours() % 12;
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let hoursAngle = 360 / 12 * (hours + minutes / 60);
    hoursHand.style.transform = `rotate(${hoursAngle}deg)`;
    let minutesAngle = 360 / 60 * (minutes + seconds / 60);
    minutesHand.style.transform = `rotate(${minutesAngle}deg)`;
    let secondsAngle = 360 / 60 * seconds;
    secondsHand.style.transform = `rotate(${secondsAngle}deg)`;
    timer.innerHTML = currentTime.toLocaleTimeString();
    console.log(currentTime.toLocaleTimeString())
}
function updateTimer() {
    let currentTime = new Date();
    timer.innerHTML = currentTime
}
updateTime();
setInterval(updateTime, 1000);
});
