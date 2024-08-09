import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/index';
import { setRegistering, setAuthenticatedUser, setNewAuthenticatedUser } from '../store/slices/registerSlice';
import { useRouter } from 'next/navigation';
import { Action } from 'redux';

type AuthenticatedUserType = (payload: boolean) => Action;
type NewAuthenticatedType = (payload: boolean) => Action;

export function useLogin() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { isAuthenticated, isRegistering, isNewAuthenticated, isLoading } = useSelector((state: RootState) => ({
        isAuthenticated: state.register.isAuthenticated,
        isRegistering: state.register.isRegistering,
        isNewAuthenticated: state.register.isNewAuthenticated,
        isLoading: state.register.isLoading
    }));

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handleAuthentication = (
        setAuthenticatedUser: AuthenticatedUserType,
        setNewAuthenticatedUser: NewAuthenticatedType
    ) => {
        router.push('/task-btg');
        dispatch(setAuthenticatedUser(false));
        dispatch(setNewAuthenticatedUser(false));
    };

    useEffect(() => {
        if (isAuthenticated) {
            handleAuthentication(setAuthenticatedUser, setNewAuthenticatedUser);
        }
    }, [isAuthenticated, router, dispatch]);

    useEffect(() => {
        if (isNewAuthenticated) {
            handleAuthentication(setAuthenticatedUser, setNewAuthenticatedUser);
        }
    }, [isNewAuthenticated, router, dispatch]);

    const resetFields = () => {
        setName('');
        setEmail('');
        setPassword('');
        setRememberMe(false);
    };

    const handleRegisterClick = () => {
        dispatch(setRegistering(!isRegistering));
        resetFields();
    };

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        rememberMe,
        setRememberMe,
        loading,
        setLoading,
        handleSubmit,
        isRegistering,
        handleRegisterClick,
        isLoading,
        isAuthenticated,
        isNewAuthenticated
    };
}
