const arr = [1, 2, -3, 4, -67.5, -9];

//without reduce
let sum = 0;

for (value of arr) {
    sum = sum + value;
}

console.log('Sum', sum);


//using reduce method
const data = arr.reduce((acc, curValue) => {
return acc+curValue;
}, 0);

console.log('data', data);
