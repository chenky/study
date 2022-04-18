/**
 * 生成合法括号数
 * https://mp.weixin.qq.com/s/XVnoX-lBzColVvVXNkGc5g
*/
function generateParenthesis(n) {
    if (n === 0) return []

    const res = []

    const track = []

    backtrack(n, n, track, res)
    return res

    function backtrack(left, right, track, res) {

        if (right < left) return

        if (left < 0 || right < 0) return

        if (left === 0 && right === 0) {
            res.push(track.join(""))
            return
        }

        track.push("(")
        backtrack(left - 1, right, track, res)
        track.pop()

        track.push(")")
        backtrack(left, right - 1, track, res)
        track.pop()
    }
}
console.log(generateParenthesis(3))