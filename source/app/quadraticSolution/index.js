const { Solution } = require('../Solution')

const isThereTwoNumbersInsideTheListWhichMatchTheSum = ({ listOfNumbers = [], sum = 0 }) => {
  const listSize = listOfNumbers.length
  let fixedNumber = 0
  let mobileNumber = 0
  
  for (let fixedNumberIndexCount = 0; fixedNumberIndexCount < listSize; fixedNumberIndexCount++) {
    fixedNumber = listOfNumbers[fixedNumberIndexCount]
    
    for (let mobileNumberIndexCount = fixedNumberIndexCount + 1; mobileNumberIndexCount < listSize; mobileNumberIndexCount++) {
      mobileNumber = listOfNumbers[mobileNumberIndexCount]
      if (fixedNumber + mobileNumber === sum) return true
    }
  }

  return false
}

module.exports = {
  quadraticSolution: new Solution(
    isThereTwoNumbersInsideTheListWhichMatchTheSum,
    'Quadratic Solution O(N^2)')
}