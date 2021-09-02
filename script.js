let xTurn = true;
const cells = document.querySelectorAll('[data-cell]');
const resetBtn = document.querySelector('reset-btn')

const game = () => {
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

    const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    
}

const Player = () => {
    const playerMark = ** * radiobutton.value ** *
    let playerArray = [];
    return {
        mark
    }
}

function resetGame() {

}

resetBtn.addEventListener('click', () = {

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