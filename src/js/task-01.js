`use strict`
const list = document.querySelectorAll('li.item');
console.log(`Number of categories: ${list.length}`);

const listName = document.querySelectorAll('#categories > li');
//console.log(listName);

listName.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
})