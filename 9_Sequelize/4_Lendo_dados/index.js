const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");
const User = require("./models/User");

const app = express();

// Configurando o express para pegar o body da requisição
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//Arquivos estáticos
app.use(express.static("public"));

app.get("/users/create", (req, res) => {
  res.render("adduser");
});

app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }
  console.log(req.body);
  await User.create({ name, occupation, newsletter });

  res.redirect("/");
});

app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true });
  res.render("home", { users: users });
});

// Conexão com o banco de dados
conn
  .sync()
  .then(() => {
    app.listen(3000, (req, res) => {
      console.log("conectou");
    });
  })
  .catch((err) => console.log(err));