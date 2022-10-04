const x = 10;
const y = "Ciclano";
const z = [1, 2];

console.log(x, y, z);

// contagem de impressões

console.count(`O valor de X é : ${x}, contagem`);
console.count(`O valor de X é : ${x}, contagem`);
console.count(`O valor de X é : ${x}, contagem`);

// Variável entre string

console.log("O nome dele é %s, ele é programador", y);

//Limpar o console
setTimeout(() => {
  console.clear();
}, 2000);
