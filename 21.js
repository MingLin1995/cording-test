// 21. 最大連續 0 的數量
// 輸入一個只包含 0 和 1 的陣列 / 列表，你的函式要找出並回傳最大連續 0 的數量。

// 輸入範例二：[1, 1, 1]
// 回傳：0

// 輸入範例一：[0, 0, 0, 0, 1, 0]
// 回傳：4

// 輸入範例一：[0, 1, 0, 0, 0, 1, 0, 1]
// 回傳：3

/*
    @param nums:{[Integer]}
    @return :{Integer}
*/
function findMaxZero(nums) {
  let 連續出現0的次數 = 0;
  let 最大次數 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      連續出現0的次數 += 1;
      if (最大次數 < 連續出現0的次數) {
        最大次數 = 連續出現0的次數;
      }
    } else {
      // 重置計算的次數
      連續出現0的次數 = 0;
    }
  }
  return 最大次數;
}

const testCases = [
  [1, 1, 1],
  [0, 0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 1],
];

testCases.forEach((test) => {
  console.log(findMaxZero(test));
});
