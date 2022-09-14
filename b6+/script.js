"use strict";
function buildWrapper(tag) {
  function wrapFunc(text, getObj) {
    let kov = '';
    let objMnemonic = {
      '\'': '&apos;',
      '\"': '&quot;',
      '\&': '&amp;',
      '<': '&lt;',
      '>': '&gt;'
    }
    for (let k in getObj) {
      let attribute = ` ${k}="${getObj[k]}"`;
      kov += attribute;
    }
    for (let i = 0; i < text.length; i++) {
      if (text[i] in objMnemonic) {
        text = text.split(text[i]).join(objMnemonic[text[i]]);
      }
    }
    let start = kov ? `<${tag}${kov}>` : `<${tag}>`;
    let end = `</${tag}>`;
    return `${start}${text}${end}`
  }
  return wrapFunc;
}
let wrapP = buildWrapper('P');
console.log(wrapP("Однажды в <студёную> зимнюю пору", { lang: "ru" }));
let wrapH1 = buildWrapper('H1');
console.log(wrapH1('СТИХИ', {align:"center",title:"M&M's"}));