/*
 * @lc app=leetcode.cn id=967 lang=javascript
 *
 * [967] 连续差相同的数字
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function (N, K) {
  let ans = []

  function dfs(num, n) {
    if (n == N) {
      ans.push(num)
      return
    }
    let last = num % 10
    if (last + K >= 0 && last + K <= 9) {
      dfs(num * 10 + last + K, n + 1)
    }
    if (last - K >= 0 && last - K <= 9 && K != 0) {
      dfs(num * 10 + last - K, n + 1)
    }
  }

  for (let i = 1; i <= 9; i++) {
    dfs(i, 1)
  }
  if (N == 1) ans.push(0)
  return ans
};
// @lc code=end
