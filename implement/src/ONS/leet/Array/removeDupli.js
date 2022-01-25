
let nums = [1,1,1,1,3,4,5,6,6,8,8,9,9,9,99];
var removeDuplicates = function(nums) {
    return nums.filter((a,b) => nums.indexOf(a) === b);
};

console.log(removeDuplicates(nums), 'value');
