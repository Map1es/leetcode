/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let first = -1
  let last = -1
  for (let i = 0; i < nums.length; i++){
    if (nums[i] == target&&first==-1) {
      first = i
      last = i
    } else if (nums[i] == target && first != -1) {
      last = i
    } else if (nums[i] > target) {
      break
    }
  }
  return [first, last]
};
// @lc code=end

