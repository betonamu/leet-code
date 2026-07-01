/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!haystack.length || !needle.length) return -1;

    let left = 0;
    for (let right = needle.length - 1; right < haystack.length; right++) {
        let currentRange = haystack.slice(left, right + 1);
        console.log({currentRange, needle})
        if (currentRange === needle) {
            return left;
        } else {
            left++;
        }
    }
    return -1;
};