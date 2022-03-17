/**
 * 回溯算法
*/
function maxDepth(root) {
    let res = 0, depth = 0

    function _traverse(root) {
        if (root === null) {
            res = Math.max(res, depth)
            return
        }
        depth++
        _traverse(root.left)
        _traverse(root.right)
        depth--
    }

    _traverse(root)
    return res
}

// 动态规划解法
function maxDepth2(root) {
    if (root === null) {
        return 0
    }

    const leftMax = maxDepth2(root.left)
    const rightMax = maxDepth2(root.right)

    return Math.max(leftMax, rightMax) + 1

}


