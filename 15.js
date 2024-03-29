// 15. 檢查輸入的密碼是否合乎規範
// 輸入一個字串代表密碼，你的函式能檢查輸入的字串是否合乎以下規範：

// 只能包含大小寫英文字母、數字、以及以下特殊符號 ! @ # $ %
// 至少要包含一個大寫和一個小寫字母
// 至少要包含一個數字
// 至少要包含一個特殊符號
// 必須大於等於 8 個字元、小於等於 16 個字元。
// 若輸入的密碼符合規範，回傳真值，不符合規範，則回傳假值。

// 輸入範例一：abcD
// 回傳：假

// 輸入範例二：aBcdefg8$
// 回傳：真

// 輸入範例一：12345678
// 回傳：假

/*
    @param s:{String}
    @return :{Boolean}
*/
function checkPassword(s) {
  if (!/[A-Z]/.test(s)) {
    return false;
  }
  if (!/[a-z]/.test(s)) {
    return false;
  }
  if (!/[0-9]/.test(s)) {
    return false;
  }
  if (!/[!@#$%]/.test(s)) {
    return false;
  }
  if (!(s.length >= 8 && s.length <= 16)) {
    return false;
  }
  return true;
}

const testCases = ["abcD", "aBcdefg8$", "12345678"];
testCases.forEach((test) => {
  console.log(checkPassword(test));
});
