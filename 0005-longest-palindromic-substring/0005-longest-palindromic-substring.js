/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s.length) return "";

    let palindromic = "";
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        let currPdrm1 = "";
        while (s[left] === s[right] && left >= 0 && right < s.length) {
            currPdrm1 = s.slice(left, right + 1);
            left--;
            right++;
        }

        let left2 = i;
        let right2 = i + 1;
        let currPdrm2 = "";
        while (s[left2] === s[right2] && left2 >= 0 && right2 < s.length) {
            currPdrm2 = s.slice(left2, right2 + 1);
            left2--;
            right2++;
        }
        let longer = currPdrm2.length > currPdrm1.length ? currPdrm2 : currPdrm1;
        if (longer.length > palindromic.length) palindromic = longer;
    }
    return palindromic;
};

//Sử dụng thuật toán 2 con trỏ mở rộng từ tâm ra ngoài
//trường hợp 1: bắt đầu với left, right = i (chúng ta xem i là tâm)
//nếu giá trị tại left và right vẫn còn bằng nhau thì tiếp tục mở rộng bằng cách left--, right++
//sau khi mở rộng thì phải set lại giá trị cho palindromic

//trường hợp 2: bắt đầu với left = i, right = i + 1 (giả sử chúng ta có tâm kép s[i] === s[i + 1])
//nếu giá trị tại left và right vẫn còn bằng nhau thì tiếp tục mở rộng bằng cách left--, right++
//sau khi mở rộng thì phải set lại giá trị cho palindromic

//lưu ý khống chế phạm vi left, right trường hợp s.length = 1. nếu không nó sẽ mở rộng vô tận vì undefined == undefined