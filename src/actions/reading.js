const chalk = require('chalk');

const reading = (state) => (name) => {
  const timeline = state.read(name);
  console.log(
    chalk.green(name)
  );
  timeline.forEach(msg => {
    console.log(
      chalk.yellow(msg.text)
    );
  });
}

module.exports = reading;
