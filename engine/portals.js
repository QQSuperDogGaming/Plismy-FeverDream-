function generatePortals() {
  return portalsConfig.map(p => ({
    ...p,
    render(ctx) {
      ctx.strokeStyle = "magenta";
      ctx.lineWidth = 2;
      ctx.strokeRect(p.x * 32, p.y * 32, 32, 32);
    }
  }));
}
