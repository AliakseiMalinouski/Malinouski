'use strict'
function calcArr() {
    let str = '314531513515134';
    let sum = 0;
    let ser = str.split('');
    for (let i = 0; i < ser.length; i++) {
        if (ser.length == 0) {
            return 0;
        }
        sum = + ser[i];
    }
    return sum;
}
console.log(calcArr());

