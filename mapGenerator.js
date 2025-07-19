function generateMap(dimension) {
  return {
    render(ctx) {
      ctx.fillStyle = "#2a2a2a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };
}
