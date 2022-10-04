const fs = require("fs");

console.log("começo ");

fs.writeFile("arquivo-async.txt", "Teste assíncrono", function () {
  setTimeout(() => {
    console.log("Arquivo Criado");
  }, 1000);
}); // write file já é async

console.log("fim ");
