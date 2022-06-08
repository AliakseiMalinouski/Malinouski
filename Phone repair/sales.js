function ThanskForFeedBackOpen() {
    document.getElementById('thanks').style.display = 'block';
    

}
function ThanskForFeedBackClose() {
    document.getElementById('thanks').style.display = 'none';
}
function OpenModalMobile() {
    document.getElementById('nav-header').style.display = 'block';
    document.getElementById('main').style.opacity = '0.1';
    document.getElementById('over').style.overflowY = 'hidden';
    document.getElementById('over').style.background = 'rgba(0,0,0,.7)';
    document.getElementById('none-fone').style.background = 'none';
    document.getElementById('main').style.filter = 'blur(5px)';
    document.getElementById('logo').style.opacity = '0.1';
    document.getElementById('logo').style.filter = 'blur(5px)';
    
}
function CloseModalMobile() {
    document.getElementById('nav-header').style.display = 'none';
    document.getElementById('main').style.opacity = '1';
    document.getElementById('over').style.overflowY = '';
    document.getElementById('over').style.background = '';
    document.getElementById('none-fone').style.background = '';
    document.getElementById('main').style.filter = '';
    document.getElementById('logo').style.opacity = '1';
    document.getElementById('logo').style.filter = '';
   
}