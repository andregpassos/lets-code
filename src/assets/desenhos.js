"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printBoneco = exports.drawDeadPerson = exports.drawFullBody = exports.drawBodyArmsAndLeftLeg = exports.drawBodyAndBothArms = exports.drawBodyAndLeftArm = exports.drawBody = exports.drawDeadHead = exports.drawHead = exports.printEndMenu = exports.clearScreenAndPrintTitle = void 0;
const ololog_1 = require("ololog");
const olog = ololog_1.default.configure({ locate: false, time: false });
function clearScreenAndPrintTitle() {
    console.clear();
    olog.lightYellow.bright('\n' + "======================== JOGO DA FORCA ========================\n");
}
exports.clearScreenAndPrintTitle = clearScreenAndPrintTitle;
function printEndMenu() {
    olog.lightYellow.bright('\n' + "===============================================================\n");
}
exports.printEndMenu = printEndMenu;
function drawHead() {
    olog.lightYellow.bright("        _____");
    olog.lightYellow.bright("       /     \\");
    olog.lightYellow.bright("      | O   O |");
    olog.lightYellow.bright("       \\_____/");
}
exports.drawHead = drawHead;
function drawDeadHead() {
    olog.lightYellow.bright("        _____");
    olog.lightYellow.bright("       /     \\");
    olog.lightYellow.bright("      | X   X |");
    olog.lightYellow.bright("       \\_____/");
}
exports.drawDeadHead = drawDeadHead;
function drawBody() {
    drawHead();
    olog.lightYellow.bright("         | |");
    olog.lightYellow.bright("         | |");
    olog.lightYellow.bright("         | |");
    olog.lightYellow.bright("         |_|");
}
exports.drawBody = drawBody;
function drawBodyAndLeftArm() {
    drawHead();
    olog.lightYellow.bright("       //| |");
    olog.lightYellow.bright("      // | |");
    olog.lightYellow.bright("     //  | |");
    olog.lightYellow.bright("         |_|");
}
exports.drawBodyAndLeftArm = drawBodyAndLeftArm;
function drawBodyAndBothArms() {
    drawHead();
    olog.lightYellow.bright("       //| |\\\\");
    olog.lightYellow.bright("      // | | \\\\");
    olog.lightYellow.bright("     //  | |  \\\\");
    olog.lightYellow.bright("         |_|");
}
exports.drawBodyAndBothArms = drawBodyAndBothArms;
function drawBodyArmsAndLeftLeg() {
    drawHead();
    olog.lightYellow.bright("       //| |\\\\");
    olog.lightYellow.bright("      // | | \\\\");
    olog.lightYellow.bright("     //  | |  \\\\");
    olog.lightYellow.bright("        /|_|");
    olog.lightYellow.bright("       //");
    olog.lightYellow.bright("      //");
}
exports.drawBodyArmsAndLeftLeg = drawBodyArmsAndLeftLeg;
function drawFullBody() {
    drawHead();
    olog.lightYellow.bright("       //| |\\\\");
    olog.lightYellow.bright("      // | | \\\\");
    olog.lightYellow.bright("     //  | |  \\\\");
    olog.lightYellow.bright("        /|_|\\");
    olog.lightYellow.bright("       //   \\\\");
    olog.lightYellow.bright("      //     \\\\");
}
exports.drawFullBody = drawFullBody;
function drawDeadPerson() {
    drawDeadHead();
    olog.lightYellow.bright("       //| |\\\\");
    olog.lightYellow.bright("      // | | \\\\");
    olog.lightYellow.bright("     //  | |  \\\\");
    olog.lightYellow.bright("        /|_|\\");
    olog.lightYellow.bright("       //   \\\\");
    olog.lightYellow.bright("      //     \\\\");
}
exports.drawDeadPerson = drawDeadPerson;
function printBoneco(errosRestantes) {
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
exports.printBoneco = printBoneco;
