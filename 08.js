// 8. 計算等差數列的總和
// 輸入等差數列中最小的整數、最大的整數、以及公差，計算數列中每個數字的總和。可以假設輸入的最大數字一定大於最小數字。

// 輸入範例一：最小 2、最大 8、公差 2，計算 2+4+6+8 的總和
// 回傳：20

// 輸入範例二：最小 -2、最大 3、公差 1，計算 (-2)+(-1)+0+1+2+3 的總和
// 回傳：3

// 輸入範例一：最小 10、最大 14、公差 3，計算 10+13 的總和
// 回傳：23

/*
    @param min:{Integer}
    @param max:{Integer}
    @param differ:{Integer}
    @return :{Integer}
*/
function sumOfArithmeticSequence(min, max, differ) {
  // 無條件捨去， lastNum 才不會計算出大於 max 的數
  const count = Math.floor((max - min) / differ, 0);
  const lastNum = min + differ * count;
  const ans = ((min + lastNum) * (count + 1)) / 2;
  return ans;
}

const testCases = [
  { min: 2, max: 8, differ: 2 }, // 2 + 4 + 6 + 8
  { min: -2, max: 3, differ: 1 }, // -2 + -1 + 0 + 1 + 2 + 3
  { min: 10, max: 14, differ: 3 }, // 10 + 13
];

testCases.forEach((test) => {
  const ans = sumOfArithmeticSequence(test.min, test.max, test.differ);
  console.log(ans);
});
