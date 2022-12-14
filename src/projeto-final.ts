import * as readlineSync from 'readline-sync';
import ololog from 'ololog';
import { sleep } from './utils/sleep.js';
import * as desenhos from './assets/desenhos.js';
import { getPalavraForca } from './assets/palavras.js';

const olog = ololog.configure({locate:false, time:false});
const write = (data: any) => process.stdout.write(data);
const writeln = (data: any) => process.stdout.write(data + '\n');

let nomeJogador: string = "";

let selectedOption: number = 1; // inicia selecionando o jogador
// selectedOption: 0 -> jogar novamente, 1 -> mudar jogador, 2 -> encerrar o jogo
while (selectedOption !== 2) {
  // mudar jogador
  if (selectedOption === 1) {
    desenhos.clearScreenAndPrintTitle();
    nomeJogador = readlineSync.question("Informe o nome do jogador: ");

    desenhos.clearScreenAndPrintTitle();
    write('\n' + "Bem-vindo ao Jogo da Forca, ");
    olog.lightCyan(nomeJogador + '\n');

    olog.green("Pressione 'C' para continuar...");
    desenhos.printEndMenu();
    readlineSync.keyIn("", { hideEchoBack: true, mask: '', limit: 'c' });
  }

  const palavra: string = getPalavraForca();
  let errosPossiveis: number = 6;

  let palavraEscondida: string[] = [];
  for (let char of palavra) {
    palavraEscondida.push('_');
  }

  let letrasDigitadas: string[] = [];

  const printSituacaoJogo = (errosRestantes: number): void => {
    desenhos.clearScreenAndPrintTitle();
    
    writeln('\n' + "Palavra: \n");
    palavraEscondida.forEach(letra => write(letra + ' '));
    write('\t' + `Letras ja digitadas: ${letrasDigitadas}`);
    olog.lightCyan('\n\n' + `Nome do jogador: ${nomeJogador}`);
    olog.yellow(`Erros possiveis: ${errosPossiveis}\n`);

    desenhos.printBoneco(errosRestantes);
    desenhos.printEndMenu();
  }

  printSituacaoJogo(errosPossiveis);

  //verifica se ainda pode cometer erro e se a palavra nao foi completada
  while (errosPossiveis > 0 && palavraEscondida.includes('_')) {
    // {limit: '$<a-z>'} só deixa digitar teclas de a-z
    let letraDigitada = readlineSync.keyIn("Chute uma letra: ", {limit: '$<a-z>'}).toUpperCase();
    if (letrasDigitadas.includes(letraDigitada)) {
      olog.lightYellow.italic('\n' + "Voce ja chutou esta letra.\n");
      sleep(2000);
    } else {
      letrasDigitadas.push(letraDigitada);

      if (palavra.includes(letraDigitada)) {
        olog.lightGreen.italic('\n' + "Voce acertou a letra!\n");
        sleep(2000);

        for (let indexPlv = 0; indexPlv < palavra.length; indexPlv++) {
          if (palavra[indexPlv] === letraDigitada) {
            palavraEscondida[indexPlv] = letraDigitada;
          }
        }
      } else {
        olog.red.italic('\n' + "Voce errou a letra!\n");
        sleep(2000);
        errosPossiveis--;
      }
    }

    printSituacaoJogo(errosPossiveis);
    if (errosPossiveis === 0) {
      olog.lightRed.bright("Morreeu 😵 ☠️  👻\n");
      write("A palavra era: ");
      olog.lightYellow.bright(palavra);
    }
  }
  if (errosPossiveis > 0) olog.lightGreen.bright('\n\t' + "   ✨✨✨✨ Voce ganhou o jogo! ✨✨✨✨\n");

  const optionsEndGame: string[] = ["Jogar novamente", "Mudar o jogador", "Encerrar o jogo"];

  selectedOption = readlineSync.keyInSelect(optionsEndGame, "Fim do jogo. Selecione uma opcao:", {cancel: false});
  if (selectedOption === 2) olog.lightRed.italic('\n' + "Jogo encerrado!\n");
}
