import React from 'react';
import { Divider, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Flex, Text, useTheme, useColorMode, } from '@chakra-ui/react';
import AddNewTAsk from '../organisms/AddNewTAsk'
import { MdFavorite } from "react-icons/md";

interface SideBarRadioMoleculeProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerMobileMolecule: React.FC<SideBarRadioMoleculeProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const textColor = theme.colors[colorMode].secondary;

  return (
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent color={textColor}>
        <Flex align="center" direction="row" p={1}>
          <DrawerHeader >
            Adicionar
          </DrawerHeader>
          <MdFavorite size={24} style={{ marginRight: '0.5rem', marginLeft: '-0.9rem' }} />
        </Flex>
        <Flex align="center" p={4}>
          <Text fontSize="sm" letterSpacing='0.1rem'>
            Organize seu dia de uma forma que não se esqueça de mais nada
          </Text>
        </Flex>

        <Divider />
        <DrawerBody>
          <AddNewTAsk />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMobileMolecule;
