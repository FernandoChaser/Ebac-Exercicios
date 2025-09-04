// Array de alunos
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Pedro", nota: 5 },
    { nome: "Carla", nota: 7 },
    { nome: "João", nota: 4 },
    { nome: "Mariana", nota: 9 }
];

// Função para filtrar alunos aprovados (nota >= 6)
const filtrarAprovados = (lista) => lista.filter(aluno => aluno.nota >= 6);

// Executando
const aprovados = filtrarAprovados(alunos);
console.log("Alunos aprovados:", aprovados);
