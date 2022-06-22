// input type text
let search = document.getElementById('search');
let magnifier = document.getElementById('magnifier');
document.getElementById('search').addEventListener('focus', function () {
    if (search.focus) {
        document.getElementById('search').style.backgroundColor = '#FFFACD';
        document.getElementById('search').style.transform = 'scale(1.05)';
        document.getElementById('search').style.transition = '1s';
        document.getElementById('magnifier').style.left = '669px';
        
    }
});
document.getElementById('search').addEventListener('blur', function () {
    if (search.blur) {
        document.getElementById('search').style.backgroundColor = 'white';
        document.getElementById('search').style.transform = '';
        document.getElementById('magnifier').style.left = '640px';
    }
});
// slider
let distance = 0;
const SliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function () {
    distance = distance + 922;
    if (distance > 922) {
        distance = 0;
    }
    SliderLine.style.left = -distance + 'px';
});

document.querySelector('.prev').addEventListener('click', function () {
    distance = distance - 922;
    if (distance < 0 ) {
        distance = 922;
    }
    SliderLine.style.left = -distance + 'px';
});
document.querySelector('.page1').addEventListener('click', function () {
    distance = 0;
    if (distance > 922) {
        distance = 0;
    }
    SliderLine.style.left = -distance + 'px';
});
document.querySelector('.page2').addEventListener('click', function () {
    distance = distance + 922;
    if (distance > 922) {
        distance = 0;
    }
    SliderLine.style.left = -distance + 'px';
});

let page2 = document.querySelector('.page2');
document.querySelector('.page2').addEventListener('mousedown', function () {
    if (true) {
        document.querySelector('.page2').classList.add('active');
    }
});
document.querySelector('.page2').addEventListener('mouseout', function () {
    if (true) {
        document.querySelector('.page2').classList.remove('active');
    }
});
let page1 = document.querySelector('.page1');
document.querySelector('.page1').addEventListener('mousedown', function () {
    if (true) {
        document.querySelector('.page1').classList.add('active');
    }
});
document.querySelector('.page1').addEventListener('mouseout', function () {
    if (true) {
        document.querySelector('.page1').classList.remove('active');
    }
});






