const chalk = require('chalk');

const wall = (name) => {
  console.log(
    chalk.green(`${name}'s wall:`)
  );
}

module.exports = wall;