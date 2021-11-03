import * as utils from './utils.js';

export const bubbleSort = async (n, delay = 100) => {
  let i, j;
  let array = document.querySelectorAll('.array_element');
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      array[j].style.backgroundColor = '#CA3E47';
      array[j + 1].style.backgroundColor = '#CA3E47';

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      const val1 = Number(array[j].childNodes[0].innerHTML);
      const val2 = Number(array[j + 1].childNodes[0].innerHTML);
      if (val1 > val2) {
        await utils.swap(array[j], array[j + 1]);
        array = document.querySelectorAll('.array_element');
      }
      array[j].style.backgroundColor = 'darkgoldenrod';
      array[j + 1].style.backgroundColor = 'darkgoldenrod';
    }
    array[n - i - 1].style.backgroundColor = '#4E9F3D';
  }
  array[0].style.backgroundColor = '#4E9F3D';
};

export const quickSort = async (low, high) => {
  let array = document.querySelectorAll('.array_element');
  if (utils.checkSort(array)) {
    array.forEach((ele) => {
      ele.style.backgroundColor = '#4E9F3D';
    });
  }
  if (low < high) {
    let pi = await utils.partition(array, low, high);

    quickSort(low, pi - 1);
    quickSort(pi + 1, high);
  }
};

export const mergeSort = async (l, r) => {
  if (l < r) {
    // Same as (l + r) / 2, but avoids overflow
    // for large l and r
    let arr = document.querySelectorAll('.array_element');
    let m = l + Math.floor((r - l) / 2);

    // Sort first and second halves
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    await utils.merge(arr, l, m, r);
  }
};
