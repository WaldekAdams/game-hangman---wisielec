const lettersToChoice = document.querySelectorAll('div.letters div');
const drawWord = document.querySelector('div.draw__word');
const btn = document.querySelector('form button');
const colors = ['blue', 'red', 'white', 'orange'];
const animals = ['cat', 'hamster', 'pig', 'sheep'];
const fruits = ['apple', 'cherry', 'pear', 'banana'];



btn.addEventListener('click', function (e) {
    e.preventDefault();
    drawWord.innerHTML = '';
    let selectedArray;
    const input = document.querySelector('input[type="radio"]:checked');

    // specify witch option(array) the player has chosen

    if (input.value == 'colors') {
        selectedArray = colors;
    } else if (input.value == 'animals') {
        selectedArray = animals;
    } else if (input.value == 'fruits') {
        selectedArray = fruits;
    }
    // console.log(selectedArray)

    //draw a words from the option(chosen array)

    let index = Math.floor(Math.random() * selectedArray.length);
    let color = selectedArray[index];
    // console.log(color);

    // split chosen word to array and create divs icludes this letters in span

    let arrayWithWord = color.split('');
    arrayWithWord.forEach((letter) => {
        const letterDiv = document.createElement('div');
        drawWord.appendChild(letterDiv);
        const spanLetter = document.createElement('span');
        letterDiv.appendChild(spanLetter);
        spanLetter.textContent = letter;
    })


})

// 

let spans = drawWord.querySelectorAll('div span');
lettersToChoice.forEach(item => {
    item.addEventListener('click', function () {
        console.log('dziala')

    })
})