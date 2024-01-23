// 41. 計算兩個區間的重疊區域
// 輸入兩個陣列 / 列表，分別代表兩個整數區間的最小值和最大值 [min1, max1] 和 [min2, max2]，你的函式能計算並回傳兩個整數區間的重疊區域範圍，重疊區域包含最小或最大值落在同一個整數的狀況，回傳的重疊區域格式為 [min, max]。

// 可以假設每個區間的最大值一定大於最小值。若兩個區間沒有重疊，回傳空陣列 / 列表。

// 輸入範例：[5, 10]，[9, 11]
// 回傳：[9, 10]

// 輸入範例：[-5, 5]，[8, 10]
// 回傳：[]

// 輸入範例：[-5, 5]，[-6, -5]
// 回傳：[-5, -5]
/*
    @param range1:{[Integer]}
    @param range2:{[Integer]}
    @return :{[Integer]}
*/
function getOverlappingRange(range1, range2) {
  const 第一區間最小值 = range1[0];
  const 第一區間最大值 = range1[1];
  const 第二區間最小值 = range2[0];
  const 第二區間最大值 = range2[1];
  const 重疊區間最小值 = Math.max(第一區間最小值, 第二區間最小值);
  const 重疊區間最大值 = Math.min(第一區間最大值, 第二區間最大值);
  if (重疊區間最大值 >= 重疊區間最小值) {
    return [重疊區間最小值, 重疊區間最大值];
  } else {
    return [];
  }
}
const testCases = [
  { range1: [5, 10], range2: [9, 11] },
  { range1: [-5, 5], range2: [8, 10] },
  { range1: [-5, 5], range2: [-6, -5] },
];
testCases.forEach((test) => {
  console.log(getOverlappingRange(test.range1, test.range2));
});
