let arr = [3];
let arr1 = [-2,-1];

// [1,1,2,2,3,5]

let input = [...arr, ...arr1]
let sortedArray = input.sort((a,b) => {return a-b});

console.log('sortedArray', sortedArray);
const findMedian = (sortedArray) => {
    let length = sortedArray.length;
    let middle;
    if (length%2 !== 0) {
        middle = Math.floor(length /2);
        console.log('middle', middle);
        return sortedArray[middle];
    } else if(length%2 === 0) {
        middle = Math.floor(length /2);
        return (sortedArray[middle] + sortedArray[middle-1])/2;
    }
}

console.log(findMedian(sortedArray))