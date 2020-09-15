import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPos();

const EXPANSION_RATE = 2;

export function updateFood() {
  if (onSnake(food)) {
    food = getRandomFoodPos();
    expandSnake(EXPANSION_RATE);
  }
}

export function drawFood(gameBoard) {
  const { x, y } = food;
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = y;
  foodElement.style.gridColumnStart = x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPos() {
  let newFoodPos;
  while (newFoodPos == null || onSnake(newFoodPos)) {
    newFoodPos = randomGridPosition();
  }
  return newFoodPos;
}
