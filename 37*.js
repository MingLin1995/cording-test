// 37. 找出眾數
// 輸入一個非負整數陣列 / 列表，其中包含的非負整數在 0 ~ 20 之間，找出並回傳其中的眾數：即出現次數最多的整數值。

// 你可以假設不會同時有多個眾數出現。

// 輸入範例：[1, 2, 1, 3, 1]
// 回傳：1

// 輸入範例：[6, 0, 8, 8, 10]
// 回傳：8

// 輸入範例：[0, 2, 0, 1, 1, 20, 0]
// 回傳：0
/*
    @param ns:{[Integer]}
    @return :{Integer}
*/
function findMode(ns) {
  const counts = {}; // 記錄每個數字出現的次數
  let maxCount = 0; // 目前出現次數最多的次數
  let value = null; // 眾數

  // 遍歷陣列，記錄每個數字的出現次數
  ns.forEach((number) => {
    counts[number] = (counts[number] || 0) + 1; // 如果數字存在，就用該值，若數字不存在則初始化為0，然後加1
    if (counts[number] > maxCount) {
      // 如果這個數字出現的次數比目前記錄的最多次數還要多
      maxCount = counts[number]; // 更新最多次數
      value = number; // 更新眾數
    }
  });

  return value;
}
const testCases = [
  [1, 2, 1, 3, 1],
  [6, 0, 8, 8, 10],
  [0, 2, 0, 1, 1, 20, 0],
];

testCases.forEach((test) => {
  console.log(findMode(test));
});
