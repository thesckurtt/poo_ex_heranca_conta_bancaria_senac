"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(numeroConta, saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return { status: true, mensagem: `O valor ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} foi sacado de sua conta. Saldo Atual: ${(this.saldo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}` };
        }
        else {
            return { status: false, mensagem: `Não há saldo suficiente para realizar essa operação.` };
        }
    }
    getInfo() {
        return {
            numeroConta: this.numeroConta,
            saldo: (this.saldo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        };
    }
}
exports.ContaBancaria = ContaBancaria;
