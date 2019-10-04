const chalk = require('chalk');

const following = (a, b) => {
  console.log(
    chalk.green(a),
    'follows',
    chalk.green(b)
  );
}

module.exports = following;