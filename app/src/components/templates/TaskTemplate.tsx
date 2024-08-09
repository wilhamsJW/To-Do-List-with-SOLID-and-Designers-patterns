'use client'

import { Flex, Box, useTheme, useColorMode, Divider } from '@chakra-ui/react';
import MenuComponent from '../organisms/Menu';
import AddNewTAsk from '../organisms/AddNewTAsk';
import CustomHeadingProps from '../atoms/HeadingAtom'
import HeaderFavoritesOrganism from '../organisms/HeaderFavoritesOrganism'
import { MdFavorite } from "react-icons/md";
import AddMusicDropDrow from '../molecules/AddMusicDropDrow'
import { MenuMobileDrawer } from '../../../public/index'
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const TaskTemplate: React.FC = () => {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const sidebarBg = theme.colors[colorMode].accent;
  const mainBg = theme.colors[colorMode].primary;
  const textColor = theme.colors[colorMode].secondary;

  const { loggedUserName } = useSelector((state: RootState) => ({
    loggedUserName: state.register.loggedUser?.displayName
  }));

  return (
    <Flex h="100vh" direction="row">
      {/* Box pai apenas visível em resoluções maiores que 'md' */}
      <Box
        w={{ base: '100%', md: '40.1%' }}
        height="100vh"
        p={4}
        display={{ base: 'none', md: 'block' }} // Ocultar em resoluções menores
        bg={sidebarBg}
        overflowY="auto"
        overflow="hidden"
        position="relative"
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Flex
          color={textColor}
          align="center"
          direction="row"
          p={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          wrap="wrap" // Adiciona wrap para garantir que o box inferior vá para a linha seguinte se necessário
        >
          <Box mr={2}>
            Adicione uma task
          </Box>
          <MdFavorite size={24} style={{ marginRight: '0.5rem' }} />
          <Box textAlign="center" mt={3} fontSize="xs">
            Organize seu dia de uma forma que não se esqueça de mais nada
          </Box>
        </Flex>
        <Divider />

        {/** Área para adicionar nova task */}
        <Box
          position="relative"
          top={0}
          left={4}
          zIndex="0"
          w="full"
          maxW="calc(100% - 16px)"
          maxH="calc(100vh - 64px)"
          bg={sidebarBg}
          p={4}
        >
          <AddNewTAsk />
        </Box>
      </Box>

      <Box w={{ base: '100%', md: '80.9%' }} p={4} bg={mainBg}>
        <Flex direction="column" h="100%" bg={mainBg} color={textColor}>

          <Flex
            align="center"
            direction="column" // Alinha os itens verticalmente
            p={1}
            display="flex"
            justifyContent="center" // Centraliza os itens horizontalmente
            alignItems="center"    // Alinha os itens verticalmente no centro
          >
            <CustomHeadingProps
              text={'To Do List - BTG'}
              color={textColor}
              textAlign='center'
              pt='1rem'
            />
            
            {/* Novo item adicionado aqui */}
            <Flex
              direction="row"
              align="center"
              p={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box mt={3} fontSize="sm" color={textColor}>
                Bem vindo (a)!,
              </Box>
              <Box mt={3} fontSize="sm" color="highlightColor" ml={2}>
                {loggedUserName}
              </Box>
            </Flex>
          </Flex>
          <Box
            position="relative"
            maxH="82vh"
            borderRadius={10}
            overflow={'hidden'}
          >{/* Menu Component visível em resoluções menores */}
            <Box

              position="fixed"
              top={4}
              right={4}
              zIndex="modal"
            >
              <MenuComponent />
            </Box>
            <HeaderFavoritesOrganism />
            {/* Componente suspenso no final da página */}
            <Box
              position="fixed"
              bottom={2}
              right={4}
              zIndex="overlay" // Garante que o componente fique acima de outros conteúdos
            >
              <AddMusicDropDrow icon={<MenuMobileDrawer color={textColor} />} />
            </Box>
          </Box>
        </Flex>
      </Box> {/** Fim lista de estações */}
    </Flex>
  );
};

export default TaskTemplate;
