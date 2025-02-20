const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("qual a distancia que irao percorrer? ", (distancia) => {
  distancia = parseFloat(distancia);

  if (distancia < 200) {
    const valorPorLitro = distancia * 0.5;
    console.log(`o valor percorrido por km é de ${valorPorLitro.toFixed(2)}.`);
  } else {
    const valorPorLitro = distancia * 0.45;
    console.log(`o valor percorrido por km é de ${valorPorLitro.toFixed(2)}`);
  }
  rl.close();
});
