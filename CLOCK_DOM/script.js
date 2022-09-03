"use strict";
let clock = document.getElementById('clock');
let timer = document.createElement('span');
timer.setAttribute('class', 'timer');
clock.appendChild(timer);
let arrayHours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i < 12; i++) {
    let backForTimer = document.createElement('div');
    backForTimer.setAttribute('class', 'back-for-timer');
    clock.appendChild(backForTimer);
    backForTimer.style.transform = `rotate(${i * 30}deg)`;
    let number = document.createElement('span');
    number.setAttribute('class', 'number');
    number.textContent = arrayHours[i];
    number.style.transform = `rotate(-${i * 30}deg)`;
    backForTimer.appendChild(number);
}
let divHands = document.createElement('div');
divHands.setAttribute('class', 'clockHands'); 
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
function updateTime(time) {
	timer.innerHTML = time.toLocaleTimeString();
}
function updateTime(time) {
    let timeSeconds = 6*time.getSeconds(); 
    let timeMinutes = 6*(time.getMinutes() + (1/60)*time.getSeconds()); 
    let timeHours = 30*(time.getHours() + (1/60)*time.getMinutes());
    hoursHand.style.transform = `rotate(${timeHours}deg)`;
    minutesHand.style.transform = `rotate(${timeMinutes}deg)`;
    secondsHand.style.transform = `rotate(${timeSeconds}deg)`;
}
setInterval(function(){
    let time = new Date();
    updateTime(time);
    updateTime(time);
}, 1000);