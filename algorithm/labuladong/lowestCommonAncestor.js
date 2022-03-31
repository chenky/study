function lowestCommonAncestor(root, p, q) {
    let res
    /**
     * 函数定义，root中是否包含p或者q
    */
    function _(root, p, q) {
        if (root === null) return false
        const lHas = _(root.left, p, q)
        const rHas = _(root.right, p, q)

        if ((lHas && rHas) || ((lHas || rHas) || (root.val === p.val || root.val === q.val))) {
            res = root
        }
        return lHas || rHas || (root.val === p.val || root.val === q.val)
    }
    _(root, p, q)
    return res
}

//  查找二叉树中值为val的节点
function findVal(root, val) {
    if (root === null) return null
    if (root.val === val) {
        return root
    }
    const left = findVal(root.left, val)
    if (left !== null) {
        return left
    }
    const right = findVal(root.right, val)
    if (right !== null) {
        return right
    }
    return null
}

// 多个节点最近公共祖先,
function findLCA(root, nodes) {
    const nodeVals = nodes.map(node => node.val)

    return _(root, nodeVals)

    function _(root, nodeVals) {
        if (root === null) return null
        // 前提是所有节点必须存在在这颗二叉树中
        if (nodeVals.includes(root.val)) {
            return root
        }
        const left = _(root.left, nodeVals)
        const right = _(root.right, nodeVals)
        // 后序位置，栈的特点，从上往下往栈中放节点，执行的时候则反过来，
        // 指针从二叉树底部向上游走，已经知道左右子树存在目标值，则父节点就是它的最近公共祖先
        if (left !== null && right !== null) {
            // 当前节点是 LCA 节点
            return root
        }
        return left !== null ? left : right
    }
}

// 在二叉树中寻找 val1 和 val2 的最近公共祖先节点, 节点不一定在二叉树中
function findLCA2(root, p, q) {

    return _(root, p.val, q.val)

    function _(root, val1, val2) {
        if (root === null) return null
        const left = _(root.left, val1, val2)
        const right = _(root.right, val1, val2)
        if (left !== null && right !== null) {
            return root
        }
        if (left === null && right === null) {
            return null
        }
        if (root.val === val1 || root.val === val2) {
            return root
        }
        return left === null ? right : left
    }
}

// 二叉搜索树BST中，寻找val1和val2的最近公共祖先节点
function findLCA3(root, p, q) {

    let val1, val2
    if (p.val > q.val) {
        val1 = q.val
        val2 = p.val
    } else {
        val1 = p.val
        val2 = q.val
    }

    return _(root, val1, val2)

    function _(root, val1, val2) {
        if (root === null) return null
        if (root.val > val2) {
            return _(root.left, val1, val2)
        }
        if (root.val < val1) {
            return _(root.right, val1, val2)
        }
        return root
    }

}

/**
 * class Node {
    int val;
    Node left;
    Node right;
    Node parent;
};
 * 给你输入一棵存在于二叉树中的两个节点p和q，请你返回它们的最近公共祖先，函数签名如下
 * 这道题其实不是公共祖先的问题，而是单链表相交的问题
 * 给你输入两个单链表的头结点p和q，这两个单链表必然会相交，请你返回相交点。 
*/
function findLCA4(p, q) {
    let a = p, b = q
    while (a !== b) {
        if (a !== null) a = a.parent
        // 遍历完p，接着遍历q
        else a = q
        if (b !== null) b = b.parent
        // 遍历完q，接着遍历p
        else b = p
    }
    return a
}