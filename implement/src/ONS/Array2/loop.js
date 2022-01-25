//for of loop - ARRAYS ->array of string
const arr = ['facebook', 'instagram', 'twitter', 'netflix', 'amazon'];

for (const value of arr) {
    //console.log(value);
}

//for in loop - OBJECTS 

const objData = { fb: 'facebook', nf: 'Netflix' }; //never put a quotes to object keys

for (const obj in objData) {
    //console.log('values', obj); // this will always give us the keys and we can pass this keys to anywhere and can get the datas
}

const data = ['1', '2', '3', '4', '5'];
for (let i = 0; i < data.length; i++) {
    //console.log(data[i]);
}

//reverse
for (let i = data.length-1; i>= 0 ; i--) {
    console.log(data[i]);
}


// foreach
data.forEach((ele) => {
console.log('ele', ele);
});
