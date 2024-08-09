import { useEffect } from 'react';
import { filterByEmail } from '../utils/filterByEmail'
import { useDispatch } from 'react-redux';
import { setFilteredData } from '../store/slices/registerSlice'

export function useFetchTasks(loggedUser: any) {
  const dispatch = useDispatch();
    
  useEffect(() => {
    // Função que será executada sempre que o componente for montado ou recarregado
    const fetchTasks = () => {
      try {
        if (typeof window !== 'undefined') { // Verifica se estamos no ambiente do cliente
          const data = localStorage.getItem('allListNotes');
          
          if (data) {
            const allSelectedTasks = JSON.parse(data);
            const userByAllSelectedTasks = filterByEmail(allSelectedTasks, loggedUser?.email ?? '');
            if (userByAllSelectedTasks) {
              dispatch(setFilteredData(userByAllSelectedTasks));
            } 
          }
        }
      } catch (error) {
        console.error('Erro ao acessar localStorage:', error);
      }
    };

    fetchTasks();

    // O array de dependências está vazio, então useEffect será executado apenas na montagem
  }, [loggedUser, setFilteredData]); // Dependências ajustadas
}
