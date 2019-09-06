const { Solution } = require('../Solution')

const isSumOfNumbersEqualsToExpectedSum = ({ numbers = [], sum }) => numbers.reduce((total, number) => total+ number) === sum

const forEachNumberInTheListCheckIfLambdaIsTrue = ({ listOfNumbers = [], index = 0, listSize = 0, lambda }) => {
  for(; index < listSize; index++) {
    if (lambda({ number: listOfNumbers[index], index, listOfNumbers, listSize }) === true) return true
  }
}

const getCachedListToCheck = ({ listOfNumbers = [] }) => ({ index, lambda }) => {
  const cachedList = listOfNumbers
  const cachedListSize = listOfNumbers.length
  return forEachNumberInTheListCheckIfLambdaIsTrue(({ listOfNumbers: cachedList, index: 0, listSize: cachedListSize, lambda }))
}

const isThereTwoNumbersInsideTheListWhichMatchTheSum = ({ listOfNumbers = [], sum = 0 }) => {
  const check = getCachedListToCheck({ listOfNumbers })

  return check({
    index: 0,
    lambda: ({ number, index }) => 
      check({
        index: index + 1,
        lambda: ({ number: number2 }) =>
          isSumOfNumbersEqualsToExpectedSum({ numbers: [number, number2], sum })
      }) 
  })
}

module.exports = {
  quadraticSolutionTestable: new Solution(
    isThereTwoNumbersInsideTheListWhichMatchTheSum,
    'Testable Quadratic Solution O(N^2)')
}