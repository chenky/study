function binarySearch(nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const m = l + (r - l) / 2;
    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    }
  }
  return -1;
}

function leftBound(nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const m = l + (r - l) / 2;
    if (nums[m] === target) {
      // 需要找左边界
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    }
  }
  if (l >= nums.length || nums[l] !== target) {
    return -1;
  }
  return l;
}

function rightBound(nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const m = l + (r - l) / 2;
    if (nums[m] === target) {
      l = m + 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    }
  }
  if (r < 0 || nums[r] !== target) {
    return -1;
  }
  return r;
}
