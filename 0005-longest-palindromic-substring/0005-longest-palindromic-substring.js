/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s.length) return "";

    const expand = (left, right) => {
        let current = "";
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            current = s.slice(left, right + 1);
            left--;
            right++
        }

        return current;
    }

    let result = "";
    for (let i = 0; i < s.length; i++) {
        let palindrome1 = expand(i, i);
        let palindrome2 = expand(i, i + 1);
        let longer = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;
        if (longer.length > result.length) result = longer;
    }

    return result;
};

// Approach:  two-pointer expansion algorithm
// This problem has 2 cases like example 1 & 2:
// Case 1: i value != i + 1 value (two side symmetry)
// Case 2: i value == i + 1 value (center of symmetry)
// Boundary check: limit two pointer from 0 -> length bacause of undefined === undefined so left value always equal to right value