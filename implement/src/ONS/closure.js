function Addition(x) {
    return function add(y){
        return x+y;
    }
}

const getValue = Addition(5);

console.log('getValue', getValue); //it will give the reference of that corresponding function

console.log('executing', getValue(7)); //this will execute it and it gives the total sum

console.log('finerway', Addition(4)(3));//power of closure