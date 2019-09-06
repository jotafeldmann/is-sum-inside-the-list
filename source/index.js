const { optimalSolution } = require('./app/optimalSolution')
const { quadraticSolution } = require('./app/quadraticSolution')
const { quadraticSolutionTestable } = require('./app/quadraticSolutionTestable')
const { testSolution } = require('./tests')

const solutionsToTest = [optimalSolution, quadraticSolution, quadraticSolutionTestable]

const setSolutionTest = ({ lambda }) => (configs) => testSolution({
  lambda,
  title: lambda.title,
  ...configs,
})

const tests = solutionsToTest.map((solution) => setSolutionTest({
  lambda: solution,
  title: solution.title
}))

const init = (configs) => tests.forEach((test) => test(configs))

init({ showLines: false })
