import { Heading, Divider, Spinner, useDisclosure } from '@chakra-ui/react';
import SocialLoginButtons from '../molecules/SocialLoginButtonsMolecule';
import HeadingAtom from '../atoms/HeadingAtom';
import MotionMolecule from '../molecules/MotionMolecule';
import LoginForm from '../molecules/LoginFormMolecule';
import ModalMolecule from '../molecules/ModalMolecule';
import { useLogin } from '../../services/loginAuth';

export default function LoginBox() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    loading,
    handleSubmit,
    isRegistering,
    handleRegisterClick,
    isLoading,
    isAuthenticated,
    isNewAuthenticated
  } = useLogin();

  return (
    <>
      <Heading as="h2" size="xl" mb={6} textAlign="center" color="#FFFFFF">
        {isRegistering ? 'Cadastro' : 'Login'}
      </Heading>
      {!isRegistering && <SocialLoginButtons />}
      <Divider borderColor="gray.400" my={7} />
      {!isRegistering && (
        <>
          <HeadingAtom mt="1" size="md" textAlign="center" color="#FFFFFF">
            <MotionMolecule>
              <Heading as="span" size="md" color="#FFFFFF" textDecoration="none">
                Não tem uma conta?{' '}
              </Heading>
              <br />
              <Heading
                as="span"
                size="md"
                color="#FFFFFF"
                textDecoration="underline"
                cursor="pointer"
                onClick={handleRegisterClick}
              >
                Inscrever-se
              </Heading>
            </MotionMolecule>
          </HeadingAtom>
          <Divider borderColor="gray.400" my={7} />
        </>
      )}
      {!isLoading ? (
        <LoginForm
          name={name}
          email={email}
          password={password}
          rememberMe={rememberMe}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setRememberMe={setRememberMe}
          handleSubmit={handleSubmit}
          loading={loading}
          isRegistering={isRegistering}
        />
      ) : (
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      )}
      {!isRegistering && (
        <HeadingAtom
          onClick={onOpen}
          mt="4"
          text="Esqueceu sua senha?"
          size="xs"
          textAlign="center"
          color="teal.100"
          textDecoration="underline"
          cursor="pointer"
        />
      )}
      {!isRegistering && <Divider borderColor="gray.400" />}
      {isRegistering && (
        <HeadingAtom mt="10" size="md" textAlign="center" color="#FFFFFF">
          <MotionMolecule>
            <Heading
              as="span"
              size="md"
              color="#FFFFFF"
              textDecoration="none"
              cursor="pointer"
              onClick={handleRegisterClick}
            >
              Voltar ao Login
            </Heading>
          </MotionMolecule>
        </HeadingAtom>
      )}
      <ModalMolecule isOpen={isOpen} onClose={onClose} />
    </>
  );
}
