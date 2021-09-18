/**
 * 子集HOT
 * https://leetcode-cn.com/problems/subsets/
 * @param {*} nums 
 */
var subsets = function (nums) {
  // 定义每次回溯的数组存放选择的值
  const t = [];
  const ans = [];
  // 回溯方法
  const backtrace = cur => {
    // 遍历到数组长度的索引停止
    // 遍历到数组长度的索引的时候，t数组为空，最后把空数组加入进去了
    if (cur === nums.length) {
      ans.push(t.slice());
      return;
    }
    // 选中当前索引的值，加入t中
    t.push(nums[cur]);
    // 递归下一个索引
    backtrace(cur+1);
    // 取消上次选中的值
    t.pop();
    // 直接从下一个索引中选择，递归下一个值
    backtrace(cur+1);
  };
  // 从索引0处开始回溯
  backtrace(0);
  return ans;
}

console.log(subsets([1,2,3]));

module.exports = subsets;
