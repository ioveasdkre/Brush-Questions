/*
  一個基因字符串可以用一個 8 個字符的長字符串表示，可以選擇'A'、'C'、'G'和'T'。

  假設我們需要研究從基因串start到基因串的end突變，其中一個突變被定義為基因串中的一個單個字符發生變化。

  例如，"AACCGGTT" --> "AACCGGTA"是一種突變。
  還有一個基因庫bank，記錄所有有效的基因突變。必須有一個基因才能bank使其成為有效的基因字符串。

  給定兩個基因字符串start和end和 基因庫bank，返回從to突變所需的最小突變數。如果沒有這樣的突變，則返回。startend-1

  請注意，假設起點是有效的，因此它可能不包含在銀行中。
*/
/*
  示例 1：

  輸入：開始 = “AACCGGTT”，結束 = “AACCGGTA”，銀行 = [“AACCGGTA”]
  輸出： 1
  示例 2：

  輸入：開始 = “AACCGGTT”，結束 = “AAACGGTA”，銀行 = [“AACCGGTA”，“AACCGCTA”，“AAACGGTA”]
  輸出： 2
  示例 3：

  輸入： start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]
  輸出： 3
  

  約束：

  start.length == 8
  end.length == 8
  0 <= bank.length <= 10
  bank[i].length == 8
  start, end, 並且bank[i]僅由字符組成['A', 'C', 'G', 'T']。
*/

function minMutation(start: string, end: string, bank: string[]): number {
  
};