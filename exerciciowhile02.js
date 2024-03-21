import rl, { questionInt } from 'readline-sync';

let numAlunos = rl.questionInt("Informe o número de alunos da turma: ")


let somaMedias = 0;
let contadorAlunos = 1;


while (contadorAlunos <= numAlunos) {
    console.log(`Aluno ${contadorAlunos}:`);

   
    let somaNotas = 0;
    let contadorBimestres = 1;


    while (contadorBimestres <= 4) {
        let nota = rl.questionInt(`Digite a nota do ${contadorBimestres}º bimestre para o aluno ${contadorAlunos}: `);
        somaNotas = somaNotas + nota;
        contadorBimestres++;
    }

    
    let mediaAluno = somaNotas / 4;

     
    somaMedias += mediaAluno;

    
    console.log(`Média do aluno ${contadorAlunos}: ${mediaAluno.toFixed(2)}`);

    
    contadorAlunos++;
}


let mediaGeralTurma = somaMedias / numAlunos;


console.log(`Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);