const boardArray = [];
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
      console.log(xTurn);
    }
  });
});
