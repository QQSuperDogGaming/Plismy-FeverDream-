let keys = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

function handleInput() {
  if (keys["ArrowUp"] || keys["w"]) player.y--;
  if (keys["ArrowDown"] || keys["s"]) player.y++;
  if (keys["ArrowLeft"] || keys["a"]) player.x--;
  if (keys["ArrowRight"] || keys["d"]) player.x++;
}

function createPlayer() {
  return {
    x: gameState.player.x,
    y: gameState.player.y,
    angelType: gameState.player.angelType,
    update() {},
    render(ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(this.x * 32, this.y * 32, 32, 32);
    }
  };
}
