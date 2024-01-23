// 44. 費式數列的第 N 個數
// 輸入一個非負整數 N，你的函式能取得費式數列中的第 N 個整數並回傳。費式數列定義如下：

// 第 0 個數 = 1
// 第 1 個數 = 1
// 第 N 個數 = 第 N-1 個數 + 第 N-2 個數
// 根據以上定義，得到 1、1、2、3、5、8、13、21、34、55 以此類推，即費式數列 / 。( Fibonacci Sequence )

// 輸入範例：0
// 回傳：1

// 輸入範例：4
// 回傳：5

// 輸入範例：9
// 回傳：55

// 注意事項：
// 你必須實作一個時間複雜度為 O(N) 的演算法，否則將會因執行逾時而失敗。
/*
    @param n:{Integer}
    @return :{Integer}
*/
function getFibNumber(n) {
  if (n <= 1) return 1; // 斐波那契數列的第 0 項和第 1 項直接返回1

  let beforePrevious = 1; // n-2
  let previous = 1; // n-1
  let current;

  for (let i = 2; i <= n; i++) {
    current = beforePrevious + previous; // 計算當前項的值
    beforePrevious = previous; // 更新n-2的值
    previous = current; // 更新n-1的值
  }

  return current; // 返回當前項的值
}

const testCases = [0, 4, 9];
testCases.forEach((test) => {
  console.log(getFibNumber(test));
});
