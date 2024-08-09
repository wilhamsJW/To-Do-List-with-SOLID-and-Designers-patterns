import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setListTask, setFilteredData } from '@/store/slices/registerSlice';
import { useToast } from '@chakra-ui/react';

export const useHandleDelete = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { loggedUser } = useSelector((state: RootState) => ({
    loggedUser: state.register.loggedUser,
  }));

  const handleDelete = (id: string) => {

    if (loggedUser) {
      // Obtém todas as tasks do localStorage
      const allSelectedTasks = JSON.parse(localStorage.getItem('allListNotes') || '[]');

      // Filtra apenas as tasks do usuário logado
      const userTaksLogged = allSelectedTasks.filter((item: any) => item.userId == loggedUser.email);

      // Remove a estação com o id fornecido apenas para o usuário logado
      const updatedUserTasks = userTaksLogged.filter((item: any) => item.idTask !== id);

      // Atualiza o array completo de tasks, mantendo os dados de outros usuários
      const updatedAllTaks = allSelectedTasks.filter((item: any) => item.userId !== loggedUser.email)
        .concat(updatedUserTasks);

      // Atualiza o localStorage com as tasks atualizadas
      localStorage.setItem('allListNotes', JSON.stringify(updatedAllTaks));

      // Atualiza o estado com as tasks atualizadas para o usuário logado
      dispatch(setListTask(updatedUserTasks));
      dispatch(setFilteredData(updatedUserTasks));

      toast({
        title: "Task excluída",
        description: "",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return handleDelete;
};
