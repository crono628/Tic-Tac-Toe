<<<<<<< HEAD
=======
const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector('.reset-btn')
let xTurn = true;
let gameOn = true;

const turn = () => {
  if (xTurn == true) {
    return "X";
  } else if (xTurn == false) {
    return "O";
  }
};

const gameBoard = (() => {
  let gameArray = ["", "", "", "", "", "", "", "", ""];
  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const getArray = () => gameArray;
  const ammendArray = (position, player) => {
    cells.forEach((cell) => {
      if (cell.classList.contains("ready")) {
        gameArray.splice(position, 1, player);
      }
    });
  };

  let winnerCheck = (player) => {
    return winningCombo.some(combination => {
      return combination.every(index => {
        return gameArray[index].includes(player);
      });
    });
  };

  let reset = () => {
    gameArray = ["", "", "", "", "", "", "", "", ""]
  }

  let gameReset = () => {
    reset()
  }

  return {
    getArray,
    ammendArray,
    winnerCheck,
    gameReset
  };
})();

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameOn === true) {
      if (cell.classList.contains("ready")) {
        let index = cell.dataset.record;
        cell.innerText = `${turn()}`;
        cell.classList.remove("ready");
        gameBoard.ammendArray(index, turn());
      }
    }
    if (gameBoard.winnerCheck(turn())) {
      cells.forEach((cell) => {
        cell.classList.add('spin')
      });
      gameOn = false;
    }
    xTurn = !xTurn;
  });
});

resetBtn.onclick = function () {
  gameOn = true
  xTurn = true
  gameBoard.gameReset()
  cells.forEach(cell => {
    cell.innerText = ''
    cell.classList.add('ready')
    cell.classList.remove('spin')
  })
}
>>>>>>> f8a3cfaabceb0cdd114cbe354ce07059aa164f8c
