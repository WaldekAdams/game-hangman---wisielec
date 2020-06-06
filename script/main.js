const lettersToChoice = document.querySelectorAll('div.letters div');
const drawWord = document.querySelector('div.draw__word');
const btn = document.querySelector('form button');
const counter = document.querySelector('div.counter span');
const show = document.querySelector('div.show')
const showText = document.querySelector('div.show__text')
const colors = ['blue', 'red', 'white', 'orange'];
const animals = ['cat', 'hamster', 'pig', 'sheep'];
const fruits = ['apple', 'cherry', 'pear', 'banana'];

let arrayWithWord = [];
let checkArray = [];
let coompareArr = [];
let score = 7;
let flag = false;

counter.textContent = score;
btn.addEventListener('click', function (e) {
    e.preventDefault();
    flag = true;
    drawWord.innerHTML = '';
    coompareArr = [];
    checkArray = [];
    score = 7;
    counter.textContent = score;
    show.classList.remove('run');

    lettersToChoice.forEach(item => item.classList.remove('clicked'));

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
    console.log(flag)
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

console.log('huj')
lettersToChoice.forEach(item => {
    item.addEventListener('click', function () {
        // console.log('dziala')
        if (flag == true) {
            item.classList.add('clicked')
            let spans = drawWord.querySelectorAll('div span');
            chosenLetter = item.dataset.letter;

            spans.forEach(span => {
                if (span.innerHTML.includes(chosenLetter)) {
                    span.classList.add('active');

                }
            })
            if (arrayWithWord.includes(chosenLetter) && !coompareArr.includes(chosenLetter)) {
                console.log('zgadza sie');
                score++;
            }
            checkArray.push(chosenLetter);

            // checking if the array 'checkArray' conteins all letters from the password word

            coompareArr = arrayWithWord.filter(e => checkArray.includes(e));
            // console.log(coompareArr);
            score--;
            counter.textContent = score;

            if (coompareArr.join() === arrayWithWord.join() && arrayWithWord.join() != '') {
                showText.textContent = 'you win!!!';
                show.classList.add('run');

            } else if (score === 0) {
                showText.textContent = 'you losse!!!';
                show.classList.add('run');
                spans.forEach(span => span.classList.add('active'))
            }
            // console.log(score)
        }
    })

})