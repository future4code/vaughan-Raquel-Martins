type Todos = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
};


export let afazeres : Todos[] = [
  {
    userId: 1,
    id: '1',
    title: 'Fazer almoço',
    completed: false
  },
  {
    userId: 2,
    id: '2',
    title: 'Fazer atividade',
    completed: true
  },
  {
    userId: 3,
    id: '3',
    title: 'Passear com cachorro',
    completed: false
  },
  {
    userId: 4,
    id: '4',
    title: 'Colocar comida para os animais',
    completed: true
  }
] 