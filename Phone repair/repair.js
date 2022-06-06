function OpenText() {
    document.getElementById('next-about').style.display = 'block';
    document.getElementById('open-text').style.display = 'none';
    
}
function CloseText() {
    document.getElementById('next-about').style.display = 'none';
    document.getElementById('open-text').style.display = 'block';
    
}
function OpenBrands() {
    document.getElementById('OpenMobileBrandsBlock').style.display = 'flex';
    document.getElementById('button-open-brands').style.display = 'none';
    document.getElementById('button-close-brands').style.display = 'block';
}
function CloseBrands() {
    document.getElementById('OpenMobileBrandsBlock').style.display = 'none';
    document.getElementById('button-open-brands').style.display = 'block';
    document.getElementById('button-close-brands').style.display = 'none';
}
function OpenDisplayMobile() {
    document.getElementById('list-display-mobile').style.display = 'block';
    document.getElementById('display-mobile').style.height = '335px';
    document.getElementById('close-button-list-display-mobile').style.display = 'block';
    document.getElementById('open-button-list-display-mobile').style.display = 'none';
    
    

    
    
    
}
function CloseDisplayMobile() {
    document.getElementById('list-display-mobile').style.display = 'none';
    document.getElementById('display-mobile').style.height = '100px';
    document.getElementById('close-button-list-display-mobile').style.display = 'none';
    document.getElementById('open-button-list-display-mobile').style.display = 'block';
    document.getElementById('close-button-list-dinamics-mobile').style.top = '170px';
    document.getElementById('close-button-list-dinamics-mobile').style.top = '40px';
   
    
}
function OpenDinamicsMobile() {
    document.getElementById('list-dinamics-mobile').style.display = 'block';
    document.getElementById('dinamics-mobile').style.height = '300px';
    document.getElementById('close-button-list-dinamics-mobile').style.display = 'block';
    document.getElementById('open-button-list-dinamics-mobile').style.display = 'none';
    
    
}
function CloseDinamicsMobile() {
    document.getElementById('list-dinamics-mobile').style.display = 'none';
    document.getElementById('dinamics-mobile').style.height = '100px';
    document.getElementById('close-button-list-dinamics-mobile').style.display = 'none';
    document.getElementById('open-button-list-dinamics-mobile').style.display = 'block';
}
function OpenButtonsMobile() {
    document.getElementById('list-buttons-mobile').style.display = 'block';
    document.getElementById('buttons-mobile').style.height = '260px';
    document.getElementById('close-button-list-buttons-mobile').style.display = 'block';
    document.getElementById('open-button-list-buttons-mobile').style.display = 'none';
    
    
}
function CloseButtonsMobile() {
    document.getElementById('list-buttons-mobile').style.display = 'none';
    document.getElementById('buttons-mobile').style.height = '100px';
    document.getElementById('close-button-list-buttons-mobile').style.display = 'none';
    document.getElementById('open-button-list-buttons-mobile').style.display = 'block';
}
function OpenNetMobile() {
    document.getElementById('list-net-mobile').style.display = 'block';
    document.getElementById('net-mobile').style.height = '300px';
    document.getElementById('close-button-list-net-mobile').style.display = 'block';
    document.getElementById('open-button-list-net-mobile').style.display = 'none';
}
function CloseNetMobile() {
    document.getElementById('list-net-mobile').style.display = 'none';
    document.getElementById('net-mobile').style.height = '100px';
    document.getElementById('close-button-list-net-mobile').style.display = 'none';
    document.getElementById('open-button-list-net-mobile').style.display = 'block';
}
function OpenBatteryMobile() {
    document.getElementById('list-battery-mobile').style.display = 'block';
    document.getElementById('battery-mobile').style.height = '300px';
    document.getElementById('close-button-list-battery-mobile').style.display = 'block';
    document.getElementById('open-button-list-battery-mobile').style.display = 'none';
}
function CloseBatteryMobile() {
    document.getElementById('list-battery-mobile').style.display = 'none';
    document.getElementById('battery-mobile').style.height = '100px';
    document.getElementById('close-button-list-battery-mobile').style.display = 'none';
    document.getElementById('open-button-list-battery-mobile').style.display = 'block';
}
function OpenCameraMobile() {
    document.getElementById('list-camera-mobile').style.display = 'block';
    document.getElementById('camera-mobile').style.height = '340px';
    document.getElementById('close-button-list-camera-mobile').style.display = 'block';
    document.getElementById('open-button-list-camera-mobile').style.display = 'none';
}
function CloseCameraMobile() {
    document.getElementById('list-camera-mobile').style.display = 'none';
    document.getElementById('camera-mobile').style.height = '100px';
    document.getElementById('close-button-list-camera-mobile').style.display = 'none';
    document.getElementById('open-button-list-camera-mobile').style.display = 'block';
}
function OpenSpeakerMobile() {
    document.getElementById('list-speaker-mobile').style.display = 'block';
    document.getElementById('speaker-mobile').style.height = '300px';
    document.getElementById('close-button-list-speaker-mobile').style.display = 'block';
    document.getElementById('open-button-list-speaker-mobile').style.display = 'none';
}
function CloseSpeakerMobile() {
    document.getElementById('list-speaker-mobile').style.display = 'none';
    document.getElementById('speaker-mobile').style.height = '100px';
    document.getElementById('close-button-list-speaker-mobile').style.display = 'none';
    document.getElementById('open-button-list-speaker-mobile').style.display = 'block';
}
function OpenOtherProblemsMobile() {
    document.getElementById('list-other-problems-mobile').style.display = 'block';
    document.getElementById('other-problems-mobile').style.height = '380px';
    document.getElementById('close-button-list-other-problems-mobile').style.display = 'block';
    document.getElementById('open-button-list-other-problems-mobile').style.display = 'none';
}
function CloseOtherProblemsMobile() {
    document.getElementById('list-other-problems-mobile').style.display = 'none';
    document.getElementById('other-problems-mobile').style.height = '100px';
    document.getElementById('close-button-list-other-problems-mobile').style.display = 'none';
    document.getElementById('open-button-list-other-problems-mobile').style.display = 'block';
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
function myFunctionOpen() {
    document.getElementById('call').style.display = 'block';
    document.getElementById('rel-opacity').style.opacity = '0.1';
    document.getElementById('hero-opacity').style.opacity = '0.1';
    document.getElementById('con-header').style.opacity = '0.1';
    document.getElementById('slider-opacity').style.opacity = '0.1';
    document.getElementById('repair').style.opacity = '0.1';
    document.getElementById('brands').style.opacity = '0.1';
    document.getElementById('opinion').style.opacity = '0.1';
    document.getElementById('reviews').style.opacity = '0.1';
    document.getElementById('sale').style.opacity = '0.1';
    document.getElementById('master').style.opacity = '0.1';
    document.getElementById('work').style.opacity = '0.1';
    document.getElementById('our_service_center').style.opacity = '0.1';
    document.getElementById('courier').style.opacity = '0.1';
    document.getElementById('contacts').style.opacity = '0.1';
    document.getElementById('footer').style.opacity = '0.1';
    document.getElementById('footer-mobile').style.opacity = '0.1';
    document.getElementById('over').style.overflowY = 'hidden';
    document.getElementById('over').style.background = 'rgba(0,0,0,.7)';
    document.getElementById('none-fone').style.background = 'none';
    document.getElementById('hero-opacity').style.filter = 'blur(5px)';
    document.getElementById('rel-opacity').style.filter = 'blur(5px)';
    document.getElementById('con-header').style.filter = 'blur(5px)';
    document.getElementById('slider-opacity').style.filter = 'blur(5px)';
    document.getElementById('repair').style.filter = 'blur(5px)';
    document.getElementById('brands').style.filter = 'blur(5px)';
    document.getElementById('opinion').style.filter = 'blur(5px)';
    document.getElementById('reviews').style.filter = 'blur(5px)';
    document.getElementById('sale').style.filter = 'blur(5px)';
    document.getElementById('master').style.filter = 'blur(5px)';
    document.getElementById('work').style.filter = 'blur(5px)';
    document.getElementById('our_service_center').style.filter = 'blur(5px)';
    document.getElementById('courier').style.filter = 'blur(5px)';
    document.getElementById('contacts').style.filter = 'blur(5px)';
    document.getElementById('footer').style.filter = 'blur(5px)';
    document.getElementById('footer-mobile').style.filter = 'blur(5px)';
}

function myFunctionClose() {
    document.getElementById('call').style.display = 'none';
    document.getElementById('rel-opacity').style.opacity = '1';
    document.getElementById('hero-opacity').style.opacity = '1';
    document.getElementById('con-header').style.opacity = '1';
    document.getElementById('slider-opacity').style.opacity = '1';
    document.getElementById('repair').style.opacity = '1';
    document.getElementById('brands').style.opacity = '1';
    document.getElementById('opinion').style.opacity = '1';
    document.getElementById('reviews').style.opacity = '1';
    document.getElementById('sale').style.opacity = '1';
    document.getElementById('master').style.opacity = '1';
    document.getElementById('work').style.opacity = '1';
    document.getElementById('our_service_center').style.opacity = '1';
    document.getElementById('courier').style.opacity = '1';
    document.getElementById('contacts').style.opacity = '1';
    document.getElementById('footer').style.opacity = '1';
    document.getElementById('footer-mobile').style.opacity = '1';
    document.getElementById('over').style.overflowY = '';
    document.getElementById('over').style.background = '';
    document.getElementById('none-fone').style.background = '';
    document.getElementById('hero-opacity').style.filter = '';
    document.getElementById('rel-opacity').style.filter = '';
    document.getElementById('con-header').style.filter = '';
    document.getElementById('slider-opacity').style.filter = '';
    document.getElementById('repair').style.filter = ''; 
    document.getElementById('brands').style.filter = '';
    document.getElementById('opinion').style.filter = '';
    document.getElementById('reviews').style.filter = '';
    document.getElementById('sale').style.filter = '';
    document.getElementById('master').style.filter = '';
    document.getElementById('work').style.filter = '';
    document.getElementById('our_service_center').style.filter = '';
    document.getElementById('courier').style.filter = '';
    document.getElementById('contacts').style.filter = '';
    document.getElementById('footer').style.filter = '';
    document.getElementById('footer-mobile').style.filter = '';
}

