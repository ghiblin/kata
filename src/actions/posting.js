const chalk = require('chalk');

const posting = (state) => (name, msg) => {
  // Update state
  state.postMessage(name, msg);

  // feedback
  console.log(
    chalk.green(name),
    '->',
    chalk.yellow(msg)
  );
}

module.exports = posting;
