let keys = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

function handleInput() {
  if (keys["ArrowUp"] || keys["w"]) player.y--;
  if (keys["ArrowDown"] || keys["s"]) player.y++;
  if (keys["ArrowLeft"] || keys["a"]) player.x--;
  if (keys["ArrowRight"] || keys["d"]) player.x++;
}
