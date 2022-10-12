/*
給定一個按非降序nums排序的整數數組，就地刪除重複項，使每個唯一元素只出現一次。元素的相對順序應該保持不變。

由於在某些語言中無法更改數組的長度，因此您必須將結果放在數組的第一部分nums。k更正式地說，如果刪除重複項後還有元素，那麼 的第一個k元素nums 應該保存最終結果。k 除了第一個元素之外，你留下什麼並不重要 。

k將最終結果放入 的第一個k插槽後返回nums。

不要為另一個數組分配額外的空間。您必須通過使用 O(1) 額外內存就地修改輸入數組來做到這一點。
*/
function removeDuplicates(nums: number[]): number {
  let uniqueCounter = 1;
  for(let i = 0 ; i < nums.length ; i++){
      if(nums[uniqueCounter - 1] < nums[i]) { // 判斷第一筆小於當前
          nums[uniqueCounter++] = nums[i]; // 覆蓋前面的值，並計算長度
      };
  }
  console.log(nums);
  return uniqueCounter;
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
