/**
 * 线段扫描
 * https://mp.weixin.qq.com/s/YVqd4J1GVnh25FKk8FUYzA
*/
function minMeetingRooms(meetings) {
    const n = meetings.length
    const starts = []
    const ends = []
    for (let i = 0; i < n; i++) {
        const [start, end] = meetings[i]
        starts.push(start)
        ends.push(end)
    }
    starts.sort()
    ends.sort()
    let minMeetingRooms = 0
    let res = 0
    let i = 0, j = 0
    console.log(`starts and ends is ${starts}, ${ends}`)
    // 因为起点一定在结束点前面，所以此处只需要i<n 而不需要再 && j<n
    while (i < n) {
        console.log(`i is ${i}, j is ${j}`)
        // 等于就是说会议刚好完美衔接，不需要加会议室
        if (starts[i] < ends[j]) {
            minMeetingRooms++
            i++
        } else {
            minMeetingRooms--
            j++
        }
        res = Math.max(res, minMeetingRooms)
    }
    return res
}
// console.log(minMeetingRooms([[3, 6], [4, 5], [5, 7]]))

/**
 * 计算油耗绕圈贪心算法
 * https://mp.weixin.qq.com/s/k-z_oewAqMYc3vpmOm4gEQ
*/
function canFinishCircuit(gas, cost) {
    let sum = 0
    let minSum = 0
    const n = gas.length
    let start = 0
    for (let i = 0; i < n; i++) {
        sum += gas[i] - cost[i]
        if (sum < minSum) {
            console.log(`sum is ${sum}, minSum is ${minSum}, start is ${start}, i is ${i}`)
            // 油耗最多的点的下一个站点作为起点
            start = i + 1
            minSum = sum
        }
    }
    if (sum < 0) {
        return -1
    }
    // 走到n说明又要从起点开始，环形路线。
    return start === n ? 0 : start
}
// console.log(canFinishCircuit([1, 2, 5, 4, 5], [3, 4, 5, 1, 2]))