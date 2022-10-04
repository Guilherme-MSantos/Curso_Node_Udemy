const chalk = require("chalk");
const x = "10";

// checar se é um número

if (!Number.isInteger(x)) {
  throw new Error(chalk.red("O valor de x não é um número inteiro ")); // throw encerra o programa
}

console.log("Continuando o código...");
