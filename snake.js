import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 4;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function updateSnake() {
  addSegment();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function drawSnake(gameBoard) {
  snakeBody.forEach(({ x, y }) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = y;
    snakeElement.style.gridColumnStart = x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeInterSection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

export function onSnake(pos, { ignoreHead = false } = {}) {
  return snakeBody.some(({ x, y }, index) => {
    if (ignoreHead && index === 0) return false;
    return pos.x === x && pos.y === y;
  });
}

function addSegment() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}
