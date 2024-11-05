//A entrega deste exercício consiste em:

//• Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, e 
//uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
//• No repositório do curso crie uma branch chamada exercicio_ts e armaze o código TS escrito nesta branch, nos envie o link através da plataforma.

function multiplica(a:number, b:number): number{
    return a * b
}

function saudacao(name: string, total:number): string | number{
    return `Boa tarde ${name} o total foi de ${total}`
}

const total: number = multiplica(30,4)
console.log(total)


const resposta: string | number = saudacao('Luan', total)
console.log(resposta)

