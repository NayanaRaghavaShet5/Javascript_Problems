function isEven(element) {
    return element % 2 === 0;
}

//console.log(isEven(2));

//callback

[1,2,3,4,5].every(el => console.log(isEven(el)));