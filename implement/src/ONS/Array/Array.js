// 1st approach

let arr = [1, 2, 1, 9, 5, 7, 5, 2];
let arr1 = [2, 1, 0.4, 2, 0.4, 0.2, 1.5, 1, 1.1, 1.3, 1.2, 0.2, 0.4, 0.9];

console.log(arr.sort((a, b) => {
    return a - b;
}));

console.log(arr.sort())

// 2nd approach

console.log(arr1.sort(sortingMethod))

function sortingMethod(a, b) {
    if (a === b)
        return 0;

    return a > b ? 1 : -1

}

