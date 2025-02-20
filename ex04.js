const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("qual seu nome?", (nome) => {
  rl.question("qual seu genero?", (sexo) => {
    rl.question("qual o valor da compra?", (valorCompra) => {
      if (sexo === `Feminino`) {
        const desconto = valorCompra * 0.13;
        const valorFinal = valorCompra - desconto;
        console.log(
          `ola ${nome}, voce tem um desconto de ${desconto}. O valor total da compra deu ${valorFinal}`
        );
      } else {
        const desconto = valorCompra * 0.05;
        const valorFinal = valorCompra - desconto;
        console.log(
          `ola ${nome}, voce tem um desconto de ${desconto}. O valor total da compra deu ${valorFinal}`
        );
      }

      rl.close();
    });
  });
});
