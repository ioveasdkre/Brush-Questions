/*
您有一組整數s，最初包含從1到的所有數字n。不幸的是，由於一些錯誤，其中一個數字s與集合中的另一個數字重複，這導致一個數字重複並丟失另一個數字。

您將獲得一個整數數組nums，表示該集合在出錯後的數據狀態。

找出出現兩次的數和缺失的數，並以數組的形式返回。
*/
function findErrorNums(nums: number[]): number[] {
  let result: number[] = [];
  nums.sort((a, b) => a - b); // 小到大排序
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) { // 判斷重複數
      result.push(nums[i]); // 加入陣列
      break;
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) { // 判斷不存在的數
      result.push(i); // 加入缺少的樹
      break;
    }
  }

  return result;
}