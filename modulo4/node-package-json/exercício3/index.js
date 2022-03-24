const listaDeTarefas = {tarefas: [
	"Lavar a louça",
]}
const novaTarefa = process.argv[2]


listaDeTarefas.tarefas.push(novaTarefa)

console.log("Tarefa adicionada com sucesso")

console.log(listaDeTarefas)