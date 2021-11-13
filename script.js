const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let xTurn = true;
const cells = document.querySelectorAll('[data-square]');
const button = document.querySelector('button');
cells.forEach((cell) => {
  cell.addEventListener('click', (e) => {
    if (cell.classList.contains('ready')) {
      if (xTurn) {
        cell.innerText = 'X';
      } else {
        cell.innerText = 'O';
      }
      xTurn = !xTurn;
      e.target.classList.remove('ready');
      e.target.classList.add(`${cell.innerText}`);
      if (checkDraw()) {
        button.style.display = 'block';
      } else {
        if (checkWin(`${cell.innerText}`)) {
          console.log('winner');
          cells.forEach((cell) => {
            cell.classList.remove('ready');
            button.style.display = 'block';
          });
        }
      }
    }
  });
});

function checkWin(player) {
  return winningCombos.some((combo) => {
    return combo.every((index) => {
      return cells[index].classList.contains(player);
    });
  });
}

function checkDraw() {
  return Array.from(cells).every((cell) => !cell.classList.contains('ready'));
}

function newGame() {
  cells.forEach((cell) => {
    cell.className = 'cell ready';
    cell.innerText = '';
    xTurn = true;
    button.style.display = 'none';
  });
}

button.onclick = newGame;
