/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Constructor (makes a random Chromosome)
class Chromosome {
  constructor(num) {
    // The genetic sequence
    this.genes = [];
    this.fitness = 0;
    for (let i = 0; i < num; i++) {
      this.genes[i] = i + 1; // Pick from range of chars
    }
    shuffle(this.genes);
  }

  // Converts character array to a String
  getSolution() {
    return "[" + this.genes.toString() + "]";
  }

  // Fitness function (returns the result of 1/(1+x), where x is the num of collisions)
  // Max fitness is 1
  calcFitness() {
    let collisions = 0;

    for (let i = 0; i < this.genes.length; i++) {
      for (let j = 0; j < this.genes.length; j++) {
        if (i != j) {
          const Q1 = this.genes[i];
          const Q2 = this.genes[j];
          // Check for row collisions (Same row value in array)
          if (Q1 === Q2) {
            collisions++;
          }

          // Check for diagonal collisions with other queens using abs 
          // https://stackoverflow.com/questions/3209165/need-help-with-n-queens-program-checking-diagonals
          const deltaRow = Math.abs(i - j);
          const deltaCol = Math.abs(Q1 - Q2);

          if (deltaCol === deltaRow) {
            collisions++;
          }
        }
      }
    }

    this.fitness = 1 / (1 + collisions);
  }

  // Crossover
  crossover(partner) {
    // A new child
    let child = new Chromosome(this.genes.length);

    let midpoint = floor(random(this.genes.length)); // Pick a midpoint

    // Half from one, half from the other
    for (let i = 0; i < this.genes.length; i++) {
      if (i > midpoint) {
        child.genes[i] = this.genes[i];
      } else {
        child.genes[i] = partner.genes[i];
      }
    }
    return child;
  }

  // Based on a mutation probability, picks a new random character
  mutate(mutationRate) {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = getRandomInt(this.genes.length) + 1;
      }
    }
  }
}