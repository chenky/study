function findUniqueNumber (nums) {
  return nums.reduce((val, num) => val ^ num)
}
console.log(findUniqueNumber([1, 2, 3, 4, 5, 6, 7, 1000000, 1, 2, 3, 4, 5, 6, 7, 1000000, 8]))