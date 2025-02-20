const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pergunta o ano
rl.question("Digite um ano para verificar se é bissexto: ", (ano) => {
  // Converte a entrada para número
  ano = parseInt(ano);

  // Verifica se o ano é bissexto
  if (ano % 4 === 0) {
    console.log(`${ano} é um ano bissexto.`);
  } else {
    console.log(`${ano} não é um ano bissexto.`);
  }

  // Fecha a interface
  rl.close();
});
