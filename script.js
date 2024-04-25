const merge = (larr, rarr) => {
  const ans = [];
  let left = 0;
  let right = 0;

  while (left < larr.length && right < rarr.length) {
    if (larr[left] < rarr[right]) {
      ans.push(larr[left]);
      left++;
    } else {
      ans.push(rarr[right]);
      right++;
    }
  }

  return ans.concat(larr.slice(left)).concat(rarr.slice(right));
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  return merge(
    mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
    mergeSort(arr.slice(Math.floor(arr.length / 2)))
  );
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110, 1000]));
