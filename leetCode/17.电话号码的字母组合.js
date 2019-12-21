/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let res = []
  const maps = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  }
  for (let num of digits) {
    let w = maps[num]
    if (res.length > 0) {
      let tmp = []
      for (let i = 0; i < res.length; i++) {
        let wlen = w.length
        for (let j = 1; j < wlen; j++) {
          tmp.push(res[i] + w[j])
        }
        res[i] += w[0]
      }
      res.push(...tmp)
    } else {
      res.push(...w)
    }
  }
  return res;
};
// @lc code=end

