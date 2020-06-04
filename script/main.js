const lettersToChoice = document.querySelectorAll('div.letters div');
const drawWord = document.querySelector('div.draw__word');
const btn = document.querySelector('form button');
const colors = ['blue', 'red', 'white', 'orange'];
const animals = ['cat', 'hamster', 'pig', 'sheep'];
const fruits = ['apple', 'cherry', 'pear', 'banana'];
const drawnWordArray = [];


btn.addEventListener('click', function (e) {
    e.preventDefault();
    let selectedArray;
    const input = document.querySelector('input[type="radio"]:checked');

    // specify witch option(array) the player has chosen

    if (input.value == 'colors') {
        selectedArray = colors;
    } else if (input.value == 'animals') {
        selectedArray = animals;
    } else if (input.value == 'fruit') {
        selectedArray = fruits;
    }
    // console.log(selectedArray)

    //draw a words from the option(array)

    let index = Math.floor(Math.random() * selectedArray.length);
    let color = selectedArray[index];
    // console.log(color);



})