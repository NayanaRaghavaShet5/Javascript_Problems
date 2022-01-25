const ar = [1,2,3,4,5];
console.log(ar.toString()); //1,2,3,4,5

console.log({}.toString()); //[object Object]
console.log(Object.prototype.toString.call([])); //[object Array]

//to string method is useful