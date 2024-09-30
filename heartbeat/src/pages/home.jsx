import React from 'react';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import Footer from './components/Footer';
import { Container } from '@mui/material';

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Container component="main" maxWidth="xs">
                <AuthForm />
            </Container>
            <Footer />
        </div>
    );
};

export default App;
