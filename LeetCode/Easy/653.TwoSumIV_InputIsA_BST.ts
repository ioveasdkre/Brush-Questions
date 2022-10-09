// 給定root一個二叉搜索樹和一個目標數k，true如果 BST 中存在兩個元素且它們的和等於給定目標，則返回。

// 二叉樹節點的定義。
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function findTarget(root: TreeNode | null, k: number): boolean {
  const set: Set<number> = new Set<number>();
  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    const curr = queue.shift(); // 刪除第一個元素，並回傳遞一個元素
    if (!curr)
      // 判斷 取出來的值為空，跑下一次迴圈
      continue;
    else if (set.has(k - curr.val))
      // 判斷 目標和 - 目前值 是否存在於籃子中
      return true;

    set.add(curr.val); // 將此次值存起來

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return false;
}
