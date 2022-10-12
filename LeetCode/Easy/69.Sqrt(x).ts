/*
給定一個非負整數x，計算並返回的平方根 x。

由於返回類型是整數，所以十進制數字被截斷，只返回結果的整數部分。

注意： 您不能使用任何內置的指數函數或運算符，例如pow(x, 0.5)or  x ** 0.5。
*/

function mySqrt(x: number): number {
  // return Math.floor(x ** 0.5);
  return Math.floor(Math.sqrt(x));
};

