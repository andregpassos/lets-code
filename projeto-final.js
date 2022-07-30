"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const write = (data) => process.stdout.write(data);
const writeln = (data) => process.stdout.write(data + '\n');
function clearScreenAndPrintTitle() {
    console.clear();
    writeln("\n" + "================== JOGO DA FORCA ==================\n");
}
clearScreenAndPrintTitle();
const nomeJogador = readlineSync.question("Informe o nome do jogador: ");
clearScreenAndPrintTitle();
writeln('\n' + `Bem-vindo ao Jogo da Forca, ${nomeJogador}\n`);
readlineSync.keyIn("Pressione 'C' para continuar...", { hideEchoBack: true, mask: '', limit: 'c' });
clearScreenAndPrintTitle();
const palavra = "CANGACEIRO";
let errosPossiveis = 3;
let palavraEscondida = [];
for (let char of palavra) {
    palavraEscondida.push('_');
}
const printSituacaoJogo = () => {
    writeln('\n' + "Palavra: \n");
    palavraEscondida.forEach(letra => write(letra + ' '));
    writeln('\n\n' + `Nome do jogador: ${nomeJogador}`);
    writeln(`Erros possiveis: ${errosPossiveis}\n`);
};
printSituacaoJogo();
while (errosPossiveis > 0 && palavraEscondida.includes('_')) {
    // {limit: '$<a-z>'} só deixa digitar teclas de a-z
    let letraDigitada = readlineSync.keyIn("Chute uma letra: ", { limit: '$<a-z>' }).toUpperCase();
    if (palavra.includes(letraDigitada)) {
        for (let indexPlv = 0; indexPlv < palavra.length; indexPlv++) {
            if (palavra[indexPlv] === letraDigitada) {
                palavraEscondida[indexPlv] = letraDigitada;
            }
        }
    }
    else
        errosPossiveis--;
    printSituacaoJogo();
    if (errosPossiveis === 0)
        writeln("Morreeu 😵 ☠️  👻\n");
}
if (errosPossiveis > 0)
    writeln('\n' + "******* Voce ganhou o jogo! *******\n");
