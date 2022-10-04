const http = require("http");

const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<h1>Olá este e meu primeiro server com html</h1> <p>Testando a atualização</p>"
  );
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
