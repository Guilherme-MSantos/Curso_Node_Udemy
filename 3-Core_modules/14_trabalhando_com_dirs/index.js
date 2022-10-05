const fs = require("fs");

if (!fs.existsSync("./minhaPasta")) {
  console.log("não existe");
  console.log("criando");
  fs.mkdirSync("minhaPasta");
} else if (fs.existsSync("./minhaPasta")) {
  console.log("existe");
}
