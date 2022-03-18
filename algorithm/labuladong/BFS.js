function BFS(start, target) {
    const queue = []
    const visited = new WeakMap()
    let level = 0

    queue.push(start)
    visited.set(start.id, true)
    while (queue.length > 0) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const currentNode = queue.shift()
            if (currentNode === target) {
                return level
            }
            for (const child of currentNode.childs()) {
                if (!visited.has(child.id)) {
                    queue.push(child)
                    visited.set(child.id, true)
                }
            }
        }
        level++
    }
}