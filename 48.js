// 48. 產生對應的英文序數
// 每個數字，都有一個對應的英文序數表示法 ( Ordinal Numbers )，規則如下：

// 1 對應到 1st
// 2 對應到 2nd
// 3 對應到 3rd
// 4 對應到 4th
// 4 到 19 都可以在後面加上 th 表達序數
// 20 到 100 則以個位數的數字為準，個位數為 0 則使用 th
// 101 以上，則以後面兩位數為準，使用以上規則轉換，例如 101st、311th、1523rd。
// 你的函式接受一個小於 10000 的正整數輸入，用字串的形式，回傳對應的序數。

/*
    @param number:{Integer}
    @return :{String}
*/
function generateOrdinalNumber(number) {
  // 檢查數字是否在範圍內
  if (number < 1 || number >= 10000) {
    return "超過數字範圍";
  }

  // 取數字的最後兩位，用於判斷應用哪個序數詞尾
  const lastTwoDigits = number % 100; // 311 餘 11 = 311th

  // 雙位數時11~19都是加上th( 4~11 就是預設的th)
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${number}th`;
  }

  const lastDigit = number % 10; // 96 餘 6 = 96th

  // 0,4~9 為th
  switch (lastDigit) {
    case 1:
      return `${number}st`;
    case 2:
      return `${number}nd`;
    case 3:
      return `${number}rd`;
    default:
      return `${number}th`;
  }
}

const testCases = [
  1, 2, 3, 4, 11, 21, 22, 23, 34, 101, 111, 121, 131, 142, 311, 1502, 1523,
];
testCases.forEach((test) => {
  console.log(generateOrdinalNumber(test));
});
