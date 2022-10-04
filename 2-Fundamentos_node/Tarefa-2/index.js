//* INSTRUÇÕES
//* Utilizar inquirer para pegar nome e idade do usuário
//* Apresentar a resposta com cor de fundo amarela e texto preto
//* Inserir tratamento de erros  com  catch

const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
  .prompt([
    { name: "Nome", message: "Qual o seu nome ?" },
    { name: "Idade", message: "Qual a sua idade ?" },
  ])
  .then((data) => {
    const UserInfos = chalk.bgYellow.black(
      `Então seu nome é ${data.Nome} e sua idade é ${data.Idade}`
    );
    console.log(UserInfos);
  })
  .catch((error) => {
    console.log(chalk.red(error));
  });
