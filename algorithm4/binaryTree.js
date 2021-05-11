/**
 * 二叉树遍历框架
 */
function traverse(root) {
  // 前序遍历
  traverse(root.left);
  // 中序遍历
  traverse(root.right);
  // 后序遍历
}

/**
 * 树的遍历框架
 */
function traverseTree(root) {
  // 遍历节点值
  console.log(root.value);
  const { childs } = root;
  if (!Array.isArray(childs)) {
    return;
  }
  for (let index = 0; index < childs.length; index++) {
    const child = childs[index];
    traverseTree(child);
  }
}
