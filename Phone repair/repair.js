function myFunctionOpen() {
    document.getElementById('call').style.display = 'block';
    document.getElementById('rel-opacity').style.opacity = '0.1';
    document.getElementById('hero-opacity').style.opacity = '0.1';
    document.getElementById('con-header').style.opacity = '0.1';
    document.getElementById('slider-opacity').style.opacity = '0.1';
    document.getElementById('over').style.overflowY = 'none';
    
}

function myFunctionClose() {
    document.getElementById('call').style.display = 'none';
    document.getElementById('rel-opacity').style.opacity = '1';
    document.getElementById('hero-opacity').style.opacity = '1';
    document.getElementById('con-header').style.opacity = '1';
    document.getElementById('slider-opacity').style.opacity = '1';
    document.getElementById('over').style.overflowY = '1';
}