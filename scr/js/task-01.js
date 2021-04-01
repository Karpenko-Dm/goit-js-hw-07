// 1. Посчитать и вывести  в консоль категории в ul#categories
//тоесть li.item , так чтоб получилось в списке 3 категории.
// 2. Для каждого елемента li.item  в списке ul#categories 
//найдите и выведите в консоль екст заголовка  h2. и 
// количество елементов в категории всех вложеных li
  

//получаю количество категорий
const getCategoriesItem = document.querySelector('ul').children.length;
console.log('В списке', getCategoriesItem, 'категории');

//делаю ссылку на список категорий
const catEl = document.querySelector('ul');
console.log(catEl);

// первый елемент списка
const firstCatEl = catEl.firstElementChild;
console.log(firstCatEl);
// последний елемент
const lastCatEl = catEl.lastElementChild;
console.log(lastCatEl);
// второйо елемент
const secondCatEl = lastCatEl.previousElementSibling;
console.log(secondCatEl);
// получаю заголовок первого елемента 
const firstTitleEl = firstCatEl.querySelector('h2') ;
console.log('Категория:', firstTitleEl.textContent);
// получаю количество елементов в  первой категории
const QuantityElFirstItem = firstCatEl.querySelector('ul').children.length;
console.log('Количество елементов:', QuantityElFirstItem);
//получаю заголовок поледнего елемента
const lastTitleEl = lastCatEl.querySelector('h2') ;
console.log('Категория:', lastTitleEl.textContent);
//получаю количество елементов в последней категории
const QuantityElLastItem = lastCatEl.querySelector('ul').children.length;
console.log('Количество елементов:', QuantityElLastItem);
// получаю заголовок второго елемента
const secondTitleEl = secondCatEl.querySelector('h2') ;
console.log('Категория:', secondTitleEl.textContent);
//получаю количество елементов в  второй категории
const QuantityElSecondItem = secondCatEl.querySelector('ul').children.length;
console.log('Количество елементов:', QuantityElSecondItem);







//const getCategoriesTitle = document.querySelector('h2').textContent;
//console.log('Категории:', getCategoriesTitle);

//const getQantityElement = document.querySelector('li ul').children.length;
//console.log('Количество елементов:', getQantityElement);

//const getCategories = categories.querySelector('li.item h2').childNodes[0];
//console.log(getCategories);



