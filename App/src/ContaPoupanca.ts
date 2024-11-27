import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria{
  protected taxaDeJuros: number;
  
  constructor(taxaDeJuros: number, numeroConta: number, saldo: number){
    super(numeroConta, saldo);
    this.taxaDeJuros = taxaDeJuros;
  }

  aplicarrendimento(){
    this.saldo += ((this.taxaDeJuros / 100) * 100) + this.saldo;
    return `O rendimento foi de ${ ((this.taxaDeJuros / 100) * 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Saldo Atual: ${(this.saldo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
  }
}