/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (nums.length < 1) return [];
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        numMap.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        let currNums = nums[i];
        let complement = target - currNums;
        if (numMap.get(complement) && i !== numMap.get(complement)) {
            return [i, numMap.get(complement)]
        }
    }
    return [];
};