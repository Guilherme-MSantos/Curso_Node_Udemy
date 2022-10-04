const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args);

const name = args["name"];
const age = args["age"];
const work = args["work"];

console.log(`Nome: ${name}. Idade: ${age}, Ocupação:${work}`);
