const minimist = require("minimist");
const args = minimist(process.argv.slice(2));

const chalk = require("chalk");

const nota = parseInt(args["nota"]);

if (nota >= 5) {
  console.log(chalk.green("Parabéns você está aprovado"));
} else {
  // console.log(chalk.bgRed.black("Parabéns você está reprovado")); opções de formatação
  console.log(chalk.red("Parabéns você está reprovado"));
}

// Limpando o console
setTimeout(() => {
  console.clear();
}, 2000);
