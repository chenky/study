function coinChange(coins, amount) {
    if (amount === 0) return 0
    if (amount < 0) return -1

    let res = Number.MAX_SAFE_INTEGER
    for (let index = 0; index < coins.length; index++) {
        const coin = coins[index]
        const subProblem = coinChange(coins, amount - coin)
        if (subProblem === -1) continue
        res = Math.min(res, subProblem + 1)
    }
    return res === Number.MAX_SAFE_INTEGER ? -1 : res
}

console.log(coinChange([1, 2, 5], 6))