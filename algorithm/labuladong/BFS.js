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

// https://mp.weixin.qq.com/s/WH_XGm1-w5882PnenymZ7g
// start到target最短距离，bfs解决的经典问题
function _up(s, j) {
    const sArr = s.split('')
    if (sArr[j] === '9') {
        sArr[j] = '0'
    } else {
        sArr[j] = parseInt(sArr[j]) + 1 + ''
    }
    return sArr.join('')
}
function _down(s, j) {
    const sArr = s.split('')
    if (sArr[j] === '0') {
        sArr[j] = '9'
    } else {
        sArr[j] = parseInt(sArr[j]) - 1 + ''
    }
    return sArr.join('')
}
function openLocker(deads, target) {
    const deadSet = new Set(deads)
    const visited = new Set()
    const q = []
    let step = 0
    q.push('0000')
    visited.add('0000')
    while (q.length) {
        const sz = q.length
        for (let i = 0; i < sz; i++) {
            const cur = q.shift()
            if (cur === target) {
                return step
            }
            if (deadSet.has(cur)) {
                continue
            }
            for (let j = 0; j < 4; j++) {
                const _upS = _up(cur, j)
                if (!visited.has(_upS)) {
                    visited.add(_upS)
                    q.push(_upS)
                }
                const _downS = _down(cur, j)
                if (!visited.has(_downS)) {
                    visited.add(_downS)
                    q.push(_downS)
                }
            }
        }
        step++
    }
    return -1
}
// console.log(openLocker(['0201', '0101', '0102', '1212', '2002'], '0202'), openLocker(['8888'], '0009'), openLocker(['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'], '8888'))
function openLocker2(deads, target) {
    const deadSet = new Set(deads)
    const visited = new Set()
    let q1 = new Set()
    let q2 = new Set()
    let step = 0
    q1.add('0000')
    q2.add(target)
    // visited.add('0000')
    // visited.add(target)
    while (q1.size && q2.size) {
        const temp = new Set()

        for (const cur of q1) {
            if (q2.has(cur)) {
                return step
            }
            if (deadSet.has(cur)) {
                continue
            }
            visited.add(cur)
            for (let j = 0; j < 4; j++) {
                const _upS = _up(cur, j)
                if (!visited.has(_upS)) {
                    // visited.add(_upS)
                    temp.add(_upS)
                }
                const _downS = _down(cur, j)
                if (!visited.has(_downS)) {
                    // visited.add(_downS)
                    temp.add(_downS)
                }
            }
        }
        step++
        // temp 相当于 q1
        // 这里交换 q1 q2，下一轮 while 就是扩散 q2
        q1 = q2
        q2 = temp
    }
    return -1
}
console.log(openLocker2(['0201', '0101', '0102', '1212', '2002'], '0202'), openLocker2(['8888'], '0009'), openLocker2(['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'], '8888'))