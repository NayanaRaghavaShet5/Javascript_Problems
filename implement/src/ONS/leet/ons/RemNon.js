let arr = [0,1,0,1,0,1,99]
let arr2 = [1,2,1,3,2,5]
let nums= [2,2,1]
let nums2 = [1]

// this method helps to remove any number of duplicate values and returns only one non-repeated value
const getNonRepeated = (arr) => {

    let val = arr.filter((a, b) => arr.indexOf(a) !== b)
    return arr.filter((el) => !val.includes(el))
}

console.log(getNonRepeated(arr2))