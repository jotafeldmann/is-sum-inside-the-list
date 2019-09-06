const { TestLambdaCase } = require('./TestLambdaCase')

const runCases = ({ lambda }) => {
  const testLambdaCase = new TestLambdaCase()
  
  testLambdaCase.test({
    lambda: lambda,
    expected: true,
    inputs: {
      listOfNumbers: [2, 5, 10, 77, 3],
      sum: 8
    }
  })
  
  testLambdaCase.test({
    lambda: lambda,
    expected: true,
    inputs: {
      listOfNumbers: [0, 5, 10, 77, 8],
      sum: 8
    }
  })

  testLambdaCase.test({
    lambda: lambda,
    expected: false,
    inputs: {
      listOfNumbers: [0],
      sum: 8
    }
  })
  
  testLambdaCase.test({
    lambda: lambda,
    expected: false,
    inputs: {
      listOfNumbers: [8],
      sum: 8
    }
  })
  
  testLambdaCase.test({
    lambda: lambda,
    expected: true,
    inputs: {
      listOfNumbers: [8,0],
      sum: 8
    }
  })
  
  testLambdaCase.test({
    lambda: lambda,
    expected: true,
    inputs: {
      listOfNumbers: [0,8],
      sum: 8
    }
  })
  
  testLambdaCase.test({
    lambda: lambda,
    expected: false,
    inputs: {
      listOfNumbers: [],
      sum: 8
    }
  })

  return testLambdaCase
}

module.exports = {
  runCases
}