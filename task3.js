// collatz sequence
const collatzSequence = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number == "number") {
        let seq = [number];
        while (number != 1) {
          if (number % 2 == 0) {
            number /= 2;
          } else {
            number = number * 3 + 1;
          }
          seq.push(number);
        }
        resolve(seq);
      } else {
        reject(new Error("Input parameter salah!"));
      }
    }, 2000);
  });
};

// // then catch
// collatzSequence(7)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async/await
async function collatz(number) {
  try {
    const res = await collatzSequence(number);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

collatz(7);

//----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// rock paper scissor
const rockPaperScissor = (move) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const moves = ["rock", "paper", "scissor"];
      if (moves.includes(move)) {
        const randomIndex = Math.floor(Math.random() * moves.length);
        const enemyMove = moves[randomIndex];
        let res = "";
        if (moves.indexOf(move) == randomIndex) {
          //draw condition
          res = "Draw";
        } else if (
          moves.indexOf(move) - randomIndex == 1 ||
          moves.indexOf(move) - randomIndex == -2
        ) {
          //win condition
          res = "Win";
        } else {
          res = "Lose";
        }
        const gameData = `Your move = ${move}
  Enemy's move = ${enemyMove}
  You ${res}`;
        resolve(gameData);
      } else {
        reject(new Error("Invalid move"));
      }
    }, 3000);
  });
};

// then catch
rockPaperScissor("scissor")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// // async/await
// async function rps(move) {
//   try {
//     const res = await rockPaperScissor(move);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// }

// rps("paper");
