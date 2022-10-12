const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

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

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pagesqty;

  const SqlQuery = `INSERT INTO books (title,pageqty) VALUES('${title}','${pageqty}')`;

  conn.query(SqlQuery, (err) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/books");
  });
});

app.get("/books", (req, res) => {
  const SqlQuery = "SELECT * FROM books";

  conn.query(SqlQuery, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;

    //console.log(books);
    res.render("books", { books });
  });
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
