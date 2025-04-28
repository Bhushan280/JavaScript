// Find the peak of the array. Array has a specific property, 1st it is in increasing order then decreasing order.
/*
[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 95, 85, 75, 65]

*/
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

const n = arr.length;

function findPeak(arr, n) {
  let lo = 0;
  let hi = n - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (
      (mid === 0 || arr[mid - 1] <= arr[mid]) &&
      (mid === n - 1 || arr[mid + 1] <= arr[mid])
    ) {
      return arr[mid];
    } else if (mid < n - 1 && arr[mid] < arr[mid + 1]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}

console.log(findPeak(arr,n));