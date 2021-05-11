/**
 * 二叉树翻转
 */
function invertTree(root) {
  if (root === null) return;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
