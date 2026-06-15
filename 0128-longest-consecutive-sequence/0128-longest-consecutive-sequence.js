/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length) return 0;

    let sortedArr = nums.sort((a, b) => a - b);
    let maxLength = 0;
    let currLength = 1;
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i - 1]) continue;
        if (sortedArr[i] === sortedArr[i - 1] + 1) {
            currLength++;
        } else {
            maxLength = Math.max(maxLength, currLength);
            currLength = 1;
        }
    }

    return Math.max(maxLength, currLength);
};

//max = 0
//nếu arr[i] == arr[i + 1] => skip
//nếu arr[i] == arr[i - 1] + 1 => tăng count
//ngược lại tính lại max và reset count;