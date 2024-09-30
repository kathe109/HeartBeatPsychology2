import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase"; // Asegúrate de tener la referencia de autenticación correcta

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false); // Actualiza el estado para reflejar que el usuario ya no está logueado
      navigate("/"); // Redirigir al inicio o página de login
    } catch (error) {
      console.error("Logout Error:", error);
      alert("Error al cerrar sesión");
    }
  };

  return (
    <AppBar className="navbar" position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Heart Beat Psychology
        </Typography>
        {!isLoggedIn ? (
          <>
            <Button color="inherit" onClick={() => navigate("/home")}>Inicio</Button>
            <Button color="inherit" onClick={() => navigate("/about")}>Sobre nosotros</Button>
            <Button color="inherit" onClick={() => navigate("/sessions")}>Sesiones</Button>
            <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
          </>
        ) : (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
