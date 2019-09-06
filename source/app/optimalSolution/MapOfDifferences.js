class MapOfDifferences {
  
  constructor ({ sum }) {
    this.sum = sum
    this.map = {}
  }

  add (value) {
    this.map[this.sum - value] = true
  }

  has (value) {
    return this.map[value]
  }
}

module.exports = {
  MapOfDifferences
}