const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//Arquivos estáticos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

//conexão ao banco de dados

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cursoNode",
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Conectou ao mysql");
  app.listen(3000);
});
