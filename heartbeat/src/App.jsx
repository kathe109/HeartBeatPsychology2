import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthForm from './components/AuthForm';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import AboutUs from './pages/About';  
import Sessions from './pages/Sessions'; 
import CategoriesPage from './components/CategoriesPage';


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
    return (
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Container component="main" maxWidth="xs">
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/login" element={<AuthForm setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/categories" element={<CategoriesPage/>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    );
  };
  
  export default App;