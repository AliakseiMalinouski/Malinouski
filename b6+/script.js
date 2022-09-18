"use strict";
let buildWrapper = function (tag) {
  return (text, getObj) => {
    let attribute = '';
    if (typeof getObj === 'object') for (let i in getObj) attribute += ` ${i}="${getObj[i].replace(/&/g, '&amp;').replace(/'/g, "&apos;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")}"`;
    return `<${tag}${attribute}>${text.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")}</${tag}>`;
  }
}
let wrapP = buildWrapper("P");
let wrapH1 = buildWrapper("H1");
console.log(wrapP("Однажды в <студёную> зимнюю пору", { lang: "ru" }));
console.log(wrapH1('СТИХИ', {align:"center",title:"M&M's"}));