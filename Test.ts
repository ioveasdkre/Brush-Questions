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
  const set = new Set<number>();
  return target(root, k, set);
}

function target(root: TreeNode | null, k: number, set: Set<number>): boolean {
  if (!root) return false;
  else {
    if(set.has(k - root.val))
      set.add(root.val);
    if (set.has(k - root.val)) return true;
    const left = root.left;
    const right = root.right;
    if (left) {
      if (set.has(k - left.val)) return true;
      else {
        set.add(left.val);
        if (target(left.left, k, set) || target(left.right, k, set))
          return true;
      }
    }
    if (right) {
      if (set.has(k - right.val)) return true;
      else {
        set.add(right.val);
        if (target(right.left, k, set) || target(right.right, k, set))
          return true;
      }
    }
    return false;
  }
}