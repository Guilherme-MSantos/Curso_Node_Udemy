const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const basePath = path.join(__dirname, "templates");

const checkAuth = function (req, res, next) {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("está logado");
    // next e necessário em ambos os casos para que a aplicação possa seguir
    next();
  } else {
    console.log("Não está logado");
    next();
  }
};

app.use(checkAuth);
app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando no link http://localhost:${port}/`);
});
