// 29. 撲克牌比點數、花色大小
// 假設在一個撲克牌遊戲中，點數由小到大的排序是 2、3、4、...、10、J、Q、K、A。若點數相同，則考慮花色，花色由小到大的排序是 C ( 梅花 )、D ( 方塊 )、H ( 紅心 )、S ( 黑桃 )。

// 輸入兩個字串，依序代表兩張撲克牌的點數和花色，你的函式可以判斷是否第一張比第二張大，若是，回傳真；否則，回傳假。

// 輸入範例："KC"、"3H"
// 回傳：真

// 輸入範例："JS"、"QS"
// 回傳：假

// 輸入範例："2S"、"2D"
// 回傳：真

// 輸入範例："10C"、"10H"
// 回傳：假

/*
    @param c1:{String}
    @param c2:{String}
    @return :{Boolean}
*/
function comparePokerCard(c1, c2) {
  const 排序 = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const 花色 = ["C", "D", "H", "S"];
  const 第一組牌數字 = c1.slice(0, -1);
  const 第一組牌花色 = c1.slice(-1);
  const 第二組牌數字 = c2.slice(0, -1);
  const 第二組牌花色 = c2.slice(-1);
  if (排序.indexOf(第一組牌數字) > 排序.indexOf(第二組牌數字)) {
    return true;
  } else if (排序.indexOf(第一組牌數字) === 排序.indexOf(第二組牌數字)) {
    if (花色.indexOf(第一組牌花色) > 花色.indexOf(第二組牌花色)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const testCases = [
  ["KC", "3H"],
  ["JS", "QS"],
  ["2S", "2D"],
  ["10C", "10H"],
];

testCases.forEach((test) => {
  console.log(comparePokerCard(test[0], test[1]));
});
