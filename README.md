# Collection-of-Algorithm-Interview-Questions

## 目前更新题目数量`27`道，`HOT`标记为热门题目

进击大厂算法面试题JavaScript版题解

包括解题的方法，以及详细的注释。可以自己启动项目，尝试本项目提供的自动执行得到结果的脚本来测试你的方法。

## 如何使用

### 下载克隆项目

```sh
git clone https://github.com/qiugu/Collection-of-Algorithm-Interview-Questions.git
```

### 安装依赖

```sh
yarn
```

### 启动项目

```sh
npm run start 1 [2,3,4,5] 7
```

`start`启动参数后面的参数表示题目序号，之后所有的参数表示题目的输入参数

得到执行结果：

```
[INFO]开始执行！
[INFO]执行结果为: 1,2
[INFO]执行结束！
```

### 注意事项

- 目前链表和树保持和`leetcode`一致，使用数组表示，内部会转换成对应结构
- 方法注释严格按照实例来写，否则参数无法匹配，导致出错

```javascript
/*
* 题目名称
* 题目链接
* @param {参数类型} params1 不是ListNode和TreeNode类型时，参数类型可以忽略
* @param {类型} params2
* @returns 返回类型可以写，也可以忽略，不参与计算
*/
function solution(params1, params2) {
  
}
```
