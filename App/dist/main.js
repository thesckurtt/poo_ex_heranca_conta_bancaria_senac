"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContaPoupanca_1 = require("./ContaPoupanca");
const Screens_1 = require("./Screens");
const myPrompt = require("prompt-sync")();
const contaPoupanca = new ContaPoupanca_1.ContaPoupanca(0.1, 1029374675, 2000);
var mainLoopControl = true;
while (mainLoopControl) {
    (0, Screens_1.screenHome)();
    let inpt = myPrompt(">>> ");
    switch (inpt) {
        case "1":
            // console.clear();
            // contaPoupanca.getInfo().saldo
            (0, Screens_1.showInConsole)(`Saldo da conta: ${contaPoupanca.getInfo().saldo}`);
            break;
        case "2":
            let inpt = Number(myPrompt("Valor a ser depositado: "));
            contaPoupanca.depositar(inpt);
            break;
        case "3":
            (0, Screens_1.showInConsole)(`Número da conta: ${contaPoupanca.getInfo().numeroConta}`);
            (0, Screens_1.showInConsole)(`Saldo da conta: ${contaPoupanca.getInfo().saldo}`);
            break;
    }
    if ((inpt === null || inpt === void 0 ? void 0 : inpt.toLocaleLowerCase()) == "s" || inpt == "5") {
        mainLoopControl = false;
    }
}
