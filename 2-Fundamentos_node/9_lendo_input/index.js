const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual a sua linguagem favorita ? :", (language) => {
  console.log(`Oh! então sua linguagem de programação favorita é ${language}`);
  readline.close();
});
