const palavras: string [] = [
  "MANGA", "CANGACEIRO", "BUCHADA", "CACHORRO", "BOLA", 
  "PENEIRA", "ANGU", "CHOCOLATE", "PATO", "MARCIANO", 
  "TERRA", "CASA", "HOMEM", "MULHER", "GATO", 
  "LOBO", "BOLICHE", "FUTEBOL", "BASQUETE", "OFTALMOTORRINOLARINGOLOGISTA"
];

export function getPalavraForca(): string {
  let numeroAleatorio: number = Math.ceil(Math.random()*19 +1);

  return palavras[numeroAleatorio];
}