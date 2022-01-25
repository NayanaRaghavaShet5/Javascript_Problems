const array = [48, 2, 50, -32, 56, 85, 74];

const sort = (arr) => {

    let done = false;
    while (!done) {
        done = true;
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] > arr[i + 1]) {
                done = false;
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp
            }
        }
    }
    return arr
}

console.log('sort', sort(array));