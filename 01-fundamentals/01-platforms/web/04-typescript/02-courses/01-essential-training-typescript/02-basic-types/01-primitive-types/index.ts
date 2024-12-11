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

/*+++++++++++++++++++++++++++++TIPOS LITERAIS++++++++++++++++++++++++ */
//UM TIPO LITERAL EH UTILIZADO PARA DAR UM ESCOPO FIXO PARA UMA VARIAVEL
//ELE SERA UM SUBCONJUTO DO TIPO PRIMITIVO
let tv: 'SBT' = "SBT";
let PI: 3.14 = 3.14;

//TIPO GENERICO
const clube: string = 'Corinthians';

//QUALQUER TIPO PRIMITIVO EH UM SUJCONJUNTO DE UNKNOWN
const numero3: unknown = 1;
const nome1: unknown = 'Gabriel';
const teraPizzahHoje: unknown = true; 

{
    const nome: string = 'Gabriel'
    let comida: {
        nome: string
        preco?: string | number; //OPCIONAL E PODE ASSUMIR DOIS TIPOS NUMERO OU STRING
        dizerNome: () => 'Gabriel'
    };
    
    //GARANTO QUE A VARIAVEL NAO SERA UNDEFINED E DEIXO OPCIONAL O TO STRING CASO O PRECO SEJA NUMERICO
    console.log(comida!.preco?.toString())
}

const test = (a: any) => {} 