let offset = 0;
const SliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function () {
    offset = offset + 350;
    if (offset > 700) {
        offset = 0;
    }
    SliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev').addEventListener('click', function () {
    offset = offset - 350;
    if (offset < 0 ) {
        offset = 700;
    }
    SliderLine.style.left = -offset + 'px';
});

function ThanskForFeedBackOpen() {
    document.getElementById('thanks').style.display = 'block';
    

}
function ThanskForFeedBackClose() {
    document.getElementById('thanks').style.display = 'none';
}