/**
 * 寻找两个正序数组中的中位数
 * @param {*} nums1 
 * @param {*} nums2 
 * @returns 
 */
// 1. 合并数组，找中位数
var findMedianSortedArrays = function(nums1, nums2) {
  const res = nums1.concat(nums2).sort((a, b) => a - b);
  const mid = res.length >> 1;
  let ans = 0;
  if (res.length % 2 === 0) {
      ans = (res[mid-1] + res[mid]) / 2;
  } else {
      ans = res[mid];
  }
  return ans;
};

// 2. 太难了，看不明白
