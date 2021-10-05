const cells = document.querySelectorAll('.cell')
let xTurn = true
let gameOn = true

const turn = () => {
    if (xTurn == true) {
        return `X`
    } else if (xTurn == false) {
        return 'O'
    }
}

const gameBoard = (() => {

    let gameArray = ['', '', '', '', '', '', '', '', '']
    const getArray = () => gameArray
    const ammendArray = (position, player) => {
        cells.forEach(cell => {
            if (cell.classList.contains('ready')) {
                gameArray.splice(position, 1, player)
            }
        })
    }

    const winnerCheck = () => {

    }


    return {
        getArray,
        ammendArray,
        winnerCheck
    }
})()

cells.forEach(cell => {
    if (cell.classList.contains('ready')) {
        cell.addEventListener('click', () => {
            let index = cell.dataset.record
            cell.innerText = `${turn()}`
            cell.classList.remove('ready')
            gameBoard.ammendArray(index, turn())
            if (gameBoard.winnerCheck()) {
                cells.forEach(cell => {
                    cell.style.backgroundColor = 'red'
                })
            }
            xTurn = !xTurn
            console.log(gameBoard.getArray())
        })
    }

})