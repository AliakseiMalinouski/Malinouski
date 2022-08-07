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
  if (elem.kind == 'longtext') {
      let label = document.createElement('label');
      label.innerHTML = elem.label;
      let br = document.createElement('br');
      F2.appendChild(label);
      F2.appendChild(br);
      tag = document.createElement('input');
      tag.setAttribute('type', 'text');
      F2.appendChild(tag);
      F2.appendChild(br);
  }
  if (elem.kind == 'number') {
      let label = document.createElement('label');
      label.innerHTML = elem.label;
      let br = document.createElement('br');
      F2.appendChild(label);
      F2.appendChild(br);
      tag = document.createElement('input');
      tag.setAttribute('type', 'number');
      F2.appendChild(tag);
      F2.appendChild(br);
  }
  if (elem.kind == 'shorttext') {
      let label = document.createElement('label');
      label.innerHTML = elem.label;
      let br = document.createElement('br');
      F2.appendChild(label);
      F2.appendChild(br);
      tag = document.createElement('input');
      tag.type = 'text'; 
      F2.appendChild(tag);
      F2.appendChild(br);
  }
  if (elem.kind == 'combo') {
      let label = document.createElement('label');
      label.innerHTML = elem.label;
      let br = document.createElement('br');
      F2.appendChild(label);
      tag = document.createElement('select');
      F2.appendChild(tag);
      elem.variants.forEach(underElem => {
          let option = document.createElement('option');
          option.setAttribute("value", underElem.value);
          option.textContent = underElem.text;
          tag.appendChild(option);
      });
  }
  if (elem.kind == 'radio') {
    let label = document.createElement('label');
    label.innerHTML = elem.label;
    let br = document.createElement('br');
    F2.appendChild(br);
    F2.appendChild(label);
    elem.variants.forEach(underElem => {
      tag = document.createElement('input');
      tag.setAttribute('type', 'radio');
      tag.setAttribute('value', underElem.value);
      tag.name = 'payment';
      F2.appendChild(tag);
      let span = document.createElement('span');
      let br = document.createElement('br');
      span.innerHTML = underElem.text;
      F2.appendChild(span);
      
    });
  }
  let div = document.createElement('div');
  F2.appendChild(div);
  if (elem.kind == 'check') {
    let label = document.createElement('label');
    label.innerHTML = elem.label;
    F2.appendChild(label);
    tag = document.createElement('input'); 
    tag.setAttribute('type', 'checkbox');
    F2.appendChild(tag);
  }
  if (elem.kind == 'memo') {
    let label = document.createElement('label');
    label.innerHTML = elem.label;
    F2.appendChild(label);
    let br = document.createElement('br');
    F2.appendChild(br);
    tag = document.createElement('textarea');
    tag.classList.add('n');
    F2.appendChild(tag);
  }
  if (elem.kind == 'submit') {
    tag = document.createElement('button');
    tag.setAttribute('type', 'submit');
    tag.innerHTML = elem.caption;
    F2.appendChild(tag);
  }
});
} 
createForm(formDef1, document.forms.form1);
createForm(formDef2, document.forms.form2);