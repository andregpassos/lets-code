import { clear } from 'console';
import ololog from 'ololog';

const olog = ololog.configure({locate:false, time:false});

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

// drawHead();
// drawBody();
// drawBodyAndLeftArm();
// drawBodyAndBothArms();
// drawBodyArmsAndLeftLeg();
// drawFullBody();
// drawDeadPerson();