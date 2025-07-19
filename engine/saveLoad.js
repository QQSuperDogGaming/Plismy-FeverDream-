function saveGame(state) {
  localStorage.setItem("angelGameSave", JSON.stringify(state));
}

function loadGame() {
  const data = localStorage.getItem("angelGameSave");
  return data ? JSON.parse(data) : null;
}

function saveProgress() {
  gameState.player.x = player.x;
  gameState.player.y = player.y;
  gameState.player.angelType = player.angelType;
  gameState.currentDimension = currentDimension;
  saveGame(gameState);
  console.log("Progress saved!");
}

function loadProgress() {
  const saved = loadGame();
  if (saved) {
    gameState = saved;
    console.log("Progress loaded!");
  }
}
