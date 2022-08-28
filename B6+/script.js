"use strict";
function buildWrapper(tag, text) {
    let start = String(`<${tag}>`);
    let end = String(`</${tag}>`);
    return `${start}${text}${end}`;
}
let wrapP = buildWrapper('P', 'Однажды в студёную зимнюю пору');
console.log(wrapP);
