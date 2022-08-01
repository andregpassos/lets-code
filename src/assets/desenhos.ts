import ololog from 'ololog';

const olog = ololog.configure({locate:false, time:false});


export function clearScreenAndPrintTitle(): void {
  console.clear();
  olog.lightYellow.bright('\n' + "======================== JOGO DA FORCA ========================\n");
}

export function printEndMenu(): void {
  olog.lightYellow.bright('\n' + "===============================================================\n");
}

export function drawHead(): void {
  olog.lightYellow.bright("        _____");
  olog.lightYellow.bright("       /     \\");
  olog.lightYellow.bright("      | O   O |");
  olog.lightYellow.bright("       \\_____/");
}

export function drawDeadHead(): void {
  olog.lightYellow.bright("        _____");
  olog.lightYellow.bright("       /     \\");
  olog.lightYellow.bright("      | X   X |");
  olog.lightYellow.bright("       \\_____/");
}

export function drawBody(): void {
  drawHead();
  olog.lightYellow.bright("         | |");
  olog.lightYellow.bright("         | |");
  olog.lightYellow.bright("         | |");
  olog.lightYellow.bright("         |_|");
}

export function drawBodyAndLeftArm(): void {
  drawHead();
  olog.lightYellow.bright("       //| |");
  olog.lightYellow.bright("      // | |");
  olog.lightYellow.bright("     //  | |");
  olog.lightYellow.bright("         |_|");
}

export function drawBodyAndBothArms(): void {
  drawHead();
  olog.lightYellow.bright("       //| |\\\\");
  olog.lightYellow.bright("      // | | \\\\");
  olog.lightYellow.bright("     //  | |  \\\\");
  olog.lightYellow.bright("         |_|");
}

export function drawBodyArmsAndLeftLeg(): void {
  drawHead();
  olog.lightYellow.bright("       //| |\\\\");
  olog.lightYellow.bright("      // | | \\\\");
  olog.lightYellow.bright("     //  | |  \\\\");
  olog.lightYellow.bright("        /|_|");
  olog.lightYellow.bright("       //");
  olog.lightYellow.bright("      //");
}

export function drawFullBody(): void {
  drawHead();
  olog.lightYellow.bright("       //| |\\\\");
  olog.lightYellow.bright("      // | | \\\\");
  olog.lightYellow.bright("     //  | |  \\\\");
  olog.lightYellow.bright("        /|_|\\");
  olog.lightYellow.bright("       //   \\\\");
  olog.lightYellow.bright("      //     \\\\");
}

export function drawDeadPerson(): void {
  drawDeadHead();
  olog.lightYellow.bright("       //| |\\\\");
  olog.lightYellow.bright("      // | | \\\\");
  olog.lightYellow.bright("     //  | |  \\\\");
  olog.lightYellow.bright("        /|_|\\");
  olog.lightYellow.bright("       //   \\\\");
  olog.lightYellow.bright("      //     \\\\");
}

export function printBoneco(errosRestantes: number) {
    switch (errosRestantes) {
      case 5:
        drawHead();
        break;
      case 4:
        drawBody();
        break;
      case 3:
        drawBodyAndLeftArm();
        break;
      case 2:
        drawBodyAndBothArms();
        break;
      case 1:
        drawBodyArmsAndLeftLeg();
        break;
      case 0:
        drawDeadPerson();
        break;
      default:
        break;
    }
  }