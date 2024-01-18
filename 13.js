// 13. 翻轉一個字串
// 輸入一個字串，你的函式能夠翻轉這個字串。

// 輸入範例一：Hello
// 回傳：olleH

// 輸入範例二：abcd
// 回傳：dcba

// 輸入範例一：Good Job
// 回傳：boJ dooG

/*
    @param s:{String}
    @return :{String}
*/
function reverseString(s) {
  // 因為字串是不可變的，所以要透過 split 字串拆分成列表，翻轉後，再透過 join 組合起來
  return s.split("").reverse().join("");
}

const testCases = ["Hello", "abcd", "Good Job"];

testCases.forEach((test) => {
  console.log(reverseString(test));
});
