
var home;
function CallTheMasterAtHome() {
    if(document.getElementById('to_the_house')){
        onclick = alert('Ваша заявка была отправлена!\nОстались вопросы? Позвоните нам!') = home;
     }
}


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

