let nums = [-1, 0, 1, 2, -1, -4];

var threeSum = function (nums) {
    let fin = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = i + 2; k < nums.length; k++) {
                if ((nums[i] + nums[j] + nums[k]) === 0) {
                    fin.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    console.log('fin', fin);
};

threeSum(nums);