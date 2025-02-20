const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pergunta a velocidade do carro
rl.question("Qual é a velocidade do carro? ", (velocidade) => {
  // Converte a entrada para número
  velocidade = parseFloat(velocidade);

  // Velocidade máxima permitida
  const limiteVelocidade = 80;

  // Verifica se a velocidade ultrapassou o limite
  if (velocidade > limiteVelocidade) {
    // Calcula o valor da multa
    const excesso = velocidade - limiteVelocidade;
    const multa = excesso * 5;

    // Exibe a mensagem de multa
    console.log(`Você foi multado! A multa é de R$${multa.toFixed(2)}.`);
  } else {
    // Caso a velocidade esteja dentro do limite
    console.log(
      "Você está dentro do limite de velocidade. Continue dirigindo com segurança!"
    );
  }

  // Fecha a interface
  rl.close();
});
