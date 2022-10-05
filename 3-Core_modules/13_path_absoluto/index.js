const path = require("path");

// path absoluto
console.log(path.resolve("teste.txt"));

// formar path
const midFolder = "Relatórios";
const fileName = "guilherme.txt";

const finalPath = path.join("/", "arquivos", midFolder, fileName);

console.log(finalPath);
