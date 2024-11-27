import { ContaBancaria, type TypeResponseOBJ } from "./ContaBancaria";

export class ContaEspecial extends ContaBancaria{
  protected limite: number;
  

  constructor(limite: number, numeroConta: number, saldo: number){
    super(numeroConta, saldo);
    this.limite = limite;
  }

  sacar(valor: number) : TypeResponseOBJ{
    if(valor <= this.saldo + this.limite){
      this.saldo -= valor;
      return { status: true, mensagem: `O valor ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} foi sacado de sua conta. Saldo Atual: ${this.saldo}`}
    }else{
      return { status: false, mensagem: `Não há saldo suficiente ou limite disponível para realizar essa operação.`}
    }
  }
}