import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedUser, setIsAddNewTask, setAllTasksk } from '../store/slices/registerSlice';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { DataNote } from '../interface/index';
import { useCallback } from 'react';
import { RootState } from '@/store';
const { v4: uuidv4 } = require('uuid');

const useTaskForm = (reset: () => void, onClose: () => void) => {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state: RootState) => ({
    loggedUser: state.register.loggedUser
  }));

  // Configura o estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setLoggedUser(user));
    });
    return () => unsubscribe(); // Limpa o listener quando o componente é desmontado
  }, [dispatch]);

  const onSubmit = useCallback((data: DataNote) => {
    const dataNotes: DataNote = {
      ...data,
      userId: loggedUser?.email ?? '---',
      idTask: uuidv4(),
      status: ''
    };

    let allSelectedTasks: DataNote[] = [];

    try {
      const storedTasks = localStorage.getItem('allListNotes');
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        if (Array.isArray(parsedTasks) && parsedTasks.every((item: any) => typeof item.title === 'string' && typeof item.description === 'string')) {
          allSelectedTasks = parsedTasks;
        }
      }
    } catch (error) {
      console.error("Erro ao ler tarefas do localStorage", error);
    }

    const updatedTasks: DataNote[] = [...allSelectedTasks, dataNotes];
    localStorage.setItem('allListNotes', JSON.stringify(updatedTasks));
    dispatch(setAllTasksk(updatedTasks));
    dispatch(setIsAddNewTask(true));

    reset();
    onClose();
  }, [dispatch, loggedUser, reset, onClose]);

  return { onSubmit };
};

export default useTaskForm;
