import * as Algos from './sorting_functions.js';

let arraySize;
const min = 10,
  max = 35;
let selectedAlgo;
const arrayContainer = document.querySelector('#arrayContainer');
const sizeSelect = document.querySelector('#selectSize');
const heading = document.querySelector('#heading');
const algoSelector = document.querySelector('#selectAlgo');
const sortBtn = document.querySelector('#sortBtn');

let arr = new Array(arraySize);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createArray = (e) => {
  arr = [];
  heading.style.display = 'none';
  arrayContainer.style.display = 'flex';
  arrayContainer.innerHTML = '';

  arraySize = e.target.value;
  for (let i = 0; i < arraySize; i++) {
    let ele = getRandomInt(min, max);
    arr.push(ele);
  }
  let margin = 30,
    idx = 0;
  arr.map((ele) => {
    const element = document.createElement('div');
    element.classList.add('array_element');
    element.id = String(idx);
    idx++;
    element.style.height = String(ele * 4) + 'px';
    element.style.transform = `translate(${50}%) translate(${-50}%)`;

    const value = document.createElement('label');
    value.style.color = 'white';
    value.innerHTML = ele;

    element.appendChild(value);
    arrayContainer.appendChild(element);
  });
};

const selectSortingAlgo = (e) => {
  selectedAlgo = e.target.value;
};

const sort = () => {
  switch (selectedAlgo) {
    case 'Bubble Sort':
      Algos.bubbleSort(arraySize);
      break;
    case 'Quick Sort':
      Algos.quickSort(0, arraySize - 1);
      break;
    case 'Merge Sort':
      Algos.mergeSort(0, arraySize - 1);
      break;
  }
};

sizeSelect.addEventListener('input', (e) => {
  createArray(e);
});

algoSelector.addEventListener('change', (e) => {
  selectSortingAlgo(e);
});
sortBtn.addEventListener('click', sort);
