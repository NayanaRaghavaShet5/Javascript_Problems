const input = [854548, 781, 1, 5, 8, 97, 875];

function sorting(input) {
    let tmp = 0;
    for (let i = 0; i <= input.length - 1; i++) {
        for (let j = i + 1; j <= input.length - 1; j++) {
            if (input[i] > input[j]) {
                tmp = input[i];
                input[i] = input[j];
                input[j] = tmp;
            }
        }
    }
    return input;
}

console.log(sorting(input));