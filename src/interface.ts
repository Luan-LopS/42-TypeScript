class Conta{
    numeroDaConta: number
    saldo: number = 0

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta
    }
}

class ContaSalario extends Conta{
    depositar(valor: number){
        this.saldo += valor
    }
}


interface ITranssacional{
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTranferencia: number
}

interface IExemplo2{
    cnpj: number
}

class ContaConrrente extends Conta implements ITranssacional{
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += valor
        return true
    };
    taxaTranferencia: number = 0;

}