/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    if (!height.length) return 0;

    let left = 0;
    let right = height.length - 1;
    let gap = right - left;
    let max = Math.min(height[left], height[right]) * gap;
    while (left < right) {
        height[left] < height[right] ? left++ : right--;

        let gap = right - left;
        let currArea = Math.min(height[left], height[right]) * gap;
        max = Math.max(currArea, max);
    }

    return max;
};