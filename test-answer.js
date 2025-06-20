const sortDescending = (arr) => {
  const result = [...arr];

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] < result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
};

console.log(sortDescending([1, 2, 4, 3, 5, 3, 2, 1]));

const maxSubarraySum = (arr, size) => {
  if (size > arr.length) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = size; i < arr.length; i++) {
    tempSum = tempSum - arr[i - size] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));

const nestedEvenSum = (obj) => {
  let sum = 0;

  const traverse = (currentObj) => {
    for (let key in currentObj) {
      if (currentObj[key] !== null && typeof currentObj[key] === 'object') {
        traverse(currentObj[key]);
      } else if (
        typeof currentObj[key] === 'number' &&
        currentObj[key] % 2 === 0
      ) {
        sum += currentObj[key];
      }
    }
  };

  traverse(obj);

  return sum;
};

console.log(
  nestedEvenSum({
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: 'yup',
      },
    },
  })
);

console.log(
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: 'car' },
  })
);
