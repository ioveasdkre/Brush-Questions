/*
pangram是英文字母中的每個字母至少出現一次的句子。

sentence給定一個只包含小寫英文字母的字符串，如果是pangram則返回，否則。 truesentencefalse
*/
function checkIfPangram(sentence: string): boolean {
  const abcList = new Set([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);
  let col = true;

  abcList.forEach((item) => {
    console.log(item);
    if(!sentence.includes(item)){
      col = false;
    }
  })

  return col;
}
