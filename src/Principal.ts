import ContaCorrente from './ContaCorrente'; // Importa a classe ContaCorrente
import ContaPoupanca from './ContaPoupanca'; // Importa a classe ContaPoupanca

// Instância das classes conta corrente e conta poupança 
const contaCorrente = new ContaCorrente("12345", 1000);
contaCorrente.depositar(500);
contaCorrente.sacar(200);
console.log("Saldo Conta Corrente:", contaCorrente.consultarSaldo());

const contaPoupanca = new ContaPoupanca("54321", 2000);
contaPoupanca.depositar(1000);
contaPoupanca.aplicarJurosMensais(1.5);
console.log("Saldo Conta Poupança:", contaPoupanca.consultarSaldo());
