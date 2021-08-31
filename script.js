let xTurn = true;
let oTurn = false;
const cells = document.querySelectorAll('[data-cell]');
const xClass = document.querySelector('.x');
const oClass = document.querySelector('.o');
const resetBtn = document.querySelector('reset-btn')

const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const winnerCheck = (mark) => {
  winningCombo.some(combo => {
    combo.every(index => {
      cells[index].classList.contains(mark)
    })
  })
}

const Player = (name, mark) => {
  let dataPlayer = document.querySelectorAll('[data-player]')
  let getName = (name) => dataPlayer.value
  return {
    name,
    mark
  }
}

cells.forEach((cell) => {
  cell.addEventListener('click', (e) => {
    if (cell.classList.contains('ready')) {
      e.target.textContent = 'X'
      e.target.classList.remove('hover', 'ready')
    }
  })
  cell.addEventListener('mouseover', (e) => {
    if (cell.classList.contains('ready')) {
      e.target.textContent = 'X'
      e.target.classList.add('hover')
    }
  })
  cell.addEventListener('mouseleave', (e) => {
    if (cell.classList.contains('ready')) {
      e.target.textContent = ''
      e.target.classList.remove('hover')
    }
  })
})

const playerOne = Player('mikey', 'x')
// console.log(playerOne.mark);