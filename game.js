const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentDimension = 'default';
let player, map, npcs, portals;
let inPortalCooldown = false;

let gameState = {
  player: { x: 5, y: 5, angelType: 'default' },
  tasksCompleted: [],
  currentDimension: 'default'
};

function init() {
  loadProgress();
  map = generateMap(currentDimension);
  player = createPlayer();
  npcs = generateNPCs();
  portals = generatePortals();
  requestAnimationFrame(gameLoop);
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

function update() {
  handleInput();
  player.update();
  checkPortalCollision();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  map.render(ctx);
  portals.forEach(p => p.render(ctx));
  npcs.forEach(npc => npc.render(ctx));
  player.render(ctx);
  renderDialogue(ctx);

  // Show current dimension (for testing)
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("Realm: " + currentDimension, 10, 20);
}

function checkPortalCollision() {
  if (inPortalCooldown) return;

  for (let portal of portals) {
    if (player.x === portal.x && player.y === portal.y) {
      currentDimension = portal.destination;
      map = generateMap(currentDimension);
      portals = generatePortals();
      npcs = generateNPCs();
      player.x = 5;
      player.y = 5;
      inPortalCooldown = true;
      setTimeout(() => inPortalCooldown = false, 1000);
      console.log("Teleported to:", currentDimension);
      break;
    }
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "s") saveProgress();
});
