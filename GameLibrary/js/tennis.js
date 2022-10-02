"use strict";
window.addEventListener('load', function () {
  let board = new Area();
  board.drawRackets();
  board.drawBall();
  let moving = new Moving();
  document.querySelector('.button').addEventListener('click', () => { moving.go() });
});
// создаём класс Area, где соаздём элементы необходимые для игры
class Area {
  constructor() {
    this.area = document.querySelector('.board');
    this.leftRacket = document.createElement('div');
    this.rightRacket = document.createElement('div');
    this.ball = document.createElement('div');
  }
  drawRackets() {
    this.leftRacket.classList.add('left-racket');
    this.rightRacket.classList.add('right-racket');   // рисуем ракетки 
    this.area.appendChild(this.leftRacket);
    this.area.appendChild(this.rightRacket);
  }
  drawBall() {
    this.ball.classList.add('ball');   // рисуем мяч
    this.area.appendChild(this.ball);
  }
}
class Moving {
  constructor() {
    let self = this;
    this.timerStatus = 0;
    this.keydown = null;
    this.leftRacket = document.querySelector('.left-racket');
    this.rightRacket = document.querySelector('.right-racket');
    this.ball = document.querySelector('.ball');
    this.area = {
      height: document.querySelector('.board').offsetHeight,
      width: document.querySelector('.board').offsetWidth
    };
    this.keyValues = {
      CTRL: 17,
      SHIFT: 16,
      DOWN: 40,
      UP: 38
    };
    this.score = {
      first: 0,
      second: 0
    };

    this.ballSpeeds = {
      x: 1.5,
      y: 1,
      step: 0
    };

    this.leftRacketSettings = {
      racketX: this.leftRacket.offsetLeft,
      racketY: this.leftRacket.offsetTop,
      speed: 0,
      width: this.leftRacket.offsetWidth,
      height: this.leftRacket.offsetHeight,
      update: () => {
        this.leftRacket.style.left=this.leftRacketSettings.racketX+"px";
        this.leftRacket.style.top=this.leftRacketSettings.racketY+"px";
      }
    };

    this.rightRacketSettings = {
      racketX: this.rightRacket.offsetLeft,
      racketY: this.rightRacket.offsetTop,
      speed: 0,
      width: this.rightRacket.offsetWidth,
      height: this.rightRacket.offsetHeight,
      update: () => {
        this.rightRacket.style.left=this.rightRacketSettings.racketX+"px";
        this.rightRacket.style.top=this.rightRacketSettings.racketY+"px";
      }
    };
    this.ballH={
      posX : this.ball.offsetLeft,
      posY : this.ball.offsetTop,
      speedX : 1.5,
      speedY : 1,
      accelX : 0,
      accelY : 0,
      width : 20,
      height: 20,
      update : function() {
        self.ball.style.left=Math.round(self.ballH.posX)+"px";
        self.ball.style.top=Math.round(self.ballH.posY)+"px";
      }
    };
    window.addEventListener('keydown', (EO)=> {
      this.keydown = EO.keyCode;
    });
    window.addEventListener('keyup', (EO)=> {
    EO = EO || window.event;
    this.keydown = null;
    if(EO.keyCode === this.keyValues.SHIFT || EO.keyCode === this.keyValues.CTRL) {
    this.leftRacketSettings.speed = 0;
    }
    if(EO.keyCode === this.keyValues.UP || EO.keyCode === this.keyValues.DOWN) {
      this.rightRacketSettings.speed = 0;
    }
    });
  }
  reverseSpeed() {
    switch (this.ballSpeeds.step) {
      case 0:
        this.ballH.speedX = this.ballSpeeds.x;
        this.ballH.speedY = this.ballSpeeds.y;
        this.ballSpeeds.step += 1;
        break;
      case 1:
        this.ballH.speedX = -this.ballSpeeds.x;
        this.ballH.speedY = this.ballSpeeds.y;
        this.ballSpeeds.step += 1;
        break;
      case 2:
        this.ballH.speedX = this.ballSpeeds.x;
        this.ballH.speedY = -this.ballSpeeds.y;
        this.ballSpeeds.step += 1;
        break;
      case 3:
        this.ballH.speedX = -this.ballSpeeds.x;
        this.ballH.speedY = -this.ballSpeeds.y;
        this.ballSpeeds.step = 0;
        break;
    }
  }
  goal(side) {
    let first = document.querySelector('.first__player');
    let second = document.querySelector('.second__player');
    if(side === 'left') {
      this.score.first += 1;
      first.textContent = this.score.first.toString();
    } else if (side === 'right') {
      this.score.second += 1;
      second.textContent = this.score.second.toString();
    }
    cancelAnimationFrame(this.timerStatus);
    this.timerStatus = 0;
  }
  resetScore() {
    let scoreFields = document.querySelectorAll('.score span');
    this.score.first = 0;
    this.score.second = 0;
    scoreFields.forEach(function (item) {
      item.innerHTML = '0';
    })
  }
  tick() {
    switch (this.keydown) {
      case this.keyValues.SHIFT:
        this.leftRacketSettings.speed = -5;
        break;
      case this.keyValues.CTRL:
        this.leftRacketSettings.speed = 5;
        break;
      case this.keyValues.UP:
        this.rightRacketSettings.speed = -5;

        break;
      case this.keyValues.DOWN:
        this.rightRacketSettings.speed = 5;
        break;
    }
    if ( this.leftRacketSettings.racketY < 0 ) {
      this.leftRacketSettings.racketY = 0;
    }
    if ( this.leftRacketSettings.racketY + this.leftRacketSettings.height > this.area.height ) {
      this.leftRacketSettings.racketY = this.area.height - this.leftRacketSettings.height - 2;
    }
    if ( this.rightRacketSettings.racketY < 0 ) {
      this.rightRacketSettings.racketY = 0;
    }
    if ( this.rightRacketSettings.racketY + this.rightRacketSettings.height > this.area.height ) {
      this.rightRacketSettings.racketY = this.area.height - this.rightRacketSettings.height - 2;
    }
    this.leftRacketSettings.racketY += this.leftRacketSettings.speed;
    this.rightRacketSettings.racketY += this.rightRacketSettings.speed;
    this.ballH.speedX+=this.ballH.accelX;
    this.ballH.posX+=this.ballH.speedX;
    this.ballH.posY+=this.ballH.speedY;
    // долетел ли мяч до правой ракетки
    if ( this.ballH.posX + this.ballH.width >= this.rightRacketSettings.racketX && this.ballH.posY >= this.rightRacketSettings.racketY && this.ballH.posY <= this.rightRacketSettings.racketY + this.rightRacketSettings.height) {
      this.ballH.speedX=-this.ballH.speedX;
    }
    // вылетел ли мяч правее стены?
    if ( this.ballH.posX+this.ballH.width>this.area.width ) {
      // this.ballH.speedX=-this.ballH.speedX;
      this.goal('right');
      this.ballH.posX=this.area.width-this.ballH.width;
      this.ballH.speedX = 0;
      this.ballH.speedY = 0;

    }
    // рядом ли мяч с левой ракеткой
    if ( this.ballH.posX <= this.leftRacketSettings.racketX + this.leftRacketSettings.width && this.ballH.posY >= this.leftRacketSettings.racketY && this.ballH.posY <= this.leftRacketSettings.racketY + this.leftRacketSettings.height) {
      this.ballH.speedX=-this.ballH.speedX;
    }
    // вылетел ли мяч сквозь левую стенку
    if ( this.ballH.posX<0 ) {
      this.goal('left');
      this.ballH.posX=0;
      this.ballH.speedX = 0;
      this.ballH.speedY = 0;
    }
    this.ballH.posY+=this.ballH.speedY;
    // проверка коснулся ли мяч пола
    if ( this.ballH.posY+this.ballH.height>this.area.height ) {
      this.ballH.speedY=-this.ballH.speedY;
      this.ballH.posY=this.area.height-this.ballH.height;
    }
    if ( this.ballH.posY<0 ) {
      this.ballH.speedY=-this.ballH.speedY;
      this.ballH.posY=0;
    }
    this.ballH.update();
    this.leftRacketSettings.update();
    this.rightRacketSettings.update();
    this.timerStatus = requestAnimationFrame(this.tick.bind(this));
  }
  go() {
    this.ballH.posX=this.area.width / 2 - this.ballH.width / 2;
    this.ballH.posY=this.area.height / 2 - this.ballH.height / 2;
    this.reverseSpeed();
    if(this.timerStatus) {
      cancelAnimationFrame(this.timerStatus);
      this.timerStatus = 0;
    }
    this.timerStatus = requestAnimationFrame(this.tick.bind(this));
    }
}