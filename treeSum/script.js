"use strict"


// function treeSum() {
//     let arr =  [ 5, 7,
//         [ 4, [2], 8, [1,3], 2 ],
//         [ 9, [] ],
//         1, 8
//       ]
//     let sum = 0;
//     arr = arr.flat(Infinity);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.length == 0) {
//             return 0;
//         }
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(treeSum());

function treeSum(arr) {
    let sum = 0;
    for (let element of arr) {
        if (typeof element == 'object') {
            sum += treeSum(element);
        }
        else {
            sum += element;
        }
    }
    return sum;
}
console.log(treeSum([ 5, 7,
        [ 4, [2], 8, [1,3], 2 ],
        [ 9, [] ],
        1, 8
    ]));