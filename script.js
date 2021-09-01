let xTurn = true;
const cells = document.querySelectorAll('[data-cell]');
const resetBtn = document.querySelector('reset-btn')
const playerOneBtn = document.querySelector('#player-one-btn')
const playerTwoBtn = document.querySelector('#player-two-btn')

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

const Player = (name, mark) => {
    const dataPlayer = document.querySelectorAll('[data-player]');
    const dataPlayer.value = name;
    let playerArray = [];
    return {
        name,
        mark
    }
}

function resetGame (){

}

resetBtn.addEventListener('click', () ={
  
})

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
console.log(playerOne.mark);