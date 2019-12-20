/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let a = []
  for (let i = 0; i < s.length; i++){
    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
      a.push(s[i])
    } else {
      if (validate(a[a.length-1]) != s[i]) {
        return false
      } else { 
        a.pop()
      }
    }
  }
  return !a.length
};
let validate = function (s) {
  switch (s) {
    case '(':
      return ')'
    case '[':
      return ']'
    case '{':
      return '}'
  }
}
// @lc code=end

