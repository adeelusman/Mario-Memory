const cardsArray = [{
    'name': 'shell',
    'img': 'img/blueshell.png',
  },
  {
    'name': 'star',
    'img': 'img/star.png',
  },
  {
    'name': 'bobomb',
    'img': 'img/bobomb.png',
  },
  {
    'name': 'mario',
    'img': 'img/mario.png',
  },
  {
    'name': 'luigi',
    'img': 'img/luigi.png',
  },
  {
    'name': 'peach',
    'img': 'img/peach.png',
  },
  {
    'name': '1up',
    'img': 'img/1up.png',
  },
  {
    'name': 'mushroom',
    'img': 'img/mushroom.png',
  },
  {
    'name': 'thwomp',
    'img': 'img/thwomp.png',
  },
  {
    'name': 'bulletbill',
    'img': 'img/bulletbill.png',
  },
  {
    'name': 'coin',
    'img': 'img/coin.png',
  },
  {
    'name': 'goomba',
    'img': 'img/goomba.png',
  },
];

// Duplicates the cardsArray array and renames array to gameGrid
let gameGrid = cardsArray.concat(cardsArray);
// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

// Grab the div with an id of root
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Append the grid section to the game div
game.appendChild(grid);


gameGrid.forEach(item => {
  // Create a div and apply a card class
  const card = document.createElement('div');
  card.classList.add('card');

  // Set the name and image attribute of the div to the cardsArray name and img
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;

  // Append the div to the grid section
  grid.appendChild(card);
});
