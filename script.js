import {
  SNAKE_SPEED,
  updateSnake,
  drawSnake,
  getSnakeHead,
  snakeInterSection
} from "./snake.js";
import { drawFood, updateFood } from "./food.js";
import { outSideGrid } from "./grid.js";
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    if (confirm("You lose press yes to restart")) {
      location.reload()
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSincleLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSincleLastRender < 1 / SNAKE_SPEED) {
    return;
  }

  lastRenderTime = currentTime;
  update();
  draw();
}

window.requestAnimationFrame(main);

export function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

export function draw() {
  gameBoard.innerHTML = "";

  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeInterSection();
}
