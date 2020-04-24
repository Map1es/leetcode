function unique1(arr) {
  // 通用去重值类型
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.indexOf(arr[i]) < 0 && res.push(arr[i]);
  }
  return res;
}
function unique2(arr) {
  // es6去重值类型
  return Array.from(new Set(arr));
}

function unique3(arr) {
  // 有数组情况
  var obj = {};
  return arr.filter(function (item, index, arr) {
    let a = obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
    console.log(typeof item + item)
    return a;
  });
}

let a = [1, 2, 3, 4, 2, 5, 4, 2, 1, 5, [111,222], [111,222]];
console.log(unique3(a));
