/*
  給定一個m x n matrix， true 如果矩陣是 Toeplitz 則返回。否則，返回false。

  如果從左上角到右下角的每條對角線都具有相同的元素，則矩陣是Toeplitz 。
*/
/*
  約束：
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 20
    0 <= matrix[i][j] <= 99
*/

function isToeplitzMatrix(matrix: number[][]): boolean {
  let [i, j] = [0, 1];
  while (j < matrix.length) {
    // 我們將簡單地比較當前行減去它的最後一個元素
    let currRow = matrix[i].slice(0, matrix[i].length - 1);
    // 沒有第一個元素的下一行
    let nextRow = matrix[j].slice(1);
    // 如果它們不同，則不是 Toeplitz 矩陣
    // 只比較 中間區塊
    if (currRow.join("") !== nextRow.join("")) return false;
    i++;
    j++;
  }

  return true;
}

isToeplitzMatrix([
  [36, 59, 71, 15, 26, 82, 87],
  [56, 36, 59, 71, 15, 26, 82],
  [15, 0, 36, 59, 71, 15, 26],
]);
