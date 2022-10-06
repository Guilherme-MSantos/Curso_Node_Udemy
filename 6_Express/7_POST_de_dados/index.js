const express = require("express");
const app = express();
const port = 3000;

// ler o body

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
const path = require("path");
const basePath = path.join(__dirname, "templates");

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});
app.post("/users/save", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do user é ${name} e sua idade é ${age} anos`);
  res.sendFile(`${basePath}/userform.html`);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  // leitura da tabela users para resgatar user do banco
  console.log(`Busca pelo id: ${id}`);
  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando no link http://localhost:${port}/`);
});
