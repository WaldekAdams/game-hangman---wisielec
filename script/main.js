const lettersToChoice = document.querySelectorAll('div.letters div');
const drawWord = document.querySelector('div.draw__word');
const btn = document.querySelector('form button');
const colors = ['blue', 'red', 'white', 'orange'];
const animals = ['cat', 'hamster', 'pig', 'sheep'];
const fruits = ['apple', 'cherry', 'pear', 'banana'];
const counter = document.querySelector('div.counter span')
let arrayWithWord = [];
let score = 7;

counter.textContent = score;
btn.addEventListener('click', function (e) {
    e.preventDefault();
    drawWord.innerHTML = '';
    coompareArr = [];
    score = 7;
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

    arrayWithWord = color.split('');
    arrayWithWord.forEach((letter) => {
        const letterDiv = document.createElement('div');
        drawWord.appendChild(letterDiv);
        const spanLetter = document.createElement('span');
        letterDiv.appendChild(spanLetter);
        spanLetter.textContent = letter;
    })


})

// matching letters - if is true add class to letter in span/ add all chosen letters to 'checkArray'

checkArray = [];
lettersToChoice.forEach(item => {
    item.addEventListener('click', function () {
        // console.log('dziala')
        let spans = drawWord.querySelectorAll('div span');
        chosenLetter = item.dataset.letter;

        spans.forEach(span => {
            if (span.innerHTML.includes(chosenLetter) && !checkArray.includes(chosenLetter)) {
                span.classList.add('active');
                score++;
            }
        })
        checkArray.push(chosenLetter);
        // console.log(checkArray);

        // checking if the array 'checkArray' conteins all letters from the password word

        let coompareArr = arrayWithWord.filter(e => checkArray.includes(e));
        console.log(coompareArr);
        score--;
        counter.textContent = score;

        if (coompareArr.join() === arrayWithWord.join() && arrayWithWord.join() != '') {
            console.log('wygrana')

        } else if (score === 0) {
            console.log('przegrana')
        }
        console.log(score)


    })

})