function shuffle(arr) {
  const n = arr.length;
  // 0-i之间取随机数，与i进行交换
  for (let i = 0; i < n; i++) {
    const r = Math.random() * i;
    const j = Math.ceil(r);
    // console.log(`i is ${i}, r is ${r}, j is ${j}`);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));
