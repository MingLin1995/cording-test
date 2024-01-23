// 45. 關鍵字推薦
// 輸入一個包含小寫英文字母的字串陣列 / 列表，代表所有可能的潛在關鍵字；再輸入一個英文字串，代表目前的提示字。

// 你的函式能從所有潛在的關鍵字中，找到並回傳以目前提示字為前綴的所有關鍵字陣列 / 列表。須按照字母順序由小到大排列，但長度短的關鍵字要排前面。

// 輸入範例：["abc", "xyz", "zzz", "ac", "aa"]、"a"
// 回傳：["aa", "ac", "abc"]

// 輸入範例：["xyz", "ooo", "test", "cba"]、"k"
// 回傳：[]

// 輸入範例：["test", "zbz", "pply", "zbaa", "zxy"]、"zb"
// 回傳：["zbz", "zbaa"]
/*
    @param candidates:{[String]}
    @param prompt:{String}
    @return :{[String]}
*/
function suggestKeywords(candidates, prompt) {
  const 符合條件的字串 = candidates.filter((candidate) => {
    return candidate.includes(prompt); // true 就會回傳
  });

  //依據陣列排序
  符合條件的字串.sort((a, b) => {
    if (a.length !== b.length) {
      // 依據長度排序
      return a.length - b.length;
    } else {
      // 依據字串排序
      return a.localeCompare(b);
    }
  });
  return 符合條件的字串;
}

const testCases = [
  { candidates: ["abc", "xyz", "zzz", "ac", "aa"], prompt: "a" },
  { candidates: ["xyz", "ooo", "test", "cba"], prompt: "k" },
  { candidates: ["test", "zbz", "pply", "zbaa", "zxy"], prompt: "zb" },
];

testCases.forEach((test) => {
  console.log(suggestKeywords(test.candidates, test.prompt));
});
