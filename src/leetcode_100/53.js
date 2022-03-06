/**
 * 最大子数组和HOT
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {*} nums 
 * @returns 
 */
var maxSubArray = function(nums) {
  /**
      暴力解法，超时了
      动态规划
      dp[i]表示从0到i的最大连续和，注意并不是整个数组的最大连续和，所以还需要一个值来记录最大和
      dp[i] = Math.max(dp[i-1]+nums[i], nums[i]); 
   */
  const n = nums.length;
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  let ans = nums[0];
  for (let i = 1; i < n; i++) {
      dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
      ans = Math.max(ans, dp[i]);
  }
  return ans;
};

// 动态规划只和前一个值有关
var maxSubArray = function(nums) {
  let prev = 0;
  let ans = nums[0];
  for (let num of nums) {
    prev = Math.max(prev + num, num);
    ans = Math.max(prev, ans);
  }
  return ans;
}
