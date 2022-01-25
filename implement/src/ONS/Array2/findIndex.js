var a = [1,2,3,4,5,5,6,7];
var res = a.entries();
//console.log(res)

const val = a.findIndex(item => item>5)
console.log('data', val);

for(let item of a) {
    console.log('array', a[item])
}