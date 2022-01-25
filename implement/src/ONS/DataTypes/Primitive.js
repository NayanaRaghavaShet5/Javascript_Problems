// Primitive - Number, Boolean, String, null and undefined

//Non- Primitive - Objects, Arrays and functions

var a = {name : "Mahadeva"};

var b = a;

console.log('copied things before', a, b);

a.name = "Mahadeva Parvathi";

console.log('copied things after', a, b);

//this will change in both because its copied by reference and not copied by value 
//i.e it has 2 hands and 1 head