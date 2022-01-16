/**
 * 完全平方数
 * https://leetcode-cn.com/problems/perfect-squares/
 * @param {*} n 
 * @returns 
 */
// 1.动态规划
var numSquares = function(n) {
  const dp = [];
  dp[0] = 0;
  for (let i = 0; i <= n; i++) {
      dp[i] = i;
      for (let j = 1; j * j <= i; j++) {
          dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      }
  }
  return dp[i];
};

// 2. 数学公式推导：四平方和定理
var numSquares = function(n) {
  // 判断是否是完美平方数
  const isPerfectNum = x => {
    const y = Math.floor(Math.sqrt(x));
    return y * y === x;
  };

  // 判断是否满足公式4^k * (8m + 7)
  const isCheck4 = x => {
    while (x % 4 === 0) {
      x /= 4;
    }
    return x % 8 === 7;
  };

  if (isPerfectNum(n)) return 1;
  if (isCheck4(n)) return 4;
  for (let i = 1; i * i <= n; i++) {
    let j = n - i * i;
    if (isPerfectNum(j)) return 2;
  }
  return 3;
};
