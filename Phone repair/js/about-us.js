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

function OpenModalMobile() {
    document.getElementById('nav-header').style.display = 'block';
    document.getElementById('repair-now').style.opacity = '0.1';
    document.getElementById('footer-mobile').style.opacity = '0.1';
    document.getElementById('company').style.opacity = '0.1';
    document.getElementById('qualities').style.opacity = '0.1';
    document.getElementById('company').style.filter = 'blur(5px)';
    document.getElementById('qualities').style.filter = 'blur(5px)';
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
    document.getElementById('company').style.opacity = '1';
    document.getElementById('qualities').style.opacity = '1';
    document.getElementById('company').style.filter = '';
    document.getElementById('qualities').style.filter = '';
 
}