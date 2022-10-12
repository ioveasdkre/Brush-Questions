/*
你得到一個表示為整數數組的大整數digits，其中每個digits[i]都是整數的數字。數字按從左到右的順序從最高有效到最低有效排序。大整數不包含任何前導的。ith0

將大整數加 1 並返回結果數組。
*/
function plusOne(digits: number[]): number[] {
  const num = BigInt(digits.join("")) + 1n; // BigInt數學類型
  return num.toString().split("").map((item) => parseInt(item)); // 轉成陣列 並將直轉成數字
};

plusOne([1,2,3]);