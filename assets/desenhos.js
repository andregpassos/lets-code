"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawDeadPerson = exports.drawFullBody = exports.drawBodyArmsAndLeftLeg = exports.drawBodyAndBothArms = exports.drawBodyAndLeftArm = exports.drawBody = exports.drawDeadHead = exports.drawHead = void 0;
const ololog_1 = require("ololog");
const olog = ololog_1.default.configure({ locate: false, time: false });
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
// drawHead();
// drawBody();
// drawBodyAndLeftArm();
// drawBodyAndBothArms();
// drawBodyArmsAndLeftLeg();
// drawFullBody();
// drawDeadPerson();
