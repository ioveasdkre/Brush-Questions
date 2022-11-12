/*
  給定一個字符串，該字符串columnTitle表示 Excel 工作表中出現的列標題，返回其對應的列號。
*/
function titleToNumber(columnTitle: string): number {
  const abcList: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // B

  const arrayColumnTitle = columnTitle.split("");
  let num: number = 0;
  for (let i = 0; i < arrayColumnTitle.length; i++) {
    let column: number = abcList.indexOf(arrayColumnTitle[i]) + 1; // 數字的值
    for (let j = i; j < arrayColumnTitle.length; j++) {
      column *= j !== arrayColumnTitle.length - 1 ? 26 : 1; // 判斷 不等於最後一位 26 : 1
    }
    num += column;
  }

  return num;
}
