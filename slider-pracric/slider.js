let offset = 0;
const SliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function () {
    offset = offset + 320;
    if (offset > 960) {
        offset = 0;
    }

    SliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev').addEventListener('click', function () {
    offset = offset - 320;
    if (offset < 0) {
        offset = 960;
    }

    SliderLine.style.left = -offset + 'px';
});