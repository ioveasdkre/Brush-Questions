/*
給定兩個字符串數組word1and word2，如果兩個數組表示相同的字符串，則返回，否則返回。 truefalse

如果按順序連接的數組元素構成字符串，則字符串由數組表示。
*/
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join("") === word2.join("");
}
