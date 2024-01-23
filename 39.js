// 39. 去除重複的資料
// 輸入一個整數陣列 / 列表，其中包含的整數在 -20 ~ 20 之間，你的函式能夠去除重複出現的整數，只保留最前面 ( 最小索引 ) 的資料，回傳去除重複資料後的陣列 / 列表。

// 輸入範例：[3, 2, -6, 2, 3, 5, 2]
// 回傳：[3, 2, -6, 5]

// 輸入範例：[0, 0, 0, 0]
// 回傳：[0]

// 輸入範例：[1, -3, -5, 2, -5, 1]
// 回傳：[1, -3, -5, 2]

/*
    @param ns:{[Integer]}
    @return :{[Integer]}
*/
function removeDuplicates(ns) {
  // Set 中只能儲存任何資料的唯一值，因此可以先將 Array 轉為 Set，此時重複的值會被移除，再將 Set 轉為 Array
  return Array.from(new Set(ns));
}
const testCases = [
  [3, 2, -6, 2, 3, 5, 2],
  [0, 0, 0, 0],
  [1, -3, -5, 2, -5, 1],
];

testCases.forEach((test) => {
  console.log(removeDuplicates(test));
});
