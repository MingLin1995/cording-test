// 46. 十二生肖查詢
// 輸入一個正整數表示西元年份，你的函式回傳該年份所屬的生肖動物名稱。請參考以下規則：

// 已知西元 1912 年為「鼠」年，十二生肖依序為「鼠」、「牛」、「虎」、「兔」、「龍」、「蛇」、「馬」、「羊」、「猴」、「雞」、「狗」、「豬」。

// 輸入範例：1912
// 回傳："鼠"

// 輸入範例：1946
// 回傳："狗"

// 輸入範例：1855
// 回傳："兔"

// 輸入範例：2024
// 回傳："龍"
/*
    @param year:{Integer}
    @return :{String}
*/
function getChineseZodiac(year) {
  const 生肖 = [
    "鼠",
    "牛",
    "虎",
    "兔",
    "龍",
    "蛇",
    "馬",
    "羊",
    "猴",
    "雞",
    "狗",
    "豬",
  ];
  const 基準年 = 1912;
  const index = (year - 基準年) % 12;
  if (index < 0) {
    return 生肖[index + 12];
  } else {
    return 生肖[index];
  }
}

const testCases = [1912, 1946, 1855, 2024];
testCases.forEach((test) => {
  console.log(getChineseZodiac(test));
});
