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
    if (distance > 2466) {
        distance = 0;
    }
    SliderLine.style.left = -distance + 'px';
});

document.querySelector('.prev').addEventListener('click', function () {
    distance = distance - 922;
    if (distance < 0 ) {
        distance = 1846;
    }
    SliderLine.style.left = -distance + 'px';
});
// catalog open menu
let catalogOpen = document.querySelector('.open-menu-catalog');
let catalogClose = document.querySelector('.close-menu-catalog');
document.querySelector('.open-menu-catalog').addEventListener('click', function ($) {
    document.getElementById('catalog_menu').style.display = 'block';
    document.getElementById('open-menu-catalog').style.display = 'none';
    document.getElementById('close-menu-catalog').style.display = 'block';
});
document.querySelector('.close-menu-catalog').addEventListener('click', function ($) {
    document.getElementById('close-menu-catalog').style.display = 'none';
    document.getElementById('open-menu-catalog').style.display = 'block';
    document.getElementById('catalog_menu').style.display = 'none';
});
let call = document.querySelector('.call');
document.querySelector('.call').addEventListener('click', function ($) {
    document.querySelector('.modal_call').style.display = 'block';
    document.querySelector('.header').style.backgroundColor = 'rgba(0,0,0,.7)';
    document.querySelector('.header').style.filter = 'blur(5px)';
    document.querySelector('.categories').style.backgroundColor = 'rgba(0,0,0,.7)';
    document.querySelector('.categories').style.filter = 'blur(5px)';
    document.querySelector('.catalog_slider').style.backgroundColor = 'rgba(0,0,0,.7)';
    document.querySelector('.catalog_slider').style.filter = 'blur(5px)';
    document.querySelector('.dignities').style.backgroundColor = 'rgba(0,0,0,.7)';
    document.querySelector('.dignities').style.filter = 'blur(5px)';
    document.querySelector('.banners').style.backgroundColor = 'rgba(0,0,0,.7)';
    document.querySelector('.banners').style.filter = 'blur(5px)';
    document.querySelector('.partners').style.backgroundColor = 'rgba(0,0,0,.7)';
    document.querySelector('.partners').style.filter = 'blur(5px)';
});
let crossClose = document.querySelector('.cross-close');
document.querySelector('.cross-close').addEventListener('click', function ($) {
    document.querySelector('.modal_call').style.display = 'none';
    document.querySelector('.header').style.backgroundColor = '';
    document.querySelector('.header').style.filter = '';
    document.querySelector('.categories').style.backgroundColor = '';
    document.querySelector('.categories').style.filter = '';
    document.querySelector('.catalog_slider').style.backgroundColor = '';
    document.querySelector('.catalog_slider').style.filter = '';
    document.querySelector('.dignities').style.backgroundColor = '';
    document.querySelector('.dignities').style.filter = '';
    document.querySelector('.banners').style.backgroundColor = '';
    document.querySelector('.banners').style.filter = '';
    document.querySelector('.partners').style.backgroundColor = '';
    document.querySelector('.partners').style.filter = '';
});






