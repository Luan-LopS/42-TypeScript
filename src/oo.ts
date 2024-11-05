class Pessoa{
    nome: string
    renda?: number

    constructor(nome: string, renda?: number){
        this.nome = nome
        this.renda = renda
    }

    dizOla(): string{
        return `${this.nome} dis oi`
    }
}

class ContaBancaria {
    protected saldo: number = 0
    public conta: number

    constructor(conta:number){
        this.conta = conta
    }

    static retornoNumeroDoBanco(){
        return 125
    }

    private getSaldo(){
        return this.saldo
    }

    depositar(valor: number){
        this.saldo += valor
    }
}

class ConstaBancariaPessoalFisica extends ContaBancaria{
    depositar(valor: number): void {
        this.saldo = valor * 2
    }
}


const contaPedro = new ConstaBancariaPessoalFisica(123456)
