console.log("Trabalho Final - Aula 03\n");

const aluno = {
  nome: "Sirlande",
  idade: 19,
  curso: "Sistemas de Informação",
  disciplinas: ["Banco de Dados", "Programação Web", "Estrutura de Dados"]
};

console.log("Objeto criado:");
console.log(aluno);
console.log("");

console.log("Propriedades do objeto:");

for (let prop in aluno) {
  console.log(prop + ": " + aluno[prop]);
}

console.log("");

console.log("Disciplinas do aluno:");

for (let disciplina of aluno.disciplinas) {
  console.log(disciplina);
}

console.log("");

const ref1 = aluno;
console.log("Comparação por referência:", aluno === ref1);

const ref2 = {
  nome: "Sirlande",
  idade: 19,
  curso: "Sistemas de Informação",
  disciplinas: ["Banco de Dados", "Programação Web", "Estrutura de Dados"]
};

console.log("Comparação com objeto diferente:", aluno === ref2);

console.log("");

const copiaReferencia = aluno;
copiaReferencia.idade = 20;

console.log("Idade no objeto original após alteração:", aluno.idade);

console.log("");

const copiaSpread = { ...aluno };
copiaSpread.nome = "Outro Aluno";

console.log("Nome original:", aluno.nome);
console.log("Nome da cópia:", copiaSpread.nome);

console.log("");

const jsonAluno = JSON.stringify(aluno);
console.log("Objeto em JSON:");
console.log(jsonAluno);