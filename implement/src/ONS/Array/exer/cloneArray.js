const arr = [1,2,[1,2]];

//method one
const cloneArray = (arr) => {
return arr.splice(0);
}

//method two
const clones = (arr) => {
    return JSON.parse(JSON.stringify(arr));
}

let a = [{ x:{z:1} , y: 2}];
//this works only for array of Objects
let b = JSON.parse(JSON.stringify(a));

console.log(b);
console.log(cloneArray(arr));
console.log(clones(arr));