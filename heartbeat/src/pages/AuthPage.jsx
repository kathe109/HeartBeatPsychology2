import React, { useState } from 'react';
import AuthForm from '../components/AuthForm'; // Asegúrate de que la ruta al componente es correcta
import '../styles/styles.css'; // Asegúrate de que la ruta al CSS es correcta

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const onLogin = (username, password) => {
        console.log('Intento de login:', username, password);
        // Aquí iría la lógica para verificar las credenciales
        // Por ejemplo, podrías hacer una petición a un API
    };

    const onRegister = (username, password) => {
        console.log('Intento de registro:', username, password);
        // Aquí iría la lógica para registrar al usuario
        // Por ejemplo, podrías hacer una petición a un API
    };

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-background">
            <div className="auth-container">
                <AuthForm className='boton' mode={isLogin ? 'login' : 'register'} onLogin={onLogin} onRegister={onRegister} />
                <button onClick={toggleAuthMode} className="toggle-button">
                    {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
                </button>
            </div>
        </div>
    );
};

export default AuthPage;
