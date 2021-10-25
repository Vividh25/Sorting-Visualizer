const arrayContainer = document.getElementById('arrayContainer');

const swap = (elem1, elem2) => {
  return new Promise((resolve) => {
    const style1 = window.getComputedStyle(elem1);
    const style2 = window.getComputedStyle(elem2);

    const transform1 = style1.getPropertyValue('transform');
    const transform2 = style2.getPropertyValue('transform');

    console.log(transform1, transform2);

    elem1.style.transform = transform2;
    elem2.style.transform = transform1;

    window.requestAnimationFrame(function () {
      setTimeout(() => {
        arrayContainer.insertBefore(elem2, elem1);
        resolve();
      }, 50);
    });
  });
};

export const bubbleSort = async (n, delay = 100) => {
  // console.log('bubble sort');
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
        await swap(array[j], array[j + 1]);
        array = document.querySelectorAll('.array_element');
      }
      array[j].style.backgroundColor = 'darkgoldenrod';
      array[j + 1].style.backgroundColor = 'darkgoldenrod';
    }
    array[n - i - 1].style.backgroundColor = '#4E9F3D';
  }
  array[0].style.backgroundColor = '#4E9F3D';
};

const partition = async (array, low, high, delay = 100) => {
  let pivot = Number(array[high].childNodes[0].innerHTML);
  array[high].style.backgroundColor = '#150E56';
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    array[j].style.backgroundColor = '#CA3E47';
    const val = Number(array[j].childNodes[0].innerHTML);
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    if (val < pivot) {
      i++;
      // array[j].style.backgroundColor = 'darkgoldenrod';
      array[i].style.backgroundColor = '#CA3E47';
      await swap(array[i], array[j]);
      array[i].style.backgroundColor = 'darkgoldenrod';
      array[j].style.backgroundColor = 'darkgoldenrod';
      array = document.querySelectorAll('.array_element');
    } else {
      array[j].style.backgroundColor = 'darkgoldenrod';
    }
  }
  array[i + 1].style.backgroundColor = '#CA3E47';
  array[high].style.backgroundColor = '#CA3E47';
  await swap(array[i + 1], array[high]);
  // array[i].style.backgroundColor = 'darkgoldenrod';
  array[high].style.backgroundColor = 'darkgoldenrod';
  array[i + 1].style.backgroundColor = 'green';
  return i + 1;
};

const checkSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const val1 = Number(array[i].childNodes[0].innerHTML);
    const val2 = Number(array[i - 1].childNodes[0].innerHTML);
    if (val1 < val2) {
      return false;
    }
  }
  return true;
};

export const quickSort = async (low, high) => {
  let array = document.querySelectorAll('.array_element');
  if (checkSort(array)) {
    console.log('checksort');
    array.forEach((ele) => {
      ele.style.backgroundColor = 'green';
    });
  }
  if (low < high) {
    let pi = await partition(array, low, high);

    quickSort(low, pi - 1);
    quickSort(pi + 1, high);
  }
};
