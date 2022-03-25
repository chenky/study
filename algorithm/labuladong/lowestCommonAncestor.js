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