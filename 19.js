// 19. 計算有幾個英文單字
// 輸入一個只包含英文字和空白的字串，你的函式能找出這個字串中有幾個英文單字。

// 不考慮英文單字是否真的存在，且假設英文單字間用一個空白隔開，字串的前後有可能包含零到多個空白。

// 輸入範例一："Today is a good day"
// 回傳：5

// 輸入範例二：" My name is John"
// 回傳：4

// 輸入範例一：" Good "
// 回傳：1

// 輸入範例一：" "
// 回傳：0
/*
    @param s:{String}
    @return :{Integer}
*/
function countWords(s) {
  // trim 移除開頭跟結尾的空白字串
  const words = s.trim().split(" ");
  if (words[0] === "") {
    return 0;
  } else {
    return words.length;
  }
}
const testCases = [
  "Today is a good day",
  "My name is John",
  "Good ",
  " ",
  " hi",
];

testCases.forEach((test) => {
  console.log(countWords(test));
});
