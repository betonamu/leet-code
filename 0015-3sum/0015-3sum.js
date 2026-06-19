/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (!nums || nums.length < 3) return [];
    
    // 1. Sắp xếp mảng tăng dần
    nums.sort((a, b) => a - b);

    let result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Chặn trùng lặp cho số thứ nhất (i)
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Tìm thấy bộ 3 hợp lệ, push vào mảng kết quả
                result.push([nums[i], nums[left], nums[right]]);
                
                // Thu 2 con trỏ vào trong để tìm tiếp cặp khác cho số i này
                left++;
                right--;

                // Chặn trùng lặp cho số thứ hai (left)
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                
                // Chặn trùng lặp cho số thứ ba (right)
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }

            } else if (sum < 0) {
                left++; // Tổng âm => cần số lớn hơn => dịch left sang phải
            } else {
                right--; // Tổng dương => cần số nhỏ hơn => dịch right sang trái
            }
        }
    }
    return result;
};