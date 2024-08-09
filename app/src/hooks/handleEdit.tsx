import { Dispatch } from 'redux';
import { setEditItemId, setEditTitle, setEditDescription } from '@/store/slices/registerSlice';
import { DataNote } from '../interface/index'; // Ajuste o caminho conforme sua estrutura de tipos

// Função que retorna uma ação para ser usada com dispatch
export const handleEdit = (item: DataNote) => (dispatch: Dispatch) => {
  dispatch(setEditItemId(item.idTask ?? ''));
  dispatch(setEditTitle(item.title));
  dispatch(setEditDescription(item.description));
};
