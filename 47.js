// 47. 計算包含幾個關鍵字
// 輸入一個包含大小寫英文字母的字串，再輸入一個關鍵字，你的函式能計算並回傳輸入字串中包含幾個關鍵字。

// 計算時，不考慮字母的大小寫，且不重覆計算字母有重疊的關鍵字。

// 輸入範例：""、"ac"
// 回傳：0

// 輸入範例："kKjaeAcxAC"、"ac"
// 回傳：2

// 輸入範例："abababazz"、"Aba"
// 回傳：2

/*
    @param text:{[String]}
    @param keyword:{String}
    @return :{Integer}
*/
function countKeywords(text, keyword) {
  // 不考慮字母的大小寫，所以都轉換為小寫
  const lowerText = text.toLowerCase();
  const lowerKeyword = keyword.toLowerCase();

  let count = 0; // 關鍵字出現的次數
  let index = 0; // 關鍵字的 index

  while (true) {
    index = lowerText.indexOf(lowerKeyword, index); // 查找關鍵字第一次出現的位置，回傳 index，若找不到回傳-1
    if (index === -1) break; // 如果找不到，結束循環

    count++; // 增加計數
    index += lowerKeyword.length; // 移動到下一個位置，避免字母重疊
  }

  return count;
}

const testCases = [
  { text: "", keyword: "ac" },
  { text: "kKjaeAcxAC", keyword: "ac" },
  { text: "abababazz", keyword: "Aba" },
];

testCases.forEach((test) => {
  console.log(countKeywords(test.text, test.keyword));
});
