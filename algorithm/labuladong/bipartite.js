/**
 * 使用dfs遍历，判断是否是二分图
*/
function isBipartite(graph) {
    let ok = true
    const visited = new Map()
    const colors = new Map()

    graph.keys(node => {
        if (!visited.get(node)) {
            _traverse(graph, node)
        }
    })

    return ok

    function _traverse(graph, node) {
        if (!ok) {
            return
        }
        visited.set(node, true)
        graph.get(node).forEach(neighbor => {
            if (!visited.get(neighbor)) {
                // 没有遍历过，则邻居和当前节点颜色要不同
                colors.set(neighbor, !colors.get(node))
                _traverse(graph, neighbor)
            } else {
                // 已经遍历过的话
                // 对比相邻节点是不是相同颜色
                if (colors.get(node) === colors.get(neighbor)) {
                    ok = false
                }
            }
        })
    }
}

/**
 * 使用bfs遍历， 判断是否是二分图
*/
function isBipartite2(graph) {
    let ok = true
    const q = []
    const colors = new Map()
    const visited = new Map()

    graph.keys(node => {
        if (!visited.get(node)) {
            _bfs(graph, node)
        }
    })

    return ok

    function _bfs(graph, node) {
        visited.set(node, true)
        q.push(node)

        while (q.length > 0) {
            const cur = q.shift()
            graph.get(cur).values().forEach(neighbor => {
                if (!visited.get(neighbor)) {
                    colors.set(neighbor, colors.get(cur))
                    visited.set(neighbor, true)
                    q.push(neighbor)
                } else {
                    if (colors.get(neighbor) === colors.get(cur)) {
                        ok = false
                    }
                }
            })
        }
    }
}
