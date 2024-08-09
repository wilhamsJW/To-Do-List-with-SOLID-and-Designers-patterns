import { Box, Flex, Button, FormControl, FormLabel, Input, Textarea, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import { useDisclosure } from '@chakra-ui/react';
import { AddNotIcon } from '../../../public/index';
import { DataNote } from '../../interface/index';
import useTaskForm from '../../hooks/useTaskForm';

const AddNewTAsk: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { control, handleSubmit, reset } = useForm<DataNote>();
  const { onSubmit } = useTaskForm(reset, onClose);

  return (
    <Box
      position="relative"
      maxH="80vh"
      overflowY="auto"
      p={4}
    >
      <Flex
        bg="gray.300"
        color="black"
        borderRadius="0.5rem"
        boxShadow="md"
        _hover={{ bg: "#858594" }}
        p={4}
        align="center"
        justify="center"
        direction="column"
        m="0 auto"
        onClick={onOpen}
        cursor="pointer"
      >
        <AddNotIcon />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Tarefa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="title" mb={3}>
              <FormLabel>Título</FormLabel>
              <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field }) => <Input {...field} placeholder="Título da tarefa" />}
              />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Descrição</FormLabel>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => <Textarea {...field} placeholder="Descrição da tarefa" />}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit(onSubmit)}>
              Adicionar
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddNewTAsk;
