const board = document.getElementById('board');
let shuffledNumbers;
let cardsChosen = [];
let won = [];

const icons = [
    { name: 'babyYoda', url: 'img/babyYoda.png' },
    { name: 'batman', url: 'img/batman.png' },
    { name: 'brutus', url: 'img/brutus.png' },
    { name: 'captainAmerica', url: 'img/captainAmerica.png' },
    { name: 'deadpool', url: 'img/deadpool.png' },
    { name: 'goku', url: 'img/goku.png' },
    { name: 'greenLantern', url: 'img/greenLantern.png' },
    { name: 'harryPotter', url: 'img/harryPotter.png' },
    { name: 'homerSimpson', url: 'img/homerSimpson.png' },
    { name: 'hulk', url: 'img/hulk.png' },
    { name: 'ironMan', url: 'img/ironMan.png' },
    { name: 'joker', url: 'img/joker.png' },
    { name: 'naruto', url: 'img/naruto.png' },
    { name: 'ninjaTurtle', url: 'img/ninjaTurtle.png' },
    { name: 'pennyWise', url: 'img/pennyWise.png' },
    { name: 'popeye', url: 'img/popeye.png' },
    { name: 'r2d2', url: 'img/r2d2.png' },
    { name: 'spiderMan', url: 'img/spiderMan.png' },
    { name: 'starTrek', url: 'img/starTrek.png' },
    { name: 'stormTrooper', url: 'img/stormTrooper.png' },
    { name: 'superMan', url: 'img/superMan.png' },
    { name: 'thor', url: 'img/thor.png' },
    { name: 'venom', url: 'img/venom.png' },
    { name: 'walterWhite', url: 'img/walterWhite.png' },
    { name: 'wonderWoman', url: 'img/wonderWoman.png' }
];

shuffleNumbers();

shuffledNumbers.forEach((el) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    board.append(cardContainer);

    cardContainer.addEventListener('click', eventOfCards = () => {
        cardContainer.classList.add('flip');
        cardContainer.style.pointerEvents = 'none';
        cardsChosen.push(cardContainer);

        if (cardsChosen.length == 2) {
            setTimeout(checkMatch, 1000);
        } else if (cardsChosen.length > 2) {
            cardContainer.classList.remove('flip');
            cardContainer.style.pointerEvents = 'auto';
        }
    })

    const cardFront = document.createElement('div');
    cardFront.classList.add('front');
    cardContainer.append(cardFront);

    const cardBack = document.createElement('div');
    cardBack.classList.add('back');
    cardContainer.append(cardBack);

    const img = document.createElement('img');
    img.classList.add('img');
    cardBack.append(img);
    img.src = icons[el]?.url;
})

function shuffleNumbers() {
    let numbers = [], pos;

    for (let i = 0; i < 8; i++) {
        var randomNumber = Math.round(Math.random() * (icons.length - 1));

        while (numbers.includes(randomNumber)) {
            randomNumber = Math.round(Math.random() * (icons.length - 1));
        }
        numbers.push(randomNumber);
    }

    let copyOfNumbers = numbers.map(e => e);
    shuffledNumbers = numbers.concat(copyOfNumbers);

    for (let i = shuffledNumbers.length - 1; i > 0; i--) {
        newPos = Math.round(Math.random() * (i + 1));
        pos = shuffledNumbers[i];
        shuffledNumbers[i] = shuffledNumbers[newPos];
        shuffledNumbers[newPos] = pos;
    }

    var index = shuffledNumbers.indexOf(undefined);
    if (index > -1) shuffledNumbers.splice(index, 1);
};

function checkMatch() {
    if (cardsChosen[0].lastElementChild.firstChild.getAttribute('src') === cardsChosen[1].lastElementChild.firstChild.getAttribute('src')) {
        cardsChosen[0].classList.add('flip');
        cardsChosen[1].classList.add('flip');

        won.push(cardsChosen[0]);
    } else {
        cardsChosen[0].classList.remove('flip');
        cardsChosen[0].style.pointerEvents = 'auto';
        cardsChosen[1].classList.remove('flip');
        cardsChosen[1].style.pointerEvents = 'auto';
    }

    cardsChosen = [];
    if (won.length === 8) alert('Congratulations! You won!');
}