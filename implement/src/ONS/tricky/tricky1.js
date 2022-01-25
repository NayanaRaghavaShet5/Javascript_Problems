function a(x){
x++;
console.log('x',x);
return function() {
    console.log(++x);
}
}

console.log('tricky',a(1)())
