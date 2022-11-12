/*
  給定一個包含非負數的數組和一個目標整數 k，編寫一個函數來判斷該數組是否含有連續的子數組，其大小至少為 2，總和為 k 的倍數，即總和為 n*k，其中 n 也是一個整數。
*/
/*
  約束：
    1 <= nums.length <= 105
    0 <= nums[i] <= 109
    0 <= sum(nums[i]) <= 231 - 1
    1 <= k <= 231 - 1
*/
function checkSubarraySum(nums: number[], k: number): boolean {
  if(nums.length < 2) return false;

  for (let i = 0; i < nums.length; i++) {
    let sum: number = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) return true;
      if (sum % k === 0 && k !== 0) return true;
    }
  }

  return false;
}