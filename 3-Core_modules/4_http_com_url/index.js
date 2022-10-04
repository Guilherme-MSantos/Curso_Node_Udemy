const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (!name) {
    res.end(
      "<h2>Preencha o seu nome : </h2> </br> <form method='GET'></br><input type='text' name='name' placeholder='digite o seu nome'></br></br> <input type='submit' name='submit'value='Enviar'></br></br> </form> "
    );
  } else {
    res.end(`<h2>Seja bem vindo(a) ${name}</h2>`);
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
