/*
給你兩個排序鍊錶的頭list1和list2.

將兩個列表合併到一個排序列表中。該列表應通過將前兩個列表的節點拼接在一起來製作。

返回合併鍊錶的頭部。
*/

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 || !list2) { // 判斷 list1 or list2為 null
    return list1 ? list1 : list2; // 
  } else if (list1.val < list2.val) { // a < b
    list1.next = mergeTwoLists(list1.next, list2); // 下一個數字會是 a.next,b 做比較
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1); // 下一個數字是 b.next,a 做比較
    return list2;
  }
}
