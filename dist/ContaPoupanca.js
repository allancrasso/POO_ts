"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = __importDefault(require("./ContaBancaria"));
class ContaPoupanca extends ContaBancaria_1.default {
    constructor(numeroConta, saldoInicial) {
        super(numeroConta, saldoInicial);
    }
    aplicarJurosMensais(taxaJuros) {
        const juros = this.consultarSaldo() * (taxaJuros / 100);
        this.depositar(juros);
        console.log(`Juros de R$${juros} aplicados. Saldo atual: R$${this.consultarSaldo()}`);
    }
}
exports.default = ContaPoupanca;
