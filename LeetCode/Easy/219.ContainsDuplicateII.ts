/*
給定一個整數數組nums和一個整數，如果數組中有兩個不同的索引和，則k返回和。true i和j nums[i] == nums[j]abs(i - j) <= k
*/
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true;
    }
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
