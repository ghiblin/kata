const chalk = require('chalk');
const { POSTING, FOLLOWING, WALL, END, READING } = require('./constants');


const commands = [
  {
    regex: /^([\w]+)\s*->\s*(.+)$/,
    action: POSTING,
  },
  {
    regex: /^([\w]+)\s+follows\s+([\w]+)$/,
    action: FOLLOWING,
  },
  {
    regex: /^([\w]+)\s+wall$/i,
    action: WALL,
  },
  {
    regex: /^bye$/i,
    action: END,
  },
  {
    regex: /^([\w]+)$/i,
    action: READING,
  },
];

const command = (prompt) => (str) => {
  const executed = commands.some((cmd) => {
    let match = cmd.regex.exec(str);
    if (match) {
      prompt.emit(cmd.action, ...match.slice(1));
      return true;
    } else {
      return false;
    }
  });
  if (!executed) {
    console.log(
      chalk.red('Sorry?')
    );
    prompt.emit('prompt');
  }
}

module.exports = command;