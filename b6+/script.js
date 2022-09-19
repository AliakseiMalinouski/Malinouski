"use strict";
function buildHTML (param) {
  return param.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
let buildWrapper = function (tag) {
  return (text, getObj) => {
    let attribute = '';
    if (typeof getObj === 'object') for (let i in getObj) attribute += ` ${i}="${buildHTML(getObj[i])}"`;
    return `<${tag}${attribute}>${buildHTML(text)}</${tag}>`;
  }
}
let wrapP = buildWrapper("P");
let wrapH1 = buildWrapper("H1");
console.log(wrapP("Однажды в <студёную> зимнюю пору", { lang: "ru" }));
console.log(wrapH1('СТИХИ', {align:"center",title:"M&M's"}));