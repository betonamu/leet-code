/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (!nums.length) return 0;
    nums.sort((a, b) => a - b);

    let left = 0;
    for (let right = 1; right < nums.length; right++) {
        if (nums[left] !== nums[right]) {
            left++;
            nums[left] = nums[right];
        }
    }

    return left + 1;
};