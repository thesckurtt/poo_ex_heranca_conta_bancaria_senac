"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaEspecial = void 0;
const ContaBancaria_1 = require("./ContaBancaria");
class ContaEspecial extends ContaBancaria_1.ContaBancaria {
    constructor(limite, numeroConta, saldo) {
        super(numeroConta, saldo);
        this.limite = limite;
    }
    sacar(valor) {
        if (valor <= this.saldo + this.limite) {
            this.saldo -= valor;
            return { status: true, mensagem: `O valor ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} foi sacado de sua conta. Saldo Atual: ${this.saldo}` };
        }
        else {
            return { status: false, mensagem: `Não há saldo suficiente ou limite disponível para realizar essa operação.` };
        }
    }
}
exports.ContaEspecial = ContaEspecial;
