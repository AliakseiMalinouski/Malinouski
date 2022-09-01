"use strict";
function buildWrapper(tag) {
    let start = String(`<${tag}>`);
    let end = String(`</${tag}>`);
    return function (text, lang) {
        text = text.replace(/&/g, "&amp;");
        text = text.replace(/>/g, "&gt;");
        text = text.replace(/</g, "&lt;");
        text = text.replace(/"/g, "&quot;");
        text = text.replace(/'/g, "&#039;");
        return `${start}${text}${end}`;
    }
}
let wrapP = buildWrapper('P');
console.log(wrapP("Однажды в <студёную> зимнюю пору", { lang: "ru" }));
let wrapH1 = buildWrapper('H1');
console.log(wrapH1('СТИХИ', {align:"center",title:"M&M's"}));
