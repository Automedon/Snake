let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", e => {
  let { x, y } = lastInputDirection;

  switch (e.key) {
    case "ArrowUp" || "w":
      if (y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
