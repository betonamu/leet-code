/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        const lower = Math.min(height[left], height[right]);
        let gap = right - left;
        let currArea = gap * lower;
        if (currArea > maxArea) {
            maxArea = currArea;
        }

        height[left] > height[right] ? right-- : left++;
    }

    return maxArea;
};

// Approach: Two-pointer contraction Algorithm
