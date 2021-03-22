// x的平方根
const mySqrt = x => {
  let start = 0, end = x, ans = -1;
  while (start <= end) {
    let mid = start + ((end - start) >> 1);
    // 这里求平方根的整数部分，因此只要mid^2小于等于x时，求最大的mid就是x的平方根
    if (mid**2 <= x) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}