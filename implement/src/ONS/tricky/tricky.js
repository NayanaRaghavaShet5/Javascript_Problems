let num = 0;
async function increment() {
    num += await 2;
    console.log("inside", num);
}

increment();
num += 1;
console.log('outside', num);