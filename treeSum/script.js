"use strict"

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function treeSum(arr) {
    if (arr.length == 0) {
        return 0;
    }
    return arr[0] + treeSum(arr.slice(1));
}
console.log(treeSum(arr));



