/*
有一個單鍊錶 head，我們想刪除其中的一個節點 node。

您將獲得要刪除的節點 node。您將無法訪問的第一個節點head。

鍊錶的所有值都是唯一的，並且保證給定節點node不是鍊錶中的最後一個節點。

刪除給定的節點。請注意，刪除節點並不意味著將其從內存中刪除。我們的意思是：

給定節點的值不應存在於鍊錶中。
鍊錶中的節點數應該減一。
之前的所有值 node都應該是相同的順序。
後面的所有值 node都應該是相同的順序。
自定義測試：

對於輸入，您應該提供整個鍊錶head和要給出的節點node。node不應該是列表的最後一個節點，而應該是列表中的實際節點。
我們將構建鍊錶並將節點傳遞給您的函數。
調用您的函數後，輸出將是整個列表。
*/

// 單鍊錶的定義。
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 不要返回任何東西，而是在原地修改它。
 */
function deleteNode(root: ListNode | null): void {
  if(root){
    if(root.next){
      root.val = root.next.val; // 1往前般
      root.next = root.next.next; // 下一個節點指向 9
    }
  }
};