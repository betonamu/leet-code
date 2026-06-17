/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    if (!nums.length) return [];

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let count = map.get(nums[i]) + 1;
            map.set(nums[i], count);
        } else {
            map.set(nums[i], 1);
        }
    }
    const entriesArray = [...map.entries()];

    console.log(entriesArray);
    return entriesArray.sort(([, a], [, b]) => b - a).slice(0, k).map(([key, value]) => key);
};