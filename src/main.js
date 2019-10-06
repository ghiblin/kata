const chalk = require('chalk');
const figlet = require('figlet');
const EventEmitter = require('events');
console.log([].flatMap, [].map);
const state = require('./state');

const { POSTING, FOLLOWING, READING, WALL, END } = require('./constants');
const { posting, following, reading, wall, end } = require('./actions')(state);

const command = require('./command');

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("Kata", {
        font: "Crazy",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
}

const main = () => {
  init();

  const prompt = new EventEmitter();

  const exec = (action) => (...args) => {
    action(...args);
    prompt.emit('prompt');
  };

  process.stdin.resume();
  process.stdin.on('data', data => {
    prompt.emit('command', data.toString().trim());
  });

  prompt.on('prompt', () => {
    process.stdout.write('> ');
  });

  prompt.on('command', command(prompt));

  prompt.on(POSTING, exec(posting));
  prompt.on(FOLLOWING, exec(following));
  prompt.on(READING, exec(reading));
  prompt.on(WALL, exec(wall));
  prompt.on(END, exec(end));

  prompt.emit('prompt');
}
main();




// const init = () => {
// }

// const askQuestions = () => {
//   const questions = [
//     {
//       name: "FILENAME",
//       type: "input",
//       message: "What is the name of the file without extension?"
//     },
//     {
//       type: "list",
//       name: "EXTENSION",
//       message: "What is the file extension?",
//       choices: [".rb", ".js", ".php", ".css"],
//       filter: function(val) {
//         return val.split(".")[1];
//       }
//     }
//   ];
//   return inquirer.prompt(questions);
// };

// const run = async () => {
//   // show script introduction
//   init();

//   // ask questions
//   const answers = await askQuestions();
//   const { FILENAME, EXTENSION } = answers;
// };

// run();