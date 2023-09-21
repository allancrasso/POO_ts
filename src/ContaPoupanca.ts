import ContaBancaria from './ContaBancaria';

export default class ContaPoupanca extends ContaBancaria {
    constructor(numeroConta: string, saldoInicial: number) {
        super(numeroConta, saldoInicial);
    }

    aplicarJurosMensais(taxaJuros: number): void {
        const juros = this.consultarSaldo() * (taxaJuros / 100);
        this.depositar(juros);
        console.log(`Juros de R$${juros} aplicados. Saldo atual: R$${this.consultarSaldo()}`);
    }
}
