const listName = document.querySelector('input');
console.log(listName);

const outputName = document.querySelector('#name-output');
console.log(outputName);

listName.addEventListener('input', event => {
    outputName.textContent = event.target.value;

    if (event.target.value === '') {
        outputName.textContent = 'Anonymous'
    }
});
