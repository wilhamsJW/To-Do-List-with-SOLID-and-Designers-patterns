import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setEditTitle, setEditDescription, setFilteredData } from '@/store/slices/registerSlice';

const useHandleChange = () => {
  const dispatch = useDispatch();
  const { loggedUser, editItemId } = useSelector((state: RootState) => ({
    loggedUser: state.register.loggedUser,
    editItemId: state.register.editItemId,
  }));

  const handleChange = (field: 'editTitle' | 'editDescription', value: string) => {
    switch (field) {
      case 'editTitle':
        dispatch(setEditTitle(value));
        break;
      case 'editDescription':
        dispatch(setEditDescription(value));
        break;
    }

    if (loggedUser) {
      // Filtra tasks logado
      const allSelectedTasks = JSON.parse(localStorage.getItem('allListNotes') || '[]');
      const userTasksLogged = allSelectedTasks.filter((item: any) => item.userId === loggedUser.email);

      // Atualiza as tasks do usuário logado
      const updatedUserTasks = userTasksLogged.map((d: any) =>
        d.idTask === editItemId
          ? { 
              ...d, 
              title: field === 'editTitle' ? value : d.title, 
              description: field === 'editDescription' ? value : d.description 
            }
          : d
      );

      // Atualiza o array completo das tasks, mantendo os dados de outros usuários
      const updatedAllTasks = allSelectedTasks.filter((item: any) => item.userId !== loggedUser.email)
        .concat(updatedUserTasks);

      // Atualiza o localStorage com o array atualizado
      localStorage.setItem('allListNotes', JSON.stringify(updatedAllTasks));

      // Atualiza o estado com as tarefas atualizadas para o usuário logado
      dispatch(setFilteredData(updatedUserTasks));
    }
  };

  return handleChange;
};

export default useHandleChange;
