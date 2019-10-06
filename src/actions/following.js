const chalk = require('chalk');

const following = (state) => (a, b) => {
  // update state
  state.follows(a, b);

  // print feedback
  console.log(
    chalk.green(a),
    'follows',
    chalk.green(b)
  );
}

module.exports = following;