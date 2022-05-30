function myFunctionOpen() {
    document.getElementById('call').style.display = 'block';
    // opacity
    document.getElementById('rel-opacity').style.opacity = '0.1';
    document.getElementById('hero-opacity').style.opacity = '0.1';
    document.getElementById('con-header').style.opacity = '0.1';
    document.getElementById('slider-opacity').style.opacity = '0.1';
    // overflow-y for body + background
    document.getElementById('over').style.overflowY = 'hidden';
    document.getElementById('over').style.background = 'rgba(0,0,0,.7)';
    // blur for header + rel + con + hero
    document.getElementById('hero-opacity').style.filter = 'blur(5px)';
    document.getElementById('rel-opacity').style.filter = 'blur(5px)';
    document.getElementById('con-header').style.filter = 'blur(5px)';
    document.getElementById('slider-opacity').style.filter = 'blur(5px)';
    
    
}

function myFunctionClose() {
    document.getElementById('call').style.display = 'none';
    document.getElementById('rel-opacity').style.opacity = '1';
    document.getElementById('hero-opacity').style.opacity = '1';
    document.getElementById('con-header').style.opacity = '1';
    document.getElementById('slider-opacity').style.opacity = '1';
    document.getElementById('over').style.overflowY = '';
    document.getElementById('over').style.background = '';
    document.getElementById('hero-opacity').style.filter = '';
    document.getElementById('rel-opacity').style.filter = '';
    document.getElementById('con-header').style.filter = '';
    document.getElementById('slider-opacity').style.filter = '';
    
}