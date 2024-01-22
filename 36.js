// 36. 找出不一樣的資料
// 輸入一個至少有三筆資料的整數陣列 / 列表，其中包含唯一一個和其他所有資料不同的整數。你的函式能找出並回傳這個整數所在的索引位置。

// 輸入範例：[5, 5, 0]
// 回傳：2

// 輸入範例：[1, 2, 1, 1, 1]
// 回傳：1

// 輸入範例：[-5, 8, 8, 8]
// 回傳：0

/*
    @param ns:{[Integer]}
    @return :{Integer}
*/
function findUnique(ns) {
  //前兩個數不一樣，還要跟第三個數做判斷，才知道哪個是唯一的
  if (ns[0] !== ns[1]) {
    if (ns[1] !== ns[2]) {
      return 1;
    } else {
      return 0;
    }
  }

  for (let i = 0; i < ns.length; i++) {
    for (let j = i + 2; j < ns.length; j++) {
      if (ns[i] !== ns[j]) {
        return j;
      }
    }
  }
}

const testCases = [
  [5, 5, 0],
  [1, 2, 1, 1, 1],
  [-5, 8, 8, 8],
  [8, 8, 8, 8, 9],
];

testCases.forEach((test) => console.log(findUnique(test)));
