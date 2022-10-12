/*
給定一個整數數組nums，返回由其中三個長度組成的具有非零面積的三角形的最大周長。如果不可能形成任何非零區域的三角形，則返回0。
*/

function largestPerimeter(nums: number[]): number {
  if (nums.length < 3) return 0;
  nums.sort((a, b) => b - a); // 大到小排序
  while (nums.length >= 3) {
    const [val, left, right] = nums;
    if (val < left + right) return val + left + right; // 最大邊 小於 另外兩邊的和
    else nums.splice(0, 1); // 刪除第一個
  }

  return 0;
}

console.log(largestPerimeter([2,1,2]));