let arr = [1,21,3,4,5,6];


let val = 21;

let index = arr.indexOf(val)

index = index+1;

if(index < arr.length){
    let value = arr[index]
    console.log('values', value);
}