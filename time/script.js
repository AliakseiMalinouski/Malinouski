"use strict";
let currentDateSpan = document.getElementById('current_date');
function getDate(time) {
    let arrayMounth = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let Y = time.getFullYear();
    let M = time.getMonth();
    for (let i = 0; i < arrayMounth.length; i++) {
        let mounth = arrayMounth[i];
        (M === 0) ? M = arrayMounth[1] : M;
        (M === 1) ? M = arrayMounth[2] : M;
        (M === 2) ? M = arrayMounth[3] : M;
        (M === 3) ? M = arrayMounth[4] : M;
        (M === 4) ? M = arrayMounth[5] : M;
        (M === 5) ? M = arrayMounth[6] : M;
        (M === 6) ? M = arrayMounth[7] : M;
        (M === 7) ? M = arrayMounth[8] : M;
        (M === 8) ? M = arrayMounth[9] : M;
        (M === 9) ? M = arrayMounth[10] : M;
        (M === 10) ? M = arrayMounth[11] : M;
        (M === 11) ? M = arrayMounth[12] : M;
    }
    return `${M} ${Y}`;
}
const currentDate = getDate(new Date());
currentDateSpan.innerHTML = currentDate;