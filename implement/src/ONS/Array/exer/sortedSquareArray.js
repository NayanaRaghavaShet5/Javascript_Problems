const input = [-8, -10, 1, 2, 3];

function getSortedSquared(input) {
    let output = input.map(value => {
        return value * value;
    });
    return output.sort((a, b) => { return a - b });
}

const ouAr = getSortedSquared(input);
console.log('ouAr', ouAr);

//efficient way
function effi(input) {
    let result = [];
    let right = input.length - 1;
    let left = 0;
    for (let i = input.length - 1; i >= 0; i--) {
        if (Math.abs(input[left]) > input[right]) {
            result[i] = input[left] * input[left];
            left++;
        } else {
            result[i] = input[right] * input[right];
            right--;
        }
    }
    return result;
}

const check = effi(input);
console.log('effi', check);