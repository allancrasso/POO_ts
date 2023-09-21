"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = __importDefault(require("./ContaBancaria"));
class ContaCorrente extends ContaBancaria_1.default {
    constructor(numeroConta, saldoInicial) {
        super(numeroConta, saldoInicial);
    }
    sacar(valor) {
        const taxaSaque = 2;
        super.sacar(valor + taxaSaque);
    }
}
exports.default = ContaCorrente;
