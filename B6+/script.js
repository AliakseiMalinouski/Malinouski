"use strict";
function buildWrapper(tag, text) {
    let start = String(`<${tag}>`);
    let end = String(`</${tag}>`);
    return function (text, attribute) {
        text = text.replace(/&/g, "&amp;");
        text = text.replace(/>/g, "&gt;");
        text = text.replace(/</g, "&lt;");
        text = text.replace(/"/g, "&quot;");
        text = text.replace(/'/g, "&#039;");
        return `${start}${text}${end}`;
    }
}
let wrapP = buildWrapper('P');
console.log( wrapP("Однажды в <студёную> зимнюю пору", {lang:"ru"}) );
