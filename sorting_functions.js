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
      }, 200);
    });
  });
};

export const bubbleSort = async (arr, n, delay = 100) => {
  console.log('bubble sort');
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
