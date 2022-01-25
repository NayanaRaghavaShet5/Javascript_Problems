let c = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < c.length; i++) {
    console.log('all', c[i]);
}

const print = (c) => {
    var len = 0;
    while (c[len] !== undefined) {
        console.log('an', c[len]);
        len++;
    }
}

console.log(print(c));