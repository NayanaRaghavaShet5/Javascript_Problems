let arr = [1, 3, 4, 5, 3, 5, 6, 7];

const findFirstDuplicate = (arr) => {

    let minimim_val_index = arr.length;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                minimim_val_index = Math.min(minimim_val_index, j);
            }
        }
    }

    if (minimim_val_index === arr.length) {
        return -1;
    } else {
        return arr[minimim_val_index];
    }

}

console.log(findFirstDuplicate(arr));