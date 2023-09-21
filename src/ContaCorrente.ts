import ContaBancaria from './ContaBancaria';// import do arquivo ContaBancaria, isso é do JS independente do TS

// A seguir sim, temos a definição da classe ContaCorrente que pode herdar atributos de ContaBancaria
export default class ContaCorrente extends ContaBancaria {
    constructor(numeroConta: string, saldoInicial: number) {
        super(numeroConta, saldoInicial);//"Super" é utilizado para chamar o construtor da classe pai 
    }

    sacar(valor: number): void {
        const taxaSaque = 2;
        super.sacar(valor + taxaSaque);
    }
}


