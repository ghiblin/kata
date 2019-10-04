const chalk = require('chalk');

const end = () => {
  console.log(
    chalk.green('Bye...')
  );
  process.stdin.pause();
}

module.exports = end;
