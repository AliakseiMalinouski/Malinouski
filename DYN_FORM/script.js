"use strict";
var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
    ];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
    ];
function createForm(F1, F2) {
    let tag;
    F1.forEach(elem => {
        if (elem.name == 'sitename' || elem.name == 'lastname') {
            let label = document.createElement('label');
            label.innerHTML = elem.label;
            label.classList.add('label');
            F2.appendChild(label)
            tag = document.createElement('input');
            tag.setAttribute('type', 'text');
            tag.classList.add('wh');
            tag.classList.add('block');
            tag.classList.add('margin');
            F2.appendChild(tag);
        }
        if (elem.name == 'siteurl' || elem.name == 'firstname' || elem.name == 'secondname') {
            let label = document.createElement('label');
            label.innerHTML = elem.label;
            F2.appendChild(label)
            tag = document.createElement('input');
            tag.setAttribute('type', 'text');
            tag.classList.add('wh');
            tag.classList.add('block');
            tag.classList.add('margin');
            F2.appendChild(tag);
        }
        if (elem.kind == 'number') {
            let label = document.createElement('label');
            label.innerHTML = elem.label;
            F2.appendChild(label);
            tag = document.createElement('input');
            tag.setAttribute('type', 'number');
            tag.classList.add('n');
            tag.classList.add('block');
            tag.classList.add('margin');
            F2.appendChild(tag);
      }
        if (elem.name == 'email') {
          let label = document.createElement('label');
          label.innerHTML = elem.label;
          F2.appendChild(label);
          tag = document.createElement('input');
          tag.setAttribute('type', 'email');
          tag.classList.add('block');
          tag.classList.add('margin');
          tag.classList.add('email');
          F2.appendChild(tag);
      }
      if (elem.name == 'division') {
          let label = document.createElement('label');
          label.innerHTML = elem.label;
          label.classList.add('mr');
          F2.appendChild(label);
          tag = document.createElement('select');
          F2.appendChild(tag);
          elem.variants.forEach((underElement) => {
          let option = document.createElement('option');
          option.setAttribute('value', underElement.value);
          option.textContent = underElement.text;
          tag.appendChild(option);
          });
          let br = document.createElement('br');
          let brr = document.createElement('br');
          F2.appendChild(br);
          F2.appendChild(brr);
      }
      if (elem.name == 'payment') {
        let label = document.createElement('label');
        label.innerHTML = elem.label;
        F2.appendChild(label);
        let div = document.createElement('div');
        elem.variants.forEach(underElement => {
        tag = document.createElement('input');
        tag.setAttribute('type', 'radio');
        tag.name="payment";
        tag.setAttribute('value', underElement.value);          
        let span = document.createElement('span');
        span.textContent=underElement.text;
        div.appendChild(tag);
        span.classList.add('mr');
        div.appendChild(span);
        });
        div.classList.add('block-radio-buttons')
        F2.appendChild(div);
        let br = document.createElement('br');
        F2.appendChild(br);
      }
      if (elem.name == 'votes') {
        let label = document.createElement('label');
        label.innerHTML = elem.label;
        label.classList.add('mr');
        F2.appendChild(label);
        tag = document.createElement('input');
        tag.setAttribute('type', 'checkbox');
        tag.setAttribute('checked', true);
        F2.appendChild(tag);
        let br = document.createElement('br');
        F2.appendChild(br);
      }
      if (elem.name == 'description') {
        let label = document.createElement('label');
        label.innerHTML = elem.label;
        F2.appendChild(label);
        let br = document.createElement('br');
        F2.appendChild(br);
        tag = document.createElement('textarea');
        tag.classList.add('n');
        tag.classList.add('block');
        F2.appendChild(tag);
      }
      if (elem.kind == 'submit') {
        let button = document.createElement('button');
        button.setAttribute('type', 'submit');
        button.innerHTML = elem.caption;
        F2.appendChild(button);
        let br = document.createElement('br');
        F2.appendChild(br);
      }
    });
}
createForm(formDef1, document.forms.form1);
createForm(formDef2, document.forms.form2);

