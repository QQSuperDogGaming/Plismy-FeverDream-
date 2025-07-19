function generateNPCs() {
  return characters.map(c => ({
    ...c,
    render(ctx) {
      ctx.fillStyle = c.color;
      ctx.fillRect(c.x * 32, c.y * 32, 32, 32);
    }
  }));
}

