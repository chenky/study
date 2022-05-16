class UF {
    #parent = []
    #size = []
    #count
    constructor (N) {
        this.#count = N
        for (let i = 0; i < N; i++) {
            this.#parent[i] = i
            this.#size[i] = 1
        }
    }
    // find x.root
    find(x) {
        while (this.#parent[x] !== x) {
            // x -> x.parent.parent
            this.#parent[x] = this.#parent[this.#parent[x]]
            // x = x.parent.parent
            x = this.#parent[x]
        }
        return x
    }
    union(p, q) {
        const pRoot = this.find(p)
        const qRoot = this.find(q)
        if (pRoot === qRoot) {
            return
        }

        // 小树接到大树下面
        if (this.#size[pRoot] > this.#size[qRoot]) {
            this.#parent[qRoot] = pRoot
            this.#size[pRoot] += this.#size[qRoot]
        } else {
            this.#parent[pRoot] = qRoot
            this.#size[qRoot] += this.#size[pRoot]
        }
        this.#count--
    }
    connected(p, q) {
        const pRoot = this.find(p)
        const qRoot = this.find(q)
        return pRoot === qRoot
    }
    count() {
        return this.#count
    }
}