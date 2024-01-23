// 43. 大駝峰命名轉換為蛇形命名
// 輸入一個包含大小寫英數字的字串，代表程式語言中常見的大駝峰命名法，你的函式能將此字串轉換為另外一種常見、包含底線的蛇形命名法。

// 大駝峰命名法：多個英文單字的第一個字母皆大寫。
// 蛇形命名法：用底線隔開多個全小寫的英文單字。

// 輸入範例："Test"
// 回傳："test"

// 輸入範例："HelloWorld"
// 回傳："hello_world"

// 輸入範例："GetWeatherData"
// 回傳："get_weather_data"
/*
    @param name:{String}
    @return :{String}
*/
function upperCamelToSnake(name) {
  // g 代表所有符合的字母
  // replace 將大寫替換為 _和匹配到的字母
  const snake = name.replace(/([A-Z])/g, "_$1").toLowerCase();
  // 取 index 1 到最後
  return snake.slice(1);
}
const testCases = ["Test", "HelloWorld", "GetWeatherData"];

testCases.forEach((test) => {
  console.log(upperCamelToSnake(test));
});
