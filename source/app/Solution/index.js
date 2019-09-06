class Solution {
  constructor (lambda, title) {
    const callback = ({ listOfNumbers = [], sum = 0 }) => !!lambda({ listOfNumbers , sum })
    callback.title = `Solution: ${title}`
    return callback
  }
}

module.exports = {
  Solution
}