const generateButton = document.querySelector("#generate");
const container = document.querySelector("#container");

generateSquares(16);

function generateSquares(squaresPerSide) {
  const squares = squaresPerSide * squaresPerSide;

  container.replaceChildren();
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.style.flexBasis = `${100 / squaresPerSide}%`;
    square.addEventListener("mouseenter", (e) => {
      square.style.backgroundColor = generateRandomColor();
    });

    container.appendChild(square);
  }
}

generateButton.addEventListener("click", () => {
  let squaresPerSide = +prompt("Number of squares per side (1-100):", 1);
  squaresPerSide = clamp(squaresPerSide, 1, 100);
  generateSquares(squaresPerSide);
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function generateRandomColor() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

function random(max) {
  return Math.floor(Math.random() * max);
}
