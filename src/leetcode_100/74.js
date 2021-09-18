/**
 * 搜索二维矩阵
 * https://leetcode-cn.com/problems/search-a-2d-matrix/
 * @param {*} matrix 
 * @param {*} target 
 * @returns 
 */
// 二分搜索
var searchMatrix = function(matrix, target) {
  // 遍历每一行的第一个元素，找到目标值所在的那一行
  // 每一行最后一个元素大于下一行的第一个元素，并且每一行都是升序排列
  // 可以推导出每一列的第一个元素也是升序排列的
  const bscol = (arr, target) => {
      let low = 0, high = arr.length - 1;
      while(low <= high) {
          const mid = low + ((high - low) >> 1);
          // 找到大于等于目标值的第一个元素
          if (arr[mid][0] >= target) {
            high = mid - 1;
          } else {
            low = mid + 1;
          }
      }
      return high;
  }

  // 找到目标在哪一行后，二分查找那一行
  const bsrow = (arr, target) => {
      let low = 0, high = arr.length - 1;
      while(low <= high) {
          const mid = low + ((high - low) >> 1);
          if (arr[mid] > target) {
              high = mid - 1;
          } else if (arr[mid] < target) {
              low = mid + 1;
          } else {
              return true;
          }
      }
      return false;
  }

  const col = bscol(matrix, target);
  if (col < 0) return false;
  return bsrow(matrix[col], target);
};

console.log(searchMatrix([[1]], 1));
