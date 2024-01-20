// 23. 總秒數轉換為日、時、分、秒
// 輸入一個非負整數代表一段時間的總秒數，請將這個總秒數轉換為：日、時、分、秒，四個欄位，按照順序用陣列 / 列表的格式輸出。

// 輸入範例：0
// 回傳：[0, 0, 0, 0]

// 輸入範例：65
// 回傳：[0, 0, 1, 5]

// 輸入範例：7500
// 回傳：[0, 2, 5, 0]

// 輸入範例：100000
// 回傳：[1, 3, 46, 40]
/*
    @param sec:{Integer}
    @return :{[Integer]}
*/
function convertSeconds(sec) {
  // floor 取整數位（不四捨五入）
  const 日 = Math.floor(sec / 60 / 60 / 24);
  const 時 = Math.floor((sec - 日 * 24 * 60 * 60) / 60 / 60);
  const 分 = Math.floor((sec - 日 * 24 * 60 * 60 - 時 * 60 * 60) / 60);
  const 秒 = sec - 日 * 24 * 60 * 60 - 時 * 60 * 60 - 分 * 60;
  const ans = [日, 時, 分, 秒];
  return ans;
}

const testCases = [0, 65, 7500, 100000];

testCases.forEach((test) => {
  console.log(convertSeconds(test));
});
