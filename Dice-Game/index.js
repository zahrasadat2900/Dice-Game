// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {

  // Select button, input, and image elements
  const startGameButton = document.getElementById("start-game");
  const rollDiceButton = document.getElementById("roll-dice");
  const player1Dice = document.querySelector(".img1");
  const player2Dice = document.querySelector(".img2");
  const gameTitle = document.getElementById("game-title");
  const player1Label = document.getElementById("player1-label");
  const player2Label = document.getElementById("player2-label");
  const player1Input = document.getElementById("player1-name");
  const player2Input = document.getElementById("player2-name");
  const player1WinsText = document.getElementById("player1-wins");
  const player2WinsText = document.getElementById("player2-wins");

  // Store player names and win counts
  let player1Name = "Player 1";
  let player2Name = "Player 2";
  let player1Wins = 0;
  let player2Wins = 0;

  // Define dice images array
  const diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
  ];

  // Start Game button event listener
  startGameButton.addEventListener("click", function () {
    // Get the player names from input fields
    player1Name = player1Input.value || "Player 1";  // Fallback to default name if input is empty
    player2Name = player2Input.value || "Player 2";

    // Update player labels
    player1Label.textContent = player1Name;
    player2Label.textContent = player2Name;

    // Reset the win counts
    player1Wins = 0;
    player2Wins = 0;
    updateWinTracker();

    // Update button and title
    gameTitle.textContent = "Dice Game";
    startGameButton.textContent = "Reset";
    rollDiceButton.textContent = "Roll Dice";
    rollDiceButton.disabled = false;
  });

  // Roll Dice button event listener
  rollDiceButton.addEventListener("click", function () {
    const player1Roll = Math.floor(Math.random() * 6);
    const player2Roll = Math.floor(Math.random() * 6);

    // Update images based on dice roll
    player1Dice.src = diceImages[player1Roll];
    player2Dice.src = diceImages[player2Roll];

    // Determine the winner based on names and update win counts
    if (player1Roll > player2Roll) {
      gameTitle.textContent = `${player1Name} Wins!`;
      player1Wins++;
    } else if (player1Roll < player2Roll) {
      gameTitle.textContent = `${player2Name} Wins!`;
      player2Wins++;
    } else {
      gameTitle.textContent = "It's a Draw!";
    }

    // Update win tracker and button text
    updateWinTracker();
    rollDiceButton.textContent = "Re-roll Dice";
  });

  // Function to update the win tracker text
  function updateWinTracker() {
    player1WinsText.textContent = `Wins: ${player1Wins}`;
    player2WinsText.textContent = `Wins: ${player2Wins}`;
  }

  // Function to reset the dice to default state
  function resetDice() {
    player1Dice.src = "images/dice6.png";
    player2Dice.src = "images/dice6.png";
  }

});


