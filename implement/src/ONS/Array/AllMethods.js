var item = [
    { name: "pen", price: 10 },
    { name: "book", price: 200 },
    { name: "kite", price: 100 },
    { name: "mango", price: 8 },
    { name: "apple", price: 5 },
    { name: "banana", price: 20 },
    { name: "diamond", price: 1000 },
    { name: "gold", price: 1010 }
]

//filter
let filtered = item.filter((item) => {
    return item.name !== "pen"; //has return statement
});

console.log('filtered', filtered);
//map
let mapped = item.map((item) => {
    return item.price * 2; //has return statement
});
console.log('mapped', mapped);
//forEach
item.forEach((item) => {
    console.log('foreached', item.price); //has no return statement
});
//find
let items = item.find((item) => {
    return item.price > 1000; //finds first occurence i.e next value alone
})
console.log('items', items);
//some
let somes = item.some((item) => {
    return item.price === 100000; //has return statement
});
console.log('somes', somes);
//every 
let everys = item.every((item) => {
    return item.price >= 5; //tells true or false if all the elements of an array satisfies the condition
})
console.log('everys', everys);
//includes

let newAr = [1,2,3,4,5,6,7,8];
console.log(newAr.includes(10)); //its similar to find- to find an element
//reduce
let reduces = item.reduce((currTotal, item) => {
return item.price+currTotal;
}, 0); //its the initial value to sum
console.log('reduces', reduces);