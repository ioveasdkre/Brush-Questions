/*
  給定root二叉樹的 ，返回其節點值的前序遍歷。
*/
/*
  約束：
    樹中的節點數在範圍內[0, 100]。
    -100 <= Node.val <= 100
*/
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

function preorderTraversal(root: TreeNode | null): number[] {
  const arrayOfVals = [];
  preorder(root, arrayOfVals);
  return arrayOfVals;
}

function preorder(root, arrayOfVals) {
  if (!root) return;

  arrayOfVals.push(root.val);
  preorder(root.left, arrayOfVals);
  preorder(root.right, arrayOfVals);
}
