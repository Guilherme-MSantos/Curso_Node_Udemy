const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const port = 3000;
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["item a", "item b", "item c", "item d"];
  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Abstração no handlebars",
    category: "Curso",
    body: "Para abstrair um objeto você deve usar {{#with nomeObjeto}} assim você irá obter as propriedades dele",
    comments: 0,
    likes: 200,
  };

  res.render("post", { post });
});
app.get("/", (req, res) => {
  const user = {
    name: "Guilherme",
    lastName: "Moreira",
    age: 23,
    Sexo: "Masculino",
  };

  const Welcome = "Bem vindo(a)";

  const auth = true;

  const approved = false;

  res.render("home", { user: user, Welcome, auth, approved });
});

app.listen(3000, () => {
  console.log(`Servidor rodando em => http://localhost:${port}`);
});
