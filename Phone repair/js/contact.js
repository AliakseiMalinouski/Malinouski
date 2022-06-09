function ThanskForFeedBackOpen() {
    document.getElementById('thanks').style.display = 'block';
}
function ThanskForFeedBackClose() {
    document.getElementById('thanks').style.display = 'none';
}
function OpenModalMobile() {
    document.getElementById('nav-header').style.display = 'block';
    document.getElementById('logo-con').style.opacity = '0.1';
    document.getElementById('wrap').style.opacity = '0.1';
    document.getElementById('logo-con').style.filter = 'blur(5px)';
    document.getElementById('wrap').style.filter = 'blur(5px)';  
}
function CloseModalMobile() {
    document.getElementById('nav-header').style.display = 'none';
    document.getElementById('logo-con').style.opacity = '1';
    document.getElementById('wrap').style.opacity = '1';
    document.getElementById('logo-con').style.filter = '';
    document.getElementById('wrap').style.filter = '';   
}


