"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.screenHome = screenHome;
exports.showInConsole = showInConsole;
function screenHome() {
    console.log("=====================");
    console.log("  SISTEMA BANCÁRIO  ");
    console.log("=====================");
    console.log("1. Ver saldo");
    console.log("2. Depositar");
    console.log("3. Informações");
    console.log("4. Sacar");
    console.log("5. Sair");
    console.log("=====================");
}
function showInConsole(mensagem) {
    console.log(mensagem);
}
