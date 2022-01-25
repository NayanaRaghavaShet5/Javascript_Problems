const getRandom = (num) => {
return Math.floor(Math.random(num)*5);
}

//console.log(getRandom(5));
const arr = ["Mahadeva", "Appa", "Ammaa"];

const ranAr = (arr) => {
    const num = Math.floor(Math.random() * arr.length);
    return arr[num];
}

console.log(ranAr(arr));