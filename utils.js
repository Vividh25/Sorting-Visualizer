const arrayContainer = document.getElementById('arrayContainer');

export const swap = (elem1, elem2) => {
  return new Promise((resolve) => {
    const style1 = window.getComputedStyle(elem1);
    const style2 = window.getComputedStyle(elem2);

    const transform1 = style1.getPropertyValue('transform');
    const transform2 = style2.getPropertyValue('transform');

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

export const checkSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const val1 = Number(array[i].childNodes[0].innerHTML);
    const val2 = Number(array[i - 1].childNodes[0].innerHTML);
    if (val1 < val2) {
      return false;
    }
  }
  return true;
};

export const partition = async (array, low, high, delay = 100) => {
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

const shift = (elem1, elem2) => {
  return new Promise((resolve) => {
    // const style1 = window.getComputedStyle(elem1);
    const style2 = window.getComputedStyle(elem2);

    // const transform1 = style1.getPropertyValue('transform');
    const transform2 = style2.getPropertyValue('transform');

    elem1.style.transform = transform2;

    window.requestAnimationFrame(function () {
      setTimeout(() => {
        arrayContainer.insertBefore(elem2, elem1);
        resolve();
      }, 50);
    });
  });
};

export const merge = async (array, l, m, r, delay = 100) => {
  let k = m + 1;
  let val1 = Number(array[l].childNodes[0].innerHTML);
  let val2 = Number(array[k].childNodes[0].innerHTML);
  let val3 = Number(array[m].childNodes[0].innerHTML);

  array[m].style.backgroundColor = '#CA3E47';
  array[k].style.backgroundColor = '#CA3E47';

  // If the direct merge is already sorted

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );

  if (val3 <= val2) {
    console.log(val3, val2);
    array[m].style.backgroundColor = 'darkgoldenrod';
    array[k].style.backgroundColor = 'darkgoldenrod';
    return;
  }

  // Two pointers to maintain start
  // of both arrays to merge
  while (l <= m && k <= r) {
    // If element 1 is in right place
    array[l].style.backgroundColor = '#CA3E47';
    array[k].style.backgroundColor = '#CA3E47';

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    if (val1 <= val2) {
      l++;
    } else {
      let value = val2;
      let index = k;

      // Shift all the elements between element 1
      // element 2, right by 1.
      while (index != l) {
        array[index].style.backgroundColor = '#CA3E47';

        // array[index] = array[index - 1];
        await shift(array[index], array[index - 1]);
        array = document.querySelectorAll('.array_element');
        index--;
      }
      val1 = value;

      // Update all the pointers
      l++;
      m++;
      k++;
    }
  }
};
