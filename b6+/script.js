"use strict";
let buildWrapper = function (tag) {
  return (text, getObj) => {
    let attribute = '';
    if (typeof getObj === 'object') for (let i in getObj) attribute += ` ${i}="${getObj[i].replace(/&/g, '&amp;').replace(/'/g, "&apos;")}"`;
    return('<'+ tag + attribute +'>' + text.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") + '</'+ tag +'>');
  }
}
let wrapH1=buildWrapper("H1");
let wrapP=buildWrapper("P");
console.log(wrapP("Однажды в <студёную> зимнюю пору", { lang: "ru" }));
console.log(wrapH1('СТИХИ', {align:"center",title:"M&M's"}));