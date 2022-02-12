/**
 * 删除链表的倒数第N个节点HOT
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/
 * @param {*} head 
 * @param {*} n 
 * @returns 
 */
var removeNthFromEnd = function(head, n) {
  // 一般做法，遍历一遍链表，得到链表长度，然后再去找到倒数第n个节点
  // 双指针，设置两个指针间隔n个距离，这样当第二个指针为空时，第一个节点下一个节点就是需要删除的节点
  let dummy = new ListNode(-1);
  dummy.next = head;
  let p1 = head;
  let p2 = dummy;
  let i = 0;
  while (i < n) {
      p1 = p1.next;
      i++;
  }
  while (p1) {
      p1 = p1.next;
      p2 = p2.next;
  }
  const next = p2.next.next;
  p2.next = next;
  return dummy.next;
};

// 栈
