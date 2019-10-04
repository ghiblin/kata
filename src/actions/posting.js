const chalk = require('chalk');

const posting = (name, msg) => {
  console.log(
    chalk.green(name),
    'says',
    chalk.yellow(msg)
  );
}

module.exports = posting;
