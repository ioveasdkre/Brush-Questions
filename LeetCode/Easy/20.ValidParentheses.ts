/*
  給定一個s僅包含字符'('、')'、'{'、和的字符串'}'，確定輸入字符串是否有效。'['']'

  輸入字符串在以下情況下有效：

  開括號必須用相同類型的括號閉合。
  開括號必須以正確的順序閉合。
  每個右括號都有一個對應的相同類型的左括號。
*/

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const char of s) {
    let right = brackets.get(char);
    if (right) stack.push(right); // 判斷為 左括號並將 右括號推入 stack
    else {
      if (stack.pop() !== char) return false; // stack最後一筆右括號 和 char 不相同
    }
  }

  return !stack.length;
}

const brackets: Map<string, string> = new Map<string, string>([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
]);

console.log(isValid("([]{})"));
console.log(isValid("(]"));
