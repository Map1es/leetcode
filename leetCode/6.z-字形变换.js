/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) {
    return s
  }
  const len = Math.min(s.length, numRows)
  const cache = []
  for (let i = 0; i < len; i++) {
    cache[i] = ""
  }
  let loc = 0
  let down = false
  for (let i = 0; i < s.length; i++) {
    cache[loc] += s[i]
    if (loc == 0 || loc == numRows - 1) {
      down = !down
    }
    loc += down ? 1 : -1

  }
  let ans = "";
  for (const row of cache) {
    ans += row;
  }
  return ans;
};
// @lc code=end
