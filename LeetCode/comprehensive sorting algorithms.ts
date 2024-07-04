// 1. Bubble Sort
// function bubbleSort(arr) {
//   const len = arr.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]

// 2. Selection Sort
// function selectionSort(arr) {
//   const len = arr.length;
//   for (let i = 0; i < len - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < len; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }

// 3. Insertion Sort
// function insertionSort(arr) {
//   const len = arr.length;
//   for (let i = 1; i < len; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// 4. Quick Sort
// function quickSort(arr) {
//   if (arr.length <= 1) return arr;

//   const pivot = arr[Math.floor(arr.length / 2)];
//   const left: number[] = [];
//   const right: number[] = [];
//   const middle: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else if (arr[i] > pivot) {
//       right.push(arr[i]);
//     } else {
//       middle.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), ...middle, ...quickSort(right)];
// }
// console.log(quickSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]

// 5. Merge Sort
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result: number[] = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }
// console.log(mergeSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
// // 6. Heap Sort
// function heapSort(arr) {
//   let len = arr.length;

//   for (let i = Math.floor(len / 2) - 1; i >= 0; i--) heapify(arr, len, i);

//   for (let i = len - 1; i > 0; i--) {
//     [arr[0], arr[i]] = [arr[i], arr[0]];
//     heapify(arr, i, 0);
//   }

//   return arr;
// }

// function heapify(arr, n, i) {
//   let largest = i;
//   let left = 2 * i + 1;
//   let right = 2 * i + 2;

//   if (left < n && arr[left] > arr[largest]) largest = left;

//   if (right < n && arr[right] > arr[largest]) largest = right;

//   if (largest != i) {
//     [arr[i], arr[largest]] = [arr[largest], arr[i]];
//     heapify(arr, n, largest);
//   }
// }
// console.log(heapSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
// 7. Counting Sort
// function countingSort(arr, max) {
//   const count = new Array(max + 1).fill(0);
//   const output = new Array(arr.length);

//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i]]++;
//   }

//   for (let i = 1; i <= max; i++) {
//     count[i] += count[i - 1];
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     output[count[arr[i]] - 1] = arr[i];
//     // count[arr[i]]--;
//   }

//   return output;
// }
// console.log(countingSort([5, 4, 3, 2, 1], 5)); // [1, 2, 3, 4, 5]

// // 8. Radix Sort (基数排序)
// function radixSort(arr) {
//   const max = Math.max(...arr);

//   for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
//     countingSortByDigit(arr, exp);
//   }

//   return arr;
// }
// console.log(radixSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
// function countingSortByDigit(arr, exp) {
//   const output = new Array(arr.length).fill(0);
//   const count = new Array(10).fill(0);

//   for (let i = 0; i < arr.length; i++) {
//     count[Math.floor(arr[i] / exp) % 10]++;
//   }

//   for (let i = 1; i < 10; i++) {
//     count[i] += count[i - 1];
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
//     count[Math.floor(arr[i] / exp) % 10]--;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = output[i];
//   }
// }

// // 9. Bucket Sort (桶排序)
// function bucketSort(arr, bucketSize = 5) {
//   if (arr.length === 0) {
//     return arr;
//   }

//   const minValue = Math.min(...arr);
//   const maxValue = Math.max(...arr);

//   const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
//   const buckets = new Array(bucketCount);
//   for (let i = 0; i < buckets.length; i++) {
//     buckets[i] = [];
//   }

//   for (let i = 0; i < arr.length; i++) {
//     const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
//     buckets[bucketIndex].push(arr[i]);
//   }

//   const sortedArray = [];
//   for (let i = 0; i < buckets.length; i++) {
//     insertionSort(buckets[i]);
//     sortedArray.push(...buckets[i]);
//   }

//   return sortedArray;
// }

// // 10. Shell Sort (希尔排序)
function shellSort(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }

  return arr;
}
console.log(shellSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
