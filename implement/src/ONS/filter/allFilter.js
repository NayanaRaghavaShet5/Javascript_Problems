let arr = [1,3,4,5,5,6,7,3,5,7,3,4];
let another = [4,5,6,9];

console.log(arr.filter(a => a > 5)); //[ 6, 7, 7 ]

console.log(arr.filter((a, b) => arr.indexOf(a) === b)) // remove duplicate

console.log(arr.filter((a, b) => {
    return !another.includes(a)
}));