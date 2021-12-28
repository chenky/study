const root = {
    val: 1,
    l: {
        val: 11,
        l: {
            val: 111
        },
        r: {
            val: 112
        }
    },
    r: {
        val: 12,
        l: {
            val: 121
        },
        r: {
            val: 122,
            r: {
                val: 1221
            }
        }
    }
}
let res = 0, depth = 0
function maxDepth(root) {
    traverse(root)
    console.log(JSON.stringify(root, null, 4))
    return res
}
function traverse(root) {
    if (!root) {
        res = Math.max(res, depth)
        return
    }
    depth++
    root.depth = depth
    traverse(root.l)
    traverse(root.r)
    depth--
}
console.log(`max depth is ${maxDepth(root)}`)