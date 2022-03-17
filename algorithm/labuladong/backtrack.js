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

console.log(permute([2, 3, 4]))