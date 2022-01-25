var arr = [false, true, true, undefined, 'empty'];
var arr2 = ['naa', 'yaa', 'naa'];

//First Method:
var arrCopy1 = arr.splice(0);

//console.log('copied array', arrCopy1);

//second method
// this method wont work if the values are  [false, true, true, undefined, 'empty'];
var copy2 = [...arr2];
//console.log('array', copy2);

//third method
var innerArray = [["Mahadeva"]];

var wrongCopy = innerArray.splice(0);
wrongCopy[0].push('Parvathi');

//console.log(innerArray, wrongCopy[0]);

var deepCopy = JSON.parse(JSON.stringify(innerArray));

console.log('deepCopy', deepCopy[0]);

// Object.assign method

var nayaArray = ["appa", "amma", {name:"Mahadeva"}];

var copies = Object.assign([], nayaArray);

console.log("copied Arrays", copies);

nayaArray.name = "Mahadeva Parvathi"

console.log("copied Arrays after copy", copies, nayaArray);