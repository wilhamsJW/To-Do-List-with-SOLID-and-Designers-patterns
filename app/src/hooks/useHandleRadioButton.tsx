import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setFilteredData, setPendenteOrCompleted } from '@/store/slices/registerSlice';

// Hook para lidar com a mudança do valor selecionado
export const useHandleChangeRadioButton = () => {
  const dispatch = useDispatch();
  const { loggedUser, pendenteOrCompleted } = useSelector((state: RootState) => ({
    loggedUser: state.register.loggedUser,
    pendenteOrCompleted: state.register.pendenteOrCompleted
}));

  const handleChangeRadioButton = (value: string, taskId: string) => {
    dispatch(setPendenteOrCompleted(value));

    if (loggedUser) {
      // Filtra a lista de tarefas para o usuário logado
      const allSelectedTasks = JSON.parse(localStorage.getItem('allListNotes') || '[]');
      const userTasksLogged = allSelectedTasks.filter((item: any) => item.userId === loggedUser.email);

      // Atualiza o status da tarefa específica
      const updatedUserTasks = userTasksLogged.map((item: any) =>
        item.idTask === taskId
          ? { ...item, status: value === '1' ? 'pending' : value === '2' ? 'completed' : value === '' ? '' : '' }
          : item
      );
      localStorage.setItem('allListNotes', JSON.stringify(updatedUserTasks));
      dispatch(setFilteredData(updatedUserTasks));
    }
  };

  return {
    handleChangeRadioButton,
    pendenteOrCompleted,
  };
};
