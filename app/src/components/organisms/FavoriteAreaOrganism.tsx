import { useState, useEffect, useRef } from 'react';
import { Spinner, RadioGroup, Stack, Radio, Box, Table, Tbody, Tr, Td, Text, Button, Flex, useTheme, useColorMode, IconButton, useToast, Input, useBreakpointValue } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import MotionMolecule from '../../components/molecules/MotionMolecule';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import truncateText from '../../utils/truncateText'
import { useAnimate } from 'framer-motion';
import { DataNote } from '../../interface/index'
import { useStatusTask } from '../../hooks/useStatusTask'
import { useFetchTasks } from '../../hooks/useFetchTasks'
import { filterByEmail } from '../../utils/filterByEmail'
import { setEditItemId, setFilteredData } from '../../store/slices/registerSlice'
import { useHandleSave } from '../../hooks/useHandleSave'
import { useHandleDelete } from '../../hooks/useDeleteTask'
import { handleEdit } from '../../hooks/handleEdit'
import { useHandleChangeRadioButton } from '../../hooks/useHandleRadioButton'
import useHandleChange from '../../hooks/useHandleChange'

import PaginationControls from '../molecules/PaginationControls'

interface FavoriteAreaOrganismProps {
  filter?: string;
}

const FavoriteAreaOrganism: React.FC<FavoriteAreaOrganismProps> = ({ filter = '' }) => {
  // states
  const [listTask, setListTask] = useState<DataNote[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // theme
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const textColor = theme.colors[colorMode].secondary;
  const { colors } = theme;

  // BreakPoint
  const fontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const maxNameLength = useBreakpointValue({ base: 100, md: 100 });

  const toast = useToast();

  const scopeRefButton = useRef<HTMLButtonElement>(null);
  const [scope, animate] = useAnimate();

  const { updateStatus } = useStatusTask()

  const handleSave = useHandleSave();
  const handleDelete = useHandleDelete()
  const handleChange = useHandleChange()
  const { handleChangeRadioButton, pendenteOrCompleted } = useHandleChangeRadioButton()

  const handleEditTask = (item: DataNote) => {
    handleEdit(item)(dispatch)
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // redux
  const dispatch = useDispatch();
  const { loggedUser, isAddNewTask, allTasks, editItemId, editTitle, editDescription, filteredData, isLoading } = useSelector((state: RootState) => ({
    loggedUser: state.register.loggedUser,
    isAddNewTask: state.register.isAddNewTask,
    allTasks: state.register.allTasks,
    isStatusPending: state.register.isStatusPending,
    editItemId: state.register.editItemId,
    editTitle: state.register.editTitle,
    editDescription: state.register.editDescription,
    filteredData: state.register.filteredData,
    isLoading: state.register.isLoading
  }));

  useFetchTasks(loggedUser)

  useEffect(() => {
    if (scopeRefButton.current) {
      // Define a animação pulsante
      animate(scopeRefButton.current, { scale: [1, 2, 1] }, {
        duration: 2.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut'
      });
    }
  }, [animate]);

  //  carregando dados assim que o usário logar
  useEffect(() => {
    if (loggedUser) {
      const allSelectedTasks = JSON.parse(localStorage.getItem('allListNotes') || '[]');
      const userByAllSelectedTasks = filterByEmail(allSelectedTasks, loggedUser.email)
      dispatch(setFilteredData(userByAllSelectedTasks))
    }
  }, []);

  // Dispara msg se o usuário não tiver logado
  useEffect(() => {
    const userId = loggedUser?.email;
    if (!userId) {
      console.error("Usuário não está logado.");
      toast({
        title: "Estamos em Contrução :)",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredData, currentPage, rowsPerPage]);

  // Adiciona nova task a lista de tasks
  useEffect(() => {
    if (isAddNewTask || allTasks) {
      const tasksByUser = filterByEmail(allTasks, loggedUser?.email || '')
      dispatch(setFilteredData(tasksByUser))
    }
  }, [isAddNewTask, allTasks]);

  return (
    <>
      {!isLoading && <Box overflowY="auto" maxH="100%" w="100%" p={{ base: 2, md: 4 }}>
        <Table variant="simple" w="100%">
          <Tbody>
            {/* {filteredData.length > 0 && filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((item, index) => ( */}
            {filteredData.map((item, index) => (
              <Tr bg={item.status === 'completed' ? '#237527' : item.status === 'pending' ? '#8a3227' : '#676e67'} key={index}>
                <Td>
                  {/* Inputs de edição */}
                  <Flex align="center" direction="row" flex="1" wrap="wrap" justify='flex-start'>
                    {editItemId === item.idTask ? (
                      <>
                        <Input
                          value={editTitle}
                          onChange={(e) => handleChange('editTitle', e.target.value)}
                          mb={2}
                          placeholder="title"
                        />
                        <Input
                          value={editDescription}
                          onChange={(e) => handleChange('editDescription', e.target.value)}
                          mb={2}
                          placeholder="description"
                        />
                        <Button onClick={handleSave} mt={2} mb={2}>Salvar</Button>
                        <Button onClick={() => dispatch(setEditItemId(''))}>
                          Cancelar
                        </Button>
                      </>
                    ) : (
                      <>
                        {/* Text do nome da rádio e país */}
                        <Flex direction="column" flex='1' alignItems='left'>
                          <Text
                            fontSize={fontSize}
                            fontWeight="600"
                            color='#000000'
                            lineHeight="29.05px"
                            textAlign="left"
                            textDecoration={item.status === 'completed' ? 'line-through' : 'none'}
                          >
                            {truncateText(item.title, maxNameLength)}
                          </Text>
                          <Text
                            fontSize="xs"
                            fontWeight="400"
                            color='#000000'
                            lineHeight="19.36px"
                            textAlign="left"
                            textDecoration={item.status === '2' ? 'line-through' : 'none'}                          >
                            {truncateText(item.description, maxNameLength)}
                          </Text>
                        </Flex>
                      </>
                    )}
                  </Flex>
                </Td>

                <Td>
                  <Flex
                    direction="row"
                    align="center"
                    justify='flex-end'
                    gap={2}
                    overflow="visible" // Garante que o conteúdo não seja cortado e evita barra de rolagem
                  > <>
                      {editItemId !== item.idTask && (
                        <MotionMolecule whileHover={{ scale: 1.2 }}>
                          <IconButton
                            aria-label="Edit"
                            icon={<EditIcon color={textColor} />}
                            onClick={() => handleEditTask(item)}
                            bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
                            _hover={{ bg: colorMode === 'dark' ? 'gray.500' : 'gray.300' }}
                            size="sm"
                          />
                        </MotionMolecule>
                      )}
                      <MotionMolecule whileHover={{ scale: 1.2 }}>
                        <IconButton
                          aria-label="Delete"
                          icon={<DeleteIcon color={colors.red[400]} />}
                          onClick={() => handleDelete(item.idTask ?? '')}
                          bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
                          _hover={{ bg: colorMode === 'dark' ? 'gray.500' : 'gray.300' }}
                          size="sm"
                        />
                      </MotionMolecule>
                      <Box overflowX={{ base: 'auto', md: 'visible' }} p={2}>
                        <RadioGroup value={item.status === 'completed' ? '2' : item.status === 'pending' ? '1' : ''} onChange={((value) => handleChangeRadioButton(value, item.idTask ?? ''))}>
                          <Stack
                            spacing={{ base: 3, md: 5 }} // Ajusta o espaçamento para dispositivos móveis e desktops
                            direction={{ base: 'row', md: 'row' }} // Mantém o alinhamento em linha em todos os tamanhos de tela
                            overflowX='auto' // Adiciona rolagem horizontal se necessário
                            width='100%' // Garante que a Stack ocupe toda a largura disponível
                          >
                            <Radio colorScheme='red' value='1'>
                              Pendente
                            </Radio>
                            <Radio colorScheme='green' value='2'>
                              Concluída
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </Box>

                    </>

                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <PaginationControls />
      </Box>}
      {isLoading && <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />}
    </>

  );
};

export default FavoriteAreaOrganism;
