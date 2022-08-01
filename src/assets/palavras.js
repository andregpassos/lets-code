"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPalavraForca = void 0;
const palavras = [
    "MANGA", "CANGACEIRO", "BUCHADA", "CACHORRO", "BOLA",
    "PENEIRA", "ANGU", "CHOCOLATE", "PATO", "MARCIANO",
    "TERRA", "CASA", "HOMEM", "MULHER", "GATO",
    "LOBO", "BOLICHE", "FUTEBOL", "BASQUETE", "OFTALMOTORRINOLARINGOLOGISTA"
];
function getPalavraForca() {
    let numeroAleatorio = Math.ceil(Math.random() * 19 + 1);
    return palavras[numeroAleatorio];
}
exports.getPalavraForca = getPalavraForca;
