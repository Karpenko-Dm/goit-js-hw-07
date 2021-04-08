 const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(elemItem => {
    const listItems = document.createElement('li');
    listItems.classList.add('item-el');
    listItems.textContent = elemItem;
    
    return listItems;
});

console.log(elements);
listEl.append(...elements);






//const list = document.querySelector('body');
//const listEl = document.createElement('ul');
  //    console.log(listEl);

    //  const elements = ingredients.map((elemItem) => {
     //   const listItems = document.createElement('li');
      //  listItems.classList.add('item-el');
      //    listItems.textContent = elemItem;
       //   console.log(listItems);
      //  list.append(listItems);
     // });



    
   







