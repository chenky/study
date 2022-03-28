/**
 * courses = 2, prerequisites = [[1,0],[2,0]]
*/
function buildCoursesGraph(courses, prerequisites) {
    const graph = new Map()
    for (const [to, from] of prerequisites) {
        if (!Array.isArray(graph.get(from))) {
            graph.set(from, [])
        }
        graph.set(from, graph.get(from).push(to))
    }
}

/**
 * dfs检测环， 并且输出拓扑结构
*/
function top1(graph, courses) {
    const visited = new Map()
    const onPath = new Map()
    let hasCycle = false
    const preorder = []

    // 可能有多个图，所以每个都要遍历一次
    for (let i = 0; i < courses; i++) {
        _traverse(graph,)
    }

    function _traverse(graph, s) {
        if (onPath.get(s)) {
            hasCycle = true
        }
        if (visited.get(s) || hasCycle) {
            return
        }
        visited.set(s, true)
        onPath.set(s, true)
        graph.values.forEach((val, index) => {
            _traverse(graph, val)
        })
        preorder.push(s)
        onPath.set(s, false)
    }

    return hasCycle ? [] : preorder.reverse()

}

/**
 * 通过bfs，入度检测环，并输出拓扑结构
 * courses = 2, prerequisites = [[1,0],[2,0]]
*/
function top2(courses, prerequestes) {
    const indegree = new Map()
    const q = []
    const graph = new Map
    let res = []
    let count = 0

    // 构建图，并且添加入度
    for (let i = 0; i < courses; i++) {
        const edge = prerequestes[i]
        const [to, from] = edge
        const fromList = graph.get(from) ?? []
        graph.set(from, fromList)
        indegree.set(to, ++(indegree.get(to) ?? 0))
    }

    // 所有入度为0的加入队列
    for (let node = 0; node < courses; node++) {
        if (indegree.get(node) === 0) {
            q.push(node)
        }
    }

    while (q.length > 0) {
        const cur = q.shift()
        res.push(cur)
        count++
        graph.get(cur).forEach(neighbor => {
            indegree.set(neighbor, --indegree.get(neighbor))
            // 入度为0才进入队列，不会重复遍历就不会死循环
            if (indegree.get(neighbor) === 0) {
                q.push(neighbor)
            }
        })
    }

    count === courses ? res : []

}