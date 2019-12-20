/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let num = [-1]
  let max = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      num.push(i)
    } else {
      num.pop()
      if (!num.length) {
        num.push(i)
      } else {
        max = max > i - num.slice(-1) ? max : i - num.slice(-1)
      }
    }
  }
  return max
};
// @lc code=end

