/*
  給定一個由不同整數組成的排序數組和一個目標值，如果找到目標，則返回索引。如果不是，則返回按順序插入的索引。

  您必須編寫具有 O(log n)運行時復雜性的算法。
*/
// function searchInsert(nums: number[], target: number): number {
//   nums.push(target); // 加入陣列
//   nums.sort((a, b) => a - b); // 小到大排序
//   return nums.indexOf(target); // 尋找存在陣列中的哪個位置
// }

function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if ( nums[i] === target ) return i;
    else if (nums[i] > target) return i;
  }

  return nums.length;
}