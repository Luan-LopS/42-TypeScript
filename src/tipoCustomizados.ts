type aluno = {
    nome: string,
    cursos?: string[],
    idade: number
}

const alunos = [
    {
        nome: 'Carlos',
        cursos: ['Front-end', 'UX/UI'],
        idade: 27
    },
    {
        nome: 'Ana',
        cursos: ['Front-end', 'Python'],
        idade: 34
    }
]

alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 20
})

const novoAluno: aluno ={
    nome: 'Lucas',
    idade: 40
}

function exibeAluno(aluno: aluno){
    console.log(aluno.nome)
}