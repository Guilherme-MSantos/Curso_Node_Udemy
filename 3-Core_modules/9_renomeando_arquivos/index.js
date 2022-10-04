const fs = require("fs");

const ArquivoOriginal = "arquivo.txt";
const ArquivoNovo = "novoArquivo.txt";

fs.rename(ArquivoOriginal, ArquivoNovo, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(
    `O arquivo ${ArquivoOriginal} foi renomeado para ${ArquivoNovo} .`
  );
});
