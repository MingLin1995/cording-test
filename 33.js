// 33. 計算 X 的 Y 次方
// 輸入兩個整數 X 和 Y，計算並回傳 X 的 Y 次方計算結果。

// 其中 X 介於 -30 ~ 30 之間，Y 介於 0 ~ 10 之間。

// 輸入範例：3、4
// 回傳：81

// 輸入範例：-5、0
// 回傳：1

// 輸入範例：-10、3
// 回傳：-1000
/*
    @param x:{Integer}
    @param y:{Integer}
    @return :{Integer}
*/
function power(x, y) {
  if (-30 <= x && x <= 30 && 0 <= y && y <= 10) {
    return Math.pow(x, y);
  }
  return null;
}
const testCases = [
  { x: 3, y: 4 },
  { x: -5, y: 0 },
  { x: -10, y: 3 },
  { x: -30, y: 3 },
  { x: -35, y: 3 },
];
testCases.forEach((test) => console.log(power(test.x, test.y)));
