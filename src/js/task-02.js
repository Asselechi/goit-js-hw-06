const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newList = document.createElement('li');
console.log(newList);

newList.textContent = ingredients;
newList.classList.add("item");

const listIngredients = document.querySelector('ul#ingredients');
console.log(listIngredients);
listIngredients.append(newList);

