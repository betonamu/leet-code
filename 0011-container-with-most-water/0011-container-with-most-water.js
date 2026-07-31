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

// Approach: Two-Pointer Contraction
// Step 1: Calculate width = right - left
// Step 2: Find minimum height = min(height[left], height[right])
// Step 3: Calculate current area = width * minimum height
// Step 4: Move the shorter line inward (if height[left] < height[right] -> left++, else -> right--)
