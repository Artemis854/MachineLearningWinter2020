let boardSize;
let popmax;
let mutationRate;
let population;

let bestSolution;
let allSolutions;
let stats;

function setup() {
  bestSolution = createP("Best solution:");
  bestSolution.class("best");

  allSolutions = createP("All solutions:");
  allSolutions.position(600, 10);
  allSolutions.class("all");

  stats = createP("Stats");
  stats.class("stats");

  boardSize = 8;
  popmax = 1000;
  mutationRate = 0.01;

  // Create a population with board size, mutation rate, and max population 
  population = new Population(boardSize, mutationRate, popmax);
}

function draw() {
  // Generate mating pool
  population.naturalSelection();
  // Create next generation
  population.generate();
  // Calculate fitness
  population.calcFitness();
  // Calculate historical max fitness
  population.evaluate();

  // If we found the target phrase, stop
  if (population.isFinished()) {
    noLoop();
  }

  displayInfo();
}

function displayInfo() {
  // Display current status of population
  let answer = population.getBest();

  bestSolution.html("Best solution:<br>" + answer);

  let statstext = "total generations:     " + population.getGenerations() + "<br>";
  statstext += "average fitness:       " + nf(population.getAverageFitness()) + "<br>";
  statstext += "total population:      " + popmax + "<br>";
  statstext += "mutation rate:         " + floor(mutationRate * 100) + "%";

  stats.html(statstext);

  allSolutions.html("All solutions:<br>" + population.allSolutions())
}