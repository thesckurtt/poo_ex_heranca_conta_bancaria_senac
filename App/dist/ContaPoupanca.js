"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const ContaBancaria_1 = require("./ContaBancaria");
class ContaPoupanca extends ContaBancaria_1.ContaBancaria {
    constructor(taxaDeJuros, numeroConta, saldo) {
        super(numeroConta, saldo);
        this.taxaDeJuros = taxaDeJuros;
    }
    aplicarrendimento() {
        this.saldo += ((this.taxaDeJuros / 100) * 100) + this.saldo;
        return `O rendimento foi de ${((this.taxaDeJuros / 100) * 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Saldo Atual: ${(this.saldo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    }
}
exports.ContaPoupanca = ContaPoupanca;
