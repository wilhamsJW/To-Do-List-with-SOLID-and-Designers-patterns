import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setListTask, setEditItemId } from '@/store/slices/registerSlice';
import { Toast, useToast } from '@chakra-ui/react';

export const useHandleSave = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { loggedUser, editItemId, editTitle, editDescription } = useSelector((state: RootState) => ({
    loggedUser: state.register.loggedUser,
    editItemId: state.register.editItemId,
    editTitle: state.register.editTitle,
    editDescription: state.register.editDescription,
  }));

  const handleSave = () => {
    if (loggedUser) {
      // Obtém todas as tasks do localStorage
      const allSelectedTasks = JSON.parse(localStorage.getItem('allListNotes') || '[]');

      // Filtra as tasks do usuário logado
      const userTasks = allSelectedTasks.filter((item: any) => item.userId === loggedUser.email);

      // Atualiza os dados da task que está sendo editada
      const updatedUserTasks = userTasks.map((item: any) =>
        item.id === editItemId
          ? { ...item, title: editTitle, description: editDescription }
          : item
      );

      // Atualiza o array completo de tasks, mantendo os dados de outros usuários
      const updatedAllTasks = allSelectedTasks
        .filter((item: any) => item.userId !== loggedUser.email)
        .concat(updatedUserTasks);

      // Atualiza o localStorage com as tasks atualizadas
      localStorage.setItem('allListNotes', JSON.stringify(updatedAllTasks));

      // Atualiza o estado com as tasks atualizadas para o usuário logado
      dispatch(setListTask(updatedUserTasks));
      dispatch(setEditItemId(''));

      // Exibe mensagem de sucesso
      toast({
        title: "As alterações foram salvas com sucesso.",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return handleSave;
};
