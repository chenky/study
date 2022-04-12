// 暴力破解一个串是否是另一个串的子串
// 时间复杂度(n-m)*m, 空间复杂度 1
function search(txt, partern) {
    const n = txt.length
    const m = partern.length
    for (let i = 0; i <= n - m; i++) {
        for (let j = 0; j < m; j++) {
            if (partern[j] !== txt[i + j]) {
                break
            }
        }
        if (j === m) {
            return i
        }
    }
    return -1
}

class KMP {
    #m
    #dp

    constructor (partern) {
        const m = partern.length
        this.#m = m

        const dp = Array(m).fill(0).map(() => Array(256).fill(0))
        dp[0][partern[0].charCodeAt()] = 1
        let X = 0
        for (let j = 1; j < m; j++) {
            for (let c = 0; c < 256; c++) {
                // if (partern[j].charCodeAt() === c) {
                //     dp[j][partern[j].charCodeAt()] = j + 1
                // } else {
                //     dp[j][c] = dp[X][c]
                // }
                dp[j][c] = dp[X][c]
            }
            dp[j][partern[j].charCodeAt()] = j + 1
            X = dp[X][partern[j].charCodeAt()]
        }
        this.#dp = dp
    }

    search(txt) {
        const dp = this.#dp
        const m = this.#m
        const n = txt.length
        // 匹配字符串
        let j = 0
        for (let i = 0; i < n; i++) {
            j = dp[j][txt[i].charCodeAt()]
            if (j === m) return i - m + 1
        }
        return -1
    }
}

const kmp = new KMP('ab')
console.log(kmp.search('aabcde'), kmp.search('dd'), kmp.search('ddddabc'))