/*
給定兩個整數數組 nums1和 nums2，按非遞減順序排序，以及兩個整數 m和，分別表示和 n中的元素個數。nums1nums2

合併 nums1並nums2成一個按非降序排序的數組。

最終的排序數組不應由函數返回，而應存儲在數組nums1中。為了適應這一點，nums1長度為m + n，其中第一個m元素表示應該合併的元素，最後一個n元素設置為0並且應該被忽略。nums2長度為n。
*/
/**
 不要返回任何東西，而是就地修改 nums1 。
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let j = 0;
  for(let i = m; i < m + n; i++, j++){
    if(nums1.length >= m)
      nums1[i] = nums2[j];
    else
      nums1.push(nums2[j]);
  }
  nums1.sort((a, b) => a - b); // 小到大排序
};