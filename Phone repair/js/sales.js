function ThanskForFeedBackOpen() {
    document.getElementById('thanks').style.display = 'block';
    

}
function ThanskForFeedBackClose() {
    document.getElementById('thanks').style.display = 'none';
}
function OpenModalMobile() {
    document.getElementById('nav-header').style.display = 'block';
    document.getElementById('change-display1').style.opacity = '0.1';
    document.getElementById('change-display2').style.opacity = '0.1';
    document.getElementById('change-display3').style.opacity = '0.1';
    document.getElementById('repair-now').style.opacity = '0.1';
    document.getElementById('footer-mobile').style.opacity = '0.1';
    document.getElementById('change-display1').style.filter = 'blur(5px)';
    document.getElementById('change-display2').style.filter = 'blur(5px)';
    document.getElementById('change-display3').style.filter = 'blur(5px)';
    document.getElementById('repair-now').style.filter = 'blur(5px)';
    document.getElementById('footer-mobile').style.filter = 'blur(5px)';
    document.getElementById('logo').style.opacity = '0.1';
    
    
    
    
}
function CloseModalMobile() {
    document.getElementById('nav-header').style.display = 'none';
    document.getElementById('change-display1').style.opacity = '1';
    document.getElementById('change-display2').style.opacity = '1';
    document.getElementById('change-display3').style.opacity = '1';
    document.getElementById('repair-now').style.opacity = '1';
    document.getElementById('footer-mobile').style.opacity = '1';
    document.getElementById('change-display1').style.filter = '';
    document.getElementById('change-display2').style.filter = '';
    document.getElementById('change-display3').style.filter = '';
    document.getElementById('repair-now').style.filter = '';
    document.getElementById('footer-mobile').style.filter = '';
    document.getElementById('logo').style.opacity = '1';
}