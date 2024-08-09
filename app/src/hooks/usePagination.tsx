import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
const usePaginationLogic = () => {
  const filteredData = useSelector((state: RootState) => state.register.filteredData);

  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [paginatedData, setPaginatedData] = useState<any[]>([]);
  const [localEditTitle, setLocalEditTitle] = useState('');
  const [localEditDescription, setLocalEditDescription] = useState('');

  // Função para aplicar filtros e paginar os dados
  const applyFiltersAndPagination = () => {
    let allData = filteredData; // Dados completos do estado global

    // Filtragem
    if (localEditTitle || localEditDescription || statusFilter) {
      allData = allData.filter((item) => {
        const matchesTitle = item.title.toLowerCase().includes(localEditTitle.toLowerCase());
        const matchesDescription = item.description.toLowerCase().includes(localEditDescription.toLowerCase());
        const matchesStatus = statusFilter === '' || item.status === statusFilter;

        return matchesTitle && matchesDescription && matchesStatus;
      });
    }

    // Paginação
    const paginated = allData.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );

    setPaginatedData(paginated);
  };

  useEffect(() => {
    applyFiltersAndPagination();
  }, [localEditTitle, localEditDescription, statusFilter, currentPage, rowsPerPage, filteredData]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= Math.ceil(filteredData.length / rowsPerPage)) {
      setCurrentPage(page);
    }
  };

  const handleChange = (field: 'localEditTitle' | 'localEditDescription', value: string) => {
    if (field === 'localEditTitle') {
      setLocalEditTitle(value);
    } else if (field === 'localEditDescription') {
      setLocalEditDescription(value);
    }
  };

  // Número total de páginas
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return {
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
  };
};

export default usePaginationLogic;
