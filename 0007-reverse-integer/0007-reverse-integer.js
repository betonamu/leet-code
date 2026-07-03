/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (!x) return 0;

    let left = x * -1 > 0 ? 1 : 0;

    let result = x.toString().split("");
    let right = result.length - 1;
    while (left < right) {
        let temp = result[left];
        result[left] = result[right];
        result[right] = temp;

        left++;
        right--;
    }

    const MIN_INT = -Math.pow(2, 31);
    const MAX_INT = Math.pow(2, 31) - 1;
    let reversed = Number(result.join(""));
    if (reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }

    return reversed;
};