const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const port = 3000;
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
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
