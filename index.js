const fs = require('fs');
const path = require('path');

const chalk = require('chalk');

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function createLinkedList (arr) {
  if (!Array.isArray(arr)) {
    console.error(chalk.red('[ERROR]参数必须是数组类型！'));
    return;
  }
  const dummy = new ListNode(-1);
  arr.reduce((acc, cur) => {
    acc.next = new ListNode(cur);
    return acc.next;
  }, dummy);
  return dummy.next;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function createBinayTree (arr) {
  if (!Array.isArray(arr)) {
    console.error(chalk.red('[ERROR]参数必须是数组类型！'));
    return;
  }
  const n = arr.length;
  const buildTree = (i) => {
    if (i >= n || arr[i] == undefined) return null;
    const root = new TreeNode(arr[i]);
    root.left = buildTree(i*2+1);
    root.right = buildTree(i*2+2);
    return root;
  };
  return buildTree(0);
}

const args = process.argv;
// 获取执行的题目序号
// 获取剩余的参数，用于注入题目中的方法
const [_, file, topicIndex, ...topicParams] = args;
const topicPath = `./leetcode_100/${topicIndex}.js`;
const topicAbsolutePath = path.resolve(__dirname, topicPath);

const topic = require(topicPath);
// 判断题目方法的参数合法性
if (topic.length != topicParams.length) {
  console.error(chalk.red('[ERROR]指定参数与方法参数数量不匹配！'));
  process.exit(1);
}

// 判断题目序号参数合法性
if (topicIndex == null || topicIndex == undefined) {
  console.error(chalk.red('[ERROR]请指定题目的序号！'));
  process.exit(1);
}
if (!/\d/.test(topicIndex)) {
  console.error(chalk.red('[ERROR]题目序号请输入数字！'));
  process.exit(1);
}

console.log(chalk.green(`[INFO]开始执行！`));
// 命令行传递进来的参数都是字符串形式的，需要转换一下
const topicParamsVarible = topicParams
  .map(p => {
    const fn = new Function(`return ${p}`);
    return fn();
  });

const topicContent = fs.readFileSync(topicAbsolutePath, 'utf-8');
// 判断文件注释中是否包含链表或者树，有的话需要根据参数来创建对应数据结构
// TODO 正则匹配出@param后面的参数，写不出来orz...暂时提取整个注释的内容后再去判断
const matchParamsType = topicContent.match(/\/\*[^]*?\*\//g)[0].split('\n');
const transformParam = [];
// 除去不是参数的行注释，它们分别是多行注释的'/*'、'*/'，以及题目名，链接地址
for (let i = 3; i < matchParamsType.length - 1; i++) {
  const t = matchParamsType[i];
  if (/@param\s*\{ListNode\}/.test(t)) {
    // 这里跳过了0，因此取对应参数时要补上索引
    transformParam.push(createLinkedList(topicParamsVarible[i-3]));
  } else if (t.includes('@param {TreeNode}')) {
    transformParam.push(createBinayTree(topicParamsVarible[i-3]));
  } else if (t.includes('@param')) {
    transformParam.push(topicParamsVarible[i-3]);
  }
}

const res = topic(...transformParam);

process.stderr.on('data', data => {
  console.log(chalk.green(`[ERROR]执行错误: ${chalk.red(data)}`));
});
process.on('uncaughtException', err => {
  console.error('有一个未捕获的错误', err);
  process.exit(1);
})
console.log(chalk.green(`[INFO]执行结果为: ${chalk.blue(JSON.stringify(res))}`));
console.log(chalk.green(`[INFO]执行结束！`));

process.exit(0);
