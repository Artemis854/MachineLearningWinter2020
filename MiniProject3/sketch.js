const cols = 5;
const rows = 9;

var number = [];
const numbersData = new numberManager(6);

let image = 0;
let value;

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

async function setup() {
  createCanvas(150, 270);
  frameRate(2);

  value = createP("This number is a");
  value.class("number");

  // number = numbersData.getRandomNumber();
  trainingData = numbersData.generateData(30)
}

function draw() {
  background(51);

  displayNumber(trainingData[image].data)
  value.html("This number is a " + trainingData[image].value);

  image++;
  if(image >= trainingData.length) {
    image = 0
  }
}