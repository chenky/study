function bfs(root) {
    if (root === null) return
    const q = []
    q.push(root)

    let depth = 1
    while (q.length > 0) {
        for (let index = 0; index < q.length; index++) {
            const node = q.shift()
            node.depth = depth++
            if (root.left) {
                q.push(root.left)
            }
            if (root.right) {
                q.push(root.right)
            }
        }
    }

}