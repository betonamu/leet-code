/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        let left = i;
        let right = i + 1;
        while (right < nums.length) {
            if (nums[right] < nums[left]) {
                let temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
            }
            right++;
        }
    }

    console.log({ nums });

    return nums;
};