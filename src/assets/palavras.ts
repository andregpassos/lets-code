const palavras: string [] = [
  "MANGA", "CANGACEIRO", "BUCHADA", "CACHORRO", "BOLA", 
  "PENEIRA", "ANGU", "CHOCOLATE", "PATO", "MARCIANO", 
  "TERRA", "CASA", "HOMEM", "MULHER", "GATO", 
  "LOBO", "BOLICHE", "FUTEBOL", "BASQUETE", "OFTALMOTORRINOLARINGOLOGISTA",
  "ITEM", "GRATUITO", "PROIBIDO", "RUBRICA", "RECORDE",
  "MENU", "RAIZ", "HIGIENE", "SOMENTE", "SOZINHO",
  "COCO", "FLOR", "COR", "DOR", "AMOR",
  "GORILA", "TIGRE", "CORUJA", "RIO", "BRINCO",
  "BRINCO", "CURANDEIRO", "CESTA", "PESCA", "TATAME",
  "CANELEIRA", "RECEPCIONISTA", "HALTER", "BANCO", "BANHEIRO",
  "ANCHOVA", "CARANGUEJO", "OSTRA", "SIRI", "VIEIRA",
  "LAGOSTIM", "SARDINHA", "GRANADA", "JAMAICA", "BRASIL",
  "BARBADO", "BAHAMAS", "CARIBE", "ABACAXI", "ARROZ",
  "BATATA", "BISTECA", "CAFTA", "CAIPIRINHA", "CERVEJA",
  "COSTELA", "FRALDINHA", "GALETO", "GRELHA", "PICANHA",
  "PARACLOROBENZILPIRROLIDINONETILBENZIMIDAZOL", "HIPOPOTOMONSTROSESQUIPEDALIOFOBIA",
  "ANTICONSTITUCIONALISSIMAMENTE", "DESALMADO", "FILANTROPO", "AUDACIOSO",
  "IDIOSSINCRASIA", "JOCOSO", "QUIMERA", "UMIDADE", "CHUVA",
  "XAROPE", "ZEBRA", "ZINCO", "ZUMBIDO", "ZANGADO",
  "ZELO", "ZONA", "ZIGOTO", "XADREZ", "XAVECO",
  "XERIFE", "XILOFONE", "SANFONA", "DINAMARCA", "DENTISTA",
  "ELEFANTE", "EDEMA", "EDIFICANTE", "EMPOLGADO", "EMPREITADA",
  "FANTASIA", "FORMA", "GRITANTE", "GARIMPO", "GELADEIRA",
  "GINECOLOGISTA", "HOTEL", "HUMANO", "HABITANTE", "HABILIDADE",
  "IDOSO", "ILHA", "IMAGEM", "IGNORANTE", "JOVIALIDADE",
  "JANELA", "JAMANTA", "JAPONESA", "JARDA", "JOGADA",
  "LABORATORISTA", "LEVANTAMENTO", "LICENSA", "LEONARDO", "LINHA",
  "MANOELA", "MONALISA", "MENTA", "MONTREAL", "MINGUANTE",
  "NARIZ", "NORUEGA", "NASCENTE", "NOME", "NAVALHA",
  "HOLOFOTE", "OBJETIVO", "OBSCENO", "OMITIR", "OPORTUNISTA",
  "ORDEM", "QUADRADO", "QUARTO", "QUEIXO", "QUANTIDADE",
  "QUEBRAR", "QUASE", "REDUZIDO", "RASTRO", "RINOCERANTE",
  "RUPTURA", "SARCASMO", "SALIENTAR", "SENSACIONAL", "SENTIMENTO",
  "SIGNIFICADO", "SERENIDADE", "TEMPERO", "TAMAREIRA", "TRAJETO",
  "TROCADILHO", "TOMATE", "TORTILHA", "UNILATERALMENTE", "ULTRAPASSAR",
  "USUAL", "URGENTE", "UNIVERSAL", "VEXAME", "VENTRE",
  "VAGABUNDO", "VEREDITO", "VULTO", "VOCABULARIZAR", "VINHO",
];

export function getPalavraForca(): string {
  let numeroAleatorio: number = Math.round(Math.random()*palavras.length);

  return palavras[numeroAleatorio];
}