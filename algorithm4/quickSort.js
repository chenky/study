/**
 * 快速排序的框架
 */
function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pIndex = Math.floor(arr.length / 2);
  // console.log(pIndex);
  const povit = arr.splice(pIndex, 1)[0];
  const left = [],
    right = [];
  for (const item of arr) {
    if (item > povit) {
      right.push(item);
    } else {
      left.push(item);
    }
  }
  return [...quickSort(left), povit, ...quickSort(right)];
}
console.log(quickSort([8, 9, 10, 5, 1, 2, 1, 4, 5]));
console.log(quickSort([8, 9, 5, 1, 2, 1, 4, 5]));
console.log(quickSort([8, 9, 5, 1, 4, 5]));

/**
 * 最简明扼要的快速排序
 */
function quickSort2(arr) {
  if (arr.length < 2) return arr;
  const [povit, ...rest] = arr;
  return [
    ...quickSort2(rest.filter((item) => item < povit)),
    povit,
    ...quickSort2(rest.filter((item) => item >= povit)),
  ];
}
console.log(quickSort([8, 9, 10, 5, 1, 2, 1, 4, 5]));
console.log(quickSort([8, 9, 5, 1, 2, 1, 4, 5]));
console.log(quickSort([8, 9, 5, 1, 4, 5]));
