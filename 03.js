// 3. 找到最大的整數
// 輸入包含至少一個整數的陣列 / 列表，找到並回傳其中最大的整數。

// 輸入範例一：[1, 3, 3, 2, 5, -2]
// 回傳：5

// 輸入範例二：[-5, -10, -8, -1, -2]
// 回傳：-1

// 輸入範例一：[0, 2, 2]
// 回傳：2

/*
    @param nums:{[Integer]}
    @return :{Integer}
*/
function findMax(nums) {
  // 取第一個數字當作最大值
  let max = nums[0];

  // 從第二個數字開始比較，若大於 max 則更新 max 的值
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

const testCases = [
  [1, 3, 3, 2, 5, -2],
  [-5, -10, -8, -1, -2],
  [0, 2, 2],
];

testCases.forEach((test) => {
  console.log(findMax(test));
});
