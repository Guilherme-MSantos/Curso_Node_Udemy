const fs = require("fs");
const msg = "Ola esse é um teste de um arquivo síncrono";

console.log("Início");

fs.writeFileSync("Arquivo-teste.txt", msg);
//             OU
//  fs.writeFileSync("Arquivo-teste.txt", 'oi');

console.log("fim");
