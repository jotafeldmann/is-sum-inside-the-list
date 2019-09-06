const printMargin = ({ print }) => print('\n')
const printLine = ({ line, print }) => { print(line); printMargin({ print }) }
const printDivider = ({ print }) => print('-'.repeat(40))

const printHeader = ({ title, print }) => {
  print(title)
  printMargin({ print })
}

const printSummary = ({ title, summary, print }) => {
  print(`Summary: ${JSON.stringify(summary)}`)
}

const printLines = ({ lines, print }) => lines.forEach(line => printLine({ line, print }))

class Summary {
  constructor ({ title = '', summary = {}, lines = [], lambdaPrint }) {
    this.title = title
    this.summary = summary
    this.lines = lines
    this.print = lambdaPrint
  }

  show () {
    printDivider({ ...this })
    printHeader({ ...this })
    printLines({ ...this })
    printSummary({ ...this })
    printDivider({ ...this })
    printMargin({ ...this })
  }
}

module.exports = {
  Summary
}