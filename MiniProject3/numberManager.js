class numberManager {
  constructor(shuffleRate) {
    this.shuffleRate = shuffleRate;
  }

  getOne() {
    return [
      [255, 255, 0, 255, 255, 255, 255, 255, 255],
      [255, 0, 255, 255, 255, 255, 255, 255, 255],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [255, 255, 255, 255, 255, 255, 255, 255, 255],
      [255, 255, 255, 255, 255, 255, 255, 255, 255]
    ]
  }

  getTwo() {
    return [
      [255, 0, 255, 255, 255, 255, 255, 0, 0],
      [0, 255, 255, 255, 255, 255, 0, 255, 0],
      [0, 255, 255, 255, 255, 0, 255, 255, 0],
      [0, 255, 255, 255, 0, 255, 255, 255, 0],
      [255, 0, 0, 0, 255, 255, 255, 255, 0]
    ]
  }

  getThree() {
    return [
      [255, 0, 255, 255, 255, 255, 255, 0, 255],
      [0, 255, 255, 255, 255, 255, 255, 255, 0],
      [0, 255, 255, 255, 255, 255, 255, 255, 0],
      [0, 255, 255, 255, 0, 255, 255, 255, 0],
      [255, 0, 0, 0, 255, 0, 0, 0, 255]
    ]
  }

  getFour() {
    return [
      [255, 255, 255, 255, 255, 0, 0, 255, 255],
      [255, 255, 255, 0, 0, 255, 0, 255, 255],
      [255, 0, 0, 255, 255, 255, 0, 255, 255],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [255, 255, 255, 255, 255, 255, 0, 255, 255]
    ]
  }

  getFive() {
    return [
      [0, 0, 0, 0, 0, 255, 255, 0, 255],
      [0, 255, 255, 0, 255, 255, 255, 255, 0],
      [0, 255, 255, 0, 255, 255, 255, 255, 0],
      [0, 255, 255, 0, 255, 255, 255, 255, 0],
      [0, 255, 255, 255, 0, 0, 0, 0, 255]
    ]
  }

  getSix() {
    return [
      [255, 0, 0, 0, 0, 0, 0, 0, 255],
      [0, 255, 255, 255, 0, 255, 255, 255, 0],
      [0, 255, 255, 255, 0, 255, 255, 255, 0],
      [0, 255, 255, 255, 0, 255, 255, 255, 0],
      [255, 0, 255, 255, 255, 0, 0, 0, 255]
    ]
  }

  getSeven() {
    return [
      [0, 255, 255, 255, 255, 255, 255, 255, 255],
      [0, 255, 255, 255, 255, 255, 0, 0, 0],
      [0, 255, 255, 255, 0, 0, 255, 255, 255],
      [0, 255, 0, 0, 255, 255, 255, 255, 255],
      [0, 0, 255, 255, 255, 255, 255, 255, 255]
    ]
  }

  getEight() {
    return [
      [255, 0, 0, 0, 255, 0, 0, 0, 255],
      [0, 255, 255, 255, 0, 255, 255, 255, 0],
      [0, 255, 255, 255, 0, 255, 255, 255, 0],
      [0, 255, 255, 255, 0, 255, 255, 255, 0],
      [255, 0, 0, 0, 255, 0, 0, 0, 255],
    ]
  }

  getNine() {
    return [
      [255, 0, 0, 0, 255, 255, 255, 0, 255],
      [0, 255, 255, 255, 0, 255, 255, 255, 0],
      [0, 255, 255, 255, 0, 255, 255, 255, 0],
      [0, 255, 255, 255, 0, 255, 255, 255, 0],
      [255, 0, 0, 0, 0, 0, 0, 0, 255]
    ]
  }

  getZero() {
    return [
      [255, 0, 0, 0, 0, 0, 0, 0, 255],
      [0, 255, 255, 255, 255, 255, 255, 255, 0],
      [0, 255, 255, 255, 255, 255, 255, 255, 0],
      [0, 255, 255, 255, 255, 255, 255, 255, 0],
      [255, 0, 0, 0, 0, 0, 0, 0, 255]
    ]
  }

  shuffle(number) {
    for (var i = 0; i < number.length; i++) {
      for (var j = 0; j < number[i].length; j++) {
        var rand = Math.round(random(100));
        number[i][j] = rand < this.shuffleRate ? Math.abs(number[i][j] - 255) : number[i][j];
      }
    }

    return number;
  }

  getRandomNumber() {
    const number = Math.round(random(9))
    switch (number) {
      case 0:
        return {"data": this.shuffle(this.getZero()), "value": number}
      case 1:
        return {"data": this.shuffle(this.getOne()), "value": number}
      case 2:
        return {"data": this.shuffle(this.getTwo()), "value": number}
      case 3:
        return {"data": this.shuffle(this.getThree()), "value": number}
      case 4:
        return {"data": this.shuffle(this.getFour()), "value": number}
      case 5:
        return {"data": this.shuffle(this.getFive()), "value": number}
      case 6:
        return {"data": this.shuffle(this.getSix()), "value": number}
      case 7:
        return {"data": this.shuffle(this.getSeven()), "value": number}
      case 8:
        return {"data": this.shuffle(this.getEight()), "value": number}
      case 9:
        return {"data": this.shuffle(this.getNine()), "value": number}

      default:
        break;
    }
  }

  getShuffledNumber(number) {
    switch (number) {
      case 0:
        return {"data": this.shuffle(this.getZero()), "value": number}
      case 1:
        return {"data": this.shuffle(this.getOne()), "value": number}
      case 2:
        return {"data": this.shuffle(this.getTwo()), "value": number}
      case 3:
        return {"data": this.shuffle(this.getThree()), "value": number}
      case 4:
        return {"data": this.shuffle(this.getFour()), "value": number}
      case 5:
        return {"data": this.shuffle(this.getFive()), "value": number}
      case 6:
        return {"data": this.shuffle(this.getSix()), "value": number}
      case 7:
        return {"data": this.shuffle(this.getSeven()), "value": number}
      case 8:
        return {"data": this.shuffle(this.getEight()), "value": number}
      case 9:
        return {"data": this.shuffle(this.getNine()), "value": number}

      default:
        break;
    }
  }

  generateData(quantity) {
    let trainingData = [];

    for (let index = 0; index < quantity; index++) {
      trainingData.push(this.getShuffledNumber(Math.floor(index/(quantity/10))));
    }

    console.log(JSON.stringify(trainingData))
    return trainingData;
  }
}