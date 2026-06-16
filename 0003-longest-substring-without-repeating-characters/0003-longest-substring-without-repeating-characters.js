/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s.length) return 0;

    let maxLength = 0;
    let unique = [];
    for (let i = 0; i < s.length; i++) {
        if (unique.includes(s[i])) {
            maxLength = Math.max(maxLength, unique.length);
            unique.push(s[i]);
            let idx = unique.findIndex(item => item === s[i]);
            unique.splice(0, idx + 1);
        } else {
            unique.push(s[i]);
        }
    }
    return Math.max(maxLength, unique.length);
};

//gặp kí tự lặp thì find index lấy index lặp thì tính lại max rồi cắt từ 0 -> index
//sau đó tiếp tục insert phần tử mới vào
//ngược lại thì insert như bình thường