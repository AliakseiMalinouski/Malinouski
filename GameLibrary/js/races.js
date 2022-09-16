"use strict";
window.addEventListener('load', function (EO) {
    EO = EO || window.event;
    races.createRoad();
    races.createAuto();
});
class Road {
    constructor() {
        this.road = document.createElement('div');
        this.auto = document.createElement('div');
        this.wrapperGame = document.querySelector('.wrapper');
    }
    createRoad() {
        this.road.classList.add('game__zone');
        this.wrapperGame.appendChild(this.road);
    }
    createAuto() {
        this.auto.classList.add('auto');
        this.road.appendChild(this.auto);
    }
}
let races = new Road();
class Move {
    constructor() {
        this.auto = document.querySelector('.auto');
        this.road = document.querySelector('.game__zone');
        this.autoH = {
            width: 100,
            height: 100,
            left: 200,
            top: 430,
        };
    }
}
let move = new Move();


