/**
 * 字母异位词分组HOT
 * https://leetcode-cn.com/problems/group-anagrams/
 * @param {*} strs 
 */
var groupAnagrams = function(strs) {
  const memo = {};
  for (let str of strs) {
    const key = str.split('').sort().join('');
    memo[key] ? memo[key].push(str) : (memo[key] = [str]);
  }
  return Object.keys(memo).map(key => memo[key]);
};

const data = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(data));
