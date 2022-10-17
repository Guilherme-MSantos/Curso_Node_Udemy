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

app.get("/", (req, res) => {
  res.render("home");
});

conn
  .sync()
  .then(() => {
    app.listen(3000, (req, res) => {
      console.log("conectou");
    });
  })
  .catch((err) => console.log(err));
