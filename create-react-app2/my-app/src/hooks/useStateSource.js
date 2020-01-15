// todo: memoizedState什么时候被清理呢？

let memoizedState: any[] = [] // hooks 的值存放在这个数组里
let cursor = 0 // 当前 memoizedState 的索引

function useState(initialValue: any) {
    memoizedState[cursor] = memoizedState[cursor] || initialValue
    const currentCursor = cursor
    function setState(newState: any) {
        memoizedState[currentCursor] = newState
        cursor = 0
        // render(<App />, document.getElementById('root'))
    }
    return [memoizedState[cursor++], setState] // 返回当前 state，并把 cursor 加 1
}