import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, useColorMode, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'; 
import { CiLogout } from 'react-icons/ci';
import { auth } from '../../lib/firebase';
import { useRouter } from 'next/navigation';
import DrawerMobileMolecule from '../molecules/DrawerMobileMolecule';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setIsLoading } from '../../store/slices/registerSlice'

const MenuComponent: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state: RootState) => ({
    isLoading: state.register.isLoading
  }));

  const handleLogout = async () => {
    try {
      dispatch(setIsLoading(true))
      await auth.signOut();
      router.push('/');
      dispatch(setIsLoading(false))
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }  finally {
      dispatch(setIsLoading(false))
    }
  };

  const iconColor = colorMode === 'light' ? '#2F2F33' : '#ffffff';

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon color={iconColor} />}
        variant='outline'
      />
      <MenuList>
        <MenuItem onClick={toggleColorMode} color={iconColor}>
          {colorMode === 'light' ? <MoonIcon color={iconColor} /> : <SunIcon color={iconColor} />}
          <span style={{ marginLeft: '8px' }}>{colorMode === 'light' ? 'Light' : 'Dark'}</span>
        </MenuItem>
        <MenuItem onClick={handleLogout} color={iconColor}>
          <CiLogout fontSize="1.2rem" color={iconColor} />
          <span style={{ marginLeft: '8px' }}></span>
          Sair
        </MenuItem>
      </MenuList>
      {/* Drawer para Favorites */}
      <DrawerMobileMolecule isOpen={isOpen} onClose={onClose} />
    </Menu>
  );
};

export default MenuComponent;