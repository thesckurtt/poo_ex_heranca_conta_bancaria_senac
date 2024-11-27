import { ContaPoupanca } from "./ContaPoupanca";
import { screenHome, showInConsole } from "./Screens";

const myPrompt = require("prompt-sync")();

const contaPoupanca = new ContaPoupanca(0.1, 1029374675, 2000);

var mainLoopControl = true;
while (mainLoopControl) {
  screenHome();
  let inpt = myPrompt(">>> ");

  switch (inpt) {
    case "1":
      // console.clear();
      // contaPoupanca.getInfo().saldo
      showInConsole(`Saldo da conta: ${contaPoupanca.getInfo().saldo}`);
      break;
    case "2":
      let inpt = Number(myPrompt("Valor a ser depositado: "));
      contaPoupanca.depositar(inpt);
      break;
    case "3":
      showInConsole(`Número da conta: ${contaPoupanca.getInfo().numeroConta}`);
      showInConsole(`Saldo da conta: ${contaPoupanca.getInfo().saldo}`);
      break;
  }
  if (inpt?.toLocaleLowerCase() == "s" || inpt == "5") {
    mainLoopControl = false;
  }
}
