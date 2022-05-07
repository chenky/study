/**
 * courses = 2, prerequisites = [[1,0],[2,0]]
 */
function buildCoursesGraph(prerequisites) {
    const graph = new Map()
    for (const [to, from] of prerequisites) {
        const old = graph.get(from) ?? []
        graph.set(from, [...old, to])
    }
    return graph
}

/**
 * dfs检测环， 并且输出拓扑结构
 */
function top1(graph, courses) {
    const visited = new Map()
    const onPath = new Map()
    let hasCycle = false
    const postOrder = []
    let cycleElems = []
    const cycleElemsRes = []

    // 可能有多个图，所以每个都要遍历一次
    for (let i = 0; i < courses; i++) {
        _traverse(graph, i)
    }

    function _traverse(graph, s) {
        if (onPath.get(s)) {
            hasCycle = true
            // 把环加入到结果集中
            const temp = []
            // console.log(cycleElems);
            let lastIndex = cycleElems.length - 1
            // 环的起点
            temp.push(cycleElems[lastIndex--])
            while (cycleElems[lastIndex] !== s) {
                temp.push(cycleElems[lastIndex--])
            }
            // 环的终点
            temp.push(cycleElems[lastIndex--])
            console.log(temp)
            cycleElemsRes.push(temp)
        }
        // 只需要找到第一个环就返回
        //   if (visited.get(s) || hasCycle) {
        //     return;
        //   }
        // 这个判断条件可以找到所有环找到所有环
        if (visited.get(s)) {
            return
        }
        cycleElems.push(s)
        visited.set(s, true)
        onPath.set(s, true)
        graph.get(s).forEach((val, index) => {
            _traverse(graph, val)
        })
        cycleElems.pop()
        postOrder.push(s)
        onPath.set(s, false)
    }
    // console.log(hasCycle ? [] : postOrder.reverse(), cycleElemsRes);
    return hasCycle ? [] : postOrder.reverse()
}

//   const graph = buildCoursesGraph([
//     [1, 0],
//     [0, 1],
//     [2, 1],
//     [0, 2],
//   ]);
//   top1(graph, 3);
const graph2 = buildCoursesGraph([
    [1, 0],
    [0, 1],
    [2, 1],
    [0, 2],
    [3, 2],
    [4, 3],
    [0, 3],
    [2, 4],
])
top1(graph2, 5)

/**
 * 通过bfs，入度检测环，并输出拓扑结构
 * courses = 2, prerequisites = [[1,0],[2,0]]
*/
// function top2(courses, prerequestes) {
//     const indegree = new Map()
//     const q = []
//     const graph = new Map
//     let res = []
//     let count = 0

//     // 构建图，并且添加入度
//     for (let i = 0; i < courses; i++) {
//         const edge = prerequestes[i]
//         const [to, from] = edge
//         const fromList = graph.get(from) ?? []
//         graph.set(from, fromList)
//         indegree.set(to, ++(indegree.get(to) ?? 0))
//     }

//     // 所有入度为0的加入队列
//     for (let node = 0; node < courses; node++) {
//         if (indegree.get(node) === 0) {
//             q.push(node)
//         }
//     }

//     while (q.length > 0) {
//         const cur = q.shift()
//         res.push(cur)
//         count++
//         graph.get(cur).forEach(neighbor => {
//             indegree.set(neighbor, --indegree.get(neighbor))
//             // 入度为0才进入队列，不会重复遍历就不会死循环
//             if (indegree.get(neighbor) === 0) {
//                 q.push(neighbor)
//             }
//         })
//     }

//     count === courses ? res : []

// }