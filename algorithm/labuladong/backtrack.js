// 路径，选择，结束条件，回溯前做选择，回溯后撤销选择，很像二叉树的前中后序遍历
class BackTrack {
    #res = []

    constructor () {

    }

    execute(track, list) {
        // 满足结束条件
        if (end) {
            this.#res.push([...track])
            return
        }
        for (let index = 0; index < list.length; index++) {
            const element = list[index]
            // do something
            this.execute(track, list)
            // undo something
        }
    }

}


// 无缓存版本
function permute(nums) {
    const res = [], track = []
    function backtrack(nums) {
        if (track.length === nums.length) {
            res.push([...track])
            return
        }

        for (let index = 0; index < nums.length; index++) {
            const element = nums[index]
            if (track.includes(element)) {
                continue
            }
            track.push(element)
            backtrack(nums)
            track.pop()
        }
    }

    backtrack(nums)
    return res
}
// console.log(permute([2, 3, 4]))

// 有缓存版本
function permute2(nums) {
    const res = [], used = Array(nums.length).fill(false, 0, nums.length)

    function _backtrack(track = [], nums) {
        if (track.length === nums.length) {
            res.push([...track])
            return
        }
        for (let index = 0; index < nums.length; index++) {
            if (used[index]) {
                continue
            }
            const element = nums[index]
            track.push(element)
            used[index] = true
            _backtrack(track, nums)
            track.pop()
            used[index] = false
        }
    }
    _backtrack([], nums)
    return res
}

// console.log(permute2([2, 3, 4]))

function permute3(nums, track = [], res = [], used) {
    if (track.length === nums.length) {
        res.push([...track])
        return
    }
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index]
        // 去重
        if (used[index]) {
            continue
        }
        track.push(element)
        used[index] = true
        permute3(nums, track, res, used)
        track.pop()
        used[index] = false
    }
    return res
}

// console.log(permute3([2, 3, 4], [], [], Array(3).fill(false)))


function NQueens(n) {
    const res = []

    const board = Array(n).fill(0).map(() => Array(n).fill("."))
    // 这种定义是错的，因为每行都引用同一个引用
    // const board1 = Array(n).fill(Array(n).fill('.'))

    board[0][0] = 3
    // board1[0][0] = 3
    // console.log(board, board1)

    function isValid(row, col) {
        // 上，左上，右上
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q')
                return false
        }
        // 右上
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false
            }
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false
            }
        }
        return true
    }
    function _backtrack(row) {
        if (row === board.length) {
            res.push(JSON.parse(JSON.stringify(board)))
            // res.push(board.map((row) => row.join("")))
            return
            // 如果只需要一个解
            // return true
        }
        for (let col = 0; col < n; col++) {
            if (!isValid(row, col)) {
                continue
            }
            board[row][col] = 'Q'
            _backtrack(row + 1)
            // 只需要一个解
            // if (_backtrack(row + 1)) {
            //     return true
            // }
            board[row][col] = '.'
        }
        // 到这里了说明无解
        // return false
    }


    _backtrack(0)
    return res
}

console.log(NQueens(4))

