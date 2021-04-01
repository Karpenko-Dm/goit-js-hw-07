 const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
    
const list = document.createElement('li');
list.textContent = ingredients;
console.log(list);

const newlist = list.forEach(el => console.log(el));


