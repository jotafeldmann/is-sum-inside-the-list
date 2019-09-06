const { Solution } = require('../Solution')
const { MapOfDifferences } = require('./MapOfDifferences')

const isThereTwoNumbersInsideTheListWhichMatchTheSum = ({ listOfNumbers = [], sum , map = MapOfDifferences }) => {
  const mapOfDifferences = new map({ sum })
  const numberFound = listOfNumbers.find((number) => {
    if (mapOfDifferences.has(number)) return true
    mapOfDifferences.add(number)
  })
  return numberFound !== undefined
}

module.exports = {
  optimalSolution: new Solution(
    isThereTwoNumbersInsideTheListWhichMatchTheSum,
    'Optimal Solution O(N)')
}