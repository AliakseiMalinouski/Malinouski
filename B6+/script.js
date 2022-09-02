"use strict";
function buildWrapper(tag) {
    let start;
    let end;
    let newObj;
    return function (text, obj) {
        if (typeof obj === 'object') {
            newObj = JSON.stringify(obj).replace(/[{-}-"]/g, '').replace(/:/g, '=').replace(/,/g, ' ');
        }
        start = String(`<${tag} ${newObj}>`);
        end = String(`</${tag}>`);
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