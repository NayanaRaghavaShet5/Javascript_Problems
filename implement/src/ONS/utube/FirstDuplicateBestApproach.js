let arr = [1, 3, 4, 5, 3, 5, 6, 7];

const findDuplicate = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (a[Math.abs(a[i] - 1)] < 0) {
            return Math.abs(a[i]);
        } else {
            a[Math.abs(a[i] - 1)] = -a[Math.abs(a[i] - 1)];
        }
    }
    return -1;
}

console.log(findDuplicate(arr));