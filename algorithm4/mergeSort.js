/**
 * 归并排序
 */
function merge(leftArr, rightArr) {
  const res = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      res.push(leftArr.shift());
    } else {
      res.push(rightArr.shift());
    }
  }
  return res.concat(leftArr).concat(rightArr);
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([8, 9, 10, 5, 1, 2, 1, 4, 5]));
console.log(mergeSort([8, 9, 5, 1, 2, 1, 4, 5]));
console.log(mergeSort([8, 9, 5, 1, 4, 5]));
