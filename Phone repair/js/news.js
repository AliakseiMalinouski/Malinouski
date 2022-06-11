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
function ThanskForFeedBackOpen() {
    document.getElementById('thanks').style.display = 'block';
    

}
function ThanskForFeedBackClose() {
    document.getElementById('thanks').style.display = 'none';
}

function OpenModalMobile() {
    document.getElementById('nav-header').style.display = 'block';
    document.getElementById('repair-now').style.opacity = '0.1';
    document.getElementById('footer-mobile').style.opacity = '0.1';
    document.getElementById('news').style.opacity = '0.1';
    document.getElementById('news').style.filter = 'blur(5px)';
    document.getElementById('repair-now').style.filter = 'blur(5px)';
    document.getElementById('footer-mobile').style.filter = 'blur(5px)';
    document.getElementById('logo').style.opacity = '0.1'; 
}
function CloseModalMobile() {
    document.getElementById('nav-header').style.display = 'none';
    document.getElementById('repair-now').style.opacity = '1';
    document.getElementById('footer-mobile').style.opacity = '1';
    document.getElementById('repair-now').style.filter = '';
    document.getElementById('footer-mobile').style.filter = '';
    document.getElementById('logo').style.opacity = '1';
    document.getElementById('news').style.opacity = '1';
    document.getElementById('news').style.filter = '';
}






