/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const uniqueSubstring = [];
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (uniqueSubstring.includes(s[i])) {
            maxLength = Math.max(maxLength, uniqueSubstring.length);
            let dupIdx = uniqueSubstring.findIndex((char) => char === s[i]);
            uniqueSubstring.splice(0, dupIdx + 1);
            uniqueSubstring.push(s[i]);
        } else {
            uniqueSubstring.push(s[i]);
        }
    }

    return maxLength = Math.max(maxLength, uniqueSubstring.length);
};