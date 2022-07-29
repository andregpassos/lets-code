import readlineSync from 'readline-sync';

const write = (data: any) => process.stdout.write(data);
const writeln = (data: any) => process.stdout.write(data + '\n');

writeln("\n" + "PROJETO FINAL - JS/TS\n");

const nomeJogador = readlineSync.question("Informe o nome do jogador: ");

writeln('\n' + `Bem-vindo ao Jogo da Forca ${nomeJogador}\n`);

readlineSync.keyIn("Pressione 'C' para continuar...", { hideEchoBack: true, mask: '', limit: 'c' });

console.clear();
writeln("\n" + "================== JOGO DA FORCA ==================\n");

const palavra = "CANGACEIRO";
let contErros = 6;

let palavraEscondida: string[] = [];
for (let char of palavra) {
  palavraEscondida.push('_');
}

const printPalavraEscondida = () => palavraEscondida.forEach(letra => write(letra + ' '));

printPalavraEscondida();
writeln('\n');
writeln(`Quantidade de erros possíveis: ${contErros}\n`);

// {limit: '$<a-z>'} só deixa digitar teclas de a-z (alfabeto americano)
for (let i = 0; i < 6; i++) {
  let letraDigitada = readlineSync.keyIn("Chute uma letra: ", {limit: '$<a-z>'}).toUpperCase();

  if (palavra.includes(letraDigitada)) {
    for (let char of palavra) {
      if (char === letraDigitada) {
        printPalavraEscondida()
        writeln('\n');
      }
    }
  }
  
  readlineSync.keyIn("Pressione 'C' para continuar...", { hideEchoBack: true, mask: '', limit: 'c' });
}

// "[System.Console]::InputEncoding = [System.Text.Encoding]::ASCII" for PowerShell