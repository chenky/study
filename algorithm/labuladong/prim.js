// 判断是否是素数
function isPrim(num) {
    // 2- 根号num即可
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0)
            return false
    }
    return true
}

// 判断范围内有多少个素数
function countPrims(num) {
    const isPrims = Array(num).fill(true)
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (isPrims[i]) {
            for (let j = i * i; j < num; j += i) {
                isPrims[j] = false
            }
        }

    }
    let count = 0
    for (let i = 0; i < num; i++) {
        if (isPrims[i]) {
            count++
        }
    }
    return count
}