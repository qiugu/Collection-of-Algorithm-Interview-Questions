/**
 * 最长公共前缀
 * @param {*} strs 
 * @returns 
 */
var longestCommonPrefix = function(strs) {
  if(!strs.length) return '';
  let prefix = strs[0];
  // 难点就是怎么一个一个比较字符串
  // 这里以第一个字符串长度为基准，比较每个位置的字符是否相等，相等的话，指针后移一位
  // 最后截取到指针位置的字符串
  const calcPrefix = (str1, str2) => {
      let index = 0;
      const len = Math.min(str1.length, str2.length);
      while(index < len && str1[index] === str2[index]) {
          index++;
      }
      return str1.slice(0, index);
  }
  for(let i = 1; i < strs.length; i++) {
      prefix = calcPrefix(prefix, strs[i]);
      if (prefix === '') break;
  }
  return prefix;
};

var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    const calcPrefix = () => {
        for(let i = 0; i < strs[0].length; i++) {
            let c = strs[0][i];
            for(let j = 1; j < strs.length; j++) {
                if (i === strs[j].length || strs[j][i] !== c) {
                    return strs[j].slice(0, i);
                }
            }
        }
    }
    return calcPrefix();
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
