"use strict";
let size = document.getElementById('size');
let buildClock = document.getElementById("buildClock");
let clock = document.getElementById('clock');
let timer = document.createElement('span');
timer.setAttribute('class', 'timer');
clock.appendChild(timer);
buildClock.addEventListener('click', function (EO) {
    EO = EO || window.event;
    clock.style.display = 'block';
    let sizeValue = size.value;
    clock.style.width = sizeValue + 'px';
    clock.style.height = sizeValue + 'px';
});
for (let i = 0; i < 12; i++) {
    let arrayHours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let nextHourDiv = document.createElement('div');
    nextHourDiv.setAttribute('class', 'next-our-div');
    clock.appendChild(nextHourDiv);
    nextHourDiv.style.transform = `rotate(${i * 30}deg)`;
    let number = document.createElement('span');
    number.setAttribute('class', 'number');
    number.textContent = arrayHours[i];
    number.style.transform = `rotate(-${i * 30}deg)`;
    nextHourDiv.appendChild(number);
}
let divHands = document.createElement('div');
let hoursHand = document.createElement('div');
hoursHand.setAttribute('class', 'hours');
let minutesHand = document.createElement('div');
minutesHand.setAttribute('class', 'minutes');
let secondsHand = document.createElement('div');
secondsHand.setAttribute('class', 'seconds');
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