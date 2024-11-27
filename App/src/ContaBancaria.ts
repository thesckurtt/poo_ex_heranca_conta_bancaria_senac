export type TypeResponseOBJ = {status: boolean, mensagem: string}

export class ContaBancaria{ 

  protected numeroConta: number;
  protected saldo: number;

  constructor(numeroConta: number, saldo: number){
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

   depositar(valor: number):void{
      this.saldo += valor;
   }

   sacar(valor: number) : TypeResponseOBJ{
    if(valor <= this.saldo){
      this.saldo -= valor;
      return { status: true, mensagem: `O valor ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} foi sacado de sua conta. Saldo Atual: ${(this.saldo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
    }else{
      return { status: false, mensagem: `Não há saldo suficiente para realizar essa operação.`}
    }
   }

   getInfo(){
    return {
      numeroConta: this.numeroConta,
      saldo: (this.saldo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
   }
}
