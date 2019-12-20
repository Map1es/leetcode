/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []
  nums.sort((a, b) => a - b)
  let size = nums.length
  if (nums[0] <= 0 && nums[size - 1] >= 0) {
    let i = 0;
    while (i < size - 2) {
      if (nums[i] > 0) {
        break
      }
      let first = i + 1
      let last = size - 1
      while (first < last) {
        if (nums[i] * nums[last] > 0) {
          break
        }
        let sums = nums[i] + nums[first] + nums[last]
        if (sums === 0) {
          res.push([nums[i], nums[first], nums[last]])
        }
        if (sums <= 0) {
          while (nums[first] === nums[++first]) { }
        } else {
          while (nums[last] === nums[--last]) { }
        }
      }
      while (nums[i] === nums[++i]) { }
    }
  }
  return res
};

