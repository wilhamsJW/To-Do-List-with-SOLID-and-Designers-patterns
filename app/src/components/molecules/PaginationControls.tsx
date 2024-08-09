import React from 'react';
import { Flex, Button, Text, Input, Select } from '@chakra-ui/react';
import { SkipNext, SkipPrevious } from '../../../public/index';
import usePaginationLogic from '../../hooks/usePagination';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';

const PaginationControls: React.FC = () => {
  const {
    statusFilter,
    setStatusFilter,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
    paginatedData,
    localEditTitle,
    localEditDescription,
    handlePageChange,
    handleChange,
    totalPages,
  } = usePaginationLogic();

  const dispatch = useDispatch();
  const { filteredData } = useSelector((state: RootState) => ({
    filteredData: state.register.filteredData,
  }));

  return (
    <Flex direction="column" mt={4}>
      {/* Filtros na página */}
      <>
        <Text textAlign='center' fontSize={filteredData.length < 1 ? '23' : '29'} p='6'>{filteredData.length < 1 ? 'Adicione uma tarefa e organize seu dia' : 'Filtrar Tasks'}</Text>
        {filteredData.length > 0 && <Flex mb={4} direction="column" gap={2}>
          <Input
            value={localEditTitle}
            onChange={(e) => handleChange('localEditTitle', e.target.value)}
            mb={2}
            placeholder="Title"
          />
          <Input
            value={localEditDescription}
            onChange={(e) => handleChange('localEditDescription', e.target.value)}
            mb={2}
            placeholder="Description"
          />
          <Select
            placeholder="Select status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="pending">Pendente</option>
            <option value="completed">Concluída</option>
          </Select>
        </Flex>}
      </>

      {/* Paginação */}
      {filteredData.length > 0 && <Flex justify="space-between" align="center">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage < 2}
        >
          <SkipPrevious />
        </Button>
        <Text>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <SkipNext />
        </Button>
      </Flex>}

      {/* Exibição dos dados filtrados e paginados */}
      {localEditTitle || localEditDescription || statusFilter ? (
        <Flex direction="column" mt={4}>
          <Text textAlign='center' fontSize='27' p='6'>Tasks Filtradas</Text>
          {paginatedData.length > 0 ? (
            <Flex direction="column" mt={4}>
              {paginatedData.map((item) => (
                <Flex key={item.idTask} direction="column" p={2} borderWidth={1} mb={2} color="#171b18">
                <Text fontWeight="bold">Título: {item.title}</Text>
                <Text>Descrição: {item.description}</Text>
                <Text>Status: {item.status === 'completed' ? 'Concluída' : item.status === 'pending' ? 'Pendente' : ''}</Text>
              </Flex>
              ))}
            </Flex>
          ) : (
            <Text textAlign='center' p={4}>Nenhuma task encontrada com os filtros aplicados.</Text>
          )}
        </Flex>
      ) : null}
    </Flex>
  );
};

export default PaginationControls;
