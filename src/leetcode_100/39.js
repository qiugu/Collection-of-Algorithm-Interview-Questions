/**
 * 组合总和HOT
 * https://leetcode-cn.com/problems/combination-sum/
 * @param {*} candidates 
 * @param {*} target 
 * @returns 
 */
var combinationSum = function(candidates, target) {
  /**
      回溯?
   */
  console.time();
  const ans = [];
  const backtrace = (target, combine, idx) => {
      if (idx === candidates.length) return;
      if (target === 0) {
          ans.push(combine);
          return;
      }
      // 不选当前值，直接跳过
      backtrace(target, combine, idx+1);
      // 选择当前值，剩余target需要大于0
      if (target - candidates[idx] >= 0) {
          // 因为可以重复选择，所以idx不需要递增
          backtrace(target - candidates[idx], [...combine, candidates[idx]], idx);
      }
  };
  backtrace(target, [], 0);
  console.timeEnd();
  return ans;
};

const data = [2,3,6,7,8,10,12,44,80,102,29,12,33,21,31,4,5,12,34,2,3,11,23,44,8,6,4,3,1,2];
console.log(combinationSum(data, 7));
