let c = [1];

const getLength = (c) => {
    var len = 0;

    while (c[len] !== undefined) {
        len++;
    }
    return len;
}
console.log('length', getLength(c));