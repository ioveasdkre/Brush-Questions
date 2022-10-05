/*
  給定head一個有序鍊錶，刪除所有重複項，使每個元素只出現一次。返回排序好的鍊錶。
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;
    
  let node: ListNode | null = head;

  while (node.next) { 
      if (node.val === node.next.val) { // 判斷當前值和 下一個值是否相同
        node.next = node.next.next // 將下下一階開始跑迴圈
      } else { 
        node = node.next // val與 next不同 所以 next當作下一次迴圈使用
      }
  }
  return head 
}
