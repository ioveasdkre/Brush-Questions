/*
  二叉樹節點的定義。
  給定root一個二叉樹和一個整數targetSum，true如果樹有一個從根到葉的路徑，使得沿路徑的所有值相加等於 ，則返回targetSum。
  葉是沒有子節點的節點。
*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  // 建構子
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  else if (!root.left && !root.right)
    return root.val === targetSum; // 左邊 且 右邊不存在
  else {
    const left = root.left ? total(root.left, targetSum, root.val) : null; // 左邊存在
    const right = root.right ? total(root.right, targetSum, root.val) : null; // 右邊存在
    return left === true || right === true ? true : false;
  }
}

function total(root: TreeNode, targetSum: number, sum: number): boolean {
  sum += root.val;
  if (!root.left && !root.right) return sum === targetSum; // 左邊 且 右邊不存在
  else if (root.left && total(root.left, targetSum, sum))
    return true; // 左邊存在 且 回傳值為 true
  else if (root.right && total(root.right, targetSum, sum))
    return true; // 右邊存在 且 回傳值為 true
  else return false;
}
