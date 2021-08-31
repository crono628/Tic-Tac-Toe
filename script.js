let turn
const cells = document.querySelectorAll('[data-cell]')

const Player = (name, mark) => {
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
    winnerCheck = (mark) => {
        winningCombo.some(combo => {
            combo.every(index => {
                cells[index].classList.contains(mark)
            })
        })
    }
    return {
        name,
        mark,
        winner
    }
}

const playerOne = Player('mikey', 'x')
playerOne.name
console.log(playerOne.name);