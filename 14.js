// 14. 整數陣列 / 列表中，兩兩相乘的最大值
// 輸入一個至少包含兩個整數的陣列 / 列表，其中可能包含重複的數字if，你的函式能算出並回傳兩兩數字相乘後最大的乘積。

// 輸入範例一：[2, -1, 0]
// 回傳：0

// 輸入範例二：[-2, -10, 1, 2]
// 回傳：20

// 輸入範例一：[3, 1, 9, 4, 5]
// 回傳：45

/*
    @param nums:{[Integer]}
    @return :{Integer}
*/
function findMaxProduct(nums) {
  let max = nums[0] * nums[1];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, nums[i] * nums[j]);
    }
  }
  return max;
}
const testCases = [
  [2, -1, 0],
  [-2, -10, 1, 2],
  [3, 1, 9, 4, 5],
  [5, 5],
];

testCases.forEach((test) => {
  console.log(findMaxProduct(test));
});
