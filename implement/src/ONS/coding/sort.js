let arr = [5, 8, 6, 7, 8, 3, 2, 4, 58, 96, 87, 55, 23, 56, 84];

const sorting = (arr) => {

    let temp;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(sorting(arr));