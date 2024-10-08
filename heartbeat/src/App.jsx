import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import AboutUs from './pages/About';
import Sessions from './pages/Sessions';
import CategoriesPage from './pages/CategoriesPage';
import CategoryDetailPage from './pages/CategoryDetailPage';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                {/* Ruta contenedora con Navbar y Footer para páginas seleccionadas */}
                <Route element={<MainLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
                    <Route path="/" element={<AuthForm setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/login" element={<AuthForm setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                </Route>
                {/* Rutas sin Navbar o Footer */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/sessions" element={<Sessions />} />
                <Route path="/categories/:categoryId" element={<CategoryDetailPage />} />
            </Routes>
        </Router>
    );
};

// Componente de layout principal que incluye Navbar y Footer
function MainLayout({ isLoggedIn, setIsLoggedIn }) {
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Container component="main" maxWidth="xs">
                <Outlet /> {/* Este Outlet renderizará los componentes de las rutas hijas */}
            </Container>
            <Footer />
        </>
    );
}

export default App;
