// 24. Stack 堆疊的基本操作
// Stack 堆疊是一種基礎資料結構，我們使用陣列 / 列表來實作時，定義 Push 操作，代表將資料放到陣列 / 列表的尾巴；定義 Pop 操作，代表將資料從陣列 / 列表的尾巴取出。

// 輸入一個逗號隔開的字串，每個欄位代表一個操作，若是 Push 操作，會空一格後表示要操作的整數資料。你的函式必須使用陣列 / 列表實作一個 Stack，回傳經過輸入的操作之後產生的最終結果。

// 請注意最後放進 Stack 中的資料是整數的型態。

// 輸入範例："push 5,push 4,pop"
// 回傳：[5]

// 輸入範例："pop,push 1,push -3,push 5,pop,push 10"
// 回傳：[1, -3, 10]

// 輸入範例："push 3,push -2,pop,pop,pop"
// 回傳：[]

/*
    @param ops:{String}
    @return :{[Integer]]}
*/
function processStackOperations(ops) {
  //console.log(ops);

  const ans = [];

  const 轉換成列表 = ops.split(",");
  //console.log(轉換成列表);

  轉換成列表.forEach((字串) => {
    const 字串分割為列表 = 字串.split(" ");
    //console.log(字串分割為列表);

    const 操作 = 字串分割為列表[0];
    const 數字 = parseInt(字串分割為列表[1]);

    if (操作 === "push") {
      ans.push(數字);
    } else if (操作 === "pop") {
      ans.pop();
    }
  });

  return ans;
}

const testCases = [
  "push 5,push 4,pop",
  "pop,push 1,push -3,push 5,pop,push 10",
  "push 3,push -2,pop,pop,pop",
  "push 3,push 0,push -2,pop,pop",
  "push 3,push -2,pop,pop,pop,push 9",
];

testCases.forEach((test) => {
  console.log(processStackOperations(test));
});
