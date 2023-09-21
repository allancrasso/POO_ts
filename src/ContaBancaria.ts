//Definição da super classe
class ContaBancaria {
    public saldo: number; // definindo variável com o seu respectivo encapsulamento e tipo
    public numeroConta: string;

    /* A seguir definimos o método construtor para que possamos instanciar a classe ContaBancária 
       Por conseguinte, precisamos fazer referência aos atributos definidos para que eles possam ser 
       passados por arqumentos.*/
    constructor(numeroConta: string, saldoInicial: number) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }
    /*Definição do método depositar*/
    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    /*Definição do método sacar*/
    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    }
    /*Definição do método consultarSaldo*/

    consultarSaldo(): number {
        return this.saldo;
    }
}

export default ContaBancaria;
