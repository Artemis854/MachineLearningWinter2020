const cols = 5;
const rows = 9;

var number = [];
const numbersData = new numberManager(6);

function displayNumber(number) {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      var x = i * 30;
      var y = j * 30;
      fill(number[i][j]);
      stroke(0);
      rect(x, y, 30, 30);
    }
  }
}

function setup() {
  createCanvas(150, 270);

  number = numbersData.getRandomNumber();
}

function draw() {
  background(51);

  displayNumber(number)
}