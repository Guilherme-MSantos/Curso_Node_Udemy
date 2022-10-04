function a() {
  console.log("executando a função a");
}

function b() {
  console.log("executando a função b");
}

function c() {
  console.log("executando a função c");
  a();
  b();
}

c();
