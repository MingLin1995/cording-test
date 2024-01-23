// 42. 蛇形命名轉換為大駝峰命名
// 輸入一個包含小寫英數字和底線的字串，代表程式語言中常見的蛇形命名法，你的函式能將此字串轉換為另外一種常見的大駝峰命名法。

// 蛇形命名法：用底線隔開多個全小寫的英文單字。
// 大駝峰命名法：多個英文單字的第一個字母皆大寫。

// 輸入範例："test"
// 回傳："Test"

// 輸入範例："hello_world"
// 回傳："HelloWorld"

// 輸入範例："get_weather_data"
// 回傳："GetWeatherData"
/*
    @param name:{String}
    @return :{String}
*/
function snakeToUpperCamel(name) {
  // 分割為陣列
  const 字串轉陣列 = name.split("_");
  const 字首大寫 = [];
  字串轉陣列.forEach((單字) => {
    // slice 分割字串，取索引1到最後
    字首大寫.push(單字[0].toUpperCase() + 單字.slice(1));
  });
  // 組合為字串
  const ans = 字首大寫.join("");
  return ans;
}
const testCases = ["test", "hello_world", "get_weather_data"];

testCases.forEach((name) => {
  console.log(snakeToUpperCamel(name));
});
