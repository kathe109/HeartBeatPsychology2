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
import RupturaAmorosaPage from './pages/RupturaAmorosaPage';
import BajaAutoestimaPage from './pages/BajaAutoestimaPage';
import BajaAutoestimaPage2 from './pages/BajaAutoestimaPage-2';
import BajaAutoestimaPage3 from './pages/BajaAutoestimaPage-3';
import PerdiAMiMejorAmigoPage from './pages/PerdiAMiMejorAmigoPage';
import PerdiAMiMejorAmigoPage2 from './pages/PerdiAMiMejorAmigoPage-2.jsx';
import RupturaAmorosaPage2 from './pages/RupturaAmorosaPage-2';
import RupturaAmorosaPage3 from './pages/RupturaAmorosaPage-3';
import OtrosPage from './pages/OtrosPage';

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
                    <Route path="/about" element={<AboutUs />} />
                </Route>
                {/* Rutas sin Navbar o Footer */}
                <Route path="/sessions" element={<Sessions />} />
                <Route path="/categories/:categoryId" element={<CategoryDetailPage />} />
                <Route path="/categories/ruptura-amorosa" element={<RupturaAmorosaPage />} />
                <Route path="/categories/ruptura-amorosa-2" element={<RupturaAmorosaPage2 />} />
                <Route path="/categories/ruptura-amorosa-3" element={<RupturaAmorosaPage3 />} />
                <Route path="/categories/baja-autoestima" element={<BajaAutoestimaPage />} />
                <Route path="/categories/baja-autoestima-2" element={<BajaAutoestimaPage2 />} />
                <Route path="/categories/baja-autoestima-3" element={<BajaAutoestimaPage3 />} />
                <Route path="/categories/perdi-a-mi-mejor-amigo" element={<PerdiAMiMejorAmigoPage />} />
                <Route path="/categories/perdi-a-mi-mejor-amigo-2" element={<PerdiAMiMejorAmigoPage2 />} />
                <Route path="/categories/otros" element={<OtrosPage />} />
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
