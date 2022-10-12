const express = require("express");
const exphbs = require("express-handlebars");
const pool = require("./db/conn");

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

  pool.query(SqlQuery, (err) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/books");
  });
});

app.get("/books", (req, res) => {
  //pegando todos os livros
  const SqlQuery = "SELECT * FROM books";

  pool.query(SqlQuery, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;

    //console.log(books);
    res.render("books", { books });
  });
});

app.get("/books/:id", (req, res) => {
  //pegando livro individualmente
  const id = req.params.id;
  const SqlQuery = `SELECT * FROM books  WHERE id = ${id}`;

  pool.query(SqlQuery, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0];

    res.render("book", { book });
  });
});

// update de books
app.get("/books/edit/:id", (req, res) => {
  //mostrando o form de edição preenchido
  const id = req.params.id;
  const SqlQuery = `SELECT * FROM books WHERE id = ${id}`;

  pool.query(SqlQuery, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0];

    res.render("editbook", { book });
  });
});

app.post("/books/updatebook", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const pageqty = req.body.pagesqty;

  const SqlQuery = `UPDATE books SET title='${title}', pageqty='${pageqty}' WHERE id ='${id}' `;

  pool.query(SqlQuery, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/books");
  });
});

// Delete
app.post("/books/remove/:id", (req, res) => {
  const id = req.params.id;
  const SqlQuery = `DELETE from books WHERE id='${id}'`;

  pool.query(SqlQuery, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

app.listen(3000, (req, res) => {
  console.log("conectou");
});
