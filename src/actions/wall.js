const chalk = require('chalk');
const moment = require('moment');

const wall = (state) => (name) => {
  const wall = state.getWall(name);

  wall.forEach(msg => {
    console.log(
      chalk.green(msg.user),
      '-',
      chalk.yellow(msg.text),
      chalk.blue(`(${moment(msg.date).fromNow()})`)
    );
  })
}

module.exports = wall;