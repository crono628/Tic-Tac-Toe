const resetBtn = document.querySelector('.reset-btn')
const playerOneBtn = document.querySelector('#player-one-btn')
const playerTwoBtn = document.querySelector('#player-two-btn')
const playerInput = document.querySelectorAll('[data-player]')
const cells = document.querySelectorAll('[data-cell]');
const gameBoardDiv = document.querySelectorAll('.game-board')

let xTurn = true;

const turn = () => {
    if (xTurn === true) {
        return `X`
    } else if (xTurn === false) {
        return 'O'
    }
}

cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
        let newArr = [...cells]
        let index = newArr.indexOf(e.target)
        if (cell.classList.contains('ready')) {
            e.target.textContent = `${turn()}`;
            e.target.classList.remove('hover', 'ready')
            xTurn = !xTurn
            console.log(index)
        }
    })
    cell.addEventListener('mouseover', (e) => {
        if (cell.classList.contains('ready')) {
            e.target.textContent = `${turn()}`;
            e.target.classList.add('hover')
        }
    })
    cell.addEventListener('mouseleave', (e) => {
        if (cell.classList.contains('ready')) {
            e.target.textContent = '';
            e.target.classList.remove('hover')
        }
    })

})

const gameModule = (() => {
    const playerOne = {
        name: 'Player 1',
        mark: 'X'
    }
    const playerTwo = {
        name: 'Player 2',
        mark: 'O'
    }
    const gameMarks = ['', '', '', '', '', '', '', '', '']


    const getGameMarks = () => {
        return {
            gameMarks
        }
    }
    const gameBoard = document.querySelector('.game-board')

    const checkWinner = () => {
        winningCombo = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }

    const reset = () => {
        gameMarks = ['', '', '', '', '', '', '', '', ''];
    }
    return {
        getGameMarks,
        checkWinner,
        reset,
    }
})()