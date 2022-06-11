let distance = 0;
const SliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function () {
    distance = distance + 1224;
    if (distance > 1224) {
        distance = 0;
    }

    SliderLine.style.left = -distance + 'px';
});
document.querySelector('.prev').addEventListener('click', function () {
    distance = distance - 1224;
    if (distance < 0) {
        distance = 1224;
    }

    SliderLine.style.left = -distance + 'px';
});






