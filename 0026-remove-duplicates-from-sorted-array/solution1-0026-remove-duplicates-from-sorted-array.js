/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (!nums.length) return 0;
    nums.sort((a, b) => a - b);

    let unique = new Set();
    let newNums = [...nums];
    let deleteCount = 0;
    for (let i = 0; i < newNums.length; i++) {
        if (unique.has(newNums[i])) {
            nums.splice(i - deleteCount, 1);
            deleteCount++;
        } else {
            unique.add(newNums[i])
        }
    }

    return nums.length;
};

//brute force
