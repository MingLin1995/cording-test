// 4. 找到第二大的整數
// 輸入包含至少兩個不同整數的陣列 / 列表，找到並回傳其中第二大的整數。

// 輸入範例一：[1, 3, 3, 2, 5, -2]
// 回傳：3

// 輸入範例二：[-5, -10, -8, 1, -1]
// 回傳：-1

// 輸入範例一：[0, 2]
// 回傳：0

/*
    @param nums:{[Integer]}
    @return :{Integer}
*/
function findSecond(nums) {
  let firstMax = nums[0];
  let secondMax = nums[1];

  if (firstMax < secondMax) {
    firstMax = nums[1];
    secondMax = nums[0];
  } else if (firstMax === secondMax) {
    for (let i = 2; i < nums.length; i++) {
      secondMax = nums[i];
    }
  }

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > firstMax) {
      secondMax = firstMax;
      firstMax = nums[i];
    } else if (nums[i] > secondMax && nums[i] !== firstMax) {
      secondMax = nums[i];
    }
  }
  return secondMax;
}

const testCases = [
  [1, 3, 3, 2, 5, -2],
  [-5, -10, -8, 1, -1],
  [0, 2],
  [3, 3, 3, 2, 2, 2, 1, 1],
  [-1, -1, 3, 2, 2, 2, 1, 1],
  [-1, -3, -5, -7],
  [1, 2, 3, 4, 5],
];

testCases.forEach((test) => {
  console.log(findSecond(test));
});
