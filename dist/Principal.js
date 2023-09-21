"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaCorrente_1 = __importDefault(require("./ContaCorrente")); // Importa a classe ContaCorrente
const ContaPoupanca_1 = __importDefault(require("./ContaPoupanca")); // Importa a classe ContaPoupanca
// Exemplo de uso das classes
const contaCorrente = new ContaCorrente_1.default("12345", 1000);
contaCorrente.depositar(500);
contaCorrente.sacar(200);
console.log("Saldo Conta Corrente:", contaCorrente.consultarSaldo());
const contaPoupanca = new ContaPoupanca_1.default("54321", 2000);
contaPoupanca.depositar(1000);
contaPoupanca.aplicarJurosMensais(1.5);
console.log("Saldo Conta Poupança:", contaPoupanca.consultarSaldo());
