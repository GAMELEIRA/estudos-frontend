/*+++++++++++++++++++++++++++ TIPAGEM EXPLICITA +++++++++++++++++++++++++++++++*/
/**TIPAGEM DE VARIAVEIS */
const nome: string = 'Gabriel';
const idade: number = 20;
const programador: boolean = true;

/**TIPAGEM PARA A ASSINATURA DO METODO, NOS PARAMETROS E RETORNO */
function dizerOla(nome: string): void {
    console.log(`Olá, ${nome}`)
}

const numero1: bigint = BigInt(100);
const numero2: bigint = 100n;
const simbolo: Symbol = Symbol();

/*+++++++++++++++++++++++++++ INFERENCIA DE TIPOS +++++++++++++++++++++++++++++++*/
let sobrenome = 'Gameleira';