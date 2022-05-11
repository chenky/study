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
// reference: https://mp.weixin.qq.com/s/EVhp3D_hwI8RFZlu5sQaIA
/**
 * 其实这个算法有一个名字，叫做 Sieve of Eratosthenes
 * 该算法的时间复杂度比较难算，显然时间跟这个嵌套 for 循环有关，其操作数应该是：
   n/2 + n/3 + n/5 + n/7 + …
= n × (1/2 + 1/3 + 1/5 + 1/7…)
括号中是素数的倒数和。其最终结果是 O(N * loglogN)，有兴趣的读者可以查一下该算法的时间复杂度证明。
*/
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
    for (let i = 2; i < num; i++) {
        if (isPrims[i]) {
            count++
        }
    }
    return count
}