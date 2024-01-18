// 6. 找到最小公倍數
// 輸入兩個正整數，你的函式能找到並回傳這兩個正整數的最小公倍數。

// 輸入範例一：6 和 4
// 回傳：12

// 輸入範例二：5 和 16
// 回傳：80

// 輸入範例一：12 和 6
// 回傳：12

/*
    @param n1:{Integer}
    @param n2:{Integer}
    @return :{Boolean}
*/

// 兩數相乘 / 最大公因素 ＝ 最小公倍數
function findLCM(n1, n2) {
  // 最大公因數
  const gcd = findGCD(n1, n2);
  // 最小公倍數
  return (n1 * n2) / gcd;
}

function findGCD(n1, n2) {
  // 如果第二個數為0，則第一個數就是最大公約數
  if (n2 === 0) {
    return n1;
  }
  // 否則，繼續遞迴，n2成為新的n1，n1除以n2的餘數成為新的n2
  return findGCD(n2, n1 % n2);
}

const testCases = [
  [6, 4], // 2
  [5, 16], // 1
  [12, 6], // 6
  [5, 15], // 5
];

testCases.forEach((test) => {
  console.log(findLCM(test[0], test[1]));
});
