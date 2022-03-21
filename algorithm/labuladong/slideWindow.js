// 滑动窗口框架
// function slideWindow(str, target) {
//     const needs = new WeakMap()
//     const win = new WeakMap()
//     Object.keys(target).forEach(key => {
//         const val = needs.get(key)
//         needs.set(key, val ? val++ : 1)
//     })

//     const left = 0, right = 0
//     while (right < str.length) {
//         // 窗口向右边移动
//         const rc = str[right]
//         right++
//         // 窗口数据更新

//         console.log('windows is ', left, right)
//         // 向左边移动
//         while (win needs shrink) {
//             const lc = str[left]
//             left++

//             // 窗口更新
//         }
//     }
// }

function slideWindow(str, target) {
    const needs = new Map()
    const win = new Map()
    for (let i = 0; i < target.length; i++) {
        const key = target[i]
        const val = needs.get(key)
        needs.set(key, (val ? ++val : 1))
    }

    let left = 0, right = 0
    let valid = 0
    let start = 0, len = Number.MAX_SAFE_INTEGER
    // 右指针都已经到字符串末尾了，说明搜索结束了
    while (right < str.length) {
        // 窗口向右边移动
        const rc = str[right++]
        // needs中存在当前字符时才需要更新窗口数据，否则没有必要更新窗口数据
        if (needs.has(rc)) {
            let winRVal = win.get(rc)
            // 窗口中的字符map需要+1，不存在则设置成1
            win.set(rc, winRVal ? ++winRVal : 1)
            // 当字符个数完全相等时
            if (needs.get(rc) === win.get(rc)) {
                valid++
            }
        }

        // console.log('out left right ', str, rc, left, right)
        // 所有字符都包括了, 需要收缩窗口，看看后面还有没有更短的字符，为了比较
        while (valid === target.length) {
            // 计算最小子串
            if (right - left < len) {
                len = right - left
                start = left
            }

            // 向左边移动
            const lc = str[left++]

            // needs中存在当前字符时才需要更新窗口数据，否则没有必要更新窗口数据
            if (needs.has(lc)) {
                let winLVal = win.get(lc)
                // 向左移动收缩窗口，所以win窗口中存在的字符个数需要-1，同时valid也需要-1
                if (needs.get(lc) === winLVal) {
                    valid--
                }
                win.set(lc, --winLVal)
            }
        }
    }
    return len === Number.MAX_SAFE_INTEGER ? "" : str.slice(start, start + len + 1)
}
// console.log(slideWindow("COEBANC", "ABC"))
// console.log(slideWindow("ADOBECOEBANC", "ABC"))
[].i

function checkIsIncludes(s, t) {
    let left = 0, right = 0
    const needs = {}
    const win = {}
    let valid = 0
    for (let i = 0; i < t.length; i++) {
        const c = t[i]
        needs[c] = 1
    }

    while (right < s.length) {
        const rc = s[right++]
        if (needs[rc]) {
            win[rc] = win[rc] ? ++win[rc] : 1
            if (needs[rc] === win[rc]) {
                valid++
            }
        }
        // console.log('left right win', left, right, win, needs, valid)
        while (valid === t.length) {
            if (right - left === t.length) {
                return true
            }

            const lc = s[left++]
            if (needs[lc]) {
                if (needs[lc] === win[lc]) {
                    valid--
                }
                win[lc]--
            }
        }
    }
    return false
}

// console.log(checkIsIncludes('eidbaooo', 'ab'))
// console.log(checkIsIncludes('eidboaoo', 'ab'))

function lenOfLongestSubstring(s) {
    let left = 0, right = 0
    const win = {}
    let res = 0
    while (right < s.length) {
        const rc = s[right++]
        win[rc] = win[rc] ? ++win[rc] : 1
        while (win[rc] > 1) {
            const lc = s[left++]
            win[lc]--
        }
        // console.log(right, left, win[rc])
        res = Math.max(res, right - left)
    }
    return res
}
console.log(lenOfLongestSubstring('abcabcbb'))
console.log(lenOfLongestSubstring('bbb'))
