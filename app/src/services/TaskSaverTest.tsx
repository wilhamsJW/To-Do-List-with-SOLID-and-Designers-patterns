import { TaskSaver } from '../interface/index';

{/**
  O código está projetado para seguir o princípio de Single Responsibility Principle (SRP). 
  A classe LocalStorageTaskSaver é responsável apenas por salvar e atualizar tarefas no 
  localStorage. Se a necessidade mudar, como usar um servidor em vez de localStorage,
   a implementação pode ser alterada sem impactar outras partes do código.
*/}

export class LocalStorageTaskSaver implements TaskSaver {
  save(taskId: string, title: string, description: string, loggedUser: string | ''): void {
    if (typeof window !== 'undefined') { 
      const allSelectedTasks = JSON.parse(localStorage.getItem('allListNotes') || '[]');
      const loggedUserEmail = loggedUser
      
      // Filtra as tasks do usuário logado
      const userTasks = allSelectedTasks.filter((item: any) => item.userId == loggedUserEmail);
      
      // Atualiza os dados da task que está sendo editada
      const updatedUserTasks = userTasks.map((item: any) =>
        item.idTask == taskId
          ? { ...item, title, description }
          : item
      );
      
      // Atualiza o array completo de tasks, mantendo os dados de outros usuários
      // const updatedAllTasks = allSelectedTasks.filter((item: any) => item.userId !== loggedUserEmail)
      //   .concat(updatedUserTasks);
      const updatedAllTasks = userTasks.concat(updatedUserTasks)
      
      // Atualiza o localStorage com as tasks atualizadas mas podemos alterar para qq outro servidor
      // Esse é o conceito de SOLID
      localStorage.setItem('allListNotes', JSON.stringify(updatedAllTasks));
    }
  }
}
