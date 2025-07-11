const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (currentSum + value > n) {
      result.push(currentChunk);
      currentChunk = [value];
      currentSum = value;
    } else {
      currentChunk.push(value);
      currentSum += value;
    }
  }

  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));

