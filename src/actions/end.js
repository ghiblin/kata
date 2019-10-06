const chalk = require('chalk');

const end = (state) => () => {
  console.log(
    chalk.green('Bye...')
  );
  process.stdin.pause();
}

module.exports = end;
