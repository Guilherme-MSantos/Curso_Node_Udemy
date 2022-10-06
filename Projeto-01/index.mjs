//Projeto accounts

//Módulos externos

import chalk from "chalk";
import fs from "fs";
import inquirer from "inquirer";

// const fs = require("fs");

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
          "Criar uma conta",
          "Consultar saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Criar uma conta") {
        createAccount();
      } else if (action === "Consultar saldo") {
        getAccountBalance();
      } else if (action === "Depositar") {
        deposit();
      } else if (action === "Sacar") {
        withDraw();
      } else if (action === "Sair") {
        console.log(chalk.bgBlue.black("Obrigado por usar o accounts"));
        process.exit();
      }
    })
    .catch((err) => console.log(err));
}

console.log("iniciamos o projeto");

// create account
function createAccount() {
  console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco"));
  console.log(chalk.green("Defina a seguir as opções de sua conta"));

  buildAccount();
}

// build account
function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para a sua conta:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      console.info(accountName);

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Esta conta já existe, escolha outro nome...")
        );
        buildAccount();
        return;
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        (err) => {
          console.log(err);
        }
      );
      console.log(chalk.green("Sua conta foi criada com sucesso"));
      operation();
    })
    .catch((err) => console.log(err));
}

// add an amount to user account

function deposit() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da sua conta",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      //Verify if account exists
      if (!checkAccount(accountName)) {
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Quanto você deseja depositar",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];

          // add an amount
          addAmount(accountName, amount);
          operation();
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(
      chalk.bgRed.black("Esta conta não existe, escolha outro nome!")
    );
    return false;
  }
  return true;
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(chalk.bgRed.black("Houve um erro tente novamente"));
    return deposit();
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    (err) => {
      console.log(err);
    }
  );
  console.log(
    chalk.green(`Foi feito um deposito de R$${amount} na sua conta `)
  );
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r", // flag r para apenas leitura
  });
  return JSON.parse(accountJSON);
}

// show account balance
function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual a sua conta ?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        return getAccountBalance();
      }
      const accountData = getAccount(accountName);

      console.log(
        chalk.bgBlue.black(
          `Olá o saldo da sua conta é  R$${accountData.balance}`
        )
      );
      operation();
    })
    .catch((err) => console.log(err));
}

// with draw an amount from user account
function withDraw() {
  inquirer
    .prompt([{ name: "accountName", message: "Qual o nome da sua conta?" }])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!checkAccount(accountName)) {
        return withDraw();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Quanto você deseja sacar ?",
          },
        ])
        .then((answer) => {
          removeAmount(accountName, amount);
        });
    })
    .catch((err) => console.log(err));
}

function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(
      chalk.bgRed.black("ocorreu um erro tente novamente mais tarde")
    );
    return withDraw();
  }

  if (accountData.balance < amount) {
    console.log(chalk.bgRed.black("Valor indisponível"));
    return withDraw();
  }
  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    (err) => {
      console.log(err);
    }
  );
  console.log(chalk.green(`foi realizado um saque de R$${amount}`));
  operation();
}
