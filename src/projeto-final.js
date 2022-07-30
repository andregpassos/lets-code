"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
const sleep_js_1 = require("./utils/sleep.js");
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
const palavra = "CANGACEIRO";
let errosPossiveis = 6;
let palavraEscondida = [];
for (let char of palavra) {
    palavraEscondida.push('_');
}
let letrasDigitadas = [];
const printSituacaoJogo = () => {
    clearScreenAndPrintTitle();
    writeln('\n' + "Palavra: \n");
    palavraEscondida.forEach(letra => write(letra + ' '));
    write('\t' + `Letras ja digitadas: ${letrasDigitadas}`);
    writeln('\n\n' + `Nome do jogador: ${nomeJogador}`);
    writeln(`Erros possiveis: ${errosPossiveis}\n`);
};
printSituacaoJogo();
//verifica se ainda pode cometer erro e se a palavra nao foi completada
while (errosPossiveis > 0 && palavraEscondida.includes('_')) {
    // {limit: '$<a-z>'} só deixa digitar teclas de a-z
    let letraDigitada = readlineSync.keyIn("Chute uma letra: ", { limit: '$<a-z>' }).toUpperCase();
    if (letrasDigitadas.includes(letraDigitada)) {
        (0, sleep_js_1.showMsgAndSleep)('\n' + "Voce ja chutou esta letra.\n", 2000);
    }
    else {
        letrasDigitadas.push(letraDigitada);
        if (palavra.includes(letraDigitada)) {
            (0, sleep_js_1.showMsgAndSleep)('\n' + "Voce acertou a letra!\n", 2000);
            for (let indexPlv = 0; indexPlv < palavra.length; indexPlv++) {
                if (palavra[indexPlv] === letraDigitada) {
                    palavraEscondida[indexPlv] = letraDigitada;
                }
            }
        }
        else {
            (0, sleep_js_1.showMsgAndSleep)('\n' + "Voce errou a letra.\n", 2000);
            errosPossiveis--;
        }
    }
    printSituacaoJogo();
    if (errosPossiveis === 0)
        writeln("Morreeu 😵 ☠️  👻\n");
}
if (errosPossiveis > 0)
    writeln('\n' + "******* Voce ganhou o jogo! *******\n");