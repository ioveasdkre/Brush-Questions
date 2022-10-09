/*
  編寫一個函數來查找字符串數組中最長的公共前綴字符串。

  如果沒有公共前綴，則返回一個空字符串“”。
*/
function longestCommonPrefix(strs: string[]): string {
  let result: string = "";

  const minLength = Math.min(...strs.map(({ length }) => length)); // map處理完新陣列 利用 ...展開 再用 數學涵式處理取得最小長度

  for (let i = 0; i < minLength; i++) {
    const strArray: string[] = strs[0].split("");
    let temp: boolean = true;
    for (let j = 0; j < strs.length; j++) {
      if (strArray[i] !== strs[j].split("")[i]) {
        temp = false;
        break;
      }
    }

    if (!temp) break;

    result += strArray[i];
  }

  return result;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
