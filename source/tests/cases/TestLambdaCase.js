const NS_PER_SEC = 1e9

const test = ({
  lambda,
  expected,
  inputs = {}
}) => {
  const lambdaResult = lambda(inputs)
  const success = (lambdaResult === expected)

  const summary = {
    inputs: JSON.stringify(inputs),
    expectedResult: expected,
    lambdaResult: lambdaResult,
  }
  
  return {
    success,
    summary,
  }
}

class TestLambdaCase {
  constructor () {
    this.success = 0
    this.fail = 0
    this.results = []
    this.testsToRun = []
    this.onlyToExecute = null
    this.totalTime = 0
  }

  test ({
    lambda,
    expected,
    inputs = {}
  }) {

    const testToExecute = function (context) {
      const testResult = test({
        lambda,
        expected,
        inputs
      })

      context.results.push(testResult)

      if (testResult.success) {
        context.success++
      } else {
        context.fail++
      }

      return testResult
    }

    this.testsToRun.push(testToExecute)

    return testToExecute
  }

  only (params) {
    this.onlyToExecute = this.test(params)
  }

  _getTestsToRun () {
    if (this.onlyToExecute) return [this.onlyToExecute]
    return this.testsToRun
  }

  _calculateTotalTimeOfExecutionInNanoseconds ({ start }) {
    const diff = process.hrtime(start)
    return diff[0] * NS_PER_SEC + diff[1]
  }

  _startTimerOfExecution () {
    return process.hrtime()
  }

  _stopTimerOfExecution () {
    return process.hrtime()
  }

  run () {
    const context = this
    const tests = this._getTestsToRun()
    const start = this._startTimerOfExecution()
    tests.forEach((test) => test(context))
    const stop = this._stopTimerOfExecution()
    this.totalTime = this._calculateTotalTimeOfExecutionInNanoseconds({ start, stop })
  }

  get total () {
    return this.fail + this.success
  }
}

module.exports = {
  TestLambdaCase,
}