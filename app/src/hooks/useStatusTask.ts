import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setIsStatusCompleted, setIsStatusPending, setAllTasksk } from '../store/slices/registerSlice';

export function useStatusTask() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state: RootState) => state.register.loggedUser);

  // Função para atualizar o status da task
  const updateStatus = (id: string) => {
    // Filtra tasks logado
    const allSelectedTasks = JSON.parse(localStorage.getItem('allListNotes') || '[]');
    const userTasksLogged = allSelectedTasks.filter((item: any) => item.userId === loggedUser?.email);
    
    // Atualiza status de tasks do usuário logado
    const updatedUserTasks = userTasksLogged.map((item: any) =>
      item.idTask === id
        ? { ...item, status: item.status === 'completed' ? '' : 'completed' }
        : item
    );
    localStorage.setItem('allListNotes', JSON.stringify(updatedUserTasks));

    dispatch(setAllTasksk(updatedUserTasks));
    dispatch(setIsStatusPending(true))
  };

    // Função para atualizar o status da task
    const updateStatusPending = (id: string) => {
      // Filtra tasks logado
      const allSelectedTasks = JSON.parse(localStorage.getItem('allListNotes') || '[]');
      const userTasksLogged = allSelectedTasks.filter((item: any) => item.userId === loggedUser?.email);
      
      // Atualiza status de tasks do usuário logado
      const updatedUserTasks = userTasksLogged.map((item: any) =>
        item.idTask === id
          ? { ...item, status: item.status === 'completed' ? '' : 'completed' }
          : item
      );
      localStorage.setItem('allListNotes', JSON.stringify(updatedUserTasks));
  
      dispatch(setAllTasksk(updatedUserTasks));
      dispatch(setIsStatusPending(true))
    };

  return { updateStatus,  };
}
