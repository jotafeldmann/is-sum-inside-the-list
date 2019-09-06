const { runCases } = require('./cases')
const { Summary } = require('../utils/Summary')
const lambdaPrint = (value) => console.log(value)

const testSolution = ({ title = '', lambda = () => {}, showLines = false }) => {
  const solutionCaseResults = runCases({
    lambda,
  })

  solutionCaseResults.run()

  const solutionCasesSummary = new Summary({
    title,
    lines: showLines ? solutionCaseResults.results : [],
    summary: {
      success: solutionCaseResults.success,
      fail: solutionCaseResults.fail,
      total: solutionCaseResults.total,
      totalTime: solutionCaseResults.totalTime
    },
    lambdaPrint
  })

  solutionCasesSummary.show()
}

module.exports = {
  testSolution,
}
