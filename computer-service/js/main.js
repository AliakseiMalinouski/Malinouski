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
document.querySelector('.call').addEventListener('click', function ($) {
    document.querySelector('.modal_call').style.display = 'block';
    document.getElementById('body').style.overflowY = 'hidden';
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
    document.querySelector('.accessories').style.backgroundColor = 'rgba(0,0,0,.7)';
    document.querySelector('.accessories').style.filter = 'blur(5px)';
});

document.querySelector('.cross-close').addEventListener('click', function ($) {
    document.querySelector('.modal_call').style.display = 'none';
    document.getElementById('body').style.overflowY = '';
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
    document.querySelector('.accessories').style.backgroundColor = '';
    document.querySelector('.accessories').style.filter = '';
});
document.querySelector('.consumables_click').addEventListener('click', function ($) {
    document.getElementById('consumables').style.display = 'block';
    document.getElementById('description').style.display = 'none';
});
document.querySelector('.close-consumables-block').addEventListener('click', function ($) {
    document.getElementById('consumables').style.display = 'none';
    document.getElementById('description').style.display = 'block';
});
// search
document.querySelector('#search').oninput = function () {
    let self = this.value.trim();
    let variants = document.querySelectorAll('.variants li');
    if (self != '') {
        variants.forEach(elem => {
            if (elem.innerText.search(self) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
                let strS = elem.textContent;
                elem.innerHTML = addColor(strS, elem.innerText.search(self), self.length);
            }
        });
    }
    else {
        variants.forEach(elem => {
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
        });
    }
}

function addColor(str,position,sim) {
    return str.slice(0, position) + '<mark>' + str.slice(position, position + sim) + '</mark>' + str.slice(position + sim);
}
// form + validation
let formContainer = document.querySelector('#container-form');
let formArray = [
    { label: "Введите ваше имя", kind: "longtext", name: "name" },
    { label: "Введите ваш номер телефона", kind: "shorttext", name: "phonenumber" },
    { label: "Введите вашу электронную почту:", kind: "contact", name: "e-mail" },
];
function createForm(array, form) {
    const formTag = document.forms.info;
    let tag;
    let spanError = document.getElementById('span-error1');
    let spanErrorNumber = document.getElementById('span-error2');
    let spanErrorEmail = document.getElementById('span-error3');
    let delArr = ['{', '}', '*', '&', '+', '[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
    array.forEach((elem) => {
        if (elem.kind == 'longtext') {
            let label = document.createElement('label');
            label.innerHTML = elem.label;
            label.classList.add('label');
            form.appendChild(label);
            tag = document.createElement('input');
            tag.setAttribute('type', 'text');
            tag.name = elem.name;
            tag.setAttribute('placeholder', 'Имя*');
            tag.setAttribute('maxlength', '20');
            tag.setAttribute('id', 'tag');
            tag.classList.add('input_style');
            tag.classList.add('lower');
            form.appendChild(tag);
            tag.addEventListener('keydown', (EO) => {
                if (['{', '}', '*', '&', '+','[', ']', '#', '$', '%', '^', '(', ')', '=', '<', '>', '|', '?', '!', '`', '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(EO.key)) {
                EO = EO || window.event;
                EO.preventDefault();
            } 
            });
            document.getElementById('tag').addEventListener('blur', function (EO) {
                if (this.value == '') {
                    alert('Поле с именем не может быть пустным, пожалуйста, повторите попытку');
                    spanError.classList.add('active');
                    EO.preventDefault();
                }
                delArr.forEach((element) => {
                    if (this.value.includes(element)) {
                        alert('В строке с именем находятся недопустимые символы, пожалуйста, повторите попытку');
                        spanError.classList.add('active');
                        this.value = null;
                        EO.preventDefault();
                    }
                });
                if (this.value) {
                    spanError.classList.remove('active');
                }
            });
        }
        if (elem.kind == 'shorttext') {
            let label = document.createElement('label');
            label.innerHTML = elem.label;
            label.classList.add('label');
            form.appendChild(label);
            tag = document.createElement('input');
            tag.setAttribute('type', 'number');
            tag.setAttribute('placeholder', '+7 --- --- -- --*');
            tag.setAttribute('maxlength', '20');
            tag.name = elem.name;
            tag.classList.add('input_style');
            form.appendChild(tag);
            tag.addEventListener('blur', (EO) => {
                EO = EO || window.event; 
                if (tag.value == '') {
                    alert('Вы не заполнили данные, попробуйте еще раз, чтобы продолжить');
                    spanErrorNumber.classList.add('active');
                    tag.value = null;
                    EO.preventDefault();
                }
                if (tag.value) {
                    spanErrorNumber.classList.remove('active');
                }
                if (tag.value.length < 12) {
                    alert('Номер введён некорректно: количество цифр в номере не соотвествует действительности, повторите попыку');
                    spanErrorNumber.classList.add('active');
                }
                if (tag.value.length > 12) {
                    alert('Номер введён некорректно: количество цифр в номере не соотвествует действительности, повторите попыку');
                    spanErrorNumber.classList.add('active');
                }
            });
            tag.addEventListener('keydown', function (EO) {
                EO = EO || window.event;
                if (['+', '-', 'e', 'E'].includes(EO.key)) {
                    EO.preventDefault();
                }
            });
            tag.addEventListener('paste', function (EO) {
                EO = EO || window.event;
                if (['+', '-', 'e', 'E'].includes(EO.key)) {
                    EO.preventDefault();
                }
            })
        }
        if (elem.kind == 'contact') {
            let label = document.createElement('label');
            label.innerHTML = elem.label;
            label.classList.add('label');
            form.appendChild(label);
            tag = document.createElement('input');
            tag.setAttribute('type', 'email');
            tag.setAttribute('placeholder', '*e-mail');
            tag.name = elem.name;
            tag.classList.add('input_style');
            form.appendChild(tag);
            tag.addEventListener('blur', function (EO) {
                if (this.value == '') {
                    alert('Вы не заполнили данные, попробуйте еще раз, чтобы продолжить');
                    spanErrorEmail.classList.add('active');
                    EO.preventDefault();
                }
                if (this.value.length > 50) {
                    alert('Недопустимая длина e-mail, повторите попытку');
                    this.value = null;
                }
            });
            const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
            function onInput() {
                if (isEmailValid(tag.value)) {
                spanErrorEmail.classList.remove('active');
            } else {
                spanErrorEmail.classList.add('active');
            }
            }
            tag.addEventListener('input', onInput);
            function isEmailValid(value) {
                return emailReg.test(value);
            }
        }
    });
    
}
createForm(formArray, document.forms.form1);
