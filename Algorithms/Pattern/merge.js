// Merge Sort

// Merge Function
function merge(arrOne, arrTwo) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] < arrTwo[j]) {
      res.push(arrOne[i]);
      i++;
    } else {
      res.push(arrTwo[j]);
      j++;
    }
  }

  while (i < arrOne.length) {
    res.push(arrOne[i]);
    i++;
  }

  while (j < arrTwo.length) {
    res.push(arrTwo[j]);
    j++;
  }

  return res;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
