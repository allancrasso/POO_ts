"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    constructor(numeroConta, saldoInicial) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
        }
        else {
            console.log("Valor de depósito inválido.");
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
        }
        else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    }
    consultarSaldo() {
        return this.saldo;
    }
}
exports.default = ContaBancaria;
