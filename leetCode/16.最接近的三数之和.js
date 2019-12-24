/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const arr = nums.sort((a, b) => a - b)
  let result
  let left, right
  let tempDifference = arr[0] + arr[1] + arr[2] - target
  arr.map((item, index) => {
    left = index + 1
    right = arr.length - 1
    while (left < right) {
      let difference = item + arr[left] + arr[right] - target
      if (Math.abs(difference) <= Math.abs(tempDifference)) {
        tempDifference = difference
        result = difference + target
      }
      if (difference >= 0)--right
      if (difference < 0)++left
    }
  })
  return result
};
// @lc code=end

