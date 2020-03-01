let boardSize;
let popmax;
let mutationRate;
let population;

let bestSolution;
let allSolutions;
let allChromosomes;
let stats;

function setup() {
  bestSolution = createP("Best Solution:");
  bestSolution.class("best");

  allSolutionsHtml = createP("All Solutions:");
  allSolutionsHtml.class("all");

  allChromosomes = createP("All Chromosomes:");
  allChromosomes.position(600, 10);
  allChromosomes.class("all");

  stats = createP("Stats");
  stats.class("stats");

  boardSize = 8;
  popmax = 1000;
  mutationRate = 0.02;
  allSolutions = [];

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
    // noLoop();
    const best = population.getBest();

    if(!allSolutions.some((solution) => solution === best)) {
      allSolutions.push(best);
      console.log("Unique Solution Found!");
    } else {
      console.log("Duplicate Solution Found!");
    }

    population.setFinished(false);
    population = new Population(boardSize, mutationRate, popmax);
  }

  if (population.getGenerations() > 1000) {
    population = new Population(boardSize, mutationRate, popmax);
    console.log("Timeout: Population Restarted!");
  }

  displayInfo();
}

function displayInfo() {
  // Display current status of population
  let answer = population.getBest();
  let solutions = "";

  if(allSolutions.length !== 0){
    for (let i = 0; i < allSolutions.length; i++) {
      solutions += allSolutions[i] + "<br>";
    }
  } else {
    solutions = "None";
  }

  bestSolution.html("Best Solution:<br>" + answer);
  allSolutionsHtml.html("All Solutions:<br>" + solutions);

  let statstext = "total generations:     " + population.getGenerations() + "<br>";
  statstext += "average fitness:       " + nf(population.getAverageFitness()) + "<br>";
  statstext += "total population:      " + popmax + "<br>";
  statstext += "mutation rate:         " + floor(mutationRate * 100) + "%";

  stats.html(statstext);

  allChromosomes.html("Population:<br>" + population.allChromosomes())
}