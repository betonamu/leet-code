/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    if (!matrix.length) return;

    let top = 0, left = 0;
    let right = matrix.length - 1, bottom = matrix.length - 1;
    while (left < right) {
        for (let i = 0; i < right - left; i++) {
            let temp = matrix[top][left + i]; //1
            matrix[top][left + i] = matrix[bottom - i][left];// 1 => 7
            matrix[bottom - i][left] = matrix[bottom][right - i];// 7 => 9
            matrix[bottom][right - i] = matrix[top + i][right]; // 9 => 3
            matrix[top + i][right] = temp; //3 => 1
        }
        top++;
        left++;
        bottom--;
        right--;
    }
};

//top,left = 0, right, bottom = matrix.length
//b1: swap 4 cạnh của matrix bằng cách lưu topleft ra biến tạm để swap mà k làm mất giá trị rồi swap 3 cạnh còn lại
//b2: tiếp tục tăng i lên thì sẽ swap các node kế cạnh
//b3: sau khi đã swap hết các cạnh ngoài thì tiến vào cạnh trong của matrix bằng cách top++,left++,right--,bottom--;