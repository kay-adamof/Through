function seek(heroX, heroY, thisX, thisY, distance, thisV) {
  const dx = (heroX - thisX) / distance;
  const dy = (heroY - thisY) / distance;
  const vx = dx * thisV;
  const vy = dy * thisV;

  thisX += vx;
  thisY += vy;

  return { newX: thisX, newY: thisY };
}

setEnemies((prevEnemies) => {
  const updatedEnemies = prevEnemies.map((enemy) => {
    const dx = x - enemy.x;
    const dy = y - enemy.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 80) {
      const position = seek(x, y, enemy.x, enemy.y, distance, 0.01);
      enemy.x = position.newX;
      enemy.y = position.newY;
    }

    return enemy;
  });
  return updatedEnemies;
});