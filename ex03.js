const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("qual sua idade ?", (idade) => {
  if (idade < 18) {
    const tempoFalta = 18 - idade;
    console.log(`faltam ${tempoFalta} para voce se alistar!`);
  } else idade > 18;
  {
    const tempoPassou = idade - 18;
    console.log(`passou ${tempoPassou} desde o alistamento!`);
  }

  rl.close();
});
