/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (!nums.length) return 0;
    nums.sort((a, b) => a - b);

    let closest = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum < target) {
                left++;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
            }
            else {
                right--;
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }

    return closest;
};